const imgLogos = document.getElementById("logosRedes")

let screen = window.screen.availWidth

console.log(screen)


if(screen <= 750) {

    imgLogos.removeAttribute("hidden","hidden")
}

if(screen >=751) {
    imgLogos.setAttribute("hidden", "hidden")
}