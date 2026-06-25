/*
  Datos del negocio en UN SOLO lugar.
  Para cambiar el teléfono, redes o textos, edita SOLO este archivo.
*/

export const site = {
  nombre: "Leiter & Konig Pet's",
  dueno: "Hernán Parra",
  zona: "Sangolquí · Cumbayá · Valle de los Chillos",
  slogan: "La tienda para consentidos",

  // WhatsApp: número en formato internacional, SIN el 0 inicial y con 593 (Ecuador)
  // 0988024420  ->  593988024420
  whatsappNumero: "593988024420",
  whatsappMostrar: "098 802 4420",
  // Mensaje que se escribe solo cuando el cliente abre el chat
  whatsappMensaje:
    "Hola Hernán 👋 Vi la página de Leiter & Konig Pet's y quiero información sobre sus productos para mi perro.",

  // Redes sociales
  facebook: "https://www.facebook.com/Leiterkoenig/", // confirmar con Hernán que es la suya
  instagram: "", // pegar link cuando lo tengamos
  tiktok: "https://www.tiktok.com/@plazajando",
};

// Construye el enlace de WhatsApp con el mensaje ya escrito
export function whatsappLink(mensaje: string = site.whatsappMensaje): string {
  return `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent(mensaje)}`;
}
