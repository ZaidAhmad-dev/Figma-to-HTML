var bars = document.getElementsByClassName("bars")[0];
bars.addEventListener("click", () => {
    var navListMobile = document.getElementsByClassName("nav-list-mobile")[0];
    // navListMobile.style.display = "block";
    
    // fa-solid fa-xmark

    if(navListMobile.style.display == "block"){
        navListMobile.style.display = "none"
        bars.classList.remove("fa-xmark")
    } else{
        navListMobile.style.display = "block"
        bars.classList.add("fa-xmark")
    }
})