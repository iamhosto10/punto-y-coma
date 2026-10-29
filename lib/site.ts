const mapsSearch = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, Valledupar`)}`;

export const site = {
  name: "Punto & Coma",
  menuUrl: "https://vinny.vinapp.co/?company=puntoycoma?idPoint%3D1132",
  instagram: {
    url: "https://www.instagram.com/puntoycoma.vpar/",
    handle: "@puntoycoma.vpar",
  },
  // PENDIENTE: reemplazar estos espacios por los datos reales de contacto
  contact: {
    whatsappDisplay: "+57 000 000 0000",
    whatsappUrl: "https://wa.me/570000000000",
    email: "correo@ejemplo.com",
  },
};

export const favoritos = [
  {
    nombre: "Salchipapa PYC",
    descripcion: "La firma de la casa, cargada a tu gusto.",
    precio: "Desde $28.000",
    tag: "La firma de la casa",
  },
  {
    nombre: "Salchipapa Salvaje",
    descripcion: "La más cargada del menú, hasta para 4 personas.",
    precio: "Desde $27.000",
    tag: "Para compartir",
  },
  {
    nombre: "Perro Suizo Mexicano",
    descripcion: "Perro caliente con un toque picante.",
    precio: "$21.000",
  },
  {
    nombre: "Hamburguesa Mediterránea",
    descripcion: "La hamburguesa premium de la casa.",
    precio: "$29.000",
  },
];

export const sedes = [
  {
    nombre: "Mayales",
    direccion: "Mz E1 Casa 14B, Urb. Colombia",
    // PENDIENTE: horario y teléfono reales de esta sede
    horario: "0:00 pm – 0:00 pm",
    telefono: "+57 000 000 0000",
    mapa: mapsSearch("Mz E1 Casa 14B Urb Colombia"),
  },
  {
    nombre: "Norte",
    direccion: "Cll 9 # 17-52, San Joaquín",
    horario: "5:00 pm – 10:30 pm",
    // PENDIENTE: teléfono real de esta sede
    telefono: "+57 000 000 0000",
    mapa: mapsSearch("Cll 9 # 17-52 San Joaquín"),
  },
];

export const cintaTexto = [
  "Salchipapas",
  "Perros",
  "Hamburguesas",
  "Asados",
  "Pide a domicilio",
];
