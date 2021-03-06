ej.addCulture( "en-GB", {
	name: "en-GB",
	englishName: "English (United Kingdom)",
	nativeName: "English (United Kingdom)",
	numberFormat: {
		percent: {
			pattern: ["-n%","n%"]
		},
		currency: {
			pattern: ["-$n","$n"],
			symbol: "£"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			patterns: {
				d: "dd/MM/yyyy",
				D: "dd MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dd MMMM yyyy HH:mm",
				F: "dd MMMM yyyy HH:mm:ss",
				M: "d MMMM"
			}
		}
	}
});
