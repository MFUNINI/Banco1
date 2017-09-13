MCKK = new Cliente("Macalister", 786683390)
Jubilut = new Clinete("Jubileu", 728947387)
MCKK.extrato()
MCKK.deposit(45000)
MCKK.retirar(500)
MCKK.mudarconta(234, DJ PERERA)
MCKK.extrato()
Jubilut.extrato()

var Banconovo = new Banco("MCK");


function Clinete(nome, CPF){
	this.nomecl = nome;
	this.cpf = CPF;
	var satual = 0;

	this.deposit = function(valord){
		satual +=valor;
	}

	this.retirar = function(valord){
		satual-=valord;
	}

	this.mudarconta = function(valord, novod){
		satual-=valord;
		novod.deposit(valord);

	}
	this.extrato = function() {
		console.log(this.nome + this.cpf + satual);
	}

}


var Banco = function (gerent) {
	this.gerent = gerente;
	this.cliente = [];
	this.cont = 0;
	this.addclient = function(clientes){
		this.cliente.push(clientes);
		this.cont ++;
	}
	this.removclient = function(cont){
		delete this.cliente[cont];
	}
}

