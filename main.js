let MisNotas =[
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

const crearNota = function(lasNotas, titulo, cuerpo){
	lasNotas.push({titulo:titulo,cuerpo:cuerpo})
}
const borrarNota = function(lasNotas,titulo){
	return lasNotas.findIndex(elem => elem.titulo === titulo)
}

const ordenarNotasCompletado = function(lasNotas,option){
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
const buscarTextoEnNotas = function(lasNotas,texto){
	index = lasNotas.findIndex(elem => elem.titulo === texto || elem.cuerpo === texto)
	if(index >= 0) return lasNotas[index]
}
crearNota(MisNotas,'haha','hehe')
console.log(MisNotas)
MisNotas.pop(borrarNota(MisNotas,'haha'))
console.log(MisNotas)
console.log(ordenarNotasCompletado(MisNotas,'cuerpo'))
console.log(buscarTextoEnNotas(MisNotas,'truco de VSC'))