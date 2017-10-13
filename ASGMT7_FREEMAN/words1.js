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
	let ln = categories[choice].length
	let i = Math.floor(Math.random()*ln)
	return categories[choice][i]
}