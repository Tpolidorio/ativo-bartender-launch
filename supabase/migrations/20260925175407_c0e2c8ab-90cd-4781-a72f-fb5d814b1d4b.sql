CREATE TABLE public.orcamentos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL CHECK (char_length(nome) BETWEEN 2 AND 100),
  telefone text NOT NULL CHECK (char_length(telefone) BETWEEN 8 AND 30),
  email text NOT NULL CHECK (char_length(email) <= 255),
  tipo_evento text NOT NULL CHECK (char_length(tipo_evento) <= 80),
  data_evento date,
  cidade text NOT NULL CHECK (char_length(cidade) BETWEEN 2 AND 120),
  quantidade_convidados integer CHECK (quantidade_convidados > 0 AND quantidade_convidados <= 100000),
  tipo_servico text NOT NULL CHECK (char_length(tipo_servico) <= 100),
  observacoes text CHECK (char_length(observacoes) <= 2000),
  status text NOT NULL DEFAULT 'novo' CHECK (status IN ('novo', 'em_contato', 'concluido')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.orcamentos TO service_role;
ALTER TABLE public.orcamentos ENABLE ROW LEVEL SECURITY;
CREATE OR REPLACE FUNCTION public.update_orcamentos_updated_at() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;
CREATE TRIGGER update_orcamentos_updated_at BEFORE UPDATE ON public.orcamentos FOR EACH ROW EXECUTE FUNCTION public.update_orcamentos_updated_at();