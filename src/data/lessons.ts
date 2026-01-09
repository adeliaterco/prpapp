import { Question } from '@/components/QuestionField';

// Import lesson images
import lesson1Image from '@/assets/lesson1.png';
import lesson2Image from '@/assets/lesson2.png';
import lesson3Image from '@/assets/lesson3.png';
import lesson4Image from '@/assets/lesson4.png';
import lesson5Image from '@/assets/lesson5.png';
import lesson6Image from '@/assets/lesson6.png';
import lesson7Image from '@/assets/lesson7.png';

export interface LessonSection {
  title: string;
  content: string;
}

export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  sections: LessonSection[];
  imagePlaceholder: string;
  image?: string;
  questions?: Question[];
}

// Questions for each lesson
export const lessonQuestions: Record<number, Question[]> = {
  1: [
    {
      id: 'dias_ruptura',
      type: 'number',
      question: '¿Cuántos días hace que se fue?',
      placeholder: 'Ej: 5',
      min: 0,
      max: 365,
      icon: '📅',
      required: true
    },
    {
      id: 'motivo_principal',
      type: 'radio',
      question: '¿Cuál fue el motivo principal de la ruptura?',
      icon: '💔',
      required: true,
      options: [
        { label: 'Hay otro hombre involucrado', value: 'otro_hombre' },
        { label: 'Falta de atención de mi parte', value: 'falta_atencion' },
        { label: 'Problemas de comunicación', value: 'comunicacion' },
        { label: 'No estoy seguro del motivo exacto', value: 'no_se' }
      ]
    },
    {
      id: 'ultimo_mensaje',
      type: 'radio',
      question: '¿Ella respondió tu último mensaje?',
      icon: '💬',
      required: true,
      options: [
        { label: 'Sí, respondió normalmente', value: 'si' },
        { label: 'No, me dejó en visto', value: 'no' },
        { label: 'Hace mucho tiempo que no hablamos', value: 'hace_tiempo' }
      ]
    },
    {
      id: 'otro_hombre',
      type: 'radio',
      question: '¿Hay otro hombre en escena actualmente?',
      icon: '👤',
      required: true,
      options: [
        { label: 'Sí, estoy seguro', value: 'si' },
        { label: 'No, no hay nadie', value: 'no' },
        { label: 'No estoy seguro', value: 'no_se' }
      ]
    },
    {
      id: 'objetivo_personal',
      type: 'textarea',
      question: '¿Cuál es tu objetivo principal al tomar este curso?',
      placeholder: 'Escribe con honestidad qué esperas lograr...',
      icon: '🎯',
      required: true,
      minLength: 10,
      maxLength: 500
    }
  ],
  2: [
    {
      id: 'contacto_actual',
      type: 'radio',
      question: '¿Con qué frecuencia tienes contacto con ella actualmente?',
      icon: '📱',
      required: true,
      options: [
        { label: 'Todos los días', value: 'diario' },
        { label: 'Varias veces por semana', value: 'semanal' },
        { label: 'Ocasionalmente', value: 'ocasional' },
        { label: 'Sin contacto', value: 'sin_contacto' }
      ]
    },
    {
      id: 'gatillo_identificado',
      type: 'radio',
      question: '¿Cuál gatillo emocional crees que es más relevante para tu situación?',
      icon: '🎯',
      required: true,
      options: [
        { label: 'Escasez Emocional - Hacerme desear', value: 'escasez' },
        { label: 'Nostalgia Controlada - Revivir momentos', value: 'nostalgia' },
        { label: 'Transformación Visible - El nuevo yo', value: 'transformacion' }
      ]
    },
    {
      id: 'plan_30_dias',
      type: 'textarea',
      question: '¿Qué acciones tomarás en los próximos 30 días basándote en lo aprendido?',
      placeholder: 'Describe al menos 3 acciones concretas que implementarás...',
      icon: '📋',
      required: true,
      minLength: 30,
      maxLength: 500
    }
  ],
  3: [
    {
      id: 'primer_mensaje',
      type: 'textarea',
      question: '¿Cómo sería tu mensaje de primer contacto ideal?',
      placeholder: 'Escribe el mensaje que enviarías siguiendo los principios de esta lección...',
      icon: '✉️',
      required: true,
      minLength: 20,
      maxLength: 300
    },
    {
      id: 'cuando_contactar',
      type: 'radio',
      question: '¿Cuándo planeas hacer el primer contacto?',
      icon: '⏰',
      required: true,
      options: [
        { label: 'Después de completar el contacto cero (21-30 días)', value: 'despues_contacto_cero' },
        { label: 'Esta semana', value: 'esta_semana' },
        { label: 'Cuando me sienta listo', value: 'cuando_listo' }
      ]
    }
  ],
  4: [
    {
      id: 'nivel_confianza',
      type: 'radio',
      question: '¿Cuál es tu nivel de confianza para escalar la comunicación?',
      icon: '📊',
      required: true,
      options: [
        { label: 'Muy confiado - Estoy listo', value: 'muy_confiado' },
        { label: 'Algo confiado - Necesito practicar', value: 'algo_confiado' },
        { label: 'Poco confiado - Tengo dudas', value: 'poco_confiado' }
      ]
    },
    {
      id: 'estrategia_escalacion',
      type: 'textarea',
      question: '¿Cuál será tu estrategia para escalar gradualmente?',
      placeholder: 'Describe cómo planeas pasar de mensajes casuales a conversaciones más profundas...',
      icon: '📈',
      required: true,
      minLength: 30,
      maxLength: 500
    }
  ],
  5: [
    {
      id: 'objeciones_comunes',
      type: 'textarea',
      question: '¿Cuáles son las objeciones que crees que ella podría tener?',
      placeholder: 'Lista las posibles objeciones y cómo planeas manejarlas...',
      icon: '🛡️',
      required: true,
      minLength: 30,
      maxLength: 500
    },
    {
      id: 'punto_quiebre',
      type: 'radio',
      question: '¿Qué tanto has cambiado desde la ruptura?',
      icon: '🔄',
      required: true,
      options: [
        { label: 'Mucho - He trabajado en mí mismo significativamente', value: 'mucho' },
        { label: 'Algo - He hecho algunos cambios', value: 'algo' },
        { label: 'Poco - Recién estoy empezando', value: 'poco' }
      ]
    }
  ],
  6: [
    {
      id: 'propuesta_reencuentro',
      type: 'textarea',
      question: '¿Cómo le propondrías verse en persona?',
      placeholder: 'Describe el mensaje o la forma en que le pedirías una cita...',
      icon: '🎭',
      required: true,
      minLength: 20,
      maxLength: 400
    },
    {
      id: 'lugar_ideal',
      type: 'text',
      question: '¿Cuál sería el lugar ideal para el reencuentro?',
      placeholder: 'Ej: Un café tranquilo donde tuvimos buenos momentos...',
      icon: '📍',
      required: true,
      maxLength: 200
    }
  ],
  7: [
    {
      id: 'compromiso_cambio',
      type: 'textarea',
      question: '¿Qué cambios permanentes te comprometes a mantener?',
      placeholder: 'Lista los cambios que harás para que la relación funcione esta vez...',
      icon: '🌟',
      required: true,
      minLength: 50,
      maxLength: 600
    },
    {
      id: 'vision_futuro',
      type: 'textarea',
      question: '¿Cómo visualizas tu relación en 1 año si todo sale bien?',
      placeholder: 'Describe tu visión del futuro juntos...',
      icon: '🔮',
      required: true,
      minLength: 30,
      maxLength: 500
    },
    {
      id: 'leccion_principal',
      type: 'textarea',
      question: '¿Cuál es la lección más importante que aprendiste de este curso?',
      placeholder: 'Reflexiona sobre el aprendizaje más valioso...',
      icon: '💡',
      required: true,
      minLength: 20,
      maxLength: 400
    }
  ]
};

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Diagnóstico Profundo en 5 Minutos",
    subtitle: "Descubre la verdad oculta detrás de tu ruptura",
    icon: "🔍",
    image: lesson1Image,
    imagePlaceholder: "[IMAGEN: Infografía de los 5 motivos de ruptura, con iconos y texto conciso para cada uno.]",
    sections: [
      {
        title: "1.1 Introducción: La Verdad Incómoda de tu Ruptura",
        content: `Antes de que sigas leyendo, necesito que entiendas algo fundamental: **la mayoría de los hombres que pasan por una ruptura están en negación total**. Se culpan a sí mismos por todo, o peor aún, culpan completamente a su ex sin mirar hacia adentro.

La realidad es mucho más compleja. Tu ruptura tiene causas profundas que probablemente no ves con claridad. Quizás crees que fue por una discusión específica, por algo que dijiste o dejaste de decir. Pero esas son solo las manifestaciones superficiales de problemas más grandes.

**La importancia de un diagnóstico preciso no puede subestimarse.** Si no entiendes exactamente por qué se fue, cualquier intento de reconquista será como disparar a ciegas en la oscuridad. Podrías tener suerte, pero lo más probable es que falles.

En los próximos minutos, vamos a desenterrar la verdad. Va a ser incómodo. Vas a sentir resistencia. Pero es absolutamente necesario si quieres tener alguna oportunidad real de recuperarla.`
      },
      {
        title: "1.2 Los 5 Motivos Reales por los que se fue",
        content: `**Motivo 1: La Pérdida de Valor Percibido**

Cuando conociste a tu ex, eras un "premio". Tenías algo que ella quería: misterio, ambición, independencia, carisma. Con el tiempo, te volviste predecible. Dejaste de ser ese hombre que la conquistó.

*Ejemplos de comportamientos que disminuyen tu valor:*
- Dejar tus hobbies y pasiones por estar con ella 24/7
- Siempre estar disponible cuando ella llama
- Dejar de cuidar tu apariencia física
- Perder el contacto con tus amigos
- Hacer de ella el centro de tu universo

Cuando te convertiste en "seguro", dejaste de ser emocionante. Y las mujeres, aunque digan lo contrario, necesitan esa chispa de incertidumbre para mantener el interés.

---

**Motivo 2: La Monotonía y la Zona de Confort**

Las relaciones tienen un enemigo silencioso: la rutina. Al principio, cada cita era una aventura. Cada conversación revelaba algo nuevo. Pero después de meses o años, cayeron en patrones predecibles.

*Ejemplos de monotonía mortal:*
- Las mismas películas, los mismos restaurantes, los mismos planes
- Conversaciones que se limitan a "¿cómo estuvo tu día?"
- Falta de sorpresas o gestos espontáneos
- Intimidad que se vuelve mecánica y programada
- Dejar de hacer cosas nuevas juntos

La zona de confort es cómoda, pero es donde las relaciones van a morir. Ella empezó a preguntarse: "¿Es esto todo lo que hay?"

---

**Motivo 3: La Falta de Desafío y Crecimiento**

Las mujeres son atraídas por hombres que las inspiran a ser mejores versiones de sí mismas. Quieren a alguien que las desafíe intelectual, emocional y personalmente.

*Señales de que dejaste de ser un desafío:*
- Siempre estás de acuerdo con ella para evitar conflictos
- Dejaste de tener opiniones propias o metas personales
- Tu vida gira exclusivamente alrededor de la relación
- No la cuestionas cuando está equivocada
- Eres "demasiado fácil" y nunca hay tensión positiva

Cuando te volviste completamente predecible y complaciente, perdiste el factor que la mantenía enganchada.

---

**Motivo 4: La Inconsistencia Emocional**

Tus altibajos emocionales pueden haber creado un ambiente de inestabilidad. Quizás reaccionabas exageradamente a problemas pequeños, o te cerrabas emocionalmente cuando las cosas se ponían difíciles.

*Ejemplos de inconsistencia emocional:*
- Pasar de la felicidad extrema a la depresión sin razón aparente
- Explotar por cosas menores
- Dar el tratamiento del silencio cuando estás molesto
- Necesitar constante validación y seguridad
- Mostrar celos irracionales o desconfianza

Las mujeres buscan seguridad emocional. Si ella sentía que caminar sobre cáscaras de huevo era la norma, eventualmente decidió que era más fácil irse.

---

**Motivo 5: La Aparición de una "Mejor Opción"**

No siempre es otro hombre. A veces, la "mejor opción" es simplemente una vida sin ti. Ella empezó a imaginar un futuro donde tiene libertad, nuevas experiencias, y la posibilidad de encontrar a alguien "mejor".

*Esto sucede cuando:*
- Ella siente que ha superado la relación emocionalmente
- Ve en ti más problemas que beneficios
- Sus amigas o familiares influyen en su percepción
- Apareció alguien (real o imaginario) que le ofrece lo que tú no
- Simplemente quiere explorar quién es fuera de la relación

Entender este motivo es crucial porque significa que necesitas convertirte en esa "mejor opción" que ella pensó que encontraría afuera.`
      },
      {
        title: "1.3 Test de Diagnóstico Interactivo",
        content: `Es momento de hacer un ejercicio de auto-reflexión. Responde honestamente a las siguientes preguntas en tu mente:

**Pregunta 1:** En los últimos meses de la relación, ¿cuántas veces iniciaste planes emocionantes o sorpresas?
- A) Regularmente, siempre buscaba formas de sorprenderla
- B) Ocasionalmente, cuando me acordaba
- C) Rara vez o nunca

**Pregunta 2:** ¿Cómo reaccionabas cuando ella expresaba una opinión diferente a la tuya?
- A) Debatíamos sanamente y respetaba su punto de vista
- B) Generalmente cedía para evitar conflictos
- C) Me frustraba o me cerraba emocionalmente

**Pregunta 3:** ¿Qué porcentaje de tu tiempo libre dedicabas a la relación vs. a ti mismo?
- A) 50/50, mantenía un balance saludable
- B) 70/30 a favor de la relación
- C) Prácticamente todo mi tiempo era para ella

**Pregunta 4:** ¿Cómo describirían tus amigos tu actitud durante la relación?
- A) Seguías siendo el mismo de siempre
- B) Cambiaste un poco, pero mantenías tu esencia
- C) Te perdiste completamente en la relación

**Pregunta 5:** ¿Con qué frecuencia te cuidabas físicamente (ejercicio, vestimenta, higiene) comparado con cuando la conociste?
- A) Igual o mejor que antes
- B) Un poco menos, pero aceptable
- C) Mucho menos, me dejé ir

**Si la mayoría de tus respuestas fueron C:** Tu principal problema fue la pérdida de valor percibido y la falta de desafío.

**Si la mayoría fueron B:** Caíste en la monotonía y la inconsistencia emocional.

**Si la mayoría fueron A pero aún así terminaron:** El problema puede ser más profundo, relacionado con compatibilidad fundamental o factores externos.`
      },
      {
        title: "1.4 Análisis de Tu Situación: El Primer Paso",
        content: `Ahora que has identificado el patrón que contribuyó a tu ruptura, estás en una posición de poder. **El conocimiento es la primera arma en tu arsenal de reconquista.**

No te sientas mal por lo que descubriste. La mayoría de los hombres cometen estos errores porque nadie les enseñó cómo funcionan realmente las dinámicas de una relación. No es tu culpa, pero ahora es tu responsabilidad corregirlo.

**Lo que acabas de hacer es más de lo que el 90% de los hombres harán jamás.** Ellos seguirán repitiendo los mismos patrones, perdiendo relación tras relación, preguntándose por qué las mujeres "siempre los dejan".

Tú ahora tienes claridad. Y esa claridad es el fundamento sobre el cual construiremos tu estrategia de reconquista.

En la próxima lección, aprenderás los **3 Gatillos Emocionales más poderosos** que puedes activar para despertar el deseo de tu ex de volver contigo. Estos gatillos funcionan a nivel subconsciente y son la base de toda reconquista exitosa.

**Recuerda:** El diagnóstico que acabas de hacer no es para deprimirte, sino para empoderarte. Ahora sabes exactamente en qué trabajar.`
      }
    ]
  },
  {
    id: 2,
    title: "Los 3 Gatillos Más Poderosos",
    subtitle: "La psicología secreta que despierta su deseo",
    icon: "🎯",
    image: lesson2Image,
    imagePlaceholder: "[IMAGEN: Diagrama de los 3 gatillos interconectados, mostrando cómo se refuerzan mutuamente.]",
    sections: [
      {
        title: "2.1 Introducción a los Gatillos Emocionales",
        content: `Los gatillos emocionales son **palancas psicológicas** que, cuando se activan correctamente, despiertan emociones específicas en tu ex. No estamos hablando de manipulación barata o trucos superficiales. Estamos hablando de psicología aplicada, basada en décadas de investigación sobre comportamiento humano.

Cuando una mujer termina una relación, no significa que sus sentimientos por ti desaparecieron instantáneamente. Esos sentimientos están dormidos, esperando ser despertados. Los gatillos que vas a aprender son las herramientas para despertar esos sentimientos.

**Importante:** Estos gatillos solo funcionan si los aplicas con autenticidad. Si tu ex percibe que estás siendo manipulador o falso, el efecto será el contrario. La clave está en internalizar estos principios, no en fingirlos.

Los tres gatillos que dominarás son:
1. **Escasez Emocional** - Hacerte desear
2. **Nostalgia Controlada** - Revivir los mejores momentos
3. **Transformación Visible** - El nuevo tú que ella desea`
      },
      {
        title: "2.2 Gatillo 1: Escasez Emocional - Hazte Desear",
        content: `**El principio fundamental:** Las personas valoran más lo que escasea. Cuando algo está siempre disponible, perdemos apreciación por ello. Cuando algo desaparece, de repente nos damos cuenta de cuánto lo queríamos.

Después de una ruptura, el error más común es bombardear a tu ex con mensajes, llamadas y súplicas. Esto tiene el efecto contrario: la ahuyenta más. Cada mensaje desesperado grita "estoy disponible cuando quieras", lo cual elimina completamente tu valor percibido.

**La regla del contacto cero:**

El contacto cero significa exactamente lo que suena: cero comunicación iniciada por ti. Esto incluye:
- No mensajes de texto
- No llamadas
- No likes en redes sociales
- No comentarios
- No "apariciones casuales" en lugares donde sabes que estará
- No usar amigos en común para saber de ella

*¿Cuánto tiempo?* Mínimo 21 días, idealmente 30. El cerebro necesita este tiempo para empezar a procesar la pérdida.

**Excepciones al contacto cero:**
- Si tienen hijos en común (comunicación estrictamente sobre los niños)
- Si trabajan juntos (comunicación estrictamente profesional)
- Si ella te contacta primero (responde brevemente, pero no inicies conversaciones)

**Ejemplos de mensajes que crean escasez (para cuando rompas el contacto cero):**

❌ Incorrecto: "Hola, te extraño mucho. ¿Podemos hablar?"

✅ Correcto: "Oye, vi algo que me recordó a ti. Espero que estés bien." (Sin más explicación, sin preguntas que requieran respuesta)

❌ Incorrecto: "No puedo dejar de pensar en ti. Por favor, dame otra oportunidad."

✅ Correcto: [Silencio total durante semanas, seguido de una aparición casual en un lugar social donde luces increíble]

**La psicología detrás:**
Cuando desapareces, su cerebro empieza a hacerle preguntas: "¿Por qué no me busca? ¿Ya me olvidó? ¿Estará con alguien más?" Estas preguntas crean incertidumbre, y la incertidumbre genera interés.`
      },
      {
        title: "2.3 Gatillo 2: Nostalgia Controlada",
        content: `**El principio fundamental:** Los recuerdos positivos tienen un poder emocional enorme. Cuando evocas los momentos más felices que compartieron, activas las mismas emociones que sintió en esos momentos.

**La diferencia crítica:**
- ❌ "Recordar el pasado" = Vivir en el pasado, parecer estancado
- ✅ "Nostalgia controlada" = Evocar emociones específicas de forma estratégica

**Cómo usar la nostalgia de forma efectiva:**

1. **Selecciona los recuerdos correctos:**
   - Momentos de risa genuina
   - Experiencias únicas que solo compartieron ustedes dos
   - Momentos donde ella se sintió especialmente amada o especial
   - Situaciones donde superaron algo juntos

2. **El momento adecuado:**
   - Nunca en las primeras semanas post-ruptura
   - Cuando la comunicación ya se ha restablecido de forma neutral
   - Cuando ella muestra señales de apertura

**Ejemplos de nostalgia controlada:**

❌ Incorrecto: "Me acuerdo cuando estábamos juntos y éramos tan felices. Extraño esos tiempos."

✅ Correcto: "Pasé por [lugar específico] hoy y no pude evitar sonreír recordando [momento gracioso específico]. Fue de esos momentos únicos."

❌ Incorrecto: Enviar una foto vieja de ustedes juntos con un corazón

✅ Correcto: "Escuché [canción que bailaron] en un café hoy. Sigues siendo la única persona que conozco que [detalle gracioso de ese momento]."

**La clave:** No estás pidiendo nada. No estás expresando dolor. Solo estás compartiendo un recuerdo positivo de forma ligera y casual. Esto la obliga a recordar también, y esos recuerdos evocan las emociones asociadas.

**Lugares y objetos como gatillos:**
Cada relación tiene sus "lugares sagrados": el restaurante de la primera cita, el parque donde se besaron por primera vez, la playa del viaje especial. Estos lugares son anclas emocionales. Visitarlos (y que ella lo sepa indirectamente) puede activar la nostalgia sin que tengas que decir nada.`
      },
      {
        title: "2.4 Gatillo 3: Transformación Visible",
        content: `**El principio fundamental:** Cuando te ve como una versión mejorada de ti mismo, le surge la pregunta: "¿Me perdí de algo bueno?"

**Por qué la transformación es esencial:**
Tu ex te dejó por una razón. Si sigues siendo exactamente la misma persona, ¿por qué esperarías un resultado diferente? La transformación no es solo por ella; es principalmente por ti. Pero el efecto secundario es que ella lo notará.

**Las tres dimensiones de la transformación:**

**1. Transformación Física:**
- Mejora tu condición física (gimnasio, deportes, actividad)
- Actualiza tu estilo de vestimenta
- Cuida tu higiene y grooming más que nunca
- Mejora tu postura y lenguaje corporal

*Ejemplo:* Si ella te dejó cuando tenías 10 kilos de más y vestías camisetas viejas, que te vea 3 meses después en la mejor forma de tu vida, con ropa que realza tu figura, enviará un mensaje poderoso.

**2. Transformación Mental/Emocional:**
- Desarrolla nuevos intereses y hobbies
- Lee libros, toma cursos, aprende habilidades
- Trabaja en tu inteligencia emocional
- Medita o practica mindfulness
- Considera terapia si hay temas profundos que resolver

*Ejemplo:* Cuando vuelvan a hablar, en lugar de parecer el mismo hombre estancado, hablas de tu nuevo proyecto, del libro que te impactó, del viaje que planeas. Eres interesante de nuevo.

**3. Transformación Social:**
- Reconéctate con amigos que descuidaste
- Haz nuevas amistades
- Participa en eventos sociales
- Construye una vida que no dependa de ella

*Ejemplo:* Sus amigos en común le cuentan que te vieron en una fiesta pasándola increíble, rodeado de gente, irradiando confianza. Esto crea curiosidad e incluso celos.

**La transformación debe ser VISIBLE:**
De nada sirve transformarte si ella no lo ve. Esto no significa presumir en redes sociales de forma desesperada. Significa vivir genuinamente tu mejor vida y dejar que esa energía se proyecte naturalmente.`
      },
      {
        title: "2.5 La Sinergia Perfecta: Combinando los 3 Gatillos",
        content: `**Plan de acción para los primeros 30 días:**

**Días 1-7: Contacto Cero Absoluto (Gatillo 1: Escasez)**
- Cero comunicación iniciada por ti
- Elimina la tentación: silencia sus notificaciones, evita stalker sus redes
- Enfócate 100% en ti mismo
- Comienza tu transformación física y mental

**Días 8-14: Transformación Intensiva (Gatillo 3)**
- Intensifica tu rutina de ejercicio
- Renueva tu guardarropa (aunque sea con piezas clave)
- Empieza un nuevo hobby o proyecto
- Reconéctate con amigos

**Días 15-21: Visibilidad Indirecta (Gatillos 1 + 3)**
- Vuelve a publicar en redes sociales (contenido positivo, sin indirectas)
- Asiste a eventos sociales donde puedas ser visto
- Deja que amigos en común vean tu transformación
- Sigue sin contacto directo con tu ex

**Días 22-30: Primer Contacto Estratégico (Gatillos 2 + 3)**
- Envía un mensaje casual que incorpore nostalgia controlada
- No pidas nada, no hables de la relación
- Muestra indirectamente tu transformación a través del contexto del mensaje
- Si responde positivamente, procede con cautela
- Si no responde o responde fríamente, vuelve al contacto cero por 2 semanas más

**Recuerda:** Esta no es una fórmula rígida. Lee las señales y ajusta según la situación. Pero tener un plan te da estructura y evita que actúes impulsivamente.`
      }
    ]
  },
  {
    id: 3,
    title: "Primer Contacto (Día 1)",
    subtitle: "La estrategia del reencuentro que cambia todo",
    icon: "💬",
    image: lesson3Image,
    imagePlaceholder: "[IMAGEN: Timeline visual del Día 1, con puntos clave y ejemplos de mensajes.]",
    sections: [
      {
        title: "3.1 Psicología del Primer Contacto: Menos es Más",
        content: `Has pasado días (idealmente semanas) sin contacto. Has trabajado en ti mismo. Ahora viene el momento más delicado de todo el proceso: **el primer contacto post-ruptura**.

**Por qué este momento es crítico:**
La primera impresión después de la ruptura puede determinar el tono de todo lo que sigue. Si pareces desesperado, confirmas todas las razones por las que ella se fue. Si pareces confiado y renovado, plantas la semilla de la duda en su decisión.

**El error que TODOS cometen:**
Piensan que el primer contacto es para "resolver las cosas" o "hablar de la relación". **NO.** El primer contacto tiene UN solo objetivo: abrir la puerta de la comunicación de forma positiva y ligera.

**Principios fundamentales:**
1. **Brevedad:** Cuanto más corto, mejor. Los mensajes largos gritan desesperación.
2. **Neutralidad:** Nada de emociones intensas, ni positivas ni negativas.
3. **Sin expectativas:** No esperes una respuesta inmediata o entusiasta.
4. **Proyectar bienestar:** Tu mensaje debe transmitir que estás bien (no que estás tratando de demostrar que estás bien).`
      },
      {
        title: "3.2 Las Primeras 24 Horas: Tu Oportunidad de Oro",
        content: `**Cuándo contactar:**
- Idealmente, después de mínimo 3 semanas de contacto cero
- En un momento del día donde es probable que esté relajada (no en horario de trabajo)
- Cuando TÚ estés en un buen estado emocional

**Qué hacer en el Día 1:**

✅ **SÍ hacer:**
- Enviar UN mensaje corto y casual
- Esperar pacientemente una respuesta (puede tomar horas o días)
- Mantener una actitud de "estoy bien sin importar el resultado"
- Tener planes para después de enviar el mensaje (no quedarte mirando el teléfono)
- Responder de forma medida si ella contesta

❌ **NO hacer:**
- Enviar múltiples mensajes si no responde
- Preguntar "¿Recibiste mi mensaje?" o "¿Estás ahí?"
- Llamar si no responde al mensaje
- Enviar mensajes de voz largos explicándote
- Mencionar la ruptura o la relación

**La regla de oro: "No pidas, ofrece"**

Tu mensaje debe ofrecer algo de valor (un recuerdo positivo, información útil, un chiste interno) en lugar de pedir algo (atención, respuestas, otra oportunidad).

**El mindset correcto:**
Imagina que estás contactando a una amiga con la que perdiste contacto. No hay drama, no hay historia complicada. Solo estás reconectando de forma ligera. Esa energía es la que debe transmitir tu mensaje.`
      },
      {
        title: "3.3 Qué Decir Exactamente: Scripts de Impacto",
        content: `**Script 1: El Mensaje de "Cierre Amistoso"**

*Contexto: Cuando la ruptura fue reciente y quieres establecer que no hay resentimiento.*

"Oye, sé que las cosas terminaron de forma complicada, pero quería que supieras que te deseo lo mejor. Espero que estés bien. 🙂"

*Por qué funciona:* Es maduro, no pide nada, cierra el capítulo de drama y abre la posibilidad de comunicación futura.

---

**Script 2: El Mensaje de "Interés Genuino"**

*Contexto: Cuando sabes que algo importante está pasando en su vida (examen, proyecto, evento familiar).*

"Hey, me acordé que tenías [ese examen/esa presentación/la boda de tu prima] esta semana. ¿Cómo te fue?"

*Por qué funciona:* Demuestras que recuerdas cosas importantes sobre ella sin parecer que la estás stalkeando. Es una pregunta fácil de responder.

---

**Script 3: El Mensaje de "Valor Agregado"**

*Contexto: Cuando encuentras algo que genuinamente le interesaría o le serviría.*

"Vi esto y pensé que te podría interesar: [link a artículo, video, evento relacionado con sus intereses]. Sin compromiso, solo me acordé de ti."

*Por qué funciona:* Ofreces valor sin pedir nada a cambio. Demuestras que la conoces bien y que piensas en ella de forma positiva.

---

**Script 4: El Mensaje de "Recuerdo Divertido"**

*Contexto: Cuando quieres evocar nostalgia de forma ligera.*

"Acabo de pasar por [lugar] y me acordé de cuando [momento gracioso específico]. Todavía me río cuando lo pienso. 😄"

*Por qué funciona:* Evoca emociones positivas asociadas contigo sin ser pesado ni pedir nada.

**IMPORTANTE:** Elige UN solo script. No combines ni modifiques excesivamente. La simplicidad es tu aliada.`
      },
      {
        title: "3.4 Qué NO Hacer: Errores Fatales",
        content: `**1. Suplicar o Rogar**
❌ "Por favor, dame otra oportunidad. Haré lo que sea."
❌ "No puedo vivir sin ti. Te necesito."
❌ "Sé que cometí errores, pero merezco otra oportunidad."

*Por qué es fatal:* La súplica destruye instantáneamente cualquier atractivo que puedas tener. Las mujeres no se sienten atraídas por hombres que ruegan.

**2. Culparla o Hacerla Sentir Mal**
❌ "¿Cómo pudiste hacerme esto después de todo lo que te di?"
❌ "Tiraste a la basura todo lo que construimos."
❌ "Espero que te des cuenta de lo que perdiste."

*Por qué es fatal:* Genera defensividad y confirma que está mejor sin ti.

**3. Prometer Cambios Drásticos**
❌ "Cambiaré todo lo que quieras. Seré otra persona por ti."
❌ "Iré a terapia, dejaré mis malos hábitos, haré ejercicio..."
❌ "Todo será diferente, te lo prometo."

*Por qué es fatal:* Las promesas vacías no significan nada. Solo las acciones demostradas importan.

**4. Hablar del Pasado Negativo**
❌ "¿Recuerdas cuando peleamos por [tema]? Quiero hablarlo."
❌ "Sé que te lastimé cuando [incidente]. Déjame explicarte."
❌ "Necesitamos hablar de lo que pasó."

*Por qué es fatal:* Revive emociones negativas asociadas contigo.

**5. Presionar por Respuestas o Encuentros**
❌ "¿Por qué no me respondes?"
❌ "Necesito verte. Dime cuándo puedo pasar."
❌ "¿Podemos hablar en persona? Es urgente."

*Por qué es fatal:* La presión genera resistencia. Cuanto más presiones, más se alejará.`
      },
      {
        title: "3.5 Señales de Que Está Funcionando",
        content: `**Señales positivas a observar:**

✅ **Respuestas rápidas:** Si responde en minutos u horas (no días), es buena señal. Significa que tu mensaje le importó lo suficiente para priorizarlo.

✅ **Preguntas sobre ti:** Si su respuesta incluye preguntas como "¿Y tú cómo estás?" o "¿Qué has hecho?", está mostrando interés en tu vida.

✅ **Emojis y tono ligero:** El uso de emojis y un tono casual indica que está cómoda hablando contigo.

✅ **Ella extiende la conversación:** Si en lugar de respuestas cortas te envía mensajes más elaborados o introduce nuevos temas, es excelente señal.

✅ **Menciona recuerdos positivos:** Si ella también empieza a evocar momentos buenos que compartieron, está conectando emocionalmente.

✅ **Interés en tus actividades:** Preguntas sobre tu nuevo hobby, tu trabajo, tus planes, indican curiosidad por la "nueva versión" de ti.

**Señales neutrales (no te desanimes):**
- Respuestas breves pero amables
- Demora de varias horas o un día en responder
- Respuestas que no hacen preguntas

**Señales de alerta (retrocede):**
- Respuestas frías o cortantes
- No responde después de varios días
- Te pide que dejes de escribirle

**Si las señales son de alerta:** No entres en pánico. Vuelve al contacto cero por al menos 2 semanas más. A veces el timing no es el correcto. No significa que todo esté perdido.`
      }
    ]
  },
  {
    id: 4,
    title: "Escalación (Día 2-3)",
    subtitle: "El arte de la seducción lenta y estratégica",
    icon: "📈",
    image: lesson4Image,
    imagePlaceholder: "[IMAGEN: Gráfico de escalación de la comunicación, mostrando el aumento gradual de la intensidad.]",
    sections: [
      {
        title: "4.1 El Arte de la Escalación: De Amigos a Amantes",
        content: `Después de un primer contacto exitoso, viene la fase más delicada: **la escalación**. Aquí es donde la mayoría de los hombres arruinan todo lo que construyeron.

**El error común:** Pensar que porque respondió positivamente, ya puedes hablar de la relación o pedirle que vuelvan. **INCORRECTO.** Esto es exactamente lo que ella espera que hagas, y es exactamente lo que la alejará.

**El objetivo de la escalación:**
Pasar gradualmente de una comunicación neutral/amistosa a una con tensión emocional y, eventualmente, romántica. Esto no sucede en un día. Es un proceso que requiere paciencia y calibración.

**Las fases de la escalación:**
1. **Fase 1 (Día 1-2):** Comunicación ligera y casual
2. **Fase 2 (Día 2-3):** Introducción de nostalgia y conexión emocional
3. **Fase 3 (Día 4+):** Tensión romántica sutil y planificación de encuentro

**Regla fundamental:** Nunca saltes fases. Si intentas pasar de comunicación ligera a declaraciones de amor, perderás todo el terreno ganado.`
      },
      {
        title: "4.2 La Regla del 70/30",
        content: `**El concepto:** En esta fase, tú inviertes aproximadamente el 70% de la energía y ella el 30%. Pero debes estar atento: si ella no está invirtiendo nada, necesitas retroceder.

**Cómo se ve la inversión:**
- Tú inicias el 70% de las conversaciones
- Tú aportas el 70% de los temas interesantes
- Tú mantienes el 70% del momentum

**Señales de que ella está invirtiendo su 30%:**
- Responde con entusiasmo
- Hace preguntas
- Comparte cosas de su vida sin que preguntes
- A veces inicia ella la conversación

**¿Qué pasa si ella no invierte?**
Si después de 2-3 intercambios ella solo responde con monosílabos y nunca aporta nada, es momento de retroceder. Deja pasar un día o dos sin escribir. Si ella no inicia, tu próximo mensaje debe ser aún más ligero y sin expectativas.

**Cómo crear intriga y misterio:**

1. **No cuentes todo:** Si te pregunta qué hiciste el fin de semana, no des un informe detallado. "Estuvo bastante interesante" es más intrigante que "Fui al cine con Miguel y luego cenamos en ese lugar nuevo".

2. **Termina conversaciones antes de que mueran:** En lugar de estirar la conversación hasta que se agote, despídete cuando está en su punto más alto. "Oye, tengo que irme, pero me dio gusto hablar contigo. Hablamos luego." Esto la deja queriendo más.

3. **No siempre estés disponible:** Si te escribe, no respondas al instante cada vez. A veces déjala esperar un poco (no de forma manipuladora, pero tampoco dejes todo por responderle).

4. **Menciona actividades sin detalles:** "Tengo planes" es más misterioso que "Voy a quedarme en casa viendo Netflix".`
      },
      {
        title: "4.3 Scripts para Escalación",
        content: `**Script 1: El Mensaje de "Recuerdo Divertido"**

*Objetivo: Evocar nostalgia y emociones positivas*

"Jajaja acabo de ver [algo relacionado con un chiste interno que tenían] y me acordé de cuando [momento gracioso específico]. ¿Te acuerdas de eso? 😂"

*Seguimiento si responde positivamente:*
"Esos momentos eran de los mejores. [Añade un pequeño detalle del momento]."

---

**Script 2: El Mensaje de "Desafío Sutil"**

*Objetivo: Crear tensión positiva y engagement*

"Apuesto a que no has podido [actividad que hacían juntos o algo que sabes que le cuesta]. ¿O me equivoco? 😏"

*Por qué funciona:* Los desafíos sutiles crean engagement porque activan su deseo de demostrar algo.

---

**Script 3: El Mensaje de "Doble Sentido"**

*Objetivo: Introducir tensión romántica de forma sutil*

"Soñé algo muy random contigo ayer. Pero mejor no te cuento... 👀"

*Si pregunta qué soñaste:*
"Era algo bastante [pausa]... interesante. Quizás te cuento algún día. 😏"

*Importante:* Esto solo funciona si ya hay cierta comodidad en la comunicación. No uses esto en los primeros intercambios.

---

**Script 4: El Mensaje de "Conexión Profunda"**

*Objetivo: Reconectar a nivel emocional*

"Sabes, estuve pensando y creo que [algo que aprendiste de la relación o de ti mismo]. Fue algo que nunca te dije, pero quería que lo supieras."

*Importante:* Esto debe ser genuino y vulnerable, no manipulador. Solo usar si realmente tienes algo significativo que compartir.`
      },
      {
        title: "4.4 Lectura de Señales",
        content: `**Señales de interés creciente:**

📱 **En mensajes de texto:**
- Respuestas cada vez más largas
- Uso de más emojis, especialmente 😏 😊 💕
- Ella inicia conversaciones
- Te hace preguntas personales
- Menciona cosas que le gustaría hacer contigo
- Responde rápido consistentemente
- Te envía fotos o memes

📞 **Si hablan por teléfono:**
- Risas genuinas
- La conversación fluye sin esfuerzo
- Ella extiende la llamada
- Tono de voz suave y cálido
- No quiere colgar

👀 **Señales de que ella también está pensando en reconectar:**
- Te pregunta si estás saliendo con alguien
- Menciona que te extraña o que piensa en ti
- Recuerda fechas o eventos importantes de la relación
- Te cuenta sobre cambios positivos en su vida (quiere que la veas diferente)

**Señales de desinterés o resistencia:**

❌ Respuestas cortas y frías ("Ok", "Sí", "Jaja")
❌ Demoras de días en responder sin explicación
❌ Cambia el tema cuando mencionas algo nostálgico
❌ Te habla como si fueras un conocido cualquiera
❌ Menciona que está "muy ocupada" constantemente
❌ Evita responder preguntas personales

**Cómo ajustar según las señales:**

*Si las señales son positivas:* Puedes aumentar gradualmente la frecuencia e intensidad de la comunicación.

*Si las señales son neutrales:* Mantén el nivel actual y sigue construyendo rapport.

*Si las señales son negativas:* Retrocede, reduce la comunicación, vuelve a crear escasez.`
      },
      {
        title: "4.5 Errores Comunes en la Escalación",
        content: `**Error 1: Ser Demasiado Directo Demasiado Rápido**

❌ "Te extraño. Quiero que volvamos."
❌ "Sé que sientes lo mismo que yo."
❌ "¿Por qué no nos damos otra oportunidad?"

*Por qué es fatal:* La presión directa activa sus defensas. Ella necesita llegar a esa conclusión por sí misma, no que tú se lo digas.

---

**Error 2: Hablar de la Relación Pasada**

❌ "Necesitamos hablar de lo que pasó."
❌ "¿Por qué terminamos realmente?"
❌ "Si tan solo hubiéramos hecho las cosas diferente..."

*Por qué es fatal:* Revive las razones por las que se fue en lugar de crear nuevas razones para volver.

---

**Error 3: Presionar para un Encuentro Prematuro**

❌ "Tenemos que vernos. ¿Cuándo puedo pasar por ti?"
❌ "Esta conversación sería mejor en persona."
❌ "No quiero seguir hablando por mensaje. Viámonos ya."

*Por qué es fatal:* Un encuentro antes de que haya suficiente tensión positiva puede ser un desastre.

---

**Error 4: Ser Predecible**

❌ Siempre escribir a la misma hora
❌ Siempre responder inmediatamente
❌ Siempre usar el mismo tipo de mensajes
❌ Nunca sorprenderla

*Por qué es fatal:* La predecibilidad mata la atracción. Ella ya te conoce; necesita sentir que hay algo nuevo que descubrir.

---

**Error 5: Mostrar Celos o Inseguridad**

❌ "¿Con quién estabas anoche?"
❌ "Vi que subiste una foto con [nombre]. ¿Quién es?"
❌ "¿Ya estás saliendo con alguien más?"

*Por qué es fatal:* Los celos demuestran inseguridad y dependencia emocional, exactamente lo que probablemente la alejó en primer lugar.`
      }
    ]
  },
  {
    id: 5,
    title: "El Punto de Quiebre (Día 4-5)",
    subtitle: "Cuando ella empieza a ceder y reconsiderar",
    icon: "💫",
    image: lesson5Image,
    imagePlaceholder: "[IMAGEN: Curva de emociones de tu ex, mostrando el descenso de la resistencia y el aumento del deseo.]",
    sections: [
      {
        title: "5.1 Qué es el Punto de Quiebre",
        content: `**El momento crucial que estás esperando.**

El Punto de Quiebre es ese momento donde la balanza emocional de tu ex comienza a inclinarse hacia ti. Es cuando las dudas sobre su decisión de dejarte empiezan a crecer, cuando empieza a extrañarte activamente, cuando empieza a preguntarse si cometió un error.

**Por qué sucede:**
Hasta ahora, has aplicado los tres gatillos emocionales: escasez, nostalgia y transformación. Cada uno ha ido erosionando gradualmente su resistencia. El Punto de Quiebre es cuando esa erosión alcanza una masa crítica.

**Cómo saber que estás cerca:**
- La comunicación se ha vuelto fluida y frecuente
- Ella muestra señales de interés y curiosidad
- Ha habido momentos de conexión emocional genuina
- Empiezas a percibir un cambio en su tono

**Importante:** El Punto de Quiebre no es un momento mágico donde ella te llama llorando para pedirte que vuelvas. Es más sutil que eso. Es un cambio gradual en su disposición emocional que necesitas reconocer y capitalizar.`
      },
      {
        title: "5.2 Señales de que Está Cediendo",
        content: `**Señales verbales directas:**

✅ "Te extraño" o "Extraño [algo específico de la relación]"
✅ "Me pregunto cómo habrían sido las cosas si..."
✅ "Eras diferente de lo que pensaba" (después de ver tu transformación)
✅ "Nadie me hace reír como tú"
✅ "He estado pensando mucho en nosotros últimamente"

**Señales verbales indirectas:**

✅ Te pregunta si estás saliendo con alguien (quiere saber si está disponible)
✅ Menciona el futuro de forma hipotética incluyéndote
✅ Compara a otros hombres contigo (de forma negativa hacia ellos)
✅ Recuerda detalles pequeños de la relación
✅ Te pide consejos personales

**Señales en su comportamiento:**

✅ **Ella te busca más:** Inicia conversaciones, responde rápido, no quiere que terminen los chats
✅ **Quiere verte:** Sugiere o acepta fácilmente planes para encontrarse
✅ **Muestra celos sutiles:** Pregunta por tus amigas, reacciona diferente cuando mencionas mujeres
✅ **Te elogia:** Comenta sobre tu apariencia, tus logros, tu actitud
✅ **Es más cariñosa:** Usa apodos de antes, emojis de corazón, tono más íntimo
✅ **Habla del pasado positivamente:** Ya no menciona los problemas, solo los buenos momentos

**Señales en redes sociales:**

✅ Ve todas tus historias rápidamente
✅ Reacciona o comenta en tus publicaciones
✅ Comparte canciones o frases que pueden ser indirectas
✅ Sube fotos donde se ve especialmente bien (quiere que la veas)`
      },
      {
        title: "5.3 Estrategias para Acelerar el Punto de Quiebre",
        content: `**Estrategia 1: El "Desaparecer para Reaparecer"**

Cuando sientes que las cosas van bien, haz algo contra-intuitivo: desaparece por 2-3 días sin explicación.

*Cómo hacerlo:*
- Después de una conversación particularmente buena, deja de escribir
- No des explicaciones ni aviso previo
- Simplemente deja de responder por un par de días
- Cuando vuelvas, actúa como si nada hubiera pasado

*Por qué funciona:*
En esos días de silencio, ella experimentará una mini-versión del contacto cero. Se preguntará por qué dejaste de escribir, si hiciste algo mal, si estás con alguien más. Esto acelera el proceso de extrañarte.

---

**Estrategia 2: El "Amigo en Común"**

Usa tu red social para plantar semillas positivas.

*Cómo hacerlo:*
- Identifica amigos que tengan contacto con ella
- Sin ser obvio, haz que te vean en tu mejor momento
- Comparte logros o momentos positivos de forma natural
- Deja que la información fluya orgánicamente hacia ella

*Por qué funciona:*
Cuando escucha de terceros lo bien que te va, tiene más impacto que si tú mismo lo presumes. Además, genera curiosidad y, potencialmente, celos.

---

**Estrategia 3: El "Evento Social"**

Planifica aparecer en un lugar donde sabes que ella estará.

*Cómo hacerlo:*
- Identifica un evento, fiesta o lugar donde ella probablemente irá
- Llega viéndote increíble (física y actitudinalmente)
- No la busques directamente; deja que ella te encuentre
- Sé el centro de atención positiva (conversando, riendo, pasándola bien)
- Si se acerca, sé amable pero no le des toda tu atención

*Por qué funciona:*
Ver tu transformación en persona tiene 10 veces más impacto que verla en fotos. Además, si te ve interactuando positivamente con otros (especialmente mujeres), activará su instinto de competencia.`
      },
      {
        title: "5.4 La Psicología del Momento",
        content: `**Entendiendo su mente en conflicto:**

En este momento, tu ex está experimentando lo que los psicólogos llaman **disonancia cognitiva**. Su cerebro está luchando entre dos narrativas incompatibles:

**Narrativa 1 (Su decisión original):**
"Dejé a [tu nombre] porque era lo correcto. Teníamos problemas irresolubles. Merezco algo mejor. Fue la decisión madura."

**Narrativa 2 (Lo que está experimentando ahora):**
"Pero lo extraño. Ha cambiado. Me siento diferente cuando hablo con él. ¿Y si cometí un error? ¿Y si él era 'el indicado' y no lo supe valorar?"

**Cómo esta lucha se manifiesta:**
- Momentos de cercanía seguidos de momentos de distancia
- Mensajes cálidos que de repente se vuelven fríos
- Avances emocionales que retroceden
- Aparente confusión sobre lo que quiere

**Tu rol en este momento:**

**NO la presiones.** Cualquier presión de tu parte la empujará hacia la Narrativa 1 ("Por esto lo dejé, porque era demasiado necesitado").

**SÍ sigue siendo consistente.** Tu transformación, tu actitud positiva, tu vida independiente refuerzan la Narrativa 2.

**Sé paciente.** Este proceso interno toma tiempo. No puedes apresurar a alguien a cambiar de opinión sobre una decisión importante.

**Mantén el balance.** Ni muy disponible (desesperado) ni muy distante (desinteresado). El punto dulce está en el medio.`
      },
      {
        title: "5.5 Próximos Pasos: No Te Relajes",
        content: `**El peligro de la complacencia:**

El Punto de Quiebre no es la línea de llegada. Es apenas la mitad del camino. Muchos hombres llegan a este punto, sienten que "ya ganaron", y vuelven a los viejos patrones que causaron la ruptura original.

**Lo que debes hacer ahora:**

1. **Mantén tu vida independiente:**
   - Sigue con tus hobbies, amigos y proyectos
   - No abandones todo por estar disponible para ella
   - Tu vida rica e interesante es parte de lo que la está atrayendo

2. **No te adelantes:**
   - No hables de volver juntos hasta que ella lo traiga
   - No asumas que ya son pareja de nuevo
   - Sigue construyendo tensión y conexión

3. **Sigue siendo el nuevo tú:**
   - La transformación no fue un truco; es permanente
   - Cada interacción debe reforzar que eres diferente
   - Cualquier regresión a viejos patrones será notada inmediatamente

4. **Prepárate para el encuentro:**
   - El siguiente paso lógico es verse en persona
   - Este encuentro debe ser cuidadosamente planeado
   - Más sobre esto en la próxima lección

**Recuerda:** El hecho de que ella esté cediendo no significa que el trabajo terminó. Significa que el trabajo anterior funcionó y que ahora entras en la fase más delicada y emocionante.`
      }
    ]
  },
  {
    id: 6,
    title: "Cierre (Día 6-9)",
    subtitle: "La reconquista final y el reencuentro definitivo",
    icon: "💝",
    image: lesson6Image,
    imagePlaceholder: "[IMAGEN: Fases de la reconquista, destacando la etapa de cierre con un círculo de éxito.]",
    sections: [
      {
        title: "6.1 La Fase Final: El Reencuentro Definitivo",
        content: `Has llegado al momento decisivo. Semanas de trabajo estratégico te han traído hasta aquí. Las señales son claras: ella está considerando volver. Ahora viene la parte más importante de todo el proceso: **el encuentro en persona que sellará la reconquista**.

**Por qué el encuentro presencial es crucial:**

Los mensajes de texto y las llamadas pueden construir conexión, pero no pueden reemplazar la química que existe en persona. Cuando están frente a frente, todos los sentidos se activan: el contacto visual, el lenguaje corporal, el olor, la presencia física. Estos elementos son los que realmente reavivan la atracción.

**El objetivo del encuentro NO es:**
- Hablar sobre la relación
- Disculparte por todo
- Presionarla para que vuelvan
- Tener una conversación seria y pesada

**El objetivo del encuentro SÍ es:**
- Hacerla sentir increíble en tu presencia
- Reavivar la química física y emocional
- Demostrar en persona tu transformación
- Crear un nuevo recuerdo positivo que reemplace los negativos
- Dejarla queriendo más

**El ambiente ideal:**
- Un lugar neutral (no su casa ni la tuya)
- Algo de ruido ambiente (para evitar silencios incómodos)
- Posibilidad de caminar o cambiar de ubicación
- Sin distracciones (evita cenas formales largas)
- Privacidad suficiente para momentos de conexión`
      },
      {
        title: "6.2 Cómo Garantizar que Regrese",
        content: `**Paso 1: La Invitación Irresistible**

La forma en que la invites es crucial. Debe ser casual pero intrigante.

✅ "Oye, voy a estar cerca de [zona que a ella le gusta] el viernes. ¿Te animarías a un café rápido?"

✅ "Hay un lugar nuevo que quiero probar y me acordé que te encanta [tipo de comida/bebida]. ¿Me acompañas?"

✅ "Estuve pensando que hace mucho no paso por [lugar con buenos recuerdos]. ¿Qué dices? Sin presión."

❌ "Necesitamos vernos para hablar de lo nuestro."
❌ "Quiero verte porque te extraño demasiado."

---

**Paso 2: El Lugar Ideal**

- Cafetería con ambiente relajado
- Bar tranquilo (no un club ruidoso)
- Lugar con vista (terraza, parque)
- Un lugar donde hayan tenido un buen momento (nostalgia controlada)

Evita: su casa, tu casa, restaurantes muy formales, lugares donde puedan encontrar gente conocida.

---

**Paso 3: Tu Actitud Impecable**

- **Confianza sin arrogancia:** Párate derecho, haz contacto visual, sonríe.
- **Humor y ligereza:** Hazla reír, no seas pesado ni intenso.
- **Escucha activa:** Pregunta sobre ella, muestra interés genuino.
- **Misterio:** No cuentes todo sobre tu vida; deja temas para futuras conversaciones.
- **Cero drama:** Aunque ella intente hablar del pasado, redirecciona la conversación.

---

**Paso 4: El Momento de la Verdad**

Si ella trae el tema de la relación (y es probable que lo haga), maneja así:

Ella: "¿Por qué crees que terminamos?"
Tú: "Creo que ambos teníamos cosas que aprender. Pero honestamente, estoy más enfocado en quién soy ahora que en analizar el pasado."

Ella: "¿Me extrañas?"
Tú: (Con una sonrisa sutil) "A veces pienso en los buenos momentos. Pero he estado disfrutando mi vida también."

**No supliques, no prometas, no dramatices.**

---

**Paso 5: El Cierre Emocional**

Al final del encuentro, debes dejarla con ganas de más.

- No extendas el encuentro más de 2 horas (máximo)
- Termina en un punto alto, no cuando la conversación muere
- Un abrazo de despedida ligeramente más largo de lo normal
- Una frase de cierre como: "Me dio mucho gusto verte. Deberíamos repetirlo."

**Contacto físico sutil:**
- Toca su brazo cuando hagas un punto
- Si hay oportunidad de caminar, ofrece tu mano al cruzar una calle
- Un abrazo de despedida donde ella sienta tu presencia

No fuerces besos ni nada sexual. Deja que la tensión se construya para el próximo encuentro.`
      },
      {
        title: "6.3 Scripts de Cierre",
        content: `**Script 1: Mensaje Post-Encuentro**

*Enviar 2-3 horas después de verse:*

"Oye, la pasé muy bien hoy. [Referencia a algo específico del encuentro que la haga sonreír]. Hay que repetirlo pronto."

*No esperes respuesta inmediata. No envíes mensajes adicionales si no responde.*

---

**Script 2: Invitación a Segundo Encuentro**

*Enviar 1-2 días después:*

"Encontré [lugar/evento/actividad] que creo que te encantaría. ¿Te animas el [día]?"

*Sé específico. Un plan concreto es mejor que "deberíamos vernos de nuevo".*

---

**Script 3: Mensaje de Nostalgia Post-Encuentro**

*Si el primer encuentro fue muy positivo:*

"No voy a mentir, hoy recordé por qué [algo positivo sobre ella sin ser empalagoso]. Pero bueno, ya te lo contaré en persona. 😏"

---

**Script 4: Manejo de Resistencia**

*Si ella muestra dudas sobre verse de nuevo:*

Ella: "No sé si es buena idea que nos sigamos viendo..."

Tú: "Entiendo. No hay presión. Pero disfruté mucho verte y creo que tú también. Piénsalo y me dices. Sin drama."

*Nunca ruegues. Si ella necesita espacio, dáselo. Tu valor no depende de su respuesta.*

---

**Script 5: Después de Varios Encuentros Exitosos**

*Cuando sientes que es el momento de definir:*

"Oye, hemos pasado muy buen tiempo juntos últimamente. No sé tú, pero yo siento algo diferente ahora. No necesitamos ponerle etiquetas, pero quería que supieras que estoy disfrutando esto."

*Esto abre la puerta para que ella exprese lo que siente, sin presionarla.*`
      },
      {
        title: "6.4 Consolidación: No es el Fin, es el Comienzo",
        content: `**El peligro que pocos ven venir:**

Felicidades. Si has llegado hasta aquí y las cosas van bien, estás en camino de reconquistar a tu ex. Pero aquí viene la parte que nadie te dice: **la reconquista es solo el 50% del trabajo.**

Los hombres que logran que su ex vuelva pero no cambian fundamentalmente, terminan en el mismo lugar 3, 6 o 12 meses después. A veces peor, porque ahora hay resentimiento acumulado.

**Lo que DEBES hacer para consolidar:**

1. **No vuelvas a los viejos patrones inmediatamente:**
   - Mantén algo de misterio
   - Sigue cultivando tu vida independiente
   - No la sofoquen con atención constante

2. **Implementa cambios reales:**
   - Las promesas que hiciste (aunque sea implícitamente) deben cumplirse
   - Si el problema era comunicación, trabaja activamente en eso
   - Si era falta de tiempo juntos, crea espacio para ella

3. **Establece nuevas dinámicas:**
   - Esta es una nueva relación, no una continuación de la vieja
   - Hablen de expectativas (sin drama, de forma madura)
   - Acuerden cómo manejarán los conflictos

4. **No des por sentado que "ya ganaste":**
   - Sigue cortejándola
   - Sigue sorprendiéndola
   - Sigue siendo la versión mejorada de ti mismo`
      },
      {
        title: "6.5 Qué Hacer Después del Cierre",
        content: `**Los primeros 30 días después de volver:**

**Semana 1-2:**
- Mantén algo de espacio (no estén juntos 24/7)
- Sigue viéndote con tus amigos
- Pequeños gestos: mensajes lindos, detalles inesperados
- Evita conversaciones largas sobre "la ruptura"

**Semana 3-4:**
- Planea una experiencia nueva juntos (algo que nunca hicieron antes)
- Comienza a hablar del futuro de forma casual y positiva
- Sigue cultivando tu transformación personal
- Integra gradualmente sus vidas de nuevo

**Errores a evitar:**

❌ **Volverse complaciente:** "Ya regresó, puedo relajarme"
❌ **Traer el pasado constantemente:** "Recuerdas cuando me dejaste..."
❌ **Perder tu identidad de nuevo:** Abandonar amigos, hobbies, metas
❌ **Mostrar inseguridad:** "¿Estás segura de que quieres estar conmigo?"
❌ **Presionar para definir demasiado rápido:** "¿Somos novios oficialmente?"

**Mentalidad correcta:**

Cada día es una oportunidad de demostrar que esta vez es diferente. No te duermas en los laureles. La relación necesita nutrición constante, pero eso no significa sacrificar tu individualidad. El balance es la clave.

**Recuerda:** Ella regresó por la persona en la que te convertiste. Si vuelves a ser quien eras antes, perderás todo lo que ganaste.`
      }
    ]
  },
  {
    id: 7,
    title: "⚠️ ADVERTENCIA CRÍTICA",
    subtitle: "Lo que viene después: tu futuro depende de esto",
    icon: "⚠️",
    image: lesson7Image,
    imagePlaceholder: "[IMAGEN: Ilustración de un camino con bifurcaciones, una lleva al éxito y otra a la recaída, con una flecha apuntando al Módulo 2 como el camino correcto.]",
    sections: [
      {
        title: "7.1 Por Qué Muchos Fallan Aquí",
        content: `**La trampa de la comodidad que destruye todo.**

Has completado el Módulo 1. Has aplicado las estrategias. Quizás ya estás viendo resultados positivos, o quizás ya reconquistaste a tu ex. **Pero aquí es donde la mayoría de los hombres fallan espectacularmente.**

El patrón es siempre el mismo:
1. Ella regresa
2. Él se relaja ("misión cumplida")
3. Poco a poco, vuelve a los viejos hábitos
4. Ella empieza a dudar de nuevo
5. La relación se deteriora
6. Ruptura 2.0 (generalmente peor que la primera)

**¿Por qué sucede esto?**

Porque la reconquista es solo **la mitad de la batalla**. Hacer que regrese es relativamente fácil comparado con mantenerla. La primera requiere unas semanas de esfuerzo intenso. La segunda requiere un cambio fundamental en quién eres y cómo manejas las relaciones.

**La estadística que debes conocer:**

El 73% de las parejas que vuelven después de una ruptura terminan separándose de nuevo dentro del primer año. La razón principal: **vuelven a los mismos patrones que causaron la ruptura original.**

Tú no tienes que ser parte de esa estadística. Pero para evitarlo, necesitas herramientas que van más allá de lo que aprendiste en este módulo.`
      },
      {
        title: "7.2 Los 7 Gatillos Avanzados (Teaser)",
        content: `En el Módulo 1 aprendiste los 3 gatillos básicos: Escasez, Nostalgia y Transformación. Estos son poderosos para reconquistar. **Pero para mantenerla obsesionada contigo a largo plazo, existen 7 gatillos mucho más profundos.**

Estos gatillos avanzados operan a un nivel subconsciente más profundo. No solo despiertan interés; **crean adicción emocional**. Cuando los dominas, ella no solo quiere estar contigo; siente que **necesita** estar contigo.

**Lo que estos gatillos pueden hacer:**

✅ Hacer que ella te vea como su "alma gemela" irremplazable
✅ Crear una conexión tan profunda que pensar en dejarte le cause dolor
✅ Mantener la pasión y la atracción a niveles altos durante años
✅ Prevenir que otros hombres sean una amenaza real
✅ Convertirla en tu mayor admiradora y defensora

**Un adelanto de lo que incluyen:**

- El Gatillo del Vacío Emocional
- El Gatillo de la Inversión Progresiva
- El Gatillo del Líder Protector
- El Gatillo de la Unpredictibilidad Controlada
- Y más...

Cada uno de estos gatillos tiene técnicas específicas de aplicación, scripts probados y ejemplos de la vida real. Son el siguiente nivel en la maestría de las relaciones.`
      },
      {
        title: "7.3 Las 5 Trampas Comunes Post-Reconquista (Teaser)",
        content: `Incluso si aplicas todo lo que aprendiste en este módulo perfectamente, existen trampas que pueden destruir tu relación recién reconstruida. Estas trampas son sutiles, y la mayoría de los hombres caen en ellas sin darse cuenta.

**Trampa 1: La Recaída en la Rutina**
Después de unas semanas, la emoción inicial se desvanece. Si no sabes cómo mantener la novedad, la monotonía regresa y ella empieza a dudar de nuevo.

**Trampa 2: El Síndrome del "Ya Ganó"**
Crees que porque regresó, el trabajo terminó. Dejas de esforzarte, dejas de cortejarte, y ella lo nota. "Volvió a ser el de antes", piensa.

**Trampa 3: La Sombra del Pasado**
Aunque intentes no hablar de la ruptura, los resentimientos y heridas no procesadas salen a la superficie. Sin las herramientas correctas, estos fantasmas destruyen la relación desde adentro.

**Trampa 4: El Tercer Jugador**
Otros hombres no desaparecen cuando ella vuelve contigo. Sin las estrategias correctas, siempre serás vulnerable a que aparezca alguien que "ofrece más".

**Trampa 5: La Inversión Desequilibrada**
Tú sigues esforzándote mientras ella se acomoda. Este desequilibrio genera resentimiento y eventualmente, otra ruptura.

Cada una de estas trampas tiene soluciones específicas que se enseñan en el siguiente nivel.`
      },
      {
        title: "7.4 Qué Necesitas Saber para Evitar el Fracaso",
        content: `**La verdad incómoda que pocos quieren escuchar:**

El conocimiento que tienes hasta ahora es suficiente para dar los primeros pasos. Pero las relaciones no son un "hack" rápido. Son un skill que requiere desarrollo continuo.

Los hombres que tienen éxito a largo plazo con las mujeres no son los que "nacieron con el don". Son los que estudiaron, practicaron y dominaron los principios de la atracción, la conexión y la dinámica relacional.

**Lo que este módulo te dio:**
- Las bases para reconquistar
- Los primeros gatillos emocionales
- Estrategias para los primeros días
- Un plan de acción inicial

**Lo que aún necesitas:**
- Gatillos avanzados para mantener la atracción
- Técnicas para manejar conflictos sin destruir la relación
- Estrategias para ser irremplazable a largo plazo
- Herramientas para mantener tu valor percibido constantemente
- Frameworks para comunicación efectiva
- Métodos para prevenir la infidelidad y la pérdida de interés

Sin estas herramientas, estás construyendo una casa sobre cimientos inestables. Puede que se mantenga por un tiempo, pero eventualmente, se derrumbará.`
      },
      {
        title: "7.5 El Siguiente Paso: Tu Futuro Depende de Ello",
        content: `Has llegado al final del Módulo 1. Esto ya te pone por delante del 90% de los hombres que nunca buscan ayuda o educación sobre sus relaciones.

Pero estar por delante no es suficiente si quieres resultados reales y duraderos.

**Tienes dos caminos:**

**Camino A:** Aplicar lo que aprendiste aquí y esperar que sea suficiente. Quizás funcione por un tiempo. Quizás ella regrese. Pero sin las herramientas avanzadas, estarás siempre un paso detrás, reaccionando a los problemas en lugar de prevenirlos.

**Camino B:** Continuar tu educación con el Módulo 2: Protocolo de Dominancia. Dominar los 7 Gatillos Avanzados. Aprender las estrategias que mantienen a las mujeres obsesionadas por años. Convertirte en el tipo de hombre que nunca tiene que preocuparse por perder a su mujer porque sabe exactamente cómo mantenerla fascinada.

**El Módulo 2 incluye:**
- Los 7 Gatillos Avanzados explicados en detalle
- Scripts de poder para cada situación
- Técnicas de dominancia emocional ética
- Estrategias anti-ruptura probadas
- Frameworks de comunicación que previenen conflictos
- Y mucho más...

**Tu inversión en el Módulo 2 no es un gasto; es un seguro.** Un seguro contra volver a pasar por el dolor de una ruptura. Un seguro para tu felicidad relacional a largo plazo.

**El siguiente paso está en tus manos.**

Cuando estés listo para llevar tu juego al siguiente nivel, el Módulo 2 estará esperándote.`
      }
    ]
  }
];

export const getLessonById = (id: number): Lesson | undefined => {
  return lessons.find(lesson => lesson.id === id);
};

export const getNextLessonId = (currentId: number): number | null => {
  const currentIndex = lessons.findIndex(l => l.id === currentId);
  if (currentIndex === -1 || currentIndex === lessons.length - 1) return null;
  return lessons[currentIndex + 1].id;
};

export const getPreviousLessonId = (currentId: number): number | null => {
  const currentIndex = lessons.findIndex(l => l.id === currentId);
  if (currentIndex <= 0) return null;
  return lessons[currentIndex - 1].id;
};
