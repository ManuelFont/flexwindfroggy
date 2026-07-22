var learnMessages = {
  navLabel: { en: "Primary", es: "Principal" },
  navPlay: { en: "Play", es: "Jugar" },
  navLearn: { en: "Learn", es: "Aprender" },
  navPrivacy: { en: "Privacy", es: "Privacidad" },
  advertisements: { en: "Advertisements", es: "Anuncios" },
  advertisementsLabel: { en: "Advertisements", es: "Anuncios" },
  eyebrow: {
    en: "Tailwind Flexbox lesson",
    es: "Lección de Flexbox con Tailwind",
  },
  utilities: { en: "Utilities", es: "Utilidades" },
  commonUtilities: { en: "Common utilities", es: "Utilidades comunes" },
  classHeading: { en: "Class", es: "Clase" },
  whatItDoes: { en: "What it does", es: "Qué hace" },
  placement: { en: "Placement", es: "Ubicación" },
  tryIt: { en: "Try it", es: "Pruébalo" },
  practice: {
    en: "Practice in Flexwind Froggy",
    es: "Practica en Flexwind Froggy",
  },
  moreLessons: { en: "More flexbox lessons", es: "Más lecciones de flexbox" },
  linkDirection: { en: "Flex direction", es: "Dirección flex" },
  linkJustify: { en: "Justify content", es: "Justificar contenido" },
  linkItems: { en: "Align items", es: "Alinear elementos" },
  linkWrap: { en: "Wrap items", es: "Ajustar elementos" },
  linkGap: { en: "Add gaps", es: "Añadir espacios" },
  linkOrder: { en: "Order items", es: "Ordenar elementos" },
  linkSelf: { en: "Align one item", es: "Alinear un elemento" },
  linkContent: { en: "Align wrapped lines", es: "Alinear líneas ajustadas" },
  footer: {
    en: "Flexwind Froggy is a free Tailwind CSS Flexbox learning game.",
    es: "Flexwind Froggy es un juego gratuito para aprender Flexbox con Tailwind CSS.",
  },
  directionTitle: {
    en: "Tailwind Flex Direction: row and column | Flexwind Froggy",
    es: "Dirección Flex de Tailwind: fila y columna | Flexwind Froggy",
  },
  directionDescription: {
    en: "Learn Tailwind CSS flex direction utilities: flex-row, flex-row-reverse, flex-col, and flex-col-reverse.",
    es: "Aprende las utilidades de dirección flex de Tailwind CSS: flex-row, flex-row-reverse, flex-col y flex-col-reverse.",
  },
  directionHeading: {
    en: "Choose the flex direction",
    es: "Elige la dirección flex",
  },
  directionLead: {
    en: "A flex container lays its children out in a row by default. Tailwind’s direction utilities let you choose whether the main axis runs across or down the page.",
    es: "Un contenedor flex coloca sus elementos en una fila de forma predeterminada. Las utilidades de dirección de Tailwind te permiten elegir si el eje principal se extiende horizontal o verticalmente.",
  },
  directionRow: {
    en: "Places items from left to right.",
    es: "Coloca los elementos de izquierda a derecha.",
  },
  directionRowReverse: {
    en: "Places items from right to left.",
    es: "Coloca los elementos de derecha a izquierda.",
  },
  directionCol: {
    en: "Stacks items from top to bottom.",
    es: "Apila los elementos de arriba abajo.",
  },
  directionColReverse: {
    en: "Stacks items from bottom to top.",
    es: "Apila los elementos de abajo arriba.",
  },
  directionTry: {
    en: "Add <code>flex</code> to the parent, then use <code>flex-col</code> when a card, menu, or toolbar needs a vertical stack.",
    es: "Añade <code>flex</code> al elemento padre y usa <code>flex-col</code> cuando una tarjeta, menú o barra de herramientas necesite una pila vertical.",
  },
  directionCallout: {
    en: "<strong>Axis reminder:</strong> with <code>flex-row</code>, horizontal space is the main axis. With <code>flex-col</code>, vertical space becomes the main axis. That changes how <code>justify-*</code> utilities behave.",
    es: "<strong>Recordatorio sobre los ejes:</strong> con <code>flex-row</code>, el espacio horizontal es el eje principal. Con <code>flex-col</code>, el espacio vertical se convierte en el eje principal. Esto cambia cómo se comportan las utilidades <code>justify-*</code>.",
  },
  justifyTitle: {
    en: "Tailwind Justify Content | Flexwind Froggy",
    es: "Justificar contenido con Tailwind | Flexwind Froggy",
  },
  justifyDescription: {
    en: "Learn Tailwind CSS justify-content utilities including justify-start, justify-center, justify-between, and justify-end.",
    es: "Aprende las utilidades justify-content de Tailwind CSS, como justify-start, justify-center, justify-between y justify-end.",
  },
  justifyHeading: {
    en: "Distribute items with justify",
    es: "Distribuye elementos con justify",
  },
  justifyLead: {
    en: "<code>justify-*</code> controls how a flex container distributes its children along the main axis. On a row, that is horizontal and on a column, it is vertical.",
    es: "<code>justify-*</code> controla cómo un contenedor flex distribuye sus elementos a lo largo del eje principal. En una fila es horizontal y en una columna es vertical.",
  },
  justifyStart: {
    en: "At the beginning of the main axis.",
    es: "Al inicio del eje principal.",
  },
  justifyCenter: { en: "In the center.", es: "En el centro." },
  justifyEnd: {
    en: "At the end of the main axis.",
    es: "Al final del eje principal.",
  },
  justifyBetween: {
    en: "At both ends, with equal space between items.",
    es: "En ambos extremos, con el mismo espacio entre los elementos.",
  },
  justifyAround: {
    en: "With space around every item.",
    es: "Con espacio alrededor de cada elemento.",
  },
  justifyEvenly: {
    en: "With equal space everywhere.",
    es: "Con el mismo espacio en todas partes.",
  },
  justifyTry: {
    en: "A navigation bar is a familiar use: send its two groups to opposite sides.",
    es: "Una barra de navegación es un uso habitual: coloca sus dos grupos en lados opuestos.",
  },
  justifyCallout: {
    en: "<strong>Use the parent:</strong> add <code>flex</code> and <code>justify-*</code> to the element that contains the items you want to arrange.",
    es: "<strong>Usa el elemento padre:</strong> añade <code>flex</code> y <code>justify-*</code> al elemento que contiene los elementos que quieres organizar.",
  },
  itemsTitle: {
    en: "Tailwind Align Items | Flexwind Froggy",
    es: "Alinear elementos con Tailwind | Flexwind Froggy",
  },
  itemsDescription: {
    en: "Learn Tailwind CSS align-items utilities: items-start, items-center, items-end, items-stretch, and items-baseline.",
    es: "Aprende las utilidades align-items de Tailwind CSS: items-start, items-center, items-end, items-stretch e items-baseline.",
  },
  itemsHeading: {
    en: "Align items across the axis",
    es: "Alinea elementos en el eje transversal",
  },
  itemsLead: {
    en: "<code>items-*</code> controls the cross axis: the axis perpendicular to the direction. In a normal row, it moves items vertically.",
    es: "<code>items-*</code> controla el eje transversal: el eje perpendicular a la dirección. En una fila normal, mueve los elementos verticalmente.",
  },
  itemsStart: {
    en: "Aligns children at the cross-axis start.",
    es: "Alinea los elementos al inicio del eje transversal.",
  },
  itemsCenter: {
    en: "Centers children across the cross axis.",
    es: "Centra los elementos en el eje transversal.",
  },
  itemsEnd: {
    en: "Aligns children at the cross-axis end.",
    es: "Alinea los elementos al final del eje transversal.",
  },
  itemsStretch: {
    en: "Stretches eligible children to fill the cross axis.",
    es: "Estira los elementos compatibles para llenar el eje transversal.",
  },
  itemsBaseline: {
    en: "Aligns text baselines.",
    es: "Alinea las líneas base del texto.",
  },
  itemsTry: {
    en: "To center an icon beside a label of any height, use a flex row with <code>items-center</code>.",
    es: "Para centrar un icono junto a una etiqueta de cualquier altura, usa una fila flex con <code>items-center</code>.",
  },
  itemsCallout: {
    en: "<strong>Remember:</strong> <code>justify-center</code> and <code>items-center</code> together center children in both directions.",
    es: "<strong>Recuerda:</strong> <code>justify-center</code> y <code>items-center</code> juntos centran los elementos en ambas direcciones.",
  },
  wrapTitle: {
    en: "Tailwind Flex Wrap | Flexwind Froggy",
    es: "Ajuste Flex de Tailwind | Flexwind Froggy",
  },
  wrapDescription: {
    en: "Learn Tailwind CSS flex-wrap, flex-nowrap, and flex-wrap-reverse for responsive flex layouts.",
    es: "Aprende flex-wrap, flex-nowrap y flex-wrap-reverse de Tailwind CSS para diseños flex adaptables.",
  },
  wrapHeading: {
    en: "Let flex items wrap",
    es: "Permite que los elementos flex se ajusten",
  },
  wrapLead: {
    en: "Flex items normally stay on one line, even when they become too narrow. Use <code>flex-wrap</code> to allow a new row when the container runs out of room.",
    es: "Los elementos flex normalmente permanecen en una sola línea, incluso cuando se vuelven demasiado estrechos. Usa <code>flex-wrap</code> para permitir una nueva fila cuando el contenedor se queda sin espacio.",
  },
  wrapNowrap: {
    en: "Keeps all items on one line. This is the default.",
    es: "Mantiene todos los elementos en una sola línea. Es el comportamiento predeterminado.",
  },
  wrapWrap: {
    en: "Moves overflowed items onto a new line.",
    es: "Mueve los elementos desbordados a una nueva línea.",
  },
  wrapReverse: {
    en: "Wraps items in the reverse cross-axis direction.",
    es: "Ajusta los elementos en la dirección transversal inversa.",
  },
  wrapTry: {
    en: "Tags, filter controls, and compact card lists often need to wrap gracefully on small screens.",
    es: "Las etiquetas, los controles de filtro y las listas de tarjetas compactas a menudo necesitan ajustarse con elegancia en pantallas pequeñas.",
  },
  wrapCallout: {
    en: "<strong>Responsive tip:</strong> pair wrapping with <code>gap-*</code> so rows and columns keep consistent breathing room. You can also switch with a breakpoint, such as <code>flex-col md:flex-row</code>.",
    es: "<strong>Consejo responsive:</strong> combina el ajuste con <code>gap-*</code> para que las filas y columnas mantengan un espacio uniforme. También puedes cambiar con un punto de ruptura, por ejemplo <code>flex-col md:flex-row</code>.",
  },
  gapTitle: {
    en: "Tailwind Flex Gap | Flexwind Froggy",
    es: "Espaciado Flex de Tailwind | Flexwind Froggy",
  },
  gapDescription: {
    en: "Learn Tailwind CSS gap, gap-x, and gap-y utilities for spacing flex items without margins.",
    es: "Aprende las utilidades gap, gap-x y gap-y de Tailwind CSS para espaciar elementos flex sin márgenes.",
  },
  gapHeading: { en: "Space items with gap", es: "Separa elementos con gap" },
  gapLead: {
    en: "<code>gap-*</code> adds space between flex or grid children. It is usually clearer and more reliable than adding margins to every item.",
    es: "<code>gap-*</code> añade espacio entre elementos flex o grid. Suele ser más claro y fiable que añadir márgenes a cada elemento.",
  },
  gapBoth: {
    en: "Adds the same spacing in both directions.",
    es: "Añade el mismo espacio en ambas direcciones.",
  },
  gapHorizontal: {
    en: "Adds horizontal spacing only.",
    es: "Añade espacio solo en horizontal.",
  },
  gapVertical: {
    en: "Adds vertical spacing only.",
    es: "Añade espacio solo en vertical.",
  },
  gapNone: { en: "Removes gaps.", es: "Elimina los espacios." },
  gapTry: {
    en: "Use Tailwind gap utility on the parent container to create consistent spacing between its children, instead of adding special margins to individual children.",
    es: "Usa la utilidad gap de Tailwind en el contenedor padre para crear un espacio uniforme entre sus elementos, en lugar de añadir márgenes especiales a cada uno.",
  },
  gapCallout: {
    en: "<strong>Choose the scale intentionally:</strong> Tailwind’s spacing scale gives a shared rhythm to your interface. Start with a small gap, then increase it only when grouping needs to feel looser.",
    es: "<strong>Elige la escala intencionalmente:</strong> la escala de espaciado de Tailwind tiene un ritmo uniforme. Empieza con un espacio pequeño y auméntalo solo cuando el grupo necesite estar más separado.",
  },
  orderTitle: {
    en: "Tailwind CSS Order Utilities | Flexwind Froggy",
    es: "Utilidades Order de Tailwind CSS | Flexwind Froggy",
  },
  orderDescription: {
    en: "Learn how Tailwind CSS order utilities change the visual order of flex items without changing the HTML source order.",
    es: "Aprende cómo las utilidades order de Tailwind CSS cambian el orden visual de los elementos flex sin cambiar el orden del HTML.",
  },
  orderHeading: { en: "Change the visual order", es: "Cambia el orden visual" },
  orderLead: {
    en: "<code>order-*</code> changes where a flex item appears among its siblings. The HTML source stays in the same order, which is important for reading and keyboard navigation.",
    es: "<code>order-*</code> cambia dónde aparece un elemento flex entre sus hermanos. El orden del HTML se mantiene, algo importante para la lectura y la navegación con teclado.",
  },
  orderFirst: {
    en: "Places the item before every normal ordered item.",
    es: "Coloca el elemento antes de todos los elementos con orden normal.",
  },
  orderLast: {
    en: "Places the item after every normal ordered item.",
    es: "Coloca el elemento después de todos los elementos con orden normal.",
  },
  orderNone: {
    en: "Returns the item to the default order of zero.",
    es: "Devuelve el elemento al orden predeterminado, cero.",
  },
  orderOne: {
    en: "Sets an explicit order value of one.",
    es: "Establece un valor de orden explícito de uno.",
  },
  orderTry: {
    en: "Use order sparingly. It can help put a secondary panel after the main content on small screens, while the document source remains logical.",
    es: "Usa order con moderación. Puede ayudar a colocar un panel secundario después del contenido principal en pantallas pequeñas, mientras el documento conserva un orden lógico.",
  },
  orderCallout: {
    en: "<strong>Accessibility note:</strong> visual order does not change screen-reader or keyboard order. Keep the source order meaningful, then use <code>order-*</code> only for presentation.",
    es: "<strong>Nota de accesibilidad:</strong> el orden visual no cambia el orden del lector de pantalla ni del teclado. Mantén un orden significativo en el código y usa <code>order-*</code> solo para la presentación.",
  },
  selfTitle: {
    en: "Tailwind CSS Align Self Utilities | Flexwind Froggy",
    es: "Utilidades Align Self de Tailwind CSS | Flexwind Froggy",
  },
  selfDescription: {
    en: "Learn Tailwind CSS self-start, self-center, self-end, self-stretch, and self-auto utilities for aligning one flex item.",
    es: "Aprende las utilidades self-start, self-center, self-end, self-stretch y self-auto de Tailwind CSS para alinear un elemento flex.",
  },
  selfHeading: {
    en: "Align one flex item",
    es: "Alinea un solo elemento flex",
  },
  selfLead: {
    en: "<code>self-*</code> lets one child override the container’s <code>items-*</code> alignment on the cross axis. It is useful when one item needs an intentional exception.",
    es: "<code>self-*</code> permite que un hijo anule la alineación <code>items-*</code> del contenedor en el eje transversal. Es útil cuando un elemento necesita una excepción intencional.",
  },
  selfAuto: {
    en: "Uses the container’s align-items value.",
    es: "Usa el valor align-items del contenedor.",
  },
  selfStart: {
    en: "Moves this item to the cross-axis start.",
    es: "Mueve este elemento al inicio del eje transversal.",
  },
  selfCenter: {
    en: "Centers this item on the cross axis.",
    es: "Centra este elemento en el eje transversal.",
  },
  selfEnd: {
    en: "Moves this item to the cross-axis end.",
    es: "Mueve este elemento al final del eje transversal.",
  },
  selfStretch: {
    en: "Stretches this item when its size allows it.",
    es: "Estira este elemento cuando su tamaño lo permite.",
  },
  selfTry: {
    en: "A message row can keep its avatar at the top while the action button is centered. Apply <code>self-start</code> only to the avatar instead of changing every child.",
    es: "Una fila de mensajes puede mantener el avatar arriba mientras el botón de acción queda centrado. Aplica <code>self-start</code> solo al avatar en lugar de cambiar todos los hijos.",
  },
  selfCallout: {
    en: "<strong>Choose the smallest scope:</strong> use <code>items-*</code> when all children share an alignment; use <code>self-*</code> for one deliberate exception.",
    es: "<strong>Elige el alcance más pequeño:</strong> usa <code>items-*</code> cuando todos los hijos comparten una alineación; usa <code>self-*</code> para una excepción concreta.",
  },
  contentTitle: {
    en: "Tailwind CSS Align Content Utilities | Flexwind Froggy",
    es: "Utilidades Align Content de Tailwind CSS | Flexwind Froggy",
  },
  contentDescription: {
    en: "Learn how Tailwind CSS content-start, content-center, content-between, and related utilities distribute wrapped flex lines.",
    es: "Aprende cómo las utilidades content-start, content-center, content-between y relacionadas de Tailwind CSS distribuyen líneas flex ajustadas.",
  },
  contentHeading: {
    en: "Distribute wrapped lines",
    es: "Distribuye líneas ajustadas",
  },
  contentLead: {
    en: "<code>content-*</code> distributes complete flex lines on the cross axis. It only has visible space to work with when the container wraps and has extra cross-axis room.",
    es: "<code>content-*</code> distribuye líneas flex completas en el eje transversal. Solo tiene espacio visible para trabajar cuando el contenedor se ajusta y sobra espacio en el eje transversal.",
  },
  contentStart: {
    en: "Packs wrapped lines at the cross-axis start.",
    es: "Agrupa las líneas ajustadas al inicio del eje transversal.",
  },
  contentCenter: {
    en: "Centers the group of wrapped lines.",
    es: "Centra el grupo de líneas ajustadas.",
  },
  contentBetween: {
    en: "Places the first and last lines at each edge.",
    es: "Coloca la primera y la última línea en cada borde.",
  },
  contentAround: {
    en: "Adds space around every wrapped line.",
    es: "Añade espacio alrededor de cada línea ajustada.",
  },
  contentEvenly: {
    en: "Makes the space between and around lines equal.",
    es: "Iguala el espacio entre las líneas y a su alrededor.",
  },
  contentTry: {
    en: "For a tall, wrapping badge collection, <code>content-center</code> can keep all rows together in the middle. Add <code>flex-wrap</code> and a height before judging the result.",
    es: "En una colección alta de etiquetas que se ajusta, <code>content-center</code> puede mantener todas las filas juntas en el centro. Añade <code>flex-wrap</code> y una altura antes de evaluar el resultado.",
  },
  contentCallout: {
    en: "<strong>Two different controls:</strong> <code>items-*</code> aligns items inside each line; <code>content-*</code> positions the lines as a group. With one line, <code>content-*</code> has no effect.",
    es: "<strong>Dos controles distintos:</strong> <code>items-*</code> alinea los elementos dentro de cada línea; <code>content-*</code> posiciona las líneas como grupo. Con una sola línea, <code>content-*</code> no tiene efecto.",
  },
};
