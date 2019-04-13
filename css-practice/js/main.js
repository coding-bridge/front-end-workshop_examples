const $vinceSection = document.getElementById('vince')
const $vinceCard = $vinceSection.getElementsByClassName('card')[0]
const $vinceCaption = $vinceCard.getElementsByClassName('card__caption')[0]

console.log($vinceSection.getElementsByClassName('card'))

function vinceSectionEventListener (event) {
	// console.log(event.target)
	console.log(event.currentTarget)
}
function vinceCaptionEventListener (event) {
	// console.log(event.target)
	console.log(event.currentTarget)
	// event.cancelBubble = true
	// event.stopPropagation()
}

$vinceCard.addEventListener('click', vinceSectionEventListener)
$vinceCaption.addEventListener('click', vinceCaptionEventListener)