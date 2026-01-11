let display = document.getElementById("display");
function display(value){
    display.value += value;
}

function Calculate(){
    try{
    display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function Clear(){
    display.value = "";
}