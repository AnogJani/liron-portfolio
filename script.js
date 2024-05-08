

window.addEventListener("mousemove",(e) => {
    let x = e.clientX;
    let y = e.clientY;
    let effect_radius = 200;
    let hover_dots = document.getElementById("background_dots_top");
    hover_dots.style = `mask-image: radial-gradient(${effect_radius}px at ${x}px ${y}px, black 0%, transparent 100%);`;
});

// function addEvent(obj, evt, fn) {
//     if (obj.addEventListener) {
//         obj.addEventListener(evt, fn, false);
//     }
//     else if (obj.attachEvent) {
//         obj.attachEvent("on" + evt, fn);
//     }
// }

// addEvent(document, "mouseout", function(e) {
//     e = e ? e : window.event;
//     var from = e.relatedTarget || e.toElement;
//     if (!from || from.nodeName == "HTML") {
//         let hover_dots = document.getElementById("background_dots_top");
//         //off the screen at (-400,-400)
//         hover_dots.style = `mask-image: radial-gradient(200px at -400px -400px, black 0%, transparent 100%);`;
//     }
// });