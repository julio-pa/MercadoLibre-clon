const categorys = [
  {
    name: "Celulares y Telefonía",
    icon: "phone_android"
  },
  {
    name: "Computación",
    icon: "computer"
  },
  {
    name: "Construcción",
    icon: "engineering"
  },
  {
    name: "Coleccionables",
    icon: "album"
  },
  {
    name: "Consolas y Videojuegos",
    icon: "stadia_controller"
  },
  {
    name: "Camaras y Accesorios",
    icon: "photo_camera"
  },
];

const filtros = [
  {
    title: 'Ubicación',
    items: [
      {
        name: 'Azuay',
        cantidad: Math.floor(Math.random() * 100)
      },
      {
        name: 'Quito',
        cantidad: Math.floor(Math.random() * 100)
      },
      {
        name: 'Pichincha',
        cantidad: Math.floor(Math.random() * 100)
      },
    ]
  },
  {
    title: 'Condición',
    items: [
      {
        name: 'Nuevo',
        cantidad: Math.floor(Math.random() * 100)
      },
      {
        name: 'Usado',
        cantidad: Math.floor(Math.random() * 100)
      },
      {
        name: 'Reacondicionado',
        cantidad: Math.floor(Math.random() * 100)
      },
    ]
  },
  {
    title: 'Precio',
    items: [
      {
        name: 'Hasta U$S 100',
        cantidad: Math.floor(Math.random() * 100)
      },
      {
        name: 'U$S 100',
        cantidad: Math.floor(Math.random() * 100)
      },
      {
        name: 'Más de U$S 300',
        cantidad: Math.floor(Math.random() * 100)
      },
    ]
  },
]

export { categorys, filtros };