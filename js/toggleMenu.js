const toggleMenu = () => {
    const openMenuId = document.querySelector("#open-menu");
    const closeMenuId = document.querySelector("#close-menu");
    const menuContainerClass = document.querySelector(".menu-container");    

    (function onLoad() {
        closeMenuId.classList.toggle("display-none");
    }());

    openMenuId.addEventListener("click", () => {
        menuContainerClass.classList.toggle("toggle-menu-container");
        openMenuId.classList.toggle("display-none");
        closeMenuId.classList.toggle("display-none");
        
    });

    closeMenuId.addEventListener("click", () => {
        menuContainerClass.classList.toggle("toggle-menu-container");
        openMenuId.classList.toggle("display-none");
        closeMenuId.classList.toggle("display-none");    
    });
}

export default toggleMenu;
