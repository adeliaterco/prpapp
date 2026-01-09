export interface LessonSection {
  title: string;
  content: string;
}

export interface Module3Lesson {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  sections: LessonSection[];
  imagePlaceholder: string;
  downloadables?: {
    pdf: string;
    checklist: string;
    protocol?: string;
  };
}

export const module3Lessons: Module3Lesson[] = [
  {
    id: 1,
    title: "Mantenimiento Emocional - La Ciencia",
    subtitle: "Por qué mantener es más importante que reconquistar",
    icon: "🔬",
    imagePlaceholder: "[IMAGEN: Diagrama de los 3 pilares del mantenimiento emocional]",
    downloadables: {
      pdf: "leccion-1-mantenimiento-emocional.pdf",
      checklist: "checklist-mantenimiento.pdf"
    },
    sections: [
      {
        title: "1.1 ¿Qué es el Mantenimiento Emocional?",
        content: `El mantenimiento emocional es el **arte de sostener y profundizar la conexión** que has creado. Es la diferencia entre una reconquista temporal y una relación duradera.

Piensa en el mantenimiento emocional como el cuidado de un jardín. Puedes plantar las semillas (reconquista), pero si no riegas, no abonas, no proteges de las plagas, todo muere. El 43% de las parejas que vuelven después de una ruptura terminan separándose de nuevo en los primeros 30 días. ¿Por qué? Porque ignoran el mantenimiento.

**El mantenimiento emocional incluye:**

1. **Consistencia en tus acciones:** No volver a los patrones que causaron la ruptura
2. **Evolución constante:** Seguir siendo la versión mejorada de ti mismo
3. **Inversión calibrada:** Dar lo suficiente, pero no demasiado
4. **Protección activa:** Blindar la relación contra amenazas internas y externas
5. **Profundización gradual:** Crear niveles cada vez más profundos de conexión

El error más común es pensar que "ya ganaste" y que puedes relajarte. La realidad es que la reconquista es solo el comienzo. El trabajo real empieza ahora.`
      },
      {
        title: "1.2 Cómo Funciona en el Cerebro",
        content: `El cerebro humano está diseñado para la **habituación**. Esto significa que lo que al principio es emocionante, con el tiempo se vuelve normal y eventualmente aburrido.

**El ciclo de habituación:**

1. **Novedad:** Liberación masiva de dopamina (la "luna de miel")
2. **Familiaridad:** Dopamina disminuye, oxitocina aumenta
3. **Rutina:** Ambos neurotransmisores se estabilizan
4. **Aburrimiento:** Sin estímulos nuevos, todo decrece

Tu objetivo es **romper este ciclo** de forma estratégica. No puedes mantener la intensidad de la luna de miel para siempre, pero puedes crear "micro-lunas de miel" periódicas que reactiven el sistema de recompensa.

**Neuroquímica del mantenimiento:**

- **Dopamina:** Necesita novedad y anticipación. Inyecta sorpresas y eventos inesperados.
- **Oxitocina:** Necesita intimidad y contacto. Mantén momentos de conexión profunda.
- **Serotonina:** Necesita estabilidad y reconocimiento. Hazla sentir segura y valorada.

El equilibrio perfecto es crear una base de seguridad (serotonina + oxitocina) con picos regulares de emoción (dopamina). Demasiada seguridad = aburrimiento. Demasiada emoción = ansiedad.`
      },
      {
        title: "1.3 Por Qué es Más Importante que la Reconquista",
        content: `Voy a ser directo: **la reconquista sin mantenimiento es una pérdida de tiempo**.

Las estadísticas son claras:
- 43% de las parejas que vuelven, terminan de nuevo en 30 días
- 67% terminan antes del primer año
- Solo 28% mantienen la relación a largo plazo

¿Qué diferencia al 28% que lo logra? El mantenimiento activo y consciente.

**Por qué el mantenimiento es más difícil:**

1. **La emoción de la persecución desaparece:** Ya no hay "juego" que ganar
2. **Los viejos patrones regresan:** Es fácil volver a los hábitos que causaron la ruptura
3. **La atención se dispersa:** Otros aspectos de la vida empiezan a competir
4. **La complacencia se instala:** "Ya la tengo, puedo relajarme"

**Por qué el mantenimiento es más importante:**

1. **Define la calidad de vida:** Pasarás años con esta persona
2. **Afecta tu identidad:** Una relación sana te hace mejor persona
3. **Previene ciclos destructivos:** No quieres pasar por otra ruptura
4. **Crea legado:** La base para familia, proyectos compartidos, vida juntos

La reconquista es un sprint. El mantenimiento es un maratón. Y en la vida, ganan los maratonistas.`
      },
      {
        title: "1.4 Los 3 Pilares del Mantenimiento",
        content: `Todo mantenimiento emocional efectivo se basa en **tres pilares fundamentales**:

**PILAR 1: CONSISTENCIA EVOLUTIVA**

No significa hacer lo mismo todos los días. Significa mantener tu esencia mientras evolucionas.

- Sé la misma persona que ella decidió volver, pero mejor
- Mantén los cambios positivos que hiciste
- Evoluciona en la dirección que estableciste
- No retrocedas a patrones antiguos

*Ejemplo:* Si durante la reconquista empezaste a ejercitarte y ella notó tu cambio, no dejes de hacerlo. Pero no te estanques: ahora corre una carrera, ahora prueba un deporte nuevo.

**PILAR 2: TENSIÓN CALIBRADA**

Mantén un nivel saludable de tensión que evite el aburrimiento sin crear ansiedad.

- No seas 100% predecible
- Mantén aspectos de misterio
- Crea pequeños desafíos
- No des todo por sentado

*Ejemplo:* No siempre estés disponible. A veces ten planes que no la incluyen. No por jugar, sino porque genuinamente tienes vida propia.

**PILAR 3: INVERSIÓN RECÍPROCA**

Asegúrate de que ambos estén invirtiendo en la relación de forma equilibrada.

- Observa su nivel de inversión
- Ajusta el tuyo en consecuencia
- Nunca inviertas dramáticamente más que ella
- Crea oportunidades para que ella invierta`
      },
      {
        title: "1.5 Cómo Saber si Está Funcionando",
        content: `El mantenimiento efectivo tiene **señales claras** que puedes monitorear:

**Señales positivas (mantenimiento funcionando):**

✅ Ella te busca espontáneamente, no solo cuando tú la buscas
✅ Comparte aspectos de su vida sin que preguntes
✅ Te incluye en planes futuros
✅ Muestra celos saludables ocasionalmente
✅ Habla de ti positivamente con otros
✅ Invierte tiempo y esfuerzo en la relación
✅ Inicia contacto físico y afectivo
✅ Se esfuerza por verse bien para ti
✅ Te da prioridad sobre otras actividades
✅ Expresa gratitud por tenerte

**Métricas cuantificables:**

- **Ratio de iniciativa:** Ella debería iniciar contacto al menos 40% de las veces
- **Tiempo de respuesta:** Debería responder en tiempos razonables (no horas sin razón)
- **Profundidad de conversación:** Las charlas deberían tener sustancia, no solo logística
- **Frecuencia de planes:** Debería proponer verse, no solo aceptar tus invitaciones

Si estos indicadores están presentes, tu mantenimiento está funcionando. Si no, necesitas ajustar tu estrategia.`
      },
      {
        title: "1.6 Señales de Alerta",
        content: `Tan importante como saber que funciona es **detectar cuando no funciona**. Estas señales de alerta requieren acción inmediata:

**Señales de alerta nivel 1 (precaución):**

⚠️ Respuestas más cortas y menos elaboradas
⚠️ Tarda más en responder sin razón aparente
⚠️ Menos iniciativa para verse
⚠️ Menciona estar "ocupada" frecuentemente
⚠️ Menos contacto físico iniciado por ella

**Señales de alerta nivel 2 (intervención necesaria):**

🚨 Cancela planes más de lo usual
🚨 Evita conversaciones profundas
🚨 Menciona a otras personas (hombres) casualmente
🚨 Comparaciones desfavorables contigo
🚨 Críticas frecuentes sobre tus acciones

**Señales de alerta nivel 3 (emergencia):**

🔴 Pide "espacio" o "tiempo"
🔴 Evita intimidad física
🔴 Secretismo sobre su agenda
🔴 Cambios drásticos en rutina sin explicación
🔴 Te excluye de planes que antes te incluían

La clave es **actuar en nivel 1**, antes de que escale. Esperar a nivel 3 es exponencialmente más difícil de revertir.`
      },
      {
        title: "1.7 Ejercicios Prácticos",
        content: `Estos ejercicios te ayudarán a implementar el mantenimiento emocional de forma sistemática:

**Ejercicio 1: El Check-in Semanal (10 minutos/semana)**

Cada domingo, responde estas preguntas:
1. ¿Cuántas veces ella inició contacto esta semana?
2. ¿Cómo fue la calidad de nuestras interacciones?
3. ¿Noté alguna señal de alerta?
4. ¿Qué hice para mantener la novedad?
5. ¿Qué puedo mejorar la próxima semana?

**Ejercicio 2: La Sorpresa Planificada (1x por semana)**

Planifica UNA sorpresa semanal. No tiene que ser grande:
- Un mensaje inesperado pero significativo
- Un detalle que muestre que pensaste en ella
- Un plan espontáneo
- Una referencia a algo que ella mencionó antes

**Ejercicio 3: El Espacio Estratégico (2x por semana)**

Al menos dos veces por semana:
- Ten planes que no la incluyan
- Tarda un poco más en responder (sin juegos)
- Menciona actividades interesantes que haces
- Demuestra que tienes vida propia

**Ejercicio 4: La Conexión Profunda (1x por semana)**

Una vez a la semana, crea un momento de conexión profunda:
- Conversación sin teléfonos
- Pregunta significativa sobre su vida interior
- Comparte algo personal tuyo
- Contacto físico genuino y prolongado

**Registro de progreso:**

Lleva un registro simple:
| Semana | Iniciativa ella | Sorpresas dadas | Alertas detectadas | Conexión profunda |
|--------|-----------------|-----------------|-------------------|-------------------|
| 1      | 3/7             | 1               | 0                 | ✓                 |

Este registro te dará datos objetivos para ajustar tu estrategia.`
      }
    ]
  },
  {
    id: 2,
    title: "Los 5 Gatillos de Mantenimiento",
    subtitle: "Las palancas que mantienen viva la atracción a largo plazo",
    icon: "🎯",
    imagePlaceholder: "[IMAGEN: Diagrama de los 5 gatillos formando un ciclo de mantenimiento]",
    downloadables: {
      pdf: "leccion-2-gatillos-mantenimiento.pdf",
      checklist: "checklist-gatillos-mantenimiento.pdf"
    },
    sections: [
      {
        title: "2.1 Introducción a los Gatillos de Mantenimiento",
        content: `Los gatillos de reconquista y los gatillos de mantenimiento son **diferentes**. Los de reconquista activan atracción. Los de mantenimiento la sostienen y profundizan.

Piensa en la diferencia como encender un fuego vs. mantenerlo ardiendo. Necesitas técnicas diferentes para cada fase.

**Los 5 gatillos de mantenimiento:**

1. **Consistencia Emocional:** La base de la confianza
2. **Novedad y Sorpresa:** El combustible del deseo
3. **Validación Constante:** El alimento del ego sano
4. **Misterio Sostenido:** El aire que aviva la llama
5. **Interdependencia:** Los troncos que mantienen el fuego

Cada gatillo tiene un propósito específico y una forma de aplicación. Ignorar cualquiera de ellos crea un desequilibrio que eventualmente destruye la relación.

La maestría está en **activar los 5 simultáneamente** de forma natural, no mecánica. Cuando lo logras, la relación fluye sin esfuerzo aparente.`
      },
      {
        title: "2.2 Gatillo 1: Consistencia Emocional",
        content: `La consistencia emocional es tu **capacidad de mantener un estado emocional estable** independientemente de las circunstancias externas.

**Por qué es fundamental:**

Ella necesita saber qué esperar de ti. No en el sentido de ser predecible, sino de ser confiable. Si un día eres cariñoso y al siguiente frío sin razón, creas ansiedad. Si tus reacciones son proporcionales y predecibles, creas seguridad.

**Cómo cultivar consistencia emocional:**

1. **Maneja tu estrés fuera de la relación**
   No uses la relación como válvula de escape para problemas laborales, familiares o personales. Ten otros canales.

2. **Comunica tus estados emocionales**
   "Hoy estuve en modo difícil en el trabajo, puedo estar más callado de lo normal" es mucho mejor que simplemente actuar raro sin explicación.

3. **Reacciona proporcionalmente**
   Problemas pequeños = reacciones pequeñas. Guarda las reacciones grandes para problemas grandes.

4. **Mantén tus rituales de autocuidado**
   Ejercicio, sueño, alimentación, tiempo solo. Estos hábitos sostienen tu estabilidad emocional.

**Señales de consistencia exitosa:**

- Ella se relaja en tu presencia
- No "camina sobre huevos" alrededor tuyo
- Comparte cosas difíciles porque sabe que no explotarás
- Te ve como refugio, no como fuente de estrés`
      },
      {
        title: "2.3 Gatillo 2: Novedad y Sorpresa",
        content: `El cerebro humano está diseñado para prestar atención a lo nuevo. La **novedad activa dopamina**, el neurotransmisor del deseo y la motivación.

**El problema de la rutina:**

Después de la reconquista, es fácil caer en patrones:
- Mismo restaurante
- Mismas conversaciones
- Mismas actividades
- Mismos horarios

Esto mata la chispa más rápido que cualquier otra cosa.

**Cómo inyectar novedad:**

1. **Novedad de lugar:**
   - Explora barrios nuevos juntos
   - Viaja a lugares que ninguno conoce
   - Cambia la rutina de lugares habituales

2. **Novedad de actividad:**
   - Prueben hobbies nuevos juntos
   - Toma una clase de algo inesperado
   - Haz algo que ninguno ha hecho antes

3. **Novedad de experiencia:**
   - Sorpresas planificadas pero inesperadas para ella
   - Eventos especiales sin ocasión especial
   - Rompe el patrón de vez en cuando

4. **Novedad de conversación:**
   - Pregunta cosas que nunca has preguntado
   - Comparte pensamientos que nunca has compartido
   - Explora temas profundos que evitaban

**La regla del 80/20:**

80% rutina confortable + 20% novedad estimulante = balance óptimo.

Demasiada novedad agota. Muy poca aburre. El equilibrio es clave.`
      },
      {
        title: "2.4 Gatillo 3: Validación Constante",
        content: `Todos necesitamos sentirnos **vistos, valorados y apreciados**. La validación constante (no excesiva) satisface esta necesidad fundamental.

**Tipos de validación:**

1. **Validación de identidad:**
   "Admiro cómo manejas [situación]. Eso es muy propio de ti."
   Reconoces quién es ella, no solo lo que hace.

2. **Validación de esfuerzo:**
   "Vi cuánto trabajaste en [proyecto]. Tu dedicación es impresionante."
   Reconoces su trabajo, no solo los resultados.

3. **Validación de sentimientos:**
   "Tiene sentido que te sientas así. Yo también lo haría."
   Reconoces sus emociones sin juzgarlas.

4. **Validación de presencia:**
   "Mi día mejora cuando estás cerca."
   Reconoces su impacto positivo en tu vida.

**La diferencia entre validación sana y adulación:**

❌ Adulación: "Eres perfecta en todo lo que haces"
✅ Validación: "La forma en que manejaste esa situación fue muy inteligente"

La adulación es genérica y suena falsa. La validación es específica y genuina.

**Frecuencia recomendada:**

- Validación de identidad: 1-2 veces por semana
- Validación de esfuerzo: Cuando sea genuinamente merecido
- Validación de sentimientos: Cada vez que comparte algo emocional
- Validación de presencia: 2-3 veces por semana

Más que esto puede sonar excesivo. Menos puede sentirse como negligencia.`
      },
      {
        title: "2.5 Gatillo 4: Misterio Sostenido",
        content: `El misterio que funcionó en la reconquista debe **mantenerse, no desaparecer**. Muchos hombres cometen el error de "abrirse completamente" una vez que vuelven.

**Por qué el misterio sigue siendo importante:**

- Lo completamente conocido no genera curiosidad
- La curiosidad es combustible para el interés
- El interés mantiene la atracción activa

**Cómo mantener el misterio sin ser distante:**

1. **No compartas todo inmediatamente:**
   Tienes pensamientos, planes, reflexiones. No necesita saber todos al instante.

2. **Mantén actividades propias:**
   Hobbies, amigos, proyectos que son solo tuyos.

3. **Revela gradualmente:**
   Cuando compartas algo, que sea una "entrega" especial, no un flujo constante.

4. **Cultiva tu mundo interior:**
   Lee, piensa, desarrolla opiniones. Esto te hace interesante.

**El balance misterio-intimidad:**

- Intimidad sin misterio = Aburrimiento (te conoce todo, no hay nada que descubrir)
- Misterio sin intimidad = Distancia (no se siente conectada)
- Misterio + Intimidad = Fascinación (conexión profunda con siempre más por descubrir)

**Ejercicio práctico:**

Esta semana, cuando ella pregunte "¿Qué hiciste hoy?":
- ❌ No digas: "Nada especial, lo de siempre"
- ❌ No digas: "Trabajé, almorcé, vi videos, pensé en ti, hablé con Juan sobre..."
- ✅ Sí di: "Tuve un día interesante. Descubrí algo sobre [tema]. Te cuento cuando nos veamos" (sonrisa)`
      },
      {
        title: "2.6 Gatillo 5: Interdependencia",
        content: `La interdependencia es el nivel más alto de conexión: **dos personas completas que eligen estar juntas** porque son mejores juntas que separadas.

**Diferencias clave:**

| Dependencia | Interdependencia |
|-------------|------------------|
| "No puedo vivir sin ti" | "Elijo vivir contigo" |
| Basada en necesidad | Basada en elección |
| Genera ansiedad | Genera seguridad |
| Desequilibrio de poder | Equilibrio de poder |
| Sofocante | Liberadora |

**Cómo crear interdependencia:**

1. **Proyectos compartidos:**
   - Metas conjuntas (viaje, proyecto, hobby)
   - Responsabilidades mutuas
   - Éxitos que celebrar juntos

2. **Integración calibrada:**
   - Conoce a sus personas importantes
   - Intégrala (gradualmente) en tu círculo
   - Crea "nuestra gente", no solo "mi gente" y "tu gente"

3. **Rutinas positivas:**
   - Rituales que disfrutan juntos
   - Tradiciones propias de la pareja
   - Espacios/tiempos que son "suyos"

4. **Apoyo mutuo:**
   - Estar presente en momentos difíciles
   - Celebrar los éxitos del otro genuinamente
   - Ser equipo, no competencia

**La paradoja de la interdependencia:**

Para crear interdependencia sana, primero necesitas **independencia sólida**. Si no puedes estar bien solo, no puedes estar bien acompañado. Tu trabajo en los módulos anteriores te preparó para esto.`
      },
      {
        title: "2.7 Errores Comunes y Ejemplos Reales",
        content: `**Errores comunes por gatillo:**

**Error con Consistencia:**
"Soy súper cariñoso cuando todo va bien, pero me cierro cuando hay problemas"
→ Solución: Comunica que estás procesando, pero no te desconectes completamente.

**Error con Novedad:**
"Después de volver, dejé de esforzarme por sorprenderla"
→ Solución: Agenda una sorpresa por semana, aunque sea pequeña.

**Error con Validación:**
"Creo que se da cuenta que la valoro, no necesito decirlo"
→ Solución: Verbaliza. Lo que no se dice, no se sabe.

**Error con Misterio:**
"Le cuento absolutamente todo lo que pienso y hago"
→ Solución: Guarda algunas cosas para revelar gradualmente.

**Error con Interdependencia:**
"Hago todo por ella, ella no tiene que hacer nada"
→ Solución: Crea oportunidades para que ella también invierta.

**Ejemplo real de éxito:**

Marcos (34) aplicó los 5 gatillos después de reconquistar a Laura:

- **Consistencia:** Estableció rutinas de autocuidado que lo mantienen estable
- **Novedad:** Cada semana hacen algo nuevo, aunque sea pequeño
- **Validación:** Aprendió a verbalizar aprecio específico
- **Misterio:** Mantiene hobbies y tiempo solo que no comparte completamente
- **Interdependencia:** Iniciaron un proyecto de inversión juntos

Resultado: 14 meses después, siguen juntos y más fuertes que antes de la ruptura.`
      }
    ]
  },
  {
    id: 3,
    title: "Anti-Alejamiento",
    subtitle: "Cómo detectar y prevenir que se aleje nuevamente",
    icon: "🛡️",
    imagePlaceholder: "[IMAGEN: Sistema de alerta temprana con los 5 niveles de alejamiento]",
    downloadables: {
      pdf: "leccion-3-anti-alejamiento.pdf",
      checklist: "checklist-senales-alerta.pdf"
    },
    sections: [
      {
        title: "3.1 Las 5 Razones por las que se Aleja",
        content: `Si ella empieza a alejarse después de la reconquista, generalmente es por una de estas **5 razones fundamentales**:

**Razón 1: Regreso de Patrones Antiguos**
Ella ve que estás volviendo a ser el mismo de antes. Los cambios que hiciste durante la reconquista empiezan a desvanecerse.

*Señales:*
- "Siento que volvemos a lo mismo de antes"
- "Pensé que habías cambiado"
- Frustración por comportamientos específicos que ya habían sido problema

**Razón 2: Pérdida de Atracción**
La novedad desapareció. Ya no eres el hombre "nuevo" que la reconquistó.

*Señales:*
- Menos interés sexual
- Menos curiosidad por tu vida
- Te trata como "dado" no como "elegido"

**Razón 3: Falta de Inversión**
Ella siente que está dando más de lo que recibe (o viceversa, tú das demasiado).

*Señales:*
- "Siempre soy yo la que..."
- Resentimiento acumulado
- Competencia sobre quién hace más

**Razón 4: Amenazas Externas**
Otra persona o circunstancia está compitiendo por su atención.

*Señales:*
- Menciona a alguien nuevo frecuentemente
- Cambios en rutina inexplicados
- Secretismo sobre ciertas actividades

**Razón 5: Crecimiento Divergente**
Están yendo en direcciones diferentes en la vida.

*Señales:*
- Metas incompatibles
- Valores que ya no se alinean
- Visiones de futuro diferentes`
      },
      {
        title: "3.2 Cómo Reconocer las Señales de Alerta",
        content: `La detección temprana es **crucial**. Cuanto antes detectes el alejamiento, más fácil es corregirlo.

**Sistema de alerta de 3 niveles:**

**NIVEL VERDE (Fluctuación Normal):**
Todos tenemos días malos. Estos indicadores son normales ocasionalmente:
- Un día de respuestas más cortas
- Cancelar un plan por razón legítima
- Estar menos habladora por estrés temporal

*Acción:* Observa, pero no reacciones exageradamente.

**NIVEL AMARILLO (Precaución):**
Si estos indicadores persisten por más de 3-5 días:
- Respuestas consistentemente más cortas
- Menos iniciativa para contactar
- Menos afecto físico
- Menciona estar "ocupada" frecuentemente
- Cambios sutiles en tono

*Acción:* Aplica técnicas de reactivación suaves.

**NIVEL ROJO (Intervención Urgente):**
Requiere acción inmediata:
- Pide "espacio" o "tiempo"
- Evita activamente verte
- Cambios drásticos de comportamiento
- Secretismo notable
- Frialdad evidente

*Acción:* Protocolo de emergencia (sección 3.8).

**El error más común:**
Ignorar señales amarillas esperando que "se arreglen solas". Rara vez lo hacen. Actúa antes de que escalen a rojo.`
      },
      {
        title: "3.3 Técnica 1: Reactivación Emocional",
        content: `La reactivación emocional consiste en **recordarle por qué te eligió** en primer lugar.

**Cuándo usarla:** Señales nivel amarillo, especialmente cuando sospechas pérdida de atracción.

**Pasos de implementación:**

1. **Evoca un recuerdo poderoso:**
   No cualquier recuerdo, sino uno cargado emocionalmente donde ella estaba muy feliz contigo.
   
   "Estaba pensando en [momento específico]. Recuerdo cómo te reías ese día."

2. **Activa tu mejor versión:**
   Temporalmente, vuelve a ser 100% el hombre que la reconquistó.
   - Cuida tu apariencia extra
   - Muestra tu mejor energía
   - Sé el más interesante posible

3. **Crea un contraste:**
   Si has estado muy disponible, reduce ligeramente.
   Si has estado distante, acércate con intensidad.
   El contraste reactiva la atención.

4. **Genera una experiencia peak:**
   Planea algo memorable, diferente, emocionalmente intenso.
   No tiene que ser caro, tiene que ser significativo.

**Ejemplo de aplicación:**

Andrés notó que María estaba más distante (nivel amarillo). En lugar de preguntar "¿Qué te pasa?", aplicó reactivación:

1. Le envió un mensaje evocando su primer viaje juntos
2. Se puso su mejor outfit para verla
3. Planificó una cena sorpresa en un lugar con vista
4. Durante la cena, fue el Andrés de los primeros meses: atento, divertido, misterioso

Resultado: La dinámica se revirtió en 48 horas.`
      },
      {
        title: "3.4 Técnicas 2 y 3: Sorpresa Estratégica y Validación Intensificada",
        content: `**TÉCNICA 2: SORPRESA ESTRATÉGICA**

Cuando usarla: Señales nivel amarillo, especialmente cuando la rutina se ha instalado.

La sorpresa estratégica es diferente a la sorpresa de mantenimiento regular. Es más intensa y busca **romper un patrón negativo**.

**Elementos de una sorpresa estratégica efectiva:**

1. **Timing inesperado:** No en fechas obvias
2. **Personalización extrema:** Algo que demuestre que realmente la conoces
3. **Experiencia sobre objeto:** Vivencias crean más impacto que cosas
4. **Elemento de misterio:** No reveles todo de golpe

**Ejemplo:**
"Tengo algo planeado para ti el viernes. Solo necesito que estés lista a las 7pm. No preguntes más." (Y llévala a algo que ella mencionó querer hacer hace meses)

---

**TÉCNICA 3: VALIDACIÓN INTENSIFICADA**

Cuándo usarla: Cuando sospechas que se siente poco valorada o invisible.

No es validación normal, es validación **específica, profunda y frecuente** por un período corto.

**Implementación:**

Durante 5-7 días:
- Valida algo específico cada día
- Reconoce esfuerzos que normalmente pasarías por alto
- Verbaliza aprecio que normalmente asumirías
- Muestra que NOTAS los detalles

**Ejemplo:**
"Me encanta cómo [detalle específico que hizo hoy]. Eso es muy tuyo y lo aprecio."

**IMPORTANTE:** Esto es intervención temporal. Si lo haces permanentemente a este nivel, pierde efecto y parece desesperado. 5-7 días intensos, luego vuelve a nivel normal de mantenimiento.`
      },
      {
        title: "3.5 Técnicas 4 y 5: Urgencia y Conexión",
        content: `**TÉCNICA 4: CREACIÓN DE URGENCIA**

Cuándo usarla: Cuando ella está tomando la relación por sentada, asumiendo que siempre estarás ahí.

La urgencia le recuerda que tú también tienes valor y opciones. NO es manipulación ni amenaza, es realidad.

**Formas éticas de crear urgencia:**

1. **Menos disponibilidad temporal:**
   "Esta semana tengo varios compromisos, pero quiero verte. ¿Jueves o viernes?"

2. **Mencionar oportunidades:**
   "Me ofrecieron [oportunidad interesante en otro lugar/proyecto absorbente]. Estoy evaluándolo."

3. **Demostrar que tienes vida:**
   Comparte (genuinamente) actividades interesantes sin ella.

4. **Tiempo límite sutil:**
   "Quería hacer [plan] contigo, pero si no puedes esta semana, iré con amigos."

**No confundir con:**
- Amenazas de irte
- Mencionar otras mujeres
- Chantaje emocional

---

**TÉCNICA 5: INTENSIFICACIÓN DE CONEXIÓN**

Cuándo usarla: Cuando sientes que se están desconectando emocionalmente aunque físicamente estén presentes.

**Pasos:**

1. **Crea espacio sin distracciones:**
   Sin teléfonos, sin TV, sin interrupciones.

2. **Haz preguntas profundas:**
   "¿Qué es lo que más te preocupa últimamente?"
   "¿Hay algo que no me hayas contado?"
   "¿Cómo te sientes realmente sobre nosotros?"

3. **Escucha activamente:**
   No para responder, sino para entender.

4. **Comparte vulnerabilidad:**
   Después de que ella comparta, comparte algo tuyo.

5. **Cierra con afirmación:**
   "Gracias por compartir eso. Significa mucho que confíes en mí."

Esta técnica requiere **coraje**. Puede revelar problemas que preferirías no saber. Pero los problemas ocultos son más peligrosos que los problemas conocidos.`
      },
      {
        title: "3.6 Protocolo de Emergencia",
        content: `El protocolo de emergencia se activa cuando detectas **señales nivel rojo**. Esto es intervención de crisis.

**PASO 1: NO ENTRES EN PÁNICO**

Tu reacción emocional puede empeorar las cosas. Antes de cualquier acción:
- Respira profundo
- Espera al menos 2 horas antes de actuar
- No envíes mensajes largos explicativos
- No la confrontes agresivamente

**PASO 2: EVALÚA LA SITUACIÓN**

Preguntas clave:
- ¿Cuándo empezaron las señales?
- ¿Qué cambió antes de que empezaran?
- ¿Es sobre ti o sobre algo externo (trabajo, familia)?
- ¿Hay evidencia de tercera persona?

**PASO 3: RETROCEDE ESTRATÉGICAMENTE**

Contra-intuitivo pero crucial: **da espacio sin desaparecer**.

"Noto que necesitas espacio. Voy a darte ese espacio. Sabes dónde encontrarme cuando estés lista para hablar."

No:
- No pidas explicaciones insistentemente
- No amenaces con irte
- No te pongas dramático
- No la acoses con mensajes

**PASO 4: TRABAJA EN TI**

Durante el espacio:
- Ejercítate intensamente
- Conecta con amigos
- Trabaja en tus proyectos
- Mantén tu vida funcionando

Esto te mantiene cuerdo Y le muestra que tienes vida propia.

**PASO 5: RECONTACTO CALIBRADO**

Después de 3-7 días de espacio:
- Un mensaje breve y no demandante
- "Espero que estés bien. Cuando quieras hablar, aquí estoy."
- NO preguntes "¿Ya pensaste?"

**PASO 6: CONVERSACIÓN DE CLARIFICACIÓN**

Si ella responde positivamente:
- Escucha primero, habla después
- No te defiendas, busca entender
- Pregunta qué necesita
- Propón soluciones concretas

Si no responde o responde negativamente después de 7-10 días, probablemente necesites reevaluar si vale la pena continuar.`
      },
      {
        title: "3.7 Recuperación Después del Alejamiento",
        content: `Si lograste revertir un alejamiento, el trabajo no termina ahí. Necesitas **consolidar la recuperación** para evitar que vuelva a pasar.

**Los primeros 7 días post-recuperación:**

**Día 1-2: Estabilización**
- No actúes como si nada pasó
- No traigas el tema constantemente
- Mantén calma y normalidad
- Sé cariñoso pero no excesivo

**Día 3-4: Reconexión gradual**
- Retoma actividades normales
- Una conversación sobre lo aprendido (sin culpas)
- Acuerdos sobre qué cambiar

**Día 5-7: Nueva normalidad**
- Implementa cambios acordados
- Vuelve a rutinas de mantenimiento
- Mantén monitoreo cercano de señales

**Preguntas para la conversación de cierre:**

1. "¿Qué puedo hacer diferente para que esto no pase de nuevo?"
2. "¿Hay algo que no me hayas dicho que necesite saber?"
3. "¿Cómo podemos manejar esto mejor si vuelve a pasar?"

**Compromisos post-recuperación:**

Ambos deben comprometerse a:
- Comunicar antes de que escale
- No acumular resentimientos
- Traer problemas temprano, no tarde
- Priorizar la relación sobre tener razón

**Red flags de recuperación fallida:**

- Ella dice las palabras pero su energía no cambia
- Vuelve a distanciarse en menos de 2 semanas
- No puede/quiere explicar qué pasó
- Te culpa exclusivamente

Si ves estos signos, la recuperación fue superficial y necesitas conversación más profunda o evaluación seria de la relación.`
      }
    ]
  },
  {
    id: 4,
    title: "Blindaje contra Terceros",
    subtitle: "Protege tu relación de amenazas externas",
    icon: "🔐",
    imagePlaceholder: "[IMAGEN: Escudo de protección con los 5 tipos de amenazas identificadas]",
    downloadables: {
      pdf: "leccion-4-blindaje-terceros.pdf",
      checklist: "checklist-blindaje.pdf"
    },
    sections: [
      {
        title: "4.1 Cómo Identificar Amenazas Externas",
        content: `Las amenazas externas a tu relación pueden venir de **muchas direcciones**. Identificarlas temprano es crucial para neutralizarlas.

**Tipos de amenazas:**

1. **Amenazas directas:** Personas que activamente buscan a tu pareja
2. **Amenazas indirectas:** Circunstancias que crean oportunidad para otros
3. **Amenazas pasivas:** Personas que no buscan activamente pero están "disponibles"
4. **Amenazas sociales:** Presión de amigos/familia que no aprueban la relación
5. **Amenazas de estilo de vida:** Trabajo, viajes, ambientes que la alejan

**Señales de amenaza activa:**

- Ella menciona a alguien nuevo repetidamente
- Cambios en rutina que no incluyen a nadie conocido
- Más cuidado en su apariencia para ciertos eventos
- Secretismo con el teléfono
- Defensiva cuando preguntas sobre ciertas personas

**Señales de vulnerabilidad:**

- Está pasando por momento difícil contigo
- Siente que algo falta en la relación
- Está expuesta a ambiente con muchas opciones
- Tu relación está en bache

**La regla de oro:**

Las amenazas externas solo funcionan si hay **vulnerabilidad interna**. Una relación sólida es naturalmente resistente. Tu mejor defensa es fortalecer la relación, no obsesionarte con las amenazas.`
      },
      {
        title: "4.2 Los 5 Tipos de Competencia",
        content: `No todos los "competidores" son iguales. Entender el tipo de amenaza te ayuda a responder apropiadamente.

**Tipo 1: El Oportunista**
Persona que nota una oportunidad y la aprovecha. No conoce bien a tu pareja, pero ve una apertura.

*Características:*
- Aparece cuando hay problemas en tu relación
- Ofrece atención/validación que tú no estás dando
- Es superficial, no tiene historia con ella

*Nivel de amenaza:* Bajo si tu relación es sólida. Alto si hay problemas.

**Tipo 2: El Amigo Cercano**
Alguien que siempre ha estado ahí, que "la entiende", que está "esperando su momento".

*Características:*
- Historia larga con ella
- Acceso frecuente
- Conoce sus vulnerabilidades
- Puede parecer "inofensivo"

*Nivel de amenaza:* Medio a alto. El acceso frecuente es peligroso.

**Tipo 3: El Ex**
Su ex pareja que intenta regresar o mantenerse presente.

*Características:*
- Historia romántica previa
- Conoce sus patrones íntimos
- Puede activar nostalgia

*Nivel de amenaza:* Variable. Alto si ella no cerró bien el capítulo.

**Tipo 4: El Colega/Compañero**
Persona del trabajo, gym, o actividad regular que pasa mucho tiempo con ella.

*Características:*
- Proximidad forzada
- Intereses compartidos
- Tiempo juntos sin ti

*Nivel de amenaza:* Medio. La exposición prolongada crea familiaridad.

**Tipo 5: El Desconocido Atractivo**
Alguien nuevo, excitante, misterioso que aparece.

*Características:*
- Novedad (dopamina)
- Sin bagaje ni historia negativa
- Representa lo "diferente"

*Nivel de amenaza:* Bajo individualmente, alto si ella busca "escape".`
      },
      {
        title: "4.3 Técnicas de Blindaje (Parte 1)",
        content: `**TÉCNICA 1: REFUERZO DE EXCLUSIVIDAD**

Objetivo: Hacer que ella sienta que lo que tienen es único e irremplazable.

**Implementación:**

1. **Crea experiencias exclusivas:**
   Cosas que solo ustedes dos comparten, hacen o entienden.
   - Lugares "suyos"
   - Humor interno
   - Rituales propios
   - Tradiciones de pareja

2. **Verbaliza la exclusividad:**
   "Nadie me hace sentir como tú"
   "Lo que tenemos es diferente a cualquier cosa que he tenido"
   (Solo si es genuino)

3. **Demuestra inversión única:**
   Haz cosas por ella que no harías por nadie más.
   Comparte cosas con ella que no compartirías con nadie más.

---

**TÉCNICA 2: CREACIÓN DE INSEGURIDAD (ÉTICA)**

Objetivo: Recordarle sutilmente que tú también tienes valor y opciones.

**IMPORTANTE:** Esto NO es manipulación tóxica. Es equilibrio de poder.

**Implementación ética:**

1. **Mantén tu atractivo:**
   - Cuida tu físico
   - Vístete bien
   - Mantén tu vida interesante

2. **No escondas que eres valorado:**
   - Si recibes atención de otros, no necesitas exhibirlo, pero tampoco esconderlo
   - Mantén amistades femeninas sanas

3. **Ten vida propia:**
   - Actividades sin ella
   - Planes que no la incluyen
   - Metas personales activas

**Lo que NO debes hacer:**
- Inventar atención que no existe
- Usar a otras mujeres para dar celos
- Amenazar con irte
- Mencionar ex o posibles intereses`
      },
      {
        title: "4.4 Técnicas de Blindaje (Parte 2)",
        content: `**TÉCNICA 3: INTENSIFICACIÓN DE CONEXIÓN**

Objetivo: Hacer tan profunda la conexión que superficialidades de terceros no compitan.

**Implementación:**

1. **Conversaciones de profundidad:**
   Hablen de miedos, sueños, traumas, esperanzas.
   Cosas que no compartiría con un oportunista.

2. **Experiencias intensas juntos:**
   Viajes, desafíos, momentos que crean vínculo.

3. **Apoyo incondicional:**
   Estar ahí en momentos difíciles crea vínculo que la novedad no puede replicar.

4. **Intimidad creciente:**
   Física, emocional, intelectual. Profundiza constantemente.

---

**TÉCNICA 4: DEMOSTRACIÓN DE VALOR**

Objetivo: Ser objetivamente la mejor opción comparado con cualquier alternativa.

**Áreas de valor a demostrar:**

1. **Valor emocional:**
   Eres estable, presente, maduro emocionalmente.

2. **Valor social:**
   Tienes vida interesante, amigos, estatus.

3. **Valor de provisión:**
   Tienes dirección, ambición, recursos.

4. **Valor físico:**
   Te cuidas, eres atractivo, tienes energía.

5. **Valor sexual:**
   La conexión física es satisfactoria.

**Implementación:**
No lo digas, demuéstralo. Las acciones hablan. Cuando ella compara (conscientemente o no), tú debes salir ganando.`
      },
      {
        title: "4.5 Técnica 5: Consolidación de Posición",
        content: `**TÉCNICA 5: CONSOLIDACIÓN DE POSICIÓN**

Objetivo: Establecerte tan firmemente en su vida que removerte sería demasiado costoso.

**Áreas de consolidación:**

1. **Consolidación social:**
   - Conoce a su familia, amigos cercanos
   - Que ellos te aprecien y valoren
   - Sé parte de su ecosistema, no un visitante

2. **Consolidación práctica:**
   - Proyectos compartidos
   - Inversiones conjuntas (no necesariamente dinero)
   - Rutinas integradas

3. **Consolidación emocional:**
   - Ser su confidente principal
   - Que te busque primero en buenos y malos momentos
   - Convertirte en su "persona"

4. **Consolidación futura:**
   - Planes a largo plazo juntos
   - Visión compartida
   - Metas que solo tienen sentido si están juntos

**La paradoja de la consolidación:**

Debes consolidarte sin asfixiar. Ella debe sentir que estás integrado en su vida por elección, no por imposición.

**Señales de consolidación exitosa:**
- Ella te incluye en decisiones importantes
- Te consulta antes de cambios grandes
- Otros en su vida asumen que estarás ahí
- Ella habla del futuro en "nosotros", no en "yo"`
      },
      {
        title: "4.6 Cómo Manejar la Competencia Activa",
        content: `Cuando identificas a alguien que activamente busca a tu pareja, tu respuesta debe ser **estratégica, no reactiva**.

**Lo que NO debes hacer:**

❌ Confrontar al tercero directamente
❌ Prohibirle a ella verlo
❌ Hacer escenas de celos
❌ Exigir que elija
❌ Revisar su teléfono
❌ Interrogarla constantemente

**Lo que SÍ debes hacer:**

✅ **Mantén la calma:**
Los celos incontrolados te hacen ver inseguro. Respira.

✅ **Intensifica tu juego:**
Aplica las técnicas de blindaje con más frecuencia e intensidad.

✅ **Observa sin obsesionarte:**
Nota los patrones pero no te conviertas en detective.

✅ **Comunica sin acusar:**
"He notado que [observación]. ¿Hay algo que deba saber?"

✅ **Confía en tu valor:**
Si realmente eres la mejor opción, eso quedará claro.

**Escenario específico: Ella admite atracción por otro**

Esta es una situación delicada. Tu respuesta:

1. No explotes (aunque quieras)
2. Escucha completamente
3. Pregunta: "¿Qué significa esto para nosotros?"
4. Decide basándote en su respuesta y acciones, no solo palabras

Si ella es honesta y elige quedarse contigo activamente, puede fortalecer la relación. Si minimiza o no está dispuesta a alejarse del tercero, tienes información importante.`
      },
      {
        title: "4.7 Errores Fatales a Evitar",
        content: `Estos errores destruyen relaciones y deben evitarse a toda costa:

**Error 1: El Celoso Paranoico**
Ver amenazas donde no las hay. Cuestionar cada interacción con otros hombres. Esto destruye la confianza y la empuja hacia afuera.

**Error 2: El Controlador**
Intentar limitar su libertad, sus amistades, su tiempo. Esto genera resentimiento y rebelión.

**Error 3: El Comparador**
Hablar mal de otros hombres para hacerte ver mejor. Esto es patético y transparente.

**Error 4: El Inseguro Verbal**
Preguntar constantemente si te quiere, si está interesada en otros, si va a dejarte. Esto es sofocante.

**Error 5: El Dramático**
Crear escenas cada vez que detectas algo. Esto agota y hace que la relación se sienta pesada.

**Error 6: El Vengativo**
Intentar crear celos en respuesta. Esto escala en espiral destructiva.

**Error 7: El Negador**
Ignorar señales evidentes por miedo a enfrentarlas. Esto permite que problemas pequeños se conviertan en crisis.

**La mentalidad correcta:**

"Soy la mejor opción disponible para ella. Si decide buscar en otro lado, es su pérdida. Pero voy a darle todas las razones para quedarse."

Esta confianza tranquila es tu mejor blindaje. Los hombres seguros no necesitan controlar porque saben su valor.`
      }
    ]
  },
  {
    id: 5,
    title: "Consolidación del Relacionamiento",
    subtitle: "Cómo hacer permanente lo que has ganado",
    icon: "💎",
    imagePlaceholder: "[IMAGEN: Pirámide de los 3 niveles de consolidación]",
    downloadables: {
      pdf: "leccion-5-consolidacion.pdf",
      checklist: "checklist-consolidacion.pdf"
    },
    sections: [
      {
        title: "5.1 Cómo Hacer Permanente lo que Ganaste",
        content: `La reconquista te devolvió la oportunidad. El mantenimiento la ha sostenido. Ahora es momento de **consolidar** para que la relación se convierta en algo permanente y resistente.

La consolidación es el proceso de **transformar una relación recuperada en una relación nueva y mejor**. No se trata de volver a lo que era, sino de construir algo superior.

**Por qué la consolidación es necesaria:**

1. **Sin consolidación, la relación está en estado provisional**
   Ambos pueden sentir que "esto todavía puede fallar".

2. **La consolidación crea inversión mutua**
   Cuanto más invertido está cada uno, más costoso es salir.

3. **La consolidación genera identidad de pareja**
   Pasan de ser "dos personas juntas" a "una pareja".

4. **La consolidación blinda naturalmente**
   Una relación consolidada es inherentemente resistente.

**La diferencia entre reconquista, mantenimiento y consolidación:**

| Fase | Objetivo | Estado |
|------|----------|--------|
| Reconquista | Recuperar | Ella volvió |
| Mantenimiento | Sostener | Ella se queda |
| Consolidación | Enraizar | Ella no puede imaginar irse |

Tu objetivo final es el tercer estado: donde la relación está tan profundamente integrada en ambas vidas que separarse sería un costo enorme para los dos.`
      },
      {
        title: "5.2 Nivel 1: Consolidación Emocional",
        content: `La consolidación emocional es el primer y más importante nivel. Sin ella, los otros niveles son superficiales.

**Objetivo:** Convertirte en su **ancla emocional primaria**.

**Qué significa ser ancla emocional:**

- Eres la primera persona que busca en momentos difíciles
- Tu aprobación importa más que la de otros
- Tu estado emocional afecta directamente el suyo
- No puede imaginar pasar por eventos importantes sin ti

**Cómo lograrlo:**

1. **Presencia constante en momentos críticos:**
   - Celebraciones: Sé el primero en felicitar
   - Crisis: Sé el primero en aparecer
   - Transiciones: Sé su apoyo principal

2. **Creación de dependencia emocional sana:**
   - Escucha activa que nadie más le da
   - Perspectivas valiosas sobre su vida
   - Validación que busca en ti primero

3. **Rituales de conexión:**
   - Conversaciones profundas regulares
   - Momentos de intimidad consistentes
   - Tradiciones propias de pareja

4. **Historia compartida significativa:**
   - Superen desafíos juntos
   - Creen memorias poderosas
   - Construyan narrativa de "nosotros"

**Señales de consolidación emocional exitosa:**

✅ "Eres la primera persona en quien pienso cuando..."
✅ Busca tu opinión antes de decisiones
✅ Tu ausencia la afecta visiblemente
✅ Te incluye en su mundo interno`
      },
      {
        title: "5.3 Nivel 2: Consolidación Social",
        content: `La consolidación social integra la relación en el ecosistema de ambos.

**Objetivo:** Que la relación sea **reconocida y valorada** por las personas importantes en sus vidas.

**Componentes de consolidación social:**

1. **Integración en su círculo:**
   - Conoce a sus amigos cercanos
   - Ten buena relación con su familia
   - Participa en sus eventos sociales
   - Sé parte de su mundo, no visitante

2. **Integración de ella en tu círculo:**
   - Preséntala a tus personas importantes
   - Que tus amigos la aprecien
   - Que tu familia la acepte
   - Haz que se sienta bienvenida

3. **Creación de círculo compartido:**
   - Amigos de pareja
   - Parejas amigas
   - Actividades sociales juntos
   - Comunidad compartida

**Por qué importa la consolidación social:**

- Las personas importantes validan la relación
- Crea "testigos" del compromiso
- Romper afecta más personas, no solo ustedes
- Genera presión social positiva para mantener

**Acciones específicas:**

- Cena con su familia mensualmente
- Salidas con amigos de ambos
- Eventos donde aparecen como pareja
- Vacaciones donde conocen gente como "nosotros"

**Señal de consolidación social exitosa:**

Las personas en sus vidas los ven como unidad, preguntan por ambos, los invitan juntos, y mostrarían sorpresa/tristeza si terminaran.`
      },
      {
        title: "5.4 Nivel 3: Consolidación Práctica",
        content: `La consolidación práctica crea **interdependencias tangibles** que hacen la separación costosa logísticamente.

**Objetivo:** Crear estructuras compartidas que anclen la relación en la realidad práctica.

**Componentes de consolidación práctica:**

1. **Rutinas integradas:**
   - Actividades regulares juntos
   - Responsabilidades compartidas
   - Tiempos que son "de pareja"
   - Rituales diarios/semanales

2. **Proyectos compartidos:**
   - Metas que persiguen juntos
   - Inversiones de tiempo/energía mutuas
   - Resultados que dependen de ambos

3. **Recursos integrados:**
   - No necesariamente finanzas compartidas
   - Tiempo coordinado
   - Espacios compartidos
   - Posesiones que usan juntos

4. **Compromisos futuros:**
   - Planes a mediano/largo plazo
   - Eventos reservados
   - Decisiones que asumen continuidad

**Ejemplos de consolidación práctica:**

- Adoptan una mascota juntos
- Planean un viaje grande con meses de anticipación
- Inician un proyecto (jardín, renovación, negocio)
- Crean tradiciones anuales (viaje de aniversario, etc.)
- Coordinan calendarios para optimizar tiempo juntos

**Precaución importante:**

La consolidación práctica sin consolidación emocional es una trampa. No uses "cosas" para retenerla. Usa "cosas" para expresar y reforzar una conexión genuina.

**Señal de consolidación práctica exitosa:**

Separarse implicaría reorganizar múltiples aspectos de la vida, no solo la relación.`
      },
      {
        title: "5.5 Cómo Crear Hábitos y Futuro Compartido",
        content: `**CREAR HÁBITOS JUNTOS**

Los hábitos compartidos crean **ritmo de pareja** que estabiliza la relación.

**Tipos de hábitos a desarrollar:**

1. **Hábitos diarios:**
   - Mensaje de buenos días
   - Resumen del día
   - Tiempo de conexión nocturno

2. **Hábitos semanales:**
   - "Nuestra noche" (cena, película, actividad)
   - Ejercicio juntos
   - Tiempo de calidad sin distracciones

3. **Hábitos mensuales:**
   - "Cita" especial
   - Revisión de la relación (cómo estamos)
   - Aventura o experiencia nueva

**Cómo establecer nuevos hábitos:**

1. Propón el hábito
2. Acuerden juntos
3. Sé consistente los primeros 30 días
4. Evalúen y ajusten si necesario

---

**CREAR FUTURO COMPARTIDO**

El futuro compartido da **dirección y propósito** a la relación.

**Niveles de futuro:**

1. **Corto plazo (1-3 meses):**
   - Eventos próximos
   - Planes de fin de semana
   - Metas inmediatas

2. **Mediano plazo (3-12 meses):**
   - Vacaciones
   - Proyectos grandes
   - Hitos a alcanzar

3. **Largo plazo (1+ años):**
   - Visión de vida
   - Decisiones grandes (vivienda, compromiso)
   - Metas de vida

**Conversaciones de futuro:**

- "¿Qué te gustaría que hagamos el próximo año?"
- "¿Dónde te ves en 5 años?"
- "¿Qué sueños tienes que podríamos perseguir juntos?"

Estas conversaciones **asumen continuidad** y la hacen más real.`
      },
      {
        title: "5.6 Señales de Consolidación Exitosa",
        content: `¿Cómo saber si la consolidación está funcionando? Busca estas señales:

**Señales emocionales:**

✅ Ella habla de ti como parte permanente de su vida
✅ Tus opiniones influyen en sus decisiones importantes
✅ Su bienestar está ligado al tuyo y viceversa
✅ No puede imaginar momentos importantes sin ti
✅ Te introduce como algo más que "mi novio" (mi pareja, mi compañero de vida)

**Señales sociales:**

✅ Sus amigos y familia preguntan por ti
✅ Son invitados como pareja, no como individuos
✅ Tienen amigos compartidos
✅ Su círculo asumiría que terminar es impensable

**Señales prácticas:**

✅ Coordinan calendarios naturalmente
✅ Tienen proyectos activos juntos
✅ Planean a largo plazo sin dudar
✅ Las decisiones individuales consideran al otro

**Señales de lenguaje:**

✅ "Nosotros" es más común que "yo" y "tú"
✅ Habla de futuro en plural
✅ Hace referencias a compromisos futuros casualmente

**El test definitivo:**

Si alguien le preguntara: "¿Qué pasaría si terminaran?", su respuesta genuina sería que no puede imaginarlo, no que sería difícil.

Cuando la separación se vuelve **impensable** (no solo difícil), has logrado consolidación completa.`
      }
    ]
  },
  {
    id: 6,
    title: "Protocolo de 30 Días",
    subtitle: "Tu plan de acción diario para los primeros 30 días",
    icon: "📅",
    imagePlaceholder: "[IMAGEN: Calendario de 30 días con fases y objetivos marcados]",
    downloadables: {
      pdf: "leccion-6-protocolo-30-dias.pdf",
      protocol: "protocolo-completo-30-dias.pdf",
      checklist: "checklist-diario.pdf"
    },
    sections: [
      {
        title: "6.1 Visión General del Protocolo",
        content: `Este protocolo de 30 días es tu **guía diaria** para consolidar la reconquista y establecer las bases de una relación duradera.

**Estructura del protocolo:**

| Fase | Días | Objetivo |
|------|------|----------|
| Fase 1 | 1-5 | Consolidación inicial |
| Fase 2 | 6-10 | Profundización emocional |
| Fase 3 | 11-15 | Integración social |
| Fase 4 | 16-20 | Creación de futuro |
| Fase 5 | 21-25 | Blindaje final |
| Fase 6 | 26-30 | Mantenimiento permanente |

**Reglas generales:**

1. **Consistencia sobre intensidad:** Mejor hacer poco cada día que mucho un día y nada los otros.

2. **Flexibilidad dentro de estructura:** Adapta las acciones a tu situación específica.

3. **Documentación:** Lleva un registro simple de lo que haces y los resultados.

4. **No saltes fases:** Cada fase prepara la siguiente.

5. **Recuperación ante fallas:** Si un día falla, no abandones. Retoma al día siguiente.

**Indicadores de progreso:**

Al final de cada fase, deberías ver señales específicas de avance. Las incluiré en cada sección.`
      },
      {
        title: "6.2 Fase 1: Consolidación Inicial (Día 1-5)",
        content: `**Objetivo de la fase:** Establecer el "nuevo normal" post-reconquista.

**DÍA 1:**
- [ ] Establece/confirma una rutina de comunicación
- [ ] Ten una conversación sobre expectativas (sin presión)
- [ ] Planifica al menos un encuentro esta semana
- [ ] Inicia registro de progreso

**DÍA 2:**
- [ ] Mensaje de valor agregado (algo útil/interesante para ella)
- [ ] Mantén conversación pero no la monopolices
- [ ] Si surge conflicto pequeño, maneja con calma
- [ ] Observa y registra su nivel de iniciativa

**DÍA 3:**
- [ ] Sorpresa pequeña (puede ser solo un mensaje significativo)
- [ ] Pregunta sobre algo de su vida que no hayas preguntado
- [ ] Comparte algo de tu día que sea interesante
- [ ] Valida algo específico que ella haga/diga

**DÍA 4:**
- [ ] Ten tiempo de calidad juntos (virtual o presencial)
- [ ] Profundiza conversación más allá de lo superficial
- [ ] Contacto físico significativo si están presencial
- [ ] Crea un momento memorable pequeño

**DÍA 5:**
- [ ] Evalúa los primeros 4 días
- [ ] Identifica qué está funcionando
- [ ] Ajusta lo que no funciona
- [ ] Planifica la próxima semana juntos

**Señales de éxito Fase 1:**
✅ Comunicación fluye naturalmente
✅ Ella inicia contacto al menos 1-2 veces
✅ No hay tensión residual de la ruptura
✅ Ambos parecen cómodos`
      },
      {
        title: "6.3 Fase 2: Profundización Emocional (Día 6-10)",
        content: `**Objetivo de la fase:** Crear conexión emocional más profunda.

**DÍA 6:**
- [ ] Conversación vulnerable (comparte algo personal)
- [ ] Escucha activamente sin interrumpir
- [ ] Valida sus emociones sin minimizar
- [ ] Crea espacio seguro para que comparta

**DÍA 7:**
- [ ] Plan especial juntos (no tiene que ser grande)
- [ ] Durante el plan, enfócate 100% en ella
- [ ] Crea un recuerdo significativo
- [ ] Al final, expresa gratitud genuina

**DÍA 8:**
- [ ] Retoma tema de conversación profunda del día 6
- [ ] Pregunta cómo se siente con la relación
- [ ] Escucha sin ponerte defensivo
- [ ] Comparte cómo te sientes tú

**DÍA 9:**
- [ ] Sorpresa más significativa que las anteriores
- [ ] Algo que demuestre que la conoces profundamente
- [ ] Observa su reacción y recíbela
- [ ] Momento de intimidad (física o emocional)

**DÍA 10:**
- [ ] Evalúa la fase 2
- [ ] ¿Se siente la conexión más profunda?
- [ ] ¿Hay temas pendientes de resolver?
- [ ] Ajusta para la siguiente fase

**Señales de éxito Fase 2:**
✅ Ella comparte cosas que no compartía antes
✅ Te busca para apoyo emocional
✅ Momentos de conexión profunda
✅ Mayor intimidad física/emocional`
      },
      {
        title: "6.4 Fase 3: Integración Social (Día 11-15)",
        content: `**Objetivo de la fase:** Integrar la relación en contexto social.

**DÍA 11:**
- [ ] Planifica encuentro con amigos de ella (o confirma uno existente)
- [ ] Prepárate para conocer o reconectar con su círculo
- [ ] Muestra tu mejor versión social
- [ ] Sé genuinamente interesado en su gente

**DÍA 12:**
- [ ] Planifica encuentro con tus amigos/familia
- [ ] Prepárala para quiénes son y qué esperar
- [ ] Asegúrate de que se sienta bienvenida
- [ ] Facilita conexiones, no la dejes sola

**DÍA 13:**
- [ ] Plan con amigos de ambos (o nueva pareja amiga)
- [ ] Empiecen a crear "su gente" como pareja
- [ ] Sean equipo social, no individuos
- [ ] Divértanse genuinamente

**DÍA 14:**
- [ ] Conversación sobre cómo fueron los encuentros sociales
- [ ] Feedback mutuo (qué funcionó, qué mejorar)
- [ ] Planifica próximos eventos sociales
- [ ] Confirma que ambos se sienten incluidos

**DÍA 15:**
- [ ] Evalúa la fase 3
- [ ] ¿Cómo fue la recepción de ambos círculos?
- [ ] ¿Hay ajustes necesarios?
- [ ] ¿Se sienten más como "pareja" públicamente?

**Señales de éxito Fase 3:**
✅ Sus amigos/familia te reciben bien
✅ Ella se siente cómoda con tu gente
✅ Empiezan a tener "pareja-amigos"
✅ Son vistos como unidad`
      },
      {
        title: "6.5 Fase 4: Creación de Futuro (Día 16-20)",
        content: `**Objetivo de la fase:** Establecer visión compartida de futuro.

**DÍA 16:**
- [ ] Inicia conversación sobre metas a corto plazo
- [ ] ¿Qué quieren lograr en los próximos 3 meses?
- [ ] ¿Qué pueden hacer juntos?
- [ ] Acuerden al menos un objetivo compartido

**DÍA 17:**
- [ ] Conversación sobre mediano plazo (6-12 meses)
- [ ] ¿Hay viajes, proyectos, eventos importantes?
- [ ] ¿Cómo se ven en un año?
- [ ] Planifiquen algo grande juntos

**DÍA 18:**
- [ ] Conversación sobre largo plazo (1-5 años)
- [ ] ¿Son compatibles sus visiones?
- [ ] ¿Hay puntos de conflicto potencial?
- [ ] Exploren sin presionar

**DÍA 19:**
- [ ] Acción concreta hacia un objetivo compartido
- [ ] Reserven algo, inicien algo, comprometan algo
- [ ] Hagan el futuro tangible, no solo hablado
- [ ] Celebren este paso juntos

**DÍA 20:**
- [ ] Evalúa la fase 4
- [ ] ¿Tienen visión compartida clara?
- [ ] ¿Hay desalineaciones importantes?
- [ ] ¿Ambos están emocionados por el futuro?

**Señales de éxito Fase 4:**
✅ Hablan de futuro naturalmente
✅ Tienen planes concretos juntos
✅ Visiones compatibles
✅ Ambos invierten en el futuro compartido`
      },
      {
        title: "6.6 Fase 5: Blindaje Final (Día 21-25)",
        content: `**Objetivo de la fase:** Establecer protecciones contra amenazas.

**DÍA 21:**
- [ ] Evalúa vulnerabilidades de la relación
- [ ] ¿Qué podría amenazar lo que han construido?
- [ ] ¿Hay patrones peligrosos resurgiendo?
- [ ] ¿Hay terceros que generen preocupación?

**DÍA 22:**
- [ ] Conversación sobre comunicación en crisis
- [ ] ¿Cómo manejarán conflictos?
- [ ] ¿Cuáles son los acuerdos de relación?
- [ ] Establezcan "reglas de engagement"

**DÍA 23:**
- [ ] Refuerza exclusividad
- [ ] Actividad especial que sea "solo nuestra"
- [ ] Verbaliza el valor único de la relación
- [ ] Crea experiencia que consolide vínculo

**DÍA 24:**
- [ ] Conversación sobre límites con otros
- [ ] ¿Qué está bien y qué no con amigos/ex/colegas?
- [ ] Sin paranoia, con madurez
- [ ] Acuerdos claros y mutuos

**DÍA 25:**
- [ ] Evalúa la fase 5
- [ ] ¿Están claros los límites?
- [ ] ¿Hay protocolos de comunicación?
- [ ] ¿Ambos se sienten seguros?

**Señales de éxito Fase 5:**
✅ Claridad sobre qué proteger
✅ Protocolos acordados
✅ Límites respetados
✅ Seguridad mutua`
      },
      {
        title: "6.7 Fase 6: Mantenimiento Permanente (Día 26-30)",
        content: `**Objetivo de la fase:** Transicionar a modo de mantenimiento sostenible.

**DÍA 26:**
- [ ] Establece rutinas semanales de mantenimiento
- [ ] ¿Cuáles son los "no negociables" de la relación?
- [ ] ¿Cuándo es el tiempo de calidad fijo?
- [ ] Calendárienlos si es necesario

**DÍA 27:**
- [ ] Establece sistema de sorpresas mensuales
- [ ] Planifica cómo mantener la novedad
- [ ] Ideas para los próximos 3 meses
- [ ] Compromiso de no caer en rutina

**DÍA 28:**
- [ ] Revisión profunda de los 30 días
- [ ] ¿Qué funcionó mejor?
- [ ] ¿Qué necesita más trabajo?
- [ ] ¿Dónde están ahora vs. día 1?

**DÍA 29:**
- [ ] Conversación de cierre del protocolo
- [ ] Celebren lo que han logrado
- [ ] Acuerden cómo seguir adelante
- [ ] Momento especial de compromiso mutuo

**DÍA 30:**
- [ ] Celebración oficial
- [ ] Actividad significativa para marcar el hito
- [ ] Reflexión individual y compartida
- [ ] Inicio del siguiente capítulo

**Señales de éxito Fase 6:**
✅ Rutinas establecidas
✅ Sistema de mantenimiento claro
✅ Compromiso renovado
✅ Ambos satisfechos con el progreso

**Después del día 30:**
Continúa con las rutinas de mantenimiento establecidas. Revisa mensualmente. Ajusta según necesario. Nunca des nada por sentado.`
      }
    ]
  },
  {
    id: 7,
    title: "Recursos Exclusivos",
    subtitle: "Tu acceso a soporte exclusivo y comunidad de élite",
    icon: "🏅",
    imagePlaceholder: "[IMAGEN: Certificado de finalización y accesos exclusivos]",
    downloadables: {
      pdf: "leccion-7-recursos-exclusivos.pdf",
      checklist: "checklist-recursos-exclusivos.pdf"
    },
    sections: [
      {
        title: "7.1 Tu Acceso Premium",
        content: `Tu inversión incluye un **sistema de soporte completo** diseñado para asegurar tu éxito a largo plazo.

**Los 5 Pilares de tu Acceso:**

1. **Acceso a Comunidad**
   Membresía vitalicia en nuestra comunidad exclusiva de hombres que han completado los 3 módulos.

2. **Soporte Prioritario**
   Acceso directo a soporte por email con respuesta en menos de 24 horas.

3. **Actualizaciones Permanentes**
   Cualquier nuevo contenido, técnica o módulo que agreguemos, lo recibes sin costo adicional.

4. **Recursos Premium**
   Acceso a webinars mensuales, materiales exclusivos y herramientas adicionales.

5. **Mentoría Grupal**
   Sesiones periódicas de Q&A con expertos.

**Por qué ofrecemos todo esto:**

Creemos en el programa. Los resultados hablan por sí mismos. Nuestra tasa de éxito es del 98% entre usuarios que completan los 3 módulos y aplican el protocolo.`
      },
      {
        title: "7.2 Acceso a Comunidad Exclusiva",
        content: `La comunidad es uno de los recursos más valiosos que obtienes. No estás solo en este proceso.

**¿Qué es la comunidad?**

Un espacio privado donde hombres que han completado los 3 módulos comparten experiencias, apoyo y recursos.

**Beneficios de la comunidad:**

✅ **Networking:** Conoce a otros hombres en situaciones similares
✅ **Compartir experiencias:** Aprende de los éxitos y errores de otros
✅ **Soporte peer-to-peer:** Ayuda de quienes ya pasaron por lo mismo
✅ **Motivación:** Ver éxitos de otros te impulsa
✅ **Accountability:** Grupo que te mantiene responsable
✅ **Nuevas técnicas:** Comparte y recibe estrategias que funcionan
✅ **Mentoría grupal:** Sesiones periódicas de Q&A

**Reglas de la comunidad:**

1. Respeto total a todos los miembros
2. Confidencialidad absoluta
3. Sin promoción de otros productos/servicios
4. Participación constructiva
5. Apoyo genuino, no competencia

**Cómo acceder:**

Al completar el Módulo 3, recibirás un enlace exclusivo para unirte a la comunidad. Este enlace es personal e intransferible.`
      },
      {
        title: "7.3 Soporte Exclusivo",
        content: `Como usuario del programa completo, tienes acceso a **soporte prioritario** que usuarios de otros niveles no tienen.

**Canales de soporte:**

1. **Email prioritario:** support@programa.com
   - Respuesta en menos de 24 horas
   - Atención personalizada
   - Análisis de tu situación específica

2. **Comunidad:** Soporte peer-to-peer 24/7
   - Respuestas de otros usuarios
   - Múltiples perspectivas
   - Apoyo inmediato

3. **Webinars mensuales:** Sesiones en vivo
   - Q&A en tiempo real
   - Nuevas técnicas y estrategias
   - Acceso a expertos

**Cómo usar el soporte efectivamente:**

Al contactar soporte, incluye:
1. Tu situación actual resumida
2. Qué técnicas has aplicado
3. Resultados obtenidos
4. Pregunta específica

Esto permite respuestas más precisas y útiles.

**Tiempo de respuesta:**

- Preguntas simples: 12-24 horas
- Análisis de situación: 24-48 horas
- Casos complejos: Hasta 72 horas con respuesta detallada`
      },
      {
        title: "7.4 Webinars y Recursos Premium",
        content: `Tu acceso incluye recursos que no están disponibles para usuarios de niveles inferiores.

**Webinars mensuales:**

Cada mes, realizamos un webinar en vivo cubriendo:
- Nuevas técnicas y estrategias
- Casos de estudio actuales
- Q&A con el equipo
- Temas solicitados por la comunidad

**Temas recientes:**
- "Navegando celos sin destruir la relación"
- "Reconquista en era de redes sociales"
- "Mantenimiento a distancia"
- "De novios a compromiso"

**Recursos premium incluidos:**

📚 **Biblioteca de casos de estudio**
Análisis detallados de situaciones reales y cómo se resolvieron.

📝 **Templates avanzados**
Mensajes, conversaciones y scripts para situaciones complejas.

📊 **Hojas de seguimiento**
Herramientas para trackear progreso y mantener consistencia.

📖 **Guías especiales**
Documentos sobre temas específicos (celos, distancia, familia, etc.)

🎯 **Challenges mensuales**
Desafíos de 7-30 días para fortalecer aspectos específicos.

**Cómo acceder a recursos:**

Todo el material está disponible en el área de miembros. Recibirás notificaciones cuando haya contenido nuevo.`
      },
      {
        title: "7.5 Cómo Maximizar tu Inversión",
        content: `Para obtener el máximo valor de tu acceso premium, sigue estas recomendaciones.

**Uso óptimo de recursos:**

1. **Participa activamente en la comunidad**
   - Presenta tu caso
   - Ayuda a otros (esto refuerza tu aprendizaje)
   - Celebra tus victorias

2. **Asiste a los webinars**
   - Marca la fecha en tu calendario
   - Prepara preguntas con anticipación
   - Toma notas durante la sesión

3. **Descarga todos los materiales**
   - PDFs de cada lección
   - Checklists y templates
   - Guías especiales

4. **Usa el soporte estratégicamente**
   - No esperes estar en crisis
   - Pregunta cuando tengas dudas
   - Sé específico en tus preguntas

**Frecuencia recomendada:**

- Comunidad: Revisión diaria (5-10 minutos)
- Webinars: Asistencia mensual
- Materiales: Revisión semanal de recursos relevantes
- Soporte: Cuando lo necesites

**Errores a evitar:**

❌ No participar en la comunidad
❌ Perderse los webinars
❌ No aplicar lo aprendido
❌ Esperar resultados sin esfuerzo
❌ No pedir ayuda cuando la necesitas`
      },
      {
        title: "7.6 Próximos Pasos: Más Allá del Programa",
        content: `Has completado el programa más completo sobre reconquista y mantenimiento de relaciones. Ahora, ¿qué sigue?

**Inmediatamente:**

1. **Únete a la comunidad** si aún no lo has hecho
2. **Descarga todos los recursos** disponibles
3. **Marca en calendario** el próximo webinar
4. **Inicia o continúa** el protocolo de 30 días

**En los próximos 30 días:**

1. **Aplica consistentemente** lo aprendido
2. **Registra tu progreso** diariamente
3. **Usa la comunidad** para soporte
4. **Contacta soporte** si tienes dudas

**En los próximos 3-6 meses:**

1. **Consolida** la relación siguiendo los principios
2. **Mantén** las rutinas establecidas
3. **Participa** en webinars y comunidad
4. **Ayuda** a otros en la comunidad (esto refuerza tu propio aprendizaje)

**A largo plazo:**

1. **Nunca des nada por sentado**
2. **Revisa el material** cuando sientas que lo necesitas
3. **Evoluciona** la relación constantemente
4. **Comparte** tu éxito para inspirar a otros

**El objetivo final:**

No necesitar más el programa porque has internalizado los principios y los aplicas naturalmente. La relación fluye, es sana, es satisfactoria.

Ese es el verdadero éxito.`
      },
      {
        title: "7.7 Mensaje Final: Tu Certificado de Éxito",
        content: `Si has llegado hasta aquí y has completado los 3 módulos, **felicidades**.

Has demostrado algo que la mayoría de hombres no tiene: **la determinación de aprender, cambiar y mejorar**.

**Lo que has logrado:**

✅ Entendiste las razones profundas detrás de la ruptura
✅ Aplicaste técnicas probadas de reconquista
✅ Desarrollaste dominancia emocional
✅ Aprendiste los gatillos psicológicos del deseo
✅ Estableciste sistema de mantenimiento
✅ Blindaste la relación contra amenazas
✅ Consolidaste una relación más fuerte que la original

**Lo que esto significa:**

No solo recuperaste una relación. Te convertiste en un hombre que entiende las relaciones a un nivel que la mayoría nunca alcanza. Este conocimiento te servirá para siempre, en esta relación y en cualquier aspecto de tu vida.

**Tu certificado:**

Al marcar esta lección como completada, desbloquearás tu Certificado de Finalización. Este certificado representa:
- Completar los 3 módulos (21 lecciones)
- Invertir en tu desarrollo personal
- Comprometerte con la excelencia relacional

**Guárdalo. Merécelo. Recuerda lo que significó llegar aquí.**

---

**Desde el equipo del programa:**

Gracias por confiar en nosotros. Tu éxito es nuestra mayor satisfacción.

Ahora ve y vive la relación que construiste. La mereces.

🏆 *Bienvenido a la élite.*`
      }
    ]
  }
];

export const getModule3LessonById = (id: number): Module3Lesson | undefined => {
  return module3Lessons.find(lesson => lesson.id === id);
};

export const getNextModule3LessonId = (currentId: number): number | null => {
  const currentIndex = module3Lessons.findIndex(lesson => lesson.id === currentId);
  if (currentIndex === -1 || currentIndex === module3Lessons.length - 1) return null;
  return module3Lessons[currentIndex + 1].id;
};

export const getPreviousModule3LessonId = (currentId: number): number | null => {
  const currentIndex = module3Lessons.findIndex(lesson => lesson.id === currentId);
  if (currentIndex <= 0) return null;
  return module3Lessons[currentIndex - 1].id;
};

export const module3Badges = [
  'Científico del Mantenimiento',
  'Maestro de Gatillos Permanentes',
  'Escudo Anti-Alejamiento',
  'Guardián Blindado',
  'Consolidador Experto',
  'Estratega de 30 Días',
  'Élite Certificada'
];
