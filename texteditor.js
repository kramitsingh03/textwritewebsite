let para = document.querySelector(".para");
let textarea = document.querySelector("#textarea");
textarea.addEventListener("input", function (){
    para.innerText = textarea.value;
    console.log(textarea.value);
});

// dark mode javascript start here
let icon = document.querySelector(".fa-sun");
let moonIcon = document.querySelector(".fa-moon");
icon.onclick = function(){
    document.body.classList.toggle("night-mode");
    // if(document.body.classList.contains("night-mode")){
    // icon.style.visibility = "visible";
    // moonicon.style.visibility = "hidden";
    // }
    // else{
    //     icon.style.visibility = "hidden";
    // moonicon.style.visibility = "visible";
    // }
}