let currentYear = 2026;

const levelData = {

    1: {
        title: "FOUNDATION",
        description: "Introduction and foundational Structural Drafting learning materials.",
        moduleTitle: "Drafting Fundamentals",
        moduleSummary: "Build foundational knowledge of structural drawings, drafting tools, and line conventions.",
        moduleUrl: "modules/level-1.html",
        lessons: [
            "Introduction to Structural Drafting",
            "Drafting Tools and Materials",
            "Types of Drafting Lines"
        ],
        hasQuiz: true,
        drawing: false
    },

    2: {
        title: "DEVELOPING",
        description: "Developing knowledge and understanding of Structural Drafting concepts.",
        moduleTitle: "Drafting Standards and Geometry",
        moduleSummary: "Learn technical lettering, symbols, measurement, scale, and geometric construction.",
        moduleUrl: "modules/level-2.html",
        lessons: [
            "Drafting Lettering and Symbols",
            "Measurement and Scale",
            "Basic Geometric Construction"
        ],
        hasQuiz: true,
        drawing: false
    },

    3: {
        title: "INTERMEDIATE",
        description: "Intermediate Structural Drafting concepts and guided learning.",
        moduleTitle: "Dimensions and Structural Drawings",
        moduleSummary: "Practice reading dimensions, floor plans, and the structural elements shown in drawings.",
        moduleUrl: "modules/level-3.html",
        lessons: [
            "Basic Dimensioning",
            "Reading Simple Structural Drawings",
            "Basic Floor Plan",
            "Basic Structural Elements"
        ],
        hasQuiz: true,
        drawing: false
    },

    4: {
        title: "APPLIED DRAFTING",
        description: "Applied Structural Drafting with a floor-plan drawing project.",
        moduleTitle: "Creating a Floor Plan Using StructDraft",
        
        moduleSummary: "Follow the floor-plan workflow, then apply it to the timed drawing project.",
        moduleUrl: "modules/level-4.html",
        lessons: [
            "Creating a Floor Plan Using StructDraft"
        ],
        drawingTitle: "Floor Plan Drafting Project",
        drawingDescription: "Complete the floor plan shown in the project reference. Furnishings are not required.",
        projectReference: "modules/level-4-project.png",
        hasQuiz: false,
        drawing: true
    },

    5: {
        title: "ADVANCED DRAFTING",
        description: "Advanced Structural Drafting with a foundation-plan drawing project.",
        moduleTitle: "Creating a Foundation Plan Using AutoCAD / StructDraft",
        moduleSummary: "Follow the foundation-plan workflow for footings, columns, dimensions, and labels.",
        moduleUrl: "modules/level-5.html",
        lessons: [
            "Creating a Foundation Plan Using AutoCAD / StructDraft"
        ],
        drawingTitle: "Foundation Plan Drafting Project",
        drawingDescription: "Create the foundation plan shown in the project reference, including its structural layout and labels.",
        projectReference: "modules/level-5-project.png",
        hasQuiz: false,
        drawing: true
    }

};


let progress = JSON.parse(
    localStorage.getItem(`structDraftProgress${currentYear}`)
) || {
    1: {
        unlocked: true,
        completed: false,
        takes: [],
        bestScore: null
    },

    2: {
        unlocked: false,
        completed: false,
        takes: [],
        bestScore: null
    },

    3: {
        unlocked: false,
        completed: false,
        takes: [],
        bestScore: null
    },

    4: {
        unlocked: false,
        completed: false,
        takes: [],
        bestScore: null
    },

    5: {
        unlocked: false,
        completed: false,
        takes: [],
        bestScore: null
    }
};
    
const quizzes = {
    1: [
        { q: "What is Structural Drafting?", options: ["The process of creating technical drawings that represent the design, dimensions, and details of a structure.", "The process of constructing a building without technical drawings.", "The process of measuring land boundaries only.", "The process of decorating the interior of a building."], correct: 0 },
        { q: "Which structural component transfers loads from the structure to the ground?", options: ["Slab", "Beam", "Column", "Foundation"], correct: 3 },
        { q: "Which structural member is primarily vertical and carries loads toward the foundation?", options: ["Foundation", "Slab", "Beam", "Column"], correct: 3 },
        { q: "Which structural drawing shows the arrangement of spaces and structural elements as viewed from above?", options: ["Floor Plan", "Detail Drawing", "Elevation", "Section"], correct: 0 },
        { q: "Which drafting tool is mainly used for drawing straight horizontal lines and as a guide for triangles?", options: ["Eraser", "Protractor", "T-Square", "Compass"], correct: 2 },
        { q: "Which drafting tool is used to draw vertical lines and angles such as 30°, 45°, 60°, and 90°?", options: ["Scale", "Triangle", "Ruler", "Drawing Board"], correct: 1 },
        { q: "Which tool is used to draw circles and arcs?", options: ["Protractor", "T-Square", "Compass", "Drafting Tape"], correct: 2 },
        { q: "Which pencil grade is medium in hardness and commonly used for general drafting?", options: ["HB", "2H", "B", "4B"], correct: 0 },
        { q: "What is the main purpose of a drawing board?", options: ["To erase unwanted marks", "To measure angles", "To provide a flat and stable surface for technical drawings", "To draw circles"], correct: 2 },
        { q: "What is the purpose of drafting tape?", options: ["To create darker pencil lines", "To measure an angle", "To create circles", "To secure drawing paper to the drawing board"], correct: 3 },
        { q: "What do drafting lines represent in technical drawings?", options: ["Only room names", "Objects, edges, measurements, and other important information", "Only building materials", "Only colors and decorations"], correct: 1 },
        { q: "Which line type shows visible edges and outlines of an object?", options: ["Hidden line", "Leader line", "Center line", "Object line"], correct: 3 },
        { q: "Which line is used to show edges that cannot be seen?", options: ["Hidden line", "Dimension line", "Object line", "Construction line"], correct: 0 },
        { q: "Which line shows the center of circles or symmetrical objects?", options: ["Extension line", "Object line", "Leader line", "Center line"], correct: 3 },
        { q: "Which line is used to indicate measurements?", options: ["Dimension line", "Hidden line", "Construction line", "Center line"], correct: 0 },
        { q: "What is the purpose of an extension line?", options: ["To extend from an object and indicate where a measurement applies", "To show the center of a circle", "To show visible edges", "To hide an object edge"], correct: 0 },
        { q: "Which of the following are basic structural components identified in Lesson 1? Select every correct answer.", options: ["Foundation", "Column", "Beam", "Protractor"], correct: [0, 1, 2] },
        { q: "Which tools are used for measuring or constructing angles? Select every correct answer.", options: ["Protractor", "Triangle", "Eraser", "Compass"], correct: [0, 1] },
        { q: "A beam is a horizontal structural member that carries loads and transfers them to supports such as columns or walls.", options: ["True", "False"], correct: 0 },
        { q: "A construction line is a heavy line used to show visible edges and outlines of an object.", options: ["True", "False"], correct: 1 }
    ],
    2: [
        { q: "What is the purpose of proper lettering in structural drafting?", options: ["To make drawings colorful", "To make information clear and readable", "To make drawings larger", "To replace dimensions"], correct: 1 },
        { q: "Which characteristic means that lettering should be easy to read?", options: ["Decorative", "Legible", "Thick", "Large"], correct: 1 },
        { q: "Which symbol represents a door in a structural drawing?", options: ["Door symbol", "Beam symbol", "Column symbol", "Stair symbol"], correct: 0 },
        { q: "Which symbol is used to represent windows?", options: ["Section symbol", "Window symbol", "Beam symbol", "North arrow"], correct: 1 },
        { q: "What does a north arrow indicate?", options: ["Building height", "Drawing scale", "Direction", "Wall thickness"], correct: 2 },
        { q: "Which is an example of a structural dimension?", options: ["200 × 300 mm", "North", "Door", "Window"], correct: 0 },
        { q: "Why should drafting lettering be consistent?", options: ["To make the drawing difficult to read", "To maintain a neat and professional drawing", "To remove symbols", "To increase the drawing scale"], correct: 1 },
        { q: "Which unit is commonly used in structural drafting?", options: ["Millimeter", "Liter", "Kilogram", "Second"], correct: 0 },
        { q: "What does a scale show?", options: ["The color of the drawing", "The relationship between the drawing size and actual size", "The number of rooms", "The direction of the building"], correct: 1 },
        { q: "What does a 1:1 scale mean?", options: ["The drawing is half the actual size", "The drawing is twice the actual size", "The drawing is the same size as the actual object", "The drawing is one hundred times smaller"], correct: 2 },
        { q: "What does a 1:2 scale mean?", options: ["The drawing is half the actual size", "The drawing is twice the actual size", "The drawing is the same size", "The drawing is 100 times smaller"], correct: 0 },
        { q: "If a 5-meter object is drawn using a 1:100 scale, what is its drawing length?", options: ["50 cm", "10 cm", "5 cm", "1 cm"], correct: 2 },
        { q: "Which scale is used when a drawing is reduced to fit on paper?", options: ["1:1", "Reduced scale", "Full scale", "Equal scale"], correct: 1 },
        { q: "Which geometric element represents a specific location?", options: ["Point", "Circle", "Arc", "Angle"], correct: 0 },
        { q: "Which geometric element is formed by two lines meeting at a point?", options: ["Circle", "Angle", "Rectangle", "Arc"], correct: 1 },
        { q: "What is an arc?", options: ["A straight line", "A portion of a circle", "A square", "A point"], correct: 1 },
        { q: "Which geometric shape has four equal sides and four right angles?", options: ["Triangle", "Rectangle", "Square", "Circle"], correct: 2 },
        { q: "Which geometric shape has three sides?", options: ["Triangle", "Square", "Rectangle", "Circle"], correct: 0 },
        { q: "Why is geometric construction important in structural drafting?", options: ["It helps create accurate shapes and details", "It adds color to drawings", "It removes dimensions", "It replaces drafting tools"], correct: 0 },
        { q: "Geometric construction can be used in creating building outlines, floor plans, and structural details.", options: ["True", "False"], correct: 0 }
    ],
    3: [
        { q: "What is the main purpose of dimensioning in structural drafting?", options: ["To add color", "To show measurements accurately", "To decorate the drawing", "To erase lines"], correct: 1 },
        { q: "Which line contains the measurement value?", options: ["Center line", "Dimension line", "Construction line", "Object line"], correct: 1 },
        { q: "What line extends from the object to show where a measurement applies?", options: ["Extension line", "Hidden line", "Center line", "Leader line"], correct: 0 },
        { q: "What is placed on a dimension line to show its measurement?", options: ["Symbol", "Dimension text or figure", "Title", "Grid line"], correct: 1 },
        { q: "Which symbol is commonly used for diameter?", options: ["R", "Ø", "×", "#"], correct: 1 },
        { q: "What information is commonly found in the title of a structural drawing?", options: ["Drawing identification", "Pencil grade", "Paper brand", "Eraser size"], correct: 0 },
        { q: "Which information tells you the relationship between drawing size and actual size?", options: ["Symbol", "Scale", "Label", "Note"], correct: 1 },
        { q: "Which drawing shows a structure as viewed from above?", options: ["Elevation", "Section", "Floor plan", "Detail drawing"], correct: 2 },
        { q: "Which view shows the appearance of a structure from a particular direction?", options: ["Elevation", "Floor plan", "Detail", "Dimension"], correct: 0 },
        { q: "Which view shows the inside of a structure as if it were vertically cut?", options: ["Floor plan", "Section", "Elevation", "Grid"], correct: 1 },
        { q: "What is a floor plan?", options: ["A view of a building from above", "A front view of a building", "A drawing of only the roof", "A drawing of electrical wires only"], correct: 0 },
        { q: "Which elements are commonly shown in a floor plan?", options: ["Walls, doors, and windows", "Only furniture", "Only foundations", "Only roof materials"], correct: 0 },
        { q: "Why are room labels used in a floor plan?", options: ["To identify spaces or rooms", "To show the drawing scale", "To show the building height", "To replace dimensions"], correct: 0 },
        { q: "What should be applied to a floor plan to show the sizes and distances of spaces?", options: ["Colors", "Dimensions", "Shadows", "Textures"], correct: 1 },
        { q: "Which feature represents movement between different floor levels?", options: ["Window", "Door", "Stair", "Wall"], correct: 2 },
        { q: "Which structural element transfers loads from the structure to the ground?", options: ["Beam", "Slab", "Foundation", "Roof"], correct: 2 },
        { q: "Which structural element is a vertical member that carries loads toward the foundation?", options: ["Column", "Beam", "Slab", "Floor"], correct: 0 },
        { q: "Which structural element is a horizontal member that carries loads to columns or walls?", options: ["Foundation", "Beam", "Column", "Wall"], correct: 1 },
        { q: "Which sequence correctly shows the basic load transfer from a slab toward the ground?", options: ["Slab → Beam → Column → Foundation → Ground", "Foundation → Slab → Beam → Ground → Column", "Column → Slab → Beam → Foundation → Ground", "Beam → Slab → Foundation → Column → Ground"], correct: 0 },
        { q: "Slabs and beams are examples of horizontal structural elements.", options: ["True", "False"], correct: 0 }
    ]
};

let selectedAnswers = {};

function saveProgress() {

    localStorage.setItem(
        `structDraftProgress${currentYear}`,
        JSON.stringify(progress)
    );

}


function getPercentage() {

    let completed = 0;

    for (let i = 1; i <= 5; i++) {

        if (progress[i].completed) {
            completed++;
        }

    }

    return Math.round((completed / 5) * 100);

}


function dashboard() {
    if (drawingCanvasState.timerInterval) {
        clearInterval(drawingCanvasState.timerInterval);
        drawingCanvasState.timerInterval = null;
    }

    if (currentYear === 2027) {
        document.querySelector("#app").innerHTML = `

            <section class="coming-soon">

                <div class="coming-soon-content">

                    <span class="eyebrow">
                        ${currentYear} • ACADEMIC YEAR
                    </span>

                    <h2>
                        Preparing New Modules
                    </h2>

                    <p>
                        We're working on exciting new content and modules for the 2027 academic year. Check back soon!
                    </p>

                    <div class="coming-soon-animation">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>

                    <button class="btn" onclick="switchYear(2026)">
                        RETURN TO 2026 →
                    </button>

                </div>

            </section>

        `;
        return;
    }

    let cards = "";

    for (let i = 1; i <= 5; i++) {

        const current = progress[i];
        const data = levelData[i];

        let status;
        let button = "";

        if (current.completed) {

            status = `
                <span class="status complete">
                    COMPLETED
                </span>
            `;

            button = `
                <button class="btn" onclick="openLevel(${i})">
                    REVIEW LEVEL →
                </button>
            `;

        }

        else if (current.unlocked) {

            status = `
                <span class="status unlocked">
                    UNLOCKED
                </span>
            `;

            button = `
                <button class="btn" onclick="openLevel(${i})">
                    START LEVEL →
                </button>
            `;

        }

        else {

            status = `
                <span class="status locked">
                    LOCKED
                </span>
            `;

            button = `
                <span class="status locked">
                    🔒 COMPLETE LEVEL ${i - 1}
                </span>
            `;

        }


        cards += `

            <article class="
                level
                ${current.unlocked ? "unlocked" : "locked"}
                ${current.completed ? "complete" : ""}
            ">

                <div class="number">
                    0${i}
                </div>

                <div class="level-info">

                    ${status}

                    <h3>
                        LEVEL 0${i}
                    </h3>

                    <p>
                        ${data.description}
                    </p>

                    <div class="meta">

                        <span>▣ MODULES</span>
                        ${data.hasQuiz ? "<span>✓ QUIZZES</span>" : ""}

                        ${
                            data.drawing
                                ? "<span>⌗ DRAWING</span>"
                                : ""
                        }

                    </div>

                </div>

                <div>
                    ${button}
                </div>

            </article>

        `;

    }


    document.querySelector("#app").innerHTML = `

        <section class="path-overview">

            <div class="path-title">
                <span class="eyebrow">
                    ${currentYear} / STRUCTURAL DRAFTING
                </span>

                <h2>
                    LEARNING PATH
                </h2>
            </div>

            <div class="progress">

                <div class="progress-label">

                    <span>
                            PATH COMPLETION
                    </span>

                    <strong>
                        ${getPercentage()}%
                    </strong>

                </div>

                <div class="progress-track">

                    <div
                        class="progress-fill"
                        style="width:${getPercentage()}%"
                    ></div>

                </div>

            </div>

        </section>


        <section class="levels">

            ${cards}

        </section>

    `;

}


function openLevel(number) {
    if (drawingCanvasState.timerInterval) {
        clearInterval(drawingCanvasState.timerInterval);
        drawingCanvasState.timerInterval = null;
    }

    if (!progress[number].unlocked) {

        return;

    }

    const data = levelData[number];

    document.querySelector("#app").innerHTML = `

        <section class="page">

            <button
                class="back"
                onclick="dashboard()"
            >
                ← BACK TO LEVELS
            </button>


            <div class="page-head">

                <span>
                    2026 • LEVEL 0${number}
                </span>

                <h2>
                    ${data.title}
                </h2>

                <p>
                    ${data.description}
                </p>

            </div>


            <div class="section-title">

                <h3>
                    LEARNING MODULES
                </h3>

            </div>


            <div class="content-grid module-grid">

                <div class="content-card">

                    <div class="icon">▣</div>

                    <h3>${data.moduleTitle}</h3>

                    <p>${data.moduleSummary}</p>

                    <ul class="module-lessons">
                        ${data.lessons.map((lesson) => `<li>${lesson}</li>`).join("")}
                    </ul>

                    <button
                        class="btn secondary"
                        onclick="modulePreview(${number})"
                        style="margin-top:15px"
                    >
                        OPEN MODULE
                    </button>

                </div>
            </div>


            ${
                data.drawing
                    ? `
                        <div class="assessment">

                            <h3>${data.drawingTitle}</h3>

                            <p>${data.drawingDescription}</p>

                            <button
                                class="btn secondary"
                                onclick="drawingPreview(${number})"
                            >
                                OPEN DRAWING AREA
                            </button>

                        </div>
                    `
                    : ""
            }


            ${data.hasQuiz ? `
                <div class="assessment">
                    <h3>QUIZZES</h3>
                    <p>Check your understanding of the lessons in this level.</p>
                    <button class="btn" onclick="assessment(${number})" style="margin-bottom: 10px;">
                        START QUIZ →
                    </button>
                    <button class="btn secondary" onclick="assessmentHistory(${number})">
                        QUIZ ATTEMPTS: ${progress[number].takes.length}
                    </button>
                </div>
            ` : ""}


        </section>

    `;

}


function assessmentHistory(number) {

    const takes = progress[number].takes;

    document.querySelector("#app").innerHTML = `

        <section class="page">

            <button
                class="back"
                onclick="openLevel(${number})"
            >
                ← BACK TO LEVEL
            </button>

            <div class="page-head">

                <span>
                    LEVEL 0${number} • QUIZ HISTORY
                </span>

                <h2>
                    Quiz History
                </h2>

                <p>
                    ${takes.length > 0 ? `You have completed ${takes.length} attempt${takes.length > 1 ? 's' : ''}.` : 'No attempts recorded yet.'}
                </p>

            </div>

            <div class="content-card">
                ${takes.length > 0 ? takes.map((take, index) => `
                    <div style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
                        <strong>Quiz ${index + 1}</strong><br>
                        Date: ${take.date}<br>
                        Score: ${take.score}%<br>
                        Result: ${take.passed ? 'PASSED' : 'NEEDS REVIEW'}
                    </div>
                `).join('') : `
                    <p>No recorded attempts for this level yet.</p>
                `}
            </div>

        </section>

    `;

}


function modulePreview(number) {
    const data = levelData[number];
    if (!data) return;

    document.querySelector("#app").innerHTML = `

        <section class="page">

            <button
                class="back"
                onclick="openLevel(${number})"
            >
                ← BACK TO LEVEL
            </button>

            <div class="page-head">

                <span>
                    LEVEL 0${number} • LEARNING MODULE
                </span>

                <h2>
                    ${data.moduleTitle}
                </h2>

                <p>
                    ${data.moduleSummary}
                </p>

            </div>

            <div class="module-reader">
                <div class="module-reader-header">
                    <h3>LESSONS IN THIS MODULE</h3>
                    <a class="btn secondary" href="${data.moduleUrl}" target="_blank" rel="noopener">OPEN FULL PAGE ↗</a>
                </div>
                <ol class="module-lessons">
                    ${data.lessons.map((lesson) => `<li>${lesson}</li>`).join("")}
                </ol>
                <iframe class="module-viewer" src="${data.moduleUrl}" title="${data.moduleTitle}" loading="lazy"></iframe>
            </div>

        </section>

    `;

}


const drawingCanvasState = {
    canvas: null,
    ctx: null,
    currentTool: 'pointer',
    isDrawing: false,
    awaitingDimensions: false,
    dimensionPhase: 0,
    dimensionFirstPoint: null,
    dimensionSecondPoint: null,
    lastCursorPoint: null,
    startX: 0,
    startY: 0,
    drawingHistory: [],
    drawingLineHistory: [],
    historyIndex: -1,
    lineSegments: [],
    activeSnapPoint: null,
    baseImageData: null,
    zoom: 1,
    zoomAnimationFrame: null,
    ortho: false,
    snap: false,
    objectSnap: true,
    polar: false,
    isometric: false,
    osnapTracking: false,
    continueLine: false,
    lastPoint: null,
    annotationScale: '1:100',
    materialScale: 1,
    materialRotation: 0,
    hatch: false,
    selectionStart: null,
    selectionEnd: null,
    selectedBounds: null,
    selectionImageData: null,
    commandHistory: [],
    commandHistoryIndex: 0,
    timerInterval: null,
    remainingSeconds: 600,
    timeExpired: false,
    expiredLevels: new Set(),
    unit: 'm',
    baseCanvasWidth: 0,
    level: 4
};

const drawingPalettes = {
    4: [
        ['wall', 'Wall', '▤'], ['beam', 'Beam', '━'], ['column', 'Column', '▥'],
        ['footing', 'Footing', '▽'], ['slab', 'Slab', '▬'], ['gridline', 'Grid Line', '⊙'],
        ['door', 'Door', '▯'], ['window', 'Window', '▥']
    ],
    5: [
        ['elevwall', 'Wall', '▤'], ['elevdoor', 'Door Elev.', '▯'], ['elevwindow', 'Window Elev.', '▥'],
        ['roof', 'Roof', '⌂'], ['stairs', 'Stairs', '≡'], ['slab', 'Slab', '━'],
        ['column', 'Column', '▥'], ['levelmark', 'Level Mark', '⊥'], ['beam', 'Beam', '━'],
        ['footing', 'Footing', '▽'], ['rebar', 'Rebar', '∥'], ['sectionmark', 'Section', '△']
    ]
};

const floorPlanPaletteGroups = [
    { title: 'STRUCTURE', tools: ['wall', 'beam', 'column', 'footing', 'slab', 'gridline'] },
    { title: 'OPENINGS', tools: ['door', 'window'] }
];

function getPaletteTools(level) {
    return drawingPalettes[level] || drawingPalettes[4];
}

function selectPaletteTool(tool) {
    setDrawingTool(tool);
}

function paletteMarkup(level) {
    const tools = getPaletteTools(level);
    const renderTool = ([tool, label, icon]) =>
        `<button class="palette-btn tool-btn" id="palette-${tool}" onclick="selectPaletteTool('${tool}')" title="${label}">${icon}<small>${label}</small></button>`;

    if (level !== 4) {
        return tools.map(renderTool).join('');
    }

    return floorPlanPaletteGroups.map((group) => `
        <section class="palette-category" aria-label="${group.title}">
            <span class="palette-category-title">${group.title}</span>
            <div class="palette-items">
                ${group.tools.map((toolName) => renderTool(tools.find(([tool]) => tool === toolName))).join('')}
            </div>
        </section>
    `).join('');
}

function getScaleDenominator() {
    const scale = document.getElementById('annotationScale')?.value || drawingCanvasState.annotationScale;
    const denominator = Number(scale.split(':')[1]);
    return Number.isFinite(denominator) && denominator > 0 ? denominator : 100;
}

function getMillimetersPerPixel() {
    return getScaleDenominator() / 50;
}

function getDrawingUnit() {
    return document.getElementById('drawingUnit')?.value || drawingCanvasState.unit;
}

function getUnitToMillimeters() {
    return getDrawingUnit() === 'm' ? 1000 : 1;
}

function formatDrawingLength(millimeters) {
    const unit = getDrawingUnit();
    const value = millimeters / getUnitToMillimeters();
    return `${value.toFixed(unit === 'm' ? 2 : 0)} ${unit}`;
}

function updateDrawingUnit(value) {
    if (drawingCanvasState.timeExpired) return;
    drawingCanvasState.unit = value;
    const unitLabel = value;
    const lengthLabel = document.getElementById('drawingLengthLabel');
    const heightLabel = document.getElementById('drawingHeightLabel');
    const input = document.getElementById('lineLengthInput');
    const heightInput = document.getElementById('drawingHeightInput');
    if (lengthLabel) lengthLabel.firstChild.textContent = `${drawingCanvasState.currentTool === 'circle' || drawingCanvasState.currentTool === 'arc' ? 'RADIUS' : drawingCanvasState.currentTool === 'rect' || drawingCanvasState.currentTool === 'leader' ? 'WIDTH' : 'LENGTH'} ${unitLabel} `;
    if (heightLabel) heightLabel.firstChild.textContent = `HEIGHT ${unitLabel} `;
    if (input) input.placeholder = value === 'm' ? 'e.g. 3' : 'e.g. 3000';
    if (heightInput) heightInput.placeholder = value === 'm' ? 'e.g. 2.4' : 'e.g. 2400';
    drawScaleReferenceLabel();
}

function updateDrawingTimerDisplay() {
    const display = document.getElementById('drawingTimer');
    if (!display) return;
    const minutes = Math.floor(drawingCanvasState.remainingSeconds / 60);
    const seconds = drawingCanvasState.remainingSeconds % 60;
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function getDrawingTimerStorageKey(level = drawingCanvasState.level) {
    return `structDraftTimeUp10m${currentYear}-level${level}`;
}

function isDrawingLevelExpired(level) {
    if (drawingCanvasState.expiredLevels.has(level)) return true;
    try {
        return sessionStorage.getItem(getDrawingTimerStorageKey(level)) === 'true';
    } catch (error) {
        console.error('Unable to read the drawing time-up state.', error);
        return false;
    }
}

function setDrawingViewOnly() {
    const editingControls = document.querySelectorAll([
        '.drawing-toolbar [onclick^="setDrawingTool("]',
        '.drawing-toolbar .palette-btn',
        '#hatchToggle',
        '#orthoToggle',
        '#polarToggle',
        '#isometricToggle',
        '#snapToggle',
        '#osnapToggle',
        '#osnapTrackingToggle',
        '#clearDrawingButton',
        '#undoDrawingButton',
        '#redoDrawingButton',
        '#deleteSelectedButton',
        '#colorPicker',
        '#lineThickness',
        '#materialScale',
        '#materialRotation',
        '#annotationScale',
        '#drawingUnit',
        '#lineLabelInput',
        '#lineLengthInput',
        '#drawingHeightInput',
        '#drawingAngleInput'
    ].join(','));
    editingControls.forEach((control) => {
        control.disabled = true;
    });
    if (drawingCanvasState.canvas) drawingCanvasState.canvas.style.cursor = 'default';
}

function expireDrawingTimer() {
    if (drawingCanvasState.baseImageData && drawingCanvasState.ctx) {
        drawingCanvasState.ctx.putImageData(drawingCanvasState.baseImageData, 0, 0);
    }
    drawingCanvasState.timeExpired = true;
    drawingCanvasState.expiredLevels.add(drawingCanvasState.level);
    try {
        sessionStorage.setItem(getDrawingTimerStorageKey(), 'true');
    } catch (error) {
        const status = document.getElementById('drawingSaveStatus');
        if (status) status.textContent = 'View-only lock could not be saved for this browser session.';
    }
    drawingCanvasState.isDrawing = false;
    drawingCanvasState.awaitingDimensions = false;
    drawingCanvasState.dimensionPhase = 0;
    drawingCanvasState.dimensionFirstPoint = null;
    drawingCanvasState.dimensionSecondPoint = null;
    drawingCanvasState.baseImageData = null;
    drawingCanvasState.activeSnapPoint = null;
    if (drawingCanvasState.timerInterval) {
        clearInterval(drawingCanvasState.timerInterval);
        drawingCanvasState.timerInterval = null;
    }
    drawingCanvasState.remainingSeconds = 0;
    updateDrawingTimerDisplay();
    document.getElementById('drawingTimeUpOverlay')?.removeAttribute('hidden');
    document.getElementById('drawingMeasurement')?.setAttribute('hidden', '');
    setDrawingViewOnly();
    const status = document.getElementById('drawingStatus');
    if (status) status.textContent = "Time's up — view only. Drawing edits are locked.";
}

function startDrawingTimer() {
    if (drawingCanvasState.timeExpired) return;
    if (drawingCanvasState.timerInterval) clearInterval(drawingCanvasState.timerInterval);
    drawingCanvasState.isDrawing = false;
    drawingCanvasState.awaitingDimensions = false;
    drawingCanvasState.dimensionPhase = 0;
    drawingCanvasState.dimensionFirstPoint = null;
    drawingCanvasState.dimensionSecondPoint = null;
    drawingCanvasState.baseImageData = null;
    drawingCanvasState.activeSnapPoint = null;
    drawingCanvasState.remainingSeconds = 600;
    drawingCanvasState.timeExpired = false;
    document.getElementById('drawingTimeUpOverlay')?.setAttribute('hidden', '');
    document.getElementById('drawingMeasurement')?.setAttribute('hidden', '');
    ['lineLengthInput', 'drawingHeightInput', 'drawingAngleInput'].forEach((id) => {
        const input = document.getElementById(id);
        if (input) input.disabled = false;
    });
    updateDrawingTimerDisplay();
    drawingCanvasState.timerInterval = setInterval(() => {
        drawingCanvasState.remainingSeconds = Math.max(0, drawingCanvasState.remainingSeconds - 1);
        updateDrawingTimerDisplay();
        if (drawingCanvasState.remainingSeconds === 0) expireDrawingTimer();
    }, 1000);
}

function drawGridAndScaleReference() {
    const { ctx, canvas } = drawingCanvasState;
    if (!ctx || !canvas) return;

    const gridStep = 50;
    ctx.fillStyle = '#0b2038';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(120,144,168,0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x <= canvas.width; x += gridStep) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }
    for (let y = 0; y <= canvas.height; y += gridStep) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();

    ctx.strokeStyle = 'rgba(170,181,193,0.2)';
    ctx.beginPath();
    for (let x = 0; x <= canvas.width; x += gridStep * 5) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }
    for (let y = 0; y <= canvas.height; y += gridStep * 5) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();

    drawScaleReferenceLabel();
}

function drawScaleReferenceLabel() {
    const { ctx } = drawingCanvasState;
    if (!ctx) return;

    const gridStepMillimeters = 50 * getMillimetersPerPixel();
    ctx.fillStyle = '#0b2038';
    ctx.fillRect(8, 8, 225, 22);
    ctx.fillStyle = '#eef2f7';
    ctx.font = '11px Arial';
    ctx.fillText(`SCALE 1:${getScaleDenominator()}  |  GRID ${formatDrawingLength(gridStepMillimeters)}`, 16, 22);
}

function drawTestReference() {
    drawGridAndScaleReference();
}

function getCanvasPoint(event) {
    const { canvas } = drawingCanvasState;
    const rect = canvas.getBoundingClientRect();
    return {
        x: Math.max(0, Math.min(canvas.width, (event.clientX - rect.left) / rect.width * canvas.width)),
        y: Math.max(0, Math.min(canvas.height, (event.clientY - rect.top) / rect.height * canvas.height))
    };
}

function findNearestLinePoint(point) {
    const canvas = drawingCanvasState.canvas;
    if (!canvas || !drawingCanvasState.lineSegments.length) return null;

    const rect = canvas.getBoundingClientRect();
    if (!rect.width) return null;
    const tolerance = 20 * canvas.width / rect.width;
    const segments = drawingCanvasState.lineSegments.filter((segment) =>
        !segment.tool || ['line', 'dimension', 'centerline'].includes(segment.tool)
    );
    const nearbySegments = [];
    let nearestSnap = null;

    const consider = (candidate, type, priority) => {
        const distance = Math.hypot(point.x - candidate.x, point.y - candidate.y);
        if (distance > tolerance) return;
        if (!nearestSnap || priority < nearestSnap.priority
            || (priority === nearestSnap.priority && distance < nearestSnap.distance)) {
            nearestSnap = { x: candidate.x, y: candidate.y, type, distance, priority };
        }
    };

    segments.forEach((segment) => {
        const dx = segment.x2 - segment.x1;
        const dy = segment.y2 - segment.y1;
        const lengthSquared = dx * dx + dy * dy;
        if (!lengthSquared) return;

        consider({ x: segment.x1, y: segment.y1 }, 'endpoint', 0);
        consider({ x: segment.x2, y: segment.y2 }, 'endpoint', 0);
        consider({ x: (segment.x1 + segment.x2) / 2, y: (segment.y1 + segment.y2) / 2 }, 'midpoint', 1);
        const projection = Math.max(0, Math.min(1,
            ((point.x - segment.x1) * dx + (point.y - segment.y1) * dy) / lengthSquared
        ));
        consider({ x: segment.x1 + projection * dx, y: segment.y1 + projection * dy }, 'line', 2);

        if (point.x >= Math.min(segment.x1, segment.x2) - tolerance
            && point.x <= Math.max(segment.x1, segment.x2) + tolerance
            && point.y >= Math.min(segment.y1, segment.y2) - tolerance
            && point.y <= Math.max(segment.y1, segment.y2) + tolerance) {
            nearbySegments.push(segment);
        }
    });

    for (let firstIndex = 0; firstIndex < nearbySegments.length; firstIndex += 1) {
        for (let secondIndex = firstIndex + 1; secondIndex < nearbySegments.length; secondIndex += 1) {
            const intersection = getLineIntersectionPoint(nearbySegments[firstIndex], nearbySegments[secondIndex]);
            if (intersection) consider(intersection, 'intersection', 0);
        }
    }

    return nearestSnap ? { x: nearestSnap.x, y: nearestSnap.y, type: nearestSnap.type } : null;
}

function getLineIntersectionPoint(first, second) {
    const dx = first.x2 - first.x1;
    const dy = first.y2 - first.y1;
    const otherDx = second.x2 - second.x1;
    const otherDy = second.y2 - second.y1;
    const denominator = dx * otherDy - dy * otherDx;
    if (Math.abs(denominator) < 1e-8) return null;

    const offsetX = second.x1 - first.x1;
    const offsetY = second.y1 - first.y1;
    const t = (offsetX * otherDy - offsetY * otherDx) / denominator;
    const u = (offsetX * dy - offsetY * dx) / denominator;
    if (t < -1e-6 || t > 1 + 1e-6 || u < -1e-6 || u > 1 + 1e-6) return null;
    return { x: first.x1 + t * dx, y: first.y1 + t * dy };
}

function drawTrackedLineSegment(segment) {
    const { ctx } = drawingCanvasState;
    if (!ctx) return;
    ctx.strokeStyle = segment.color || '#aab5c1';
    ctx.lineWidth = Number(segment.lineWidth) || 2;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(segment.x1, segment.y1);
    ctx.lineTo(segment.x2, segment.y2);
    ctx.stroke();
}

function segmentIntersectsBounds(segment, bounds) {
    const dx = segment.x2 - segment.x1;
    const dy = segment.y2 - segment.y1;
    let start = 0;
    let end = 1;
    const edges = [
        [-dx, segment.x1 - bounds.left],
        [dx, bounds.left + bounds.width - segment.x1],
        [-dy, segment.y1 - bounds.top],
        [dy, bounds.top + bounds.height - segment.y1]
    ];

    for (const [direction, distance] of edges) {
        if (direction === 0) {
            if (distance < 0) return false;
            continue;
        }
        const parameter = distance / direction;
        if (direction < 0) start = Math.max(start, parameter);
        else end = Math.min(end, parameter);
        if (start > end) return false;
    }
    return true;
}

function eraseSegmentPixels(segment, segmentsToRedraw) {
    const { ctx } = drawingCanvasState;
    if (!ctx) return;

    const dx = segment.x2 - segment.x1;
    const dy = segment.y2 - segment.y1;
    const length = Math.hypot(dx, dy);
    if (!length) return;
    const halfWidth = (Number(segment.lineWidth) || 2) / 2 + 1;
    const normalX = -dy / length * halfWidth;
    const normalY = dx / length * halfWidth;

    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = (Number(segment.lineWidth) || 2) + 2;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(segment.x1, segment.y1);
    ctx.lineTo(segment.x2, segment.y2);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(segment.x1 + normalX, segment.y1 + normalY);
    ctx.lineTo(segment.x2 + normalX, segment.y2 + normalY);
    ctx.lineTo(segment.x2 - normalX, segment.y2 - normalY);
    ctx.lineTo(segment.x1 - normalX, segment.y1 - normalY);
    ctx.closePath();
    ctx.clip();
    drawGridAndScaleReference();
    segmentsToRedraw.forEach(drawTrackedLineSegment);
    ctx.restore();
}

function drawSnapMarker(point) {
    const { ctx } = drawingCanvasState;
    if (!ctx || !point) return;
    ctx.save();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = '#38e8c1';
    ctx.lineWidth = 2;
    const radius = point.type === 'intersection' ? 10 : 8;
    ctx.beginPath();
    ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(point.x - radius - 3, point.y);
    ctx.lineTo(point.x + radius + 3, point.y);
    ctx.moveTo(point.x, point.y - radius - 3);
    ctx.lineTo(point.x, point.y + radius + 3);
    ctx.stroke();
    ctx.restore();
}

function constrainDrawingPoint(x, y) {
    if (drawingCanvasState.snap) {
        x = Math.round(x / 10) * 10;
        y = Math.round(y / 10) * 10;
    }
    if (drawingCanvasState.isometric) {
        const dx = x - drawingCanvasState.startX;
        const dy = y - drawingCanvasState.startY;
        const angle = Math.atan2(dy, dx);
        const increment = Math.PI / 6;
        const snappedAngle = Math.round(angle / increment) * increment;
        const distance = Math.hypot(dx, dy);
        return { x: drawingCanvasState.startX + Math.cos(snappedAngle) * distance, y: drawingCanvasState.startY + Math.sin(snappedAngle) * distance };
    }
    if (!drawingCanvasState.ortho && !drawingCanvasState.polar) return { x, y };
    const dx = x - drawingCanvasState.startX;
    const dy = y - drawingCanvasState.startY;
    if (drawingCanvasState.ortho) {
        return Math.abs(dx) >= Math.abs(dy)
            ? { x, y: drawingCanvasState.startY }
            : { x: drawingCanvasState.startX, y };
    }
    const increment = Math.PI / 12;
    const angle = Math.round(Math.atan2(dy, dx) / increment) * increment;
    const distance = Math.hypot(dx, dy);
    return { x: drawingCanvasState.startX + Math.cos(angle) * distance, y: drawingCanvasState.startY + Math.sin(angle) * distance };
}

function setDrawingZoom(zoom, anchorEvent = null) {
    const canvas = drawingCanvasState.canvas;
    if (!canvas) return;
    const container = canvas.parentElement;
    const targetZoom = Math.max(0.5, Math.min(3, zoom));
    const zoomLabel = document.getElementById('drawingZoom');
    drawingCanvasState.zoom = targetZoom;
    if (zoomLabel) zoomLabel.textContent = Math.round(targetZoom * 100) + '%';

    if (drawingCanvasState.zoomAnimationFrame !== null) {
        cancelAnimationFrame(drawingCanvasState.zoomAnimationFrame);
        drawingCanvasState.zoomAnimationFrame = null;
    }

    canvas.style.flex = '0 0 auto';
    canvas.style.transition = 'none';

    if (targetZoom === 1) {
        canvas.style.width = '100%';
        canvas.style.maxWidth = '100%';
        container.style.minHeight = '';
        container.style.minWidth = '';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
        container.scrollLeft = 0;
        container.scrollTop = 0;
        drawingCanvasState.baseCanvasWidth = container.clientWidth;
        return;
    }

    if (!drawingCanvasState.baseCanvasWidth) {
        drawingCanvasState.baseCanvasWidth = container.clientWidth;
    }
    if (!drawingCanvasState.baseCanvasWidth) return;

    const canvasRect = canvas.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const anchorClientX = anchorEvent
        ? anchorEvent.clientX
        : containerRect.left + container.clientLeft + container.clientWidth / 2;
    const anchorClientY = anchorEvent
        ? anchorEvent.clientY
        : containerRect.top + container.clientTop + container.clientHeight / 2;
    const anchorOffsetX = anchorClientX - containerRect.left - container.clientLeft;
    const anchorOffsetY = anchorClientY - containerRect.top - container.clientTop;
    const anchorX = targetZoom < 1
        ? 0.5
        : Math.max(0, Math.min(1, (anchorClientX - canvasRect.left) / Math.max(1, canvasRect.width)));
    const anchorY = targetZoom < 1
        ? 0.5
        : Math.max(0, Math.min(1, (anchorClientY - canvasRect.top) / Math.max(1, canvasRect.height)));
    const startWidth = canvasRect.width;
    const baseWidth = drawingCanvasState.baseCanvasWidth;
    const baseHeight = baseWidth * canvas.height / canvas.width;
    const targetWidth = baseWidth * targetZoom;
    const duration = 160;
    let startTime = null;

    canvas.style.maxWidth = 'none';
    container.style.minWidth = '';
    container.style.justifyContent = targetZoom < 1 ? 'center' : 'flex-start';
    container.style.alignItems = targetZoom < 1 ? 'center' : 'flex-start';

    const animateZoom = (time) => {
        if (startTime === null) startTime = time;
        const progress = Math.min(1, (time - startTime) / duration);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const width = startWidth + (targetWidth - startWidth) * easedProgress;
        const height = width * canvas.height / canvas.width;

        canvas.style.width = `${width}px`;
        container.style.minHeight = `${Math.max(baseHeight, height)}px`;

        if (targetZoom < 1) {
            container.scrollLeft = 0;
            container.scrollTop = 0;
        } else {
            container.scrollLeft = anchorX * width - anchorOffsetX;
            container.scrollTop = anchorY * height - anchorOffsetY;
        }

        if (progress < 1) {
            drawingCanvasState.zoomAnimationFrame = requestAnimationFrame(animateZoom);
        } else {
            drawingCanvasState.zoomAnimationFrame = null;
        }
    };

    drawingCanvasState.zoomAnimationFrame = requestAnimationFrame(animateZoom);
}

function zoomDrawing(amount) {
    const container = drawingCanvasState.canvas?.parentElement;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    setDrawingZoom(drawingCanvasState.zoom + amount, {
        clientX: rect.left + container.clientLeft + container.clientWidth / 2,
        clientY: rect.top + container.clientTop + container.clientHeight / 2
    });
}

function zoomDrawingAtCursor(event) {
    event.preventDefault();
    setDrawingZoom(drawingCanvasState.zoom * Math.pow(1.001, -event.deltaY), event);
}

function toggleOrtho() {
    if (drawingCanvasState.timeExpired) return;
    drawingCanvasState.ortho = !drawingCanvasState.ortho;
    document.getElementById('orthoToggle')?.classList.toggle('active', drawingCanvasState.ortho);
}

function toggleSnap() {
    if (drawingCanvasState.timeExpired) return;
    drawingCanvasState.snap = !drawingCanvasState.snap;
    document.getElementById('snapToggle')?.classList.toggle('active', drawingCanvasState.snap);
}

function toggleObjectSnap() {
    if (drawingCanvasState.timeExpired) return;
    drawingCanvasState.objectSnap = !drawingCanvasState.objectSnap;
    document.getElementById('osnapToggle')?.classList.toggle('active', drawingCanvasState.objectSnap);
    showDrawingCommandStatus(`OSNAP ${drawingCanvasState.objectSnap ? 'ON' : 'OFF'}`);
}

function toggleDrawingMode(mode) {
    if (drawingCanvasState.timeExpired) return;
    drawingCanvasState[mode] = !drawingCanvasState[mode];
    document.getElementById(mode + 'Toggle')?.classList.toggle('active', drawingCanvasState[mode]);
}

function setAnnotationScale(value) {
    if (drawingCanvasState.timeExpired) return;
    drawingCanvasState.annotationScale = value;
    const label = document.getElementById('annotationScaleLabel');
    if (label) label.textContent = value;
    const status = document.getElementById('drawingAnnotationStatus');
    if (status) status.textContent = 'Annotation ' + value;
    drawScaleReferenceLabel();
}

function setMaterialScale(value) {
    if (drawingCanvasState.timeExpired) return;
    drawingCanvasState.materialScale = Number(value) || 1;
    const label = document.getElementById('materialScaleLabel');
    if (label) label.textContent = Math.round(drawingCanvasState.materialScale * 100) + '%';
}

function setMaterialRotation(value) {
    if (drawingCanvasState.timeExpired) return;
    drawingCanvasState.materialRotation = Number(value) || 0;
    const label = document.getElementById('materialRotationLabel');
    if (label) label.textContent = drawingCanvasState.materialRotation + ' deg';
}

function toggleHatch() {
    if (drawingCanvasState.timeExpired) return;
    drawingCanvasState.hatch = !drawingCanvasState.hatch;
    document.getElementById('hatchToggle')?.classList.toggle('active', drawingCanvasState.hatch);
}

function setDrawingTool(tool) {
    const canvas = drawingCanvasState.canvas;
    if (!canvas || drawingCanvasState.timeExpired) return;

    if ((drawingCanvasState.awaitingDimensions || drawingCanvasState.dimensionPhase)
        && drawingCanvasState.baseImageData) {
        drawingCanvasState.ctx.putImageData(drawingCanvasState.baseImageData, 0, 0);
    }
    drawingCanvasState.awaitingDimensions = false;
    drawingCanvasState.dimensionPhase = 0;
    drawingCanvasState.dimensionFirstPoint = null;
    drawingCanvasState.dimensionSecondPoint = null;
    drawingCanvasState.baseImageData = null;
    drawingCanvasState.activeSnapPoint = null;
    document.getElementById('drawingMeasurement')?.setAttribute('hidden', '');
    drawingCanvasState.currentTool = tool;
    const label = tool.charAt(0).toUpperCase() + tool.slice(1);
    const currentToolEl = document.getElementById('currentTool');
    if (currentToolEl) {
        currentToolEl.textContent = tool === 'select' ? 'Crossing Select' : label;
    }

    const modeToggleIds = ['orthoToggle', 'polarToggle', 'isometricToggle', 'osnapToggle', 'snapToggle', 'osnapTrackingToggle', 'hatchToggle'];
    document.querySelectorAll('.tool-btn.active').forEach((btn) => {
        if (!modeToggleIds.includes(btn.id)) btn.classList.remove('active');
    });

    let toolId = 'tool' + label;
    if (tool === 'dimension') {
        toolId = 'toolDim';
    }
    if (tool === 'centerline') {
        toolId = 'toolCenterline';
    }
    if (tool === 'leader') {
        toolId = 'toolLeader';
    }
    if (drawingPalettes[drawingCanvasState.level]?.some(([paletteTool]) => paletteTool === tool)) {
        toolId = 'palette-' + tool;
    }

    const activeButton = document.getElementById(toolId);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    canvas.style.cursor = tool === 'pointer' ? 'default' : 'crosshair';
    updateDrawingDimensionControls(tool);
    if (tool === 'dimension') {
        showDrawingCommandStatus('DIMENSION active • Click two points, move up or down, then click to place. Press Escape to cancel.');
    }
}

function showDrawingCommandStatus(message) {
    const status = document.getElementById('drawingStatus');
    if (status) status.textContent = message;
}

function updateDrawingDimensionControls(tool) {
    const controls = document.getElementById('preciseDrawingControls');
    const lengthLabel = document.getElementById('drawingLengthLabel');
    const heightControl = document.getElementById('drawingHeightControl');
    const angleControl = document.getElementById('drawingAngleControl');
    const lengthInput = document.getElementById('lineLengthInput');
    const heightInput = document.getElementById('drawingHeightInput');

    if (!controls || !lengthLabel || !heightControl || !angleControl || !lengthInput || !heightInput) return;

    const paletteTool = drawingPalettes[drawingCanvasState.level]?.some(([paletteName]) => paletteName === tool);
    const boxTool = ['rect', 'leader'].includes(tool) || paletteTool;
    const radiusTool = ['circle', 'arc'].includes(tool);
    const lineTool = ['line', 'centerline'].includes(tool);
    controls.hidden = !boxTool && !radiusTool && !lineTool;
    heightControl.hidden = !boxTool;
    angleControl.hidden = !lineTool;

    if (radiusTool) {
        lengthLabel.firstChild.textContent = `RADIUS ${getDrawingUnit()} `;
        lengthInput.placeholder = getDrawingUnit() === 'm' ? 'e.g. 0.5' : 'e.g. 500';
    } else if (boxTool) {
        lengthLabel.firstChild.textContent = `WIDTH ${getDrawingUnit()} `;
        lengthInput.placeholder = getDrawingUnit() === 'm' ? 'e.g. 3' : 'e.g. 3000';
    } else {
        lengthLabel.firstChild.textContent = `LENGTH ${getDrawingUnit()} `;
        lengthInput.placeholder = getDrawingUnit() === 'm' ? 'e.g. 3' : 'e.g. 3000';
    }

    const heightLabelElement = document.getElementById('drawingHeightLabel');
    if (heightLabelElement) heightLabelElement.firstChild.textContent = `HEIGHT ${getDrawingUnit()} `;
    heightInput.placeholder = getDrawingUnit() === 'm' ? 'e.g. 2.4' : 'e.g. 2400';
}

function drawLineLabel(start, end) {
    const input = document.getElementById('lineLabelInput');
    const label = input?.value.trim();
    if (!label) return;

    const { ctx } = drawingCanvasState;
    if (!ctx) return;
    ctx.save();
    ctx.fillStyle = document.getElementById('colorPicker')?.value || '#eef2f7';
    ctx.font = 'bold 12px Arial';
    ctx.fillText(label, (start.x + end.x) / 2 + 6, (start.y + end.y) / 2 - 8);
    ctx.restore();
    input.value = '';
}

function drawLineMeasurement(startX, startY, endX, endY) {
    const { ctx } = drawingCanvasState;
    if (!ctx) return;
    const length = Math.hypot(endX - startX, endY - startY) * getMillimetersPerPixel();
    const label = formatDrawingLength(length);
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;
    const offset = 12;
    const angle = Math.atan2(endY - startY, endX - startX);
    const labelX = midX + Math.sin(angle) * offset;
    const labelY = midY - Math.cos(angle) * offset;

    ctx.save();
    ctx.globalAlpha = 1;
    ctx.font = 'bold 12px Arial';
    const textWidth = ctx.measureText(label).width;
    ctx.fillStyle = '#071a30';
    ctx.fillRect(labelX - textWidth / 2 - 4, labelY - 12, textWidth + 8, 17);
    ctx.fillStyle = document.getElementById('colorPicker')?.value || '#eef2f7';
    ctx.textAlign = 'center';
    ctx.fillText(label, labelX, labelY);
    ctx.restore();
}

function getDimensionOffset(start, end, point) {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const length = Math.hypot(dx, dy);
    if (!length) return 18;

    const normalX = -dy / length;
    const normalY = dx / length;
    const middleX = (start.x + end.x) / 2;
    const middleY = (start.y + end.y) / 2;
    const offset = (point.x - middleX) * normalX + (point.y - middleY) * normalY;
    return Math.abs(offset) < 18 ? (offset < 0 ? -18 : 18) : offset;
}

function drawDimensionGeometry(start, end, offset) {
    const { ctx } = drawingCanvasState;
    if (!ctx) return;

    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const length = Math.hypot(dx, dy);
    if (!length) return;

    const unitX = dx / length;
    const unitY = dy / length;
    const normalX = -unitY;
    const normalY = unitX;
    const side = Math.sign(offset) || 1;
    const dimensionStart = { x: start.x + normalX * offset, y: start.y + normalY * offset };
    const dimensionEnd = { x: end.x + normalX * offset, y: end.y + normalY * offset };
    const extension = 8 * side;
    const color = document.getElementById('colorPicker')?.value || '#aab5c1';

    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(start.x + normalX * 4 * side, start.y + normalY * 4 * side);
    ctx.lineTo(dimensionStart.x + normalX * extension, dimensionStart.y + normalY * extension);
    ctx.moveTo(end.x + normalX * 4 * side, end.y + normalY * 4 * side);
    ctx.lineTo(dimensionEnd.x + normalX * extension, dimensionEnd.y + normalY * extension);
    ctx.moveTo(dimensionStart.x, dimensionStart.y);
    ctx.lineTo(dimensionEnd.x, dimensionEnd.y);
    ctx.stroke();

    const arrowLength = 8;
    const arrowWidth = 3;
    const drawArrow = (tip, directionX, directionY) => {
        const baseX = tip.x + directionX * arrowLength;
        const baseY = tip.y + directionY * arrowLength;
        const perpendicularX = -directionY * arrowWidth;
        const perpendicularY = directionX * arrowWidth;
        ctx.beginPath();
        ctx.moveTo(tip.x, tip.y);
        ctx.lineTo(baseX + perpendicularX, baseY + perpendicularY);
        ctx.lineTo(baseX - perpendicularX, baseY - perpendicularY);
        ctx.closePath();
        ctx.fill();
    };
    drawArrow(dimensionStart, unitX, unitY);
    drawArrow(dimensionEnd, -unitX, -unitY);

    const label = formatDrawingLength(length * getMillimetersPerPixel());
    const middleX = (dimensionStart.x + dimensionEnd.x) / 2;
    const middleY = (dimensionStart.y + dimensionEnd.y) / 2;
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    const textWidth = ctx.measureText(label).width;
    ctx.fillStyle = '#071a30';
    ctx.fillRect(middleX - textWidth / 2 - 4, middleY - 9, textWidth + 8, 18);
    ctx.fillStyle = color;
    ctx.fillText(label, middleX, middleY + 4);
    ctx.restore();
}

function previewDimensionPlacement(point) {
    const { ctx, baseImageData, dimensionFirstPoint, dimensionSecondPoint } = drawingCanvasState;
    if (!ctx || !baseImageData || !dimensionFirstPoint || !dimensionSecondPoint) return;
    ctx.putImageData(baseImageData, 0, 0);
    ctx.save();
    ctx.globalAlpha = 0.75;
    drawDimensionGeometry(
        dimensionFirstPoint,
        dimensionSecondPoint,
        getDimensionOffset(dimensionFirstPoint, dimensionSecondPoint, point)
    );
    ctx.restore();
}

function finishDimensionPlacement(point) {
    const { ctx, baseImageData, dimensionFirstPoint, dimensionSecondPoint } = drawingCanvasState;
    if (!ctx || !baseImageData || !dimensionFirstPoint || !dimensionSecondPoint) return;

    ctx.putImageData(baseImageData, 0, 0);
    const offset = getDimensionOffset(dimensionFirstPoint, dimensionSecondPoint, point);
    drawDimensionGeometry(dimensionFirstPoint, dimensionSecondPoint, offset);

    const dx = dimensionSecondPoint.x - dimensionFirstPoint.x;
    const dy = dimensionSecondPoint.y - dimensionFirstPoint.y;
    const length = Math.hypot(dx, dy);
    const normalX = -dy / length;
    const normalY = dx / length;
    const color = document.getElementById('colorPicker')?.value || '#aab5c1';
    drawingCanvasState.lineSegments.push({
        x1: dimensionFirstPoint.x + normalX * offset,
        y1: dimensionFirstPoint.y + normalY * offset,
        x2: dimensionSecondPoint.x + normalX * offset,
        y2: dimensionSecondPoint.y + normalY * offset,
        tool: 'dimension',
        color,
        lineWidth: 1
    });

    drawingCanvasState.dimensionPhase = 0;
    drawingCanvasState.dimensionFirstPoint = null;
    drawingCanvasState.dimensionSecondPoint = null;
    drawingCanvasState.baseImageData = null;
    drawingCanvasState.activeSnapPoint = null;
    saveToHistory();
    showDrawingCommandStatus('DIMENSION complete. Press Escape to cancel the next dimension.');
}

function getLineEndpoint(point) {
    const lengthInput = document.getElementById('lineLengthInput');
    const lengthText = lengthInput?.value.trim();
    if (!lengthText) return point;

    const lengthInUnits = Number(lengthText);
    if (!Number.isFinite(lengthInUnits) || lengthInUnits <= 0) {
        showDrawingCommandStatus(`Length must be a positive number in ${getDrawingUnit()}.`);
        return null;
    }
    const lengthInMillimeters = lengthInUnits * getUnitToMillimeters();

    const angleInput = document.getElementById('drawingAngleInput');
    const angleText = angleInput?.value.trim();
    let angle = Math.atan2(point.y - drawingCanvasState.startY, point.x - drawingCanvasState.startX);
    if (angleText) {
        const degrees = Number(angleText);
        if (!Number.isFinite(degrees)) {
            showDrawingCommandStatus('Angle must be a finite number in degrees.');
            return null;
        }
        angle = -degrees * Math.PI / 180;
    }
    const lengthInPixels = lengthInMillimeters / getMillimetersPerPixel();
    return {
        x: drawingCanvasState.startX + Math.cos(angle) * lengthInPixels,
        y: drawingCanvasState.startY + Math.sin(angle) * lengthInPixels
    };
}

function getDimensionedDrawingPoint(point) {
    const tool = drawingCanvasState.currentTool;
    if (['line', 'centerline'].includes(tool)) {
        return getLineEndpoint(point);
    }

    const lengthText = document.getElementById('lineLengthInput')?.value.trim();
    const heightText = document.getElementById('drawingHeightInput')?.value.trim();
    const radiusTool = ['circle', 'arc'].includes(tool);
    const isPaletteTool = drawingPalettes[drawingCanvasState.level]?.some(([paletteTool]) => paletteTool === tool);
    const boxTool = ['rect', 'leader'].includes(tool) || isPaletteTool;

    if (!lengthText && !heightText) return point;

    const dimensionToPixels = (text, label) => {
        if (!text) return null;
        const value = Number(text);
        if (!Number.isFinite(value) || value <= 0) {
            showDrawingCommandStatus(`${label} must be a positive number in ${getDrawingUnit()}.`);
            return NaN;
        }
        return value * getUnitToMillimeters() / getMillimetersPerPixel();
    };

    const width = dimensionToPixels(lengthText, radiusTool ? 'Radius' : 'Width');
    if (Number.isNaN(width)) return null;
    if (radiusTool) {
        return width === null
            ? point
            : { x: drawingCanvasState.startX + width, y: drawingCanvasState.startY };
    }

    if (!boxTool) return point;
    const height = dimensionToPixels(heightText, 'Height');
    if (Number.isNaN(height)) return null;

    const scale = isPaletteTool ? drawingCanvasState.materialScale : 1;
    return {
        x: width === null ? point.x : drawingCanvasState.startX + width / scale,
        y: height === null ? point.y : drawingCanvasState.startY + height / scale
    };
}

function hasCompleteDrawingDimensions() {
    const length = document.getElementById('lineLengthInput')?.value.trim();
    const height = document.getElementById('drawingHeightInput')?.value.trim();
    const tool = drawingCanvasState.currentTool;
    const isPaletteTool = drawingPalettes[drawingCanvasState.level]?.some(([paletteTool]) => paletteTool === tool);
    const boxTool = ['rect', 'leader'].includes(tool) || isPaletteTool;
    return boxTool ? Boolean(length && height) : Boolean(length);
}

function previewPendingDrawing() {
    const { canvas, ctx, baseImageData, lastCursorPoint } = drawingCanvasState;
    if (!drawingCanvasState.awaitingDimensions || !canvas || !ctx || !baseImageData || !lastCursorPoint) return;

    ctx.putImageData(baseImageData, 0, 0);
    const point = drawingCanvasState.activeSnapPoint || constrainDrawingPoint(lastCursorPoint.x, lastCursorPoint.y);
    const endpoint = getDimensionedDrawingPoint(point) || point;
    drawPreview(drawingCanvasState.startX, drawingCanvasState.startY, endpoint.x, endpoint.y);
    updateDrawingMeasurement(endpoint);
}

function commitPendingDrawing(event) {
    if (drawingCanvasState.timeExpired || event.key !== 'Enter' || !drawingCanvasState.awaitingDimensions) return;
    event.preventDefault();

    if (!hasCompleteDrawingDimensions()) {
        showDrawingCommandStatus('Enter all required dimensions, then press Enter to finish the geometry.');
        const length = document.getElementById('lineLengthInput')?.value.trim();
        (length ? document.getElementById('drawingHeightInput') : document.getElementById('lineLengthInput'))?.focus();
        return;
    }

    const { canvas, startX, startY } = drawingCanvasState;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = rect.left + startX / canvas.width * rect.width;
    const clientY = rect.top + startY / canvas.height * rect.height;
    drawingCanvasState.awaitingDimensions = false;
    drawingCanvasState.isDrawing = true;
    canvas.dispatchEvent(new PointerEvent('pointerup', {
        bubbles: true,
        pointerId: 1,
        pointerType: 'mouse',
        button: 0,
        clientX,
        clientY
    }));
}

function updateDrawingMeasurement(point) {
    const measurement = document.getElementById('drawingMeasurement');
    const { canvas, startX, startY } = drawingCanvasState;
    if (!measurement || !canvas) return;

    const dx = point.x - startX;
    const dy = point.y - startY;
    const width = Math.abs(dx) * getMillimetersPerPixel();
    const height = Math.abs(dy) * getMillimetersPerPixel();
    const length = Math.hypot(dx, dy) * getMillimetersPerPixel();
    const angle = Math.round((Math.atan2(-dy, dx) * 180 / Math.PI + 360) % 360) % 360;
    const isPaletteTool = drawingPalettes[drawingCanvasState.level]?.some(([tool]) => tool === drawingCanvasState.currentTool);
    const symbolScale = isPaletteTool ? drawingCanvasState.materialScale : 1;
    const radiusTool = ['circle', 'arc'].includes(drawingCanvasState.currentTool);
    const boxTool = drawingCanvasState.currentTool === 'rect'
        || drawingCanvasState.currentTool === 'leader'
        || isPaletteTool;
    measurement.textContent = radiusTool
        ? `R ${formatDrawingLength(length)}`
        : boxTool
            ? `${formatDrawingLength(width * symbolScale)} × ${formatDrawingLength(height * symbolScale)}`
            : `${formatDrawingLength(length)}  ·  ${angle.toFixed(0)}°`;

    const container = canvas.parentElement;
    const canvasRect = canvas.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    measurement.style.left = `${canvasRect.left - containerRect.left + container.scrollLeft + point.x / canvas.width * canvasRect.width + 12}px`;
    measurement.style.top = `${canvasRect.top - containerRect.top + container.scrollTop + point.y / canvas.height * canvasRect.height - 28}px`;
    measurement.hidden = false;
}

function parseDrawingCommandPoint(value, referencePoint) {
    const number = '[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)';
    const relativeMatch = value.match(new RegExp(`^@(${number})<(${number})>$`));
    if (relativeMatch) {
        if (!referencePoint) return null;
        const distance = Number(relativeMatch[1]);
        const angle = Number(relativeMatch[2]) * Math.PI / 180;
        return {
            x: referencePoint.x + Math.cos(angle) * distance,
            y: referencePoint.y + Math.sin(angle) * distance
        };
    }

    const absoluteMatch = value.match(new RegExp(`^(${number}),(${number})$`));
    if (!absoluteMatch) return null;
    return { x: Number(absoluteMatch[1]), y: Number(absoluteMatch[2]) };
}

function drawingCommandPointToCanvas(point) {
    const mmPerPixel = getMillimetersPerPixel();
    return {
        x: point.x / mmPerPixel,
        y: drawingCanvasState.canvas.height - point.y / mmPerPixel
    };
}

function drawCommandGeometry(command, args) {
    const { canvas, ctx } = drawingCanvasState;
    if (!canvas || !ctx) return false;

    const pointCount = command === 'LINE' || command === 'POLYLINE' || command === 'RECTANGLE' || command === 'DIMENSION' || command === 'LEADER' || command === 'CENTERLINE' ? 2 : 1;
    if (args.length < pointCount) {
        showDrawingCommandStatus(`${command} needs ${pointCount === 1 ? 'a point' : 'two points'} in x,y format. Type HELP for examples.`);
        return true;
    }

    const modelPoints = [];
    for (const token of args.slice(0, pointCount)) {
        const point = parseDrawingCommandPoint(token, modelPoints[modelPoints.length - 1]);
        if (!point) {
            showDrawingCommandStatus(`Invalid point "${token}". Use x,y or @distance<angle>.`);
            return true;
        }
        modelPoints.push(point);
    }

    const points = modelPoints.map(drawingCommandPointToCanvas);
    if (points.some((point) => point.x < 0 || point.x > canvas.width || point.y < 0 || point.y > canvas.height)) {
        showDrawingCommandStatus('Point is outside the drawing sheet. Coordinates start at the lower-left corner in millimeters.');
        return true;
    }

    const [start, end] = points;
    ctx.save();
    ctx.strokeStyle = document.getElementById('colorPicker').value;
    ctx.fillStyle = ctx.strokeStyle;
    ctx.lineWidth = Number(document.getElementById('lineThickness').value) || 1;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (command === 'LINE' || command === 'POLYLINE' || command === 'CENTERLINE' || command === 'LEADER' || command === 'DIMENSION') {
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
        if (command === 'LINE') {
            drawLineLabel(start, end);
        }
        if (command === 'CENTERLINE') {
            ctx.setLineDash([12, 4, 3, 4]);
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.stroke();
            ctx.setLineDash([]);
        } else if (command === 'LEADER') {
            const angle = Math.atan2(end.y - start.y, end.x - start.x);
            const arrowLength = 9;
            ctx.beginPath();
            ctx.moveTo(end.x, end.y);
            ctx.lineTo(end.x - arrowLength * Math.cos(angle - Math.PI / 6), end.y - arrowLength * Math.sin(angle - Math.PI / 6));
            ctx.moveTo(end.x, end.y);
            ctx.lineTo(end.x - arrowLength * Math.cos(angle + Math.PI / 6), end.y - arrowLength * Math.sin(angle + Math.PI / 6));
            ctx.stroke();
        } else if (command === 'DIMENSION') {
            const distance = Math.hypot(modelPoints[1].x - modelPoints[0].x, modelPoints[1].y - modelPoints[0].y);
            ctx.font = '12px Arial';
            ctx.fillText(`${Number(distance.toFixed(2))} mm`, (start.x + end.x) / 2 + 5, (start.y + end.y) / 2 - 7);
        }
    } else if (command === 'RECTANGLE') {
        ctx.strokeRect(start.x, start.y, end.x - start.x, end.y - start.y);
    } else if (command === 'CIRCLE' || command === 'ARC') {
        let radius;
        if (args[1] && args[1].includes(',')) {
            const radiusPoint = parseDrawingCommandPoint(args[1], modelPoints[0]);
            if (!radiusPoint) {
                ctx.restore();
                showDrawingCommandStatus(`Invalid radius point "${args[1]}". Use x,y.`);
                return true;
            }
            radius = Math.hypot(radiusPoint.x - modelPoints[0].x, radiusPoint.y - modelPoints[0].y) / getMillimetersPerPixel();
        } else {
            const radiusInMillimeters = Number(args[1]);
            if (!Number.isFinite(radiusInMillimeters) || radiusInMillimeters <= 0) {
                ctx.restore();
                showDrawingCommandStatus(`${command} needs a positive radius in millimeters, or a point in x,y format.`);
                return true;
            }
            radius = radiusInMillimeters / getMillimetersPerPixel();
        }
        if (!Number.isFinite(radius) || radius <= 0 || start.x - radius < 0 || start.x + radius > canvas.width || start.y - radius < 0 || start.y + radius > canvas.height) {
            ctx.restore();
            showDrawingCommandStatus('Shape is outside the drawing sheet. Check its center and radius.');
            return true;
        }
        ctx.beginPath();
        if (command === 'CIRCLE') {
            ctx.arc(start.x, start.y, radius, 0, Math.PI * 2);
        } else {
            const startAngle = Number(args[2] || 0);
            const endAngle = Number(args[3] || 180);
            if (!Number.isFinite(startAngle) || !Number.isFinite(endAngle) || startAngle === endAngle) {
                ctx.restore();
                showDrawingCommandStatus('ARC angles must be different finite numbers in degrees.');
                return true;
            }
            ctx.arc(start.x, start.y, radius, -startAngle * Math.PI / 180, -endAngle * Math.PI / 180, true);
        }
        ctx.stroke();
    } else if (command === 'TEXT') {
        const label = args.slice(1).join(' ').replace(/^["']|["']$/g, '');
        if (!label) {
            ctx.restore();
            showDrawingCommandStatus('TEXT needs a point and a label, for example TEXT 500,500 "Grid A".');
            return true;
        }
        ctx.font = '14px Arial';
        ctx.fillText(label, start.x, start.y);
    } else {
        const radiusPoint = parseDrawingCommandPoint(args[1] || '', modelPoints[0]);
        if (!radiusPoint) {
            ctx.restore();
            showDrawingCommandStatus(`${command} needs two points in x,y format.`);
            return true;
        }
        const endPoint = drawingCommandPointToCanvas(radiusPoint);
        if (endPoint.x < 0 || endPoint.x > canvas.width || endPoint.y < 0 || endPoint.y > canvas.height) {
            ctx.restore();
            showDrawingCommandStatus('Point is outside the drawing sheet. Coordinates start at the lower-left corner in millimeters.');
            return true;
        }
        drawPaletteSymbol(command.toLowerCase(), start.x, start.y, endPoint.x, endPoint.y);
    }

    ctx.restore();
    if (command === 'LINE') {
        drawingCanvasState.lineSegments.push({
            x1: start.x,
            y1: start.y,
            x2: end.x,
            y2: end.y,
            tool: 'line',
            color: document.getElementById('colorPicker').value,
            lineWidth: Number(document.getElementById('lineThickness').value) || 1
        });
    }
    saveToHistory();
    const length = Math.hypot(modelPoints[1]?.x - modelPoints[0].x || 0, modelPoints[1]?.y - modelPoints[0].y || 0);
    const angle = command === 'LINE'
        ? Math.round((Math.atan2(modelPoints[1].y - modelPoints[0].y, modelPoints[1].x - modelPoints[0].x) * 180 / Math.PI + 360) % 360) % 360
        : null;
    showDrawingCommandStatus(command === 'LINE'
        ? `LINE complete • ${Number(length.toFixed(2))} mm at ${angle.toFixed(0)}°.`
        : `${command} complete${pointCount > 1 ? ` • ${Number(length.toFixed(2))} mm` : ''}.`);
    return true;
}

function runDrawingCommand(event) {
    event.preventDefault();
    const input = document.getElementById('drawingCommandInput');
    const parts = input.value.trim().split(/\s+/);
    const command = (parts.shift() || '').toLowerCase();
    const args = parts;
    if (!command) return;

    drawingCanvasState.commandHistory.push(input.value.trim());
    drawingCanvasState.commandHistoryIndex = drawingCanvasState.commandHistory.length;
    input.value = '';

    const toolCommands = {
        l: ['line', 'LINE'], line: ['line', 'LINE'],
        pl: ['line', 'POLYLINE'], polyline: ['line', 'POLYLINE'],
        rec: ['rect', 'RECTANGLE'], rect: ['rect', 'RECTANGLE'], rectangle: ['rect', 'RECTANGLE'],
        c: ['circle', 'CIRCLE'], circle: ['circle', 'CIRCLE'],
        a: ['arc', 'ARC'], arc: ['arc', 'ARC'],
        dim: ['dimension', 'DIMENSION'], dimension: ['dimension', 'DIMENSION'],
        t: ['text', 'TEXT'], text: ['text', 'TEXT'],
        leader: ['leader', 'LEADER'], centerline: ['centerline', 'CENTERLINE'],
        select: ['select', 'SELECT'], crossing: ['select', 'SELECT']
    };
    const match = toolCommands[command] || (drawingPalettes[drawingCanvasState.level]?.some(([tool]) => tool === command)
        ? [command, command.toUpperCase()]
        : null);

    if (match) {
        const commandName = match[1];
        if (args.length) {
            if (commandName === 'POLYLINE') {
                const points = [];
                for (const value of args) {
                    const point = parseDrawingCommandPoint(value, points[points.length - 1]);
                    if (!point) break;
                    points.push(point);
                }
                if (points.length < 2 || points.length !== args.length) {
                    showDrawingCommandStatus('POLYLINE needs two or more points in x,y format. Type HELP for examples.');
                    return;
                }
                const ctx = drawingCanvasState.ctx;
                const canvas = drawingCanvasState.canvas;
                const canvasPoints = points.map(drawingCommandPointToCanvas);
                if (canvasPoints.some((point) => point.x < 0 || point.x > canvas.width || point.y < 0 || point.y > canvas.height)) {
                    showDrawingCommandStatus('Point is outside the drawing sheet. Coordinates start at the lower-left corner in millimeters.');
                    return;
                }
                ctx.save();
                ctx.strokeStyle = document.getElementById('colorPicker').value;
                ctx.lineWidth = Number(document.getElementById('lineThickness').value) || 1;
                ctx.beginPath();
                ctx.moveTo(canvasPoints[0].x, canvasPoints[0].y);
                canvasPoints.slice(1).forEach((point) => ctx.lineTo(point.x, point.y));
                ctx.stroke();
                ctx.restore();
                for (let index = 1; index < canvasPoints.length; index += 1) {
                    drawingCanvasState.lineSegments.push({
                        x1: canvasPoints[index - 1].x,
                        y1: canvasPoints[index - 1].y,
                        x2: canvasPoints[index].x,
                        y2: canvasPoints[index].y,
                        tool: 'line',
                        color: document.getElementById('colorPicker').value,
                        lineWidth: Number(document.getElementById('lineThickness').value) || 1
                    });
                }
                saveToHistory();
                showDrawingCommandStatus(`POLYLINE complete • ${points.length} points.`);
                return;
            }
            if (['LINE', 'RECTANGLE', 'CIRCLE', 'ARC', 'DIMENSION', 'TEXT', 'LEADER', 'CENTERLINE'].includes(commandName) || drawingPalettes[drawingCanvasState.level]?.some(([tool]) => tool === command)) {
                drawCommandGeometry(commandName, args);
                return;
            }
        }
        if (command === 'pl' || command === 'polyline') drawingCanvasState.continueLine = true;
        setDrawingTool(match[0]);
        showDrawingCommandStatus(`${match[1]} active. Click and drag in the drawing area.`);
        return;
    }

    switch (command) {
        case 'u':
        case 'undo':
            undoDrawing();
            showDrawingCommandStatus('UNDO');
            break;
        case 'redo':
            redoDrawing();
            showDrawingCommandStatus('REDO');
            break;
        case 'delete':
        case 'erase':
        case 'eraseall':
        case 'clear':
            if (command === 'delete' || command === 'erase') deleteSelectedArea();
            else clearDrawingCanvas();
            showDrawingCommandStatus(command.toUpperCase());
            break;
        case 'ortho':
        case 'orthomode':
            toggleOrtho();
            showDrawingCommandStatus(`ORTHO ${drawingCanvasState.ortho ? 'ON' : 'OFF'}`);
            break;
        case 'osnap':
        case 'snap':
            toggleObjectSnap();
            break;
        case 'grid':
        case 'gridsnap':
            toggleSnap();
            showDrawingCommandStatus(`GRID SNAP ${drawingCanvasState.snap ? 'ON' : 'OFF'}`);
            break;
        case 'zoom':
        case 'z':
        case 'fit':
        case 'extents':
            setDrawingZoom(1);
            showDrawingCommandStatus('ZOOM FIT');
            break;
        case 'save':
            saveDrawingVersion(drawingCanvasState.level);
            showDrawingCommandStatus('Drawing version saved.');
            break;
        case 'export':
            exportDrawing();
            showDrawingCommandStatus('Drawing exported as PNG.');
            break;
        case 'fullscreen':
        case 'fs':
            toggleDrawingFullscreen();
            showDrawingCommandStatus('FULL SCREEN toggled.');
            break;
        case 'help':
            showDrawingCommandStatus('Use mm from lower-left: LINE 0,0 @1200<0> draws an exact 1200 mm line • RECTANGLE 0,0 1000,600 • CIRCLE 500,300 100. Also: ARC, DIMENSION, TEXT, WALL, UNDO, REDO, CLEAR, ORTHO, OSNAP, GRID, ZOOM, SAVE, EXPORT.');
            break;
        default:
            showDrawingCommandStatus(`Unknown command: ${command}. Type HELP for commands.`);
    }
}

function navigateDrawingCommandHistory(event) {
    const history = drawingCanvasState.commandHistory;
    if (!history.length) return;

    if (event.key === 'ArrowUp') {
        event.preventDefault();
        drawingCanvasState.commandHistoryIndex = Math.max(0, drawingCanvasState.commandHistoryIndex - 1);
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        drawingCanvasState.commandHistoryIndex = Math.min(history.length, drawingCanvasState.commandHistoryIndex + 1);
    } else {
        return;
    }

    const input = document.getElementById('drawingCommandInput');
    input.value = history[drawingCanvasState.commandHistoryIndex] || '';
    input.setSelectionRange(input.value.length, input.value.length);
}

function handleDrawingCommandKey(event) {
    if (event.key === 'Escape') {
        event.currentTarget.value = '';
        setDrawingTool('pointer');
        showDrawingCommandStatus('Command cancelled.');
    } else {
        navigateDrawingCommandHistory(event);
    }
}

function cancelDrawingInteraction() {
    const { ctx } = drawingCanvasState;
    if (drawingCanvasState.baseImageData && ctx) {
        ctx.putImageData(drawingCanvasState.baseImageData, 0, 0);
    } else if (drawingCanvasState.selectionImageData && ctx) {
        ctx.putImageData(drawingCanvasState.selectionImageData, 0, 0);
    }
    drawingCanvasState.isDrawing = false;
    drawingCanvasState.awaitingDimensions = false;
    drawingCanvasState.baseImageData = null;
    drawingCanvasState.selectionImageData = null;
    drawingCanvasState.selectedBounds = null;
    drawingCanvasState.selectionStart = null;
    drawingCanvasState.activeSnapPoint = null;
    drawingCanvasState.lastPoint = null;
    drawingCanvasState.continueLine = false;
    document.getElementById('drawingMeasurement')?.setAttribute('hidden', '');
    document.getElementById('selectionInfo')?.replaceChildren(document.createTextNode('No area selected'));
    if (drawingCanvasState.canvas) setDrawingTool('pointer');
    showDrawingCommandStatus('Drawing command cancelled.');
}

function handleDrawingKeyboardShortcut(event) {
    if (!document.querySelector('.drawing-page') || drawingCanvasState.timeExpired) return;
    if (event.key === 'Escape') {
        event.preventDefault();
        cancelDrawingInteraction();
        return;
    }

    const target = event.target;
    if (event.key !== 'Delete' && event.key !== 'Backspace') return;
    if (target instanceof HTMLElement
        && (target.isContentEditable || target.matches('input, textarea, select'))) return;
    if (drawingCanvasState.selectedBounds) {
        event.preventDefault();
        deleteSelectedArea();
    }
}

async function toggleDrawingFullscreen() {
    const workspace = document.querySelector('.drawing-page');
    if (!workspace) return;

    try {
        if (document.fullscreenElement) {
            await document.exitFullscreen();
        } else if (workspace.requestFullscreen) {
            await workspace.requestFullscreen();
        } else {
            workspace.classList.toggle('is-fullscreen');
        }
    } catch (error) {
        workspace.classList.toggle('is-fullscreen');
    }
}

document.addEventListener('keydown', handleDrawingKeyboardShortcut);

document.addEventListener('fullscreenchange', () => {
    const button = document.getElementById('drawingFullscreenButton');
    if (button) button.textContent = document.fullscreenElement ? 'EXIT FULL SCREEN' : 'FULL SCREEN';
});

function deleteSelectedArea() {
    const bounds = drawingCanvasState.selectedBounds;
    const { ctx, canvas } = drawingCanvasState;
    if (drawingCanvasState.timeExpired || !bounds || !ctx || !canvas) return;
    if (drawingCanvasState.selectionImageData) {
        ctx.putImageData(drawingCanvasState.selectionImageData, 0, 0);
    }
    const selectedSegments = drawingCanvasState.lineSegments.filter((segment) =>
        (!segment.tool || segment.tool === 'line') && segmentIntersectsBounds(segment, bounds)
    );
    selectedSegments.forEach((segment) => {
        const index = drawingCanvasState.lineSegments.indexOf(segment);
        if (index < 0) return;
        eraseSegmentPixels(segment, drawingCanvasState.lineSegments.filter((_, segmentIndex) => segmentIndex !== index));
        drawingCanvasState.lineSegments.splice(index, 1);
    });
    ctx.clearRect(bounds.left, bounds.top, bounds.width, bounds.height);
    ctx.save();
    ctx.beginPath();
    ctx.rect(bounds.left, bounds.top, bounds.width, bounds.height);
    ctx.clip();
    drawGridAndScaleReference();
    ctx.restore();
    drawingCanvasState.selectedBounds = null;
    drawingCanvasState.selectionStart = null;
    drawingCanvasState.selectionImageData = null;
    drawingCanvasState.baseImageData = null;
    drawingCanvasState.lineSegments = drawingCanvasState.lineSegments.filter((segment) => {
        const left = Math.min(segment.x1, segment.x2);
        const right = Math.max(segment.x1, segment.x2);
        const top = Math.min(segment.y1, segment.y2);
        const bottom = Math.max(segment.y1, segment.y2);
        return segment.tool === 'line' || !segment.tool
            || right < bounds.left || left > bounds.left + bounds.width
            || bottom < bounds.top || top > bounds.top + bounds.height;
    });
    saveToHistory();
    document.getElementById('selectionInfo')?.replaceChildren(document.createTextNode('No area selected'));
    showDrawingCommandStatus('Selection erased.');
}

function saveToHistory() {
    if (!drawingCanvasState.canvas) return;
    const snapshot = drawingCanvasState.canvas.toDataURL();
    const lineSnapshot = drawingCanvasState.lineSegments.map((segment) => ({ ...segment }));
    if (drawingCanvasState.drawingHistory[drawingCanvasState.historyIndex] === snapshot
        && JSON.stringify(drawingCanvasState.drawingLineHistory[drawingCanvasState.historyIndex]) === JSON.stringify(lineSnapshot)) return;

    drawingCanvasState.drawingHistory = drawingCanvasState.drawingHistory.slice(0, drawingCanvasState.historyIndex + 1);
    drawingCanvasState.drawingLineHistory = drawingCanvasState.drawingLineHistory.slice(0, drawingCanvasState.historyIndex + 1);
    drawingCanvasState.drawingHistory.push(snapshot);
    drawingCanvasState.drawingLineHistory.push(lineSnapshot);
    if (drawingCanvasState.drawingHistory.length > 50) {
        drawingCanvasState.drawingHistory.shift();
        drawingCanvasState.drawingLineHistory.shift();
    }
    drawingCanvasState.historyIndex = drawingCanvasState.drawingHistory.length - 1;
    saveDrawingDraft();
    updateHistoryButtons();
}

function undoDrawing() {
    if (drawingCanvasState.timeExpired) return;
    if (drawingCanvasState.historyIndex <= 0) return;
    drawingCanvasState.historyIndex--;
    restoreDrawingSnapshot(
        drawingCanvasState.drawingHistory[drawingCanvasState.historyIndex],
        drawingCanvasState.drawingLineHistory[drawingCanvasState.historyIndex]
    );
}

function redoDrawing() {
    if (drawingCanvasState.timeExpired) return;
    if (drawingCanvasState.historyIndex >= drawingCanvasState.drawingHistory.length - 1) return;
    drawingCanvasState.historyIndex++;
    restoreDrawingSnapshot(
        drawingCanvasState.drawingHistory[drawingCanvasState.historyIndex],
        drawingCanvasState.drawingLineHistory[drawingCanvasState.historyIndex]
    );
}

function restoreDrawingSnapshot(snapshot, lineSegments = []) {
    if (drawingCanvasState.timeExpired) return;
    const image = new Image();
    image.onload = function() {
        const { ctx, canvas } = drawingCanvasState;
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0);
        drawingCanvasState.lineSegments = lineSegments.map((segment) => ({ ...segment }));
        saveDrawingDraft();
        updateHistoryButtons();
    };
    image.src = snapshot;
}

function updateHistoryButtons() {
    const undoButton = document.getElementById('undoDrawingButton');
    const redoButton = document.getElementById('redoDrawingButton');
    if (undoButton) undoButton.disabled = drawingCanvasState.historyIndex <= 0;
    if (redoButton) redoButton.disabled = drawingCanvasState.historyIndex >= drawingCanvasState.drawingHistory.length - 1;
}

function getDrawingStorageKey(level = drawingCanvasState.level) {
    return `structDraftDrawing${currentYear}-level${level}`;
}

function getDrawingLineStorageKey(level = drawingCanvasState.level) {
    return `${getDrawingStorageKey(level)}-lines`;
}

function getSavedDrawingLineSegments(level = drawingCanvasState.level) {
    try {
        const segments = JSON.parse(localStorage.getItem(getDrawingLineStorageKey(level)) || '[]');
        return Array.isArray(segments)
            ? segments.filter((segment) => segment
                && ['x1', 'y1', 'x2', 'y2'].every((key) => Number.isFinite(segment[key])))
            : [];
    } catch (error) {
        return [];
    }
}

function getDrawingHistory(number) {
    try {
        const history = JSON.parse(localStorage.getItem(`structDraftDrawingHistory${currentYear}-level${number}`) || '[]');
        return Array.isArray(history) ? history : [];
    } catch (error) {
        return [];
    }
}

function updateDrawingHistoryCount(number) {
    const count = document.getElementById('drawingHistoryCount');
    if (count) count.textContent = `HISTORY ${getDrawingHistory(number).length}`;
}

function saveDrawingVersion(number) {
    if (!drawingCanvasState.canvas) return;

    const image = drawingCanvasState.canvas.toDataURL('image/png');
    const history = getDrawingHistory(number);
    if (history[0]?.image === image) return;

    history.unshift({
        savedAt: new Date().toISOString(),
        image,
        lineSegments: drawingCanvasState.lineSegments.map((segment) => ({ ...segment }))
    });
    try {
        localStorage.setItem(`structDraftDrawingHistory${currentYear}-level${number}`, JSON.stringify(history.slice(0, 12)));
        const status = document.getElementById('drawingSaveStatus');
        if (status) status.textContent = 'Version saved';
        updateDrawingHistoryCount(number);
    } catch (error) {
        const status = document.getElementById('drawingSaveStatus');
        if (status) status.textContent = 'History storage is full';
    }
}

function drawingHistoryView(number) {
    const history = getDrawingHistory(number);
    const entries = history.map((version, index) => `
        <article class="drawing-history-item">
            <img class="drawing-history-preview" src="${version.image}" alt="Drawing version ${index + 1}">
            <div class="drawing-history-meta">
                <strong>Version ${history.length - index}</strong><br>
                ${new Date(version.savedAt).toLocaleString()}
            </div>
            <button class="btn" onclick="restoreDrawingVersion(${number}, ${index})" ${drawingCanvasState.timeExpired ? 'disabled' : ''}>RESTORE VERSION</button>
        </article>
    `).join('');

    document.querySelector('#app').innerHTML = `
        <section class="page">
            <button class="back" onclick="drawingPreview(${number})">← BACK TO DRAWING</button>
            <div class="page-head">
                <span>LEVEL 0${number} • DRAWING HISTORY</span>
                <h2>Saved Drawing Versions</h2>
                <p>${history.length} saved version${history.length === 1 ? '' : 's'} for ${currentYear}.</p>
            </div>
            ${history.length ? `<div class="drawing-history-grid">${entries}</div>` : '<div class="empty">No saved versions yet. Use SAVE VERSION in the drawing workspace.</div>'}
        </section>
    `;
}

function restoreDrawingVersion(number, index) {
    if (drawingCanvasState.timeExpired) return;
    const version = getDrawingHistory(number)[index];
    if (!version || !confirm('Restore this version? Your current draft will be saved to history first.')) return;

    if (drawingCanvasState.canvas && localStorage.getItem(getDrawingStorageKey(number)) !== drawingCanvasState.canvas.toDataURL('image/png')) {
        saveDrawingVersion(number);
    }
    localStorage.setItem(getDrawingStorageKey(number), version.image);
    localStorage.setItem(getDrawingLineStorageKey(number), JSON.stringify(version.lineSegments || []));
    drawingPreview(number);
}

function saveDrawingDraft() {
    const { canvas } = drawingCanvasState;
    if (!canvas) return;

    try {
        localStorage.setItem(getDrawingStorageKey(), canvas.toDataURL('image/png'));
        localStorage.setItem(getDrawingLineStorageKey(), JSON.stringify(drawingCanvasState.lineSegments));
        const status = document.getElementById('drawingSaveStatus');
        if (status) status.textContent = 'Draft saved locally';
    } catch (error) {
        const status = document.getElementById('drawingSaveStatus');
        if (status) status.textContent = 'Unable to save draft';
    }
}

function exportDrawing() {
    const { canvas } = drawingCanvasState;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `structdraft-${currentYear}-level-${drawingCanvasState.level}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

function clearDrawingCanvas() {
    const { ctx, canvas } = drawingCanvasState;
    if (drawingCanvasState.timeExpired || !ctx || !canvas) return;

    if (confirm('Are you sure you want to clear the canvas?')) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawTestReference();
        drawingCanvasState.lineSegments = [];
        drawingCanvasState.drawingHistory = [];
        drawingCanvasState.drawingLineHistory = [];
        drawingCanvasState.historyIndex = -1;
        saveToHistory();
    }
}

function drawPreview(sx, sy, ex, ey) {
    const { ctx } = drawingCanvasState;
    if (!ctx) return;

    ctx.strokeStyle = document.getElementById('colorPicker').value;
    ctx.lineWidth = document.getElementById('lineThickness').value;
    ctx.globalAlpha = 0.5;

    switch (drawingCanvasState.currentTool) {
        case 'line':
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, ey);
            ctx.stroke();
            drawLineMeasurement(sx, sy, ex, ey);
            break;
        case 'rect':
            ctx.strokeRect(sx, sy, ex - sx, ey - sy);
            break;
        case 'circle':
            const r = Math.sqrt(Math.pow(ex - sx, 2) + Math.pow(ey - sy, 2));
            ctx.beginPath();
            ctx.arc(sx, sy, r, 0, 2 * Math.PI);
            ctx.stroke();
            break;
        case 'arc':
            const arcRadius = Math.sqrt(Math.pow(ex - sx, 2) + Math.pow(ey - sy, 2));
            ctx.beginPath();
            ctx.arc(sx, sy, arcRadius, 0, Math.PI);
            ctx.stroke();
            break;
        case 'centerline':
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, ey);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(sx - 8, sy - 8);
            ctx.lineTo(sx + 8, sy + 8);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(ex - 8, ey - 8);
            ctx.lineTo(ex + 8, ey + 8);
            ctx.stroke();
            break;
        case 'leader':
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, sy);
            ctx.lineTo(ex, ey);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(ex, ey);
            ctx.lineTo(ex - 6, ey - 8);
            ctx.lineTo(ex + 6, ey - 8);
            ctx.closePath();
            ctx.stroke();
            break;
        case 'dimension':
            drawDimensionGeometry({ x: sx, y: sy }, { x: ex, y: ey }, 24);
            break;
            default:
                drawPaletteSymbol(drawingCanvasState.currentTool, sx, sy, ex, ey);
                break;
    }

    drawSnapMarker(drawingCanvasState.activeSnapPoint);
    ctx.globalAlpha = 1;
}

function drawPaletteSymbol(tool, sx, sy, ex, ey) {
    const { ctx } = drawingCanvasState;
    const width = Math.max(1, Math.abs(ex - sx)) * drawingCanvasState.materialScale;
    const height = Math.max(1, Math.abs(ey - sy)) * drawingCanvasState.materialScale;
    const left = Math.min(sx, ex);
    const top = Math.min(sy, ey);
    const right = left + width;
    const bottom = top + height;
    ctx.strokeStyle = document.getElementById('colorPicker').value;
    ctx.lineWidth = document.getElementById('lineThickness').value;
    ctx.globalAlpha = 1;
    ctx.save();
    ctx.translate(left + width / 2, top + height / 2);
    ctx.rotate(drawingCanvasState.materialRotation * Math.PI / 180);
    ctx.translate(-(left + width / 2), -(top + height / 2));
    ctx.beginPath();
    if (tool === 'door' || tool === 'elevdoor') {
        ctx.arc(left, bottom, width, Math.PI * 1.5, Math.PI * 2);
        ctx.moveTo(left, bottom);
        ctx.lineTo(left, top);
    } else if (tool === 'window' || tool === 'elevwindow') {
        ctx.rect(left, top, width, height);
        ctx.moveTo(left, top);
        ctx.lineTo(right, bottom);
        ctx.moveTo(right, top);
        ctx.lineTo(left, bottom);
    } else if (tool === 'bed' || tool === 'table' || tool === 'sofa' || tool === 'elevwall') {
        ctx.rect(left, top, width, height);
        ctx.moveTo(left + width / 2, top);
        ctx.lineTo(left + width / 2, bottom);
        if (tool === 'bed') ctx.moveTo(left, top + height * 0.25), ctx.lineTo(right, top + height * 0.25);
    } else if (tool === 'wall') {
        ctx.rect(left, top, width, height);
    } else if (tool === 'beam') {
        ctx.rect(left, top + height * 0.35, width, Math.max(8, height * 0.3));
    } else if (tool === 'chair' || tool === 'toilet' || tool === 'sink') {
        ctx.arc(left + width / 2, top + height / 2, Math.min(width, height) / 2, 0, Math.PI * 2);
    } else if (tool === 'roof') {
        ctx.moveTo(left, bottom);
        ctx.lineTo(left + width / 2, top);
        ctx.lineTo(right, bottom);
        ctx.closePath();
        ctx.stroke();
        if (drawingCanvasState.hatch) {
            ctx.save();
            ctx.clip();
            ctx.beginPath();
            for (let x = left - height; x < right; x += 14) {
                ctx.moveTo(x, bottom);
                ctx.lineTo(x + height, top);
            }
            ctx.stroke();
            ctx.restore();
        }
    } else if (tool === 'stairs') {
        ctx.rect(left, top, width, height);
        for (let x = left + width / 5; x < right; x += width / 5) ctx.moveTo(x, top), ctx.lineTo(x, bottom);
    } else if (tool === 'slab') {
        ctx.rect(left, top + height * 0.3, width, Math.max(8, height * 0.4));
    } else if (tool === 'column') {
        ctx.rect(left + width * 0.3, top, width * 0.4, height);
    } else if (tool === 'footing') {
        ctx.moveTo(left + width * 0.2, top);
        ctx.lineTo(right - width * 0.2, top);
        ctx.lineTo(right, bottom);
        ctx.lineTo(left, bottom);
        ctx.closePath();
    } else if (tool === 'rebar') {
        for (let x = left + width * 0.25; x < right; x += width * 0.25) {
            ctx.moveTo(x, top);
            ctx.lineTo(x, bottom);
        }
    } else if (tool === 'gridline') {
        const centerX = left + width / 2;
        ctx.setLineDash([6, 4]);
        ctx.moveTo(centerX, top + 14);
        ctx.lineTo(centerX, bottom);
        ctx.setLineDash([]);
        ctx.moveTo(centerX + 10, top + 10);
        ctx.arc(centerX, top + 10, 10, 0, Math.PI * 2);
        ctx.fillText('A', centerX - 3, top + 14);
    } else if (tool === 'sectionmark') {
        const centerX = left + width / 2;
        ctx.moveTo(left, top + height / 2);
        ctx.lineTo(right, top + height / 2);
        ctx.moveTo(centerX - 10, top + height / 2);
        ctx.lineTo(centerX, top + height / 2 - 14);
        ctx.lineTo(centerX + 10, top + height / 2);
        ctx.closePath();
    } else if (tool === 'levelmark') {
        ctx.moveTo(left, top + height / 2);
        ctx.lineTo(right, top + height / 2);
        ctx.moveTo(left, top + height / 2);
        ctx.lineTo(left + width * 0.2, top + height * 0.25);
    }
    if (tool !== 'roof') ctx.stroke();
    if (drawingCanvasState.hatch && ['wall', 'elevwall', 'beam', 'column', 'footing', 'slab'].includes(tool)) {
        ctx.save();
        ctx.clip();
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.55;
        for (let offset = -height; offset < width; offset += 12) {
            ctx.moveTo(left + offset, bottom);
            ctx.lineTo(left + offset + height, top);
        }
        ctx.stroke();
        ctx.restore();
    }
    ctx.restore();
}

function initializeDrawingCanvas() {
    const canvas = document.getElementById('drawingCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    drawingCanvasState.canvas = canvas;
    drawingCanvasState.ctx = ctx;
    drawingCanvasState.baseCanvasWidth = 0;
    setDrawingZoom(1);
    drawingCanvasState.currentTool = 'pointer';
    drawingCanvasState.isDrawing = false;
    drawingCanvasState.awaitingDimensions = false;
    drawingCanvasState.dimensionPhase = 0;
    drawingCanvasState.dimensionFirstPoint = null;
    drawingCanvasState.dimensionSecondPoint = null;
    drawingCanvasState.lastCursorPoint = null;
    drawingCanvasState.baseImageData = null;
    drawingCanvasState.selectionImageData = null;
    drawingCanvasState.selectionStart = null;
    drawingCanvasState.selectedBounds = null;
    drawingCanvasState.activeSnapPoint = null;
    drawingCanvasState.lastPoint = null;
    drawingCanvasState.continueLine = false;
    drawingCanvasState.drawingHistory = [];
    drawingCanvasState.drawingLineHistory = [];
    drawingCanvasState.lineSegments = getSavedDrawingLineSegments();
    drawingCanvasState.historyIndex = -1;
    const savedDrawing = localStorage.getItem(getDrawingStorageKey());
    document.getElementById('annotationScale').value = drawingCanvasState.annotationScale;
    document.getElementById('drawingUnit').value = drawingCanvasState.unit;
    updateDrawingUnit(drawingCanvasState.unit);
    document.getElementById('annotationScaleLabel').textContent = drawingCanvasState.annotationScale;
    document.getElementById('drawingAnnotationStatus').textContent = 'Annotation ' + drawingCanvasState.annotationScale;
    const materialScale = document.getElementById('materialScale');
    const materialScaleLabel = document.getElementById('materialScaleLabel');
    const materialRotation = document.getElementById('materialRotation');
    const materialRotationLabel = document.getElementById('materialRotationLabel');
    const hatchToggle = document.getElementById('hatchToggle');
    const osnapToggle = document.getElementById('osnapToggle');
    if (materialScale) materialScale.value = drawingCanvasState.materialScale;
    if (materialScaleLabel) materialScaleLabel.textContent = Math.round(drawingCanvasState.materialScale * 100) + '%';
    if (materialRotation) materialRotation.value = drawingCanvasState.materialRotation;
    if (materialRotationLabel) materialRotationLabel.textContent = drawingCanvasState.materialRotation + ' deg';
    if (osnapToggle) osnapToggle.classList.toggle('active', drawingCanvasState.objectSnap);
    if (hatchToggle) {
        hatchToggle.classList.toggle('active', drawingCanvasState.hatch);
        hatchToggle.textContent = drawingCanvasState.hatch ? 'HATCH ON' : 'HATCH';
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTestReference();
    setDrawingTool('pointer');

    if (savedDrawing) {
        const savedImage = new Image();
        savedImage.onload = function() {
            drawTestReference();
            ctx.drawImage(savedImage, 0, 0);
            saveToHistory();
        };
        savedImage.src = savedDrawing;
    } else {
        saveToHistory();
    }

    canvas.style.touchAction = 'none';
    ['lineLengthInput', 'drawingHeightInput', 'drawingAngleInput'].forEach((id) => {
        const input = document.getElementById(id);
        input?.addEventListener('keydown', commitPendingDrawing);
        input?.addEventListener('input', previewPendingDrawing);
    });

    canvas.addEventListener('pointerdown', (e) => {
        if (drawingCanvasState.timeExpired) return;
        if (e.button !== 0) return;
        if (drawingCanvasState.currentTool === 'pointer') return;

        if (drawingCanvasState.awaitingDimensions) {
            drawingCanvasState.awaitingDimensions = false;
            drawingCanvasState.isDrawing = true;
            canvas.setPointerCapture(e.pointerId);
            return;
        }

        if (drawingCanvasState.currentTool === 'dimension' && drawingCanvasState.dimensionPhase === 2) {
            finishDimensionPlacement(getCanvasPoint(e));
            return;
        }

        const pointerPoint = getCanvasPoint(e);
        const snappedPoint = drawingCanvasState.objectSnap && drawingCanvasState.currentTool !== 'select'
            ? findNearestLinePoint(pointerPoint)
            : null;
        const point = snappedPoint || pointerPoint;
        if (drawingCanvasState.selectionImageData) {
            ctx.putImageData(drawingCanvasState.selectionImageData, 0, 0);
            drawingCanvasState.selectionImageData = null;
            drawingCanvasState.selectedBounds = null;
            document.getElementById('selectionInfo')?.replaceChildren(document.createTextNode('No area selected'));
        }
        if (drawingCanvasState.currentTool === 'dimension' && drawingCanvasState.dimensionPhase === 1) {
            if (drawingCanvasState.baseImageData) ctx.putImageData(drawingCanvasState.baseImageData, 0, 0);
            drawingCanvasState.startX = drawingCanvasState.dimensionFirstPoint.x;
            drawingCanvasState.startY = drawingCanvasState.dimensionFirstPoint.y;
            drawingCanvasState.activeSnapPoint = snappedPoint;
            drawingCanvasState.lastCursorPoint = point;
            drawingCanvasState.isDrawing = true;
            canvas.setPointerCapture(e.pointerId);
            drawingCanvasState.baseImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            return;
        }
        drawingCanvasState.isDrawing = true;
        canvas.setPointerCapture(e.pointerId);
        drawingCanvasState.activeSnapPoint = snappedPoint;
        drawingCanvasState.lastCursorPoint = point;
        if (drawingCanvasState.currentTool === 'select') {
            drawingCanvasState.selectionStart = point;
            drawingCanvasState.baseImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            drawingCanvasState.selectionImageData = drawingCanvasState.baseImageData;
            return;
        }
        const nearLastPoint = drawingCanvasState.objectSnap && drawingCanvasState.lastPoint && Math.hypot(point.x - drawingCanvasState.lastPoint.x, point.y - drawingCanvasState.lastPoint.y) < 25;
        const connectedLine = drawingCanvasState.currentTool === 'line' && drawingCanvasState.continueLine && drawingCanvasState.lastPoint;
        const startPoint = snappedPoint || (nearLastPoint || connectedLine ? drawingCanvasState.lastPoint : point);
        drawingCanvasState.startX = startPoint.x;
        drawingCanvasState.startY = startPoint.y;
        drawingCanvasState.baseImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    });

    canvas.addEventListener('pointermove', (e) => {
        if (drawingCanvasState.timeExpired) return;
        if (drawingCanvasState.currentTool === 'dimension' && drawingCanvasState.dimensionPhase === 2) {
            previewDimensionPlacement(getCanvasPoint(e));
            return;
        }
        const selectingDimensionEndpoint = drawingCanvasState.currentTool === 'dimension'
            && drawingCanvasState.dimensionPhase === 1;
        if (!drawingCanvasState.isDrawing && !drawingCanvasState.awaitingDimensions && !selectingDimensionEndpoint) return;

        const pointerPoint = getCanvasPoint(e);
        const snappedPoint = drawingCanvasState.objectSnap && drawingCanvasState.currentTool !== 'select'
            ? findNearestLinePoint(pointerPoint)
            : null;
        const point = snappedPoint || pointerPoint;
        drawingCanvasState.activeSnapPoint = snappedPoint;
        drawingCanvasState.lastCursorPoint = point;
        if (drawingCanvasState.awaitingDimensions) {
            previewPendingDrawing();
            return;
        }
        if (drawingCanvasState.currentTool === 'select') {
            ctx.putImageData(drawingCanvasState.baseImageData, 0, 0);
            const left = Math.min(drawingCanvasState.selectionStart.x, point.x);
            const top = Math.min(drawingCanvasState.selectionStart.y, point.y);
            const width = Math.abs(point.x - drawingCanvasState.selectionStart.x);
            const height = Math.abs(point.y - drawingCanvasState.selectionStart.y);
            ctx.save();
            ctx.strokeStyle = '#aab5c1';
            ctx.fillStyle = 'rgba(170,181,193,0.12)';
            ctx.setLineDash([6, 4]);
            ctx.fillRect(left, top, width, height);
            ctx.strokeRect(left, top, width, height);
            ctx.restore();
            return;
        }
        const constrainedPoint = snappedPoint || constrainDrawingPoint(point.x, point.y);
        const previewPoint = getDimensionedDrawingPoint(constrainedPoint) || constrainedPoint;

        const currentX = previewPoint.x;
        const currentY = previewPoint.y;

        if (drawingCanvasState.baseImageData) {
            ctx.putImageData(drawingCanvasState.baseImageData, 0, 0);
            drawPreview(drawingCanvasState.startX, drawingCanvasState.startY, currentX, currentY);
        }
        if (document.getElementById('preciseDrawingControls') && !document.getElementById('preciseDrawingControls').hidden) {
            updateDrawingMeasurement(previewPoint);
        }
    });

    canvas.addEventListener('pointerup', (e) => {
        if (drawingCanvasState.timeExpired) return;
        if (!drawingCanvasState.isDrawing) return;

        const pointerPoint = getCanvasPoint(e);
        const snappedPoint = drawingCanvasState.objectSnap && drawingCanvasState.currentTool !== 'select'
            ? findNearestLinePoint(pointerPoint)
            : null;
        const point = snappedPoint || pointerPoint;
        drawingCanvasState.activeSnapPoint = snappedPoint;
        const constrainedPoint = snappedPoint || constrainDrawingPoint(point.x, point.y);
        const endPoint = getDimensionedDrawingPoint(constrainedPoint);

        drawingCanvasState.isDrawing = false;
        const measurement = document.getElementById('drawingMeasurement');
        if (measurement) measurement.hidden = true;
        if (!endPoint) {
            if (drawingCanvasState.baseImageData) ctx.putImageData(drawingCanvasState.baseImageData, 0, 0);
            drawingCanvasState.baseImageData = null;
            return;
        }
        const anchorClick = Math.hypot(
            constrainedPoint.x - drawingCanvasState.startX,
            constrainedPoint.y - drawingCanvasState.startY
        ) < 2;
        if (drawingCanvasState.currentTool === 'dimension') {
            if (drawingCanvasState.baseImageData) ctx.putImageData(drawingCanvasState.baseImageData, 0, 0);
            if (drawingCanvasState.dimensionPhase === 0) {
                drawingCanvasState.dimensionFirstPoint = { x: drawingCanvasState.startX, y: drawingCanvasState.startY };
                if (anchorClick) {
                    drawingCanvasState.dimensionPhase = 1;
                    showDrawingCommandStatus('DIMENSION: select the second point. Press Escape to cancel.');
                } else {
                    drawingCanvasState.dimensionSecondPoint = endPoint;
                    drawingCanvasState.dimensionPhase = 2;
                    previewDimensionPlacement(pointerPoint);
                    showDrawingCommandStatus('DIMENSION: move up or down to place the dimension line, then click.');
                }
                return;
            }
            if (drawingCanvasState.dimensionPhase === 1) {
                if (anchorClick) {
                    showDrawingCommandStatus('DIMENSION: choose a second point farther away, or press Escape.');
                    return;
                }
                drawingCanvasState.dimensionSecondPoint = endPoint;
                drawingCanvasState.dimensionPhase = 2;
                previewDimensionPlacement(pointerPoint);
                showDrawingCommandStatus('DIMENSION: move up or down to place the dimension line, then click.');
                return;
            }
        }
        const dimensionControls = document.getElementById('preciseDrawingControls');
        if (anchorClick && dimensionControls && !dimensionControls.hidden && !hasCompleteDrawingDimensions()) {
            drawingCanvasState.awaitingDimensions = true;
            drawingCanvasState.lastCursorPoint = constrainedPoint;
            showDrawingCommandStatus('Start point set. Enter the dimensions, then press Enter to finish, or click a second point.');
            document.getElementById('lineLengthInput')?.focus();
            updateDrawingMeasurement(constrainedPoint);
            return;
        }
        const endX = endPoint.x;
        const endY = endPoint.y;

        if (drawingCanvasState.currentTool === 'select') {
            if (drawingCanvasState.baseImageData) ctx.putImageData(drawingCanvasState.baseImageData, 0, 0);
            const bounds = {
                left: Math.min(drawingCanvasState.selectionStart.x, endX),
                top: Math.min(drawingCanvasState.selectionStart.y, endY),
                width: Math.abs(endX - drawingCanvasState.selectionStart.x),
                height: Math.abs(endY - drawingCanvasState.selectionStart.y)
            };
            drawingCanvasState.selectedBounds = bounds;
            ctx.save();
            ctx.strokeStyle = '#aab5c1';
            ctx.fillStyle = 'rgba(170,181,193,0.12)';
            ctx.setLineDash([6, 4]);
            ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
            ctx.strokeRect(bounds.left, bounds.top, bounds.width, bounds.height);
            ctx.restore();
            document.getElementById('selectionInfo')?.replaceChildren(document.createTextNode('Area selected. Press Delete or click DELETE SELECTED.'));
            return;
        }

        if (drawingCanvasState.baseImageData) {
            ctx.putImageData(drawingCanvasState.baseImageData, 0, 0);
        }
        const radius = ['circle', 'arc'].includes(drawingCanvasState.currentTool)
            ? Math.hypot(endX - drawingCanvasState.startX, endY - drawingCanvasState.startY)
            : 0;
        if (endX < 0 || endX > canvas.width || endY < 0 || endY > canvas.height
            || (radius && (drawingCanvasState.startX - radius < 0 || drawingCanvasState.startX + radius > canvas.width
                || drawingCanvasState.startY - radius < 0 || drawingCanvasState.startY + radius > canvas.height))) {
            drawingCanvasState.baseImageData = null;
            showDrawingCommandStatus('Geometry is outside the drawing sheet. Reduce its dimensions or start farther inside.');
            return;
        }

        ctx.strokeStyle = document.getElementById('colorPicker').value;
        ctx.lineWidth = document.getElementById('lineThickness').value;
        ctx.fillStyle = document.getElementById('colorPicker').value;

        switch (drawingCanvasState.currentTool) {
            case 'line':
                ctx.beginPath();
                ctx.moveTo(drawingCanvasState.startX, drawingCanvasState.startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();
                drawLineLabel(
                    { x: drawingCanvasState.startX, y: drawingCanvasState.startY },
                    { x: endX, y: endY }
                );
                break;
            case 'rect':
                ctx.strokeRect(drawingCanvasState.startX, drawingCanvasState.startY, endX - drawingCanvasState.startX, endY - drawingCanvasState.startY);
                break;
            case 'circle':
                const radius = Math.sqrt(Math.pow(endX - drawingCanvasState.startX, 2) + Math.pow(endY - drawingCanvasState.startY, 2));
                ctx.beginPath();
                ctx.arc(drawingCanvasState.startX, drawingCanvasState.startY, radius, 0, 2 * Math.PI);
                ctx.stroke();
                break;
            case 'arc':
                const arcRadius = Math.sqrt(Math.pow(endX - drawingCanvasState.startX, 2) + Math.pow(endY - drawingCanvasState.startY, 2));
                ctx.beginPath();
                ctx.arc(drawingCanvasState.startX, drawingCanvasState.startY, arcRadius, 0, Math.PI);
                ctx.stroke();
                break;
            case 'centerline':
                ctx.beginPath();
                ctx.moveTo(drawingCanvasState.startX, drawingCanvasState.startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(drawingCanvasState.startX - 8, drawingCanvasState.startY - 8);
                ctx.lineTo(drawingCanvasState.startX + 8, drawingCanvasState.startY + 8);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(endX - 8, endY - 8);
                ctx.lineTo(endX + 8, endY + 8);
                ctx.stroke();
                break;
            case 'dimension':
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(drawingCanvasState.startX, drawingCanvasState.startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(drawingCanvasState.startX - 10, drawingCanvasState.startY - 10);
                ctx.lineTo(drawingCanvasState.startX + 10, drawingCanvasState.startY + 10);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(endX - 10, endY - 10);
                ctx.lineTo(endX + 10, endY + 10);
                ctx.stroke();

                const extensionOffset = 18;
                const dimStartX = drawingCanvasState.startX + (endX - drawingCanvasState.startX) / 2;
                const dimStartY = drawingCanvasState.startY + (endY - drawingCanvasState.startY) / 2;
                const distance = formatDrawingLength(Math.hypot(endX - drawingCanvasState.startX, endY - drawingCanvasState.startY) * getMillimetersPerPixel());
                ctx.fillStyle = '#eef2f7';
                ctx.font = '12px Arial';
                ctx.fillText(distance, dimStartX, dimStartY - extensionOffset);
                break;
            case 'leader':
                ctx.beginPath();
                ctx.moveTo(drawingCanvasState.startX, drawingCanvasState.startY);
                ctx.lineTo(endX, drawingCanvasState.startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(endX, endY);
                ctx.lineTo(endX - 6, endY - 8);
                ctx.lineTo(endX + 6, endY - 8);
                ctx.closePath();
                ctx.stroke();
                break;
            case 'text':
                const text = prompt('Enter text:');
                if (text) {
                    ctx.fillStyle = document.getElementById('colorPicker').value;
                    ctx.font = 'bold 14px Arial';
                    ctx.fillText(text, drawingCanvasState.startX, endY);
                }
                break;
            default:
                drawPaletteSymbol(drawingCanvasState.currentTool, drawingCanvasState.startX, drawingCanvasState.startY, endX, endY);
                break;
        }

        if (['line', 'dimension', 'centerline'].includes(drawingCanvasState.currentTool)
            && Math.hypot(endX - drawingCanvasState.startX, endY - drawingCanvasState.startY) > 1) {
            drawingCanvasState.lineSegments.push({
                x1: drawingCanvasState.startX,
                y1: drawingCanvasState.startY,
                x2: endX,
                y2: endY,
                tool: drawingCanvasState.currentTool,
                color: ctx.strokeStyle,
                lineWidth: ctx.lineWidth
            });
        }

        if (drawingCanvasState.currentTool === 'line' && drawingCanvasState.continueLine) {
            drawingCanvasState.lastPoint = { x: endX, y: endY };
        } else if (drawingCanvasState.currentTool !== 'line') {
            drawingCanvasState.lastPoint = null;
        }

        if (['line', 'dimension', 'centerline'].includes(drawingCanvasState.currentTool)) {
            const length = Math.hypot(endX - drawingCanvasState.startX, endY - drawingCanvasState.startY) * getMillimetersPerPixel();
            const angle = Math.round((Math.atan2(drawingCanvasState.startY - endY, endX - drawingCanvasState.startX) * 180 / Math.PI + 360) % 360) % 360;
            showDrawingCommandStatus(`${drawingCanvasState.currentTool.toUpperCase()} complete • ${formatDrawingLength(length)} at ${angle.toFixed(0)}°.`);
        } else if (['circle', 'arc'].includes(drawingCanvasState.currentTool)) {
            showDrawingCommandStatus(`${drawingCanvasState.currentTool.toUpperCase()} complete • radius ${formatDrawingLength(radius * getMillimetersPerPixel())}.`);
        } else if (document.getElementById('preciseDrawingControls') && !document.getElementById('preciseDrawingControls').hidden) {
            const isPaletteTool = drawingPalettes[drawingCanvasState.level]?.some(([tool]) => tool === drawingCanvasState.currentTool);
            const symbolScale = isPaletteTool ? drawingCanvasState.materialScale : 1;
            const width = Math.abs(endX - drawingCanvasState.startX) * getMillimetersPerPixel() * symbolScale;
            const height = Math.abs(endY - drawingCanvasState.startY) * getMillimetersPerPixel() * symbolScale;
            showDrawingCommandStatus(`${drawingCanvasState.currentTool.toUpperCase()} complete • ${formatDrawingLength(width)} × ${formatDrawingLength(height)}.`);
        }

        saveToHistory();
        drawingCanvasState.activeSnapPoint = null;
        drawingCanvasState.baseImageData = null;
    });

    canvas.addEventListener('pointercancel', () => {
        if (drawingCanvasState.timeExpired) return;
        if (drawingCanvasState.baseImageData) {
            ctx.putImageData(drawingCanvasState.baseImageData, 0, 0);
        }
        drawingCanvasState.isDrawing = false;
        drawingCanvasState.awaitingDimensions = false;
        drawingCanvasState.dimensionPhase = 0;
        drawingCanvasState.dimensionFirstPoint = null;
        drawingCanvasState.dimensionSecondPoint = null;
        drawingCanvasState.baseImageData = null;
        drawingCanvasState.selectionImageData = null;
        drawingCanvasState.selectedBounds = null;
        drawingCanvasState.activeSnapPoint = null;
        const measurement = document.getElementById('drawingMeasurement');
        if (measurement) measurement.hidden = true;
        document.getElementById('selectionInfo')?.replaceChildren(document.createTextNode('No area selected'));
    });

    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        zoomDrawingAtCursor(e);
    }, { passive: false });
    if (drawingCanvasState.timeExpired) {
        expireDrawingTimer();
    } else {
        startDrawingTimer();
    }
}

function submitDrawing(number) {
    if (!drawingCanvasState.canvas) return;

    drawingCanvasState.level = number;
    saveDrawingDraft();
    saveDrawingVersion(number);
    progress[number].completed = true;
    if (number < 5) progress[number + 1].unlocked = true;
    saveProgress();
    alert(number < 5
        ? `Drawing submitted. Level ${number + 1} is now unlocked.`
        : 'Drawing submitted. You completed all five levels.');
}

function drawingPreview(number) {

    if (drawingCanvasState.timerInterval) {
        clearInterval(drawingCanvasState.timerInterval);
        drawingCanvasState.timerInterval = null;
    }
    drawingCanvasState.level = number;
    drawingCanvasState.timeExpired = isDrawingLevelExpired(number);

    document.querySelector("#app").innerHTML = `

        <section class="page drawing-page">

            <button
                class="back"
                onclick="openLevel(${number})"
            >
                ← BACK TO LEVEL
            </button>

            <div class="page-head">

                <span>
                    LEVEL 0${number} • DRAWING PROJECT
                </span>

                <h2>
                    Structural Drawing Workspace
                </h2>

                <p>
                    Draft the assigned project within 10 minutes. Press Escape to cancel the active drawing command; press Delete to erase a selected area.
                </p>

            </div>

            <div class="drawing-timer-panel" role="timer">
                <div>
                    <span class="group-title">TIME REMAINING</span>
                    <strong id="drawingTimer">10:00</strong>
                </div>
                <span>When time runs out, the drawing remains available in view-only mode.</span>
            </div>

            <details class="drawing-project-panel">
                <summary>${levelData[number].drawingTitle} • PROJECT REFERENCE</summary>
                <div class="drawing-project-content">
                    <p>${levelData[number].drawingDescription} Complete the project within 10 minutes.</p>
                    <a href="${levelData[number].projectReference}" target="_blank" rel="noopener">
                        <img src="${levelData[number].projectReference}" alt="${levelData[number].drawingTitle} reference drawing">
                        <span>Open reference image in a new tab ↗</span>
                    </a>
                </div>
            </details>

            <div class="drawing-toolbar">
                <button class="tool-btn drawing-tool-btn" id="toolPointer" onclick="setDrawingTool('pointer')" title="Pointer"><span class="tool-symbol">↖</span><small>POINTER</small></button>
                <button class="tool-btn" id="toolSelect" onclick="setDrawingTool('select')" title="Crossing selection; press Delete to erase the selected area">CROSSING SELECT</button>
                <button class="tool-btn drawing-tool-btn" id="toolLine" onclick="setDrawingTool('line')" title="Line; snaps to endpoints, intersections, and existing lines"><span class="tool-symbol">—</span><small>LINE</small></button>
                <button class="tool-btn drawing-tool-btn" id="toolRect" onclick="setDrawingTool('rect')" title="Rectangle"><span class="tool-symbol">▭</span><small>RECTANGLE</small></button>
                <button class="tool-btn drawing-tool-btn" id="toolCircle" onclick="setDrawingTool('circle')" title="Circle"><span class="tool-symbol">◯</span><small>CIRCLE</small></button>
                <button class="tool-btn drawing-tool-btn" id="toolArc" onclick="setDrawingTool('arc')" title="Arc"><span class="tool-symbol">⌢</span><small>ARC</small></button>
                <button class="tool-btn drawing-tool-btn" id="toolCenterline" onclick="setDrawingTool('centerline')" title="Center line"><span class="tool-symbol">⊕</span><small>CENTERLINE</small></button>
                <span class="separator">|</span>
                <button class="tool-btn drawing-tool-btn" id="toolDim" onclick="setDrawingTool('dimension')" title="Add a measurement dimension"><span class="tool-symbol">├</span><small>DIMENSION</small></button>
                <button class="tool-btn drawing-tool-btn" id="toolLeader" onclick="setDrawingTool('leader')" title="Leader"><span class="tool-symbol">↗</span><small>LEADER</small></button>
                <button class="tool-btn drawing-tool-btn" id="toolText" onclick="setDrawingTool('text')" title="Text"><span class="tool-symbol">A</span><small>TEXT</small></button>
                <span class="separator">|</span>
                <div class="tool-group drawing-context-tools"><span class="group-title">${number === 4 ? 'FLOOR PLAN COMPONENTS' : 'ELEVATION COMPONENTS'}</span>${number === 4 ? `<div class="palette-categories">${paletteMarkup(number)}</div>` : `<div class="tool-palette">${paletteMarkup(number)}</div>`}</div>
                <div class="tool-group"><span class="group-title">LINE ANNOTATION</span><div class="material-controls"><label>NAME <input id="lineLabelInput" type="text" maxlength="24" placeholder="e.g. Grid A / Beam B1"></label></div></div>
                ${number >= 4 ? `<div class="tool-group"><span class="group-title">SYMBOL SETTINGS</span><div class="material-controls"><label>SIZE <input id="materialScale" type="range" min="0.5" max="3" step="0.1" value="1" oninput="setMaterialScale(this.value)"><span id="materialScaleLabel">100%</span></label><label>ROT <input id="materialRotation" type="number" min="-180" max="180" step="15" value="0" onchange="setMaterialRotation(this.value)"><span id="materialRotationLabel">0 deg</span></label><button class="tool-btn" id="hatchToggle" onclick="toggleHatch()" title="Toggle material hatching">HATCH</button></div></div>` : ''}
                <div class="tool-group precise-drawing-group" id="preciseDrawingControls" hidden>
                    <span class="group-title">PRECISE INPUT</span>
                    <div class="material-controls">
                        <label id="drawingLengthLabel">LENGTH m <input id="lineLengthInput" type="number" min="0.01" step="any" placeholder="e.g. 3"></label>
                        <label id="drawingHeightControl"><span id="drawingHeightLabel">HEIGHT m </span><input id="drawingHeightInput" type="number" min="0.01" step="any" placeholder="e.g. 2.4"></label>
                        <label id="drawingAngleControl">ANGLE deg <input id="drawingAngleInput" type="number" step="any" placeholder="cursor direction"></label>
                    </div>
                    <span class="dimension-help">Drag for direction, or click a start point and enter exact dimensions.</span>
                </div>
                <div class="tool-group"><span class="group-title">TRACKING / SNAP</span><div class="tool-palette">
                    <button class="tool-btn" id="orthoToggle" onclick="toggleOrtho()" title="Ortho mode">ORTHO</button>
                    <button class="tool-btn" id="polarToggle" onclick="toggleDrawingMode('polar')" title="Polar tracking">POLAR</button>
                    <button class="tool-btn" id="isometricToggle" onclick="toggleDrawingMode('isometric')" title="Isometric object tracking">ISOMETRIC</button>
                    <button class="tool-btn active" id="osnapToggle" onclick="toggleObjectSnap()" title="Snap to line endpoints, midpoints, intersections, and linework">OSNAP</button>
                    <button class="tool-btn" id="snapToggle" onclick="toggleSnap()" title="Snap to the drawing grid">GRID SNAP</button>
                    <button class="tool-btn" id="osnapTrackingToggle" onclick="toggleDrawingMode('osnapTracking')" title="Object snap tracking">OTRACK</button>
                </div></div>
                <div class="tool-group"><span class="group-title">ANNOTATION SCALE</span><select id="annotationScale" onchange="setAnnotationScale(this.value)" title="Annotation scale"><option>1:50</option><option selected>1:100</option><option>1:200</option></select><span id="annotationScaleLabel">1:100</span></div>
                <div class="tool-group"><span class="group-title">PROJECT UNITS</span><select id="drawingUnit" onchange="updateDrawingUnit(this.value); updateDrawingDimensionControls(drawingCanvasState.currentTool)" title="Drawing units"><option value="m" selected>METERS (m)</option><option value="mm">MILLIMETERS (mm)</option></select></div>
                <div class="tool-group zoom-group"><span class="group-title">VIEW</span><div class="tool-palette"><button class="tool-btn" onclick="zoomDrawing(0.25)" title="Zoom in">＋</button><button class="tool-btn" onclick="zoomDrawing(-0.25)" title="Zoom out">－</button><button class="tool-btn" onclick="setDrawingZoom(1)" title="Fit drawing">FIT</button><span id="drawingZoom">100%</span></div></div>
                <input type="color" id="colorPicker" value="#aab5c1" title="Color">
                <input type="range" id="lineThickness" min="1" max="5" value="2" style="width: 80px;" title="Line Thickness">
                <span class="separator">|</span>
                <button class="tool-btn secondary" id="clearDrawingButton" onclick="clearDrawingCanvas()" title="Clear">🗑</button>
                <button class="tool-btn" id="undoDrawingButton" onclick="undoDrawing()" title="Undo" disabled>↶ UNDO</button>
                <button class="tool-btn" id="redoDrawingButton" onclick="redoDrawing()" title="Redo" disabled>↷ REDO</button>
                <button class="tool-btn secondary" id="deleteSelectedButton" onclick="deleteSelectedArea()" title="Delete selected area">DELETE SELECTED</button>
                <button class="tool-btn" onclick="exportDrawing()" title="Export as PNG">EXPORT PNG</button>
                <button class="tool-btn" onclick="saveDrawingVersion(${number})" title="Save a version to history">SAVE VERSION</button>
                <button class="tool-btn" id="drawingHistoryCount" onclick="drawingHistoryView(${number})" title="View saved drawing versions">HISTORY ${getDrawingHistory(number).length}</button>
                <button class="tool-btn" id="drawingFullscreenButton" onclick="toggleDrawingFullscreen()" title="Expand drawing workspace">FULL SCREEN</button>
                <span id="drawingSaveStatus" role="status">Draft saved locally</span>
                <button class="tool-btn" onclick="submitDrawing(${number})" title="Submit">✓ SUBMIT</button>
            </div>

            <div class="drawing-container">
                <div class="drawing-measurement" id="drawingMeasurement" aria-live="polite" hidden></div>
                <canvas id="drawingCanvas" width="2000" height="1200"></canvas>
                <div class="drawing-timeup-overlay" id="drawingTimeUpOverlay" hidden>
                    <strong>TIME'S UP • VIEW ONLY</strong>
                    <span>Editing is locked. You can still zoom and export the drawing.</span>
                </div>
            </div>
            <div class="model-tabs">
                <button class="model-tab active">Model</button><button class="model-tab">Layout 1</button><button class="model-tab">Layout 2</button>
                <span class="model-status">Model space • ${number === 4 ? 'Floor plan' : 'Elevation'}</span>
            </div>

            <div class="draft-status-strip">
                <span>STRUCTDRAFT DRAFT ASSIST</span>
                <span id="selectionInfo">No area selected</span>
                <span>Material 100%</span>
                <span id="drawingAnnotationStatus">Annotation 1:100</span>
                <span id="drawingStatus" role="status">Ready. Drag to draw.</span>
            </div>

            <div class="drawing-info">
                <p>
                    <strong>Current Tool:</strong> <span id="currentTool">Pointer</span> |
                    OSNAP attaches points to existing linework. Dimensions use two snapped points, then a third click to place the dimension line.
                </p>
            </div>

        </section>

        <style>
            .drawing-toolbar {
                display: flex;
                gap: 3px;
                padding: 6px;
                background: rgba(255,255,255,0.05);
                border-radius: 4px;
                margin-bottom: 15px;
                flex-wrap: nowrap;
                align-items: center;
                width: 100%;
                max-width: 100%;
                overflow-x: auto;
                overflow-y: hidden;
                scrollbar-width: thin;
                scrollbar-color: rgba(170,181,193,0.55) rgba(7,26,48,0.5);
            }

            .drawing-measurement { position: absolute; z-index: 1; padding: 4px 7px; border: 1px solid #aab5c1; border-radius: 3px; background: #071a30; color: #eef2f7; font: 11px "Segoe UI", sans-serif; white-space: nowrap; pointer-events: none; }
            
            .tool-btn {
                padding: 6px 8px;
                background: rgba(170,181,193,0.2);
                border: 1px solid #aab5c1;
                color: #eef2f7;
                cursor: pointer;
                border-radius: 3px;
                font-weight: bold;
                font-size: 10px;
                transition: all 0.2s;
                white-space: nowrap;
            }

            .drawing-toolbar > * { flex: 0 0 auto; }
            .drawing-tool-btn { min-width: 54px; min-height: 42px; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; padding: 3px 5px; }
            .drawing-tool-btn .tool-symbol { font-size: 17px; line-height: 1.1; }
            .drawing-tool-btn small { font-size: 8px; line-height: 1.2; white-space: nowrap; }
            
            .tool-btn:hover {
                background: rgba(170,181,193,0.4);
            }

            .tool-btn:disabled {
                opacity: 0.4;
                cursor: not-allowed;
            }
            
            .tool-btn.active {
                background: #aab5c1;
            }
            
            .tool-btn.secondary {
                background: rgba(255,100,100,0.2);
                border-color: #ff6464;
            }
            
            .tool-btn.secondary:hover {
                background: rgba(255,100,100,0.4);
            }

            .tool-group { display: flex; flex: 0 0 auto; flex-direction: column; justify-content: center; gap: 4px; padding: 3px 6px; border-left: 1px solid rgba(255,255,255,0.12); }
            .tool-group[hidden] { display: none; }
            .drawing-context-tools { border-left: 1px solid rgba(255,255,255,0.12); border-top: 0; padding-top: 3px; }
            .group-title { color: #8d99ad; font-size: 8px; letter-spacing: 1.2px; }
            .palette-categories { display: flex; flex-wrap: nowrap; gap: 4px; }
            .palette-category { flex: 0 0 auto; min-width: 0; padding: 3px 4px; border: 1px solid rgba(255,255,255,0.1); background: rgba(7,26,48,0.32); }
            .palette-category-title { display: block; margin-bottom: 3px; color: #8d99ad; font-size: 7px; font-weight: bold; letter-spacing: 1px; }
            .palette-items { display: flex; flex-wrap: nowrap; gap: 3px; }
            .tool-group select { min-height: 30px; background: #102a46; border: 1px solid #aab5c1; color: #eef2f7; }
            #annotationScaleLabel { color: #dfe7ff; font-size: 10px; }
            .material-controls { display: flex; gap: 5px; align-items: center; flex-wrap: nowrap; }
            .material-controls label { color: #dfe7ff; font-size: 9px; }
            .material-controls input[type="number"] { width: 48px; background: #102a46; border: 1px solid #aab5c1; color: #eef2f7; }
            .material-controls input[type="number"] { padding: 5px; }
            .material-controls input[type="text"] { width: 138px; padding: 5px; background: #102a46; border: 1px solid #aab5c1; color: #eef2f7; }
            .material-controls input[type="number"] { width: 74px; padding: 5px; }
            .material-controls span { color: #dfe7ff; font-size: 9px; }
            .precise-drawing-group .material-controls label { display: flex; align-items: center; gap: 5px; }
            .precise-drawing-group input { width: 92px; }
            .dimension-help { color: #8d99ad; font-size: 9px; line-height: 1.4; max-width: 260px; }
            .drawing-project-panel { margin: 0 0 10px; border: 1px solid rgba(170,181,193,0.28); background: rgba(16,42,70,0.72); }
            .drawing-project-panel summary { padding: 8px 12px; color: #dfe7ff; cursor: pointer; font-size: 10px; font-weight: bold; letter-spacing: 1px; }
            .drawing-project-content { display: flex; align-items: center; gap: 14px; padding: 0 12px 10px; }
            .drawing-project-content p { flex: 1; color: #c3ccd5; font-size: 11px; }
            .drawing-project-content a { display: flex; align-items: center; gap: 8px; color: #dfe7ff; font-size: 10px; }
            .drawing-project-content img { max-width: 180px; max-height: 90px; object-fit: contain; border: 1px solid rgba(170,181,193,0.3); background: #fff; }
            .precise-drawing-group[hidden], .drawing-height-control[hidden], .drawing-angle-control[hidden] { display: none; }
            .model-tabs { display: flex; align-items: center; gap: 4px; padding: 6px 8px; background: #111824; border: 1px solid rgba(255,255,255,0.12); border-top: 0; }
            .model-tab { border: 1px solid rgba(255,255,255,0.16); background: #202a3a; color: #dfe7ff; padding: 6px 12px; cursor: pointer; }
            .model-tab.active { background: #aab5c1; color: #071a30; }
            .model-status { margin-left: auto; color: #8d99ad; font-size: 10px; }

            .palette-label {
                color: #dfe7ff;
                font-size: 10px;
                letter-spacing: 1px;
                white-space: nowrap;
            }

            .tool-palette {
                display: flex;
                gap: 4px;
                flex-wrap: nowrap;
            }

            .palette-btn {
                min-width: 48px;
                min-height: 42px;
                padding: 4px 6px;
                display: inline-flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 2px;
            }

            .drawing-context-tools .palette-btn { min-width: 44px; min-height: 34px; padding: 3px 4px; }
            .drawing-context-tools .palette-btn small { font-size: 7px; }

            .palette-btn small {
                font-size: 9px;
                font-weight: normal;
                white-space: nowrap;
            }
            
            .separator {
                color: #687384;
                margin: 0 3px;
            }
            
            #colorPicker {
                width: 40px;
                height: 32px;
                cursor: pointer;
                border: 1px solid #aab5c1;
                border-radius: 3px;
            }
            
            .drawing-container {
                border: 2px solid #aab5c1;
                background: #000;
                border-radius: 4px;
                overflow: auto;
                position: relative;
                margin-bottom: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                min-width: 0;
            }
            
            #drawingCanvas {
                display: block;
                flex: 0 0 auto;
                cursor: crosshair;
                background: #0b2038;
                width: 100%;
                height: auto;
                min-width: 0;
                max-width: 100%;
            }
            
            .drawing-info {
                padding: 10px;
                background: rgba(170,181,193,0.1);
                border-left: 3px solid #aab5c1;
                border-radius: 3px;
                font-size: 12px;
            }

            .drawing-timer-panel { display: flex; align-items: center; gap: 16px; padding: 10px 14px; margin-bottom: 12px; border: 1px solid rgba(170,181,193,0.3); background: rgba(16,42,70,0.8); }
            .drawing-timer-panel > div { display: grid; gap: 3px; }
            .drawing-timer-panel strong { color: #eef2f7; font: 700 24px "Segoe UI", sans-serif; font-variant-numeric: tabular-nums; }
            .drawing-timer-panel > span { flex: 1; color: #8d99ad; font-size: 10px; }
            .drawing-timeup-overlay { position: absolute; z-index: 3; top: 12px; left: 12px; display: flex; align-items: center; gap: 10px; max-width: calc(100% - 24px); padding: 9px 12px; border: 1px solid rgba(170,181,193,0.55); border-radius: 4px; background: rgba(7,26,48,0.94); color: #eef2f7; pointer-events: none; }
            .drawing-timeup-overlay[hidden] { display: none; }
            .drawing-timeup-overlay strong { color: #f0c674; font-size: 11px; letter-spacing: 1px; white-space: nowrap; }
            .drawing-timeup-overlay span { color: #c3ccd5; font-size: 10px; }
            .drawing-page:fullscreen, .drawing-page.is-fullscreen { width: 100%; height: 100%; max-width: none; margin: 0; padding: 10px; overflow: hidden; background: #071a30; display: flex; flex-direction: column; }
            .drawing-page:fullscreen .back, .drawing-page.is-fullscreen .back,
            .drawing-page:fullscreen .page-head, .drawing-page.is-fullscreen .page-head,
            .drawing-page:fullscreen .drawing-info, .drawing-page.is-fullscreen .drawing-info { display: none; }
            .drawing-page:fullscreen .drawing-toolbar, .drawing-page.is-fullscreen .drawing-toolbar { max-height: none; overflow-x: auto; overflow-y: hidden; flex: 0 0 auto; }
            .drawing-page:fullscreen .drawing-container, .drawing-page.is-fullscreen .drawing-container { flex: 1 1 auto; min-height: 0; margin-bottom: 6px; }
            .drawing-page:fullscreen #drawingCanvas, .drawing-page.is-fullscreen #drawingCanvas { width: auto; height: 100%; max-width: 100%; object-fit: contain; }
            .drawing-page:fullscreen .model-tabs, .drawing-page.is-fullscreen .model-tabs,
            .drawing-page:fullscreen .draft-status-strip, .drawing-page.is-fullscreen .draft-status-strip { flex: 0 0 auto; }
            @media (max-width: 700px) { .drawing-timer-panel { flex-wrap: wrap; } .drawing-timer-panel > span { flex-basis: 100%; order: 1; } .drawing-timeup-overlay, .drawing-project-content { flex-wrap: wrap; } }
        </style>
    `;

    initializeDrawingCanvas();

}


function assessment(number) {

    if (!levelData[number]?.hasQuiz) return;
    selectedAnswers = {};
    const questions = quizzes[number];
    
    let questionsHTML = "";
    
    questions.forEach((question, index) => {
        let optionsHTML = "";
        const multipleCorrectAnswers = Array.isArray(question.correct);
        question.options.forEach((option, optIndex) => {
            optionsHTML += `
                <button
                    class="option"
                    aria-pressed="false"
                    onclick="selectAnswer(this, ${index}, ${optIndex}, ${multipleCorrectAnswers})"
                >
                    ${String.fromCharCode(65 + optIndex)}. ${option}
                </button>
            `;
        });
        
        questionsHTML += `
            <div class="question">
                <p>
                    <strong>Question ${index + 1} of ${questions.length}:</strong> ${question.q}
                    ${multipleCorrectAnswers ? "<br><small>Select all that apply.</small>" : ""}
                </p>
                <div class="options">
                    ${optionsHTML}
                </div>
            </div>
        `;
    });

    document.querySelector("#app").innerHTML = `

        <section class="page">

            <button
                class="back"
                onclick="openLevel(${number})"
            >
                ← BACK TO LEVEL
            </button>


            <div class="page-head">

                <span>
                    LEVEL 0${number} • QUIZ (${questions.length} QUESTIONS)
                </span>

                <h2>
                    Level Quiz
                </h2>

                <p>
                    Answer all ${questions.length} questions to complete this quiz.
                    ${progress[number].takes.length > 0 ? `<br><strong>Attempt: ${progress[number].takes.length + 1}</strong>` : ''}
                </p>

            </div>


            <div class="quiz">

                ${questionsHTML}

                <button
                    class="btn"
                    onclick="submitAssessment(${number})"
                    style="margin-top: 20px;"
                >
                    SUBMIT QUIZ
                </button>

            </div>

        </section>

    `;

}


function selectAnswer(button, questionIndex, optionIndex, multiple = false) {

    const buttons =
        button.parentElement.querySelectorAll(".option");

    if (multiple) {
        const selected = selectedAnswers[questionIndex] || [];
        if (button.classList.contains("selected")) {
            button.classList.remove("selected");
            selectedAnswers[questionIndex] = selected.filter((item) => item !== optionIndex);
            if (selectedAnswers[questionIndex].length === 0) {
                delete selectedAnswers[questionIndex];
            }
        } else {
            button.classList.add("selected");
            selectedAnswers[questionIndex] = [...selected, optionIndex];
        }
        button.setAttribute("aria-pressed", button.classList.contains("selected"));
        return;
    }

    buttons.forEach((item) => {
        item.classList.remove("selected");
        item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");
    selectedAnswers[questionIndex] = optionIndex;

}


function submitAssessment(number) {

    if (!levelData[number]?.hasQuiz) return;
    const questions = quizzes[number];
    const totalQuestions = questions.length;
    
    if (Object.keys(selectedAnswers).length < totalQuestions) {

        alert(`Please answer all ${totalQuestions} questions.`);

        return;

    }

    let correctAnswers = 0;
    for (let i = 0; i < totalQuestions; i++) {
        const selected = selectedAnswers[i];
        const correct = questions[i].correct;
        const isCorrect = Array.isArray(correct)
            ? Array.isArray(selected)
                && selected.length === correct.length
                && correct.every((optionIndex) => selected.includes(optionIndex))
            : selected === correct;
        if (isCorrect) {
            correctAnswers++;
        }
    }
    
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    const passing = score >= 70;
    
    const takeRecord = {
        date: new Date().toLocaleString(),
        score: score,
        passed: passing
    };
    
    progress[number].takes.push(takeRecord);
    
    if (progress[number].bestScore === null || score > progress[number].bestScore) {
        progress[number].bestScore = score;
    }
    
    if (passing) {
        progress[number].completed = true;
        if (number < 5) {
            progress[number + 1].unlocked = true;
        }
    }

    saveProgress();

    document.querySelector("#app").innerHTML = `

        <section class="page">

            <div class="page-head">

                <span>
                    QUIZ ${passing ? 'PASSED' : 'NEEDS REVIEW'}
                </span>

                <h2>
                    ${passing ? 'Congratulations!' : 'Keep Practicing'}
                </h2>

                <p>
                    ${passing ? "You have passed this level's quiz!" : 'Your score does not meet the passing requirement. Try again to improve your quiz score.'}
                </p>

            </div>


            <div class="result">

                <h3>
                    Your Score: <strong>${score}%</strong>
                </h3>

                <p>
                    Correct Answers: ${correctAnswers} / ${totalQuestions}
                </p>

                <div style="margin-top: 20px; padding: 15px; background: rgba(170,181,193,0.1); border-radius: 4px;">
                    <strong>Attempt #${progress[number].takes.length}</strong><br>
                    Best Score: ${progress[number].bestScore}%<br>
                    Total Attempts: ${progress[number].takes.length}
                </div>

                ${passing ? `<p style="margin-top: 20px; color: #aab5c1;">
                    ${number < 5 ? `✓ Level ${number + 1} is now unlocked.` : '✓ You have completed all five levels!'}
                </p>` : ''}

            </div>


            <div style="margin-top: 20px;">
                ${passing ? 
                    `<button class="btn" onclick="dashboard()" style="margin-right: 10px;">
                        RETURN TO DASHBOARD →
                    </button>` 
                    : 
                    `<button class="btn secondary" onclick="assessment(${number})" style="margin-right: 10px;">
                        RETAKE QUIZ
                    </button>
                    <button class="btn" onclick="openLevel(${number})">
                        RETURN TO LEVEL
                    </button>`
                }
            </div>

        </section>

    `;

}


function toggleYearDropdown() {
    const dropdown = document.getElementById("yearDropdown");
    dropdown.classList.toggle("active");
}

function switchYear(year) {
    saveProgress();
    
    currentYear = year;
    
    document.getElementById("yearDisplay").textContent = year;
    document.getElementById("footerYear").textContent = year;
    
    document.getElementById("yearDropdown").classList.remove("active");
    
    document.querySelectorAll(".year-option").forEach(btn => {
        if (parseInt(btn.textContent) === year) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    progress = JSON.parse(
        localStorage.getItem(`structDraftProgress${currentYear}`)
    ) || {
        1: { unlocked: true, completed: false, takes: [], bestScore: null },
        2: { unlocked: false, completed: false, takes: [], bestScore: null },
        3: { unlocked: false, completed: false, takes: [], bestScore: null },
        4: { unlocked: false, completed: false, takes: [], bestScore: null },
        5: { unlocked: false, completed: false, takes: [], bestScore: null }
    };
    
    dashboard();
}

document.addEventListener("DOMContentLoaded", function() {
    const yearDisplay = document.getElementById("yearDisplay");
    
    yearDisplay.parentElement.addEventListener("click", function(e) {
        if (!e.target.classList.contains("year-option")) {
            toggleYearDropdown();
        }
    });
    
    document.querySelectorAll(".year-option").forEach(btn => {
        if (parseInt(btn.textContent) === currentYear) {
            btn.classList.add("active");
        }
    });
    
    document.addEventListener("click", function(e) {
        const yearSelector = document.querySelector(".year-selector");
        if (!yearSelector.contains(e.target)) {
            document.getElementById("yearDropdown").classList.remove("active");
        }
    });
});


dashboard();    