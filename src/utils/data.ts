export const categories = [
  {
    id: 1, name: 'Servicios Mecánicos', description: 'En GRUPO INAP, ofrecemos una gama completa de servicios mecánicos para la industria. Esto incluye:', items: [
      'Montaje de plantas eléctricas de baja y alta revolución.',
      'Instalación de compresores: alternativos, de tornillo, de lóbulos y centrífugos.',
      'Montaje de ventiladores, bombas, calderas y torres de enfriamiento.',
      'Fabricación y montaje de puentes grúa, hornos y secadores.',
      'Fabricación y montaje de tanques.',
      'Suministro e instalación de tuberías de todo tipo.',
      'Construcción de estructuras metálicas en general.',
      'Pruebas de equipos según protocolo del fabricante.'
    ],
    image: '/assets/services/mecanico.png'
  },
  {
    id: 2, name: 'Servicios Civiles', description: 'En GRUPO INAP, brindamos soluciones integrales en el ámbito de la construcción civil. Nuestros servicios incluyen:', items: [
      'Montaje de plantas eléctricas de baja y alta revolución.',
      'Instalación de compresores: alternativos, de tornillo, de lóbulos y centrífugos.',
      'Montaje de ventiladores, bombas, calderas y torres de enfriamiento.',
      'Fabricación y montaje de puentes grúa, hornos y secadores.',
      'Fabricación y montaje de tanques.',
      'Suministro e instalación de tuberías de todo tipo.',
      'Construcción de estructuras metálicas en general.',
      'Pruebas de equipos según protocolo del fabricante.'
    ],
    image: '/assets/services/civil.png'
  },
  {
    id: 3, name: 'Servicios de Mantenimiento y Reparaciones', description: 'En GRUPO INAP, ofrecemos servicios de mantenimiento integral para garantizar el óptimo funcionamiento de sus equipos y estructuras. Nuestros servicios incluyen:', items: [
      'Tratamiento contra la corrosión y pintura industrial.',
      'Mantenimiento preventivo y correctivo de equipos.',
      'Prolongación de la vida útil de equipos y estructuras.',
      'Mejora de la eficiencia operativa de instalaciones industriales.'
    ],
    image: '/assets/services/mantenimiento.png'
  }
]

export const projects = [
  {
    id: 1,
    title: 'Reingeniería de Fabrica de Envases de Vidrio - Caribbean Glass',
    category: 'Servicio Mecánico',
    categories: [1],
    first_description: 'GRUPO INAP, hemos llevado a cabo la transformación completa de la fábrica Caribbean Glass, especializada en la producción de envases de vidrio. Este proyecto integral incluyó la implementación de tecnologías avanzadas y sistemas eficientes que han revolucionado la infraestructura existente:',
    items: [
      'Sistemas de Aire Comprimido y de Ventilación: Diseñados para maximizar la eficiencia operativa y garantizar condiciones óptimas en el proceso de fabricación.',
      'Sistemas de Agua Helada y Tratada: Esenciales para mantener los estándares de calidad y seguridad del vidrio producido, asegurando procesos consistentes y eficientes.',
      'Sistemas de Transporte Automatizado (Conveyors): Estos sistemas facilitan una logística fluida y eficiente dentro de la planta, mejorando significativamente los tiempos de producción y la manipulación de materiales.',
      'La reingeniería no solo ha incrementado la capacidad de producción sino que también ha fortalecido nuestro compromiso con la sostenibilidad y la innovación, estableciendo nuevos estándares de excelencia en la industria del vidrio.',
    ],
    images: [
      'https://iili.io/dseTYkx.png',
      'https://iili.io/dseT77j.png',
      'https://iili.io/dseTAru.png',
      'https://iili.io/dseT5db.png',
      'https://iili.io/dseTamQ.png',
      'https://iili.io/dseT1LP.png',
      'https://iili.io/dseTlIV.png',
      'https://iili.io/dseT0hB.png',
      'https://iili.io/dseTGB1.png',
      'https://iili.io/dseTMEF.png',
      'https://iili.io/dseTVrg.png',
      'https://iili.io/dseTX2a.png',

    ],
  },
  {
    id: 2,
    title: 'TINFLEX - Diseño y Construcción de Nave Industrial',
    category: 'Servicio Mecánico y Civil',
    categories: [1, 2],
    first_description: 'En GRUPO INAP, nos enorgullecemos de haber diseñado y construido la nave industrial TINFLEX en la República Dominicana, un proyecto ambicioso que abarca una superficie de 84 metros por 120 metros, con una altura impresionante de 16 metros y un claro de 40 metros sin soportes intermedios.',
    sec_description: 'Este proyecto fue diseñado para maximizar la eficiencia y funcionalidad en la manufactura y almacenaje. Utilizando tecnologías de construcción avanzadas, aseguramos la durabilidad y la resistencia estructural óptimas para soportar las operaciones industriales intensivas. La estructura cuenta con sistemas modernos de manejo de materiales y está equipada con instalaciones de última generación para garantizar un ambiente de trabajo seguro y productivo.',
    images: [
      'https://iili.io/dseqDtn.png',
      'https://iili.io/dseqpMG.jpg',
      'https://iili.io/dseBHF4.jpg',
      'https://iili.io/dseBJcl.jpg',
      'https://iili.io/dseB39S.jpg',
      'https://iili.io/dseBfte.jpg',
      'https://iili.io/dseBCMb.jpg',
      'https://iili.io/dseBBou.jpg',
      'https://iili.io/dseBnPj.jpg',
      'https://iili.io/dseBuHB.jpg',
      'https://iili.io/dseBRN1.jpg',
      'https://iili.io/dseB5DF.jpg',
      'https://iili.io/dseBaVa.jpg',
      'https://iili.io/dseBciJ.jpg',

    ],
  },
  {
    id: 3,
    title: 'Proyecto de Acueducto en La Zurza',
    category: 'Servicio Mecánico y Civil',
    categories: [1, 2],
    first_description: 'En GRUPO INAP, estamos orgullosos de haber completado un proyecto crucial en La Zurza, que consistió en la instalación de un sistema de acueductos con tuberías de 30 pulgadas, diseñadas para mejorar la infraestructura de suministro de agua. Este proyecto incluyó la fabricación y montaje de componentes críticos como codos y tes, junto con un exhaustivo proceso de armadura y soldadura de las tuberías.',
    sec_description: 'El corazón de este sistema es un tanque de 200,000 galones, desde el cual se distribuye el agua a través de las nuevas tuberías, asegurando un flujo constante y  eficiente hacia áreas que necesitan un suministro de agua robusto y confiable.',
    images: [
      'https://iili.io/dsexeh7.jpg',
      'https://iili.io/dsexwp2.jpg',
      'https://iili.io/dsexOIS.jpg',

    ],
  },
  {
    id: 4,
    title: 'Proyecto Nave Haina',
    category: 'Servicio Mecánico y Civil',
    categories: [1, 2],
    first_description: 'GRUPO INAP ha completado con éxito el proyecto Nave Haina, una instalación industrial de 125 metros de largo por 40 metros de ancho, ubicada en una posición estratégica para optimizar operaciones de manufactura y almacenamiento. Este proyecto destaca por haber sido diseñado, calculado y construido íntegramente por nuestro equipo, asegurando no solo la funcionalidad sino también la sostenibilidad y seguridad desde su concepción hasta su finalización.',
    sec_description: 'La estructura fue diseñada desde cero, incluyendo todos los cálculos estructurales y simulaciones de resistencia necesarios para garantizar su integridad bajo diversas condiciones operativas. La implementación de tecnologías de construcción avanzadas y prácticas de ingeniería modernas permitió una ejecución eficaz y rápida del proyecto, con un enfoque constante en minimizar el impacto ambiental y maximizar la seguridad.',
    images: [
      'https://iili.io/dseoisn.jpg',
      'https://iili.io/dseoPWX.jpg',
      'https://iili.io/dseoLfs.jpg',
      'https://iili.io/dseogON.jpg',
      'https://iili.io/dseoQ0G.jpg',
      'https://iili.io/dseoZgf.jpg',

    ],
  },
  {
    id: 5,
    title: 'Proyecto Caseta de Válvulas – Monte Grande',
    category: 'Servicio Mecánico y Civil',
    categories: [1, 2],
    first_description: 'El Proyecto Caseta de Válvulas en Monte Grande fue un desafío técnico y estructural que GRUPO INAP llevó a cabo con éxito, enfocándose en la ingeniería detallada, el suministro, la fabricación, el transporte y la instalación de la estructura metálica para el techo de la caseta de válvulas de la presa Monte Grande.',
    sec_description: 'Nuestra tarea principal incluyó la instalación de una cubierta compuesta por paneles ligeros de EPS tipo sándwich, diseñados para ofrecer durabilidad y aislamiento efectivo. Es importante destacar que esta estructura metálica fue montada sobre una construcción de concreto preexistente, lo que requirió una cuidadosa planificación y ejecución para asegurar la integración y estabilidad de los nuevos componentes sin comprometer la infraestructura existente.',
    images: [
      'https://iili.io/dseACVS.png',
      'https://iili.io/dseAni7.png',
      'https://iili.io/dseAzle.png',
      'https://iili.io/dseAxf9.png',
      'https://iili.io/dseAuHb.png',
      'https://iili.io/dseAARj.png',

    ],
  },
  {
    id: 6,
    title: 'Proyecto de Laguna Artificial #7, Azua',
    category: 'Servicio Mecánico y Civil',
    categories: [1, 2],
    first_description: 'En el Proyecto de Laguna Artificial #7 en Azua, GRUPO INAP fue responsable del diseño e instalación de infraestructura hidráulica crucial para la operación de la laguna. Este proyecto incluyó la instalación de tuberías de conducción de 1500 mm para el llenado y la descarga de la laguna, así como la instalación de cajas de válvulas asociadas.',
    sec_description: 'Este esfuerzo no solo involucró la ingeniería detallada y la logística de montaje de tuberías de gran diámetro en un entorno desafiante, sino que también aseguró la funcionalidad y eficiencia del sistema de manejo de agua de la laguna, esencial para el control de caudales y la gestión de recursos hídricos en la región.',
    images: [
      'https://iili.io/dseRJLB.png',
      'https://iili.io/dseR9zQ.png',
      'https://iili.io/dseApmx.png',
      'https://iili.io/dseRHXV.png',
      'https://iili.io/dseR311.png',
      'https://iili.io/dseRFrF.png',
    ],
  },
  {
    id: 7,
    title: 'Diseño y Montaje de Sistemas de Transporte y Estructuras para la Industria',
    category: 'Servicio Mecánico y Civil',
    categories: [1, 2],
    first_description: 'GRUPO INAP se encargó del diseño, fabricación y montaje de transportadores,estructuras y equipos mecánicos para una instalación industrial. Este trabajo abarcódesde el desarrollo de soluciones de ingeniería detallada hasta la implementación encampo, garantizando la eficiencia operativa y la adaptabilidad de las estructuras a los procesos industriales exigentes.',
    sec_description: 'La experiencia y capacidad técnica de GRUPO INAP permitieron entregar un sistema robusto y confiable, destacando su compromiso con la calidad y la innovación en soluciones de ingeniería industrial.',
    images: [
      'https://iili.io/dseR4Yg.png',
      'https://iili.io/dseRsTv.png',
      'https://iili.io/dseRPyJ.png',
      'https://iili.io/dseR6va.png',
      'https://iili.io/dseRDGI.png',
      'https://iili.io/dseRtCN.png',
      'https://iili.io/dseRp3X.png',
      'https://iili.io/dseRyan.png',
    ],
  },
  {
    id: 8,
    title: 'Ensamble de Equipos y Estructuras Pre-Fabricadas',
    category: 'Servicio Mecánico y Civil',
    categories: [1, 2],
    first_description: `En GRUPO INAP, podemos realizar la instalación y montaje de equipos y estructuras prefabricadas, diseñadas para optimizar y acelerar los procesos de construcción en diversos sectores industriales. Nuestros proyectos realizados en este reglon incluyen el montaje de silos de almacenamiento de 15' de diámetro y 45' de altura, ideales para la gestión eficiente de materiales a granel.`,
    sec_description: 'Además, ofrecemos soluciones integrales para sistemas de enfriamiento, incluyendo la instalación de torres de enfriamiento y la integración de sistemas de bombeo y tuberías, asegurando operaciones continuas y efectivas en todas las instalaciones.',
    images: [
      'https://iili.io/dseIvUb.png',
      'https://iili.io/dseISJj.png',

    ],
  },
  {
    id: 9,
    title: 'Sistema de Aire Comprimido - Induban',
    category: 'Servicio Mecánico y Civil',
    categories: [1, 2],
    first_description: `GRUPO INAP se encargó del diseño e instalación del sistema de aire comprimido para la nueva fábrica de café de Induban. Este proyecto meticuloso involucró cálculos avanzados de mecánica de fluidos para garantizar la adecuada presión de aire a todas las máquinas, crucial para optimizar su rendimiento y eficiencia.`,
    sec_description: 'Se emplearon modelos CAD de última generación y simulaciones detalladas para prever y ajustar cada aspecto del sistema. La instalación consistió en tuberías de 3 pulgadas diseñadas específicamente para suministrar aire comprimido a la maquinaria expandida en la planta de producción de café, asegurando un funcionamiento impecable y continuo.',
    images: [
      'https://iili.io/dsezwFa.jpg',
      'https://iili.io/dsezNcJ.jpg',
      'https://iili.io/dsezk9R.jpg',
      'https://iili.io/dsezO8v.jpg',
      'https://iili.io/dsezvup.jpg',
      'https://iili.io/dsez8wN.jpg',
      'https://iili.io/dsezStI.jpg',
      'https://iili.io/dsezgnt.jpg',
      'https://iili.io/dsez4Pn.jpg',
      'https://iili.io/dsezicG.jpg',
      'https://iili.io/dsezPFs.jpg',
      'https://iili.io/dsezsSf.jpg',
      'https://iili.io/dsezQ94.jpg',
      'https://iili.io/dsezZAl.jpg',
      'https://iili.io/dseztN2.jpg',
      'https://iili.io/dsezDtS.jpg',
      'https://iili.io/dsezmo7.jpg',
      'https://iili.io/dsezpV9.jpg',

    ],
  },
]