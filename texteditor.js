let para = document.querySelector(".para");
let textarea = document.querySelector("#textarea");
textarea.addEventListener("input", function (){
    para.innerText = textarea.value;
    console.log(textarea.value);
});