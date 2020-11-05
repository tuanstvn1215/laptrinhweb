var y = document.getElementsByClassName('main-left-list-item')
var x = document.getElementsByClassName('main-left-title')
function hienthi() {
	if (y[0].style.display) {
		y[0].style.display = ''

		x[0].getElementsByClassName('icon')[0].textContent = '+'
	} else {
		y[0].style.display = 'block'
		x[0].getElementsByClassName('icon')[0].textContent = '-'
	}
}
