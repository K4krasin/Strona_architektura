document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const galleryContainer = document.querySelector(".grid");

            data.forEach(project => {
                // Tworzymy kontener na zdjęcia projektu
                const projectDiv = document.createElement("div");
                projectDiv.classList.add("project");

                // Tworzymy link do Lightbox dla miniaturki
                const mainLink = document.createElement("a");
                mainLink.href = project.gallery[0];
                mainLink.setAttribute("data-lightbox", project.id);

                // Tworzymy miniaturkę
                const img = document.createElement("img");
                img.src = project.thumbnail;
                img.alt = `Projekt ${project.id}`;
                mainLink.appendChild(img);

                // Dodajemy miniaturkę do projektu
                projectDiv.appendChild(mainLink);

                // Ukryte dodatkowe zdjęcia dla Lightbox
                project.gallery.slice(1).forEach(photo => {
                    const hiddenLink = document.createElement("a");
                    hiddenLink.href = photo;
                    hiddenLink.setAttribute("data-lightbox", project.id);
                    projectDiv.appendChild(hiddenLink);
                });

                // Dodajemy projekt do galerii
                galleryContainer.appendChild(projectDiv);
            });
        })
        .catch(error => console.error("Błąd wczytywania JSON:", error));
});
