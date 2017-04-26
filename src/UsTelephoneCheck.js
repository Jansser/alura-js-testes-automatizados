function Check() {
	var self = {

		telephoneCheck: function (value) {
			var regex = new RegExp("^(1\\s?)?"
				+ "(\\d{3}|\\(\\d{3}\\))"
				+ "(\\s|-)?"
				+ "\\d{3}(\\s|-)?"
				+ "\\d{4}$");

			return regex.test(value);
		}
	};

	return self;
};