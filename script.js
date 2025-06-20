bplist00�_WebMainResource�	
_WebResourceFrameName^WebResourceURL_WebResourceData_WebResourceMIMEType_WebResourceTextEncodingNameP_file:///index.htmlO4�<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1404.47">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">document.addEventListener('DOMContentLoaded', () =&gt; {</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// --- 1. LÓGICA DEL MAPA CONCEPTUAL ---</p>
<p class="p1"><span class="Apple-converted-space">    </span>const mapContainer = document.getElementById('concept-map-container');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const centralNode = document.getElementById('node-central');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const theoryNodes = document.querySelectorAll('.theory-node');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const svgLines = document.getElementById('map-lines');</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>function drawLines() {</p>
<p class="p1"><span class="Apple-converted-space">        </span>if (!centralNode || window.innerWidth &lt;= 768) return; // No dibujar en móvil</p>
<p class="p1"><span class="Apple-converted-space">        </span>svgLines.innerHTML = ''; // Limpiar líneas existentes</p>
<p class="p1"><span class="Apple-converted-space">        </span>const centralRect = centralNode.getBoundingClientRect();</p>
<p class="p1"><span class="Apple-converted-space">        </span>const containerRect = mapContainer.getBoundingClientRect();</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">        </span>const centralX = centralRect.left - containerRect.left + centralRect.width / 2;</p>
<p class="p1"><span class="Apple-converted-space">        </span>const centralY = centralRect.top - containerRect.top + centralRect.height / 2;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">        </span>theoryNodes.forEach(node =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">            </span>const nodeRect = node.getBoundingClientRect();</p>
<p class="p1"><span class="Apple-converted-space">            </span>const nodeX = nodeRect.left - containerRect.left + nodeRect.width / 2;</p>
<p class="p1"><span class="Apple-converted-space">            </span>const nodeY = nodeRect.top - containerRect.top + nodeRect.height / 2;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">            </span>const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');</p>
<p class="p1"><span class="Apple-converted-space">            </span>line.setAttribute('x1', centralX);</p>
<p class="p1"><span class="Apple-converted-space">            </span>line.setAttribute('y1', centralY);</p>
<p class="p1"><span class="Apple-converted-space">            </span>line.setAttribute('x2', nodeX);</p>
<p class="p1"><span class="Apple-converted-space">            </span>line.setAttribute('y2', nodeY);</p>
<p class="p1"><span class="Apple-converted-space">            </span>line.setAttribute('stroke', '#34495e');</p>
<p class="p1"><span class="Apple-converted-space">            </span>line.setAttribute('stroke-width', '2');</p>
<p class="p1"><span class="Apple-converted-space">            </span>svgLines.appendChild(line);</p>
<p class="p1"><span class="Apple-converted-space">        </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>function positionNodes() {</p>
<p class="p1"><span class="Apple-converted-space">        </span>if (window.innerWidth &lt;= 768) return;</p>
<p class="p1"><span class="Apple-converted-space">        </span>const radius = mapContainer.offsetWidth / 2.5;</p>
<p class="p1"><span class="Apple-converted-space">        </span>const angleStep = (2 * Math.PI) / theoryNodes.length;</p>
<p class="p2"><span class="Apple-converted-space">        </span></p>
<p class="p1"><span class="Apple-converted-space">        </span>theoryNodes.forEach((node, index) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">            </span>const angle = angleStep * index - (Math.PI / 2); // Empezar desde arriba</p>
<p class="p1"><span class="Apple-converted-space">            </span>const x = 50 + (radius / mapContainer.offsetWidth * 100) * Math.cos(angle);</p>
<p class="p1"><span class="Apple-converted-space">            </span>const y = 50 + (radius / mapContainer.offsetHeight * 100) * Math.sin(angle);</p>
<p class="p1"><span class="Apple-converted-space">            </span>node.style.left = `${x}%`;</p>
<p class="p1"><span class="Apple-converted-space">            </span>node.style.top = `${y}%`;</p>
<p class="p1"><span class="Apple-converted-space">            </span>node.style.transform = 'translate(-50%, -50%)';</p>
<p class="p1"><span class="Apple-converted-space">        </span>});</p>
<p class="p1"><span class="Apple-converted-space">        </span>drawLines();</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>theoryNodes.forEach(node =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>node.addEventListener('click', () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">            </span>const targetId = node.dataset.target;</p>
<p class="p1"><span class="Apple-converted-space">            </span>const targetElement = document.querySelector(targetId);</p>
<p class="p1"><span class="Apple-converted-space">            </span>if (targetElement) {</p>
<p class="p1"><span class="Apple-converted-space">                </span>targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });</p>
<p class="p1"><span class="Apple-converted-space">            </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Reposicionar al cargar y al cambiar tamaño de ventana</p>
<p class="p1"><span class="Apple-converted-space">    </span>positionNodes();</p>
<p class="p1"><span class="Apple-converted-space">    </span>window.addEventListener('resize', positionNodes);</p>
<p class="p2"><br></p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// --- 2. LÓGICA DEL MODAL DE TÉRMINOS ---</p>
<p class="p1"><span class="Apple-converted-space">    </span>const interactiveTerms = document.querySelectorAll('.interactive-term');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const modal = document.getElementById('modal');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const modalTitle = document.getElementById('modal-title');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const modalDefinition = document.getElementById('modal-definition');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const modalClose = document.getElementById('modal-close');</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>interactiveTerms.forEach(term =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>term.addEventListener('click', () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">            </span>modalTitle.textContent = term.dataset.title;</p>
<p class="p1"><span class="Apple-converted-space">            </span>modalDefinition.textContent = term.dataset.definition;</p>
<p class="p1"><span class="Apple-converted-space">            </span>modal.classList.remove('hidden');</p>
<p class="p1"><span class="Apple-converted-space">        </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>function closeModal() {</p>
<p class="p1"><span class="Apple-converted-space">        </span>modal.classList.add('hidden');</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>modalClose.addEventListener('click', closeModal);</p>
<p class="p1"><span class="Apple-converted-space">    </span>modal.addEventListener('click', (e) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>if (e.target === modal) {</p>
<p class="p1"><span class="Apple-converted-space">            </span>closeModal();</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// --- 3. LÓGICA DEL SIMULADOR DE PROSUMIDOR ---</p>
<p class="p1"><span class="Apple-converted-space">    </span>const produceBtn = document.getElementById('produce-btn');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const videoScriptInput = document.getElementById('video-script');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const videoOutput = document.getElementById('video-output');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const outputScript = document.getElementById('output-script');</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>produceBtn.addEventListener('click', () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>const scriptText = videoScriptInput.value.trim();</p>
<p class="p1"><span class="Apple-converted-space">        </span>if (scriptText) {</p>
<p class="p1"><span class="Apple-converted-space">            </span>outputScript.textContent = `"${scriptText}"`;</p>
<p class="p1"><span class="Apple-converted-space">            </span>videoOutput.classList.remove('hidden');</p>
<p class="p1"><span class="Apple-converted-space">        </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">            </span>alert('Por favor, escribe un guion antes de producir.');</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// --- 4. LÓGICA DE LA HERRAMIENTA DE ANÁLISIS CRÍTICO ---</p>
<p class="p1"><span class="Apple-converted-space">    </span>const analysisBtns = document.querySelectorAll('.analysis-btn');</p>
<p class="p1"><span class="Apple-converted-space">    </span>analysisBtns.forEach(btn =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>btn.addEventListener('click', () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">            </span>btn.classList.toggle('active');</p>
<p class="p1"><span class="Apple-converted-space">        </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// --- 5. LÓGICA DEL MAPA DE MISIONES ---</p>
<p class="p1"><span class="Apple-converted-space">    </span>const hotspots = document.querySelectorAll('.hotspot');</p>
<p class="p1"><span class="Apple-converted-space">    </span>hotspots.forEach(hotspot =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>hotspot.addEventListener('click', () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">            </span>const mission = hotspot.dataset.mission;</p>
<p class="p1"><span class="Apple-converted-space">            </span>alert(`¡Nueva Misión!\n\n${mission}`);</p>
<p class="p1"><span class="Apple-converted-space">        </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// --- 6. LÓGICA DE LAS TARJETAS VOLTEABLES ---</p>
<p class="p1"><span class="Apple-converted-space">    </span>const flipperCards = document.querySelectorAll('.strategy-card-flipper');</p>
<p class="p1"><span class="Apple-converted-space">    </span>flipperCards.forEach(card =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>card.addEventListener('click', () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">            </span>card.classList.toggle('is-flipped');</p>
<p class="p1"><span class="Apple-converted-space">        </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p2"><br></p>
<p class="p1">});</p>
</body>
</html>
Ytext/htmlUutf-8    ( ? N ` v � � �5G5Q                           5W