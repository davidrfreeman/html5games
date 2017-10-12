var words = [
	 "muon", "blight","kerfuffle","qat"
];

let categories = {
	"Animals": [
		"dog","horse","lion","whale","cheetah","kangaroo","salmon","moose","eagle","hawk","lobster"
	],
	"Cities": [
		"denver","sacramento","albany","phoenix","houston","cleveland","portland","chicago","minneapolis","boston"
	]
}

let randomWord = choice => {
	let length = categories[choice].length
	let i = Math.floor(Math.random()*length)
	return categories[choice][i]
}

