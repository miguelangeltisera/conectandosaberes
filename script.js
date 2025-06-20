document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LÓGICA DEL MAPA CONCEPTUAL ---
    const mapContainer = document.getElementById('concept-map-container');
    const centralNode = document.getElementById('node-central');
    const theoryNodes = document.querySelectorAll('.theory-node');
    const svgLines = document.getElementById('map-lines');

    function drawLines() {
        if (!centralNode || window.innerWidth <= 768) return; // No dibujar en móvil
        svgLines.innerHTML = ''; // Limpiar líneas existentes
        const centralRect = centralNode.getBoundingClientRect();
        const containerRect = mapContainer.getBoundingClientRect();

        const centralX = centralRect.left - containerRect.left + centralRect.width / 2;
        const centralY = centralRect.top - containerRect.top + centralRect.height / 2;

        theoryNodes.forEach(node => {
            const nodeRect = node.getBoundingClientRect();
            const nodeX = nodeRect.left - containerRect.left + nodeRect.width / 2;
            const nodeY = nodeRect.top - containerRect.top + nodeRect.height / 2;

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', centralX);
            line.setAttribute('y1', centralY);
            line.setAttribute('x2', nodeX);
            line.setAttribute('y2', nodeY);
            line.setAttribute('stroke', '#34495e');
            line.setAttribute('stroke-width', '2');
            svgLines.appendChild(line);
        });
    }

    function positionNodes() {
        if (window.innerWidth <= 768) return;
        const radius = mapContainer.offsetWidth / 2.5;
        const angleStep = (2 * Math.PI) / theoryNodes.length;
        
        theoryNodes.forEach((node, index) => {
            const angle = angleStep * index - (Math.PI / 2); // Empezar desde arriba
            const x = 50 + (radius / mapContainer.offsetWidth * 100) * Math.cos(angle);
            const y = 50 + (radius / mapContainer.offsetHeight * 100) * Math.sin(angle);
            node.style.left = `${x}%`;
            node.style.top = `${y}%`;
            node.style.transform = 'translate(-50%, -50%)';
        });
        drawLines();
    }

    theoryNodes.forEach(node => {
        node.addEventListener('click', () => {
            const targetId = node.dataset.target;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Reposicionar al cargar y al cambiar tamaño de ventana
    positionNodes();
    window.addEventListener('resize', positionNodes);


    // --- 2. LÓGICA DEL MODAL DE TÉRMINOS ---
    const interactiveTerms = document.querySelectorAll('.interactive-term');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDefinition = document.getElementById('modal-definition');
    const modalClose = document.getElementById('modal-close');

    interactiveTerms.forEach(term => {
        term.addEventListener('click', () => {
            modalTitle.textContent = term.dataset.title;
            modalDefinition.textContent = term.dataset.definition;
            modal.classList.remove('hidden');
        });
    });

    function closeModal() {
        modal.classList.add('hidden');
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // --- 3. LÓGICA DEL SIMULADOR DE PROSUMIDOR ---
    const produceBtn = document.getElementById('produce-btn');
    const videoScriptInput = document.getElementById('video-script');
    const videoOutput = document.getElementById('video-output');
    const outputScript = document.getElementById('output-script');

    produceBtn.addEventListener('click', () => {
        const scriptText = videoScriptInput.value.trim();
        if (scriptText) {
            outputScript.textContent = `"${scriptText}"`;
            videoOutput.classList.remove('hidden');
        } else {
            alert('Por favor, escribe un guion antes de producir.');
        }
    });

    // --- 4. LÓGICA DE LA HERRAMIENTA DE ANÁLISIS CRÍTICO ---
    const analysisBtns = document.querySelectorAll('.analysis-btn');
    analysisBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
        });
    });

    // --- 5. LÓGICA DEL MAPA DE MISIONES ---
    const hotspots = document.querySelectorAll('.hotspot');
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', () => {
            const mission = hotspot.dataset.mission;
            alert(`¡Nueva Misión!\n\n${mission}`);
        });
    });

    // --- 6. LÓGICA DE LAS TARJETAS VOLTEABLES ---
    const flipperCards = document.querySelectorAll('.strategy-card-flipper');
    flipperCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });
    });

});
