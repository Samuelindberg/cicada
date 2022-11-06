
   
   
let icons= {
    instagram:[document.getElementById("insta-icon"),document.getElementById("insta-text")],
    facebook:[document.getElementById("facebook-icon"),document.getElementById("facebook-text")],
    mail:[document.getElementById("mail"),document.getElementById("mail-title")],
    phone:[]
}
function displayInsta(){
    icons.instagram[0].style.opacity="1";
    icons.instagram[1].style.color="black";
}
function hideInsta(){
    icons.instagram[1].style.color="#909090";
    icons.instagram[0].style.opacity="0";
}
function displayFacebook(){
   
    icons.facebook[0].style.opacity="1";
    icons.facebook[1].style.color="black";
}
function hideFacebook(){
    icons.facebook[1].style.color="#909090";
    icons.facebook[0].style.opacity="0";
}
function blackMail(){
   icons.mail[1].style.color="black";
}
function greyMail(){
    icons.mail[1].style.color="#909090";
   
}
