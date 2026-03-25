export type SliderVariant = "spotlight" | "sidebar" | "mosaic";

export type ProductSlide = {
  eyebrow: string;
  title: string;
  description: string;
  placeholder: string;
  note: string;
  image?: string;
  tone?: "brand" | "ink" | "soft";
};

export type BusinessLine = {
  slug: string;
  label: string;
  kicker: string;
  summary: string;
  introduction: string;
  detail: string;
  heroAsset: string;
  heroAlt: string;
  sliderVariant: SliderVariant;
  applications: string[];
  deliverables: string[];
  markets: string[];
  slides: ProductSlide[];
};

export type ClientItem = {
  name: string;
  logo?: string;
  alt?: string;
  href?: string;
};

export type ClientCategory = {
  slug: string;
  label: string;
  description: string;
  clients: ClientItem[];
};

export const primaryNavigation = [
  { href: "/", label: "Inicio" },
  { href: "/empresa", label: "Empresa" },
  { href: "/lineas-de-negocio", label: "Lineas de negocio" },
  { href: "/clientes", label: "Clientes" },
  { href: "/contacto", label: "Contacto" }
] as const;

export const contactDetails = {
  email: "hk@hkargentina.com",
  phone: "+54 (11) 4312-0578",
  phoneHref: "tel:+541143120578",
  address: "Av. del Libertador 184, Buenos Aires",
  mapUrl: "https://maps.google.com/?q=Av.%20del%20Libertador%20184%2C%20Buenos%20Aires"
} as const;

export const siteImagery = {
  homeHero: {
    image: "/stock/control-room-main.jpg",
    alt: "Centro de monitoreo con operador, videowall y tableros de control"
  },
  companyHero: {
    image: "/stock/security-ops-room.jpg",
    alt: "Sala de operaciones y monitoreo de seguridad con multiples pantallas"
  },
  contactHero: {
    image: "/stock/business-consulting.jpg",
    alt: "Reunion ejecutiva para definir una estrategia de seguridad"
  }
} as const;

// To add a client later, append an item like:
// { name: "Nombre del cliente", logo: "/client-logos/nombre-del-logo.svg", alt: "Logo de Nombre del cliente" }
export const clientCategories: ClientCategory[] = [
  {
    slug: "fuerzas-federales",
    label: "Fuerzas federales",
    description:
      "Organismos de seguridad federal y fuerzas con operacion en entornos institucionales y de control.",
    clients: [
      {
        name: "Gendarmeria Nacional Argentina",
        logo: "/client-logos/gendarmeria-nacional-argentina.svg",
        alt: "Logo de Gendarmeria Nacional Argentina"
      },
      {
        name: "Policia Federal Argentina",
        logo: "/client-logos/policia-federal-argentina.svg",
        alt: "Logo de Policia Federal Argentina"
      },
      {
        name: "Prefectura Naval Argentina",
        logo: "/client-logos/prefectura-naval-argentina.svg",
        alt: "Logo de Prefectura Naval Argentina"
      },
      {
        name: "Policia de Seguridad Aeroportuaria",
        logo: "/client-logos/psa.png",
        alt: "Logo de Policia de Seguridad Aeroportuaria"
      }
    ]
  },
  {
    slug: "entes-gubernamentales",
    label: "Entes gubernamentales",
    description:
      "Ministerios, agencias, organismos de gestion y dependencias estatales con requerimientos de seguridad integral.",
    clients: [
      {
        name: "Senado Argentina",
        logo: "/client-logos/senado-argentina.png",
        alt: "Logo del Senado Argentina"
      }
    ]
  },
  {
    slug: "servicios-penitenciarios",
    label: "Servicios penitenciarios",
    description:
      "Instituciones orientadas a custodia, control de accesos, monitoreo y operacion en contextos de alta sensibilidad.",
    clients: [
      {
        name: "Servicio Penitenciario Provincial San Juan",
        logo: "/client-logos/servicio-penitenciario-san-juan.jpg",
        alt: "Logo del Servicio Penitenciario Provincial San Juan"
      }
    ]
  },
  {
    slug: "clientes-privados",
    label: "Clientes privados",
    description:
      "Empresas y organizaciones privadas que requieren soluciones avanzadas de monitoreo, biometria e integracion.",
    clients: [
      {
        name: "Tetra Pak",
        logo: "/client-logos/tetra-pak.svg",
        alt: "Logo de Tetra Pak"
      },
      {
        name: "Capitan Cortes S.A.",
        logo: "/client-logos/capitan-cortes.svg",
        alt: "Logo de Capitan Cortes S.A."
      },
      {
        name: "Servitrack S.A.",
        logo: "/client-logos/servitrack.png",
        alt: "Logo de Servitrack S.A."
      },
      {
        name: "Radio Victoria",
        logo: "/client-logos/radio-victoria.png",
        alt: "Logo de Radio Victoria"
      },
      {
        name: "Aeropuertos Argentina 2000",
        logo: "/client-logos/aeropuertos-argentina-2000.png",
        alt: "Logo de Aeropuertos Argentina 2000"
      }
    ]
  },
  {
    slug: "depositos-fiscales",
    label: "Depositos fiscales",
    description:
      "Operaciones logisticas y recintos con flujos regulados, trazabilidad y exigencia de inspeccion y control.",
    clients: [
      {
        name: "Mercotuc S.A.",
        logo: "/client-logos/mercotuc.png",
        alt: "Logo de Mercotuc S.A."
      },
      {
        name: "Loinza S.A.",
        logo: "/client-logos/loinza.png",
        alt: "Logo de Loinza S.A."
      },
      {
        name: "Loginter",
        logo: "/client-logos/loginter.png",
        alt: "Logo de Loginter"
      },
      {
        name: "Terminal de Cargas Argentina",
        logo: "/client-logos/terminal-de-cargas-argentina-tca.png",
        alt: "Logo de Terminal de Cargas Argentina"
      },
      {
        name: "Terminal Puerto Rosario S.A.",
        logo: "/client-logos/terminal-puerto-rosario.png",
        alt: "Logo de Terminal Puerto Rosario S.A."
      }
    ]
  },
  {
    slug: "entes-municipales",
    label: "Entes municipales",
    description:
      "Municipios, secretarias y entes locales que necesitan infraestructura de seguridad y continuidad operativa.",
    clients: [
      {
        name: "Municipalidad Maipu",
        logo: "/client-logos/municipalidad-maipu.png",
        alt: "Logo de Municipalidad Maipu"
      },
      {
        name: "Municipio General Alvarado",
        logo: "/client-logos/municipio-general-alvarado.png",
        alt: "Logo de Municipio General Alvarado"
      },
      {
        name: "Municipalidad de General Guido",
        logo: "/client-logos/municipalidad-general-guido.png",
        alt: "Logo de Municipalidad de General Guido"
      }
    ]
  }
];

export const companyPillars = [
  "Seguridad",
  "Tecnologia de vanguardia",
  "Innovacion constante"
];

export const companyPrinciples = [
  "Seguridad como base de la libertad operativa",
  "Soluciones a medida para cada contexto",
  "Integracion de tecnologia, consultoria y ejecucion",
  "Etica, cumplimiento y trazabilidad en entornos sensibles"
];

export const companyModel = [
  {
    title: "Integrador de soluciones",
    description:
      "Disena sistemas completos, integra tecnologias, ejecuta implementaciones y mantiene la operacion con una logica de proyecto integral."
  },
  {
    title: "Proveedor tecnologico",
    description:
      "Trabaja con herramientas avanzadas para deteccion de amenazas, control de accesos, inspeccion y monitoreo."
  },
  {
    title: "Consultora especializada",
    description:
      "Participa en estudios de seguridad, analisis de riesgo, planificacion y diseno de infraestructura critica."
  }
];

export const sectors = [
  {
    title: "Sector publico y seguridad institucional",
    description:
      "Organismos gubernamentales, municipios, fuerzas de seguridad y servicios penitenciarios.",
    image: "/stock/luggage-inspection.jpg",
    alt: "Puesto de control institucional con inspeccion de equipaje"
  },
  {
    title: "Infraestructura critica y activos estrategicos",
    description:
      "Instalaciones donde la continuidad operativa y la deteccion temprana son determinantes.",
    image: "/stock/control-room-main.jpg",
    alt: "Centro de monitoreo con videowall y puestos operativos"
  },
  {
    title: "Industria, puertos y depositos fiscales",
    description:
      "Entornos con flujo logistico, exigencias regulatorias y necesidad de control de accesos y cargas.",
    image: "/stock/warehouse-inspection.jpg",
    alt: "Operacion de inspeccion y revision en entorno logistico"
  },
  {
    title: "Empresas privadas y eventos complejos",
    description:
      "Proyectos que requieren tecnologia avanzada, soporte continuo y capas de seguridad coordinadas.",
    image: "/stock/business-consulting.jpg",
    alt: "Reunion corporativa para definir un esquema de seguridad a medida"
  }
];

export const businessLines: BusinessLine[] = [
  {
    slug: "biometria",
    label: "Biometria",
    kicker: "Reconocimiento de personas",
    summary:
      "Tecnologia de vanguardia aplicada al reconocimiento de huellas, rostro, iris y voz para reforzar seguridad, comodidad y control.",
    introduction:
      "La linea de biometria de HK Systems integra software especializado y criterios operativos para autenticar identidades en contextos de alta exigencia.",
    detail:
      "Es una solucion ductil que puede escalar desde grandes organizaciones hasta aplicaciones puntuales, con foco en trazabilidad, reduccion de fraude y calidad de inscripcion.",
    heroAsset: "/stock/biometric-access.jpg",
    heroAlt: "Control de acceso biometrico en un entorno corporativo",
    sliderVariant: "sidebar",
    applications: [
      "AFIS",
      "Identificacion de huellas dactilares",
      "Migracion de bases de datos",
      "Monitoreo de rostros en multitudes",
      "Control sobre fraudes",
      "Inscripcion de calidad"
    ],
    deliverables: [
      "Diseno de arquitectura biometrica",
      "Integracion con sistemas existentes",
      "Alta y depuracion de bases de datos",
      "Implementacion y soporte operativo"
    ],
    markets: [
      "Organismos publicos",
      "Control institucional",
      "Accesos corporativos",
      "Entornos con trazabilidad de identidad"
    ],
    slides: [
      {
        eyebrow: "Acceso",
        title: "Acceso biometrico en recepciones y puntos controlados",
        description:
          "La biometria permite validar identidad con rapidez y generar trazabilidad desde el primer punto de ingreso.",
        placeholder: "Acceso biometrico institucional",
        note: "Validacion de identidad en accesos sensibles y de alto flujo.",
        image: "/stock/biometric-access.jpg",
        tone: "brand"
      },
      {
        eyebrow: "Monitoreo",
        title: "Supervision de identidad en operaciones de alto flujo",
        description:
          "Los sistemas biometrico-faciales pueden integrarse a salas de monitoreo y controles con multiples fuentes de informacion.",
        placeholder: "Monitoreo de identidad",
        note: "Integracion con monitoreo operativo y criterios de respuesta.",
        image: "/stock/security-ops-room.jpg",
        tone: "soft"
      },
      {
        eyebrow: "Integracion",
        title: "Integracion con software y tableros operativos",
        description:
          "La capa biometrica gana valor cuando se conecta con tableros, bases de datos y reglas operativas del cliente.",
        placeholder: "Tablero operativo conectado",
        note: "Trazabilidad, supervision y lectura centralizada de eventos.",
        image: "/stock/control-room-main.jpg",
        tone: "ink"
      }
    ]
  },
  {
    slug: "inspeccion-no-intrusiva",
    label: "Inspeccion no intrusiva - Escaners",
    kicker: "Deteccion de amenazas",
    summary:
      "Soluciones avanzadas para inspeccion de equipajes, personas, vehiculos, cargas, radiacion y trazas en mercados de alta demanda.",
    introduction:
      "HK Systems provee equipos y servicios orientados a deteccion de amenazas con foco simultaneo en seguridad y eficiencia operativa.",
    detail:
      "La linea responde a contextos como aviacion, defensa, puertos, aduanas, eventos y proteccion fronteriza, donde el control debe ser preciso y sostenido.",
    heroAsset: "/stock/luggage-inspection.jpg",
    heroAlt: "Revision e inspeccion de equipaje en un punto de control",
    sliderVariant: "spotlight",
    applications: [
      "Inspeccion de paquetes y equipajes",
      "Inspeccion de vehiculos y cargas",
      "Inspeccion de equipaje de mano",
      "Inspeccion de personas",
      "Deteccion de radiacion",
      "Deteccion de trazas"
    ],
    deliverables: [
      "Seleccion de equipo segun flujo y riesgo",
      "Planificacion de puntos de control",
      "Implementacion y puesta en marcha",
      "Mantenimiento preventivo y correctivo"
    ],
    markets: [
      "Aviacion",
      "Infraestructura critica",
      "Aduanas y fronteras",
      "Defensa",
      "Puertos",
      "Seguridad para eventos"
    ],
    slides: [
      {
        eyebrow: "Equipaje",
        title: "Inspeccion de equipaje y paqueteria",
        description:
          "Los puntos de revision no intrusiva reducen riesgo sin frenar la operacion cuando se disenan sobre el flujo correcto.",
        placeholder: "Inspeccion de equipaje",
        note: "Control preciso para accesos, aviacion y edificios institucionales.",
        image: "/stock/luggage-inspection.jpg",
        tone: "ink"
      },
      {
        eyebrow: "Cargas",
        title: "Revision de cargas y operaciones logisticas",
        description:
          "Los procesos de inspeccion ganan eficiencia cuando se integran al movimiento real de mercaderias y recintos fiscales.",
        placeholder: "Revision de cargas",
        note: "Control de mercaderia en depositos, recintos fiscales y nodos logisticos.",
        image: "/stock/warehouse-inspection.jpg",
        tone: "brand"
      },
      {
        eyebrow: "Puertos",
        title: "Controles de cargas en puertos y fronteras",
        description:
          "La inspeccion de gran escala exige soluciones robustas para puertos, aduanas y nodos con alto transito de cargas.",
        placeholder: "Control de cargas portuario",
        note: "Cobertura para puertos, fronteras y operaciones de alto transito.",
        image: "/stock/cargo-loading-port.jpg",
        tone: "soft"
      }
    ]
  },
  {
    slug: "seguridad-electronica",
    label: "Seguridad Electronica",
    kicker: "Video vigilancia y monitoreo",
    summary:
      "Soluciones basadas en CCTV, sistemas digitales, camaras y domos IP, software de monitoreo y mantenimiento continuo.",
    introduction:
      "La linea de seguridad electronica conecta video vigilancia, monitoreo y analitica en una infraestructura preparada para operar en tiempo real.",
    detail:
      "El foco no esta solo en los dispositivos, sino en la continuidad del servicio, la visibilidad operativa y la capacidad de respuesta coordinada.",
    heroAsset: "/stock/security-ops-room.jpg",
    heroAlt: "Sala de operaciones con multiples pantallas y monitoreo en tiempo real",
    sliderVariant: "mosaic",
    applications: [
      "Sistemas de CCTV",
      "Sistemas digitales",
      "Camaras y domos IP",
      "Software de monitoreo",
      "Mantenimiento preventivo y correctivo"
    ],
    deliverables: [
      "Ingenieria de cobertura y puntos ciegos",
      "Integracion de software y hardware",
      "Monitoreo y supervision",
      "Soporte tecnico evolutivo"
    ],
    markets: [
      "Edificios institucionales",
      "Empresas privadas",
      "Infraestructura critica",
      "Instalaciones logisticas"
    ],
    slides: [
      {
        eyebrow: "Perimetro",
        title: "Cobertura CCTV para perimetros y accesos",
        description:
          "La vigilancia electronica comienza por una buena arquitectura de camaras, angulos y cobertura continua.",
        placeholder: "Cobertura perimetral",
        note: "Cobertura visual continua para accesos, perimetros y puntos criticos.",
        image: "/stock/cctv-camera.jpg",
        tone: "soft"
      },
      {
        eyebrow: "Centro de control",
        title: "Centro de monitoreo y software integrado",
        description:
          "La operacion gana valor cuando CCTV, analitica y alertas conviven en un tablero unico y accionable.",
        placeholder: "Monitoreo integrado",
        note: "Video, analitica y alertas sobre una unica capa operativa.",
        image: "/stock/control-room-main.jpg",
        tone: "brand"
      },
      {
        eyebrow: "Operacion",
        title: "Respuesta coordinada y supervision continua",
        description:
          "La infraestructura electronica debe sostenerse con monitoreo constante, criterio operativo y capacidad de respuesta.",
        placeholder: "Supervision continua",
        note: "Lectura operativa para continuidad del servicio y toma de decisiones.",
        image: "/stock/security-ops-room.jpg",
        tone: "ink"
      }
    ]
  },
  {
    slug: "otros-servicios",
    label: "Otros Servicios",
    kicker: "Consultoria y ejecucion integral",
    summary:
      "Estudios integrales, analisis de riesgo, seguridad para eventos, contramedidas electronicas, psicotecnicos y custodias VIP.",
    introduction:
      "HK Systems complementa la tecnologia con servicios profesionales que permiten disenar, ejecutar y sostener esquemas de seguridad complejos.",
    detail:
      "La propuesta cubre desde consultoria especializada hasta operacion en campo, con capacidad para responder a contextos empresariales, publicos y de alta sensibilidad.",
    heroAsset: "/stock/business-consulting.jpg",
    heroAlt: "Reunion profesional para diagnostico y consultoria en seguridad",
    sliderVariant: "sidebar",
    applications: [
      "Estudios integrales de seguridad",
      "Analisis de riesgo y vulnerabilidad",
      "Seguridad en eventos de mediana y alta complejidad",
      "Planificacion y ejecucion de sistemas integrales",
      "Contramedidas electronicas",
      "Consultoria psicologica y psicotecnicos laborales",
      "Custodias VIP"
    ],
    deliverables: [
      "Diagnostico y plan de accion",
      "Implementacion operativa en sitio",
      "Cobertura profesional especializada",
      "Acompanamiento estrategico y tactico"
    ],
    markets: [
      "Empresas",
      "Eventos",
      "Sector publico",
      "Alta direccion",
      "Organizaciones con riesgo complejo"
    ],
    slides: [
      {
        eyebrow: "Consultoria",
        title: "Consultoria, diagnostico y analisis de riesgo",
        description:
          "La capa de servicios arranca en el relevamiento, la conversacion tecnica y la definicion de prioridades de riesgo.",
        placeholder: "Diagnostico y analisis",
        note: "Auditorias, diagnosticos y definicion de prioridades de riesgo.",
        image: "/stock/business-consulting.jpg",
        tone: "soft"
      },
      {
        eyebrow: "Terreno",
        title: "Trabajo de campo y despliegues operativos",
        description:
          "Las operaciones complejas necesitan presencia en terreno, coordinacion y seguimiento cercano de la ejecucion.",
        placeholder: "Despliegue operativo",
        note: "Supervision en sitio para operaciones y despliegues de alta exigencia.",
        image: "/stock/port-worker.jpg",
        tone: "brand"
      },
      {
        eyebrow: "Seguimiento",
        title: "Soporte tactico y seguimiento continuo",
        description:
          "La consultoria se potencia cuando puede traducirse en supervision, seguimiento y toma de decision informada.",
        placeholder: "Seguimiento continuo",
        note: "Acompanamiento especializado para decisiones y continuidad operativa.",
        image: "/stock/control-room-main.jpg",
        tone: "ink"
      }
    ]
  }
];

const previewNotes: Record<BusinessLine["slug"], string> = {
  biometria: "Identidad, trazabilidad y control de accesos.",
  "inspeccion-no-intrusiva": "Deteccion temprana sin frenar la operacion.",
  "seguridad-electronica": "Visibilidad continua y respuesta coordinada.",
  "otros-servicios": "Consultoria, despliegue y acompanamiento especializado."
};

export const businessLinePreviewSlides = businessLines.map((line) => ({
  eyebrow: line.label,
  title: line.kicker,
  description: line.summary,
  placeholder: line.label,
  note: previewNotes[line.slug],
  image: line.heroAsset,
  tone: "soft" as const
}));

export function getBusinessLine(slug: string) {
  return businessLines.find((line) => line.slug === slug);
}
