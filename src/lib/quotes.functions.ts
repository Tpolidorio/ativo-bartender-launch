import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const quoteSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome.").max(100),
  telefone: z.string().trim().regex(/^[+()\d\s.-]{8,30}$/, "Informe um WhatsApp válido."),
  email: z.string().trim().email("Informe um e-mail válido.").max(255),
  tipo_evento: z.enum(["Casamento", "Aniversário", "Formatura", "Corporativo", "Debutante", "Confraternização", "Festa particular", "Outro"]),
  data_evento: z.union([z.literal(""), z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Informe uma data válida.")]).optional(),
  cidade: z.string().trim().min(2, "Informe a cidade do evento.").max(120),
  quantidade_convidados: z.number().int().positive().max(100000).optional(),
  tipo_servico: z.string().trim().min(1, "Selecione o serviço desejado.").max(100),
  observacoes: z.string().trim().max(2000).optional(),
  website: z.string().max(0).optional(),
});

export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((input) => quoteSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website) throw new Error("Solicitação inválida.");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { website: _website, ...fields } = data;
    const { error } = await supabaseAdmin.from("orcamentos").insert({
      ...fields,
      data_evento: fields.data_evento || null,
      quantidade_convidados: fields.quantidade_convidados ?? null,
      observacoes: fields.observacoes ?? null,
    });
    if (error) throw new Error("Não foi possível enviar seu pedido. Tente novamente.");
    return { success: true };
  });
