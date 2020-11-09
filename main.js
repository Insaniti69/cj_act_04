const MisNotas =[
    {titulo: 'truco de VSCode',
	cuerpo: 'usar snippets para todo'},
	{titulo: 'truco de VSCode2',
	cuerpo: 'usar snippets para todo2'},
	{titulo: 'truco de VSCode3',
	cuerpo: 'usar snippets para toasdasdasdasdadsdo3'},
	{titulo: 'truco de VSCode4',
	cuerpo: 'usar snippets para todo4'},
]

//cj_act_04

const crearNota = (lasNotas, titulo, cuerpo) => lasNotas.push({titulo:titulo,cuerpo:cuerpo})

const borrarNota = (lasNotas,titulo) => {
	index = lasNotas.findIndex(elem => elem.titulo === titulo)
	if(index >= 0) return lasNotas.splice(index,1)
}

const ordenarNotasCompletado = (lasNotas,option) => {
	return lasNotas.sort((a,b) => {
		if(a[option].toLowerCase() < b[option].toLowerCase()){
			return -1;
		}else if(a[option].toLowerCase() > b[option].toLowerCase()){
			return 1;
		}else{
			return 0;
		}
	});
}

const buscarTextoEnNotas = (lasNotas,texto) => {
	index = lasNotas.findIndex(elem => elem.titulo === texto || elem.cuerpo === texto)
	if(index >= 0) return lasNotas[index]
}

crearNota(MisNotas,'haha','hehe')
console.log('\n-----------------------\n')
console.log(MisNotas)
console.log('\n-----------------------\n')
console.log(borrarNota(MisNotas,'truco de VSCode'))
console.log(MisNotas)
console.log('\n-----------------------\n')
console.log(ordenarNotasCompletado(MisNotas,'cuerpo'))
console.log('\n-----------------------\n')
console.log(buscarTextoEnNotas(MisNotas,'truco de VSCode2'))