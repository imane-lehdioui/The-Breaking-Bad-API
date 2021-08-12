// ****************Voici comment faire une appel a une API****************************
//---------------------------------------------------------------------------------------------------
//const api="https://www.breakingbadapi.com/api/characters";
//  async function getData(){
//      const response= await fetch (api) ;
//      const data = await response.json();
//      const print = data.map( m => m.name);
//      console.log(print);
//  }
//  getData();
//---------------------------------------------------------------------------------------------------
const api="https://www.breakingbadapi.com/api/characters";

 async function getData(){
     try{
         const response= await fetch (api) ;
         const data = await response.json();
         printData(data);
        }
        catch(e){
           console.log("Mademoiselle imane lehdioui il ya quelque chose qui cloche",e.message) 
        }
     
    
 }

function printData(data){
    const header=document.querySelector("#header");
    const content=document.querySelector("#content");
    header.innerHTML +=`
      <select class="form-control" onchange="getCh (this.value)">
         <option> Please select </option>
         ${data.map( character => `<option>${character.name} </option>`)} 
         </select>
         `
}

async function getCh(name){
    if(name != "Please select"){
    const response = await fetch(`${api}?name=${name}` )
    const data = await response.json()
    content.innerHTML =`<h2> ${data[0].name} (${data[0].nickname}) </h2>
    <h4>${data[0].portrayed}</h4>
    <img src="${data[0].img}" width="250" >`
}
}
getData()