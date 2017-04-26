describe("Roman Numerals Converter", function () {
	var roman;

	beforeEach(function () {
		roman = new Roman();
	});

	afterEach(function () {
		//console.warn('END');
	});

	it("Should throw an exception when a letter is not valid.", function () {
		var tryConvertInvalidNumeral = function () {
			roman.convert("IIOX");
		};

		expect(tryConvertInvalidNumeral).toThrow();
	});

	it("Should throw an exception when a letter is repeated more than three times.", function () {
		var tryConvertInvalidNumeral = function () {
			roman.convert("IIII");
		};

		expect(tryConvertInvalidNumeral).toThrow();
	});

	it("Should throw an exception when a letter is repeated more than three times even in the middle of the numeral.", function () {
		var tryConvertInvalidNumeral = function () {
			roman.convert("IVXXXXXXXI");
		};

		expect(tryConvertInvalidNumeral).toThrow();
	});

	it("Should throw an exception when a number who begin with five appear more than once.", function () {
		var tryConvertInvalidNumeral = function () {
			roman.convert("VIV");
		};

		expect(tryConvertInvalidNumeral).toThrow();
	});

	it("Should throw an exception if the number on left is small-valued and is not at least one tenth of the value of the larger.", function () {
		var tryConvertInvalidNumeral = function () {
			roman.convert("IC");
		};

		expect(tryConvertInvalidNumeral).toThrow();
	});

	it("Should thrown an exception once a value has been subtracted from another and the further numeral match or exceed the subtracted value.", function () {
		var tryConvertInvalidNumeral = function () {
			roman.convert("CMC");
		};

		expect(tryConvertInvalidNumeral).toThrow();
	});

	it("Should thrown an exception once a value has been subtracted from another and the further pair match or exceed the subtracted value.", function () {
		var tryConvertInvalidNumeral = function () {
			roman.convert("MCMD")
		};

		expect(tryConvertInvalidNumeral).toThrow();
	});

	it("Should return 1 for I.", function () {
		expect(roman.convert("I")).toEqual(1);
	});

	it("Should return 0 for N.", function () {
		expect(roman.convert("N")).toEqual(0);
	});

	it("Should add when a larger number is on the left.", function () {
		expect(roman.convert("MDCLXI")).toEqual(1661);
	});

	it("Should add when an equal number is on the left.", function () {
		expect(roman.convert("CCC")).toEqual(300);
	});

	it("Should subtract when an small-value number is on the left.", function () {
		expect(roman.convert("IX")).toEqual(9);
	});

	it("Should return 90 for XC.", function () {
		expect(roman.convert("XC")).toEqual(90);
	});

	it("Should return 99 for XCIX.", function () {
		expect(roman.convert("XCIX")).toEqual(99);
	});

	it("Should return 19 for XIX.", function () {
		expect(roman.convert("XIX")).toEqual(19);
	});
});