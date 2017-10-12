var words = [
	 "muon", "blight","kerfuffle","qat"
];

let categories = {
	"Animals": [
		"Dog","Horse","Lion","Whale","Rattle Snake","Kangaroo","Clown Fish","Moose"
	],
	"Cities": [
		"Denver","Las Angeles","New York","Phoenix","Houston","Cleveland","Washington D.C.","Chicago","Minneapolis","Boston"
	]
}

let choice = "Animals"

let randomWord = () => {
	let length = categories[choice].length
	let i = Math.floor(Math.random()*length)
	return categories[choice][i]
}
