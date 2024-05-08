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


}