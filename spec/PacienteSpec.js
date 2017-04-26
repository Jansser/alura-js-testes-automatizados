describe("Paciente", function () {
	var jansser;

	beforeEach(function () {
		jansser = new Paciente("Jansser", 25, 80, 1.72);
	});

	it("Deve calcular o imc", function () {
		expect(jansser.imc()).toEqual(80 / (1.72 * 1.72));
	});

	it("Deve calcular os batimentos", function () {
		var jansser = new Paciente("Jansser", 25, 80, 1.72);
		expect(jansser.batimentos()).toEqual(25 * 365 * 24 * 60 * 80);
	});
});