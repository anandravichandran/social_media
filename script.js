
// ===========dropdown menu-==============
var settingmenu = document.querySelector(".setting-menu");
var darkBtn = document.getElementById("dark-btn");


function settingsMenuToggle(){
    settingmenu.classList.toggle("setting-menu-height");

}

// ==============toggle button on off============
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    // ========toggle color change.
    document.body.classList.toggle("dark-theme");

    // update the local storage 
    if(localStorage.getItem("theme") == "light"){

        localStorage.setItem( "theme", "dark" );
    }
    else{
        localStorage.setItem("theme","light");
    }

}

// local storage which means whenever the user has choose dark or normal mode till it will be user the user favor.

if(localStorage.getItem("theme")=="light"){

    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){

    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    
    localStorage.setItem("theme","light");
}
