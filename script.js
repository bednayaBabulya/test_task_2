const canvas = document.querySelector('.mask')
const ctx = canvas.getContext('2d')

function updateMask() {
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.fillStyle = 'black'
	ctx.fillRect(0, 0, canvas.width, canvas.height)

	const windows = document.querySelectorAll('.window')
	windows.forEach(win => {
		const rect = win.getBoundingClientRect()
		ctx.clearRect(rect.left, rect.top, rect.width, rect.height)
	})
}

window.addEventListener('resize', updateMask)
window.addEventListener('load', updateMask)
window.addEventListener('scroll', updateMask)
setInterval(updateMask, 100)
