const headerLink = document.querySelectorAll(".header__link");
const randomBtn = document.querySelector(".random button");
const randomText = document.querySelector(".random p");
function negative(arr) {
	let res = [];
	arr.map(el => {
		res = res.concat(-el)
	})
	return res
}

const typeofNum = (arr) => {
	let res = 0
	arr.forEach(el => {
		if (typeof (el) === "number") {
			res += el
		}
	})
	return res
}
headerLink.forEach((el, idx) => {
	if ((idx + 1) % 2 === 0) {
		el.style.textDecoration = "none";
	}
})
randomBtn.addEventListener("click", () => {
	let random = Math.round(0 - 0.5 + Math.random() * (100 - 0 + 1));
	randomText.innerText = random;
	if (random > 50) {
		console.log("Больше")
	} else if (random < 50) {
		console.log("Меньше")
	} else {
		console.log("Равно")
	}
})