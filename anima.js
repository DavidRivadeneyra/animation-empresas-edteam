let tlFloating = gsap.timeline({
	repeat: -1,
})

let barStatus = gsap.timeline({
	repeat: -1,
})

let tableItems = gsap.timeline({
	repeat: -1,
})

let test = gsap.timeline({
	repeat: -1,
})

const barStatusDelay = 3,
	barStatusDuration = 3,
	tableItemsDelay = 6,
	tableItemDisplayBlock = 0.5,
	tableItemsDuration = 2.5,
	tableHeightDuration = 0,
	tableHeightNegativeDuration = '-=3'

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

barStatus
	.to('.bar-charge', {
		delay: barStatusDelay,
	})
	.to('.bar-charge', {
		duration: barStatusDuration,
		width: '74',
		ease: Power3.easeInOut,
	})
	.to('.bar-complete', {
		duration: barStatusDuration,
		display: 'block',
	})

// Table items

tableItems
	.to('.item-table-01', {
		delay: tableItemsDelay,
		x: '-10',
	})
	.to('.item-table-01', {
		x: '0',
		display: 'block',
		duration: tableItemDisplayBlock,
		ease: 'back.out(3)',
	})
	.to('.item-table-01', {
		duration: tableItemsDuration,
	})
	.to(
		'.table-height',
		{
			height: '75px',
			duration: tableHeightDuration,
		},
		tableHeightNegativeDuration
	)

	.to('.item-table-02', {
		delay: tableItemsDelay,
		x: '-10',
	})
	.to('.item-table-02', {
		x: '0',
		display: 'block',
		duration: tableItemDisplayBlock,
		ease: 'back.out(3)',
	})
	.to('.item-table-02', {
		duration: tableItemsDuration,
	})
	.to(
		'.table-height',
		{
			height: '107px',
			duration: tableHeightDuration,
		},
		tableHeightNegativeDuration
	)
	.to('.item-table-03', {
		delay: tableItemsDelay,
		x: '-10',
	})
	.to('.item-table-03', {
		x: '0',
		display: 'block',
		duration: tableItemDisplayBlock,
		ease: 'back.out(3)',
	})
	.to('.item-table-03', {
		duration: tableItemsDuration,
	})
	.to(
		'.table-height',
		{
			height: '139px',
			duration: tableHeightDuration,
		},
		tableHeightNegativeDuration
	)
