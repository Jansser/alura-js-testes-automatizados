function PacienteBuilder() {
	var nome = "Jansser";
	var idade = 25;
	var peso  = 80;
	var altura = 1.80;

	var clazz = {
		build: function () {
			return Paciente(nome, idade, peso, altura);
		},

		comIdade: function (valor) {
			idade = valor;

			return this;
		},

		comPeso: function (valor) {
			peso = valor;

			return this;
		}
	};

	return clazz;
};