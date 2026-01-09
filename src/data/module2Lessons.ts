export interface LessonSection {
  title: string;
  content: string;
}

export interface Module2Lesson {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  sections: LessonSection[];
  imagePlaceholder: string;
  downloadables?: {
    pdf: string;
    checklist: string;
    scripts?: string;
  };
}

export const module2Lessons: Module2Lesson[] = [
  {
    id: 1,
    title: "Dominancia Emocional - La Ciencia",
    subtitle: "Domina el arte de la influencia emocional con base científica",
    icon: "🧠",
    imagePlaceholder: "[IMAGEN: Diagrama del cerebro mostrando las áreas relacionadas con la dominancia emocional]",
    downloadables: {
      pdf: "leccion-1-dominancia-emocional.pdf",
      checklist: "checklist-dominancia-emocional.pdf"
    },
    sections: [
      {
        title: "1.1 ¿Qué es la Dominancia Emocional?",
        content: `La dominancia emocional es la capacidad de **influir en el estado emocional de otra persona** de manera consistente y predecible. No se trata de control o manipulación negativa, sino de entender cómo funcionan las emociones humanas y usar ese conocimiento de forma ética.

Cuando hablamos de dominancia emocional en el contexto de las relaciones, nos referimos a la habilidad de:

- **Mantener la calma** cuando ella pierde la compostura
- **Dirigir la conversación** hacia territorios emocionalmente favorables
- **Crear estados emocionales positivos** asociados a tu presencia
- **Establecer el marco** de la interacción de forma natural

La dominancia emocional NO es:
- Gritar o intimidar
- Manipular de forma malintencionada
- Controlar o poseer
- Ignorar sus sentimientos

Es importante entender esta distinción desde el principio. Lo que aprenderás aquí es **psicología aplicada**, no tácticas de control. El objetivo es crear una dinámica saludable donde ambos se beneficien.`
      },
      {
        title: "1.2 Cómo Funciona en el Cerebro (Neurociencia)",
        content: `Para dominar las emociones, primero debemos entender cómo se procesan en el cerebro. El sistema límbico es el centro emocional del cerebro, y dentro de él, la **amígdala** juega un papel crucial.

**El Circuito Emocional:**

1. **Estímulo externo** (tu mensaje, tu presencia, tu voz)
2. **Procesamiento en la amígdala** (¿amenaza o recompensa?)
3. **Liberación de neurotransmisores** (dopamina, cortisol, oxitocina)
4. **Respuesta emocional** (atracción, miedo, conexión)
5. **Comportamiento resultante** (acercarse o alejarse)

Cuando entiendes este circuito, puedes diseñar tus interacciones para activar las respuestas deseadas. Por ejemplo:

**Dopamina (El neurotransmisor del deseo):**
- Se libera con la novedad y la anticipación
- Crea la sensación de "querer más"
- Se activa con recompensas impredecibles

**Oxitocina (La hormona del vínculo):**
- Se libera con el contacto físico y la intimidad emocional
- Crea sensación de confianza y conexión
- Es fundamental para el apego a largo plazo

**Cortisol (La hormona del estrés):**
- En pequeñas dosis, aumenta la atención
- En exceso, genera rechazo
- El equilibrio es clave

La dominancia emocional efectiva **maximiza la dopamina y oxitocina mientras minimiza el cortisol excesivo**. Es un equilibrio delicado que requiere práctica y calibración constante.`
      },
      {
        title: "1.3 Por Qué Funciona en 95% de Casos",
        content: `Los estudios muestran que la dominancia emocional tiene una efectividad del 95% porque **apela a mecanismos evolutivos profundos** que están programados en nuestro cerebro.

**Razón 1: Seguridad Percibida**
Evolutivamente, las mujeres buscaban parejas que pudieran protegerlas. Un hombre emocionalmente estable proyecta seguridad. Cuando mantienes la calma en situaciones estresantes, activas su percepción de que eres un "refugio seguro".

**Razón 2: Liderazgo Natural**
No confundir con machismo. El liderazgo natural implica tomar decisiones, tener dirección en la vida y no depender emocionalmente de la aprobación constante. Esto es atractivo porque indica recursos (emocionales, mentales, potencialmente materiales).

**Razón 3: Diferenciación**
La mayoría de los hombres son emocionalmente reactivos. Cuando ella expresa frustración, ellos reaccionan con más frustración. Cuando ella se aleja, ellos persiguen desesperadamente. Ser diferente en este aspecto te coloca automáticamente en una categoría superior.

**Razón 4: Activación del Sistema de Recompensa**
Un hombre que no está completamente disponible activa el sistema de recompensa intermitente del cerebro. Es el mismo mecanismo que hace adictivos los juegos de azar y las redes sociales. La incertidumbre controlada genera deseo.

**Razón 5: Respeto y Admiración**
Es difícil respetar a alguien que no se respeta a sí mismo. Cuando demuestras dominancia emocional, automáticamente generas respeto, y el respeto es la base de la atracción duradera.`
      },
      {
        title: "1.4 La Diferencia Entre Dominancia y Agresión",
        content: `Esta es una distinción **crítica** que muchos hombres no entienden. La línea entre dominancia efectiva y agresión destructiva puede parecer delgada, pero en realidad son polos opuestos.

**DOMINANCIA EMOCIONAL:**
- Nace de la seguridad interna
- No necesita demostrar nada
- Mantiene la calma bajo presión
- Respeta los límites de la otra persona
- Busca resultados beneficiosos para ambos
- Se expresa con firmeza pero sin agresividad
- Genera atracción y respeto

**AGRESIÓN:**
- Nace de la inseguridad
- Necesita constantemente demostrar poder
- Pierde el control bajo presión
- Viola los límites de la otra persona
- Busca "ganar" a costa del otro
- Se expresa con hostilidad y amenazas
- Genera miedo y resentimiento

**Ejemplos prácticos:**

*Situación: Ella te acusa de no prestarle atención.*

❌ **Respuesta agresiva:** "¡Siempre te quejas de todo! ¿Qué más quieres que haga?"

✅ **Respuesta dominante:** "Entiendo que te sientes así. Cuéntame específicamente qué te gustaría que cambiara" (con tono calmado, contacto visual, sin defensividad)

*Situación: Ella menciona que un compañero de trabajo es atractivo.*

❌ **Respuesta agresiva:** "¿Ah sí? Entonces por qué no te vas con él" (con sarcasmo y hostilidad)

✅ **Respuesta dominante:** "Tiene sentido, es un tipo decente" (sin mostrar inseguridad, cambiando de tema naturalmente)

La dominancia real no necesita defensa porque no se siente amenazada.`
      },
      {
        title: "1.5 Cómo Saber si Estás Siendo Dominante",
        content: `Autoevaluarte es crucial para desarrollar la dominancia emocional. Aquí hay señales claras de que estás en el camino correcto:

**Señales de que ESTÁS siendo dominante:**

✅ Mantienes tu posición sin elevar la voz
✅ No te sientes obligado a responder inmediatamente
✅ Puedes estar en silencio sin incomodidad
✅ Tus decisiones no dependen de su aprobación
✅ Puedes decir "no" sin sentir culpa
✅ No persigues cuando ella se aleja
✅ Tus planes no cambian por sus caprichos
✅ Ella busca tu aprobación más que tú la suya
✅ Mantienes contacto visual cómodamente
✅ Tu lenguaje corporal es abierto y relajado

**Señales de que NO estás siendo dominante:**

❌ Explicas excesivamente tus decisiones
❌ Cambias de opinión para evitar conflicto
❌ Respondes mensajes inmediatamente siempre
❌ Cancelas planes por ella constantemente
❌ Buscas su validación constantemente
❌ Te pones a la defensiva frecuentemente
❌ Evitas temas difíciles por miedo a su reacción
❌ Tu estado emocional depende de su humor
❌ Bajas la mirada cuando hay tensión
❌ Tu postura corporal se encoge en su presencia

**El test de los 30 segundos:**

Antes de cada interacción importante, pregúntate: "¿Estoy haciendo esto desde la seguridad o desde el miedo?" Si la respuesta es miedo, pausa y recalibra.`
      },
      {
        title: "1.6 Ejercicios Prácticos",
        content: `La dominancia emocional no se aprende solo leyendo. Requiere **práctica deliberada**. Aquí tienes ejercicios para los próximos 7 días:

**Día 1-2: El Ejercicio del Espejo**
Párate frente al espejo 5 minutos al día. Mantén contacto visual contigo mismo. Practica decir frases como "No, gracias" o "Eso no funciona para mí" con tono firme pero relajado. Observa tu postura y corrige si estás encorvado.

**Día 3-4: El Ejercicio del Silencio**
En conversaciones casuales, practica no llenar los silencios. Cuando alguien termine de hablar, espera 2-3 segundos antes de responder. Notarás que la otra persona a menudo continúa hablando o valora más tu respuesta.

**Día 5-6: El Ejercicio del "No"**
Di "no" a al menos 3 peticiones pequeñas al día. Puede ser rechazar un café extra, una tarea adicional en el trabajo, o una invitación que no te interesa. Hazlo sin dar explicaciones extensas.

**Día 7: El Ejercicio de la Pausa**
Cuando recibas un mensaje de ella (o de cualquier persona), espera deliberadamente antes de responder. No por jugar, sino por romper el hábito de respuesta inmediata. Usa ese tiempo para evaluar qué respuesta sirve mejor a tus objetivos.

**Ejercicio Continuo: El Diario Emocional**
Cada noche, escribe:
1. Una situación donde mantuviste la calma
2. Una situación donde perdiste la calma
3. Qué harías diferente

Este registro te mostrará patrones y áreas de mejora.`
      },
      {
        title: "1.7 Errores Comunes",
        content: `Incluso con la mejor intención, muchos hombres cometen estos errores al intentar desarrollar dominancia emocional:

**Error 1: Confundir frialdad con dominancia**
Ser frío y distante no es dominancia, es desconexión. La dominancia implica estar presente pero no reactivo. Puedes ser cálido y dominante simultáneamente.

**Error 2: Exagerar al principio**
Algunos hombres, al descubrir estos conceptos, van al extremo. Se vuelven robots sin emociones o actúan de forma artificial. La dominancia debe ser natural, no actuada.

**Error 3: Usar la dominancia como castigo**
Retirarte emocionalmente cada vez que ella hace algo que no te gusta es manipulación, no dominancia. La dominancia es un estado constante, no una herramienta de represalia.

**Error 4: Esperar resultados inmediatos**
Cambiar patrones arraigados toma tiempo. Si llevas años siendo emocionalmente reactivo, no esperes transformarte en una semana. La paciencia es parte de la dominancia.

**Error 5: Olvidar la calibración**
La dominancia sin calibración se convierte en rigidez. Necesitas leer las situaciones y ajustar tu intensidad. A veces, mostrar vulnerabilidad calculada es la movida dominante.

**Error 6: Aplicar solo con ella**
La dominancia debe ser parte de tu identidad, no una máscara para las relaciones. Si eres dominante con ella pero sumiso en el trabajo o con amigos, la incongruencia se notará.

**Error 7: Descuidar el autocuidado**
La dominancia emocional requiere energía. Si estás agotado, estresado o descuidando tu salud, tu capacidad de mantener la compostura disminuirá dramáticamente.

Recuerda: **La verdadera dominancia es invisible**. Cuando la ejecutas perfectamente, nadie nota que estás haciendo algo diferente. Simplemente te perciben como alguien seguro y atractivo.`
      }
    ]
  },
  {
    id: 2,
    title: "Los 7 Gatillos Avanzados",
    subtitle: "Activa las palancas psicológicas que generan deseo irresistible",
    icon: "🎯",
    imagePlaceholder: "[IMAGEN: Diagrama de los 7 gatillos interconectados formando un sistema de influencia]",
    downloadables: {
      pdf: "leccion-2-gatillos-avanzados.pdf",
      checklist: "checklist-gatillos.pdf"
    },
    sections: [
      {
        title: "2.1 Introducción a los Gatillos Avanzados",
        content: `En el Módulo 1 aprendiste 3 gatillos básicos. Ahora vamos a profundizar en **7 gatillos avanzados** que, cuando se combinan correctamente, crean un sistema de influencia prácticamente irresistible.

Estos gatillos están basados en décadas de investigación en psicología social y comportamiento humano. No son trucos baratos, son principios fundamentales de cómo funciona la mente humana.

**La diferencia entre los gatillos básicos y avanzados:**

Los gatillos básicos (escasez, nostalgia, transformación) funcionan en la superficie emocional. Los gatillos avanzados operan en niveles más profundos, activando respuestas casi automáticas que la persona no puede resistir conscientemente.

**Importante:** Estos gatillos son herramientas poderosas. Con poder viene responsabilidad. Úsalos para crear conexiones genuinas, no para manipular o dañar. El objetivo es construir una relación donde ambos ganen.`
      },
      {
        title: "2.2 Gatillo 1: Escasez Avanzada",
        content: `Ya conoces la escasez básica: no estar siempre disponible. Pero la escasez avanzada va mucho más allá.

**La Escasez Emocional:**
No solo limitas tu tiempo físico, sino tu inversión emocional. Esto significa:
- No compartir cada pensamiento que tienes
- Guardar información sobre tu vida para revelarla gradualmente
- No buscar validación emocional constantemente
- Mantener aspectos de tu vida que son solo tuyos

**La Escasez de Atención:**
Tu atención completa e indivisa es un recurso valioso. Darlo todo el tiempo lo devalúa.
- Practica la "presencia selectiva": cuando estás, estás 100%
- Cuando no estás, realmente no estás (no mensajes constantes)
- Haz que tus momentos de atención total sean memorables

**La Escasez de Compromiso:**
No te comprometas fácilmente. Cada compromiso debe ser ganado.
- No prometas cosas que no puedes cumplir
- Cuando prometas algo, cúmplelo siempre
- Haz que ella valore cuando decides comprometerte

**Aplicación práctica:**
"Tengo planes el sábado, pero podría liberarme si hay algo especial" es más poderoso que "Estoy libre cuando quieras".`
      },
      {
        title: "2.3 Gatillo 2: Urgencia Estratégica",
        content: `La urgencia crea acción inmediata. Sin urgencia, las personas postergan indefinidamente.

**Tipos de Urgencia:**

1. **Urgencia temporal:** "Este fin de semana estaré en la ciudad"
2. **Urgencia de oportunidad:** "Conseguí reservación en ese lugar que mencionaste"
3. **Urgencia competitiva:** (sutil) Mencionar que tienes opciones sin ser obvio
4. **Urgencia de cambio:** "Estoy en un momento de mi vida donde las cosas están cambiando"

**Cómo crear urgencia sin parecer desesperado:**

❌ "Necesito verte HOY o voy a explotar"
✅ "Tengo algo que contarte, pero tiene que ser en persona. ¿Estás libre esta semana?"

❌ "¿Por qué no me respondes? ¿Estás con alguien?"
✅ *Silencio* (la ausencia crea más urgencia que la presión)

**El principio de la ventana de oportunidad:**
Haz que cada interacción parezca una ventana que puede cerrarse. No de forma amenazante, sino natural. "Voy a estar muy ocupado las próximas semanas con el proyecto" crea la sensación de que ahora es el momento de conectar.

**Urgencia vs. Presión:**
La urgencia es una invitación con fecha límite. La presión es una demanda sin respeto por su autonomía. Una atrae, la otra repele.`
      },
      {
        title: "2.4 Gatillo 3: Autoridad Posicional",
        content: `La autoridad genera confianza automática. Cuando eres percibido como una autoridad, tus palabras tienen más peso.

**Cómo construir autoridad:**

1. **Expertise demostrada:** Sé bueno en algo y demuéstralo sin presumir
2. **Consistencia de carácter:** Di lo que vas a hacer y hazlo
3. **Decisiones claras:** No vaciles. Toma decisiones y sostenlas
4. **Conocimiento profundo:** Cuando hablas de algo, demuestra que sabes
5. **Red social valiosa:** Rodéate de personas que refuercen tu valor

**La autoridad en la comunicación:**

- Habla con convicción, no con interrogación
- "Nos vemos el viernes" vs. "¿Te parece si nos vemos el viernes?"
- Reduce los calificadores: "creo que", "tal vez", "no sé si"
- Usa pausas estratégicas en lugar de llenar silencios

**Autoridad sin arrogancia:**

La línea es fina pero clara. La autoridad dice: "Sé lo que hago". La arrogancia dice: "Soy mejor que tú". 

Practica la "autoridad humilde": experto pero accesible, seguro pero no condescendiente.

**Autoridad social:**
Cuando otros te tratan con respeto y buscan tu opinión, ella lo nota. Tu valor percibido aumenta automáticamente cuando terceros validan tu autoridad.`
      },
      {
        title: "2.5 Gatillo 4: Reciprocidad Estratégica",
        content: `Los humanos tienen una necesidad profunda de corresponder cuando reciben algo. Este principio, estudiado extensamente por Robert Cialdini, es una de las fuerzas más poderosas en las relaciones.

**La Reciprocidad Emocional:**
Cuando das primero (sin expectativa visible), creas una "deuda" emocional inconsciente.

**Formas de activar la reciprocidad:**

1. **Dar valor sin pedir nada:**
   - Enviar información útil relacionada con sus intereses
   - Conectarla con personas que pueden ayudarla
   - Recordar detalles y actuar sobre ellos

2. **Inversión de tiempo de calidad:**
   - Cuando estén juntos, estar completamente presente
   - Escuchar activamente (esto es un regalo en el mundo distraído de hoy)

3. **Apoyo en momentos difíciles:**
   - Estar disponible cuando realmente importa
   - No para ganar puntos, sino genuinamente

**La trampa de la reciprocidad:**

❌ Dar esperando algo específico a cambio
❌ Recordarle lo que has dado ("Después de todo lo que hice...")
❌ Dar en exceso (crea incomodidad, no gratitud)

✅ Dar de forma calibrada y genuina
✅ Permitir que la reciprocidad fluya naturalmente
✅ No llevar la cuenta públicamente

**El ratio ideal:**
Estudios sugieren que dar aproximadamente 60% y recibir 40% crea la dinámica más sostenible. Dar demasiado te posiciona como "desesperado". Dar muy poco te posiciona como "egoísta".`
      },
      {
        title: "2.6 Gatillo 5: Consistencia e Identidad",
        content: `Las personas tienen una necesidad profunda de ser consistentes con su identidad y compromisos previos.

**El principio:**
Una vez que alguien toma una posición o hace un compromiso, buscará activamente mantener esa consistencia.

**Aplicación en la reconquista:**

1. **Micro-compromisos:**
   Haz que tome pequeñas acciones hacia ti:
   - Pedirle un pequeño favor
   - Invitarla a opinar sobre algo
   - Que ella sugiera el lugar para verse

   Cada pequeña acción en tu dirección hace más probable la siguiente.

2. **Activar su identidad positiva:**
   - "Siempre admiré lo aventurera que eres" (ella querrá confirmar esa identidad)
   - "Eres de las pocas personas que realmente entiende [tema]"
   - Referirte a cualidades que ella valora en sí misma

3. **Recordar compromisos pasados:**
   - "Recuerdo cuando dijiste que valorabas la honestidad..."
   - No de forma manipuladora, sino como contexto natural

**La técnica del "pie en la puerta":**
Comienza pidiendo algo pequeño que es fácil aceptar. Una vez aceptado, las probabilidades de aceptar algo mayor aumentan significativamente.

Ejemplo: "¿Puedes recomendarme un café por tu zona?" → (después de la recomendación) → "¿Por qué no me lo muestras en persona?"

**Importante:** Esto funciona porque apela a su deseo de verse como alguien consistente y confiable, no porque la engañas.`
      },
      {
        title: "2.7 Gatillo 6: Prueba Social Estratégica",
        content: `Somos criaturas sociales. Cuando vemos que otros valoran algo, automáticamente lo percibimos como más valioso.

**Formas de prueba social:**

1. **Prueba social directa:**
   - Fotos en eventos sociales (sin exagerar)
   - Menciones casuales de actividades con amigos
   - Historias que incluyan interacciones positivas con otros

2. **Prueba social implícita:**
   - No estar siempre disponible (implica que tienes vida)
   - Mencionar casualmente planes con otras personas
   - Que ella vea cómo otros te tratan

3. **Prueba social de autoridades:**
   - Reconocimientos profesionales
   - Opiniones de personas que ella respeta

**La prueba social femenina:**
Este es un territorio delicado pero poderoso. Cuando otras mujeres muestran interés en ti, tu valor percibido aumenta exponencialmente. NO lo fabriques, NO seas obvio, pero tampoco lo escondas.

- Mencionar casualmente una interacción positiva con otra mujer
- Que ella vea (naturalmente) que otras mujeres te encuentran interesante
- NO usar esto para crear celos de forma obvia

**La anti-prueba social:**
Cuidado con lo opuesto. Si transmites que nadie te valora, activas el mecanismo inverso. Frases como "Nadie me entiende" o "Estoy siempre solo" son destructivas.

**Regla de oro:** La prueba social más poderosa es la que ella descubre por sí misma, no la que tú le presentas.`
      },
      {
        title: "2.8 Gatillo 7: Afinidad y Conexión Profunda",
        content: `La afinidad es el pegamento emocional. Sin ella, todos los demás gatillos son vacíos.

**Componentes de la afinidad:**

1. **Similitud percibida:**
   - Valores compartidos (lo más importante)
   - Experiencias similares
   - Sentido del humor compatible
   - Visión de vida alineada

2. **Familiaridad:**
   - La exposición repetida genera comodidad
   - Rituales compartidos (lugares, actividades, frases)
   - Historia común

3. **Atracción física y química:**
   - Lenguaje corporal sincronizado
   - Tensión sexual apropiada
   - Contacto físico calibrado

**Cómo profundizar la afinidad:**

- **Escucha activa real:** No solo esperar tu turno para hablar
- **Vulnerabilidad estratégica:** Compartir algo personal (calibrado)
- **Experiencias compartidas:** Crear nuevos recuerdos juntos
- **Humor interno:** Referencias que solo ustedes entienden
- **Apoyo genuino:** Estar presente en momentos importantes

**La afinidad como multiplicador:**
Sin afinidad, los otros gatillos pueden sentirse manipuladores. Con afinidad, todo lo demás fluye naturalmente.

Piensa en la afinidad como el "permiso" para usar los otros gatillos. Cuanto más fuerte sea tu conexión genuina, más efectivos serán todos los demás principios.`
      },
      {
        title: "2.9 Cómo Combinar los 7 Gatillos",
        content: `El poder real viene de la **combinación estratégica**. Aquí está cómo integrar los 7 gatillos en una estrategia coherente:

**Fase 1: Establecer Base (Día 1-3)**
- **Afinidad:** Reconecta emocionalmente sin presión
- **Autoridad:** Muestra que has crecido y tienes dirección
- **Prueba social:** Deja ver (naturalmente) que tienes vida activa

**Fase 2: Crear Interés (Día 4-7)**
- **Escasez:** No estés disponible todo el tiempo
- **Reciprocidad:** Da valor sin expectativa visible
- **Consistencia:** Haz que tome pequeños compromisos

**Fase 3: Intensificar (Día 8-14)**
- **Urgencia:** Crea ventanas de oportunidad
- **Todos los gatillos:** Ya deberían estar operando simultáneamente

**Ejemplo integrado:**

Mensaje: "Oye, acabo de ver [algo relacionado con interés de ella] y pensé en ti. Por cierto, este sábado tengo un evento, pero creo que me puedo escapar un rato antes si quieres tomar un café. ¿Te parece?"

Este mensaje activa:
- Afinidad (pensaste en ella)
- Reciprocidad (compartes información valiosa)
- Prueba social (tienes evento)
- Escasez (solo tienes un rato)
- Urgencia (fecha específica)
- Consistencia (ella debe aceptar o rechazar)

**La regla del equilibrio:**
Nunca actives más de 3-4 gatillos en una sola interacción. Demasiados se sienten manipuladores. Distribuye la activación a lo largo del tiempo.`
      }
    ]
  },
  {
    id: 3,
    title: "Scripts de Poder",
    subtitle: "20 mensajes probados para cada situación crítica",
    icon: "📝",
    imagePlaceholder: "[IMAGEN: Colección de ejemplos de mensajes con análisis de efectividad]",
    downloadables: {
      pdf: "leccion-3-scripts-poder.pdf",
      checklist: "checklist-scripts.pdf",
      scripts: "templates-scripts-completos.pdf"
    },
    sections: [
      {
        title: "3.1 ¿Qué es un Script de Poder?",
        content: `Un script de poder es un **mensaje o secuencia de comunicación diseñada estratégicamente** para producir una respuesta emocional específica.

No son plantillas para copiar y pegar ciegamente. Son estructuras probadas que debes adaptar a tu situación, tu personalidad y tu relación específica.

**Características de un script efectivo:**

1. **Tiene un objetivo claro:** Cada script está diseñado para producir un resultado específico
2. **Activa emociones:** Apela al sistema límbico, no solo al racional
3. **Es calibrado:** Apropiado para la etapa de la relación
4. **Parece natural:** No suena a mensaje copiado de internet
5. **Deja espacio:** Invita a respuesta sin exigirla

**Cómo usar estos scripts:**

- Lee cada script y entiende su estructura
- Identifica qué situación enfrentas
- Adapta el lenguaje a tu estilo personal
- Prueba y ajusta según las respuestas

**IMPORTANTE:** Estos scripts son herramientas, no muletas. El objetivo es internalizarlos hasta que la comunicación estratégica sea natural en ti.`
      },
      {
        title: "3.2 Scripts de Primer Contacto",
        content: `**Script 1: El Recuerdo Positivo**
*Objetivo: Reabrir comunicación de forma no amenazante*

"Acabo de pasar por [lugar significativo] y me acordé de [momento específico positivo]. Espero que estés bien."

*Por qué funciona:* Activa nostalgia sin presión. No pide nada. Deja la puerta abierta.

---

**Script 2: El Valor Agregado**
*Objetivo: Posicionarte como fuente de valor*

"Vi esto y pensé en ti [link/foto/información relevante para sus intereses]. Sé que te encanta [tema]. Que tengas buen día."

*Por qué funciona:* Demuestras que la conoces y le das algo útil. Sin expectativa visible.

---

**Script 3: El Cierre Amistoso**
*Objetivo: Establecer comunicación neutral post-ruptura*

"Oye, sé que las cosas terminaron de cierta forma, pero quería que supieras que te deseo lo mejor. Si algún día necesitas algo, aquí estoy."

*Por qué funciona:* Muestra madurez emocional. Quita presión. Establece tu posición elevada.

---

**Script 4: La Consulta Genuina**
*Objetivo: Crear razón legítima para contactar*

"¿Recuerdas el nombre de [restaurante/libro/lugar] del que me hablaste? Lo necesito para [razón legítima]. Gracias de antemano."

*Por qué funciona:* Razón concreta, no emocional. Fácil de responder. Abre puerta a conversación.`
      },
      {
        title: "3.3 Scripts para Crear Urgencia",
        content: `**Script 5: La Ventana de Oportunidad**
*Objetivo: Crear sensación de tiempo limitado*

"Voy a estar en [su zona/ciudad] solo este fin de semana. Si tienes un momento para un café, avísame. Si no, no hay problema."

*Por qué funciona:* Urgencia temporal + sin presión. Demuestra que tienes vida.

---

**Script 6: El Cambio Inminente**
*Objetivo: Sugerir que las cosas van a cambiar*

"Tengo algunas noticias importantes. No es algo para hablar por mensaje, pero me gustaría contarte. ¿Tienes un momento esta semana?"

*Por qué funciona:* Crea curiosidad intensa. Urgencia natural. Requiere encuentro presencial.

---

**Script 7: La Oportunidad Única**
*Objetivo: Vincular el encuentro a algo especial*

"Conseguí [entradas/reservación/acceso] para [algo que ella valora]. Es el [fecha]. ¿Te gustaría venir?"

*Por qué funciona:* Valor concreto + fecha específica + generosidad.

---

**Script 8: El Tiempo Limitado**
*Objetivo: Establecer que tu disponibilidad es finita*

"Las próximas semanas voy a estar muy enfocado en [proyecto/trabajo/viaje]. Antes de desconectarme, quería saber cómo estás."

*Por qué funciona:* Sutilmente indica escasez futura. Prioriza el contacto actual.`
      },
      {
        title: "3.4 Scripts para Intensificar",
        content: `**Script 9: El Recuerdo Divertido**
*Objetivo: Evocar emociones positivas compartidas*

"Acabo de recordar cuando [momento gracioso específico]. Todavía me río de eso. Buenos tiempos."

*Por qué funciona:* Activa asociaciones positivas. Crea conexión emocional.

---

**Script 10: El Desafío Sutil**
*Objetivo: Activar su competitividad*

"Apuesto a que ya no puedes [algo que hacían juntos/habilidad que tenía]. Yo he mejorado bastante."

*Por qué funciona:* Desafío amistoso. Invita a demostrar algo. Crea dinámica de juego.

---

**Script 11: La Vulnerabilidad Calculada**
*Objetivo: Crear intimidad emocional*

"Últimamente he estado reflexionando mucho sobre [tema personal relacionado con la relación]. Creo que entendí algunas cosas que antes no veía."

*Por qué funciona:* Muestra crecimiento. Invita a profundizar. No es disculpa, es evolución.

---

**Script 12: El Doble Sentido**
*Objetivo: Introducir tensión sexual sutil*

"Estaba pensando en esa vez en [lugar] cuando [momento con carga romántica/sexual]. Algunos recuerdos no se olvidan fácilmente."

*Por qué funciona:* Activa memoria emocional y física. Sutil pero claro.`
      },
      {
        title: "3.5 Scripts para Crear Admiración",
        content: `**Script 13: El Logro Compartido**
*Objetivo: Mostrar tu crecimiento sin presumir*

"¿Recuerdas cuando hablábamos de [meta/sueño]? Finalmente lo logré. Solo quería que lo supieras porque tú siempre creíste en eso."

*Por qué funciona:* Demuestra progreso. La incluye en tu éxito. Activa orgullo.

---

**Script 14: La Transformación Visible**
*Objetivo: Comunicar cambio positivo*

"He estado trabajando mucho en mí mismo últimamente. [Cambio específico: hobby, fitness, proyecto]. Me siento en un buen lugar."

*Por qué funciona:* Demuestra no estás estancado. Atractivo sin ser sobre ella.

---

**Script 15: El Reconocimiento Auténtico**
*Objetivo: Hacerla sentir vista y valorada*

"Siempre admiré cómo [cualidad específica de ella]. No conozco a muchas personas así."

*Por qué funciona:* Elogio específico y genuino. Diferenciación. Validación.`
      },
      {
        title: "3.6 Scripts para Resolver Conflictos",
        content: `**Script 16: El Puente de Paz**
*Objetivo: Desescalar tensión sin ceder posición*

"Sé que las cosas se pusieron tensas. No estoy de acuerdo con todo, pero valoro lo que tuvimos. ¿Podemos hablar sin pelear?"

*Por qué funciona:* Muestra madurez. No pide disculpas vacías. Abre diálogo.

---

**Script 17: La Responsabilidad Parcial**
*Objetivo: Reconocer errores sin auto-destruirte*

"He pensado mucho y reconozco que [error específico tuyo]. No fue justo. Pero también creo que hubo cosas de ambos lados que no funcionaron."

*Por qué funciona:* Muestra capacidad de reflexión. No te convierte en el villano único.

---

**Script 18: El Nuevo Comienzo**
*Objetivo: Proponer reset sin borrar el pasado*

"¿Qué tal si empezamos de cero? No como si nada pasó, sino conociendo lo que funcionó y lo que no. Como personas diferentes."

*Por qué funciona:* Propuesta concreta. Reconoce el pasado. Ofrece futuro diferente.`
      },
      {
        title: "3.7 Scripts de Cierre y Consolidación",
        content: `**Script 19: La Propuesta de Encuentro**
*Objetivo: Pasar de digital a presencial*

"Hay algo que quiero decirte, pero prefiero hacerlo en persona. ¿Cuándo tienes un momento esta semana?"

*Por qué funciona:* Crea anticipación. Demuestra que es importante. Requiere acción.

---

**Script 20: El Cierre Emocional**
*Objetivo: Consolidar la reconexión*

"No sé exactamente a dónde va esto, pero me gusta que estemos hablando de nuevo. Quería que lo supieras."

*Por qué funciona:* Honesto sin ser desesperado. Muestra aprecio. No presiona.

---

**NOTA FINAL sobre los scripts:**

Estos 20 scripts cubren las situaciones más comunes. Pero recuerda:

1. **Adapta siempre** el lenguaje a tu estilo
2. **Nunca envíes** un script que no suena a ti
3. **Observa las respuestas** y ajusta tu estrategia
4. **Menos es más**: No bombardees con mensajes
5. **El timing importa**: El mejor script en el momento equivocado falla

La comunicación estratégica es un arte que mejora con la práctica. Usa estos scripts como punto de partida, no como destino final.`
      }
    ]
  },
  {
    id: 4,
    title: "Técnicas de Influencia Emocional",
    subtitle: "7 técnicas avanzadas para crear conexiones profundas",
    icon: "🎭",
    imagePlaceholder: "[IMAGEN: Diagrama de las 7 técnicas de influencia emocional con ejemplos visuales]",
    downloadables: {
      pdf: "leccion-4-tecnicas-influencia.pdf",
      checklist: "checklist-tecnicas.pdf"
    },
    sections: [
      {
        title: "4.1 Introducción a la Influencia Emocional Ética",
        content: `La influencia emocional es la capacidad de **afectar positivamente el estado emocional de otra persona**. Cuando se usa éticamente, crea relaciones más profundas y satisfactorias para ambas partes.

**¿Qué hace que la influencia sea ética?**

1. **Intención positiva:** Tu objetivo es crear una conexión genuina, no explotar
2. **Beneficio mutuo:** Ambos ganan en la interacción
3. **Transparencia subyacente:** No engañas sobre quién eres fundamentalmente
4. **Respeto por la autonomía:** Ella siempre tiene la opción de alejarse
5. **Sin daño:** Tus acciones no causan daño psicológico o emocional

**La diferencia con la manipulación:**

La manipulación busca beneficio unilateral a costa del otro. La influencia ética busca crear valor para ambos.

Piensa en un vendedor que te ayuda a encontrar exactamente lo que necesitas vs. uno que te presiona a comprar algo que no te sirve. Ambos "influyen", pero uno lo hace éticamente.

Las técnicas que aprenderás aquí son herramientas. Como un cuchillo, pueden cortar comida o causar daño. La ética está en cómo las usas.`
      },
      {
        title: "4.2 Técnica 1: El Espejo Emocional",
        content: `El espejo emocional es la técnica de **reflejar sutilmente las emociones de la otra persona** para crear rapport y conexión.

**Cómo funciona:**

El cerebro humano tiene "neuronas espejo" que se activan cuando vemos emociones en otros. Cuando reflejas las emociones de alguien, su cerebro registra: "Esta persona me entiende".

**Aplicación práctica:**

1. **Observa su estado emocional actual**
   - ¿Está animada? ¿Frustrada? ¿Pensativa? ¿Emocionada?

2. **Iguala tu energía (calibrada)**
   - Si está entusiasmada, no respondas con monotonía
   - Si está melancólica, no llegues hiperactivo
   - Ajusta tu tono, velocidad y energía

3. **Refleja verbalmente**
   - "Parece que eso te tiene emocionada"
   - "Puedo ver que eso fue difícil"

4. **Refleja físicamente** (si están en persona)
   - Postura similar (sutil, no obvio)
   - Gestos parecidos
   - Ritmo de respiración similar

**Ejemplo:**

Ella: "Estoy tan frustrada con mi trabajo, no me valoran"

❌ Respuesta sin espejo: "Bueno, tal vez deberías buscar otro trabajo"

✅ Respuesta con espejo: "Eso suena realmente frustrante. Esforzarte tanto y no sentir que lo reconocen... [pausa]... ¿Qué pasó específicamente?"

La segunda respuesta la hace sentir comprendida antes de ofrecer soluciones.`
      },
      {
        title: "4.3 Técnica 2: La Validación Selectiva",
        content: `La validación selectiva consiste en **reconocer y reforzar específicamente los comportamientos y cualidades que quieres ver más**.

**El principio:**

Lo que validas, crece. Lo que ignoras, disminuye. Esto está basado en condicionamiento operante básico, pero aplicado a las relaciones.

**Cómo aplicarlo:**

1. **Identifica comportamientos deseables:**
   - Cuando ella te busca primero
   - Cuando hace algo que te gusta
   - Cuando muestra las cualidades que valoras

2. **Valida inmediatamente:**
   - "Me encanta que hayas pensado en eso"
   - "Eso que acabas de hacer fue muy considerado"
   - Atención completa + sonrisa genuina

3. **No valides lo que no quieres:**
   - Comportamientos que te molestan: respuesta neutral
   - Pruebas de límites: no recompenses con atención

**Importante:** La validación debe ser **genuina**. La gente detecta la falsedad. Solo valida cosas que realmente aprecias.

**Ejemplo de aplicación:**

Si ella te cuenta sobre un logro profesional → Validación completa: "Eso es increíble, cuéntame más"

Si ella te cuenta chismes negativos sobre otros → Respuesta neutral: "Mmm" y cambio de tema

Con el tiempo, ella inconscientemente gravitará hacia compartir más de lo que validas positivamente.`
      },
      {
        title: "4.4 Técnica 3: El Misterio Estratégico",
        content: `El misterio estratégico es **revelar información sobre ti de forma gradual y calibrada** para mantener el interés y la curiosidad.

**Por qué funciona:**

El cerebro humano está diseñado para resolver misterios. Cuando algo es parcialmente conocido pero no completamente, genera dopamina y mantiene la atención enfocada.

**Cómo crear misterio:**

1. **No reveles todo de una vez:**
   - Guarda historias interesantes para futuras conversaciones
   - Menciona actividades sin dar todos los detalles
   - "Estuve trabajando en algo interesante" sin explicar qué

2. **Responde preguntas parcialmente:**
   - Ella: "¿Qué hiciste el fin de semana?"
   - Tú: "Tuve un día interesante. Te cuento cuando nos veamos" (sonrisa)

3. **Deja cabos sueltos:**
   - Menciona personas o actividades sin contexto completo
   - Permite que su imaginación llene los espacios

**El equilibrio:**

Demasiado misterio → Frustración y desconfianza
Muy poco misterio → Aburrimiento
Punto óptimo → Curiosidad constante pero satisfacción suficiente

**Regla práctica:** Revela el 70% de lo que pregunta, guarda el 30% para después.`
      },
      {
        title: "4.5 Técnica 4: La Recompensa Variable",
        content: `La recompensa variable es el principio más poderoso en psicología del comportamiento. Consiste en **no ser completamente predecible en tus respuestas positivas**.

**La ciencia detrás:**

Los estudios de B.F. Skinner demostraron que las recompensas impredecibles generan más comportamiento que las predecibles. Es el mismo principio que hace adictivas las máquinas tragamonedas y las redes sociales.

**Aplicación en relaciones:**

1. **Varía tu tiempo de respuesta:**
   - A veces responde rápido
   - A veces toma un poco más
   - Sin patrón predecible (pero nunca desaparezcas por días)

2. **Varía tu nivel de entusiasmo:**
   - A veces muy expresivo
   - A veces más contenido
   - Depende genuinamente de tu estado

3. **Varía tus iniciativas:**
   - A veces tú propones planes
   - A veces dejas que ella proponga
   - A veces acepta, a veces no puedes

**Lo que NO es:**

❌ Ignorarla para "hacerte el difícil"
❌ Jugar juegos mentales
❌ Ser frío cuando ella es cálida

✅ Ser genuinamente variable porque tienes una vida real
✅ No depender emocionalmente de su respuesta
✅ Mantener tu centro mientras interactúas

**Resultado:** Ella nunca está 100% segura de tu respuesta, lo que mantiene su interés activo.`
      },
      {
        title: "4.6 Técnica 5: La Competencia Percibida",
        content: `La competencia percibida es la **sugerencia sutil de que tienes otras opciones** sin nunca ser obvio o insultante al respecto.

**Por qué funciona:**

Evolutivamente, un hombre con opciones es un hombre valioso. No necesitas tener múltiples mujeres, pero ella no debe sentir que es tu única opción en el universo.

**Cómo generar competencia percibida:**

1. **Tiene vida social activa:**
   - Menciona amigos, actividades, eventos
   - No siempre estés disponible
   - Comparte (naturalmente) fotos sociales

2. **Mantén tu apariencia:**
   - Vístete bien incluso cuando no la ves
   - Cuida tu físico
   - Proyecta que te valoras

3. **No descartes atención femenina:**
   - Si otras mujeres te tratan bien, no lo escondas
   - No presumas, pero no finjas que no existe
   - Mantén amistades femeninas genuinas

4. **Nunca la uses como arma:**
   - ❌ "Otras mujeres sí aprecian lo que hago"
   - ❌ Mencionar ex o potenciales para causar celos
   - ✅ Simplemente tener una vida que incluye a otras personas

**El balance:**

Competencia obvia → Pareces inseguro tratando de compensar
Sin competencia → Pareces sin opciones o desesperado
Competencia sutil → Pareces naturalmente valioso

**Test:** Si ella te preguntara directamente sobre otras mujeres, tu respuesta debería ser honesta pero despreocupada, no defensiva.`
      },
      {
        title: "4.7 Técnicas 6 y 7: Vulnerabilidad Estratégica y Desafío Emocional",
        content: `**TÉCNICA 6: Vulnerabilidad Estratégica**

La vulnerabilidad estratégica es **compartir aspectos personales de forma calculada** para crear intimidad sin parecer débil.

**El equilibrio:**

- Muy poca vulnerabilidad → Pareces cerrado, inaccesible, frío
- Demasiada vulnerabilidad → Pareces necesitado, débil, sin contención
- Vulnerabilidad calibrada → Pareces humano, profundo, confiable

**Qué compartir:**

✅ Miedos que has superado (pasado)
✅ Momentos difíciles que te formaron
✅ Sueños y aspiraciones (no desesperación)
✅ Aprendizajes de errores (mostrando crecimiento)

❌ Inseguridades actuales no resueltas
❌ Necesidades emocionales urgentes
❌ Comparaciones con otros hombres
❌ Desesperación por la relación

**Timing:** Comparte vulnerabilidad después de demostrar fortaleza, no antes.

---

**TÉCNICA 7: El Desafío Emocional**

El desafío emocional es **no dejarla acomodarse completamente** manteniendo una tensión productiva.

**Formas de desafiar:**

1. **Opiniones propias:** No estar de acuerdo solo por agradar
2. **Estándares claros:** Saber lo que toleras y lo que no
3. **Expectativas:** Esperar algo de ella, no solo dar
4. **Humor provocador:** Bromas que la pican (sin insultar)

**Ejemplo:**

Ella: "Creo que [opinión con la que no coincides]"

❌ "Sí, tienes razón" (por evitar conflicto)
✅ "Interesante. Yo lo veo diferente porque..." (con sonrisa)

El desafío bien ejecutado genera respeto. Ella quiere a alguien que la haga pensar, no a alguien que dice sí a todo.`
      },
      {
        title: "4.8 Ética y Límites",
        content: `Todo lo que has aprendido en esta lección son herramientas poderosas. Como cualquier herramienta poderosa, viene con responsabilidad.

**Límites éticos claros:**

1. **Nunca uses estas técnicas para:**
   - Obligar a alguien a hacer algo que no quiere
   - Dañar la autoestima de otra persona
   - Crear dependencias psicológicas enfermizas
   - Aislar a alguien de sus seres queridos
   - Explotar emocional o financieramente

2. **Señales de que cruzaste la línea:**
   - Ella muestra ansiedad constante sobre ti
   - Ha dejado aspectos importantes de su vida por ti
   - Tiene miedo de tu reacción
   - Has mentido sobre quién eres fundamentalmente
   - Sientes que "ganas" a costa de ella

3. **La prueba del espejo:**
   Pregúntate: "¿Estaría orgulloso de cómo actúo si alguien que respeto lo viera?"

**El objetivo real:**

Estas técnicas son para **nivelar el campo de juego** y crear conexiones genuinas, no para controlar o dominar. El fin último es una relación donde:

- Ambos se sienten valorados
- Hay respeto mutuo
- La comunicación es honesta
- El poder está equilibrado
- Ambos crecen como personas

Si usas estas herramientas correctamente, no necesitarás usarlas indefinidamente. Eventualmente, la conexión genuina reemplaza la estrategia consciente.`
      }
    ]
  },
  {
    id: 5,
    title: "Psicología Profunda",
    subtitle: "Entiende cómo funciona su mente a nivel profundo",
    icon: "🔬",
    imagePlaceholder: "[IMAGEN: Diagrama de los 3 cerebros y sus funciones en las relaciones]",
    downloadables: {
      pdf: "leccion-5-psicologia-profunda.pdf",
      checklist: "checklist-psicologia.pdf"
    },
    sections: [
      {
        title: "5.1 Cómo Funciona el Cerebro Femenino",
        content: `Entender el cerebro femenino no es sobre estereotipos o generalizaciones simplistas. Es sobre comprender las diferencias neurobiológicas reales que influyen en cómo las mujeres procesan emociones, relaciones y conexiones.

**Diferencias clave respaldadas por neurociencia:**

1. **Mayor conectividad entre hemisferios:**
   El cuerpo calloso (que conecta los hemisferios cerebrales) es típicamente más grueso en mujeres, lo que permite integrar información emocional y racional más fluidamente.

2. **Mayor actividad en áreas emocionales:**
   El sistema límbico (centro emocional) suele ser más activo, lo que significa que las emociones juegan un papel más prominente en la toma de decisiones.

3. **Mayor memoria emocional:**
   Las mujeres tienden a recordar eventos emocionales con más detalle y por más tiempo. Esto significa que los momentos emocionales que creas (positivos o negativos) permanecen más tiempo.

4. **Mayor capacidad de lectura social:**
   El cerebro femenino típicamente es mejor para leer señales sociales sutiles, expresiones faciales y tono de voz.

**Implicaciones prácticas:**

- Tus palabras importan, pero tu tono y lenguaje corporal importan más
- Los momentos emocionales que creas son inversiones a largo plazo
- Ella probablemente detecte inconsistencias que crees invisibles
- El contexto emocional de una conversación puede ser más importante que el contenido`
      },
      {
        title: "5.2 Los 3 Sistemas Cerebrales",
        content: `El modelo del cerebro triuno, desarrollado por Paul MacLean, divide el cerebro en tres sistemas que evolucionaron en diferentes momentos. Entender cada uno te permite comunicarte más efectivamente.

**1. El Cerebro Reptiliano (Supervivencia)**
- Controla: Respiración, ritmo cardíaco, instintos básicos
- Responde a: Seguridad, amenazas, recursos
- En relaciones: ¿Este hombre puede protegerme? ¿Es una amenaza o un recurso?

**2. El Cerebro Límbico (Emociones)**
- Controla: Emociones, memoria emocional, vínculos
- Responde a: Conexión, pertenencia, recuerdos
- En relaciones: ¿Cómo me hace sentir? ¿Me siento conectada? ¿Hay química?

**3. El Neocórtex (Racionalidad)**
- Controla: Pensamiento lógico, planificación, lenguaje
- Responde a: Argumentos, pros/contras, futuro
- En relaciones: ¿Tiene sentido esta relación? ¿Es una buena decisión?

**Orden de procesamiento:**

Cuando te comunicas, la información pasa por los tres cerebros en orden: Reptiliano → Límbico → Neocórtex.

Esto significa que antes de que ella evalúe lógicamente lo que dices, ya procesó:
1. ¿Estoy segura? (reptiliano)
2. ¿Cómo me siento? (límbico)

Si fallas en los primeros dos niveles, la lógica no importa.`
      },
      {
        title: "5.3 Cómo Activar Cada Sistema",
        content: `**Activar el Cerebro Reptiliano (Seguridad):**

- **Postura y presencia:** Ocupa espacio, muévete con calma
- **Voz profunda y pausada:** Transmite control
- **Contacto visual firme:** Demuestra que no eres una amenaza
- **Ambiente seguro:** Lugares públicos inicialmente, no presiones
- **Consistencia:** Sé predecible en tu carácter fundamental

**Activar el Cerebro Límbico (Emociones):**

- **Historias:** El cerebro emocional responde a narrativas, no datos
- **Experiencias compartidas:** Crea momentos memorables
- **Variedad emocional:** Llévala por un rango de emociones (risa, intriga, ternura)
- **Sensaciones físicas:** Ambiente, música, comida, contacto
- **Recuerdos positivos:** Activa memorias de buenos momentos

**Activar el Neocórtex (Lógica):**

- **Visión de futuro:** Muestra que tienes planes y dirección
- **Compatibilidad práctica:** Valores, metas, estilo de vida alineados
- **Estabilidad demostrada:** Evidencia de que eres una "buena inversión"
- **Comunicación clara:** Expresa lo que quieres y por qué

**La secuencia ideal:**

1. Primero, hazla sentir segura (reptiliano)
2. Luego, crea conexión emocional (límbico)
3. Finalmente, presenta el caso racional (neocórtex)

Si intentas convencerla racionalmente sin haber activado los otros niveles, es como construir una casa sin cimientos.`
      },
      {
        title: "5.4 Neurotransmisores Clave",
        content: `Los neurotransmisores son los mensajeros químicos del cerebro. Entender cuáles controlan la atracción y el apego te permite diseñar interacciones que los activen naturalmente.

**1. Dopamina (El Neurotransmisor del Deseo)**

- **Función:** Crea sensación de querer, anticipación, motivación
- **Se libera con:** Novedad, recompensas impredecibles, anticipación
- **En relaciones:** Es lo que hace que "quiera más de ti"

*Cómo activarla:*
- Sé impredecible (en el buen sentido)
- Crea anticipación antes de encuentros
- Introduce novedad regularmente
- Genera sorpresas positivas

**2. Oxitocina (La Hormona del Vínculo)**

- **Función:** Crea sensación de confianza, conexión, apego
- **Se libera con:** Contacto físico, intimidad, miradas prolongadas
- **En relaciones:** Es lo que la hace sentir "conectada" a ti

*Cómo activarla:*
- Contacto físico calibrado
- Conversaciones profundas
- Miradas a los ojos sostenidas
- Estar presente genuinamente

**3. Serotonina (El Neurotransmisor del Bienestar)**

- **Función:** Crea sensación de felicidad estable, satisfacción
- **Se libera con:** Reconocimiento, logros, pertenencia
- **En relaciones:** Es lo que hace la relación "sentirse bien"

*Cómo activarla:*
- Hazla sentir valorada y reconocida
- Crea sensación de pertenencia
- Estabilidad emocional en tu presencia`
      },
      {
        title: "5.5 El Ciclo del Apego",
        content: `El apego emocional sigue un ciclo predecible que, una vez entendido, puedes influenciar positivamente.

**Fase 1: Atracción Inicial**
- Dominan: Dopamina, norepinefrina
- Características: Emoción, anticipación, pensamientos intrusivos sobre ti
- Duración: Semanas a pocos meses

**Fase 2: Construcción de Vínculo**
- Dominan: Oxitocina, vasopresina
- Características: Intimidad creciente, confianza, vulnerabilidad
- Duración: Meses

**Fase 3: Apego Estable**
- Dominan: Serotonina, endorfinas
- Características: Comodidad, seguridad, satisfacción
- Duración: Largo plazo

**El problema:**
Muchas relaciones fallan en la transición de Fase 1 a Fase 2 porque los hombres no saben mantener la dopamina mientras construyen oxitocina.

**La solución:**
Mantener elementos de novedad y anticipación (dopamina) mientras construyes intimidad y confianza (oxitocina). No son mutuamente excluyentes.

**En el contexto de reconquista:**
Cuando la reconquistas, estás esencialmente reiniciando el ciclo. Tienes la ventaja de historia compartida (oxitocina residual) pero necesitas reactivar la atracción (dopamina nueva).

Esto significa: No intentes volver exactamente a cómo era. Ofrece algo nuevo mientras honras lo que funcionaba.`
      },
      {
        title: "5.6 La Psicología del Deseo",
        content: `El deseo es diferente del amor. Puedes amar a alguien sin desearla, y puedes desear a alguien sin amarla. Para una relación completa, necesitas ambos.

**Los 3 componentes del deseo:**

1. **Atracción física:**
   Aunque no es lo único, sigue siendo importante. Cuida tu apariencia.

2. **Tensión sexual:**
   La diferencia entre amigos y amantes. Requiere polaridad, no igualdad total.

3. **Misterio:**
   Lo completamente conocido no genera deseo. Siempre debe haber algo por descubrir.

**Por qué el deseo disminuye:**

- **Demasiada familiaridad:** La rutina mata el misterio
- **Pérdida de polaridad:** Cuando te vuelves demasiado "seguro" y predecible
- **Falta de tensión:** Sin conflicto productivo o desafío
- **Dependencia excesiva:** Cuando necesitas más de lo que das

**Cómo mantener el deseo vivo:**

- **Mantén tu vida propia:** Intereses, amigos, metas independientes
- **Crea anticipación:** No estés siempre disponible
- **Sorprende:** Rompe la rutina regularmente
- **Tensión sana:** No resuelvas todos los conflictos inmediatamente
- **Trabaja en ti:** Un hombre que sigue creciendo sigue siendo interesante

**El error más común:**
Creer que más amor = más deseo. A veces, dar demasiado mata el deseo porque elimina la tensión necesaria.`
      },
      {
        title: "5.7 Cómo Leer Emociones",
        content: `La capacidad de leer las emociones de ella te da información crucial para calibrar tus acciones.

**Señales de interés positivo:**

- **Ojos:** Pupilas dilatadas, contacto visual prolongado, miradas frecuentes
- **Cuerpo:** Orientado hacia ti, inclinación, toques casuales
- **Voz:** Tono más agudo, risa fácil, habla más rápido
- **Comportamiento:** Te busca, responde rápido, hace preguntas

**Señales de incomodidad/desinterés:**

- **Ojos:** Evita contacto visual, mira hacia salidas
- **Cuerpo:** Brazos cruzados, orientación hacia afuera, distancia
- **Voz:** Monosilábica, tono plano, respuestas cortas
- **Comportamiento:** Mira el teléfono, busca excusas para irse

**Señales de conflicto interno (buenas para ti):**

Cuando muestra interés pero también resistencia, significa que está procesando. Ejemplos:
- Te dice que no debe verte pero sigue hablando
- Dice que es mala idea pero no cuelga
- Se aleja físicamente pero sigue mirándote

**Qué hacer con la información:**

- **Interés claro:** Avanza con confianza
- **Desinterés claro:** Retrocede, recalibra
- **Conflicto interno:** Mantén la calma, no presiones, deja que ella procese

**Práctica:**
Comienza a observar estas señales en todas las interacciones, no solo con ella. Desarrollar esta habilidad de lectura te servirá toda la vida.`
      }
    ]
  },
  {
    id: 6,
    title: "Casos de Éxito",
    subtitle: "5 historias reales analizadas paso a paso",
    icon: "🏆",
    imagePlaceholder: "[IMAGEN: Timeline de cada caso de éxito con puntos clave marcados]",
    downloadables: {
      pdf: "leccion-6-casos-exito.pdf",
      checklist: "checklist-aplicacion.pdf"
    },
    sections: [
      {
        title: "6.1 Caso 1: Reconquista en 9 Días - Andrés",
        content: `**Contexto:**
Andrés (32 años) fue dejado después de 3 años de relación. Su ex, Marina, le dijo que "ya no sentía lo mismo" y que necesitaba "encontrarse a sí misma".

**La situación inicial:**
- Ruptura: 2 semanas antes de empezar el protocolo
- Errores cometidos: Rogar, enviar mensajes largos explicativos, aparecer en su casa
- Estado emocional: Desesperado, sin dormir, perdió 4 kg

**Día 1-3: Fase de Reset**
Andrés aplicó silencio total. Bloqueó sus redes (no a ella, las suyas propias para no espiar). Se enfocó en ejercicio y retomó un proyecto abandonado.

**Día 4: Primer Contacto**
Mensaje enviado: "Encontré tu libro favorito en la librería. Me acordé de cuando lo leíamos juntos. Espero que estés bien."

Respuesta de Marina (6 horas después): "Gracias, me alegra que estés bien también."

**Día 5-6: Construcción**
Andrés no respondió inmediatamente. Al día siguiente envió una foto de un atardecer desde un lugar que ella conocía, sin texto. Ella respondió: "¿Estás en [lugar]?" Conversación breve sobre el lugar.

**Día 7: Propuesta**
"Voy a estar cerca de tu zona el viernes. ¿Te gustaría tomar un café rápido?"
Ella aceptó.

**Día 9: Encuentro**
El café duró 3 horas. Andrés mantuvo la calma, habló de su proyecto, no mencionó la relación. Al final, ella dijo: "Te extraño".

**Resultado:** Volvieron una semana después. Llevan 8 meses juntos.

**Qué funcionó:**
- Silencio inicial para resetear la percepción
- Primer contacto nostálgico pero no desesperado
- Demostración de cambio (proyecto, actitud)
- No presionar en el encuentro`
      },
      {
        title: "6.2 Caso 2: De Amistad a Amor - Carlos",
        content: `**Contexto:**
Carlos (28 años) fue "friendzoneado" después de declararse. Laura le dijo que lo quería "como amigo" y que no quería perder la amistad.

**La situación inicial:**
- No era una ruptura tradicional, sino un rechazo romántico
- Llevaban 2 años de amistad cercana
- Él había sido su "confidente" sobre otros hombres

**Error fundamental identificado:**
Carlos se había posicionado como el amigo seguro, sin tensión sexual ni misterio. Era 100% predecible y disponible.

**Semana 1-2: Reposicionamiento**
Carlos redujo drásticamente su disponibilidad. Dejó de ser el que siempre respondía. Comenzó a salir con otros amigos (y amigas).

**Semana 3: Cambio visible**
Nuevo corte de pelo, ropa diferente, actitud más segura. Laura notó: "Te ves diferente últimamente."

**Semana 4: Misterio**
Cuando Laura preguntó sobre su fin de semana, Carlos fue vago: "Estuvo interesante" sin dar detalles. Ella presionó, él cambió de tema.

**Semana 5: La inversión**
Laura comenzó a buscar más a Carlos. Él ya no estaba siempre disponible. Ella empezó a competir por su atención.

**Semana 6: El punto de quiebre**
Laura le preguntó directamente si estaba saliendo con alguien. Carlos: "¿Por qué te importa?" con sonrisa. Ella no supo qué responder.

**Semana 8: El beso**
En una reunión de amigos, después de tensión acumulada, ella lo besó.

**Resultado:** Han sido pareja por 2 años.

**Qué funcionó:**
- Salir de la zona de amigo mediante escasez
- Crear misterio donde había transparencia total
- Cambio físico que reflejó cambio interno
- No declararse de nuevo; dejar que ella llegara a él`
      },
      {
        title: "6.3 Caso 3: Superando la Competencia - Roberto",
        content: `**Contexto:**
Roberto (35 años) fue dejado porque su ex, Patricia, había conocido a alguien en el trabajo. No era infidelidad, pero ella "conectó" con el otro hombre.

**La situación inicial:**
- Ruptura: 1 mes antes
- Ella estaba saliendo activamente con el otro hombre
- Roberto se sentía derrotado y comparándose constantemente

**El desafío único:**
No solo tenía que reconquistarla, tenía que hacerlo mientras ella estaba con alguien más.

**Mes 1: Desapego estratégico**
Roberto entendió que competir directamente era perder. En lugar de eso, se enfocó 100% en sí mismo. Cero contacto, cero espionaje de redes.

**Mes 2: Transformación visible**
Comenzó un negocio paralelo que había postergado. Subió fotos en redes (no para ella, pero sabía que vería). Viajó solo a un lugar que siempre quiso conocer.

**Mes 2.5: El primer contacto**
Patricia le escribió: "Vi tu foto en [lugar]. Se ve increíble."
Roberto: "Gracias, tenía que hacerlo finalmente."
No buscó continuar la conversación. Ella sí.

**Mes 3: Comparación inevitable**
Patricia comenzó a notar que Roberto estaba creciendo mientras su nueva relación mostraba grietas. El otro hombre era celoso y controlador.

**Mes 3.5: El encuentro**
Roberto la invitó a un café "sin presión, como amigos". Ella fue. Él habló de sus nuevos proyectos, viajes planeados, perspectivas. No mencionó al otro ni la relación pasada.

**Mes 4: Ella regresó**
Patricia terminó con el otro hombre y buscó a Roberto activamente.

**Resultado:** Volvieron con dinámica completamente diferente.

**Qué funcionó:**
- No competir, destacar
- Demostrar (no decir) que él era la mejor opción
- Paciencia extrema
- Dejar que ella viera la diferencia por sí misma`
      },
      {
        title: "6.4 Caso 4: Recuperación Post-Error - Diego",
        content: `**Contexto:**
Diego (30 años) arruinó su relación con celos excesivos. Su ex, Valentina, lo dejó después de un episodio donde él revisó su teléfono y causó una escena en público.

**La situación inicial:**
- Ruptura: 3 semanas antes
- Él la había bloqueado en un arrebato, luego desbloqueado
- Ella le había dicho: "Hasta que no cambies, no quiero saber de ti"

**El desafío único:**
No solo tenía que reconquistarla, tenía que demostrar un cambio real de personalidad.

**Semana 1-4: Trabajo interno real**
Diego comenzó terapia. No como táctica, sino porque reconoció que sus celos eran un problema real que afectaba su vida más allá de esta relación.

**Semana 5: Mensaje de disculpa (una sola vez)**
"Valentina, he estado en terapia trabajando mis temas de inseguridad. No te escribo para pedirte que vuelvas. Solo quería que supieras que tomé en serio lo que dijiste. Espero que estés bien."

No pidió respuesta. No la recibió inmediatamente.

**Semana 7: Cambio visible en redes**
Diego compartía (genuinamente) reflexiones sobre crecimiento personal, libros que estaba leyendo, actividades nuevas. Nada dirigido a ella, pero ella veía.

**Semana 9: Respuesta tardía**
Valentina: "He visto tus publicaciones. Me alegra que estés trabajando en ti."
Diego: "Gracias. Ha sido un proceso difícil pero necesario."

**Semana 10-12: Reconexión gradual**
Conversaciones ocasionales, sin presión romántica. Diego demostró consistentemente su cambio.

**Semana 14: Encuentro**
Tomaron café. Diego mantuvo la calma cuando ella mencionó haber salido con alguien. Sin celos visibles. Ella notó.

**Resultado:** Volvieron 2 meses después, con Diego genuinamente cambiado.

**Qué funcionó:**
- Cambio real, no actuado
- Una sola disculpa, sin repetición
- Demostración de largo plazo
- No intentar acelerar el proceso`
      },
      {
        title: "6.5 Caso 5: Creando Obsesión - Miguel",
        content: `**Contexto:**
Miguel (27 años) tuvo una relación de 6 meses que terminó "por falta de chispa". Su ex, Sofía, le dijo que lo quería pero no estaba "enamorada".

**La situación inicial:**
- La relación había sido cómoda pero aburrida
- No hubo drama, simplemente se apagó
- Sofía no estaba enojada, solo indiferente

**El desafío único:**
Tenía que reignitar pasión donde había habido comodidad excesiva.

**Fase 1: Desaparición total (3 semanas)**
Miguel desapareció completamente. Cero contacto, cero redes visibles para ella. Creó un vacío de información.

**Fase 2: Transformación agresiva (Semana 4-6)**
- Nuevo estilo visual completo
- Comenzó a entrenar intensamente
- Emprendió un proyecto que le apasionaba
- Salió más con amigos

**Fase 3: Aparición estratégica (Semana 7)**
Asistió a un evento donde sabía que ella estaría. No la buscó directamente. Habló con todos menos con ella inicialmente. Ella lo observaba.

Cuando finalmente hablaron, Miguel fue amable pero no efusivo. Mencionó brevemente que estaba "en un momento muy bueno de su vida".

**Fase 4: Escasez extrema (Semana 8-10)**
Sofía comenzó a buscarlo. Él respondía, pero siempre estaba "ocupado". No rechazaba, postergaba.

**Fase 5: Recompensa calibrada (Semana 11)**
Finalmente aceptó verla. El encuentro fue diferente: tensión sexual, misterio, conversación profunda pero no todo revelado.

**Resultado:** Sofía admitió estar "obsesionada" con el "nuevo Miguel". Volvieron, pero con una dinámica completamente diferente.

**Qué funcionó:**
- Crear vacío de información (curiosidad)
- Transformación real y visible
- Escasez estratégica después de reaparición
- Recompensa variable (no siempre disponible)
- Tensión que antes no existía`
      },
      {
        title: "6.6 Análisis Cruzado: Patrones de Éxito",
        content: `Al analizar los 5 casos, emergen patrones consistentes que puedes aplicar a tu situación:

**Patrón 1: El período de silencio**
En todos los casos, hubo un período de cero contacto. Mínimo 2 semanas, máximo 6 semanas. Este período permite:
- Resetear la percepción de ella sobre ti
- Crear espacio para que te extrañe
- Darte tiempo para trabajo interno real

**Patrón 2: Cambio demostrado, no declarado**
Ninguno dijo "he cambiado". Todos lo demostraron a través de acciones visibles. El cambio más creíble es el que ella descubre, no el que tú anuncias.

**Patrón 3: Escasez después del contacto**
Una vez reestablecido contacto, ninguno estuvo inmediatamente disponible. Todos mantuvieron una vida activa que competía por su tiempo.

**Patrón 4: Primer encuentro sin presión**
En todos los casos, el primer encuentro presencial fue presentado como casual o sin expectativas románticas. Esto baja las defensas.

**Patrón 5: Ella dio el paso final**
En todos los casos, la decisión final de volver fue de ella, no de él. Ellos crearon las condiciones, pero la dejaron decidir.

**Lo que NO funcionó (errores previos):**
- Mensajes largos explicativos
- Declaraciones de amor desesperadas
- Aparecer sin aviso
- Presionar para hablar de la relación
- Promesas de cambio sin evidencia

**La fórmula general:**
Silencio → Transformación → Contacto ligero → Escasez → Encuentro neutral → Ella decide`
      }
    ]
  },
  {
    id: 7,
    title: "Implementación Paso a Paso",
    subtitle: "Tu plan de acción completo para los próximos 9 días",
    icon: "🗓️",
    imagePlaceholder: "[IMAGEN: Calendario visual de 9 días con acciones específicas para cada día]",
    downloadables: {
      pdf: "leccion-7-implementacion.pdf",
      checklist: "checklist-9-dias.pdf"
    },
    sections: [
      {
        title: "7.1 Introducción al Plan de Implementación",
        content: `Has absorbido mucha información en este módulo. Ahora es momento de convertir conocimiento en acción.

Este plan de 9 días está diseñado para darte una estructura clara sin ser rígido. Cada situación es diferente, así que usa esto como guía, no como receta inmutable.

**Antes de comenzar, necesitas:**

1. **Evaluar tu situación actual:**
   - ¿Cuánto tiempo ha pasado desde la ruptura?
   - ¿Cuál fue el último contacto?
   - ¿Cómo terminó (drama, neutral, amistoso)?
   - ¿Hay terceras personas involucradas?

2. **Establecer tus metas:**
   - ¿Qué significa "éxito" para ti?
   - ¿Es volver, o es cerrar el capítulo en paz?
   - ¿Estás dispuesto a aceptar cualquier resultado?

3. **Preparar tu mentalidad:**
   - Esto puede no funcionar, y eso está bien
   - El objetivo es convertirte en tu mejor versión, ella es bonus
   - La desesperación es el enemigo

**El marco temporal:**
- Día 1-3: Preparación y primer contacto
- Día 4-6: Intensificación
- Día 7-9: Cierre y consolidación

Cada fase tiene objetivos específicos. No saltes etapas.`
      },
      {
        title: "7.2 Día 1-3: Preparación y Primer Contacto",
        content: `**DÍA 1: Preparación Interna**

*Mañana:*
- Ejercicio físico (mínimo 30 min)
- Revisa este módulo: ¿qué técnicas vas a usar?
- Escribe: "¿Qué versión de mí quiero que ella vea?"

*Tarde:*
- Organiza tu apariencia (ropa, corte de pelo si necesitas)
- Planifica 1 actividad social para esta semana
- Contacta a un amigo para accountability

*Noche:*
- Medita o reflexiona 10 min
- Prepara tu mensaje de primer contacto (NO lo envíes)
- Duerme temprano

---

**DÍA 2: Ajuste y Espera**

*Todo el día:*
- Continúa con tu vida normal MEJORADA
- Revisa y ajusta tu mensaje de primer contacto
- Asegúrate de que no suena desesperado ni frío
- Prepara respuestas para posibles escenarios
- NO contactes todavía (la anticipación es parte del proceso)

*Actividades:*
- Haz algo que te apasione
- Documenta (para ti) cómo te sientes
- Practica los ejercicios de dominancia emocional

---

**DÍA 3: Primer Contacto**

*Momento ideal:* Media mañana o temprana tarde (10am-3pm)

*Envía tu mensaje:* El que preparaste y ajustaste

*Después de enviar:*
- Pon el teléfono en silencio
- Ocúpate en algo que requiera tu atención
- NO revises obsesivamente si leyó/respondió

*Posibles escenarios:*
- Responde rápido: Bien, pero no respondas inmediatamente tú
- Responde tarde: Normal, no significa nada negativo
- No responde (24h): No envíes otro mensaje. Espera.

*Regla: Máximo 1 mensaje por día, y solo si ella respondió*`
      },
      {
        title: "7.3 Día 4-6: Intensificación",
        content: `**DÍA 4: Lectura y Ajuste**

*Evalúa la respuesta del día 3:*
- ¿Fue positiva, neutral o negativa?
- ¿Mostró curiosidad? ¿Hizo preguntas?
- ¿El tono fue frío, cálido o distante?

*Si fue positiva/neutral:*
- Continúa la conversación con valor agregado
- Usa la regla 70/30: Ella debería invertir el 30%
- Introduce un elemento de misterio

*Si fue negativa o no hubo respuesta:*
- No envíes más mensajes hoy
- Revisa si tu mensaje inicial fue apropiado
- Considera esperar 3-5 días más antes de otro intento

*Mensaje de día 4 (si procede):*
Algo que genere curiosidad o evoque buenos recuerdos. No preguntas directas sobre ella/la relación.

---

**DÍA 5: Profundización**

*Objetivo:* Crear más conexión emocional

*Si la conversación fluye:*
- Comparte algo personal (vulnerabilidad calibrada)
- Haz referencia a recuerdos compartidos
- Introduce humor interno si lo hay

*Si no fluye:*
- Un mensaje de valor sin esperar respuesta
- Mantén tu vida activa y visible
- No presiones

*Comienza a plantar semillas:*
- Menciona casualmente planes interesantes
- "Este fin de semana voy a [algo interesante]"

---

**DÍA 6: La Propuesta**

*Objetivo:* Mover la conversación de digital a presencial

*El mensaje clave:*
Propón un encuentro casual, sin presión, con fecha específica.

Ejemplo: "Oye, voy a estar por [zona] el [día específico]. ¿Te gustaría tomar un café rápido? Sin presión, solo para ponernos al día."

*Elementos importantes:*
- Fecha específica (no "algún día")
- Actividad corta (café, no cena)
- Sin presión explícita
- En su zona o neutral

*Si acepta:* Perfecto. Confirma y no envíes más mensajes hasta el encuentro.
*Si no puede ese día:* "Entiendo. ¿Cuándo te funcionaría?" (solo una vez)
*Si rechaza:* "Sin problema. Que estés bien." Y retrocedes.`
      },
      {
        title: "7.4 Día 7-9: Cierre y Consolidación",
        content: `**DÍA 7: Pre-Encuentro (si aplica)**

*Si hay encuentro programado:*
- Prepara tu mejor versión (apariencia, energía)
- Planifica 2-3 temas de conversación interesantes
- Define mentalmente: NO hablarás de la relación primero
- Ejercicio físico para liberar tensión

*Si no hay encuentro:*
- Evalúa el progreso de los días anteriores
- Considera si necesitas más tiempo de silencio
- Continúa con tu vida mejorada

*La mentalidad correcta:*
Este encuentro NO es para "cerrar el trato". Es para plantar más semillas. La presión lo arruina todo.

---

**DÍA 8: El Encuentro**

*Antes:*
- Llega a tiempo (no antes, no después)
- Lenguaje corporal abierto, seguro
- Sonríe genuinamente al verla

*Durante:*
- Escucha más de lo que hablas (60/40)
- Comparte tu crecimiento sin presumir
- Usa contacto visual calibrado
- Humor cuando sea natural
- NO menciones la relación/el pasado negativo

*Si ella toca el tema de la relación:*
- Escucha primero
- No te justifiques excesivamente
- "Sí, creo que ambos aprendimos cosas" (neutral pero maduro)

*Al final:*
- No extiendas artificialmente
- "Fue bueno verte" (genuino)
- No pidas verse de nuevo inmediatamente
- Deja que ella procese

---

**DÍA 9: Post-Encuentro**

*El día después:*
- Un mensaje simple: "Fue bueno verte ayer. Que tengas buena semana."
- NO más que eso

*Evalúa:*
- ¿Cómo fue la energía del encuentro?
- ¿Hubo señales de interés?
- ¿Quedó ella con ganas de más?

*Próximos pasos dependen de su respuesta:*
- Respuesta cálida + ella propone algo = Excelente, sigue su lead
- Respuesta cálida sin propuesta = Espera 2-3 días, propone tú algo
- Respuesta fría/sin respuesta = Retrocede, dale espacio

*Regla de oro:*
Nunca parezcas más invertido que ella en este punto.`
      },
      {
        title: "7.5 Checklist de Acción",
        content: `Usa esta checklist para cada día. Marca solo lo que realmente hiciste.

**PREPARACIÓN (Antes del Día 1)**
□ He pasado mínimo 2 semanas sin contacto
□ He trabajado en mi apariencia física
□ Tengo actividades propias que me apasionan
□ He procesado emocionalmente la ruptura (no estoy en crisis)
□ Entiendo que esto puede no funcionar y estoy en paz con eso
□ Tengo un amigo/sistema de apoyo para mantenerme responsable

**DÍA A DÍA**
□ Día 1: Ejercicio hecho, mensaje preparado (no enviado)
□ Día 2: Mensaje revisado, actividad social planificada
□ Día 3: Mensaje enviado, teléfono en silencio después
□ Día 4: Evaluación de respuesta, siguiente mensaje si procede
□ Día 5: Profundización de conversación o silencio estratégico
□ Día 6: Propuesta de encuentro enviada
□ Día 7: Preparación para encuentro o reevaluación
□ Día 8: Encuentro ejecutado o plan B
□ Día 9: Mensaje post-encuentro, evaluación final

**SEÑALES DE QUE ESTÁ FUNCIONANDO**
□ Ella responde más rápido con el tiempo
□ Ella hace preguntas sobre ti
□ Ella inicia contacto sin que tú lo hagas
□ El tono de sus mensajes es más cálido
□ Menciona recuerdos positivos
□ Muestra curiosidad sobre tu vida actual
□ Acepta encontrarse en persona

**SEÑALES DE ALERTA (Necesitas recalibrar)**
□ Respuestas cada vez más cortas/frías
□ Ella nunca inicia
□ Rechazos repetidos a encontrarse
□ Menciona a otra persona de forma romántica
□ Te pide explícitamente espacio`
      },
      {
        title: "7.6 Qué Hacer Si No Funciona",
        content: `A veces, a pesar de hacer todo bien, no funciona. Esto NO significa que fallaste. Significa que algunas cosas simplemente no están destinadas a ser.

**Señales de que debes parar:**

1. **Ella pidió explícitamente que no la contactes**
   Respeta esto absolutamente. Continuar es acoso.

2. **Han pasado 3+ intentos sin reciprocidad**
   Si después de 3 ciclos de contacto ella no muestra interés, es momento de soltar.

3. **Ella está en una relación seria**
   Si no es una aventura pasajera sino algo establecido, retírate con dignidad.

4. **Tú estás sufriendo demasiado**
   Si el proceso te está destruyendo emocionalmente, prioriza tu bienestar.

**Cómo cerrar con dignidad:**

Si decides parar, envía un último mensaje (opcional):

"[Nombre], quiero que sepas que te deseo genuinamente lo mejor. Voy a respetar tu espacio y seguir adelante. Si algún día cambias de opinión, sabes dónde encontrarme. Cuídate."

Después de esto: CERO contacto. No importa qué. Si ella vuelve, que sea 100% su iniciativa.

**El reframe necesario:**

Este proceso, funcione o no, te convirtió en una mejor versión de ti mismo. Eso no se pierde. Los hábitos, la mentalidad, el crecimiento personal... todo eso te sirve para tu próxima relación.

A veces la mejor reconquista es la que no haces, porque te libera para encontrar algo mejor.`
      },
      {
        title: "7.7 Próximos Pasos: El Módulo 3",
        content: `Si has llegado hasta aquí y has tenido éxito (o estás en camino), felicitaciones. Has logrado algo que la mayoría de hombres no puede.

**Pero hay un problema...**

La reconquista es solo la mitad de la batalla. Las estadísticas son claras:

- **43%** de las parejas que vuelven después de una ruptura, terminan de nuevo en los primeros 30 días
- **67%** no pasan del primer año
- Solo **28%** mantienen la relación a largo plazo

¿Por qué?

Porque volver a estar juntos no cambia los patrones que causaron la ruptura. Sin trabajo consciente, esos patrones regresan.

**El Módulo 3: Blindaje Emocional** está diseñado específicamente para:

1. **Los primeros 30 días críticos:**
   Un protocolo día a día para consolidar la reconquista y evitar recaídas.

2. **Prevención de amenazas:**
   Cómo blindar la relación contra terceros, rutina, y los errores que causaron la primera ruptura.

3. **Mantenimiento del deseo:**
   Técnicas para mantener la chispa viva a largo plazo, no solo en la luna de miel.

4. **Comunidad de apoyo:**
   Acceso a un grupo exclusivo de hombres que han pasado por el mismo proceso.

**La verdad incómoda:**

Puedes elegir no continuar. Pero si lo haces, estás apostando que serás parte del 28% que lo logra sin guía. ¿Estás dispuesto a arriesgar todo lo que has ganado?

El Módulo 3 es la diferencia entre una reconquista temporal y una relación transformada para siempre.

*Tu siguiente paso está claro. La pregunta es: ¿lo tomarás?*`
      }
    ]
  }
];

export const getModule2LessonById = (id: number): Module2Lesson | undefined => {
  return module2Lessons.find(lesson => lesson.id === id);
};

export const getNextModule2LessonId = (currentId: number): number | null => {
  const currentIndex = module2Lessons.findIndex(lesson => lesson.id === currentId);
  if (currentIndex === -1 || currentIndex === module2Lessons.length - 1) return null;
  return module2Lessons[currentIndex + 1].id;
};

export const getPreviousModule2LessonId = (currentId: number): number | null => {
  const currentIndex = module2Lessons.findIndex(lesson => lesson.id === currentId);
  if (currentIndex <= 0) return null;
  return module2Lessons[currentIndex - 1].id;
};

export const module2Badges = [
  'Científico Emocional',
  'Maestro de Gatillos',
  'Experto en Scripts',
  'Influenciador Ético',
  'Psicólogo Profundo',
  'Analista de Éxito',
  'Implementador Elite'
];
