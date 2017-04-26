describe("US Telephone Check", function () {
	var check;

	beforeEach(function () {
		check = new Check();		
	});

	it("telephoneCheck(\"1 555-555-5555\") Should return true.", function () {
		expect(check.telephoneCheck("1 555-555-5555")).toEqual(true);
	});

	it("telephoneCheck(\"555-555-5555\") Should return true.", function () {
		expect(check.telephoneCheck("555-555-5555")).toEqual(true);
	});	

	it("telephoneCheck(\"1 (555) 555-5555\") Should return true.", function () {
		expect(check.telephoneCheck("1 (555) 555-5555")).toEqual(true);
	});	

	it("telephoneCheck(\"5555555555\") Should return true.", function () {
		expect(check.telephoneCheck("5555555555")).toEqual(true);
	});	

	it("telephoneCheck(\"(555)555-5555\")	Should return true.", function () {
		expect(check.telephoneCheck("(555)555-5555")).toEqual(true);
	});	

	it("telephoneCheck(\"1(555)555-5555\") Should return true.", function () {
		expect(check.telephoneCheck("1(555)555-5555")).toEqual(true);
	});	
	
	it("telephoneCheck(\"555-5555\") Should return false.", function () {
		expect(check.telephoneCheck("555-5555")).toEqual(false);
	});	
	
	it("telephoneCheck(\"5555555\") Should return false.", function () {
		expect(check.telephoneCheck("5555555")).toEqual(false);
	});	
	
	it("telephoneCheck(\"1 555 555 5555\") Should return true.", function () {
		expect(check.telephoneCheck("1 555 555 5555")).toEqual(true);
	});

	it("telephoneCheck(\"1 555)555-5555\") Should return false.", function () {
		expect(check.telephoneCheck("1 555)555-5555")).toEqual(false);
	});

	it("telephoneCheck(\"1 456 789 4444\") Should return true.", function () {
		expect(check.telephoneCheck("1 456 789 4444")).toEqual(true);
	});

	it("telephoneCheck(\"2 (757) 622-7382\") Should return false.", function () {
		expect(check.telephoneCheck("2 (757) 622-7382")).toEqual(false);
	});

	it("telephoneCheck(\"(275)76227382\") Should return false.", function () {
		expect(check.telephoneCheck("(275)76227382")).toEqual(false);
	});
	

});