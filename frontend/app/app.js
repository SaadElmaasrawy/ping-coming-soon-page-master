var input = document.getElementById('input');
var btn = document.getElementById('btn');
var error = document.getElementById('error');

input.onclick = function(){
    input.setAttribute("value", "");
}
btn.onclick = function(){
    if(input.value == ""){
        error.innerHTML = "Whoops! It looks like you forgot to add your email";
    }else if(input.value =="Your email address..") {
        error.innerHTML = "Whoops! It looks like you forgot to add your email";
    }else if(input.value != "" || input.value != "Your email address.."){
        error.innerHTML = "";
    }
}