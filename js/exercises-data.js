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
        description: "Enfocado en la parte superior del pecho, esta variación ayuda a desarrollar un pectoral más completo y definido.",
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
        difficulty: "principiante",
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
        difficulty: "principiante",
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
        difficulty: "principiante",
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
        difficulty: "principiante",
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
        difficulty: "principiante",
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
        difficulty: "principiante",
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
        difficulty: "principiante",
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
        difficulty: "principiante",
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
        difficulty: "principiante",
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
        difficulty: "principiante",
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
        difficulty: "principiante",
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
        difficulty: "principiante",
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
        difficulty: "principiante",
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
        difficulty: "principiante",
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
        videoId: "RbQ9L6KDADs",
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
        videoId: "-iD0WM1Yxmc",
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
        videoId: "zv191ny-YBU",
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
        videoId: "AgD7XRyH05o",
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
        videoId: "fbztq7eccAQ",
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
        videoId: "Zj1h0ObPsp8",
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
        videoId: "8DBHNgT1zO8",
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
        videoId: "l98-SYsMO0s",
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
        videoId: "OMy3yMefd1g",
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
    },

    // ==================== NUEVOS - PECHO (Ampliación) ====================
    {
        id: "dumbbell-flat-press",
        name: "Press con Mancuernas Plano",
        category: "pecho",
        difficulty: "principiante",
        equipment: "Mancuernas y banco plano",
        emoji: "🏋️",
        image: "https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=600&h=400&fit=crop",
        videoId: "6aKBJNf_7BY",
        description: "Variante del press de banca que permite mayor rango de movimiento y trabaja cada lado de forma independiente.",
        muscles: ["Pectoral mayor", "Tríceps", "Deltoides anterior"],
        instructions: [
            "Acuéstate en el banco plano con una mancuerna en cada mano.",
            "Sostén las mancuernas a la altura del pecho con los codos a 45 grados.",
            "Empuja las mancuernas hacia arriba hasta casi extender los brazos.",
            "Baja de forma controlada hasta que los codos queden a la altura del pecho.",
            "Mantén los hombros pegados al banco durante todo el movimiento."
        ],
        tips: [
            "Permite mayor estiramiento del pecho que la barra.",
            "Ideal para corregir desbalances entre lados.",
            "No gires las muñecas durante el movimiento."
        ]
    },
    {
        id: "chest-dips",
        name: "Fondos para Pecho",
        category: "pecho",
        difficulty: "intermedio",
        equipment: "Barras paralelas",
        emoji: "⬇️",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
        videoId: "gdQtj2KLBvs",
        description: "Ejercicio compuesto con peso corporal que enfatiza la parte inferior del pecho cuando se hace con inclinación.",
        muscles: ["Pectoral mayor (porción inferior)", "Tríceps", "Deltoides anterior"],
        instructions: [
            "Agarra las barras paralelas y elévate con brazos extendidos.",
            "Inclina el torso hacia adelante unos 30 grados.",
            "Baja el cuerpo flexionando los codos hasta sentir estiramiento en el pecho.",
            "Los codos deben separarse ligeramente hacia los lados.",
            "Empuja hacia arriba hasta la posición inicial."
        ],
        tips: [
            "Inclínate más hacia adelante que en los fondos de tríceps.",
            "Si es difícil, usa bandas de asistencia.",
            "No bajes demasiado para proteger los hombros."
        ]
    },

    // ==================== NUEVOS - ESPALDA (Ampliación) ====================
    {
        id: "t-bar-row",
        name: "Remo en T",
        category: "espalda",
        difficulty: "intermedio",
        equipment: "Barra T o landmine",
        emoji: "🔱",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
        videoId: "lUtFwA_285E",
        description: "Ejercicio compuesto para desarrollar grosor y densidad en la espalda media y baja.",
        muscles: ["Dorsal ancho", "Romboides", "Trapecio medio", "Bíceps", "Erectores espinales"],
        instructions: [
            "Colócate sobre la barra T con los pies a la anchura de los hombros.",
            "Inclínate hacia adelante manteniendo la espalda recta.",
            "Agarra la manija con ambas manos.",
            "Tira de la barra hacia el pecho apretando los omóplatos.",
            "Baja de forma controlada sin redondear la espalda."
        ],
        tips: [
            "Mantén las rodillas ligeramente flexionadas.",
            "No uses impulso del torso para subir el peso.",
            "Excelente para desarrollar grosor en la espalda."
        ]
    },
    {
        id: "hyperextensions",
        name: "Hiperextensiones",
        category: "espalda",
        difficulty: "principiante",
        equipment: "Banco de hiperextensiones",
        emoji: "🔙",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
        videoId: "-Mx-9yxCuco",
        description: "Ejercicio de aislamiento para fortalecer la espalda baja y prevenir lesiones lumbares.",
        muscles: ["Erectores espinales", "Glúteos", "Isquiotibiales"],
        instructions: [
            "Colócate en el banco de hiperextensiones con las caderas sobre el pad.",
            "Cruza los brazos sobre el pecho o colócalos detrás de la cabeza.",
            "Baja el torso de forma controlada hacia el suelo.",
            "Sube el torso hasta que quede en línea con las piernas.",
            "No hiperextiendas la espalda más allá de la posición neutra."
        ],
        tips: [
            "Movimiento lento y controlado, sin rebotes.",
            "Excelente para prevenir dolor de espalda baja.",
            "Puedes agregar peso con un disco para más intensidad."
        ]
    },
    {
        id: "dumbbell-pullover",
        name: "Pull-over con Mancuerna",
        category: "espalda",
        difficulty: "intermedio",
        equipment: "Mancuerna y banco",
        emoji: "🫁",
        image: "https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=600&h=400&fit=crop",
        videoId: "u2r6wTfTnOM",
        description: "Ejercicio único que trabaja tanto la espalda como el pecho, expandiendo la caja torácica.",
        muscles: ["Dorsal ancho", "Pectoral mayor", "Tríceps largo", "Serrato anterior"],
        instructions: [
            "Acuéstate perpendicular al banco, solo los hombros apoyados.",
            "Sostén una mancuerna con ambas manos sobre el pecho, brazos extendidos.",
            "Baja la mancuerna por detrás de la cabeza en un arco amplio.",
            "Baja hasta sentir el estiramiento en dorsales y pecho.",
            "Regresa la mancuerna a la posición inicial sobre el pecho."
        ],
        tips: [
            "Mantén una ligera flexión en los codos.",
            "Respira profundo al bajar para expandir la caja torácica.",
            "No uses peso excesivo, el estiramiento es clave."
        ]
    },
    {
        id: "machine-row",
        name: "Remo en Máquina (Hammer Strength)",
        category: "espalda",
        difficulty: "principiante",
        equipment: "Máquina de remo",
        emoji: "⚙️",
        image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=600&h=400&fit=crop",
        videoId: "RBCSSg7yMjs",
        description: "Remo guiado en máquina que permite enfocarse en la contracción sin preocuparse por el balance.",
        muscles: ["Dorsal ancho", "Romboides", "Trapecio medio", "Bíceps"],
        instructions: [
            "Siéntate en la máquina con el pecho contra el pad frontal.",
            "Agarra las manijas con ambas manos.",
            "Tira de las manijas hacia atrás apretando los omóplatos.",
            "Mantén la contracción por un segundo.",
            "Regresa de forma controlada a la posición inicial."
        ],
        tips: [
            "Ideal para principiantes que aprenden la mecánica del remo.",
            "Mantén el pecho firme contra el pad.",
            "Puedes usar agarre neutro o pronado según la máquina."
        ]
    },

    // ==================== NUEVOS - PIERNAS (Ampliación) ====================
    {
        id: "hack-squat",
        name: "Sentadilla Hack",
        category: "piernas",
        difficulty: "intermedio",
        equipment: "Máquina Hack Squat",
        emoji: "🦿",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop",
        videoId: "NEyKZhc5u5A",
        description: "Sentadilla guiada en máquina que permite enfocarse en los cuádriceps con menos estrés en la espalda.",
        muscles: ["Cuádriceps", "Glúteos", "Isquiotibiales"],
        instructions: [
            "Colócate en la máquina hack con la espalda contra el pad.",
            "Coloca los pies a la anchura de los hombros en la plataforma.",
            "Desbloquea la máquina y baja flexionando las rodillas.",
            "Desciende hasta que los muslos estén paralelos o más abajo.",
            "Empuja con los talones para subir a la posición inicial."
        ],
        tips: [
            "Varía la posición de los pies para enfatizar diferentes músculos.",
            "Pies más arriba = más glúteos, pies más abajo = más cuádriceps.",
            "No bloquees las rodillas al extender."
        ]
    },
    {
        id: "step-ups",
        name: "Subidas al Banco (Step-Ups)",
        category: "piernas",
        difficulty: "principiante",
        equipment: "Banco o cajón y mancuernas (opcional)",
        emoji: "📦",
        image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=600&h=400&fit=crop",
        videoId: "jY7t0IYJo5I",
        description: "Ejercicio unilateral funcional que mejora el equilibrio, fuerza y estabilidad de cada pierna.",
        muscles: ["Cuádriceps", "Glúteos", "Isquiotibiales", "Core"],
        instructions: [
            "Colócate frente a un banco o cajón estable.",
            "Sube un pie completo al banco.",
            "Empuja con la pierna de arriba para elevar todo el cuerpo.",
            "Mantén el equilibrio arriba por un momento.",
            "Baja de forma controlada con la misma pierna."
        ],
        tips: [
            "No te impulses con la pierna de abajo.",
            "Mantén el torso erguido durante todo el movimiento.",
            "La altura del cajón determina la dificultad."
        ]
    },
    {
        id: "bulgarian-split-squat",
        name: "Sentadilla Búlgara",
        category: "piernas",
        difficulty: "intermedio",
        equipment: "Banco y mancuernas (opcional)",
        emoji: "🇧🇬",
        image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=600&h=400&fit=crop",
        videoId: "le7PfOfjMcQ",
        description: "Sentadilla unilateral avanzada que desarrolla fuerza, equilibrio y corrige desbalances musculares.",
        muscles: ["Cuádriceps", "Glúteos", "Isquiotibiales", "Core", "Estabilizadores"],
        instructions: [
            "Colócate de espaldas a un banco con un pie apoyado atrás.",
            "El pie delantero debe estar a un paso del banco.",
            "Baja el cuerpo flexionando la rodilla delantera.",
            "Desciende hasta que el muslo delantero quede paralelo al suelo.",
            "Empuja con la pierna delantera para volver arriba."
        ],
        tips: [
            "Mantén el torso lo más vertical posible.",
            "La rodilla delantera no debe pasar excesivamente la punta del pie.",
            "Excelente para atletas que buscan fuerza funcional."
        ]
    },
    {
        id: "sumo-squat",
        name: "Sentadilla Sumo",
        category: "piernas",
        difficulty: "principiante",
        equipment: "Mancuerna o kettlebell",
        emoji: "🏯",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop",
        videoId: "TOZryI1I0tE",
        description: "Variación de sentadilla con postura amplia que enfatiza los aductores y glúteos.",
        muscles: ["Aductores", "Glúteos", "Cuádriceps", "Isquiotibiales"],
        instructions: [
            "Separa los pies más allá del ancho de los hombros con las puntas hacia afuera.",
            "Sostén una mancuerna o kettlebell frente al cuerpo.",
            "Baja en sentadilla manteniendo las rodillas en la dirección de los pies.",
            "Desciende hasta que los muslos estén paralelos al suelo.",
            "Sube apretando los glúteos y aductores."
        ],
        tips: [
            "Las rodillas deben apuntar en la misma dirección que los pies.",
            "Mantén el torso erguido, no te inclines hacia adelante.",
            "Excelente para mejorar la flexibilidad de cadera."
        ]
    },

    // ==================== NUEVOS - HOMBROS (Ampliación) ====================
    {
        id: "arnold-press",
        name: "Press Arnold",
        category: "hombros",
        difficulty: "intermedio",
        equipment: "Mancuernas",
        emoji: "💪",
        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600&h=400&fit=crop",
        videoId: "T1swrKQeLKw",
        description: "Variación del press de hombro inventada por Arnold Schwarzenegger que trabaja los tres cabezas del deltoides.",
        muscles: ["Deltoides anterior", "Deltoides lateral", "Deltoides posterior", "Tríceps"],
        instructions: [
            "Siéntate con las mancuernas a la altura del pecho, palmas mirando hacia ti.",
            "Mientras empujas las mancuernas hacia arriba, gira las palmas hacia afuera.",
            "En la parte superior, las palmas deben mirar al frente.",
            "Baja las mancuernas invirtiendo la rotación.",
            "Las palmas terminan mirando hacia ti en la posición inicial."
        ],
        tips: [
            "La rotación activa las tres cabezas del deltoides.",
            "Usa menos peso que en el press militar convencional.",
            "Movimiento fluido sin pausas bruscas."
        ]
    },
    {
        id: "front-raises",
        name: "Elevación Frontal con Mancuernas",
        category: "hombros",
        difficulty: "principiante",
        equipment: "Mancuernas",
        emoji: "🙆",
        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600&h=400&fit=crop",
        videoId: "kLbvYQ-l4BA",
        description: "Ejercicio de aislamiento para el deltoides anterior que define la parte frontal del hombro.",
        muscles: ["Deltoides anterior", "Pectoral mayor (clavicular)"],
        instructions: [
            "De pie con una mancuerna en cada mano frente a los muslos.",
            "Con los codos ligeramente flexionados, levanta los brazos al frente.",
            "Sube hasta la altura de los hombros.",
            "Mantén la posición un segundo arriba.",
            "Baja de forma controlada a la posición inicial."
        ],
        tips: [
            "No balancees el cuerpo para subir el peso.",
            "Puedes alternar brazos o hacerlo simultáneo.",
            "Usa un peso moderado para mantener la técnica."
        ]
    },

    // ==================== NUEVOS - BRAZOS (Ampliación) ====================
    {
        id: "cable-curl",
        name: "Curl en Polea Baja",
        category: "brazos",
        difficulty: "principiante",
        equipment: "Máquina de polea baja",
        emoji: "🔄",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
        videoId: "arAwWnfLyLw",
        description: "Curl de bíceps con tensión constante durante todo el movimiento gracias al cable.",
        muscles: ["Bíceps braquial", "Braquial", "Braquiorradial"],
        instructions: [
            "De pie frente a la polea baja, agarra la barra con agarre supino.",
            "Mantén los codos pegados al cuerpo.",
            "Flexiona los codos llevando la barra hacia los hombros.",
            "Aprieta los bíceps en la contracción máxima.",
            "Baja de forma controlada manteniendo la tensión."
        ],
        tips: [
            "La polea mantiene tensión constante, a diferencia de las mancuernas.",
            "No muevas los codos hacia adelante al subir.",
            "Excelente para finalizar el entrenamiento de bíceps."
        ]
    },
    {
        id: "tricep-kickback",
        name: "Patada de Tríceps (Kickback)",
        category: "brazos",
        difficulty: "principiante",
        equipment: "Mancuerna",
        emoji: "🦶",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
        videoId: "rOlw1qfy39U",
        description: "Ejercicio de aislamiento que trabaja la cabeza lateral del tríceps con máxima contracción.",
        muscles: ["Tríceps (cabeza lateral)", "Tríceps (cabeza medial)"],
        instructions: [
            "Inclínate hacia adelante con una mano y rodilla en el banco.",
            "Sostén la mancuerna con el brazo a 90 grados.",
            "Extiende el codo llevando la mancuerna hacia atrás.",
            "Aprieta el tríceps en la extensión completa.",
            "Baja de forma controlada a la posición inicial."
        ],
        tips: [
            "Mantén el codo fijo pegado al cuerpo.",
            "No uses impulso, el movimiento debe ser del antebrazo.",
            "Usa un peso ligero para mantener la forma correcta."
        ]
    },

    // ==================== NUEVOS - CORE (Ampliación) ====================
    {
        id: "dead-bug",
        name: "Dead Bug",
        category: "core",
        difficulty: "principiante",
        equipment: "Peso corporal",
        emoji: "🐛",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        videoId: "HN3wyEcYC2g",
        description: "Ejercicio fundamental para activar el core profundo y mejorar la estabilidad lumbar.",
        muscles: ["Transverso del abdomen", "Recto abdominal", "Oblicuos", "Estabilizadores"],
        instructions: [
            "Acuéstate boca arriba con los brazos extendidos hacia el techo.",
            "Eleva las piernas con rodillas a 90 grados (posición de mesa).",
            "Extiende el brazo derecho atrás y la pierna izquierda al frente simultáneamente.",
            "Mantén la espalda baja pegada al suelo en todo momento.",
            "Regresa al centro y alterna con el otro lado."
        ],
        tips: [
            "Si la espalda se despega del suelo, reduce el rango de movimiento.",
            "Es un ejercicio de control, no de velocidad.",
            "Perfecto para rehabilitación y prevención de lesiones."
        ]
    },
    {
        id: "cable-wood-chop",
        name: "Leñador en Polea (Wood Chop)",
        category: "core",
        difficulty: "intermedio",
        equipment: "Máquina de polea",
        emoji: "🪓",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        videoId: "F5EuUIM_pwk",
        description: "Ejercicio rotacional que trabaja los oblicuos y mejora la potencia de giro del tronco.",
        muscles: ["Oblicuos", "Recto abdominal", "Transverso", "Hombros"],
        instructions: [
            "Coloca la polea en posición alta y agarra el mango con ambas manos.",
            "Colócate de lado a la máquina con los pies separados.",
            "Tira del cable en diagonal de arriba abajo cruzando el cuerpo.",
            "Gira el torso durante el movimiento manteniendo los brazos extendidos.",
            "Regresa de forma controlada a la posición inicial."
        ],
        tips: [
            "El movimiento viene del core, no de los brazos.",
            "Mantén las caderas lo más estables posible.",
            "Puedes invertir la dirección (de abajo hacia arriba) para variar."
        ]
    },

    // ==================== NUEVOS - CARDIO (Ampliación) ====================
    {
        id: "box-jumps",
        name: "Saltos al Cajón (Box Jumps)",
        category: "cardio",
        difficulty: "intermedio",
        equipment: "Cajón pliométrico",
        emoji: "📦",
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&h=400&fit=crop",
        videoId: "bbFEYR3i8JU",
        description: "Ejercicio pliométrico que desarrolla potencia explosiva en las piernas y mejora la capacidad cardiovascular.",
        muscles: ["Cuádriceps", "Glúteos", "Gemelos", "Core", "Sistema cardiovascular"],
        instructions: [
            "Colócate frente al cajón a una distancia de un paso.",
            "Flexiona las rodillas y balancea los brazos hacia atrás.",
            "Salta de forma explosiva aterrizando con ambos pies en el cajón.",
            "Aterriza suavemente con las rodillas ligeramente flexionadas.",
            "Baja del cajón con control y repite."
        ],
        tips: [
            "Empieza con una altura baja e incrementa gradualmente.",
            "Aterriza siempre con control, nunca con las piernas rígidas.",
            "No te desplomes al bajar, controla cada repetición."
        ]
    },
    {
        id: "high-knees",
        name: "Rodillas Altas (High Knees)",
        category: "cardio",
        difficulty: "principiante",
        equipment: "Peso corporal",
        emoji: "🏃",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
        videoId: "cr8umQg7oZ8",
        description: "Ejercicio cardiovascular de alta intensidad que eleva la frecuencia cardíaca y trabaja el core.",
        muscles: ["Flexores de cadera", "Cuádriceps", "Core", "Sistema cardiovascular"],
        instructions: [
            "De pie, comienza a correr en el lugar.",
            "Levanta las rodillas lo más alto posible, al menos a la altura de la cadera.",
            "Alterna las piernas rápidamente.",
            "Mantén los brazos moviéndose de forma coordinada.",
            "Mantén un ritmo constante y elevado."
        ],
        tips: [
            "Aterriza sobre las puntas de los pies.",
            "Mantén el core activado durante todo el ejercicio.",
            "Ideal para calentamiento o circuitos HIIT."
        ]
    },
    {
        id: "kettlebell-swing",
        name: "Kettlebell Swing",
        category: "cardio",
        difficulty: "intermedio",
        equipment: "Kettlebell",
        emoji: "🔔",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
        videoId: "JBeC5nkbZZE",
        description: "Ejercicio completo que combina fuerza y cardio, trabajando la cadena posterior de forma explosiva.",
        muscles: ["Glúteos", "Isquiotibiales", "Core", "Hombros", "Sistema cardiovascular"],
        instructions: [
            "De pie con los pies más anchos que los hombros, kettlebell en el suelo.",
            "Agarra la kettlebell con ambas manos e inclínate desde la cadera.",
            "Balancea la kettlebell entre las piernas y luego extiende las caderas explosivamente.",
            "La kettlebell debe subir hasta la altura del pecho por la fuerza de las caderas.",
            "Deja que la kettlebell caiga entre las piernas y repite."
        ],
        tips: [
            "Es un movimiento de cadera, NO de hombros.",
            "Aprieta los glúteos fuertemente en la parte superior.",
            "Domina la bisagra de cadera antes de agregar peso."
        ]
    },
    {
        id: "battle-ropes",
        name: "Cuerdas de Batalla (Battle Ropes)",
        category: "cardio",
        difficulty: "intermedio",
        equipment: "Cuerdas de batalla",
        emoji: "🪢",
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&h=400&fit=crop",
        videoId: "OwGdMLettzQ",
        description: "Ejercicio de cuerpo completo que eleva la frecuencia cardíaca mientras trabaja brazos, hombros y core.",
        muscles: ["Hombros", "Brazos", "Core", "Piernas", "Sistema cardiovascular"],
        instructions: [
            "Agarra un extremo de la cuerda en cada mano.",
            "Con las rodillas ligeramente flexionadas, crea ondas alternas con los brazos.",
            "Mueve los brazos arriba y abajo de forma explosiva y alterna.",
            "Mantén el core activado y la postura erguida.",
            "Varía entre ondas alternas, dobles y en espiral."
        ],
        tips: [
            "Genera las ondas desde los hombros, no solo las muñecas.",
            "Mantén las rodillas flexionadas para estabilidad.",
            "Empieza con intervalos de 20-30 segundos."
        ]
    },

    // ==================== NUEVOS - PECHO (90 total) ====================
    {
        id: "decline-bench-press",
        name: "Press de Banca Declinado",
        category: "pecho",
        difficulty: "intermedio",
        equipment: "Barra y banco declinado",
        emoji: "📐",
        image: "https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=600&h=400&fit=crop",
        videoId: "KlLUp-LMq9o",
        description: "Variación del press de banca que enfatiza la porción inferior del pectoral mayor.",
        muscles: ["Pectoral mayor (porción inferior)", "Tríceps", "Deltoides anterior"],
        instructions: [
            "Acuéstate en el banco declinado y asegura los pies en los soportes.",
            "Agarra la barra a la anchura de los hombros o ligeramente más ancho.",
            "Desbloquea la barra y bájala de forma controlada hacia la parte baja del pecho.",
            "Toca ligeramente el pecho sin rebotar.",
            "Empuja la barra hacia arriba hasta extender los brazos."
        ],
        tips: [
            "El ángulo declinado reduce el estrés en los hombros.",
            "Usa un compañero o seguros de seguridad.",
            "No uses un ángulo demasiado pronunciado, 15-30 grados es suficiente."
        ]
    },
    {
        id: "dumbbell-fly-flat",
        name: "Aperturas con Mancuernas Plano",
        category: "pecho",
        difficulty: "principiante",
        equipment: "Mancuernas y banco plano",
        emoji: "🕊️",
        image: "https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=600&h=400&fit=crop",
        videoId: "LHkxanQKCZI",
        description: "Ejercicio de aislamiento que estira y contrae el pectoral a través de un amplio rango de movimiento.",
        muscles: ["Pectoral mayor", "Deltoides anterior", "Bíceps (estabilizador)"],
        instructions: [
            "Acuéstate en el banco plano con una mancuerna en cada mano.",
            "Extiende los brazos sobre el pecho con los codos ligeramente flexionados.",
            "Abre los brazos bajando las mancuernas en un arco amplio.",
            "Baja hasta sentir un buen estiramiento en el pecho.",
            "Vuelve a juntar las mancuernas sobre el pecho en el mismo arco."
        ],
        tips: [
            "No uses demasiado peso, la técnica es más importante.",
            "Mantén la ligera flexión de codos durante todo el movimiento.",
            "Siente el estiramiento del pecho en la parte baja."
        ]
    },
    {
        id: "smith-machine-bench",
        name: "Press en Máquina Smith",
        category: "pecho",
        difficulty: "principiante",
        equipment: "Máquina Smith",
        emoji: "🔒",
        image: "https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=600&h=400&fit=crop",
        videoId: "c2JklZWaLAE",
        description: "Press de banca guiado en máquina Smith, ideal para entrenar sin compañero de forma segura.",
        muscles: ["Pectoral mayor", "Tríceps", "Deltoides anterior"],
        instructions: [
            "Acuéstate en el banco bajo la máquina Smith.",
            "Agarra la barra a la anchura de los hombros.",
            "Gira la barra para desbloquearla de los seguros.",
            "Baja la barra de forma controlada hasta el pecho.",
            "Empuja hacia arriba y bloquea al terminar la serie."
        ],
        tips: [
            "Ideal para principiantes que quieren aprender el movimiento.",
            "Ajusta el banco para que la barra baje al centro del pecho.",
            "Puedes entrenar pesado sin necesidad de spotter."
        ]
    },

    // ==================== NUEVOS - ESPALDA ====================
    {
        id: "close-grip-lat-pulldown",
        name: "Jalón al Pecho Agarre Cerrado",
        category: "espalda",
        difficulty: "principiante",
        equipment: "Máquina de polea alta",
        emoji: "🤏",
        image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=600&h=400&fit=crop",
        videoId: "HJg8UgU7OXw",
        description: "Variación del jalón que enfatiza la parte media-baja del dorsal ancho y el braquial.",
        muscles: ["Dorsal ancho", "Romboides", "Bíceps", "Braquial"],
        instructions: [
            "Siéntate en la máquina y agarra la barra con agarre cerrado (manos juntas).",
            "Inclínate ligeramente hacia atrás manteniendo el pecho alto.",
            "Tira de la barra hacia el pecho superior contrayendo la espalda.",
            "Aprieta los omóplatos en la contracción máxima.",
            "Regresa la barra de forma controlada estirando los dorsales."
        ],
        tips: [
            "El agarre cerrado permite mayor rango de movimiento.",
            "No te inclines demasiado hacia atrás.",
            "Concéntrate en tirar con los codos, no con las manos."
        ]
    },
    {
        id: "inverted-row",
        name: "Remo Invertido",
        category: "espalda",
        difficulty: "principiante",
        equipment: "Barra fija o Smith a baja altura",
        emoji: "🔄",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
        videoId: "dRJH9Gepwu0",
        description: "Remo con peso corporal que fortalece la espalda y es accesible para todos los niveles.",
        muscles: ["Dorsal ancho", "Romboides", "Trapecio medio", "Bíceps", "Core"],
        instructions: [
            "Coloca una barra a la altura de la cadera en un rack o Smith.",
            "Agarra la barra con ambas manos y extiende el cuerpo debajo.",
            "Mantén el cuerpo recto como en una plancha invertida.",
            "Tira del pecho hacia la barra retrayendo los omóplatos.",
            "Baja de forma controlada hasta estirar los brazos."
        ],
        tips: [
            "Cuanto más horizontal el cuerpo, más difícil es el ejercicio.",
            "Puedes flexionar las rodillas para hacerlo más fácil.",
            "Excelente alternativa a las dominadas para principiantes."
        ]
    },

    // ==================== NUEVOS - HOMBROS ====================
    {
        id: "cable-lateral-raise",
        name: "Elevación Lateral en Polea",
        category: "hombros",
        difficulty: "intermedio",
        equipment: "Máquina de polea baja",
        emoji: "📡",
        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600&h=400&fit=crop",
        videoId: "NjJuUmTGJQk",
        description: "Elevación lateral con cable que mantiene tensión constante en el deltoides lateral.",
        muscles: ["Deltoides lateral", "Deltoides anterior", "Trapecio superior"],
        instructions: [
            "Colócate de lado a la polea baja y agarra el asa con la mano opuesta.",
            "Mantén el brazo ligeramente flexionado a lo largo del cuerpo.",
            "Levanta el brazo lateralmente hasta la altura del hombro.",
            "Mantén la contracción un segundo arriba.",
            "Baja de forma controlada y repite. Cambia de lado."
        ],
        tips: [
            "El cable proporciona tensión constante, mejor que mancuernas en ciertos ángulos.",
            "No uses impulso del cuerpo para subir el peso.",
            "Trabaja un lado a la vez para mayor concentración."
        ]
    },
    {
        id: "landmine-press",
        name: "Press Landmine",
        category: "hombros",
        difficulty: "intermedio",
        equipment: "Barra con soporte landmine",
        emoji: "💣",
        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600&h=400&fit=crop",
        videoId: "DbneItx-qp4",
        description: "Press con barra anclada al suelo que trabaja hombros de forma segura con un ángulo único.",
        muscles: ["Deltoides anterior", "Deltoides medio", "Tríceps", "Core"],
        instructions: [
            "Coloca un extremo de la barra en un soporte landmine o esquina.",
            "Agarra el otro extremo con una o ambas manos a la altura del hombro.",
            "Empuja la barra hacia arriba y al frente en un movimiento diagonal.",
            "Extiende completamente el brazo en la parte superior.",
            "Baja de forma controlada hasta la posición inicial."
        ],
        tips: [
            "El ángulo diagonal es más amigable para los hombros que el press vertical.",
            "Puedes hacerlo de pie o de rodillas para variar.",
            "Activa el core durante todo el movimiento para estabilizar."
        ]
    },

    // ==================== NUEVOS - BRAZOS ====================
    {
        id: "reverse-curl",
        name: "Curl Inverso",
        category: "brazos",
        difficulty: "principiante",
        equipment: "Barra o mancuernas",
        emoji: "🔃",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
        videoId: "BkERDGNF1os",
        description: "Curl con agarre pronado que fortalece los extensores del antebrazo y el braquiorradial.",
        muscles: ["Braquiorradial", "Extensores del antebrazo", "Bíceps braquial"],
        instructions: [
            "De pie, agarra la barra con agarre pronado (palmas hacia abajo).",
            "Mantén los codos pegados al cuerpo.",
            "Flexiona los codos subiendo la barra hasta los hombros.",
            "Aprieta en la parte superior del movimiento.",
            "Baja de forma controlada sin mover los codos."
        ],
        tips: [
            "Usa menos peso que en el curl regular, los antebrazos son más débiles.",
            "Excelente para desarrollar antebrazos más grandes.",
            "Puedes usar barra EZ para mayor comodidad en las muñecas."
        ]
    },
    {
        id: "close-grip-bench-press",
        name: "Press de Banca Agarre Cerrado",
        category: "brazos",
        difficulty: "intermedio",
        equipment: "Barra y banco plano",
        emoji: "🤝",
        image: "https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=600&h=400&fit=crop",
        videoId: "dlA8DTO-Zro",
        description: "Press de banca con agarre estrecho que enfatiza los tríceps como motor principal.",
        muscles: ["Tríceps", "Pectoral mayor", "Deltoides anterior"],
        instructions: [
            "Acuéstate en el banco plano y agarra la barra con manos separadas 25-30 cm.",
            "Desbloquea la barra y bájala de forma controlada al pecho.",
            "Los codos deben ir pegados al cuerpo durante el descenso.",
            "Empuja la barra hacia arriba enfocándote en los tríceps.",
            "Extiende completamente los brazos en la parte superior."
        ],
        tips: [
            "No pongas las manos demasiado juntas para evitar dolor de muñecas.",
            "Mantén los codos apuntando hacia abajo, no hacia afuera.",
            "Permite mover más peso que otros ejercicios de tríceps."
        ]
    },

    // ==================== NUEVOS - CORE ====================
    {
        id: "side-plank",
        name: "Plancha Lateral",
        category: "core",
        difficulty: "principiante",
        equipment: "Peso corporal",
        emoji: "📏",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        videoId: "kyOeSuh7LLo",
        description: "Ejercicio isométrico lateral que fortalece los oblicuos y mejora la estabilidad del core.",
        muscles: ["Oblicuos", "Transverso del abdomen", "Glúteo medio", "Cuadrado lumbar"],
        instructions: [
            "Acuéstate de lado apoyándote en el antebrazo y el pie inferior.",
            "Eleva las caderas formando una línea recta de cabeza a pies.",
            "Mantén el core activado y las caderas elevadas.",
            "Sostén la posición el tiempo indicado.",
            "Repite del otro lado."
        ],
        tips: [
            "Si es muy difícil, apoya la rodilla inferior en el suelo.",
            "No dejes que las caderas caigan hacia el suelo.",
            "Respira de forma constante durante el ejercicio."
        ]
    },
    {
        id: "flutter-kicks",
        name: "Flutter Kicks (Patadas de Aleteo)",
        category: "core",
        difficulty: "principiante",
        equipment: "Peso corporal",
        emoji: "🦋",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        videoId: "nHhGI26kRsI",
        description: "Ejercicio dinámico para abdominales inferiores que imita el movimiento de patada de natación.",
        muscles: ["Recto abdominal (inferior)", "Flexores de cadera", "Cuádriceps"],
        instructions: [
            "Acuéstate boca arriba con las manos debajo de los glúteos.",
            "Eleva ligeramente ambas piernas del suelo (10-15 cm).",
            "Alterna subiendo y bajando cada pierna con movimientos cortos.",
            "Mantén la espalda baja pegada al suelo.",
            "Continúa el movimiento de forma fluida y constante."
        ],
        tips: [
            "Si la espalda se despega del suelo, eleva más las piernas.",
            "Mantén las piernas rectas durante todo el movimiento.",
            "Controla la respiración para no fatigarte rápidamente."
        ]
    },
    {
        id: "v-ups",
        name: "Abdominales en V (V-Ups)",
        category: "core",
        difficulty: "avanzado",
        equipment: "Peso corporal",
        emoji: "✌️",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        videoId: "c6pnqpVg_58",
        description: "Ejercicio avanzado de core que trabaja tanto la parte superior como inferior del abdomen simultáneamente.",
        muscles: ["Recto abdominal", "Oblicuos", "Flexores de cadera"],
        instructions: [
            "Acuéstate boca arriba con los brazos extendidos por encima de la cabeza.",
            "Simultáneamente, eleva las piernas rectas y el torso del suelo.",
            "Intenta tocar los pies con las manos formando una V.",
            "Mantén las piernas y los brazos rectos durante el movimiento.",
            "Baja de forma controlada a la posición inicial."
        ],
        tips: [
            "Si es muy difícil, flexiona ligeramente las rodillas.",
            "Exhala al subir e inhala al bajar.",
            "Concéntrate en usar el abdomen, no el impulso."
        ]
    },

    // ==================== NUEVOS - CARDIO ====================
    {
        id: "rowing-machine",
        name: "Remo en Máquina (Ergómetro)",
        category: "cardio",
        difficulty: "principiante",
        equipment: "Máquina de remo",
        emoji: "🚣",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
        videoId: "_COmt42Kryg",
        description: "Ejercicio cardiovascular de cuerpo completo que trabaja el 86% de los músculos del cuerpo.",
        muscles: ["Dorsal ancho", "Cuádriceps", "Glúteos", "Bíceps", "Core", "Sistema cardiovascular"],
        instructions: [
            "Siéntate en la máquina con los pies asegurados en las plataformas.",
            "Agarra el mango con ambas manos y brazos extendidos.",
            "Empuja con las piernas primero, luego tira con la espalda y brazos.",
            "Lleva el mango hacia el abdomen con los codos hacia atrás.",
            "Regresa de forma controlada: brazos, torso, luego piernas."
        ],
        tips: [
            "La potencia viene de las piernas (60%), espalda (30%) y brazos (10%).",
            "Mantén la espalda recta durante todo el movimiento.",
            "Comienza con sesiones de 10-15 minutos e incrementa gradualmente."
        ]
    },
    {
        id: "stationary-bike",
        name: "Bicicleta Estática",
        category: "cardio",
        difficulty: "principiante",
        equipment: "Bicicleta estática",
        emoji: "🚲",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
        videoId: "j1z-kVbdqfk",
        description: "Cardio de bajo impacto que fortalece las piernas y mejora la resistencia cardiovascular.",
        muscles: ["Cuádriceps", "Isquiotibiales", "Glúteos", "Gemelos", "Sistema cardiovascular"],
        instructions: [
            "Ajusta el asiento a la altura correcta (rodilla ligeramente flexionada abajo).",
            "Siéntate y coloca los pies en los pedales.",
            "Comienza a pedalear a un ritmo moderado.",
            "Varía la resistencia según el programa elegido.",
            "Mantén una postura erguida sin encorvar la espalda."
        ],
        tips: [
            "Ideal para calentamiento de 5-10 minutos antes de entrenar.",
            "Para HIIT, alterna 30s de sprint con 30s de recuperación.",
            "Bajo impacto, perfecto para personas con problemas articulares."
        ]
    },
    {
        id: "jump-squat",
        name: "Sentadilla con Salto",
        category: "cardio",
        difficulty: "intermedio",
        equipment: "Peso corporal",
        emoji: "⬆️",
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&h=400&fit=crop",
        videoId: "GfsZrCszkwg",
        description: "Ejercicio pliométrico que combina la sentadilla con un salto explosivo para potencia y cardio.",
        muscles: ["Cuádriceps", "Glúteos", "Gemelos", "Core", "Sistema cardiovascular"],
        instructions: [
            "De pie con los pies a la anchura de los hombros.",
            "Baja en sentadilla hasta que los muslos estén paralelos al suelo.",
            "Salta explosivamente hacia arriba extendiendo todo el cuerpo.",
            "Aterriza suavemente con las rodillas ligeramente flexionadas.",
            "Inmediatamente baja en la siguiente sentadilla y repite."
        ],
        tips: [
            "Aterriza siempre suavemente para proteger las rodillas.",
            "Usa los brazos para generar impulso en el salto.",
            "No recomendado si tienes problemas de rodillas."
        ]
    },
    {
        id: "stair-climber",
        name: "Escaladora (Stair Climber)",
        category: "cardio",
        difficulty: "principiante",
        equipment: "Máquina escaladora",
        emoji: "🪜",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
        videoId: "W_g75tCiU1o",
        description: "Máquina cardiovascular que simula subir escaleras, excelente para glúteos y resistencia.",
        muscles: ["Glúteos", "Cuádriceps", "Isquiotibiales", "Gemelos", "Sistema cardiovascular"],
        instructions: [
            "Sube a la máquina y agarra ligeramente los pasamanos.",
            "Comienza a subir escalones a un ritmo moderado.",
            "Mantén la espalda recta y el core activado.",
            "No te apoyes excesivamente en los pasamanos.",
            "Ajusta la velocidad según tu nivel de condición física."
        ],
        tips: [
            "No te inclines sobre los pasamanos, eso reduce la efectividad.",
            "Comienza con 10 minutos e incrementa progresivamente.",
            "Excelente para tonificar glúteos y piernas."
        ]
    },
    {
        id: "skaters",
        name: "Patinadores (Skaters)",
        category: "cardio",
        difficulty: "intermedio",
        equipment: "Peso corporal",
        emoji: "⛸️",
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&h=400&fit=crop",
        videoId: "ahWRtEgpjAk",
        description: "Ejercicio pliométrico lateral que mejora la agilidad, coordinación y resistencia cardiovascular.",
        muscles: ["Glúteos", "Cuádriceps", "Aductores", "Core", "Sistema cardiovascular"],
        instructions: [
            "De pie, salta lateralmente hacia un lado aterrizando con un pie.",
            "Lleva la pierna contraria por detrás cruzando el cuerpo.",
            "Toca el suelo con la mano del mismo lado del pie de apoyo.",
            "Salta inmediatamente hacia el otro lado y repite.",
            "Mantén un ritmo constante y fluido."
        ],
        tips: [
            "Aterriza suavemente con la rodilla ligeramente flexionada.",
            "Mientras más amplio el salto lateral, mayor la intensidad.",
            "Excelente para incluir en circuitos HIIT."
        ]
    },

    // ===== NUEVOS EJERCICIOS (lote 3) =====

    // --- PECHO ---
    {
        id: "weighted-dips-chest",
        name: "Fondos con Peso (Pecho)",
        category: "pecho",
        difficulty: "avanzado",
        equipment: "Barras paralelas y cinturón de lastre",
        emoji: "🏋️‍♂️",
        image: "https://images.unsplash.com/photo-1597347343908-2937e7369eca?w=600&h=400&fit=crop",
        videoId: "TLDfKWB4il0",
        description: "Variante avanzada del fondo que agrega carga externa para maximizar la hipertrofia del pectoral inferior y tríceps.",
        muscles: ["Pectoral mayor (porción inferior)", "Tríceps", "Deltoides anterior"],
        instructions: [
            "Coloca el cinturón de lastre con el peso deseado.",
            "Sujétate de las barras paralelas con los brazos extendidos.",
            "Inclina el torso ligeramente hacia adelante para enfocar el pecho.",
            "Baja hasta que los codos formen un ángulo de 90 grados o ligeramente más.",
            "Empuja hacia arriba de forma controlada hasta la posición inicial."
        ],
        tips: [
            "Inclina el torso hacia adelante para mayor activación del pecho.",
            "No bajes demasiado si sientes dolor en el hombro.",
            "Comienza con poco peso y progresa gradualmente."
        ]
    },
    {
        id: "svend-press",
        name: "Press Svend",
        category: "pecho",
        difficulty: "principiante",
        equipment: "Disco de peso",
        emoji: "🫸",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
        videoId: "PH1jToFW4_8",
        description: "Ejercicio de aislamiento con disco que enfatiza la contracción interna del pectoral mediante presión constante.",
        muscles: ["Pectoral mayor (porción interna)", "Deltoides anterior"],
        instructions: [
            "De pie, sostén un disco con ambas manos al nivel del pecho.",
            "Presiona las palmas contra el disco con fuerza constante.",
            "Extiende los brazos hacia adelante manteniendo la presión.",
            "Regresa el disco al pecho sin dejar de apretar.",
            "Mantén los codos ligeramente por debajo de los hombros."
        ],
        tips: [
            "Concéntrate en la contracción del pecho, no en el peso.",
            "Usa un disco ligero; la tensión constante es lo importante.",
            "Ideal como ejercicio de finalización o activación."
        ]
    },
    {
        id: "incline-push-ups",
        name: "Flexiones Inclinadas",
        category: "pecho",
        difficulty: "principiante",
        equipment: "Banco o superficie elevada",
        emoji: "📐",
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&h=400&fit=crop",
        videoId: "uCTbmCjiF7Y",
        description: "Variante de flexiones con las manos elevadas que reduce la dificultad y enfatiza el pectoral inferior.",
        muscles: ["Pectoral mayor", "Tríceps", "Deltoides anterior"],
        instructions: [
            "Coloca las manos sobre un banco o superficie elevada, separadas al ancho de los hombros.",
            "Extiende las piernas hacia atrás manteniendo el cuerpo recto.",
            "Baja el pecho hacia el banco flexionando los codos.",
            "Empuja hacia arriba hasta la extensión completa de los brazos.",
            "Mantén el core activado durante todo el movimiento."
        ],
        tips: [
            "Cuanto más alta la superficie, más fácil el ejercicio.",
            "Perfecto para principiantes o como calentamiento.",
            "Progresa bajando la altura de la superficie gradualmente."
        ]
    },

    // --- ESPALDA ---
    {
        id: "chin-ups",
        name: "Dominadas Supinas (Chin-ups)",
        category: "espalda",
        difficulty: "intermedio",
        equipment: "Barra de dominadas",
        emoji: "🫴",
        image: "https://images.unsplash.com/photo-1598971639058-a05474e0596f?w=600&h=400&fit=crop",
        videoId: "rfMaANCbzx8",
        description: "Dominada con agarre supino que trabaja intensamente el dorsal ancho y los bíceps simultáneamente.",
        muscles: ["Dorsal ancho", "Bíceps", "Braquial", "Romboides"],
        instructions: [
            "Agarra la barra con las palmas mirando hacia ti, al ancho de los hombros.",
            "Cuelga con los brazos completamente extendidos.",
            "Tira del cuerpo hacia arriba hasta que la barbilla supere la barra.",
            "Baja de forma controlada hasta la extensión completa.",
            "Evita balancearte o usar impulso."
        ],
        tips: [
            "Activa los dorsales antes de tirar con los brazos.",
            "Si no puedes hacer una completa, usa bandas de asistencia.",
            "Mantén los hombros alejados de las orejas."
        ]
    },
    {
        id: "pendlay-row",
        name: "Remo Pendlay",
        category: "espalda",
        difficulty: "avanzado",
        equipment: "Barra olímpica",
        emoji: "🚣",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
        videoId: "IClD2aEUrDE",
        description: "Variante explosiva del remo con barra donde cada repetición parte desde el suelo, maximizando la potencia de la espalda.",
        muscles: ["Dorsal ancho", "Romboides", "Trapecio", "Erectores espinales"],
        instructions: [
            "Coloca la barra en el suelo frente a ti.",
            "Inclínate con el torso paralelo al suelo, espalda recta.",
            "Agarra la barra con agarre prono al ancho de los hombros.",
            "Tira explosivamente la barra hacia el abdomen inferior.",
            "Baja la barra al suelo de forma controlada y repite."
        ],
        tips: [
            "Cada repetición parte desde el suelo, sin rebote.",
            "Mantén la espalda baja neutra en todo momento.",
            "Usa menos peso que en el remo convencional."
        ]
    },
    {
        id: "straight-arm-pulldown",
        name: "Pulldown con Brazos Rectos",
        category: "espalda",
        difficulty: "intermedio",
        equipment: "Polea alta",
        emoji: "⬇️",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
        videoId: "cFs3RTYn14g",
        description: "Ejercicio de aislamiento para el dorsal ancho usando la polea con los brazos extendidos.",
        muscles: ["Dorsal ancho", "Redondo mayor", "Tríceps (porción larga)"],
        instructions: [
            "De pie frente a la polea alta, agarra la barra con ambas manos.",
            "Da un paso atrás e inclina ligeramente el torso hacia adelante.",
            "Con los brazos casi extendidos, lleva la barra hacia los muslos.",
            "Aprieta los dorsales en la posición inferior.",
            "Regresa de forma controlada a la posición inicial."
        ],
        tips: [
            "No dobles los codos; el movimiento es de hombro.",
            "Siente el estiramiento completo del dorsal arriba.",
            "Usa un peso que permita control total del movimiento."
        ]
    },

    // --- HOMBROS ---
    {
        id: "barbell-shrugs",
        name: "Encogimientos con Barra",
        category: "hombros",
        difficulty: "principiante",
        equipment: "Barra",
        emoji: "🔼",
        image: "https://images.unsplash.com/photo-1534368786749-b63e05c92717?w=600&h=400&fit=crop",
        videoId: "stZ9PzFUjME",
        description: "Ejercicio de aislamiento para el trapecio superior. Fundamental para desarrollar la parte alta de la espalda y cuello.",
        muscles: ["Trapecio superior", "Elevador de la escápula"],
        instructions: [
            "De pie, sostén la barra frente a ti con agarre prono al ancho de los hombros.",
            "Eleva los hombros hacia las orejas lo más alto posible.",
            "Mantén la contracción arriba por 1-2 segundos.",
            "Baja los hombros de forma controlada.",
            "No gires ni rotes los hombros durante el movimiento."
        ],
        tips: [
            "No uses impulso ni dobles los codos.",
            "Puedes usar straps si el agarre limita el peso.",
            "Enfócate en la contracción del trapecio, no en el peso."
        ]
    },
    {
        id: "reverse-pec-deck",
        name: "Pec Deck Inverso",
        category: "hombros",
        difficulty: "principiante",
        equipment: "Máquina Pec Deck",
        emoji: "🔄",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop",
        videoId: "o55WEg9yP0g",
        description: "Ejercicio en máquina para el deltoides posterior y la espalda alta, con movimiento guiado y seguro.",
        muscles: ["Deltoides posterior", "Romboides", "Trapecio medio"],
        instructions: [
            "Siéntate mirando hacia la máquina con el pecho contra el respaldo.",
            "Ajusta los brazos a la altura de los hombros.",
            "Abre los brazos hacia atrás en arco, apretando los omóplatos.",
            "Mantén la contracción un instante en la posición final.",
            "Regresa lentamente a la posición inicial."
        ],
        tips: [
            "No uses demasiado peso; prioriza la contracción.",
            "Mantén una ligera flexión en los codos.",
            "Ideal para corregir desbalances posturales."
        ]
    },

    // --- CORE ---
    {
        id: "hollow-body-hold",
        name: "Hollow Body Hold",
        category: "core",
        difficulty: "intermedio",
        equipment: "Peso corporal",
        emoji: "🛡️",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        videoId: "HAfUt2Cco74",
        description: "Isométrico avanzado de core que fortalece toda la cadena anterior manteniendo una posición cóncava.",
        muscles: ["Recto abdominal", "Transverso abdominal", "Oblicuos", "Flexores de cadera"],
        instructions: [
            "Acuéstate boca arriba con los brazos extendidos sobre la cabeza.",
            "Eleva los brazos, cabeza, hombros y piernas del suelo simultáneamente.",
            "La espalda baja debe mantenerse pegada al suelo.",
            "Forma una posición de 'banana' con el cuerpo.",
            "Mantén la posición el tiempo indicado respirando de forma controlada."
        ],
        tips: [
            "Si es muy difícil, empieza con las rodillas flexionadas.",
            "Nunca dejes que la espalda baja se despegue del suelo.",
            "Progresa incrementando el tiempo de cada serie."
        ]
    },

    // --- CARDIO ---
    {
        id: "bear-crawl",
        name: "Bear Crawl (Caminata de Oso)",
        category: "cardio",
        difficulty: "intermedio",
        equipment: "Peso corporal",
        emoji: "🐻",
        image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&h=400&fit=crop",
        videoId: "73FiOMn05YU",
        description: "Ejercicio de cuerpo completo que combina fuerza, coordinación y cardio imitando el movimiento cuadrúpedo.",
        muscles: ["Core", "Hombros", "Cuádriceps", "Tríceps"],
        instructions: [
            "Colócate en posición de cuatro puntos con las rodillas ligeramente elevadas del suelo.",
            "Avanza moviendo la mano derecha y el pie izquierdo simultáneamente.",
            "Luego avanza con la mano izquierda y el pie derecho.",
            "Mantén las caderas bajas y la espalda plana.",
            "Recorre la distancia indicada o el tiempo establecido."
        ],
        tips: [
            "Las rodillas nunca deben tocar el suelo.",
            "Mueve las extremidades opuestas al mismo tiempo.",
            "Empieza lento y aumenta la velocidad progresivamente."
        ]
    },

    // ==================== NUEVOS EJERCICIOS ====================

    // --- PIERNAS ---
    {
        id: "wall-sit",
        name: "Sentadilla en Pared (Wall Sit)",
        category: "piernas",
        difficulty: "principiante",
        equipment: "Peso corporal",
        emoji: "🧱",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        videoId: "E8mYVvKZ61E",
        description: "Ejercicio isométrico que fortalece cuádriceps y glúteos manteniendo la posición de sentadilla contra una pared.",
        muscles: ["Cuádriceps", "Glúteos", "Isquiotibiales", "Core"],
        instructions: [
            "Apoya la espalda completamente contra una pared lisa.",
            "Deslízate hacia abajo hasta que tus muslos queden paralelos al suelo.",
            "Mantén las rodillas a 90 grados sin que sobrepasen las puntas de los pies.",
            "Los pies deben estar separados al ancho de las caderas.",
            "Sostén la posición durante el tiempo indicado."
        ],
        tips: [
            "Respira de forma constante; no contengas la respiración.",
            "Si tus rodillas sobrepasan los dedos, aleja los pies de la pared.",
            "Añade peso en las piernas para aumentar la dificultad."
        ]
    },
    {
        id: "pistol-squat",
        name: "Sentadilla a Una Pierna (Pistol Squat)",
        category: "piernas",
        difficulty: "avanzado",
        equipment: "Peso corporal",
        emoji: "🔫",
        image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&h=400&fit=crop",
        videoId: "qDcniqddTeE",
        description: "Sentadilla unilateral completa que desafía la fuerza, equilibrio y movilidad de todo el tren inferior.",
        muscles: ["Cuádriceps", "Glúteos", "Isquiotibiales", "Core", "Estabilizadores de tobillo"],
        instructions: [
            "Ponte de pie sobre una pierna con la otra extendida al frente.",
            "Extiende los brazos al frente para mantener el equilibrio.",
            "Desciende lentamente flexionando la rodilla de apoyo.",
            "Baja lo más que puedas manteniendo el talón en el suelo.",
            "Empuja con fuerza para volver a la posición inicial."
        ],
        tips: [
            "Practica primero con una silla o TRX como apoyo.",
            "Trabaja la movilidad de tobillo si no logras bajar completo.",
            "Mantén el core activado durante todo el movimiento."
        ]
    },

    // --- HOMBROS ---
    {
        id: "bradford-press",
        name: "Press Bradford",
        category: "hombros",
        difficulty: "intermedio",
        equipment: "Barra",
        emoji: "🔄",
        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600&h=400&fit=crop",
        videoId: "jgm6XPx_9f8",
        description: "Variación del press militar donde la barra alterna entre el frente y la nuca, manteniendo tensión constante en los deltoides.",
        muscles: ["Deltoides anterior", "Deltoides lateral", "Tríceps", "Trapecio superior"],
        instructions: [
            "De pie o sentado, sostén la barra a la altura de los hombros por delante.",
            "Eleva la barra justo por encima de la cabeza sin extender completamente los brazos.",
            "Baja la barra detrás de la cabeza hasta la nuca.",
            "Vuelve a elevar la barra por encima y bájala al frente.",
            "Repite el ciclo de forma fluida y controlada."
        ],
        tips: [
            "Usa un peso ligero; la tensión constante es intensa.",
            "No extiendas los codos por completo en ningún momento.",
            "Excelente como ejercicio de calentamiento de hombros."
        ]
    },
    {
        id: "band-pull-apart",
        name: "Separación con Banda (Band Pull Apart)",
        category: "hombros",
        difficulty: "principiante",
        equipment: "Banda elástica",
        emoji: "🪢",
        image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&h=400&fit=crop",
        videoId: "lmvedD1PFD8",
        description: "Ejercicio con banda elástica que fortalece los deltoides posteriores y mejora la postura al activar la musculatura de la espalda alta.",
        muscles: ["Deltoides posterior", "Romboides", "Trapecio medio", "Infraespinoso"],
        instructions: [
            "Sostén una banda elástica con ambas manos al frente, brazos extendidos a la altura de los hombros.",
            "Con la banda ya tensa en la posición inicial, separa las manos horizontalmente.",
            "Lleva las manos hacia los lados apretando los omóplatos.",
            "Mantén la contracción un instante al final del recorrido.",
            "Regresa lentamente a la posición inicial con control."
        ],
        tips: [
            "Mantén los codos ligeramente flexionados durante todo el movimiento.",
            "Ideal para calentar antes de ejercicios de press.",
            "Aumenta la resistencia usando una banda más gruesa."
        ]
    },

    // --- BRAZOS ---
    {
        id: "dumbbell-tricep-kickback",
        name: "Patada de Tríceps con Mancuerna",
        category: "brazos",
        difficulty: "principiante",
        equipment: "Mancuernas",
        emoji: "🦵",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop",
        videoId: "6SS6K3lAwZ8",
        description: "Ejercicio de aislamiento para tríceps que trabaja la extensión completa del codo con el torso inclinado.",
        muscles: ["Tríceps (cabeza larga)", "Tríceps (cabeza lateral)", "Deltoides posterior"],
        instructions: [
            "Inclina el torso hacia adelante con la espalda recta.",
            "Sostén una mancuerna con el codo pegado al cuerpo y flexionado a 90 grados.",
            "Extiende el brazo hacia atrás hasta que quede completamente recto.",
            "Aprieta el tríceps en la parte superior del movimiento.",
            "Regresa lentamente a la posición inicial."
        ],
        tips: [
            "No balancees el brazo; el movimiento es solo del antebrazo.",
            "Mantén el codo fijo y pegado al torso.",
            "Usa un peso que te permita extensión completa."
        ]
    },
    {
        id: "zottman-curl",
        name: "Curl Zottman",
        category: "brazos",
        difficulty: "intermedio",
        equipment: "Mancuernas",
        emoji: "🔃",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop",
        videoId: "FSGDM9-dZ9w",
        description: "Variación del curl que combina agarre supino al subir y pronado al bajar, trabajando bíceps y antebrazos en un solo movimiento.",
        muscles: ["Bíceps", "Braquiorradial", "Braquial", "Pronadores del antebrazo"],
        instructions: [
            "De pie, sostén una mancuerna en cada mano con agarre supino (palmas arriba).",
            "Flexiona los codos elevando las mancuernas hacia los hombros.",
            "En la parte superior, rota las muñecas hasta tener las palmas hacia abajo (agarre pronado).",
            "Baja las mancuernas lentamente con las palmas hacia abajo.",
            "En la parte inferior, rota de nuevo a agarre supino y repite."
        ],
        tips: [
            "Controla la fase excéntrica (bajada) para maximizar el trabajo del antebrazo.",
            "No uses impulso; mantén los codos pegados al cuerpo.",
            "Empieza con un peso ligero para dominar la rotación."
        ]
    },

    // --- CORE ---
    {
        id: "scissor-flutter-kicks",
        name: "Patadas de Tijera",
        category: "core",
        difficulty: "principiante",
        equipment: "Peso corporal",
        emoji: "🦶",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        videoId: "ANVdMDaYRts",
        description: "Ejercicio de core donde alternas pequeñas patadas con las piernas elevadas, activando el abdomen inferior de forma continua.",
        muscles: ["Recto abdominal inferior", "Flexores de cadera", "Cuádriceps", "Oblicuos"],
        instructions: [
            "Acuéstate boca arriba con las manos debajo de los glúteos o a los lados.",
            "Eleva ambas piernas unos 15 cm del suelo.",
            "Alterna subiendo y bajando cada pierna en un movimiento de tijera.",
            "Mantén las piernas rectas y el abdomen contraído.",
            "Continúa el movimiento de forma rítmica durante el tiempo indicado."
        ],
        tips: [
            "Presiona la espalda baja contra el suelo en todo momento.",
            "Si sientes dolor lumbar, eleva más las piernas.",
            "Respira de forma constante; no contengas el aire."
        ]
    },
    {
        id: "toe-touches",
        name: "Toque de Puntas (Toe Touches)",
        category: "core",
        difficulty: "principiante",
        equipment: "Peso corporal",
        emoji: "👆",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        videoId: "rHEzFsLf4-o",
        description: "Ejercicio abdominal donde elevas el torso para tocar las puntas de los pies con las piernas verticales, activando intensamente el recto abdominal.",
        muscles: ["Recto abdominal", "Oblicuos", "Flexores de cadera"],
        instructions: [
            "Acuéstate boca arriba y eleva las piernas rectas hacia el techo.",
            "Extiende los brazos hacia arriba apuntando a los pies.",
            "Contrae el abdomen para elevar los hombros y la espalda alta del suelo.",
            "Intenta tocar las puntas de los pies con las manos.",
            "Baja lentamente a la posición inicial y repite."
        ],
        tips: [
            "No tires del cuello; el movimiento viene del abdomen.",
            "Mantén las piernas lo más verticales posible.",
            "Exhala al subir e inhala al bajar."
        ]
    },

    // --- CARDIO ---
    {
        id: "skater-jumps",
        name: "Saltos de Patinador (Skater Jumps)",
        category: "cardio",
        difficulty: "intermedio",
        equipment: "Peso corporal",
        emoji: "⛸️",
        image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&h=400&fit=crop",
        videoId: "udcgifnck9Y",
        description: "Ejercicio pliométrico lateral que imita el movimiento de un patinador, mejorando potencia, agilidad y resistencia cardiovascular.",
        muscles: ["Glúteos", "Cuádriceps", "Aductores", "Core", "Pantorrillas"],
        instructions: [
            "De pie, salta lateralmente hacia la derecha aterrizando sobre el pie derecho.",
            "Lleva la pierna izquierda cruzada por detrás como un patinador.",
            "Balancea los brazos en la dirección contraria al salto.",
            "Inmediatamente salta hacia el lado izquierdo y repite.",
            "Mantén un ritmo fluido y controlado en cada salto."
        ],
        tips: [
            "Aterriza suavemente flexionando la rodilla para absorber el impacto.",
            "Empieza con saltos cortos y aumenta la distancia progresivamente.",
            "Mantén el core activado para estabilizar el tronco."
        ]
    },
    {
        id: "shadow-boxing",
        name: "Boxeo de Sombra (Shadow Boxing)",
        category: "cardio",
        difficulty: "principiante",
        equipment: "Peso corporal",
        emoji: "🥊",
        image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop",
        videoId: "bk0PNntRgqw",
        description: "Ejercicio cardiovascular que simula movimientos de boxeo sin contacto, mejorando coordinación, velocidad y resistencia.",
        muscles: ["Deltoides", "Tríceps", "Core", "Cuádriceps", "Pantorrillas"],
        instructions: [
            "Adopta una postura de guardia con los pies escalonados y las manos arriba.",
            "Lanza combinaciones de golpes: jab, cross, gancho y uppercut.",
            "Muévete constantemente con pequeños pasos laterales y hacia adelante y atrás.",
            "Incorpora esquivas y desplazamientos entre combinaciones.",
            "Mantén un ritmo alto durante el tiempo indicado."
        ],
        tips: [
            "Mantén las manos arriba en todo momento como en una guardia real.",
            "Gira las caderas al lanzar golpes para generar más potencia.",
            "Empieza lento para dominar la técnica antes de acelerar."
        ]
    }
];

