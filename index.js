"use strict";

let warningBtn = document.querySelector('.btn-warning'),
    dangerBtn = document.querySelector('.btn-danger'),
    infoBtn = document.querySelector('.btn-info'),
    closeBtn = document.querySelector('.btn-close'),
    card = document.querySelectorAll('.card');

function myText(){
    for(let i=0; i<=card.length; i++ ){
        card[i].style.cssText = "background-color: yellow; border-radius: 20px; transition: all 0.5s ease-in";
    }
}

function myRest(){
    for(let i=0; i<=card.length; i++){
        card[i].style.cssText = "background-color: white; transition: all 0.5s ease-in";
    }
}



warningBtn.onmouseover = myText
warningBtn.onmouseout = myRest
infoBtn.onclick = myText

