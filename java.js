"use strict";
(function () {
    window.onload = () => {
        const obj = document.querySelector("#gallery");
        const time = 10000;
        function animStart() {
            if (!obj.classList.contains("active")) {
                obj.classList.add("active");
                setTimeout(() => {
                    animEnd();
                }, time);
            }
        }
        function animEnd() {
            obj.classList.remove("active");
            obj.offsetWidth;
        }
        document.addEventListener("scroll", animStart);
        window.addEventListener("resize", animStart);
        animStart();
        
        // Gestione della modale per le immagini
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");

        // Seleziona tutte le figure all'interno della galleria
        var figures = document.querySelectorAll("#gallery figure");
        figures.forEach(function(figure) {
            figure.addEventListener("click", function() {
                var img = this.querySelector("img"); // Trova l'immagine all'interno della figura
                if (img) {
                    modal.style.display = "block"; // Mostra la finestra modale
                    modalImg.src = img.src; // Imposta la sorgente dell'immagine nella modale
                    captionText.innerHTML = img.nextElementSibling.innerHTML; // Imposta la didascalia
                }
            });
        });

        // Quando si clicca sulla "X", chiudi la finestra modale
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() { 
            modal.style.display = "none";
        };

        // Aggiungiamo anche la possibilità di chiudere la modale cliccando fuori dall'immagine
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    };
})();
