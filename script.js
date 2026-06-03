const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("welcome-screen");

enterBtn.addEventListener("click", () => {

    welcomeScreen.classList.add("open");

    setTimeout(() => {
        welcomeScreen.style.display = "none";
    }, 2000);

});

const gallery = document.getElementById("gallery");

for(let i = 1; i <= 15; i++){

    gallery.innerHTML += `
        <div class="art-card">
            <div class="clip">📎</div>
            <img src="drawings/${i}.jpg" alt="Artwork ${i}">
        </div>
    `;
}