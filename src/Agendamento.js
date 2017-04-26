function Agendamento() {
	var self = {
		para: function (consulta) {
			var umDiaEmMillisegundos = 1000 * 60 * 60 * 24;
			var vinteDiasEmMillisegundos = umDiaEmMillisegundos * 20;
			var novaData = new Date(consulta.getData().getTime() + vinteDiasEmMillisegundos);

			while(this.isFimDeSemana(novaData)) {
				novaData = new Date(novaData.getTime() + umDiaEmMillisegundos);
			}

			var novaConsulta = new Consulta(consulta.getNome(), consulta.getProcedimentos(), consulta.isParticular(),
				consulta.isRetorno(), novaData);

			return novaConsulta;
		},

		isFimDeSemana: function (data) {
			return data.getDay() == 0 || data.getDay() == 6;
		}
	};

	return self;
};