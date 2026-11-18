/**
 * Contenido del CV.
 * Cambia `person`, `railLinks`, `jobs`, `pieces` y los textos `es` / `en`.
 * Los enlaces de ejemplo apuntan a example.com: sustitúyelos por los tuyos.
 */

export type Lang = 'es' | 'en';
export type LinkId = 'github' | 'linkedin' | 'web' | 'mail';
export type SectionKey = 'home' | 'experience' | 'projects' | 'contact' | 'lost';

export const person = {
  name: 'Mar Solano',
  initials: 'MS',
  email: 'hola@example.com',
} as const;

export interface RailLink {
  id: LinkId;
  href: string;
  external: boolean;
}

export const railLinks: readonly RailLink[] = [
  { id: 'github', href: 'https://example.com/github', external: true },
  { id: 'linkedin', href: 'https://example.com/linkedin', external: true },
  { id: 'web', href: 'https://example.com', external: true },
  { id: 'mail', href: `mailto:${person.email}`, external: false },
];

export const externalLinks = railLinks.filter((link) => link.external);

export const portMarks: Record<LinkId, string> = {
  github: 'GH',
  linkedin: 'IN',
  web: 'WEB',
  mail: 'MAIL',
};

export const navItems = [
  { path: '/', index: '00°', key: 'home', exact: true },
  { path: '/experiencia', index: '18°', key: 'experience', exact: true },
  { path: '/proyectos', index: '36°', key: 'projects', exact: false },
  { path: '/contacto', index: '54°', key: 'contact', exact: true },
] as const;

export type NavKey = (typeof navItems)[number]['key'];

export const jobs = [
  { id: 'taller', company: 'Taller Norte' },
  { id: 'faro', company: 'Faro Digital' },
  { id: 'lumen', company: 'Estudio Lumen' },
] as const;

export type JobId = (typeof jobs)[number]['id'];

export const pieces = [
  {
    slug: 'brujula',
    year: '2025',
    links: [
      { kind: 'demo', href: 'https://example.com/brujula' },
      { kind: 'code', href: 'https://example.com/brujula/codigo' },
    ],
  },
  {
    slug: 'puerto',
    year: '2024',
    links: [
      { kind: 'demo', href: 'https://example.com/puerto' },
      { kind: 'code', href: 'https://example.com/puerto/codigo' },
    ],
  },
  {
    slug: 'cuaderno',
    year: '2023',
    links: [
      { kind: 'demo', href: 'https://example.com/cuaderno' },
      { kind: 'code', href: 'https://example.com/cuaderno/codigo' },
    ],
  },
  {
    slug: 'marea',
    year: '2022',
    links: [
      { kind: 'demo', href: 'https://example.com/marea' },
      { kind: 'code', href: 'https://example.com/marea/codigo' },
    ],
  },
] as const;

export type PieceId = (typeof pieces)[number]['slug'];
export type PieceLinkKind = 'demo' | 'code';

interface JobCopy {
  period: string;
  role: string;
  summary: string;
  tags: readonly string[];
}

interface PieceCopy {
  name: string;
  summary: string;
  story: string;
  role: string;
  tags: readonly string[];
  outcomes: readonly string[];
}

interface Reading {
  value: string;
  label: string;
}

export interface Copy {
  metaDescription: string;
  skip: string;
  langLabel: string;
  navLabel: string;
  opensNew: string;
  footerNote: string;
  coordinates: string;
  role: string;
  location: string;
  availability: string;
  nav: Record<NavKey, string>;
  sections: Record<SectionKey, string>;
  portName: Record<LinkId, string>;
  home: {
    kicker: string;
    lines: readonly string[];
    lede: string;
    readings: readonly Reading[];
    instrumentsLabel: string;
    instruments: readonly string[];
    nowLabel: string;
    now: string;
    onwardLabel: string;
  };
  experience: {
    kicker: string;
    title: string;
    lede: string;
    jobs: Record<JobId, JobCopy>;
  };
  education: {
    kicker: string;
    program: string;
    place: string;
    period: string;
  };
  projects: {
    kicker: string;
    title: string;
    lede: string;
    openCase: string;
    demo: string;
    code: string;
    items: Record<PieceId, PieceCopy>;
  };
  case: {
    roleLabel: string;
    toolsLabel: string;
    outcomesLabel: string;
    back: string;
    missingTitle: string;
    missingBody: string;
  };
  contact: {
    kicker: string;
    title: string;
    lede: string;
    copy: string;
    copied: string;
    channelsLabel: string;
  };
  lost: {
    kicker: string;
    title: string;
    lede: string;
    back: string;
  };
}

const es = {
  metaDescription:
    'CV de Mar Solano, desarrollador de software. Experiencia, proyectos y contacto. Texto de ejemplo.',
  skip: 'Saltar al contenido',
  langLabel: 'Idioma',
  navLabel: 'Secciones',
  opensNew: '(se abre en una pestaña nueva)',
  footerNote: 'Texto de ejemplo · edítalo en src/app/cv.ts',
  coordinates: '19.43° N · 99.13° W',
  role: 'Desarrollador de software',
  location: 'Ciudad de México',
  availability: 'Disponible',
  nav: {
    home: 'Inicio',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  sections: {
    home: 'Inicio',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
    lost: 'Fuera de carta',
  },
  portName: {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    web: 'Sitio',
    mail: 'Correo',
  },
  home: {
    kicker: '00° · Atlas',
    lines: ['Software', 'con sentido', 'de orientación.'],
    lede: 'Ocho años convirtiendo un problema difuso en software que otra persona puede mantener. Me importan la interfaz, el contrato de la API y la calma que aparece cuando el código queda claro.',
    readings: [
      { value: '8', label: 'años de oficio' },
      { value: '3', label: 'equipos' },
      { value: '4', label: 'piezas públicas' },
      { value: 'Remoto', label: 'desde Ciudad de México' },
    ],
    instrumentsLabel: 'Instrumentos',
    instruments: [
      'TypeScript',
      'Angular',
      'RxJS',
      'Node.js',
      'PostgreSQL',
      'Pruebas',
      'Accesibilidad',
      'Sistemas de diseño',
    ],
    nowLabel: 'Rumbo actual',
    now: 'Interfaces tranquilas, sistemas de diseño que el equipo sí abre, y APIs que explican sus errores.',
    onwardLabel: 'Seguir la línea',
  },
  experience: {
    kicker: '18° · Expediciones',
    title: 'Tres puertos. Una sola línea.',
    lede: 'Cada etapa dejó una herramienta que sigo usando. Lo que se repite es el oficio.',
    jobs: {
      taller: {
        period: '2023 — hoy',
        role: 'Desarrollador senior',
        summary:
          'Lideré el sistema de diseño de seis productos y reescribí el flujo de pago con estado predecible. El paquete principal bajó un 38% y el equipo dejó de redibujar los mismos controles en cada sprint.',
        tags: ['Angular', 'TypeScript', 'Sistemas de diseño', 'Accesibilidad'],
      },
      faro: {
        period: '2020 — 2023',
        role: 'Desarrollador de software',
        summary:
          'Diseñé la API que conecta a los socios con el catálogo y el panel donde siguen sus pedidos. Los contratos quedaron documentados, con trazas, y un socio nuevo podía integrarse en menos de un día.',
        tags: ['Node.js', 'PostgreSQL', 'APIs', 'Observabilidad'],
      },
      lumen: {
        period: '2018 — 2020',
        role: 'Desarrollador junior',
        summary:
          'Entré armando pantallas y salí cuidando el germen de una librería de componentes. Ahí aprendí a discutir una interfaz con la misma precisión que un endpoint.',
        tags: ['Angular', 'HTML', 'CSS', 'Trabajo en equipo'],
      },
    },
  },
  education: {
    kicker: 'Formación',
    program: 'Ingeniería en Computación',
    place: 'Universidad Ejemplo · Ciudad de México',
    period: '2014 — 2018',
  },
  projects: {
    kicker: '36° · Artefactos',
    title: 'Cuatro piezas que puedo defender.',
    lede: 'Es el trabajo en el que el problema, la decisión y el resultado caben en una conversación.',
    openCase: 'Abrir ficha',
    demo: 'Demo',
    code: 'Código',
    items: {
      brujula: {
        name: 'Brújula',
        summary: 'Un sistema de diseño para productos que habían crecido cada uno por su lado.',
        story:
          'Brújula nació porque seis equipos nombraban al mismo botón de cuatro maneras. Reuní tokens, una librería Angular y una guía corta. La meta era que una persona pudiera pasar de un producto a otro sin aprender otra vez los gestos básicos.',
        role: 'Tokens, librería de componentes y guía de uso.',
        tags: ['Angular', 'TypeScript', 'Tokens', 'Accesibilidad'],
        outcomes: [
          'Seis productos sobre la misma base visual',
          'Doce componentes núcleo con revisión de accesibilidad',
          'Una documentación que el equipo abre de verdad',
        ],
      },
      puerto: {
        name: 'Puerto',
        summary: 'La plataforma donde los socios se conectan al catálogo sin pedir una reunión.',
        story:
          'Puerto es una API y un portal. El diseño partió de los errores reales: credenciales mal copiadas, webhooks que no avisaban y un sandbox que no coincidía con producción. Reescribí los contratos, separé el entorno de pruebas y dejé un registro que un socio puede leer sin un ingeniero al lado.',
        role: 'Diseño de API, portal y entorno de pruebas.',
        tags: ['Node.js', 'PostgreSQL', 'OpenAPI', 'Webhooks'],
        outcomes: [
          'Integración de un socio nuevo en menos de un día',
          'Errores con causa, además del código',
          'Sandbox con los mismos contratos que producción',
        ],
      },
      cuaderno: {
        name: 'Cuaderno',
        summary: 'Notas de campo para equipos que pierden la red a media visita.',
        story:
          'Los equipos anotaban en el teléfono y reescribían todo al volver a la oficina. Cuaderno guarda la nota en el dispositivo, la sincroniza cuando vuelve la red y conserva el hilo si dos personas editan la misma visita.',
        role: 'Aplicación, sincronización y modelo offline.',
        tags: ['TypeScript', 'IndexedDB', 'Angular', 'Offline'],
        outcomes: [
          'Notas disponibles sin cobertura',
          'Conflictos de edición visibles',
          'Menos doble captura al final del día',
        ],
      },
      marea: {
        name: 'Marea',
        summary: 'Un tablero de señales operativas para quien no vive dentro de Grafana.',
        story:
          'Marea traduce latencia, errores y colas a un lenguaje que producto y soporte pueden leer juntos. Cada señal tiene dueño, umbral y el enlace al lugar donde se investiga. La plataforma de observabilidad sigue en su sitio; Marea le pone una orilla.',
        role: 'Tablero, umbrales y lenguaje compartido.',
        tags: ['Angular', 'Observabilidad', 'TypeScript', 'APIs'],
        outcomes: [
          'Menos incidentes descubiertos por un cliente',
          'Un mismo tablero para soporte y producto',
          'Alertas con un siguiente paso, además del número',
        ],
      },
    },
  },
  case: {
    roleLabel: 'Oficio en esta pieza',
    toolsLabel: 'Herramientas',
    outcomesLabel: 'Lo que cambió',
    back: 'Volver a proyectos',
    missingTitle: 'Esta pieza no está en el cuaderno.',
    missingBody: 'El enlace no corresponde a ningún proyecto.',
  },
  contact: {
    kicker: '54° · Transmisión',
    title: 'Si el rumbo encaja, escribamos.',
    lede: 'Busco un equipo de producto que cuide el oficio. El correo es el canal directo. Los demás enlaces llevan al mismo trabajo.',
    copy: 'Copiar correo',
    copied: 'Correo copiado',
    channelsLabel: 'Otras frecuencias',
  },
  lost: {
    kicker: '·· · Fuera de carta',
    title: 'Esta coordenada no está en la carta.',
    lede: 'El enlace no corresponde a ninguna sección.',
    back: 'Volver al inicio',
  },
} satisfies Copy;

const en = {
  metaDescription:
    'CV of Mar Solano, software developer. Experience, projects, and contact. Sample copy.',
  skip: 'Skip to content',
  langLabel: 'Language',
  navLabel: 'Sections',
  opensNew: '(opens in a new tab)',
  footerNote: 'Sample copy · edit it in src/app/cv.ts',
  coordinates: '19.43° N · 99.13° W',
  role: 'Software developer',
  location: 'Mexico City',
  availability: 'Open to work',
  nav: {
    home: 'Home',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },
  sections: {
    home: 'Home',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    lost: 'Off the chart',
  },
  portName: {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    web: 'Site',
    mail: 'Email',
  },
  home: {
    kicker: '00° · Atlas',
    lines: ['Software', 'with a sense', 'of direction.'],
    lede: 'Eight years turning a fuzzy problem into software another person can maintain. I care about the interface, the API contract, and the calm that shows up when the code is clear.',
    readings: [
      { value: '8', label: 'years in the craft' },
      { value: '3', label: 'teams' },
      { value: '4', label: 'public pieces' },
      { value: 'Remote', label: 'from Mexico City' },
    ],
    instrumentsLabel: 'Instruments',
    instruments: [
      'TypeScript',
      'Angular',
      'RxJS',
      'Node.js',
      'PostgreSQL',
      'Testing',
      'Accessibility',
      'Design systems',
    ],
    nowLabel: 'Current bearing',
    now: 'Calm interfaces, design systems a team actually opens, and APIs that explain their errors.',
    onwardLabel: 'Follow the line',
  },
  experience: {
    kicker: '18° · Expeditions',
    title: 'Three harbors. One line.',
    lede: 'Each stop left a tool I still use. What repeats is the craft.',
    jobs: {
      taller: {
        period: '2023 — now',
        role: 'Senior software developer',
        summary:
          'I led the design system behind six products and rebuilt the payment flow around predictable state. The main bundle dropped 38%, and the team stopped redrawing the same controls every sprint.',
        tags: ['Angular', 'TypeScript', 'Design systems', 'Accessibility'],
      },
      faro: {
        period: '2020 — 2023',
        role: 'Software developer',
        summary:
          'I designed the API that connects partners to the catalog, and the panel where they follow their orders. The contracts are documented, traces are in place, and a new partner can integrate in less than a day.',
        tags: ['Node.js', 'PostgreSQL', 'APIs', 'Observability'],
      },
      lumen: {
        period: '2018 — 2020',
        role: 'Junior developer',
        summary:
          'I arrived building screens and left tending the start of a component library. That was where I learned to discuss an interface with the same precision as an endpoint.',
        tags: ['Angular', 'HTML', 'CSS', 'Teamwork'],
      },
    },
  },
  education: {
    kicker: 'Education',
    program: 'Computer engineering',
    place: 'Example University · Mexico City',
    period: '2014 — 2018',
  },
  projects: {
    kicker: '36° · Artifacts',
    title: 'Four pieces I can stand behind.',
    lede: 'These are the pieces where the problem, the decision, and the result fit in one conversation.',
    openCase: 'Open case',
    demo: 'Demo',
    code: 'Code',
    items: {
      brujula: {
        name: 'Brújula',
        summary: 'A design system for products that had each grown in their own direction.',
        story:
          'Brújula started because six teams had four names for the same button. I gathered tokens, an Angular library, and a short guide. The aim was that a person could move from one product to another without learning the basic gestures again.',
        role: 'Tokens, component library, and the usage guide.',
        tags: ['Angular', 'TypeScript', 'Tokens', 'Accessibility'],
        outcomes: [
          'Six products on the same visual base',
          'Twelve core components with an accessibility pass',
          'Documentation the team actually opens',
        ],
      },
      puerto: {
        name: 'Puerto',
        summary: 'The platform where partners connect to the catalog without booking a meeting.',
        story:
          'Puerto is an API and a portal. The design started from the real failures: credentials copied wrong, webhooks that never called back, and a sandbox that disagreed with production. I rewrote the contracts, separated the test environment, and left a log a partner can read without an engineer beside them.',
        role: 'API design, portal, and the test environment.',
        tags: ['Node.js', 'PostgreSQL', 'OpenAPI', 'Webhooks'],
        outcomes: [
          'A new partner integrated in less than a day',
          'Errors that include a cause, along with the code',
          'A sandbox on the same contracts as production',
        ],
      },
      cuaderno: {
        name: 'Cuaderno',
        summary: 'Field notes for teams who lose signal halfway through a visit.',
        story:
          'Teams wrote on their phones and typed everything again back at the office. Cuaderno keeps the note on the device, syncs it when the network returns, and holds the thread if two people edit the same visit.',
        role: 'The app, sync, and the offline model.',
        tags: ['TypeScript', 'IndexedDB', 'Angular', 'Offline'],
        outcomes: [
          'Notes available without coverage',
          'Edit conflicts that stay visible',
          'Less double entry at the end of the day',
        ],
      },
      marea: {
        name: 'Marea',
        summary: 'An operational signal board for people who do not live inside Grafana.',
        story:
          'Marea translates latency, errors, and queues into language that product and support can read together. Each signal has an owner, a threshold, and a link to the place where it gets investigated. The observability platform stays where it is; Marea gives it a shore.',
        role: 'The board, the thresholds, and the shared language.',
        tags: ['Angular', 'Observability', 'TypeScript', 'APIs'],
        outcomes: [
          'Fewer incidents first discovered by a customer',
          'One board for support and product',
          'Alerts with a next step, along with the number',
        ],
      },
    },
  },
  case: {
    roleLabel: 'Craft on this piece',
    toolsLabel: 'Tools',
    outcomesLabel: 'What changed',
    back: 'Back to projects',
    missingTitle: 'This piece is not in the notebook.',
    missingBody: 'The link does not match a project.',
  },
  contact: {
    kicker: '54° · Transmission',
    title: 'If the course lines up, let’s write.',
    lede: 'I am looking for a product team that cares about the craft. Email is the direct channel. The other links lead to the same work.',
    copy: 'Copy email',
    copied: 'Email copied',
    channelsLabel: 'Other frequencies',
  },
  lost: {
    kicker: '·· · Off the chart',
    title: 'This coordinate is not on the chart.',
    lede: 'The link does not match any section.',
    back: 'Back to home',
  },
} satisfies Copy;

export const copy: Record<Lang, Copy> = { es, en };

export function sectionKey(url: string): SectionKey {
  const path = url.split(/[?#]/)[0] || '/';
  if (path === '/') {
    return 'home';
  }
  if (path.startsWith('/experiencia')) {
    return 'experience';
  }
  if (path.startsWith('/proyectos')) {
    return 'projects';
  }
  if (path.startsWith('/contacto')) {
    return 'contact';
  }
  return 'lost';
}

export function pieceFromUrl(url: string): PieceId | null {
  const path = url.split(/[?#]/)[0] || '/';
  const match = /^\/proyectos\/([^/]+)$/.exec(path);
  if (!match) {
    return null;
  }
  const slug = decodeURIComponent(match[1] ?? '');
  const found = pieces.find((item) => item.slug === slug);
  return found ? found.slug : null;
}
