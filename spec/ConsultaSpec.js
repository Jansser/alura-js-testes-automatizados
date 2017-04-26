describe("Consulta", function () {
	var paciente;
	var consulta;

	beforeEach(function () {
		paciente = new PacienteBuilder().comPeso(90).build();
		consulta = new Consulta(paciente, [], true, true);
	});

	afterEach(function () {
		//console.log('After');
	});

	describe("Consultas do tipo retorno", function () {
		it("nao deve cobrar nada se a consulta for um retorno", function () {
			expect(consulta.preco()).toEqual(0);
		});
	});

	describe("Consultas com procedimentos", function () {
		it("deve cobrar 25 por cada procedimento comum", function () {
			var consulta = new Consulta(paciente, ["proc1", "proc2", "proc3"], false, false);
			expect(consulta.preco()).toEqual(75);
		});

		it("deve cobrar o dobro de consulta particular", function () {
			consulta = new Consulta(paciente, ["proc1", "proc2"], true, false);
			expect(consulta.preco()).toEqual(100);
		});

		it("deve cobrar preco especifico dependendo do procedimento", function () {
			consulta = new Consulta(paciente, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false, false);
			expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
		});

		it("deve cobrar o dobro de particular mesmo com preco especifico", function () {
			consulta = new Consulta(paciente, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], true, false);
			expect(consulta.preco()).toEqual( (25 + 55 + 25 + 32) * 2);
		});
	});
});