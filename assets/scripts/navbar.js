window.onload=function(){
    let listOfLinks = document.getElementsByClassName("navbar-link");
    for(let links of listOfLinks){
        links.addEventListener("click", function(e){
            let element = document.getElementById(links.dataset.id);
            element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            e.preventDefault()
        }, false)
    }

    VANTA.FOG({
        el: "#top",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x0,
        midtoneColor: 0x111111,
        lowlightColor: 0xffffff,
        baseColor: 0xff4655,
        blurFactor: 0.65,
        speed: 0.90
    });

    // Transition lors du clic sur bouton "visite"
    let btnVisite = document.querySelector('a.btn-visite');
    btnVisite.addEventListener("click", function(e){
        let element = document.getElementById("details");
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        e.preventDefault()
    }, false);

    // Permet d'afficher/cacher la sidebar contenant les réseaux sociaux
    let btnSidebar = document.querySelector('.sidebar-control-arrow');
    let btnChevron = document.querySelector('.sidebar-control-arrow i');
    let sidebar = document.getElementById('sidebar-social-media');
    btnSidebar.addEventListener("click", function(e){
        if(btnChevron.classList.contains("fa-chevron-left")){
            btnChevron.classList.remove("fa-chevron-left");
            sidebar.classList.remove("sidebar-visible");
            btnChevron.classList.add("fa-chevron-right");
        } else{
            btnChevron.classList.remove("fa-chevron-right");
            btnChevron.classList.add("fa-chevron-left");
            sidebar.classList.add("sidebar-visible")
        }
        e.preventDefault();
    })
};


function openMobileNavbar(){
    let x = document.getElementById("mobile-navbar");
    let y = document.getElementById("navbar");
    let z = document.getElementById ("SectionPage");
    if(x.className === "mobileVisible"){
        x.classList.remove("mobileVisible");
        y.classList.remove("grayOut");
        z.classList.remove("grayOut");
    }else{
        x.classList.add("mobileVisible");
        y.classList.add("grayOut");
        z.classList.add("grayOut");
    }
    return false
}


let lastY = pageYOffset;
window.addEventListener("scroll", function(){
    let currentY = window.pageYOffset || document.documentElement.scrollTop;
    if (currentY > lastY){
        document.getElementById("navbar").style.transform = "translateY(-80px)";
    } else {
        document.getElementById("navbar").style.transform = "translateY(0px)";
    }
    lastY = (currentY <= 0) ? 0 : currentY;
}, false);