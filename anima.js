let tlFloating = gsap.timeline({
	repeat: -1,
})

let tlBarStatus = gsap.timeline({
	repeat: -1,
})

let tlTable = gsap.timeline({
	repeat: -1,
})

let test = gsap.timeline({
	repeat: -1,
})

let barStatusDelay = 3,
	barStatusDuration = 3

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
	.to('.bar-charge', {
		delay: barStatusDelay,
		duration: barStatusDuration,
		width: '74',
		ease: Power3.easeInOut,
	})
	.to('.bar-complete', {
		duration: barStatusDuration,
		display: 'block',
	})

tlTable
	.to('.table-01', {
		delay: 6,
		x: '-10',
	})
	.to('.table-01', {
		x: '0',
		display: 'block',
		ease: Back.easeOut.config(3),
		// ease: Elastic.easeOut.config(1.2, 0.75),
	})

	.to('.table-01', {
		duration: '3',
	})
	.to(
		'.bg-table',
		{
			height: '75px',
			ease: Back.easeOut.config(2),
		},
		'-=3.5'
	)
	.to('.table-02', {
		delay: 6,
		x: '-10',
	})
	.to('.table-02', {
		x: '0',
		display: 'block',
		ease: Back.easeOut.config(3),
		// ease: Elastic.easeOut.config(1.2, 0.75),
	})

	.to('.table-02', {
		duration: '3',
	})
	.to(
		'.bg-table',
		{
			height: '107px',
			ease: Back.easeOut.config(2),
		},
		'-=3.5'
	)
	.to('.table-03', {
		delay: 6,
		x: '-30',
	})
	.to('.table-03', {
		x: '0',
		display: 'block',
		ease: Back.easeOut.config(3),
		// ease: Elastic.easeOut.config(1.2, 0.75),
	})

	.to('.table-03', {
		duration: '3',
	})
	.to(
		'.bg-table',
		{
			height: '139px',
			ease: Back.easeOut.config(2),
		},
		'-=3.5'
	)
