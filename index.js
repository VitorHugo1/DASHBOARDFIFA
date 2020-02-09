var data = null
var ola = null
var mundo = null
fetch('https://fifagama.herokuapp.com/fifa19/0/5')
.then(function(response) {
	/*console.log(response)*/
  return response.json();
})
.then(function(myjson) {
  /*console.log(myjson)*/
  data = myjson
   ola = data.map(function(value){
	
	return value.data.Name	
})


   mundo = data.map(function(value){
	//return value.data.Value
	var resultado = value.data.Value.split('');
	var valor = null
	valor = resultado.filter(function(d){
//console.log(Number (d))
	if(Number (d)){
		return d; 
	}
	})
	return valor.join('')
			
})



geraragrafico()

gerarhtml(myjson);
});




function gerarhtml(response) {
    var html = ""
	response.forEach(function(item){
		
        html +=
`<li class="quarto">
   <div class="t">
	<img class="quarto-imagem" src="${item.data.Photo}" >
   </div>
    <div class="col-sm">
			<p>
			${item.data.Name}
			</p>
			
		<div><br>
			<img class="quarto-imagem" src="${item.data.Flag}" >
			
		<p>${item.data.Club}</p>	
			<img class="quarto-imagem" src="${item.data["Club Logo"]}" >
			
			<p>
			${item.data.Value}
			</p>
			<p>
			${item.data.Overall}
			</p>
			<p>
			${item.data.Position}
			</p>
    </div>
</li>`
 });
 console.log(html)

   document.getElementById('container').innerHTML = html
}


function geraragrafico(){
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ola,        
		datasets: [{
            label: 'Valores Jogadores',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: mundo
        }]
}})
}
