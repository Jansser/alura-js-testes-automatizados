function Consulta(paciente, procedimentos, particular, retorno, data) {
	var self = {
		preco: function () {
			if(retorno) return 0;

			var precoFinal = 0;

			procedimentos.forEach(function (procedimento) {
				if("raio-x" === procedimento) precoFinal += 55;
				else if("gesso" === procedimento) precoFinal += 32;
				else precoFinal += 25;
			});

			if(particular) precoFinal *= 2;

			return precoFinal;
		},

		getNome: function () { return paciente; },
		getData: function () { return data; },
		getProcedimentos: function () { return procedimentos; },
		isParticular: function () { return particular; },
		isRetorno: function () { return retorno; }
	};

	return self;
};