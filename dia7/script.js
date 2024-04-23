function fetchLuke(){
    let xhr =HMLHttproquest
    let url=`https://swapi.py4e.com/api/people/1/`
    xhr.open("GET",url,true);
    xhr.onreadystatechange=funcion(){
        if(this .radyState === 4 && this.status === 200){
        let response =JSON.parse(this.responseText);
        console.log(response);
        displayjson(response);
        } else if (this.radyState ===4){
            console.log(`Error:`,this.StatusText)
        }
    };
    xhr.send();
}
 function displayHer(data){
    let jsoninfo=document.get.ElementById("luky")
 }
 TheStarWars 
