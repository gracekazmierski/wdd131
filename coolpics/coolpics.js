document.querySelector('.gallery').addEventListener('click', viewHandler);
const menuButton = document.querySelector(".menuButton");
const dropdown = document.querySelector(".dropdown");
function toggleMenu() {
  dropdown.classList.toggle("show"); // Toggle the visibility of the dropdown
}

menuButton.addEventListener("click", toggleMenu);

menuButton.addEventListener("click", toggleMenu);


function viewHandler(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName.toLowerCase() === 'img') {
        const srcElements = clickedElement.src.split("-");
        const newSrc = `${srcElements[0]}-full.jpeg`;

        const text = viewerTemplate(newSrc, clickedElement.alt);
        document.body.insertAdjacentHTML("afterbegin", text);

        const closeButton = document.querySelector(".close-viewer");
        closeButton.addEventListener("click", closeViewer);
    }
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function closeViewer(event) {
    const viewer = event.target.closest('.viewer');
    if (viewer) {
        viewer.remove();
    }
}

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
  handleResize();
  window.addEventListener("resize", handleResize);
