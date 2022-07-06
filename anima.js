let tlFloating = gsap.timeline({
	repeat: -1,
})

let barStatus = gsap.timeline({
	repeat: -1,
})

let playCheck = gsap.timeline({
	repeat: -1,
})

let tableItems = gsap.timeline({
	repeat: -1,
})

let test = gsap.timeline({
	repeat: -1,
})

let iconTechs = gsap.timeline({
	repeat: -1,
})

let jobItems = gsap.timeline({
	repeat: -1,
})

let avatar = gsap.timeline({
	repeat: -1,
})

let graphicItem = gsap.timeline({
	repeat: -1,
})

let rotateSmall = gsap.timeline({
	defaults: {
		duration: 80,
		ease: 'none',
		repeat: -1,
	},
})

let rotateBig = gsap.timeline({
	defaults: {
		duration: 100,
		ease: 'none',
		repeat: -1,
	},
})

const barStatusDelay = 3,
	barStatusDuration = 3,
	tableItemsDelay = 6,
	tableItemDisplayBlock = 0.5,
	tableItemsDuration = 2.5,
	tableHeightDuration = 0,
	tableHeightNegativeDuration = '-=3'

rotateSmall.to('.circle-small', {
	rotation: 360,
	svgOrigin: '279 279',
})

rotateBig.to('.circle-big', {
	rotation: -360,
	svgOrigin: '279 279',
})

tlFloating
	.to('.tooltip', {
		y: '-=8',
		ease: Sine.easeInOut,
		duration: 0.9,
	})
	.to('.tooltip', {
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

playCheck
	.to('.icon-play', {
		delay: 6,
	})
	.to('.icon-play', {
		y: '-=2',
		duration: 0.1,
	})
	.to('.icon-play', {
		y: '+=3',
		duration: 0.1,
		fill: '#12A27C',
	})
	.to('.icon-play', {
		y: '0',
		duration: 0.1,
		display: 'none',
	})
	.to('.icon-check', {
		display: 'block',
		duration: 2.7,
	})

iconTechs
	.to('.figma', {
		display: 'block',
		duration: 6,
	})
	.to('.figma', {
		duration: 3,
	})
	.to('.figma', {
		display: 'none',
	})
	.to('.javascript', {
		display: 'block',
		duration: 6,
	})
	.to('.javascript', {
		duration: 3,
	})
	.to('.javascript', {
		display: 'none',
	})
	.to('.asana', {
		display: 'block',
		duration: 6,
	})
	.to('.asana', {
		duration: 3,
	})
	.to('.asana', {
		display: 'none',
	})

avatar
	.to('.avatar-01', {
		display: 'block',
		duration: 6,
	})
	.to('.avatar-01', {
		duration: 3,
	})
	.to('.avatar-01', {
		display: 'none',
	})
	.to('.avatar-02', {
		display: 'block',
		duration: 6,
	})
	.to('.avatar-02', {
		duration: 3,
	})
	.to('.avatar-02', {
		display: 'none',
	})
	.to('.avatar-03', {
		display: 'block',
		duration: 6,
	})
	.to('.avatar-03', {
		duration: 3,
	})
	.to('.avatar-03', {
		display: 'none',
	})

jobItems
	.to('.item-job-01', {
		display: 'block',
		duration: 6,
	})
	.to('.item-job-01', {
		duration: 3,
	})
	.to('.item-job-01', {
		display: 'none',
	})
	.to('.item-job-02', {
		display: 'block',
		duration: 6,
	})
	.to('.item-job-02', {
		duration: 3,
	})
	.to('.item-job-02', {
		display: 'none',
	})
	.to('.item-job-03', {
		display: 'block',
		duration: 6,
	})
	.to('.item-job-03', {
		duration: 3,
	})
	.to('.item-job-03', {
		display: 'none',
	})

graphicItem
	.to('.graphic-01', {
		delay: tableItemsDelay,
		y: '8',
	})
	.to('.graphic-01', {
		y: '0',
		display: 'block',
		duration: tableItemDisplayBlock,
		ease: 'back.out(3)',
	})
	.to('.graphic-01', {
		duration: tableItemsDuration,
	})
	.to('.graphic-02', {
		delay: tableItemsDelay,
		y: '8',
	})
	.to('.graphic-02', {
		y: '0',
		display: 'block',
		duration: tableItemDisplayBlock,
		ease: 'back.out(3)',
	})
	.to('.graphic-02', {
		duration: tableItemsDuration,
	})
	.to('.graphic-03', {
		delay: tableItemsDelay,
		y: '8',
	})
	.to('.graphic-03', {
		y: '0',
		display: 'block',
		duration: tableItemDisplayBlock,
		ease: 'back.out(3)',
	})
	.to('.graphic-03', {
		duration: tableItemsDuration,
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
