
document.querySelectorAll("nav a").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});


const homeLightbox = document.getElementById("lightbox");
const homeLightboxImg = document.getElementById("lightbox-img");
const homeCloseBtn = document.querySelector(".close");
const homeClickableImg = document.querySelector(".clickable-img");

if (homeClickableImg) {
    homeClickableImg.onclick = function () {
        homeLightbox.style.display = "block";
        homeLightboxImg.src = this.src;
    };
}
if (homeCloseBtn) {
    homeCloseBtn.onclick = function () {
        homeLightbox.style.display = "none";
    };
}
window.onclick = function (event) {
    if (event.target === homeLightbox) {
        homeLightbox.style.display = "none";
    }
};


const fadeItems = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});
fadeItems.forEach(item => fadeObserver.observe(item));


function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("caption");

    if (lightbox) {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
        if (caption) caption.textContent = img.alt;
    }
}
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
    }
}

window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
