// ===== EXERCISES DATABASE =====
const EXERCISES_DB = [
    // ==================== PECHO ====================
    {
        id: "bench-press",
        name: "Press de Banca",
        category: "pecho",
        difficulty: "intermedio",
        equipment: "Barra y banco",
        emoji: "🏋️",
        image: "https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=600&h=400&fit=crop",
        videoId: "rT7DgCr-3pg",
        description: "Ejercicio compuesto fundamental para desarrollar el pecho, tríceps y hombros anteriores.",
        muscles: ["Pectoral mayor", "Tríceps", "Deltoides anterior"],
        instructions: [
            "Acuéstate en el banco con los pies firmes en el suelo.",
            "Agarra la barra con un agarre un poco más ancho que los hombros.",
            "Baja la barra de forma controlada hasta tocar el pecho.",
            "Empuja la barra hacia arriba hasta extender los brazos completamente.",
            "Mantén los omóplatos retraídos durante todo el movimiento."
        ],
        tips: [
            "No rebotes la barra en el pecho.",
            "Mantén los pies plantados firmemente.",
            "Usa un spotter para pesos pesados."
        ]
    },
    {
        id: "incline-bench",
        name: "Press Inclinado con Mancuernas",
        category: "pecho",
        difficulty: "intermedio",
        equipment: "Mancuernas y banco inclinado",
        emoji: "💪",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
        videoId: "8iPEnn-ltC8",
        description: "Targeting the upper chest, this variation helps build a fuller, more defined chest.",
        muscles: ["Pectoral mayor (porción clavicular)", "Deltoides anterior", "Tríceps"],
        instructions: [
            "Ajusta el banco a 30-45 grados de inclinación.",
            "Siéntate con una mancuerna en cada mano a la altura de los hombros.",
            "Empuja las mancuernas hacia arriba hasta que los brazos estén casi extendidos.",
            "Baja lentamente las mancuernas hasta que los codos queden a 90 grados.",
            "Mantén el control durante todo el movimiento."
        ],
        tips: [
            "No inclines el banco más de 45 grados para evitar activar demasiado el deltoides.",
            "Mantén una ligera curvatura en los codos en la parte superior."
        ]
    },
    {
        id: "chest-fly",
        name: "Aperturas con Mancuernas",
        category: "pecho",
        difficulty: "facil",
        equipment: "Mancuernas y banco",
        emoji: "🦋",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop",
        videoId: "eozdVDA78K0",
        description: "Ejercicio de aislamiento excelente para estirar y contraer las fibras del pecho.",
        muscles: ["Pectoral mayor", "Deltoides anterior"],
        instructions: [
            "Acuéstate en el banco con una mancuerna en cada mano, brazos extendidos.",
            "Con los codos ligeramente flexionados, abre los brazos en arco.",
            "Baja hasta sentir un buen estiramiento en el pecho.",
            "Retorna las mancuernas al centro apretando el pecho.",
            "Imagina que estás abrazando un árbol grande."
        ],
        tips: [
            "Usa un peso moderado para mantener el control.",
            "No bajes demasiado para evitar lesiones en el hombro."
        ]
    },
    {
        id: "push-ups",
        name: "Flexiones (Push-ups)",
        category: "pecho",
        difficulty: "facil",
        equipment: "Peso corporal",
        emoji: "🤸",
        image: "https://images.unsplash.com/photo-1598971639058-a05474e0596f?w=600&h=400&fit=crop",
        videoId: "IODxDxX7oi4",
        description: "Ejercicio clásico de peso corporal que trabaja pecho, hombros y tríceps.",
        muscles: ["Pectoral mayor", "Tríceps", "Deltoides anterior", "Core"],
        instructions: [
            "Colócate en posición de plancha con las manos a la anchura de los hombros.",
            "Mantén el cuerpo recto de la cabeza a los pies.",
            "Baja el cuerpo doblando los codos hasta casi tocar el suelo.",
            "Empuja hacia arriba hasta la posición inicial.",
            "Exhala al subir, inhala al bajar."
        ],
        tips: [
            "No dejes caer las caderas.",
            "Varía la anchura de las manos para enfatizar diferentes músculos."
        ]
    },

    // ==================== ESPALDA ====================
    {
        id: "deadlift",
        name: "Peso Muerto",
        category: "espalda",
        difficulty: "avanzado",
        equipment: "Barra",
        emoji: "🔥",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
        videoId: "op9kVnSso6Q",
        description: "El ejercicio rey para desarrollar fuerza total del cuerpo, especialmente espalda baja y piernas.",
        muscles: ["Erectores espinales", "Glúteos", "Isquiotibiales", "Trapecios", "Antebrazos"],
        instructions: [
            "Colócate frente a la barra con los pies a la anchura de las caderas.",
            "Agarra la barra con agarre mixto o doble pronado.",
            "Mantén la espalda recta y el pecho arriba.",
            "Levanta la barra empujando con las piernas y extendiendo la cadera.",
            "Baja la barra de forma controlada siguiendo el mismo camino."
        ],
        tips: [
            "Nunca redondees la espalda baja.",
            "La barra debe mantenerse pegada al cuerpo.",
            "Domina la técnica con peso ligero antes de cargar."
        ]
    },
    {
        id: "pull-ups",
        name: "Dominadas",
        category: "espalda",
        difficulty: "intermedio",
        equipment: "Barra de dominadas",
        emoji: "🦍",
        image: "https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?w=600&h=400&fit=crop",
        videoId: "eGo4IYlbE5g",
        description: "Ejercicio fundamental de tracción vertical para una espalda ancha y fuerte.",
        muscles: ["Dorsal ancho", "Bíceps", "Romboides", "Trapecio inferior"],
        instructions: [
            "Agarra la barra con un agarre pronado más ancho que los hombros.",
            "Cuélgate con los brazos completamente extendidos.",
            "Tira del cuerpo hacia arriba hasta que la barbilla pase la barra.",
            "Baja de forma controlada hasta la posición inicial.",
            "Aprieta los omóplatos al subir."
        ],
        tips: [
            "Si no puedes hacer una completa, usa bandas de asistencia.",
            "Evita el balanceo del cuerpo (kipping)."
        ]
    },
    {
        id: "barbell-row",
        name: "Remo con Barra",
        category: "espalda",
        difficulty: "intermedio",
        equipment: "Barra",
        emoji: "🚣",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
        videoId: "FWJR5Ve8bnQ",
        description: "Excelente ejercicio compuesto para desarrollar grosor y densidad en la espalda.",
        muscles: ["Dorsal ancho", "Romboides", "Trapecio", "Bíceps", "Erectores espinales"],
        instructions: [
            "Inclínate hacia adelante con la espalda recta a ~45 grados.",
            "Agarra la barra con agarre pronado a la anchura de los hombros.",
            "Tira de la barra hacia el abdomen bajo apretando los omóplatos.",
            "Baja la barra de forma controlada.",
            "Mantén el core activado durante todo el movimiento."
        ],
        tips: [
            "No uses impulso con el torso.",
            "Piensa en tirar con los codos, no con las manos."
        ]
    },
    {
        id: "lat-pulldown",
        name: "Jalón al Pecho (Polea Alta)",
        category: "espalda",
        difficulty: "facil",
        equipment: "Máquina de polea",
        emoji: "⬇️",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        videoId: "CAwf7n6Luuc",
        description: "Alternativa a las dominadas, ideal para principiantes o como complemento.",
        muscles: ["Dorsal ancho", "Bíceps", "Romboides"],
        instructions: [
            "Siéntate en la máquina con las piernas aseguradas.",
            "Agarra la barra con agarre ancho y pronado.",
            "Tira de la barra hacia el pecho superior.",
            "Aprieta los omóplatos en la parte baja del movimiento.",
            "Retorna la barra de forma controlada."
        ],
        tips: [
            "No te inclines demasiado hacia atrás.",
            "Concéntrate en la conexión mente-músculo con el dorsal."
        ]
    },

    // ==================== PIERNAS ====================
    {
        id: "squat",
        name: "Sentadilla con Barra",
        category: "piernas",
        difficulty: "intermedio",
        equipment: "Barra y rack",
        emoji: "🦵",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop",
        videoId: "ultWZbUMPL8",
        description: "El ejercicio más completo para piernas. Desarrolla cuádriceps, glúteos y fuerza general.",
        muscles: ["Cuádriceps", "Glúteos", "Isquiotibiales", "Core", "Erectores espinales"],
        instructions: [
            "Coloca la barra en la parte alta de la espalda (trapecios).",
            "Separa los pies a la anchura de los hombros con las puntas ligeramente hacia afuera.",
            "Baja flexionando caderas y rodillas como si te sentaras.",
            "Desciende hasta que los muslos queden paralelos al suelo o más abajo.",
            "Empuja con los talones para regresar a la posición inicial."
        ],
        tips: [
            "Las rodillas deben seguir la dirección de los pies.",
            "Mantén el pecho arriba y la espalda neutra.",
            "No dejes que las rodillas colapsen hacia dentro."
        ]
    },
    {
        id: "leg-press",
        name: "Prensa de Piernas",
        category: "piernas",
        difficulty: "facil",
        equipment: "Máquina prensa",
        emoji: "🦿",
        image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=600&h=400&fit=crop",
        videoId: "IZxyjW7MPJQ",
        description: "Ejercicio de máquina para trabajar las piernas con mayor peso de forma segura.",
        muscles: ["Cuádriceps", "Glúteos", "Isquiotibiales"],
        instructions: [
            "Siéntate en la prensa con la espalda pegada al respaldo.",
            "Coloca los pies a la anchura de los hombros en la plataforma.",
            "Desbloquea la máquina y baja la plataforma flexionando las rodillas.",
            "Desciende hasta que las rodillas formen 90 grados.",
            "Empuja la plataforma hasta casi extender las piernas (sin bloquear rodillas)."
        ],
        tips: [
            "Nunca bloquees completamente las rodillas.",
            "No dejes que la espalda baja se despegue del respaldo."
        ]
    },
    {
        id: "lunges",
        name: "Zancadas (Lunges)",
        category: "piernas",
        difficulty: "facil",
        equipment: "Mancuernas (opcional)",
        emoji: "🚶",
        image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=600&h=400&fit=crop",
        videoId: "QOVaHwm-Q6U",
        description: "Ejercicio unilateral excelente para equilibrio muscular y estabilidad.",
        muscles: ["Cuádriceps", "Glúteos", "Isquiotibiales", "Core"],
        instructions: [
            "De pie, da un paso largo hacia adelante.",
            "Baja el cuerpo flexionando ambas rodillas a 90 grados.",
            "La rodilla trasera casi toca el suelo.",
            "Empuja con el pie delantero para volver a la posición inicial.",
            "Alterna las piernas o completa un lado antes del otro."
        ],
        tips: [
            "Mantén el torso erguido.",
            "La rodilla delantera no debe pasar la punta del pie."
        ]
    },
    {
        id: "romanian-deadlift",
        name: "Peso Muerto Rumano",
        category: "piernas",
        difficulty: "intermedio",
        equipment: "Barra o mancuernas",
        emoji: "🍑",
        image: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=600&h=400&fit=crop",
        videoId: "JCXUYQp2BnI",
        description: "Enfocado en isquiotibiales y glúteos, excelente para la cadena posterior.",
        muscles: ["Isquiotibiales", "Glúteos", "Erectores espinales"],
        instructions: [
            "De pie con la barra, empuja las caderas hacia atrás.",
            "Baja la barra por las piernas manteniendo la espalda recta.",
            "Flexiona ligeramente las rodillas (no es sentadilla).",
            "Baja hasta sentir un buen estiramiento en los isquiotibiales.",
            "Vuelve arriba apretando los glúteos al final."
        ],
        tips: [
            "El movimiento es en la cadera, no en la espalda.",
            "La barra debe mantenerse cerca de las piernas."
        ]
    },
    {
        id: "calf-raises",
        name: "Elevación de Gemelos",
        category: "piernas",
        difficulty: "facil",
        equipment: "Máquina o escalón",
        emoji: "🦶",
        image: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=600&h=400&fit=crop",
        videoId: "-M4-G8p8fmc",
        description: "Ejercicio aislado para desarrollar los músculos de la pantorrilla.",
        muscles: ["Gastrocnemio", "Sóleo"],
        instructions: [
            "Colócate en el borde de un escalón con los talones colgando.",
            "Sube elevándote sobre las puntas de los pies.",
            "Mantén la posición arriba por un segundo.",
            "Baja de forma controlada estirando bien los gemelos.",
            "Repite con control y rango completo."
        ],
        tips: [
            "Usa el rango completo de movimiento.",
            "Haz pausas arriba y abajo para mayor efectividad."
        ]
    },

    // ==================== HOMBROS ====================
    {
        id: "overhead-press",
        name: "Press Militar",
        category: "hombros",
        difficulty: "intermedio",
        equipment: "Barra o mancuernas",
        emoji: "🙌",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=400&fit=crop",
        videoId: "2yjwXTZQDDI",
        description: "Ejercicio principal para desarrollar los tres cabezas del deltoides.",
        muscles: ["Deltoides anterior", "Deltoides lateral", "Tríceps", "Trapecio"],
        instructions: [
            "De pie o sentado, sostén la barra a la altura de los hombros.",
            "Empuja la barra directamente sobre la cabeza.",
            "Extiende los brazos completamente en la parte superior.",
            "Baja la barra de forma controlada hasta los hombros.",
            "Mantén el core activado para estabilidad."
        ],
        tips: [
            "No uses demasiado impulso con las piernas.",
            "No arquees excesivamente la espalda baja."
        ]
    },
    {
        id: "lateral-raises",
        name: "Elevaciones Laterales",
        category: "hombros",
        difficulty: "facil",
        equipment: "Mancuernas",
        emoji: "🦅",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
        videoId: "3VcKaXpzqRo",
        description: "El mejor ejercicio de aislamiento para desarrollar hombros anchos.",
        muscles: ["Deltoides lateral"],
        instructions: [
            "De pie con una mancuerna en cada mano a los lados.",
            "Con los codos ligeramente flexionados, levanta los brazos a los lados.",
            "Sube hasta la altura de los hombros.",
            "Haz una breve pausa arriba.",
            "Baja de forma controlada."
        ],
        tips: [
            "No uses demasiado peso, la técnica es clave.",
            "Piensa en alejar las mancuernas del cuerpo, no en subirlas.",
            "Inclina ligeramente las mancuernas como vaciando una jarra de agua."
        ]
    },
    {
        id: "face-pulls",
        name: "Face Pulls",
        category: "hombros",
        difficulty: "facil",
        equipment: "Cable con cuerda",
        emoji: "🎯",
        image: "https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=600&h=400&fit=crop",
        videoId: "rep-qVOkqgk",
        description: "Esencial para la salud del hombro y el desarrollo del deltoides posterior.",
        muscles: ["Deltoides posterior", "Romboides", "Trapecio medio"],
        instructions: [
            "Coloca la polea a la altura de la cara con una cuerda.",
            "Agarra la cuerda con las palmas hacia abajo.",
            "Tira de la cuerda hacia la cara separando las manos.",
            "Aprieta los omóplatos en la contracción final.",
            "Retorna de forma controlada."
        ],
        tips: [
            "Mantén los codos altos durante el movimiento.",
            "Es un ejercicio de alto reps, no te obsesiones con el peso."
        ]
    },

    // ==================== BRAZOS ====================
    {
        id: "barbell-curl",
        name: "Curl con Barra",
        category: "brazos",
        difficulty: "facil",
        equipment: "Barra (recta o Z)",
        emoji: "💪",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
        videoId: "kwG2ipFRgFo",
        description: "Ejercicio clásico para bíceps que permite mover buen peso.",
        muscles: ["Bíceps braquial", "Braquial", "Braquiorradial"],
        instructions: [
            "De pie, agarra la barra con agarre supino a la anchura de los hombros.",
            "Con los codos pegados al cuerpo, levanta la barra.",
            "Contrae los bíceps en la parte superior.",
            "Baja de forma controlada sin mover los codos.",
            "Mantén el torso recto sin balancearte."
        ],
        tips: [
            "No uses impulso del cuerpo para subir la barra.",
            "Si no puedes evitar el balanceo, reduce el peso."
        ]
    },
    {
        id: "hammer-curl",
        name: "Curl Martillo",
        category: "brazos",
        difficulty: "facil",
        equipment: "Mancuernas",
        emoji: "🔨",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop",
        videoId: "zC3nLlEvin4",
        description: "Trabaja el braquial y braquiorradial además del bíceps, dando grosor al brazo.",
        muscles: ["Braquial", "Bíceps braquial", "Braquiorradial"],
        instructions: [
            "De pie con una mancuerna en cada mano, palmas mirándose.",
            "Con los codos pegados al cuerpo, sube las mancuernas.",
            "Mantén las palmas mirándose (posición neutral) todo el tiempo.",
            "Contrae arriba y baja de forma controlada.",
            "Puedes hacerlo alterno o simultáneo."
        ],
        tips: [
            "Excelente para el desarrollo del antebrazo.",
            "Mantén los codos estáticos."
        ]
    },
    {
        id: "tricep-pushdown",
        name: "Extensión de Tríceps en Polea",
        category: "brazos",
        difficulty: "facil",
        equipment: "Cable con barra o cuerda",
        emoji: "⬇️",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
        videoId: "2-LAMcpzODU",
        description: "Aislamiento efectivo para los tríceps usando la polea alta.",
        muscles: ["Tríceps braquial (tres cabezas)"],
        instructions: [
            "De pie frente a la polea alta con la barra o cuerda.",
            "Con los codos pegados al cuerpo, empuja hacia abajo.",
            "Extiende completamente los brazos en la parte inferior.",
            "Aprieta los tríceps por un momento.",
            "Retorna de forma controlada sin mover los codos."
        ],
        tips: [
            "Mantén los codos fijos a los lados.",
            "Usa un peso que permita extensión completa."
        ]
    },
    {
        id: "skull-crushers",
        name: "Rompecráneos (Skull Crushers)",
        category: "brazos",
        difficulty: "intermedio",
        equipment: "Barra Z y banco",
        emoji: "💀",
        image: "https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=600&h=400&fit=crop",
        videoId: "d_KZxkY_0cM",
        description: "Excelente ejercicio de aislamiento para las tres cabezas del tríceps.",
        muscles: ["Tríceps braquial (tres cabezas)"],
        instructions: [
            "Acuéstate en el banco con la barra Z extendida sobre el pecho.",
            "Flexiona los codos bajando la barra hacia la frente.",
            "Mantén los hombros estáticos, solo mueve los antebrazos.",
            "Baja hasta que la barra quede cerca de la frente.",
            "Extiende los brazos volviendo a la posición inicial."
        ],
        tips: [
            "No dejes caer la barra, controla siempre.",
            "Los codos deben apuntar al techo."
        ]
    },

    // ==================== CORE ====================
    {
        id: "plank",
        name: "Plancha (Plank)",
        category: "core",
        difficulty: "facil",
        equipment: "Peso corporal",
        emoji: "🧱",
        image: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&h=400&fit=crop",
        videoId: "ASdvN_XEl_c",
        description: "Ejercicio isométrico fundamental para fortalecer todo el core.",
        muscles: ["Recto abdominal", "Oblicuos", "Transverso", "Erectores espinales"],
        instructions: [
            "Colócate en posición de plancha sobre los antebrazos.",
            "Mantén el cuerpo en línea recta de cabeza a pies.",
            "Activa el core apretando el abdomen.",
            "No dejes que las caderas suban o bajen.",
            "Mantén la posición el tiempo indicado."
        ],
        tips: [
            "Comienza con 20-30 segundos e incrementa gradualmente.",
            "Respira de forma constante, no aguantes la respiración."
        ]
    },
    {
        id: "crunches",
        name: "Abdominales (Crunches)",
        category: "core",
        difficulty: "facil",
        equipment: "Peso corporal",
        emoji: "🔄",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        videoId: "Xyd_fa5zoEU",
        description: "Ejercicio clásico para el recto abdominal.",
        muscles: ["Recto abdominal"],
        instructions: [
            "Acuéstate boca arriba con las rodillas dobladas y los pies en el suelo.",
            "Coloca las manos detrás de la cabeza o cruzadas sobre el pecho.",
            "Eleva los hombros del suelo contrayendo el abdomen.",
            "No necesitas subir mucho, solo despegar los omóplatos.",
            "Baja de forma controlada."
        ],
        tips: [
            "No tires del cuello con las manos.",
            "Exhala al subir, inhala al bajar."
        ]
    },
    {
        id: "hanging-leg-raise",
        name: "Elevación de Piernas Colgado",
        category: "core",
        difficulty: "avanzado",
        equipment: "Barra de dominadas",
        emoji: "🦇",
        image: "https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?w=600&h=400&fit=crop",
        videoId: "hdng3Nm1x_E",
        description: "Ejercicio avanzado que trabaja intensamente el core inferior.",
        muscles: ["Recto abdominal (inferior)", "Oblicuos", "Flexores de cadera"],
        instructions: [
            "Cuélgate de una barra con agarre pronado.",
            "Mantén las piernas juntas y rectas.",
            "Eleva las piernas hasta la posición horizontal o más arriba.",
            "Baja de forma controlada sin balancearte.",
            "Si es muy difícil, flexiona las rodillas."
        ],
        tips: [
            "Evita el balanceo del cuerpo.",
            "Contrae el abdomen antes de levantar las piernas."
        ]
    },
    {
        id: "russian-twist",
        name: "Giros Rusos (Russian Twist)",
        category: "core",
        difficulty: "intermedio",
        equipment: "Peso corporal o mancuerna",
        emoji: "🌀",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        videoId: "wkD8rjkodUI",
        description: "Excelente para trabajar los oblicuos y la rotación del tronco.",
        muscles: ["Oblicuos internos y externos", "Recto abdominal"],
        instructions: [
            "Siéntate con las rodillas dobladas y los pies elevados del suelo.",
            "Inclina el torso ligeramente hacia atrás.",
            "Sostén un peso con ambas manos frente al pecho.",
            "Gira el torso de un lado a otro tocando el suelo con el peso.",
            "Mantén las caderas lo más estáticas posible."
        ],
        tips: [
            "El movimiento debe venir del torso, no de los brazos.",
            "Para más dificultad, eleva más los pies."
        ]
    },

    // ==================== CARDIO ====================
    {
        id: "jumping-jacks",
        name: "Jumping Jacks",
        category: "cardio",
        difficulty: "facil",
        equipment: "Peso corporal",
        emoji: "⭐",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
        videoId: "c4DAnQ6DtF8",
        description: "Ejercicio cardiovascular clásico que eleva la frecuencia cardíaca rápidamente.",
        muscles: ["Cuerpo completo", "Sistema cardiovascular"],
        instructions: [
            "De pie con los pies juntos y brazos a los lados.",
            "Salta separando los pies y elevando los brazos sobre la cabeza.",
            "Salta de nuevo para volver a la posición inicial.",
            "Repite de forma continua a un ritmo constante.",
            "Mantén un ritmo que puedas sostener."
        ],
        tips: [
            "Aterriza suavemente para proteger las articulaciones.",
            "Ideal para calentamiento o intervalos de cardio."
        ]
    },
    {
        id: "burpees",
        name: "Burpees",
        category: "cardio",
        difficulty: "avanzado",
        equipment: "Peso corporal",
        emoji: "🔥",
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&h=400&fit=crop",
        videoId: "dZgVxmf6jkA",
        description: "El ejercicio de cuerpo completo más intenso. Combina fuerza y cardio.",
        muscles: ["Cuerpo completo", "Sistema cardiovascular"],
        instructions: [
            "De pie, baja en sentadilla y coloca las manos en el suelo.",
            "Salta con los pies hacia atrás quedando en posición de plancha.",
            "Haz una flexión (opcional para mayor intensidad).",
            "Salta los pies de vuelta hacia las manos.",
            "Salta explosivamente hacia arriba con los brazos extendidos."
        ],
        tips: [
            "Modifica el ejercicio eliminando el salto o la flexión si es muy difícil.",
            "Mantén un ritmo constante y controlado."
        ]
    },
    {
        id: "mountain-climbers",
        name: "Escaladores (Mountain Climbers)",
        category: "cardio",
        difficulty: "intermedio",
        equipment: "Peso corporal",
        emoji: "🧗",
        image: "https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?w=600&h=400&fit=crop",
        videoId: "nmwgirgXLYM",
        description: "Ejercicio de alta intensidad que combina cardio con trabajo de core.",
        muscles: ["Core", "Cuádriceps", "Hombros", "Sistema cardiovascular"],
        instructions: [
            "Comienza en posición de plancha alta (brazos extendidos).",
            "Lleva una rodilla hacia el pecho rápidamente.",
            "Cambia de pierna de forma explosiva.",
            "Mantén las caderas bajas y el core activado.",
            "Alterna las piernas a un ritmo rápido."
        ],
        tips: [
            "No dejes que las caderas suban demasiado.",
            "Comienza a un ritmo moderado y acelera gradualmente."
        ]
    }
];
