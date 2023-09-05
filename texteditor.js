let para = document.querySelector(".para");
let textarea = document.querySelector("#textarea");
textarea.addEventListener("input", function (){
    para.innerText = textarea.value;
    console.log(textarea.value);
});

// dark mode javascript start here
let icon = document.querySelector(".sun");
icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
       icon.src = "/asset/moon.png"
    }
    else{
        icon.src = "/asset/sun.png"
    }
}
