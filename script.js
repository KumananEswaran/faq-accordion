document.addEventListener('DOMContentLoaded', function () {
	const firstButton = document.querySelector('.question-btn');
	firstButton.focus();
});

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
	const btn = question.querySelector('.question-btn');
	btn.addEventListener('click', function () {
		questions.forEach((item) => {
			if (item !== question) {
				item.classList.remove('show-text');
			}
		});
		question.classList.toggle('show-text');
	});

	btn.addEventListener('keydown', function (e) {
		questions.forEach((item) => {
			if (item !== question) {
				item.classList.remove('show-text');
			}
		});
		if (e.key === 'Enter') {
			e.preventDefault();
			question.classList.toggle('show-text');
		}
	});
});
