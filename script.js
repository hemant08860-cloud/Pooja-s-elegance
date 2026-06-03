const gallery = document.getElementById("gallery");

/* Create artworks */

for(let i = 1; i <= 15; i++){

    gallery.innerHTML += `
        <div class="art-card fade-up">
            <div class="clip">📎</div>
            <img src="drawings/${i}.jpg" alt="Artwork ${i}">
        </div>
    `;
}

/* Sparkles */

const sparkles = document.querySelector(".sparkles");

for(let i = 0; i < 40; i++){

    const sparkle = document.createElement("span");

    sparkle.innerHTML = "✨";

    sparkle.style.left =
        Math.random()*100 + "%";

    sparkle.style.fontSize =
        (10 + Math.random()*18) + "px";

    sparkle.style.animationDuration =
        (8 + Math.random()*10) + "s";

    sparkle.style.animationDelay =
        Math.random()*10 + "s";

    sparkles.appendChild(sparkle);
}

/* Fade Up */

const observer =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".fade-up")
.forEach(el=>observer.observe(el));
