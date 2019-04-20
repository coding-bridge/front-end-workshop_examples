const $vinceSection = document.getElementById('vince')
const $vinceCard = $vinceSection.getElementsByClassName('card')[0]
const $vinceCaption = $vinceCard.getElementsByClassName('card__caption')[0]

function getPhase(eventPhase) {
	switch (eventPhase) {
		case 1:
			return 'CAPTURE phase'
		case 2:
			return 'TARGET'
		case 3:
			return 'BUBBLE phase'
	}
}

function windowEventListener (event) {
	// event.stopPropagation()

	console.log(`%c Window triggered at ${getPhase(event.eventPhase)}`, 'font-size: 24px; color: #73e8ff;')

	console.group('%c target ', 'background-color: #01579b;')
	console.log(event.target)
	console.groupEnd()

	console.group('%c current target ', 'background-color: #4f83cc;')
	console.log(event.currentTarget)
	console.groupEnd()

	console.log('\n')
}


function vinceCardEventListener (event) {
	// event.stopPropagation()
	// event.cancelBubble = true

	console.log(`%c Card triggered at ${getPhase(event.eventPhase)}`, 'font-size: 24px; color: #b2fab4;')

	console.group('%c target ', 'background-color: #004d40;')
	console.log(event.target)
	console.groupEnd()

	console.group('%c current target ', 'background-color: #39796b;')
	console.log(event.currentTarget)
	console.groupEnd()

	console.log('\n')
}

function vinceCaptionEventListener (event) {
	// event.cancelBubble = true

	console.log(`%cCaption triggered at ${getPhase(event.eventPhase)}`, 'font-size: 24px; color: #ff5bff;')

	console.group('%c current target ', 'background-color: #4a148c;')
	console.log(event.target)
	console.groupEnd()

	console.group('%c current target ', 'background-color: #7c43bd;')
	console.log(event.currentTarget)
	console.groupEnd()

	console.log('\n')
}



/* card: bubble phase */
$vinceCard.addEventListener('click', vinceCardEventListener)

/* card: capture phase */
// $vinceCard.addEventListener('click', vinceCardEventListener, true)

/* caption: bubble phase */
$vinceCaption.addEventListener('click', vinceCaptionEventListener)

/* caption: capture phase */
// $vinceCaption.addEventListener('click', vinceCaptionEventListener, true)

/* window: bubble phase */
window.addEventListener('click', windowEventListener)

/* window: capture phase */
// window.addEventListener('click', windowEventListener, true)