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
        videoId: "_oyxCn2iSjU",
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
        videoId: "LY1V6UbRHFM",
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
    },

    // ==================== NUEVOS - PECHO ====================
    {
        id: "cable-crossover",
        name: "Cruce de Cables",
        category: "pecho",
        difficulty: "intermedio",
        equipment: "Máquina de poleas",
        emoji: "🔗",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
        videoId: "taI4XduLpTk",
        description: "Ejercicio de aislamiento para el pecho que permite una contracción máxima usando cables.",
        muscles: ["Pectoral mayor", "Deltoides anterior", "Serrato anterior"],
        instructions: [
            "Colócate en el centro de la máquina de poleas con un pie adelante.",
            "Agarra las manijas con los brazos extendidos y ligeramente flexionados.",
            "Junta las manos frente al pecho en un movimiento de arco.",
            "Mantén una ligera flexión en los codos durante todo el movimiento.",
            "Regresa lentamente a la posición inicial."
        ],
        tips: [
            "Concéntrate en sentir la contracción del pecho al juntar las manos.",
            "No uses demasiado peso para mantener el control.",
            "Varía la altura de las poleas para trabajar diferentes áreas del pecho."
        ]
    },
    {
        id: "cable-fly",
        name: "Aperturas en Polea Alta",
        category: "pecho",
        difficulty: "principiante",
        equipment: "Máquina de poleas",
        emoji: "🦋",
        image: "https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=600&h=400&fit=crop",
        videoId: "Iwe6AmxVf7o",
        description: "Variación de apertura con cables que mantiene tensión constante en el pecho.",
        muscles: ["Pectoral mayor", "Deltoides anterior"],
        instructions: [
            "Ajusta las poleas a una posición alta.",
            "Da un paso adelante para crear tensión en los cables.",
            "Con los brazos ligeramente flexionados, junta las manos hacia abajo y al frente.",
            "Aprieta el pecho en la parte baja del movimiento.",
            "Regresa de forma controlada a la posición inicial."
        ],
        tips: [
            "Mantén los codos ligeramente doblados en todo momento.",
            "Controla el movimiento, no dejes que los cables te jalen."
        ]
    },

    // ==================== NUEVOS - ESPALDA ====================
    {
        id: "seated-cable-row",
        name: "Remo en Polea Sentado",
        category: "espalda",
        difficulty: "principiante",
        equipment: "Máquina de poleas",
        emoji: "🚣",
        image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=600&h=400&fit=crop",
        videoId: "UCXxvVItLoM",
        description: "Ejercicio fundamental para desarrollar grosor en la espalda media.",
        muscles: ["Dorsal ancho", "Romboides", "Trapecio medio", "Bíceps"],
        instructions: [
            "Siéntate con los pies en la plataforma y las rodillas ligeramente flexionadas.",
            "Agarra la manija con ambas manos, brazos extendidos.",
            "Tira de la manija hacia el abdomen retrayendo los omóplatos.",
            "Mantén la espalda recta durante todo el movimiento.",
            "Regresa lentamente a la posición inicial."
        ],
        tips: [
            "No te inclines demasiado hacia atrás al tirar.",
            "Aprieta los omóplatos al final del movimiento.",
            "Mantén el torso estable."
        ]
    },
    {
        id: "dumbbell-row",
        name: "Remo con Mancuerna a Un Brazo",
        category: "espalda",
        difficulty: "principiante",
        equipment: "Mancuerna y banco",
        emoji: "💪",
        image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=600&h=400&fit=crop",
        videoId: "pYcpY20QaE8",
        description: "Ejercicio unilateral excelente para corregir desbalances musculares en la espalda.",
        muscles: ["Dorsal ancho", "Romboides", "Trapecio", "Bíceps"],
        instructions: [
            "Coloca una rodilla y una mano en el banco para apoyo.",
            "Con la otra mano, agarra la mancuerna con el brazo extendido.",
            "Tira de la mancuerna hacia la cadera retrayendo el omóplato.",
            "Baja la mancuerna de forma controlada.",
            "Completa todas las repeticiones y cambia de lado."
        ],
        tips: [
            "Mantén la espalda paralela al suelo.",
            "No rotes el torso al subir la mancuerna.",
            "Piensa en tirar con el codo, no con la mano."
        ]
    },

    // ==================== NUEVOS - PIERNAS ====================
    {
        id: "leg-extension",
        name: "Extensión de Piernas",
        category: "piernas",
        difficulty: "principiante",
        equipment: "Máquina de extensión",
        emoji: "🦵",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop",
        videoId: "YyvSfVjQeL0",
        description: "Ejercicio de aislamiento ideal para desarrollar la definición del cuádriceps.",
        muscles: ["Cuádriceps"],
        instructions: [
            "Siéntate en la máquina con la espalda apoyada en el respaldo.",
            "Coloca los tobillos detrás del rodillo acolchado.",
            "Extiende las piernas hasta que estén casi completamente rectas.",
            "Mantén la contracción un segundo en la parte superior.",
            "Baja lentamente a la posición inicial."
        ],
        tips: [
            "No bloquees las rodillas en la extensión completa.",
            "Controla la fase excéntrica (bajada) lentamente.",
            "Ajusta el respaldo para que las rodillas queden alineadas con el eje de la máquina."
        ]
    },
    {
        id: "leg-curl",
        name: "Curl de Piernas Acostado",
        category: "piernas",
        difficulty: "principiante",
        equipment: "Máquina de curl",
        emoji: "🦿",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop",
        videoId: "1Tq3QdYUuHs",
        description: "Ejercicio de aislamiento para los isquiotibiales que ayuda al balance muscular de la pierna.",
        muscles: ["Isquiotibiales", "Gemelos"],
        instructions: [
            "Acuéstate boca abajo en la máquina con los tobillos bajo el rodillo.",
            "Agarra las manijas laterales para estabilidad.",
            "Flexiona las rodillas llevando los talones hacia los glúteos.",
            "Mantén la contracción un segundo arriba.",
            "Baja de forma controlada a la posición inicial."
        ],
        tips: [
            "No levantes las caderas del banco al flexionar.",
            "Mantén el movimiento suave y controlado.",
            "Aprieta los isquiotibiales en la parte superior."
        ]
    },
    {
        id: "hip-thrust",
        name: "Hip Thrust (Empuje de Cadera)",
        category: "piernas",
        difficulty: "intermedio",
        equipment: "Barra y banco",
        emoji: "🍑",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop",
        videoId: "SEdqd1n0cvg",
        description: "El mejor ejercicio para desarrollar y fortalecer los glúteos de forma efectiva.",
        muscles: ["Glúteo mayor", "Isquiotibiales", "Core"],
        instructions: [
            "Siéntate en el suelo con la espalda apoyada en un banco.",
            "Coloca la barra sobre las caderas con un pad protector.",
            "Empuja las caderas hacia arriba hasta que el torso quede paralelo al suelo.",
            "Aprieta los glúteos fuertemente en la parte superior.",
            "Baja las caderas de forma controlada."
        ],
        tips: [
            "Mantén la barbilla hacia el pecho durante el movimiento.",
            "No hiperextiendas la espalda baja en la parte superior.",
            "Los pies deben estar a la anchura de los hombros."
        ]
    },

    // ==================== NUEVOS - HOMBROS ====================
    {
        id: "dumbbell-shoulder-press",
        name: "Press de Hombro con Mancuernas",
        category: "hombros",
        difficulty: "principiante",
        equipment: "Mancuernas",
        emoji: "🏋️",
        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600&h=400&fit=crop",
        videoId: "qEwKCR5JCog",
        description: "Variación del press militar que permite mayor rango de movimiento y trabajo unilateral.",
        muscles: ["Deltoides anterior", "Deltoides medio", "Tríceps"],
        instructions: [
            "Siéntate en un banco con respaldo a 90 grados.",
            "Sube las mancuernas a la altura de los hombros con las palmas al frente.",
            "Empuja las mancuernas hacia arriba hasta casi extender los brazos.",
            "Baja las mancuernas de forma controlada hasta la altura de los hombros.",
            "Mantén el core activado durante todo el movimiento."
        ],
        tips: [
            "No choques las mancuernas arriba.",
            "Mantén los codos ligeramente adelante del cuerpo.",
            "Exhala al empujar e inhala al bajar."
        ]
    },
    {
        id: "upright-row",
        name: "Remo al Mentón",
        category: "hombros",
        difficulty: "intermedio",
        equipment: "Barra",
        emoji: "⬆️",
        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600&h=400&fit=crop",
        videoId: "amCU-ziHITM",
        description: "Ejercicio compuesto que trabaja los deltoides y trapecios de forma efectiva.",
        muscles: ["Deltoides medio", "Trapecio", "Bíceps"],
        instructions: [
            "De pie, agarra la barra con agarre estrecho (manos separadas 15-20 cm).",
            "Tira de la barra hacia arriba siguiendo el cuerpo.",
            "Lleva los codos hacia arriba y afuera hasta la altura de los hombros.",
            "Mantén la barra cerca del cuerpo durante todo el recorrido.",
            "Baja de forma controlada a la posición inicial."
        ],
        tips: [
            "No subas la barra más allá de la altura de los hombros.",
            "Un agarre más amplio reduce el estrés en los hombros.",
            "Si sientes molestias, cambia a la versión con mancuernas."
        ]
    },
    {
        id: "dumbbell-shrugs",
        name: "Encogimientos con Mancuernas",
        category: "hombros",
        difficulty: "principiante",
        equipment: "Mancuernas",
        emoji: "🤷",
        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600&h=400&fit=crop",
        videoId: "cJRVVxmytaM",
        description: "Ejercicio aislado para desarrollar la parte superior del trapecio.",
        muscles: ["Trapecio superior", "Elevador de la escápula"],
        instructions: [
            "De pie, sostén una mancuerna en cada mano a los lados.",
            "Encoge los hombros hacia las orejas lo más alto posible.",
            "Mantén la contracción máxima durante 1-2 segundos.",
            "Baja los hombros de forma controlada.",
            "Mantén los brazos rectos durante todo el ejercicio."
        ],
        tips: [
            "No rotes los hombros, el movimiento es solo hacia arriba y abajo.",
            "Usa un agarre firme con straps si es necesario.",
            "No uses impulso del cuerpo para subir el peso."
        ]
    },

    // ==================== NUEVOS - BRAZOS ====================
    {
        id: "concentration-curl",
        name: "Curl Concentrado",
        category: "brazos",
        difficulty: "principiante",
        equipment: "Mancuerna",
        emoji: "💪",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
        videoId: "0AUGkch3tzc",
        description: "Ejercicio de aislamiento perfecto para el pico del bíceps con máxima concentración.",
        muscles: ["Bíceps braquial", "Braquial"],
        instructions: [
            "Siéntate en un banco con las piernas abiertas.",
            "Apoya el codo en la parte interna del muslo.",
            "Con la mancuerna, realiza un curl flexionando el codo.",
            "Aprieta el bíceps en la parte superior del movimiento.",
            "Baja lentamente la mancuerna a la posición inicial."
        ],
        tips: [
            "No muevas el codo de su posición en el muslo.",
            "Concéntrate en la contracción muscular.",
            "Usa un peso que permita un rango completo de movimiento."
        ]
    },
    {
        id: "preacher-curl",
        name: "Curl en Banco Scott",
        category: "brazos",
        difficulty: "intermedio",
        equipment: "Barra EZ y banco Scott",
        emoji: "📐",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
        videoId: "fIWP-FRFNU0",
        description: "Curl con soporte que elimina el impulso y maximiza la activación del bíceps.",
        muscles: ["Bíceps braquial", "Braquial anterior"],
        instructions: [
            "Siéntate en el banco Scott con los brazos apoyados en el pad.",
            "Agarra la barra EZ con agarre supino.",
            "Sube la barra flexionando los codos de forma controlada.",
            "Aprieta los bíceps en la parte superior.",
            "Baja la barra lentamente sin extender completamente los codos."
        ],
        tips: [
            "No dejes que los brazos cuelguen completamente al bajar.",
            "Mantén los hombros pegados al pad.",
            "Usa la barra EZ para reducir el estrés en las muñecas."
        ]
    },
    {
        id: "tricep-dips",
        name: "Fondos para Tríceps",
        category: "brazos",
        difficulty: "intermedio",
        equipment: "Barras paralelas",
        emoji: "⬇️",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
        videoId: "6kALZikXxLc",
        description: "Ejercicio compuesto con peso corporal que desarrolla tríceps, pecho y hombros.",
        muscles: ["Tríceps", "Pectoral inferior", "Deltoides anterior"],
        instructions: [
            "Agarra las barras paralelas y elévate con los brazos extendidos.",
            "Inclina ligeramente el torso hacia adelante.",
            "Baja el cuerpo flexionando los codos hasta un ángulo de 90 grados.",
            "Empuja hacia arriba hasta extender completamente los brazos.",
            "Mantén el core activado durante todo el movimiento."
        ],
        tips: [
            "Para más tríceps, mantén el torso vertical.",
            "Para más pecho, inclínate hacia adelante.",
            "Si es muy difícil, usa una banda de asistencia."
        ]
    },
    {
        id: "overhead-tricep-ext",
        name: "Extensión de Tríceps sobre Cabeza",
        category: "brazos",
        difficulty: "principiante",
        equipment: "Mancuerna",
        emoji: "🔝",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
        videoId: "nRiJVZDpdL0",
        description: "Ejercicio de aislamiento que trabaja la cabeza larga del tríceps de forma efectiva.",
        muscles: ["Tríceps (cabeza larga)", "Tríceps (cabeza medial)"],
        instructions: [
            "De pie o sentado, sostén una mancuerna con ambas manos sobre la cabeza.",
            "Baja la mancuerna detrás de la cabeza flexionando los codos.",
            "Mantén los codos cerca de la cabeza apuntando hacia arriba.",
            "Extiende los codos para volver a la posición inicial.",
            "Controla el movimiento en ambas direcciones."
        ],
        tips: [
            "Mantén los codos fijos, solo los antebrazos se mueven.",
            "No arquees la espalda baja.",
            "Puedes hacerlo sentado para mayor estabilidad."
        ]
    },

    // ==================== NUEVOS - CORE ====================
    {
        id: "bicycle-crunch",
        name: "Abdominales Bicicleta",
        category: "core",
        difficulty: "principiante",
        equipment: "Peso corporal",
        emoji: "🚴",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        videoId: "9FGilxCbdz8",
        description: "Ejercicio dinámico que trabaja tanto los oblicuos como el recto abdominal simultáneamente.",
        muscles: ["Oblicuos", "Recto abdominal", "Flexores de cadera"],
        instructions: [
            "Acuéstate boca arriba con las manos detrás de la cabeza.",
            "Eleva las piernas con las rodillas a 90 grados.",
            "Lleva el codo derecho hacia la rodilla izquierda girando el torso.",
            "Alterna al otro lado de forma fluida.",
            "Mantén la espalda baja pegada al suelo."
        ],
        tips: [
            "No tires del cuello con las manos.",
            "El movimiento viene de la rotación del torso, no de los brazos.",
            "Extiende completamente la pierna contraria en cada repetición."
        ]
    },
    {
        id: "ab-circuit",
        name: "Circuito de Abdominales",
        category: "core",
        difficulty: "avanzado",
        equipment: "Peso corporal",
        emoji: "🔥",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        videoId: "3p8EBPVZ2Iw",
        description: "Rutina intensa de abdominales que combina múltiples movimientos para un core fuerte.",
        muscles: ["Recto abdominal", "Oblicuos", "Transverso del abdomen", "Flexores de cadera"],
        instructions: [
            "Realiza cada ejercicio del circuito por 30-45 segundos.",
            "Incluye crunches, leg raises, plancha y mountain climbers.",
            "Descansa 10-15 segundos entre ejercicios.",
            "Completa 2-3 rondas del circuito completo.",
            "Mantén el core activado en todos los movimientos."
        ],
        tips: [
            "Prioriza la forma correcta sobre la velocidad.",
            "Respira de forma constante, no contengas el aire.",
            "Escala la dificultad según tu nivel."
        ]
    },

    // ==================== NUEVOS - CARDIO ====================
    {
        id: "jump-rope",
        name: "Saltar la Cuerda",
        category: "cardio",
        difficulty: "principiante",
        equipment: "Cuerda para saltar",
        emoji: "⏫",
        image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=600&h=400&fit=crop",
        videoId: "FJmRQ5iTXKE",
        description: "Ejercicio cardiovascular clásico que mejora la coordinación, resistencia y quema calorías rápidamente.",
        muscles: ["Gemelos", "Cuádriceps", "Core", "Sistema cardiovascular"],
        instructions: [
            "Sostén la cuerda con las manos a la altura de las caderas.",
            "Gira la cuerda con las muñecas, no con los brazos.",
            "Salta con ambos pies apenas lo suficiente para pasar la cuerda.",
            "Aterriza suavemente sobre las puntas de los pies.",
            "Mantén un ritmo constante y respira de forma regular."
        ],
        tips: [
            "Empieza con intervalos cortos de 30 segundos.",
            "Mantén los codos cerca del cuerpo.",
            "Usa una superficie con algo de amortiguación para proteger las articulaciones."
        ]
    },

    // ==================== NUEVOS - PECHO ====================
    {
        id: "peck-deck-machine",
        name: "Aperturas en Peck Deck (Máquina)",
        category: "pecho",
        difficulty: "principiante",
        equipment: "Máquina Peck Deck",
        emoji: "🦋",
        image: "https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=600&h=400&fit=crop",
        videoId: "bQgJpTt-fV8",
        description: "Máquina de aislamiento que proporciona movimiento controlado y seguro para el pecho.",
        muscles: ["Pectoral mayor", "Deltoides anterior"],
        instructions: [
            "Siéntate en la máquina con la espalda completamente apoyada.",
            "Agarra los mangos con las manos a la altura de los hombros.",
            "Junta los mangos en un movimiento fluido hacia el centro.",
            "Siente la contracción del pecho por 1-2 segundos.",
            "Regresa lentamente a la posición inicial."
        ],
        tips: [
            "Ajusta el respaldo para que los mangos queden a la altura del centro del pecho.",
            "No uses demasiado peso para mantener el control.",
            "Este ejercicio es excelente para principiantes."
        ]
    },

    // ==================== NUEVOS - HOMBROS ====================
    {
        id: "press-militar-machine",
        name: "Press Militar en Máquina",
        category: "hombros",
        difficulty: "principiante",
        equipment: "Máquina Press Militar",
        emoji: "🏋️",
        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600&h=400&fit=crop",
        videoId: "qsXKEyglDe4",
        description: "Versión controlada y segura del press militar para desarrollar hombros sin riesgo de lesión.",
        muscles: ["Deltoides anterior", "Deltoides medio", "Tríceps", "Parte superior del pecho"],
        instructions: [
            "Siéntate en la máquina con la espalda contra el respaldo.",
            "Agarra los mangos a la altura de los hombros.",
            "Empuja los mangos hacia arriba hasta la extensión completa.",
            "Baja los mangos de forma controlada a la posición inicial.",
            "Mantén la espalda firme contra el respaldo."
        ],
        tips: [
            "Perfecto para ejecución consistente sin necesidad de balancear peso.",
            "Ideal para principiantes que quieren aprender la forma correcta.",
            "Ajusta el asiento para que los mangos queden a la altura de los ojos."
        ]
    },
    {
        id: "rear-delt-fly",
        name: "Pájaros (Deltoides Posteriores)",
        category: "hombros",
        difficulty: "intermedio",
        equipment: "Máquina Pec Deck Invertido o Mancuernas",
        emoji: "🕊️",
        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600&h=400&fit=crop",
        videoId: "baknXv8vk5s",
        description: "Ejercicio aislado para fortalecer los deltoides posteriores y mejorar la postura.",
        muscles: ["Deltoides posterior", "Romboides", "Trapecio medio"],
        instructions: [
            "Siéntate en la máquina o párate con mancuernas ligeras.",
            "Coloca tus brazos extendidos al frente a la altura del pecho.",
            "Abre los brazos como si quisieras volar, formando una T.",
            "En el punto máximo, aprieta los omóplatos.",
            "Regresa al centro de forma controlada."
        ],
        tips: [
            "Usa un peso ligero, la forma es más importante que la carga.",
            "Concéntrate en la contracción del deltoides posterior.",
            "Este ejercicio es crucial para balance postural."
        ]
    },

    // ==================== NUEVOS - PIERNAS ====================
    {
        id: "goblet-squat",
        name: "Sentadilla Goblet (Con Copa)",
        category: "piernas",
        difficulty: "principiante",
        equipment: "Mancuerna o Kettlebell",
        emoji: "🏺",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop",
        videoId: "VdJJiE9hZh8",
        description: "Variación amigable para principiantes que mejora la movilidad y postura en la sentadilla.",
        muscles: ["Cuádriceps", "Glúteo mayor", "Isquiotibiales", "Core"],
        instructions: [
            "Sostén una mancuerna o kettlebell cerca del pecho con ambas manos.",
            "Coloca los pies a la anchura de los hombros.",
            "Baja el cuerpo doblando las rodillas y caderas.",
            "Desciende hasta que los muslos estén paralelos al suelo.",
            "Sube empujando con los talones a la posición inicial."
        ],
        tips: [
            "Perfecto para aprender la forma correcta de la sentadilla.",
            "Mantén el pecho erguido durante todo el movimiento.",
            "El peso cerca del cuerpo ayuda con el balance."
        ]
    },
    {
        id: "calf-raise-machine",
        name: "Elevación de Talones en Máquina",
        category: "piernas",
        difficulty: "principiante",
        equipment: "Máquina de Pantorrillas",
        emoji: "🦵",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop",
        videoId: "Nj8JECAa8Ws",
        description: "Ejercicio aislado y controlado para desarrollar la fuerza y definición en las pantorrillas.",
        muscles: ["Gemelo", "Sóleo"],
        instructions: [
            "Siéntate o colócate de pie en la máquina de pantorrillas.",
            "Coloca los pies a la anchura de los hombros en la plataforma.",
            "Sube sobre las puntas de los pies, levantando los talones.",
            "Aprieta la pantorrilla en la parte superior del movimiento.",
            "Baja los talones de forma controlada."
        ],
        tips: [
            "Las pantorrillas responden bien a altas repeticiones.",
            "Mantén un movimiento lento y controlado.",
            "Realiza 15-20 repeticiones para máximo beneficio."
        ]
    },

    // ==================== NUEVOS - BRAZOS ====================
    {
        id: "tricep-rope-pushdown",
        name: "Jalón de Tríceps con Cuerda",
        category: "brazos",
        difficulty: "principiante",
        equipment: "Polea alta con cuerda",
        emoji: "🪢",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
        videoId: "32z-5drgP-s",
        description: "Variación de jalón que permite separación de los tríceps y mejor contracción.",
        muscles: ["Tríceps", "Extensores del antebrazo"],
        instructions: [
            "De pie frente a la polea, agarra la cuerda con ambas manos.",
            "Los brazos deben estar a 90 grados, codos a los lados.",
            "Empuja la cuerda hacia abajo extiendiendo los codos completamente.",
            "En la parte baja, separa la cuerda abriendo los brazos.",
            "Regresa controladamente a la posición inicial."
        ],
        tips: [
            "Mantén los codos en los lados durante el movimiento.",
            "La separación de la cuerda permite mejor contracción.",
            "No uses demasiado peso, es un ejercicio de aislamiento."
        ]
    },
    {
        id: "farmers-carry",
        name: "Paseo del Granjero (Farmer's Carry)",
        category: "brazos",
        difficulty: "intermedio",
        equipment: "Mancuernas o Kettlebells",
        emoji: "🚶",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
        videoId: "3r3QbN6p5U8",
        description: "Ejercicio funcional que fortalece agarres, antebrazos, trapecios y core.",
        muscles: ["Antebrazos", "Trapecio", "Core", "Estabilizadores"],
        instructions: [
            "Sostén una mancuerna o kettlebell pesada en cada mano.",
            "Camina hacia adelante manteniendo una postura erguida.",
            "Mantén los hombros atrás y el core activado.",
            "Camina una distancia determinada sin soltar el peso.",
            "Descansa y repite."
        ],
        tips: [
            "Excelente para desarrollar agarres fuertes.",
            "Camina en línea recta sin balancearte.",
            "Perfecto para trabajo de core isométrico."
        ]
    },

    // ==================== NUEVOS - CORE ====================
    {
        id: "crunch-machine",
        name: "Crunch en Máquina",
        category: "core",
        difficulty: "principiante",
        equipment: "Máquina de Crunch",
        emoji: "⚙️",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        videoId: "OJ7pO0FXWYo",
        description: "Versión controlada del crunch que proporciona aislamiento seguro del recto abdominal.",
        muscles: ["Recto abdominal", "Oblicuos"],
        instructions: [
            "Siéntate en la máquina y coloca unos las manos en los paneles laterales.",
            "Asegúrate de que el acolchado esté en contacto con el pecho.",
            "Contrae el abdomen y flexiona hacia adelante.",
            "Siente la contracción en máxima compresión.",
            "Regresa lentamente a la posición inicial."
        ],
        tips: [
            "Enfócate en contraer el abdomen, no en el cuello.",
            "Movimiento corto pero intenso es más efectivo.",
            "Realiza 12-15 repeticiones por serie."
        ]
    },
    {
        id: "machine-leg-extension-core",
        name: "Elevación de Piernas en Máquina",
        category: "core",
        difficulty: "intermedio",
        equipment: "Máquina de Elevación de Piernas",
        emoji: "📈",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        videoId: "QXJRLEOXJwg",
        description: "Ejercicio de máquina para fortalecer el core inferior y los abdominales bajos.",
        muscles: ["Recto abdominal", "Flexores de cadera", "Core"],
        instructions: [
            "Siéntate en la máquina de elevación de piernas.",
            "Agarra las asas laterales para estabilidad.",
            "Levanta las rodillas apretando el core.",
            "Lleva las rodillas hacia el pecho de forma controlada.",
            "Baja las piernas sin que los pies toquen el suelo."
        ],
        tips: [
            "Mantén el movimiento lento y controlado.",
            "Aprieta el abdomen al subir.",
            "Este ejercicio es efectivo para abdominales bajos."
        ]
    }
];

