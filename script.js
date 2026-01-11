let screen = document.getElementById("display");
function display(value){
    screen.value += value;
}

function Calculate(){
    try{
    screen.value = eval(screen.value);
    } catch {
        screen.value = "Error";
    }
}

function Clear(){
    screen.value = "";
}