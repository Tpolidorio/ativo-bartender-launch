/** Replace these details when the business shares its official contact channels. */
export const siteConfig = {
  whatsappNumber: "",
  instagramUrl: "",
  email: "",
  serviceArea: "",
};

export const whatsappMessage = "Olá, conheci a Ativo Bartender pelo site e gostaria de solicitar um orçamento para meu evento.";
export const whatsappUrl = siteConfig.whatsappNumber
  ? `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`
  : "#contato";
