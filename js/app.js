// ===== GymTracker Pro - Main Application =====
(function () {
    "use strict";

    // ===== STATE =====
    const STATE = {
        currentPage: "dashboard",
        routines: JSON.parse(localStorage.getItem("gym_routines") || "[]"),
        workoutLog: JSON.parse(localStorage.getItem("gym_workout_log") || "[]"),
        weightLog: JSON.parse(localStorage.getItem("gym_weight_log") || "[]"),
        theme: localStorage.getItem("gym_theme") || "light",
        editingRoutineId: null,
        activeWorkout: null,
        workoutTimerInterval: null,
    };

    // ===== HELPERS =====
    function saveState() {
        localStorage.setItem("gym_routines", JSON.stringify(STATE.routines));
        localStorage.setItem("gym_workout_log", JSON.stringify(STATE.workoutLog));
        localStorage.setItem("gym_weight_log", JSON.stringify(STATE.weightLog));
        localStorage.setItem("gym_theme", STATE.theme);
    }

    function $(selector) {
        return document.querySelector(selector);
    }

    function $$(selector) {
        return document.querySelectorAll(selector);
    }

    function showToast(message, type = "success") {
        const container = $("#toast-container");
        const toast = document.createElement("div");
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    function formatDate(dateStr) {
        const d = new Date(dateStr + "T00:00:00");
        return d.toLocaleDateString("es-ES", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    }

    function formatDuration(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        if (h > 0) return `${h}h ${m}m`;
        if (m > 0) return `${m}m ${s}s`;
        return `${s}s`;
    }

    function generateId() {
        return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    }

    function sanitize(str) {
        const div = document.createElement("div");
        div.textContent = str;
        return div.innerHTML;
    }

    // ===== NAVIGATION =====
    function initNavigation() {
        $$(".nav-item").forEach((item) => {
            item.addEventListener("click", () => {
                navigateTo(item.dataset.page);
            });
        });

        // Mobile menu
        $("#btn-menu").addEventListener("click", () => {
            $("#sidebar").classList.toggle("open");
            $("#sidebar-overlay").classList.toggle("open");
        });

        $("#sidebar-overlay").addEventListener("click", () => {
            $("#sidebar").classList.remove("open");
            $("#sidebar-overlay").classList.remove("open");
        });
    }

    function navigateTo(page) {
        STATE.currentPage = page;

        $$(".nav-item").forEach((i) => i.classList.remove("active"));
        $(`.nav-item[data-page="${page}"]`).classList.add("active");

        $$(".page").forEach((p) => p.classList.remove("active"));
        $(`#page-${page}`).classList.add("active");

        // Close mobile sidebar
        $("#sidebar").classList.remove("open");
        $("#sidebar-overlay").classList.remove("open");

        // Refresh page data
        if (page === "dashboard") renderDashboard();
        if (page === "catalog") renderCatalog();
        if (page === "routines") renderRoutines();
        if (page === "log") renderLog();
        if (page === "weight") renderWeight();
    }

    // ===== THEME =====
    function initTheme() {
        if (STATE.theme === "dark") {
            document.body.setAttribute("data-theme", "dark");
            $("#btn-toggle-theme").textContent = "☀️ Modo Claro";
        }

        $("#btn-toggle-theme").addEventListener("click", () => {
            STATE.theme = STATE.theme === "light" ? "dark" : "light";
            if (STATE.theme === "dark") {
                document.body.setAttribute("data-theme", "dark");
                $("#btn-toggle-theme").textContent = "☀️ Modo Claro";
            } else {
                document.body.removeAttribute("data-theme");
                $("#btn-toggle-theme").textContent = "🌙 Modo Oscuro";
            }
            saveState();
            // Re-render charts with new theme
            renderDashboard();
            if (STATE.currentPage === "weight") renderWeight();
        });
    }

    // ===== DASHBOARD =====
    let dashboardChart = null;

    function renderDashboard() {
        // Stats
        $("#stat-workouts").textContent = STATE.workoutLog.length;
        $("#stat-routines").textContent = STATE.routines.length;

        // Streak
        const streak = calculateStreak();
        $("#stat-streak").textContent = streak;

        // Current weight
        if (STATE.weightLog.length > 0) {
            const sorted = [...STATE.weightLog].sort(
                (a, b) => new Date(a.date) - new Date(b.date)
            );
            $("#stat-weight").textContent = sorted[sorted.length - 1].value;
        }

        // Recent workouts
        const recentContainer = $("#recent-workouts");
        if (STATE.workoutLog.length === 0) {
            recentContainer.innerHTML =
                '<p class="empty-state">No hay entrenamientos registrados aún.</p>';
        } else {
            const recent = [...STATE.workoutLog]
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 5);
            recentContainer.innerHTML = recent
                .map(
                    (w) => `
                <div class="recent-item">
                    <div>
                        <strong>${sanitize(w.routineName)}</strong><br>
                        <span>${w.exercises.length} ejercicios</span>
                    </div>
                    <div style="text-align:right">
                        <span>${formatDate(w.date)}</span><br>
                        <span style="color:var(--accent)">${formatDuration(w.duration)}</span>
                    </div>
                </div>
            `
                )
                .join("");
        }

        // Weight chart
        renderDashboardWeightChart();
    }

    function calculateStreak() {
        if (STATE.workoutLog.length === 0) return 0;

        const dates = [
            ...new Set(STATE.workoutLog.map((w) => w.date)),
        ].sort((a, b) => new Date(b) - new Date(a));

        let streak = 0;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = 0; i < dates.length; i++) {
            const expected = new Date(today);
            expected.setDate(expected.getDate() - i);
            const expectedStr = expected.toISOString().split("T")[0];

            if (dates.includes(expectedStr)) {
                streak++;
            } else {
                break;
            }
        }
        return streak;
    }

    function renderDashboardWeightChart() {
        const canvas = $("#dashboard-weight-chart");
        if (!canvas) return;

        if (dashboardChart) dashboardChart.destroy();

        if (STATE.weightLog.length < 2) {
            dashboardChart = new Chart(canvas, {
                type: "line",
                data: {
                    labels: ["Sin datos"],
                    datasets: [
                        {
                            data: [0],
                            borderColor: "rgba(108,92,231,0.3)",
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                },
            });
            return;
        }

        const sorted = [...STATE.weightLog].sort(
            (a, b) => new Date(a.date) - new Date(b.date)
        );
        const labels = sorted.map((w) => formatDate(w.date));
        const data = sorted.map((w) => w.value);
        const textColor =
            STATE.theme === "dark" ? "#a0a0b0" : "#636e72";

        dashboardChart = new Chart(canvas, {
            type: "line",
            data: {
                labels,
                datasets: [
                    {
                        label: "Peso (kg)",
                        data,
                        borderColor: "#6c5ce7",
                        backgroundColor: "rgba(108,92,231,0.1)",
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: "#6c5ce7",
                        pointRadius: 4,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                },
                scales: {
                    x: { ticks: { color: textColor }, grid: { display: false } },
                    y: {
                        ticks: { color: textColor },
                        grid: { color: "rgba(0,0,0,0.05)" },
                    },
                },
            },
        });
    }

    // ===== CATALOG =====
    function renderCatalog(filter = "all", search = "") {
        const grid = $("#exercise-grid");
        let exercises = EXERCISES_DB;

        if (filter !== "all") {
            exercises = exercises.filter((e) => e.category === filter);
        }

        if (search.trim()) {
            const q = search.toLowerCase();
            exercises = exercises.filter(
                (e) =>
                    e.name.toLowerCase().includes(q) ||
                    e.category.toLowerCase().includes(q) ||
                    e.muscles.some((m) => m.toLowerCase().includes(q))
            );
        }

        if (exercises.length === 0) {
            grid.innerHTML =
                '<p class="empty-state">No se encontraron ejercicios.</p>';
            return;
        }

        grid.innerHTML = exercises
            .map(
                (ex) => `
            <div class="exercise-card" data-exercise-id="${ex.id}">
                <div class="exercise-card-media">
                    <img src="${ex.image}" alt="${sanitize(ex.name)}" loading="lazy"
                         onerror="this.parentElement.innerHTML='<span style=\\'font-size:60px\\'>${ex.emoji}</span>'">
                </div>
                <div class="exercise-card-body">
                    <h3>${sanitize(ex.name)}</h3>
                    <p>${sanitize(ex.description)}</p>
                    <div class="exercise-tags">
                        <span class="tag">${capitalize(ex.category)}</span>
                        <span class="tag difficulty-${ex.difficulty}">${capitalize(ex.difficulty)}</span>
                        <span class="tag">${sanitize(ex.equipment)}</span>
                    </div>
                </div>
            </div>
        `
            )
            .join("");

        // Card click handlers
        grid.querySelectorAll(".exercise-card").forEach((card) => {
            card.addEventListener("click", () => {
                openExerciseDetail(card.dataset.exerciseId);
            });
        });
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function initCatalogFilters() {
        $$(".filter-chips .chip").forEach((chip) => {
            chip.addEventListener("click", () => {
                $$(".filter-chips .chip").forEach((c) =>
                    c.classList.remove("active")
                );
                chip.classList.add("active");
                renderCatalog(chip.dataset.filter, $("#search-exercises").value);
            });
        });

        $("#search-exercises").addEventListener("input", (e) => {
            const activeFilter =
                $(".filter-chips .chip.active")?.dataset.filter || "all";
            renderCatalog(activeFilter, e.target.value);
        });
    }

    function isHttpProtocol() {
        return window.location.protocol === "http:" || window.location.protocol === "https:";
    }

    function buildVideoHtml(videoId, name, emoji) {
        if (!videoId) return "";

        const thumbUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

        return `
            <div class="exercise-detail-media video-thumbnail-wrapper" data-video-id="${videoId}">
                <img src="${thumbUrl}" alt="${sanitize(name)}" class="video-thumbnail"
                     onerror="this.parentElement.innerHTML='<div class=\\'media-placeholder\\'>${emoji}</div>'">
                <div class="video-play-overlay">
                    <div class="play-btn-circle">
                        <svg viewBox="0 0 68 48" width="68" height="48">
                            <path class="play-btn-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0,34,0,34,0S12.21,0,6.9,1.55C3.97,2.33,2.27,4.81,1.48,7.74C0,13.05,0,24,0,24s0,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19C12.21,48,34,48,34,48s21.79,0,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C68,34.95,68,24,68,24S68,13.05,66.52,7.74z" fill="#FF0000"></path>
                            <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                        </svg>
                    </div>
                </div>
                <a href="${watchUrl}" target="_blank" rel="noopener noreferrer" class="video-external-link" title="Abrir en YouTube">
                    🔗 Ver en YouTube
                </a>
            </div>
        `;
    }

    function handleVideoClick(container) {
        const wrapper = container.querySelector(".video-thumbnail-wrapper");
        if (!wrapper) return;

        wrapper.addEventListener("click", function (e) {
            // Don't intercept clicks on the external link
            if (e.target.closest(".video-external-link")) return;

            const videoId = this.dataset.videoId;
            if (!videoId) return;

            if (isHttpProtocol()) {
                // Served via HTTP — load iframe inline
                this.innerHTML = `
                    <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                            title="Video del ejercicio"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>`;
            } else {
                // Opened from file:// — open in new tab
                window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank", "noopener,noreferrer");
            }
        });
    }

    function openExerciseDetail(exerciseId) {
        const ex = EXERCISES_DB.find((e) => e.id === exerciseId);
        if (!ex) return;

        const detail = $("#exercise-detail");

        let mediaHtml;
        if (ex.videoId) {
            mediaHtml = buildVideoHtml(ex.videoId, ex.name, ex.emoji);
        } else if (ex.image) {
            mediaHtml = `
                <div class="exercise-detail-media">
                    <img src="${ex.image}" alt="${sanitize(ex.name)}"
                         onerror="this.parentElement.innerHTML='<div class=\\'media-placeholder\\'>${ex.emoji}</div>'">
                </div>`;
        } else {
            mediaHtml = `
                <div class="exercise-detail-media">
                    <div class="media-placeholder">${ex.emoji}</div>
                </div>`;
        }

        detail.innerHTML = `
            ${mediaHtml}
            <h2>${ex.emoji} ${sanitize(ex.name)}</h2>
            <div class="detail-tags">
                <span class="tag">${capitalize(ex.category)}</span>
                <span class="tag difficulty-${ex.difficulty}">${capitalize(ex.difficulty)}</span>
                <span class="tag">${sanitize(ex.equipment)}</span>
            </div>
            
            <div class="detail-section">
                <h4>📝 Descripción</h4>
                <p>${sanitize(ex.description)}</p>
            </div>
            
            <div class="detail-section">
                <h4>💪 Músculos Trabajados</h4>
                <div class="muscles-visual">
                    ${ex.muscles.map((m) => `<span class="muscle-badge">${sanitize(m)}</span>`).join("")}
                </div>
            </div>
            
            <div class="detail-section">
                <h4>📋 Instrucciones</h4>
                <ol>
                    ${ex.instructions.map((i) => `<li>${sanitize(i)}</li>`).join("")}
                </ol>
            </div>
            
            <div class="detail-section">
                <h4>💡 Consejos</h4>
                <ul>
                    ${ex.tips.map((t) => `<li>${sanitize(t)}</li>`).join("")}
                </ul>
            </div>
        `;

        // Attach video click handler
        handleVideoClick(detail);

        openModal("exercise-modal");
    }

    // ===== MODALS =====
    function openModal(modalId) {
        $(`#${modalId}`).classList.add("open");
        document.body.style.overflow = "hidden";
    }

    function closeModal(modalId) {
        $(`#${modalId}`).classList.remove("open");
        document.body.style.overflow = "";
    }

    function initModals() {
        $("#close-exercise-modal").addEventListener("click", () =>
            closeModal("exercise-modal")
        );
        $("#close-routine-modal").addEventListener("click", () =>
            closeModal("routine-modal")
        );
        $("#close-picker-modal").addEventListener("click", () =>
            closeModal("exercise-picker-modal")
        );
        $("#close-workout-modal").addEventListener("click", () => {
            if (STATE.activeWorkout) {
                if (
                    confirm(
                        "¿Seguro que quieres salir? El entrenamiento en curso se perderá."
                    )
                ) {
                    stopWorkoutTimer();
                    STATE.activeWorkout = null;
                    closeModal("workout-modal");
                }
            } else {
                closeModal("workout-modal");
            }
        });

        // Close modals on overlay click
        $$(".modal").forEach((modal) => {
            modal.addEventListener("click", (e) => {
                if (e.target === modal) {
                    const closeBtn = modal.querySelector(".modal-close");
                    if (closeBtn) closeBtn.click();
                }
            });
        });
    }

    // ===== ROUTINES =====
    let tempRoutineExercises = [];

    function renderRoutines() {
        const container = $("#routines-list");

        if (STATE.routines.length === 0) {
            container.innerHTML =
                '<p class="empty-state">No tienes rutinas creadas. ¡Crea tu primera rutina!</p>';
            return;
        }

        container.innerHTML = STATE.routines
            .map(
                (routine) => `
            <div class="routine-card" data-routine-id="${routine.id}">
                <div class="routine-card-header">
                    <h3>${sanitize(routine.name)}</h3>
                    <div class="routine-actions">
                        <button class="btn-icon btn-edit-routine" data-id="${routine.id}" title="Editar">✏️</button>
                        <button class="btn-icon btn-delete-routine" data-id="${routine.id}" title="Eliminar">🗑️</button>
                    </div>
                </div>
                ${routine.description ? `<p class="routine-desc">${sanitize(routine.description)}</p>` : ""}
                <div class="routine-exercise-preview">
                    ${routine.exercises
                        .map((re) => {
                            const ex = EXERCISES_DB.find(
                                (e) => e.id === re.exerciseId
                            );
                            return ex
                                ? `<span class="routine-exercise-chip">${ex.emoji} ${sanitize(ex.name)}</span>`
                                : "";
                        })
                        .join("")}
                </div>
                <p style="font-size:13px;color:var(--text-light);margin-bottom:12px">
                    ${routine.exercises.length} ejercicios · 
                    ${routine.exercises.reduce((sum, re) => sum + (re.sets || 3), 0)} series totales
                </p>
                <button class="btn-primary btn-start-workout" data-id="${routine.id}">
                    🏋️ Iniciar Entrenamiento
                </button>
            </div>
        `
            )
            .join("");

        // Event handlers
        container.querySelectorAll(".btn-edit-routine").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                editRoutine(btn.dataset.id);
            });
        });

        container.querySelectorAll(".btn-delete-routine").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                deleteRoutine(btn.dataset.id);
            });
        });

        container.querySelectorAll(".btn-start-workout").forEach((btn) => {
            btn.addEventListener("click", () => {
                startWorkout(btn.dataset.id);
            });
        });
    }

    function initRoutineForm() {
        $("#btn-new-routine").addEventListener("click", () => {
            STATE.editingRoutineId = null;
            tempRoutineExercises = [];
            $("#routine-modal-title").textContent = "Nueva Rutina";
            $("#routine-form").reset();
            renderRoutineExercises();
            openModal("routine-modal");
        });

        $("#btn-cancel-routine").addEventListener("click", () => {
            closeModal("routine-modal");
        });

        $("#routine-form").addEventListener("submit", (e) => {
            e.preventDefault();
            saveRoutine();
        });

        $("#btn-add-exercise-to-routine").addEventListener("click", () => {
            openExercisePicker();
        });
    }

    function renderRoutineExercises() {
        const container = $("#routine-exercises");

        if (tempRoutineExercises.length === 0) {
            container.innerHTML =
                '<p class="empty-state" style="padding:16px">Agrega ejercicios a tu rutina</p>';
            return;
        }

        container.innerHTML = tempRoutineExercises
            .map((re, index) => {
                const ex = EXERCISES_DB.find((e) => e.id === re.exerciseId);
                if (!ex) return "";
                return `
                <div class="routine-exercise-item" data-index="${index}">
                    <span style="font-size:24px">${ex.emoji}</span>
                    <div class="exercise-info">
                        <strong>${sanitize(ex.name)}</strong>
                        <small>${capitalize(ex.category)} · ${capitalize(ex.difficulty)}</small>
                    </div>
                    <div class="exercise-config">
                        <div>
                            <label>Series</label>
                            <input type="number" class="input-sets" value="${re.sets}" min="1" max="20" data-index="${index}">
                        </div>
                        <div>
                            <label>Reps</label>
                            <input type="number" class="input-reps" value="${re.reps}" min="1" max="100" data-index="${index}">
                        </div>
                    </div>
                    <button type="button" class="btn-icon btn-remove-exercise" data-index="${index}">❌</button>
                </div>
            `;
            })
            .join("");

        // Event handlers
        container.querySelectorAll(".input-sets").forEach((input) => {
            input.addEventListener("change", (e) => {
                tempRoutineExercises[e.target.dataset.index].sets = parseInt(
                    e.target.value
                ) || 3;
            });
        });

        container.querySelectorAll(".input-reps").forEach((input) => {
            input.addEventListener("change", (e) => {
                tempRoutineExercises[e.target.dataset.index].reps = parseInt(
                    e.target.value
                ) || 10;
            });
        });

        container.querySelectorAll(".btn-remove-exercise").forEach((btn) => {
            btn.addEventListener("click", () => {
                tempRoutineExercises.splice(parseInt(btn.dataset.index), 1);
                renderRoutineExercises();
            });
        });
    }

    function openExercisePicker() {
        const container = $("#picker-list");
        const searchInput = $("#picker-search");
        searchInput.value = "";

        function renderPickerList(search = "") {
            let exercises = EXERCISES_DB;
            if (search) {
                const q = search.toLowerCase();
                exercises = exercises.filter(
                    (e) =>
                        e.name.toLowerCase().includes(q) ||
                        e.category.toLowerCase().includes(q)
                );
            }

            container.innerHTML = exercises
                .map(
                    (ex) => `
                <div class="picker-item" data-exercise-id="${ex.id}">
                    <span class="picker-emoji">${ex.emoji}</span>
                    <div class="picker-info">
                        <h4>${sanitize(ex.name)}</h4>
                        <p>${capitalize(ex.category)} · ${capitalize(ex.difficulty)}</p>
                    </div>
                </div>
            `
                )
                .join("");

            container.querySelectorAll(".picker-item").forEach((item) => {
                item.addEventListener("click", () => {
                    tempRoutineExercises.push({
                        exerciseId: item.dataset.exerciseId,
                        sets: 3,
                        reps: 10,
                    });
                    renderRoutineExercises();
                    closeModal("exercise-picker-modal");
                });
            });
        }

        searchInput.addEventListener("input", (e) =>
            renderPickerList(e.target.value)
        );
        renderPickerList();
        openModal("exercise-picker-modal");
    }

    function saveRoutine() {
        const name = $("#routine-name").value.trim();
        const description = $("#routine-description").value.trim();

        if (!name) {
            showToast("El nombre de la rutina es obligatorio", "error");
            return;
        }

        if (tempRoutineExercises.length === 0) {
            showToast("Agrega al menos un ejercicio a la rutina", "error");
            return;
        }

        if (STATE.editingRoutineId) {
            const index = STATE.routines.findIndex(
                (r) => r.id === STATE.editingRoutineId
            );
            if (index !== -1) {
                STATE.routines[index].name = name;
                STATE.routines[index].description = description;
                STATE.routines[index].exercises = [...tempRoutineExercises];
                showToast("Rutina actualizada correctamente");
            }
        } else {
            STATE.routines.push({
                id: generateId(),
                name,
                description,
                exercises: [...tempRoutineExercises],
                createdAt: new Date().toISOString(),
            });
            showToast("Rutina creada correctamente");
        }

        saveState();
        closeModal("routine-modal");
        renderRoutines();
    }

    function editRoutine(routineId) {
        const routine = STATE.routines.find((r) => r.id === routineId);
        if (!routine) return;

        STATE.editingRoutineId = routineId;
        tempRoutineExercises = [...routine.exercises];
        $("#routine-modal-title").textContent = "Editar Rutina";
        $("#routine-name").value = routine.name;
        $("#routine-description").value = routine.description || "";
        renderRoutineExercises();
        openModal("routine-modal");
    }

    function deleteRoutine(routineId) {
        if (!confirm("¿Estás seguro de eliminar esta rutina?")) return;

        STATE.routines = STATE.routines.filter((r) => r.id !== routineId);
        saveState();
        renderRoutines();
        showToast("Rutina eliminada", "info");
    }

    // ===== WORKOUT (Active Training) =====
    function startWorkout(routineId) {
        const routine = STATE.routines.find((r) => r.id === routineId);
        if (!routine) return;

        STATE.activeWorkout = {
            routineId: routine.id,
            routineName: routine.name,
            startTime: Date.now(),
            exercises: routine.exercises.map((re) => ({
                exerciseId: re.exerciseId,
                sets: Array.from({ length: re.sets }, () => ({
                    weight: "",
                    reps: re.reps,
                    completed: false,
                })),
            })),
        };

        renderWorkout();
        openModal("workout-modal");
        startWorkoutTimer();
    }

    function renderWorkout() {
        const workout = STATE.activeWorkout;
        if (!workout) return;

        const content = $("#workout-content");

        content.innerHTML = `
            <div class="workout-timer">
                <div class="timer-label">Tiempo de entrenamiento</div>
                <div class="timer-value" id="workout-timer-display">00:00</div>
            </div>
            <h2>🏋️ ${sanitize(workout.routineName)}</h2>
            ${workout.exercises
                .map((we, exIdx) => {
                    const ex = EXERCISES_DB.find(
                        (e) => e.id === we.exerciseId
                    );
                    if (!ex) return "";
                    return `
                    <div class="workout-exercise-block">
                        <h4>${ex.emoji} ${sanitize(ex.name)}</h4>
                        ${we.sets
                            .map(
                                (set, setIdx) => `
                            <div class="set-row">
                                <span>Serie ${setIdx + 1}</span>
                                <div>
                                    <label>Peso (kg)</label>
                                    <input type="number" step="0.5" min="0" placeholder="0" 
                                           class="workout-weight" data-ex="${exIdx}" data-set="${setIdx}"
                                           value="${set.weight}">
                                </div>
                                <div>
                                    <label>Reps</label>
                                    <input type="number" min="0" placeholder="${set.reps}" 
                                           class="workout-reps" data-ex="${exIdx}" data-set="${setIdx}"
                                           value="${set.reps}">
                                </div>
                                <button class="btn-icon workout-set-check ${set.completed ? "completed" : ""}" 
                                        data-ex="${exIdx}" data-set="${setIdx}"
                                        style="${set.completed ? "opacity:1;transform:scale(1.2)" : ""}">
                                    ${set.completed ? "✅" : "⬜"}
                                </button>
                            </div>
                        `
                            )
                            .join("")}
                    </div>
                `;
                })
                .join("")}
            <div class="form-actions" style="margin-top:24px">
                <button class="btn-danger" id="btn-cancel-workout">Cancelar Entrenamiento</button>
                <button class="btn-primary" id="btn-finish-workout">✅ Terminar Entrenamiento</button>
            </div>
        `;

        // Event handlers
        content.querySelectorAll(".workout-weight").forEach((input) => {
            input.addEventListener("change", (e) => {
                const exIdx = parseInt(e.target.dataset.ex);
                const setIdx = parseInt(e.target.dataset.set);
                workout.exercises[exIdx].sets[setIdx].weight = e.target.value;
            });
        });

        content.querySelectorAll(".workout-reps").forEach((input) => {
            input.addEventListener("change", (e) => {
                const exIdx = parseInt(e.target.dataset.ex);
                const setIdx = parseInt(e.target.dataset.set);
                workout.exercises[exIdx].sets[setIdx].reps =
                    parseInt(e.target.value) || 0;
            });
        });

        content.querySelectorAll(".workout-set-check").forEach((btn) => {
            btn.addEventListener("click", () => {
                const exIdx = parseInt(btn.dataset.ex);
                const setIdx = parseInt(btn.dataset.set);
                const set = workout.exercises[exIdx].sets[setIdx];
                set.completed = !set.completed;
                btn.textContent = set.completed ? "✅" : "⬜";
                btn.style.opacity = set.completed ? "1" : "0.6";
                btn.style.transform = set.completed ? "scale(1.2)" : "scale(1)";
            });
        });

        $("#btn-cancel-workout").addEventListener("click", () => {
            if (confirm("¿Cancelar el entrenamiento? Se perderá el progreso.")) {
                stopWorkoutTimer();
                STATE.activeWorkout = null;
                closeModal("workout-modal");
            }
        });

        $("#btn-finish-workout").addEventListener("click", () => {
            finishWorkout();
        });
    }

    function startWorkoutTimer() {
        STATE.workoutTimerInterval = setInterval(() => {
            if (!STATE.activeWorkout) return;
            const elapsed = Math.floor(
                (Date.now() - STATE.activeWorkout.startTime) / 1000
            );
            const display = $("#workout-timer-display");
            if (display) {
                const m = Math.floor(elapsed / 60)
                    .toString()
                    .padStart(2, "0");
                const s = (elapsed % 60).toString().padStart(2, "0");
                display.textContent = `${m}:${s}`;
            }
        }, 1000);
    }

    function stopWorkoutTimer() {
        if (STATE.workoutTimerInterval) {
            clearInterval(STATE.workoutTimerInterval);
            STATE.workoutTimerInterval = null;
        }
    }

    function finishWorkout() {
        const workout = STATE.activeWorkout;
        if (!workout) return;

        stopWorkoutTimer();

        const duration = Math.floor(
            (Date.now() - workout.startTime) / 1000
        );

        const logEntry = {
            id: generateId(),
            routineId: workout.routineId,
            routineName: workout.routineName,
            date: new Date().toISOString().split("T")[0],
            duration,
            exercises: workout.exercises.map((we) => {
                const ex = EXERCISES_DB.find(
                    (e) => e.id === we.exerciseId
                );
                return {
                    exerciseId: we.exerciseId,
                    name: ex ? ex.name : "Ejercicio desconocido",
                    sets: we.sets.filter((s) => s.completed),
                };
            }),
        };

        STATE.workoutLog.push(logEntry);
        STATE.activeWorkout = null;
        saveState();

        closeModal("workout-modal");
        showToast("¡Entrenamiento completado! 💪");
        renderDashboard();
    }

    // ===== WORKOUT LOG =====
    function renderLog() {
        const container = $("#workout-log");

        let logs = [...STATE.workoutLog].sort(
            (a, b) => new Date(b.date) - new Date(a.date)
        );

        // Apply date filters
        const from = $("#log-date-from").value;
        const to = $("#log-date-to").value;
        if (from) logs = logs.filter((l) => l.date >= from);
        if (to) logs = logs.filter((l) => l.date <= to);

        if (logs.length === 0) {
            container.innerHTML =
                '<p class="empty-state">No hay entrenamientos registrados.</p>';
            return;
        }

        container.innerHTML = logs
            .map(
                (entry) => `
            <div class="log-entry">
                <div class="log-entry-header">
                    <div>
                        <h3>${sanitize(entry.routineName)}</h3>
                        <span class="log-date">${formatDate(entry.date)}</span>
                    </div>
                    <span class="log-duration">⏱️ ${formatDuration(entry.duration)}</span>
                </div>
                ${entry.exercises
                    .map(
                        (ex) => `
                    <div class="log-exercise-summary">
                        <strong>${sanitize(ex.name)}</strong>
                        <div class="sets-summary">
                            ${ex.sets
                                .map(
                                    (s, i) =>
                                        `Serie ${i + 1}: ${s.weight || 0}kg × ${s.reps} reps`
                                )
                                .join(" · ")}
                        </div>
                    </div>
                `
                    )
                    .join("")}
                <div class="log-entry-footer">
                    <button class="btn-danger btn-sm btn-delete-log" data-id="${entry.id}">🗑️ Eliminar</button>
                </div>
            </div>
        `
            )
            .join("");

        container.querySelectorAll(".btn-delete-log").forEach((btn) => {
            btn.addEventListener("click", () => {
                if (confirm("¿Eliminar este registro de entrenamiento?")) {
                    STATE.workoutLog = STATE.workoutLog.filter(
                        (w) => w.id !== btn.dataset.id
                    );
                    saveState();
                    renderLog();
                    showToast("Registro eliminado", "info");
                }
            });
        });
    }

    function initLogFilters() {
        $("#btn-filter-log").addEventListener("click", () => renderLog());
    }

    // ===== WEIGHT TRACKING =====
    let weightChart = null;

    function renderWeight() {
        renderWeightChart();
        renderWeightStats();
        renderWeightHistory();
    }

    function initWeightForm() {
        // Set default date to today
        $("#weight-date").value = new Date().toISOString().split("T")[0];

        $("#weight-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const date = $("#weight-date").value;
            const value = parseFloat($("#weight-value").value);
            const notes = $("#weight-notes").value.trim();

            if (!date || isNaN(value)) {
                showToast("Ingresa una fecha y peso válidos", "error");
                return;
            }

            // Check for duplicate date
            const existingIndex = STATE.weightLog.findIndex(
                (w) => w.date === date
            );
            if (existingIndex !== -1) {
                STATE.weightLog[existingIndex] = { date, value, notes };
                showToast("Registro de peso actualizado");
            } else {
                STATE.weightLog.push({ date, value, notes });
                showToast("Peso registrado correctamente");
            }

            saveState();
            $("#weight-form").reset();
            $("#weight-date").value = new Date().toISOString().split("T")[0];
            renderWeight();
            renderDashboard();
        });
    }

    function renderWeightStats() {
        if (STATE.weightLog.length === 0) {
            ["weight-initial", "weight-current", "weight-change", "weight-min", "weight-max"].forEach(
                (id) => ($(`#${id}`).textContent = "--")
            );
            return;
        }

        const sorted = [...STATE.weightLog].sort(
            (a, b) => new Date(a.date) - new Date(b.date)
        );
        const values = sorted.map((w) => w.value);
        const initial = values[0];
        const current = values[values.length - 1];
        const change = (current - initial).toFixed(1);
        const min = Math.min(...values);
        const max = Math.max(...values);

        $("#weight-initial").textContent = initial + " kg";
        $("#weight-current").textContent = current + " kg";
        const changeEl = $("#weight-change");
        changeEl.textContent =
            (change > 0 ? "+" : "") + change + " kg";
        changeEl.style.color =
            change > 0 ? "var(--danger)" : change < 0 ? "var(--success)" : "var(--text)";
        $("#weight-min").textContent = min + " kg";
        $("#weight-max").textContent = max + " kg";
    }

    function renderWeightChart() {
        const canvas = $("#weight-chart");
        if (!canvas) return;

        if (weightChart) weightChart.destroy();

        if (STATE.weightLog.length < 1) {
            weightChart = new Chart(canvas, {
                type: "line",
                data: {
                    labels: ["Sin datos"],
                    datasets: [
                        {
                            data: [0],
                            borderColor: "rgba(108,92,231,0.3)",
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                },
            });
            return;
        }

        const sorted = [...STATE.weightLog].sort(
            (a, b) => new Date(a.date) - new Date(b.date)
        );
        const labels = sorted.map((w) => formatDate(w.date));
        const data = sorted.map((w) => w.value);
        const textColor =
            STATE.theme === "dark" ? "#a0a0b0" : "#636e72";

        weightChart = new Chart(canvas, {
            type: "line",
            data: {
                labels,
                datasets: [
                    {
                        label: "Peso (kg)",
                        data,
                        borderColor: "#6c5ce7",
                        backgroundColor: "rgba(108,92,231,0.15)",
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: "#6c5ce7",
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        borderWidth: 3,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: "index",
                    intersect: false,
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: "rgba(45,52,54,0.95)",
                        titleFont: { size: 14, weight: "bold" },
                        bodyFont: { size: 13 },
                        padding: 12,
                        cornerRadius: 8,
                    },
                },
                scales: {
                    x: {
                        ticks: { color: textColor, maxRotation: 45 },
                        grid: { display: false },
                    },
                    y: {
                        ticks: {
                            color: textColor,
                            callback: (v) => v + " kg",
                        },
                        grid: { color: "rgba(0,0,0,0.05)" },
                    },
                },
            },
        });
    }

    function renderWeightHistory() {
        const container = $("#weight-history");

        if (STATE.weightLog.length === 0) {
            container.innerHTML =
                '<p class="empty-state">No hay registros de peso.</p>';
            return;
        }

        const sorted = [...STATE.weightLog].sort(
            (a, b) => new Date(b.date) - new Date(a.date)
        );

        container.innerHTML = `
            <table class="weight-table">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Peso</th>
                        <th>Cambio</th>
                        <th>Notas</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${sorted
                        .map((entry, i) => {
                            let changeHtml = "--";
                            if (i < sorted.length - 1) {
                                const diff = (
                                    entry.value - sorted[i + 1].value
                                ).toFixed(1);
                                const cls =
                                    diff > 0
                                        ? "weight-up"
                                        : diff < 0
                                        ? "weight-down"
                                        : "";
                                changeHtml = `<span class="${cls}">${diff > 0 ? "+" : ""}${diff} kg</span>`;
                            }
                            return `
                            <tr>
                                <td>${formatDate(entry.date)}</td>
                                <td><strong>${entry.value} kg</strong></td>
                                <td>${changeHtml}</td>
                                <td style="color:var(--text-light)">${sanitize(entry.notes || "")}</td>
                                <td>
                                    <button class="btn-icon btn-delete-weight" data-date="${entry.date}">🗑️</button>
                                </td>
                            </tr>
                        `;
                        })
                        .join("")}
                </tbody>
            </table>
        `;

        container.querySelectorAll(".btn-delete-weight").forEach((btn) => {
            btn.addEventListener("click", () => {
                if (confirm("¿Eliminar este registro de peso?")) {
                    STATE.weightLog = STATE.weightLog.filter(
                        (w) => w.date !== btn.dataset.date
                    );
                    saveState();
                    renderWeight();
                    renderDashboard();
                    showToast("Registro eliminado", "info");
                }
            });
        });
    }

    // ===== INIT =====
    function init() {
        initTheme();
        initNavigation();
        initModals();
        initCatalogFilters();
        initRoutineForm();
        initLogFilters();
        initWeightForm();

        // Initial renders
        renderDashboard();
        renderCatalog();
        renderRoutines();
    }

    // Start app
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
