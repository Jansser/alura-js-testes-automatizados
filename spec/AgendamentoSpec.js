describe("Agendamento", function () { 
	var jansser;
	var agenda;

	beforeEach(function () {
		jansser = new PacienteBuilder().build();
		agenda = new Agendamento();
	});

	it("Deve agendar para 20 dias depois", function () {
		var consulta = new Consulta(jansser, [], false, false, new Date(2014, 7, 1));
		var retorno  = agenda.para(consulta);

		expect(retorno.getData().toString()).toEqual(new Date(2014, 7, 21).toString());
	});

	it("Deve pular fins de semana", function () {
		var consulta = new Consulta( jansser, [], false, false, new Date(2014, 5, 30) );
		var retorno  = agenda.para(consulta);

		expect(retorno.getData().toString()).toEqual( new Date(2014, 6, 21).toString() );
	});
});