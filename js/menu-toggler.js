const triggerSlider = () => {
    const buttons = document.getElementsByClassName("menu-btn");
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("show-menu");
    }
    const main = document.getElementsByTagName("main");
    main[0].classList.toggle("scroll-content");

    const hamb = document.getElementById("hamb-icon")
    const closeHamb = document.getElementById("close-icon")

    hamb.classList.toggle("hide-btn")
    closeHamb.classList.toggle("hide-btn")
}