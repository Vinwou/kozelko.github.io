document.addEventListener("DOMContentLoaded", function () {
    const zoomableElements = document.querySelectorAll(".zoomable");

    zoomableElements.forEach(function (element) {
        element.addEventListener("mouseover", function () {
            element.style.transform = "scale(1.1)";
            element.style.transition = "transform 0.2s";
        });
        element.addEventListener("mouseout", function () {
            element.style.transform = "";
        });
    });

    // Code de la barre de navigation
    const navbar = `
        <header class="navigation-bar">
            <ul>
                <li id="accueil-link" class="nav-link zoomable"><a href="index.html">Accueil</a></li>
                <li id="specialite_si-link" class="nav-link zoomable"><a href="specialite_si.html">Classe Spécialité SI</a></li>
                <li id="cprp-link" class="nav-link zoomable"><a href="cprp.html">Classe CPRP</a></li>
            </ul>
        </header>
    `;

    // Insérer la barre de navigation au début du document
    document.body.insertAdjacentHTML("afterbegin", navbar);
});

