const mAudio = document.querySelector("#audio")

// Events




document.addEventListener("click", function () {

    
    return mAudio.play();
})






const calculadora = document.getElementById('calculadora')
const resultado = document.getElementById('resultado')



calculadora.addEventListener('click', añadirNumeros)


let operaciones = []



function añadirNumeros(e){
	if(e.target.getAttribute('type') === 'button'){
		if(e.target.className != 'operacion'){
			resultado.value += e.target.innerText
		}
        if(e.target.id === 'sumar'){
			operaciones.push(resultado.value)
			operaciones.push('+')
			calculadora.reset()
		}
		if(e.target.id === 'igual'){
			operaciones.push(resultado.value)
			calculadora.reset()
			const resultadoOperacion = eval(operaciones.join(''))
			resultado.value = resultadoOperacion
			operaciones = []
		}
		if(e.target.id === 'restar'){
			operaciones.push(resultado.value)
			operaciones.push('-')
			calculadora.reset()
		}
		if(e.target.id === 'multiplicar'){
			operaciones.push(resultado.value)
			operaciones.push('*')
			calculadora.reset()
		}
		if(e.target.id === 'dividir'){
			operaciones.push(resultado.value)
			operaciones.push('/')
			calculadora.reset()
		}
		if(e.target.id === 'clear'){
			operaciones = []
			calculadora.reset()
		}
	}
}












//Funcion para calcular la propina
function calularPropina()
{
//obtener datos
var totalCompra = document.getElementById('box').value;
var porcentajePropina = document.getElementById('box2').value;
var totalPersonas = document.getElementById('box3').value;

//formulas
var porcentaje = porcentajePropina/100;
var resultado1 = totalCompra*porcentaje;
var resultado2 = resultado1/totalPersonas;



if (totalCompra=="") {
	
	document.getElementById('r3').innerHTML = "INTRODUZCA TTODOS LOS DATOS";
	document.getElementById('r1').innerHTML = ":(";
	document.getElementById('r2').innerHTML = ":(";
}

else{

	//respuestas

	document.getElementById('r1').innerHTML = resultado1.toFixed(2);
	
	document.getElementById('r2').innerHTML = resultado2.toFixed(2);



}



}