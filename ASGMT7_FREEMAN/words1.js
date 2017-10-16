let categories = {
	"Animals": [
		"dog","horse","lion","whale","cheetah","kangaroo","salmon","moose","eagle","lobster"
	],
	"US Cities": [
		"denver","sacramento","albany","phoenix","houston","cleveland","portland","chicago","minneapolis","boston"
	],
	"Coutries": [
		"argentina","brazil","colombia","greece","india","luxembourg","mexico","nepal","qatar","uganda"
	],
	"Astronomy": [
		"sun","mercury","venus","earth","mars","asteroid","jupiter","saturn","uranus","neptune"
	],
	"Sports": [
		"baseball","football","cricket","soccer","hockey","basketball","volleyball","lacrosse","tennis","golf"
	]
}

let randomWord = choice => {
	// ln is used to cache the length of the chosen category allowing for words to be added or removed and this will still function
	let ln = categories[choice].length
	// i is used to store the index of the random word
	let i = Math.floor(Math.random()*ln)
	return categories[choice][i]
}

// object will store the different backgrounds to match the chosen category
let backgrounds = {
	"Animals": 'Animals.jpg',
	"Astonomy": 'Astronomy.jpg',
	"Sports": 'Sports.jpg',
	"US Cities": 'US Cities.jpg'
}
