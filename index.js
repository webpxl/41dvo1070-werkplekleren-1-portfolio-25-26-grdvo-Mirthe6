document.querySelectorAll("nav button").forEach(button => {
    button.addEventListener("click", () => {
        const target = document.getElementById(button.dataset.target);
        target.scrollIntoView({ behavior: "smooth" });
    });
});

const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});


const reflectieBtn = document.getElementById("reflectieBtn");

reflectieBtn.addEventListener("click", () => {
    window.location.href = "reflectie.html";
});
