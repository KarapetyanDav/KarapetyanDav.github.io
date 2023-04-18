function closemenu() {
    const menujs = document.getElementById('rightmenujs');
    const blureffect = document.getElementById('blureffectjs');
    const svg1 = document.getElementById('svg01');
    const svg2 = document.getElementById('svg02');

    menujs.style.transform = "translateX(100%)";
    blureffect.style.transform = "translateX(-100%)";
    svg1.style.transform = "translateY(0px) rotate(0deg)";
    svg2.style.transform = "translateY(0px) rotate(0deg)";
}

function openmenu() {
    const menujs = document.getElementById('rightmenujs');
    const blureffect = document.getElementById('blureffectjs');
    const svg1 = document.getElementById('svg01');
    const svg2 = document.getElementById('svg02');

    if (menujs.style.transform === "translateX(100%)") {
        menujs.style.transform = "translateX(0)";
        blureffect.style.transform = "translateX(0)";
        svg1.style.transform = "translateY(8px) rotate(45deg)";
        svg2.style.transform = "translateY(1px) rotate(-45deg)";

    } else {
       closemenu()
    }
}
