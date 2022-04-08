// ==UserScript==
// @name         get_numerade_for_free
// @namespace    http://tampermonkey.net/
// @version      0.1
// @run-at       document-end
// @description  UNLOCK Numerade Video Solutions For FREE!
// @author       Lam
// @match        https://www.numerade.com/questions/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=numerade.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 1. create a button
    let btn = document.createElement("button");
    btn.innerHTML = "UNLOCK!!!!";
    btn.style = "background-color:red;margin-left:auto;margin-right:auto;display:block;margin-top:2%;margin-bottom:2%"
    btn.style.width = '500px'; // setting the width to 200px
    btn.style.height = '200px';

    // 2. append this button after the icon element
    const web_icon = document.getElementsByClassName("navbar navbar-expand-lg navbar-light")[0];
    web_icon.innerHTML = "";
    web_icon.appendChild(btn);

    // 3. view the text answer
    document.getElementsByClassName("blur text-answer-heading equation")[0].className = "text-answer-heading equation";
    document.getElementsByClassName("blurry-text")[0].style.display = "none";

    // 4. open a new page for the answer's video
    btn.onclick = function () {
        window.open(document.getElementById("my-video").getAttribute('src'), "_blank");
    };

})();