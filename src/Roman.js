function Roman() {
	var self = {
		letters: {
			"I": 1,
			"V": 5,
			"X": 10,
			"L": 50,
			"C": 100,
			"D": 500,
			"M": 1000,
			"N": 0
		},

		convert: function (numeral) {
			var letters   = self.letters;
			var index     = 0;
			var values    = [];
			var maxValue  = letters["M"];
			var algarisms = numeral.split(''); 

			while(index < algarisms.length) {
				var algarism = algarisms[index];
				var value    = letters[algarism];

				if(typeof value === "undefined") {
					throw new Error("The letter " + algarism + " is not valid.");
				}

				var isRepeatedMoreThanThreeTimes = self.ocurrences(numeral, algarism) > 3;
				if(isRepeatedMoreThanThreeTimes) {
					throw new Error('The letter ' + algarism + ' is repeated more than three times.');
				}

				if(self.numberBeginWithFive(algarism) && self.ocurrences(numeral, algarism) > 1)
					throw new Error("Numbers started with five can't appear more than once.");

				if(value > maxValue) {
					throw new Error("Once a value has been subtracted from another, no further numeral or pair may match or exceed the subtracted value");
				}

				var nextValue = 0;
				if(index < algarisms.length - 1) {
					var nextAlgarism = algarisms[index + 1];
					nextValue = letters[nextAlgarism];

					if(nextValue > value) {
						var nextValueIsGreatherThanOneTenthOfValue = nextValue > (value * 10);
						if(nextValueIsGreatherThanOneTenthOfValue) {
							throw new Error("The next value has to be more than one tenth of the value.");
						}

						maxValue = value - 1;
						value = nextValue - value;
						index++;
					}
				}

				values.push(value);

				index++;
			}

			var decimal = values.reduce(function (previousValue, value) {
				return previousValue + value;
			});

			return decimal;
		},

		ocurrences: function (numeral, algarism) {
			return (numeral.match(new RegExp(algarism, "g")) || []).length;
		},

		numberBeginWithFive(algarism) {
			var value = self.letters[algarism];

			return value === self.letters.V || value === self.letters.L || value === self.letters.D;
		}
	};

	return self;
};