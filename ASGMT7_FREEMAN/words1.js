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
	let ln = categories[choice].length
	let i = Math.floor(Math.random()*ln)
	return categories[choice][i]
}

let backgrounds = {
	"Animals": 'Animals.jpg',
	"Astonomy": 'Astronomy.jpg',
	"Sports": 'Sports.jpg',
	"US Cities": 'US Cities.jpg'
}
