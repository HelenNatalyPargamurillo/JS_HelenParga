function fetchUser(){
    let xhr= new XMLHttpRequest();
    let url = 'https://randomuser.me/api/';
    xhr.open ("GET",url,true);
    xhr.onreadystatechange=function (){
        if(this.readyState ===  4 && this.status ===200){
           let dato =JSON.parse(this.responseText);
           console.log(dato)
        }else {
            return ("Hambremus error!");
        }
   
    }
    xhr.send()
}
fetchUser();


//console.log((dato["result"][0]["name"]["first"])+""+(dato["result"][0]["name"][""]))