/*
  Catálogo de productos por categoría (para el acordeón de la sección Productos).
  Para agregar/quitar fotos: edita el arreglo "fotos" de cada categoría.
  Las imágenes viven en public/images/productos/<carpeta>/
*/
export type Categoria = {
  id: string;
  emoji: string;
  nombre: string;
  descripcion: string;
  carpeta: string;
  fotos: string[]; // nombres de archivo dentro de la carpeta
};

export const categorias: Categoria[] = [
  {
    id: "control-arrastre",
    emoji: "🦮",
    nombre: "Arnés de control y arrastre",
    descripcion:
      "Pasea sin tirones. Reparte la fuerza en el pecho, no en el cuello, para que tú lleves el control del paseo sin lastimar a tu perro. Ideal para enseñarlo a caminar a tu lado.",
    carpeta: "arnes-control-arrastre",
    fotos: ["poodle-morado.jpg", "perrito-azul.jpg", "producto-rojo.jpg"],
  },
  {
    id: "deportivo",
    emoji: "🏃",
    nombre: "Arnés deportivo",
    descripcion:
      "Para perros que no paran. Acolchado y reflectivo para que se vea de noche, cómodo y firme para correr, jugar y pasear. Color y seguridad en uno solo.",
    carpeta: "arnes-deportivo",
    fotos: ["leiter-naranja.jpg", "sasha-rojo.jpg", "placa-nombre.jpg"],
  },
  {
    id: "tactico",
    emoji: "🎖️",
    nombre: "Arnés táctico",
    descripcion:
      "Fuerte como tu perro. Estilo militar con agarradera superior, paneles para parches y ajuste firme. Resistente para razas grandes y activas, y con un estilo que se nota.",
    carpeta: "arnes-tactico",
    fotos: ["mily.jpg", "pitbull.jpg", "falco.jpg"],
  },
  {
    id: "con-placa",
    emoji: "🏷️",
    nombre: "Arnés con placa",
    descripcion:
      "Estilo e identificación en uno. Arnés resistente con una placa de metal grabada con el nombre de tu perro. Se ve increíble y, si se suelta, todos saben quién es.",
    carpeta: "arnes-con-placa",
    fotos: ["lupita.jpg", "pastor-0417.jpg", "lu.jpg"],
  },
  {
    id: "montana",
    emoji: "⛰️",
    nombre: "Arnés para montaña",
    descripcion:
      "Listo para la aventura. Robusto y con agarradera para ayudar a tu perro en subidas y terrenos difíciles. Acolchado y firme para senderos y caminatas largas.",
    carpeta: "arnes-montana",
    fotos: ["boxer-agarradera.jpg", "doberman.jpg", "falco-camo.jpg"],
  },
  {
    id: "montana-bolsillo",
    emoji: "🎒",
    nombre: "Arnés para montaña con bolsillo",
    descripcion:
      "Que tu perro lleve su propio equipo. Arnés de montaña con alforjas para cargar su agua, premios o lo necesario. Aventura cómoda y manos libres para ti.",
    carpeta: "arnes-montana-bolsillo",
    fotos: ["coonhound-alforja.jpg", "bolsillos.jpg", "alforja-camo.jpg"],
  },
  {
    id: "placas-fotografia",
    emoji: "📸",
    nombre: "Placas con fotografía",
    descripcion:
      "La foto de tu perro, siempre con él. Una plaquita con la foto real de tu mascota impresa a todo color y su nombre. En varios diseños, resistente y lista para colgar del collar.",
    carpeta: "placas-con-fotografia",
    fotos: ["boris.jpg", "jack.jpg", "konig.jpg"],
  },
  {
    id: "placas-identificacion",
    emoji: "🏷️",
    nombre: "Placas de identificación",
    descripcion:
      "El nombre de tu perro, a la vista. Placas con el nombre de tu mascota en distintos materiales, formas y colores (desde diseños divertidos hasta metal grabado con su raza). Si algún día se pierde, sabrán cómo regresarlo a casa.",
    carpeta: "placas-general",
    fotos: ["ronnie.jpg", "raza-metal.jpg", "patita.jpg"],
  },
  {
    id: "placas-anticaidas",
    emoji: "🛡️",
    nombre: "Placas anticaídas",
    descripcion:
      "La placa que nunca se pierde. Va fija y plana sobre el collar (no cuelga), con el nombre y tu teléfono. No se engancha ni se cae: ideal para perros activos.",
    carpeta: "placas-anticaidas",
    fotos: ["zeus.jpg", "cleo.jpg", "luna.jpg"],
  },
];
