let tlFloating = gsap.timeline({
	// delay: 1,
	// duration: 0.5,
	repeat: -1,
})

let tlBarStatus = gsap.timeline({
	repeat: -1,
})

let colorBarFull = 'rgb(9, 214, 156)'

tlFloating
	.to('.bg-img', {
		y: '-=8',
		ease: Sine.easeInOut,
		duration: 0.9,
	})
	.to('.bg-img', {
		y: '+=8',
		ease: Sine.easeInOut,
		duration: 0.9,
	})

tlBarStatus
	.to('.bar-status', {
		delay: 3,
		duration: 3,
		width: '74',
		ease: Power3.easeInOut,
	})
	.to('.bar-status', {
		// delay: 3,
		fill: colorBarFull,
		duration: 3,
	})
