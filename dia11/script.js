var heroes =[];

var inputHeroe = document.querySelector("#nombre");
inputHeroe.addEventListener("keypress",(event)=>{
   if (event.keyCode ==5){
    heroes.push(inputHeroe.value);
    inputHeroe.value =""
    llenatabla ();
   }
;});
function llenatabla(){
    var body ="";
    for (var i = 0; i< heroes.length ; i++){
            body += "<tr><td>"+(i+1)+"</td></td>"
        }
    }
}