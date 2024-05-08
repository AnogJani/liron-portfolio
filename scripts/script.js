

//Background
window.addEventListener("mousemove",(e) => {
    let x = e.clientX;
    let y = e.clientY;
    let effect_radius = 200;
    let hover_dots = document.getElementById("background_dots_top");
    hover_dots.style = `mask-image: radial-gradient(${effect_radius}px at ${x}px ${y}px, black 0%, transparent 100%);`;
});

window.addEventListener("mousedrag",(e) => {
    let x = e.clientX;
    let y = e.clientY;
    let effect_radius = 200;
    let hover_dots = document.getElementById("background_dots_top");
    hover_dots.style = `mask-image: radial-gradient(${effect_radius}px at ${x}px ${y}px, black 0%, transparent 100%);`;
});