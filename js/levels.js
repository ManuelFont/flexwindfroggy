var levels = [
  {
    name: 'justify-content 1',
    instructions: {
      'en': '<p>Welcome to Flexwind Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the frog to the right.</p>',
      'es': '<p>Bienvenido a Flexwind Froggy, un juego donde ayudarás a Froggy y a sus amigos escribiendo código CSS. Guía a esta rana hacia la hoja de lirio en la derecha, usando la propiedad <code>justify-content</code>, la cual alinea elementos horizontalmente y acepta los siguientes valores:</p><ul><li><code>flex-start</code>: Alinea elementos al lado izquierdo del contenedor.</li><li><code>flex-end</code>: Alinea elementos al lado derecho del contenedor.</li><li><code>center</code>: Alinea elementos en el centro del contenedor.</li><li><code>space-between</code>: Muestra elementos con la misma distancia entre ellos.</li><li><code>space-around</code>: Muestra elementos con la misma separación alrededor de ellos.</li></ul><p>Por ejemplo, <code>justify-content: flex-end;</code> moverá la rana a la derecha.</p>',
    },
    board: 'g',
    style: { 'justify-content': 'flex-end' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 2',
    instructions: {
      'en': '<p>Use <code>justify-content</code> again to help these frogs get to their lilypads. Remember that this CSS property aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>',
      'es': '<p>Nuevamente, utiliza <code>justify-content</code> para ayudar a esas ranas a llegar a sus hojas de lirio. Recuerda que esta propiedad CSS alinea elementos horizontalmente y acepta los siguientes valores:<ul><li><code>flex-start</code>: Alinea elementos al lado izquierdo del contenedor.</li><li><code>flex-end</code>: Alinea elementos al lado derecho del contenedor.</li><li><code>center</code>: Alinea elementos en el centro del contenedor.</li><li><code>space-between</code>: Muestra elementos con la misma distancia entre ellos.</li><li><code>space-around</code>: Muestra elementos con la misma separación alrededor de ellos.</li></ul>',
    },
    board: 'gy',
    style: { 'justify-content': 'center' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 3',
    instructions: {
      'en': '<p>Help all three frogs find their lilypads just by using <code>justify-content</code>. This time, the lilypads have lots of space all around them.</p><p>If you find yourself forgetting the possible values for a property, you can click on the property name to view them. Try clicking on <code>justify-content</code>.</p>',
      'es': '<p>Ayuda a las tres ranas a encontrar sus hojas de lirio usando <code>justify-content</code>. En esta oportunidad, las hojas de lirio tienen mucho espacio a su alrededor.</p><p>Si no recuerdas los valores de una propiedad, puedes pasar el cursor sobre el nombre de una e inmediatamente se mostrarán. Prueba pasando el cursor sobre <code>justify-content</code>.</p>',
    },
    board: 'gyr',
    style: { 'justify-content': 'space-around' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 4',
    instructions: {
      'en': '<p>Now the lilypads on the edges have drifted to the shore, increasing the space between them. Use <code>justify-content</code>. This time, the lilypads have equal spacing between them.</p>',
      'es': '<p>Ahora las hojas de lirio de los bordes se han desplazado a un costado, aumentando así el espacio entre ellas. Usa <code>justify-content</code>. En esta oportunidad, las hojas de lirio tienen el mismo espacio entre ellas.</p>',
    },
    board: 'gyr',
    style: { 'justify-content': 'space-between' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 1',
    instructions: {
      'en': '<p>Now use <code>align-items</code> to help the frogs get to the bottom of the pond. This CSS property aligns items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>',
      'es': '<p>Ahora usa <code>align-items</code> para ayudar a las ranas a llegar al fondo del estanque. Esta propiedad CSS alinea elementos verticalmente y acepta los siguientes valores:</p><ul><li><code>flex-start</code>: Alinea elementos a la parte superior del contenedor.</li><li><code>flex-end</code>: Alinea elementos a la parte inferior del contenedor.</li><li><code>center</code>: Alinea elementos en el centro (verticalmente hablando) del contenedor.</li><li><code>baseline</code>: Muestra elementos en la línea base del contenedor</li><li><code>stretch</code>: Elementos se estiran para ajustarse al contenedor.</li></ul>',
    },
    board: 'gyr',
    style: { 'align-items': 'flex-end' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 2',
    instructions: {
      'en': '<p>Lead the frog to the center of the pond using a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
      'es': '<p>Mueve la rana al centro del estanque, usando una combinación de <code>justify-content</code> y <code>align-items</code>.</p>',
    },
    board: 'g',
    style: { 'justify-content': 'center', 'align-items': 'center' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 3',
    instructions: {
      'en': '<p>The frogs need to cross the pond again, this time for some lilypads with plenty of space around them. Use a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
      'es': '<p>Nuevamente, las ranas necesitan cruzar el estanque. En esta oportunidad, las hojas de lirio tienen mucho espacio alrededor de ellas. Debes usar una combinación de <code>justify-content</code> y <code>align-items</code>.</p>',
    },
    board: 'gyr',
    style: { 'justify-content': 'space-around', 'align-items': 'flex-end' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 1',
    instructions: {
      'en': '<p>The frogs need to get in the same order as their lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
      'es': '<p>Las ranas necesitan ponerse en el mismo orden que sus hojas de lirio usando <code>flex-direction</code>. Esta propiedad CSS define la dirección de los elementos en el contenedor, y acepta los siguientes valores:</p><ul><li><code>row</code>: Elementos son colocados en la misma dirección del texto.</li><li><code>row-reverse</code>: Elementos son colocados en la dirección opuesta al texto.</li><li><code>column</code>: Elementos se colocan de arriba hacia abajo.</li><li><code>column-reverse</code>: Elementos se colocan de abajo hacia arriba.</li></ul>',
    },
    board: 'gyr',
    style: { 'flex-direction': 'row-reverse' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 2',
    instructions: {
      'en': '<p>Help the frogs find their column of lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
      'es': '<p>Ayuda a las ranas a encontrar su hoja de lirio en la columna usando <code>flex-direction</code>. Esta propiedad CSS define la dirección de los elementos en el contenedor, y acepta los siguientes valores:</p><ul><li><code>row</code>: Elementos son colocados en la misma dirección del texto.</li><li><code>row-reverse</code>: Elementos son colocados en la dirección opuesta al texto.</li><li><code>column</code>: Elementos se colocan de arriba hacia abajo.</li><li><code>column-reverse</code>: Elementos se colocan de abajo hacia arriba.</li></ul>',
    },
    board: 'gyr',
    style: { 'flex-direction': 'column' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 3',
    instructions: {
      'en': '<p>Help the frogs get to their own lilypads. Although they seem close, it will take both <code>flex-direction</code> and <code>justify-content</code> to get them there.</p><p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>',
      'es': '<p>Ayuda a las ranas a llegar a sus hojas de lirio. A pesar de que ellas parecen estar cerca, necesitarás usar <code>flex-direction</code> y <code>justify-content</code> para llegar hasta allí.</p><p>Nota que cuando estableces la dirección a una fila invertida o columna, el inicio y el final también se invierten.</p>',
    },
    board: 'gyr',
    style: { 'flex-direction': 'row-reverse', 'justify-content': 'flex-end' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 4',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p><p>Notice that when the flex direction is a column, <code>justify-content</code> changes to the vertical and <code>align-items</code> to the horizontal.</p>',
      'es': '<p>Ayuda a las ranas a encontrar sus hojas de lirio usando <code>flex-direction</code> y <code>justify-content</code>.</p><p>Nota que cuando es una columna, <code>justify-content</code> cambia a vertical y <code>align-items</code> a horizontal.</p>',
    },
    board: 'gyr',
    style: { 'flex-direction': 'column', 'justify-content': 'flex-end' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 5',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p>',
      'es': '<p>Ayuda a las ranas a encontrar sus hojas de lirio usando <code>flex-direction</code> y <code>justify-content</code>.</p>',
    },
    board: 'gyr',
    style: { 'flex-direction': 'column-reverse', 'justify-content': 'space-between' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 6',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code>, <code>justify-content</code>, and <code>align-items</code>.</p>',
      'es': '<p>Ayuda a las ranas a encontrar sus hojas de lirio usando <code>flex-direction</code>, <code>justify-content</code>, y <code>align-items</code>.</p>',
    },
    board: 'gyr',
    style: { 'flex-direction': 'row-reverse', 'justify-content': 'center', 'align-items': 'flex-end' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'order 1',
    instructions: {
      'en': '<p>Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <code>order</code> property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).</p><p>Use the <code>order</code> property to reorder the frogs according to their lilypads.</p>',
      'es': '<p>A veces, invertir el orden de una fila o columna de un contenedor no es suficiente. En esos casos, nosotros podemos aplicar la propiedad <code>order</code> a elementos individuales. Por defecto, los elementos tienen un valor 0, pero nosotros podemos usar esta propiedad para establecerlo a un número entero positivo o negativo.</p><p>Usa la propiedad <code>order</code> para reordenar las ranas de acuerdo a sus hojas de lirio.</p>',
    },
    board: 'gyr',
    selector: '> :nth-child(2)',
    classes: { '#pond, #background': 'wrap' },
    style: { 'order': '2' },
    before: "#pond {\n  display: flex;\n}\n\n.yellow {\n",
    after: "}"
  },
  {
    name: 'order 2',
    instructions: {
      'en': '<p>Use the <code>order</code> property to send the red frog to his lilypad.</p>',
      'es': '<p>Usa la propiedad <code>order</code> para enviar la rana de color rojo a su hoja de lirio.</p>',
    },
    board: 'gggrg',
    selector: '> :nth-child(4)',
    classes: { '#pond, #background': 'wrap' },
    style: { 'order': '-1' },
    before: "#pond {\n  display: flex;\n}\n\n.red {\n",
    after: "}"
  },
  {
    name: 'align-self 1',
    instructions: {
      'en': '<p>Another property you can apply to individual items is <code>align-self</code>. This property accepts the same values as <code>align-items</code> and its value for the specific item.</p>',
      'es': '<p>Otra propiedad que puedes aplicar a elementos individuales es <code>align-self</code>. Esta propiedad acepta los mismos valores de <code>align-items</code> y sus valores son usados para un elemento específico</p>',
    },
    board: 'ggygg',
    selector: '> :nth-child(3)',
    style: { 'align-self': 'flex-end' },
    before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    after: "}"
  },
  {
    name: 'align-self 2',
    instructions: {
      'en': '<p>Combine <code>order</code> with <code>align-self</code> to help the frogs to their destinations.</p>',
      'es': '<p>Combina <code>order</code> con <code>align-self</code> para ayudar a las ranas a llegar a sus destinos.</p>',
    },
    board: 'ygygg',
    selector: '> .yellow',
    style: { 'align-self': 'flex-end', 'order': '2' },
    before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    after: "}"
  },
  {
    name: 'flex-wrap 1',
    instructions: {
      'en': '<p>Oh no! The frogs are all squeezed onto a single row of lilypads. Spread them out using the <code>flex-wrap</code> property, which accepts the following values:</p><ul><li><code>nowrap</code>: Every item is fit to a single line.</li><li><code>wrap</code>: Items wrap around to additional lines.</li><li><code>wrap-reverse</code>: Items wrap around to additional lines in reverse.</li></ul>',
      'es': '<p>¡Oh, no! Todas las ranas están apretadas en una sola fila de hojas de lirio. Manos a la obra, vamos a distribuirlas correctamente usando la propiedad <code>flex-wrap</code>, la cual acepta los siguientes valores:</p><ul><li><code>nowrap</code>: Cada elemento se ajusta en una sola línea.</li><li><code>wrap</code>: los elementos se envuelven alrededor de líneas adicionales.</li><li><code>wrap-reverse</code>: Los elementos se envuelven alrededor de líneas adicionales en reversa.</li></ul>',
    },
    board: 'ygggggr',
    style: { 'flex-wrap': 'wrap' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-wrap 2',
    instructions: {
      'en': '<p>Help this army of frogs form three orderly columns using a combination of <code>flex-direction</code> and <code>flex-wrap</code>.</p>',
      'es': '<p>Ayuda a este ejército de ranas a ordenarse en tres columnas usando una combinación de <code>flex-direction</code> y <code>flex-wrap</code>.</p>',
    },
    board: 'gggggrrrrryyyyy',
    style: { 'flex-direction': 'column', 'flex-wrap': 'wrap' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-flow 1',
    instructions: {
      'en': '<p>The two properties <code>flex-direction</code> and <code>flex-wrap</code> are used so often together that the shorthand property <code>flex-flow</code> was created to combine them. This shorthand property accepts the value of the two properties separated by a space.</p><p>For example, you can use <code>flex-flow: row wrap</code> to set rows and wrap them.</p><p>Try using <code>flex-flow</code> to repeat the previous level.</p>',
      'es': '<p>Las dos propiedades <code>flex-direction</code> y <code>flex-wrap</code> son usadas a menudo en conjunto con la propiedad abreviada <code>flex-flow</code>, la cual fue creada para combinarlas. Esta propiedad abreviada, acepta un valor de cada una separada por un espacio.</p><p>Por ejemplo, puedes usar <code>flex-flow</code> para establecer filas y envolverlas.</p><p>Trata de usar <code>flex-flow</code> para volver a realizar el nivel anterior.</p>',
    },
    board: 'gggggrrrrryyyyy',
    style: { 'flex-flow': 'column wrap' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-content 1',
    instructions: {
      'en': '<p>The frogs are spread all over the pond, but the lilypads are bunched at the top. You can use <code>align-content</code> to set how multiple lines are spaced apart from each other. This property takes the following values:</p><ul><li><code>flex-start</code>: Lines are packed at the top of the container.</li><li><code>flex-end</code>: Lines are packed at the bottom of the container.</li><li><code>center</code>: Lines are packed at the vertical center of the container.</li><li><code>space-between</code>: Lines display with equal spacing between them.</li><li><code>space-around</code>: Lines display with equal spacing around them.</li><li><code>stretch</code>: Lines are stretched to fit the container.</li></ul><p>This can be confusing, but <code>align-content</code> determines the spacing between lines, while <code>align-items</code> determines how the items as a whole are aligned within the container. When there is only one line, <code>align-content</code> has no effect.</p>',
      'es': '<p>Las ranas están repartidas por todo el estanque, pero las hojas de lirio están agrupadas en la parte superior. Puedes usar <code>align-content</code> para establecer como múltiples líneas están separadas una de otra. Esta propiedad acepta los siguientes valores:</p><ul><li><code>flex-start</code>: Las líneas se posicionan en la parte superior del contenedor.</li><li><code>flex-end</code>: Las líneas se posicionan en la parte inferior del contenedor.</li><li><code>center</code>: Las líneas se posicionan en el centro (verticalmente hablando) del contenedor.</li><li><code>space-between</code>: Las líneas se muestran con la misma distancia entre ellas.</li><li><code>space-around</code>: Las líneas se muestran con la misma separación alrededor de ellas.</li><li><code>stretch</code>: Las líneas se estiran para ajustarse al contenedor.</li></ul><p>Esto puede ser confuso, pero <code>align-content</code> determina el espacio entre las líneas, mientras que <code>align-items</code> determina como los elementos en su conjunto están alineados dentro del contenedor. Cuando hay solo una línea, <code>align-content</code> no tiene efecto.</p>',
    },
    board: 'ggggggggggggggg',
    classes: { '#pond, #background': 'wrap' },
    style: { 'align-content': 'flex-start' },
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 2',
    instructions: {
      'en': '<p>Now the current has bunched the lilypads at the bottom. Use <code>align-content</code> to guide the frogs there.</p>',
      'es': '<p>Ahora, la corriente ha agrupado las hojas de lirio en la parte inferior. Usa <code>align-content</code> para guiar las ranas hasta allí.</p>',
    },
    board: 'ggggggggggggggg',
    classes: { '#pond, #background': 'wrap' },
    style: { 'align-content': 'flex-end' },
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 3',
    instructions: {
      'en': '<p>The frogs have had a party, but it is time to go home. Use a combination of <code>flex-direction</code> and <code>align-content</code> to get them to their lilypads.</p>',
      'es': '<p>Las ranas han tenido una fiesta, pero es momento de volver a casa. Usa una combinación de <code>flex-direction</code> y <code>align-content</code> para llevarlas a sus hojas de lirio.</p>',
    },
    board: 'rgggyrgggyrgggy',
    classes: { '#pond, #background': 'wrap' },
    style: { 'flex-direction': 'column-reverse', 'align-content': 'center' },
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 4',
    instructions: {
      'en': '<p>Bring the frogs home one last time by using the CSS properties you\'ve learned:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
      'es': '<p>Trae a las ranas a su casa una vez más usando las propiedades CSS que aprendiste:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    },
    board: 'rggggyy',
    style: { 'flex-direction': 'column-reverse', 'flex-wrap': 'wrap-reverse', 'align-content': 'space-between', 'justify-content': 'center' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  }
];

var levelWin = {
  name: 'win',
  instructions: {
    'en': '<p>You win! Thanks to your mastery of flexbox, you were able to help all of the frogs to their lilypads. Just look how hoppy they are!</p><p>If you found this ribbeting, be sure to visit <a href="https://codepip.com/games/grid-garden/">Grid Garden</a> to learn about another powerful new feature of CSS layout. You can also find other coding games over at <a href="https://codepip.com/">Codepip</a>. And be sure to share Flexwind Froggy with your friends!</p>',
    'es': '<p>¡Ganaste! Gracias a tu dominio de flexbox has sido capaz llevar a todas las ranas a sus nenúfares. ¡Basta con ver lo felices que son!</p><p>Si te pareció divertido, revisa otros proyectos en mi <a href="https://thomaspark.co">blog</a> o <a href="https://twitter.com/thomashpark">Twitter</a> y asegúrate de compartir Flexwind Froggy con tus amigos.</p>',
  },
  board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
  classes: { '#pond, #background': 'wrap' },
  style: {},
  before: "#pond {\n  display: flex;\n",
  after: "}"
};
