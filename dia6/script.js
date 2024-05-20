function fetchSuperHero(){
	let xhr = new XMLHttpRequest();
	let heroID =document.getElementById("heroid").value;
	let apiKey="70e2818ad0610b19bfa61d614778a885"
	let url = `https://superheroapi.com/api.php/${apiKey}/${heroID}`;
	xhr.open("GET",url,true);
	xhr.onreadystatechange=function(){
		if(this.readyState ===4 && this.status === 200){
			let response = JSON.parse (this.responseText);
			console.log(response);
			displayHero(response);
		} else if (this.readyState ==4){
			console.log("Error:",this.statusText);
			
		
		}
	};
	xhr.send();
}
function displayHero(data){
	let heroInfo = document.getElementById("SuperHeroInfo");
	if(data.response === "error"){
		heroInfo.innerHTML=` <p>Error:${data.error}</p>`; 
	}else{
		heroInfo.innerHTML=`
		<p>Name:${data.name}</p>
		<p>inteligencia :${data.powerstats["intelligence"]} </p>
		<p>biography:${data.biography["full-name"]} </p>
		<p>appearance:${data.appearance["gender"]} </p>
		<p>work:${data.work["occupation"]} </p>
		<p>connections :${data.connections["group-affiliation"]} </p>
		<img src="${data.image["url"]}"></img>`
		
		
	}
}




