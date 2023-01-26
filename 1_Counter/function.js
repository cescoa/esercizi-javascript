
var num = document.getElementById("numb");

let count = 0;
num.innerHTML = count;


/* ####### Aggiungiamo un numero al contatore ####### */
function add() {
    count++;
    num.innerHTML = count;
    if(count<0){
        document.getElementById("numb").style.color = "red";
    }else if (count>0){
        document.getElementById("numb").style.color = "#79B220";
    } else {
        document.getElementById("numb").style.color = "black";
    }
}

/* ####### togliamo un numero al contatore ####### */
function sub() {
    count--;   
    num.innerHTML = count;
    if(count<0){
        document.getElementById("numb").style.color = "red";
    }else if (count>0){
        document.getElementById("numb").style.color = "#79B220";
    } else {
        document.getElementById("numb").style.color = "black";
    }
 
}


/* ######## Resettiamo il contatore ########## */
function rest(){
    count=0;
    num.innerHTML = count;
    if(count<0){
        document.getElementById("numb").style.color = "red";
    }else if (count>0){
        document.getElementById("numb").style.color = "#79B220";
    } else {
        document.getElementById("numb").style.color = "black";
    }
}


