let icons= {
    instagram:[document.getElementById("insta-icon"),document.getElementById("insta-text")],
    facebook:[document.getElementById("facebook-icon"),document.getElementById("facebook-text")],
    mail:[document.getElementById("mail"),document.getElementById("mail-title")]
}
let hamburgermenu={
    hamburgerIcon: document.getElementById("hamburger-icon"),
    hamburgerBars: [document.getElementById("bar1"),document.getElementById("bar2"),document.getElementById("bar3")],
    menu: document.getElementById("hamburger-links"),
    menuOpen:false
}
icons.instagram[1].addEventListener("mouseenter",function(){
    icons.instagram[0].style.opacity="1";
    icons.instagram[1].style.color="black";
});
icons.instagram[1].addEventListener("mouseleave",function(){
    icons.instagram[0].style.opacity="0";
    icons.instagram[1].style.color="#909090";
});
icons.facebook[1].addEventListener("mouseenter",function(){
    icons.facebook[0].style.opacity="1";
    icons.facebook[1].style.color="black";
});
icons.facebook[1].addEventListener("mouseleave",function(){
    icons.facebook[0].style.opacity="0";
    icons.facebook[1].style.color="#909090";
});
icons.mail[1].addEventListener("mouseenter",function(){
    icons.mail[0].style.color="#878787";
    icons.mail[1].style.color="black";
});
icons.mail[1].addEventListener("mouseleave",function(){
    icons.mail[0].style.color="#BDBFC1";
    icons.mail[1].style.color="#909090";
});


hamburgermenu.hamburgerIcon.addEventListener("mouseenter",function(){
    alert("funkar!");
});

function menu(){
    if(hamburgermenu.menuOpen){
        hamburgermenu.hamburgerBars[0].style.transform="rotate(45deg) translateY(9.5px)";
        hamburgermenu.hamburgerBars[0].style.backgroundColor="white";
        hamburgermenu.hamburgerBars[1].style.opacity="0";
        hamburgermenu.hamburgerBars[1].style.backgroundColor="white";
        hamburgermenu.hamburgerBars[2].style.transform="rotate(-45deg) translate(2px, -11px)";
        hamburgermenu.hamburgerBars[2].style.backgroundColor="white";
        hamburgermenu.menu.style.transform="translateX(0)";
        hamburgermenu.menuOpen=false;
    }
    else{
        hamburgermenu.menu.style.transform="translateX(-100vw)";
        hamburgermenu.hamburgerBars[0].style.transform="rotate(0)";
        hamburgermenu.hamburgerBars[0].style.backgroundColor="#8ba046";
        hamburgermenu.hamburgerBars[1].style.opacity="1";
        hamburgermenu.hamburgerBars[1].style.backgroundColor="#8ba046";
        hamburgermenu.hamburgerBars[2].style.transform="rotate(0)";
        hamburgermenu.hamburgerBars[2].style.backgroundColor="#8ba046";
        hamburgermenu.menuOpen=true;

    }

}
