// countapi.xyz api

const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/hit/hit-counter/mysite')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}