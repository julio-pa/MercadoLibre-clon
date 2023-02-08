const categorys = [
  {
    name: "celulares",
    icon: "phone_android"
  },
  {
    name: "computación",
    icon: "computer"
  },
  {
    name: "ropa",
    icon: "laundry"
  },
  {
    name: "coleccionables",
    icon: "album"
  },
  {
    name: "consolas",
    icon: "stadia_controller"
  },
  {
    name: "belleza",
    icon: "self_care"
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