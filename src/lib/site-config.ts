/** Official contact channels; leave unknown details unset rather than inventing them. */
export const siteConfig = {
  whatsappNumber: "5511944966280",
  instagramUrl: "https://www.instagram.com/ativobartender/",
  threadsUrl: "https://www.threads.com/@ativobartender?xmt=AQG0E9QEXkI69DReEdbRDgfRavChIslqzqfYXdaHWqxhxfs",
  email: "",
  serviceArea: "",
};

export const whatsappMessage = "Olá! Conheci a Ativo Bartender pelo site e gostaria de solicitar um orçamento de bartender para eventos. Podem me ajudar?";
export const whatsappNumberDigits = siteConfig.whatsappNumber.replace(/\D/g, "");
export const whatsappUrl = whatsappNumberDigits
  ? `https://wa.me/${whatsappNumberDigits}?text=${encodeURIComponent(whatsappMessage)}`
  : "#contato";
