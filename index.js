// Open nav bar on click
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
	const visibility = primaryNav.getAttribute("data-visible");

	if (visibility == "true") {
		primaryNav.setAttribute("data-visible", "false");
		navToggle.setAttribute("aria-expanded", "false");
	} else {
		primaryNav.setAttribute("data-visible", "true");
		navToggle.setAttribute("aria-expanded", "true");
	}
});

// Update color scheme
// WARNING: Spaggetti code ahead - don't touch unless you know what you're doing
const updateColorScheme = (invert) => {
	if (colorScheme == "dark") {
		if (invert == "true") {
			document.body.classList.add("light");
			localStorage.setItem("colorScheme", "light");
			colorScheme = "light";
		} else {
			document.body.classList.remove("light");
			localStorage.setItem("colorScheme", "dark");
			colorScheme = "dark";
		}
	} else {
		if (invert == "true") {
			document.body.classList.remove("light");
			localStorage.setItem("colorScheme", "dark");
			colorScheme = "dark";
		} else {
			document.body.classList.add("light");
			localStorage.setItem("colorScheme", "light");
			colorScheme = "light";
		}
	}
	colorSchemeText.innerHTML = `<a href="#" id="color-scheme-toggle" class="color-scheme"><span aria-hidden="true" class="material-symbols-outlined color-scheme-icon">${colorScheme}_mode</span>${
		colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)
	} Mode</a>`;
};

let colorScheme = localStorage.getItem("colorScheme");
const colorSchemeText = document.querySelector(".color-scheme");
const colorSchemeToggle = document.getElementById("color-scheme-toggle");

if (!colorScheme) {
	localStorage.setItem("colorScheme", "dark");
	console.log("No color scheme set, setting to dark");
}

// Update color scheme text
updateColorScheme("false");
console.log(`Loading page in ${colorScheme} mode.`);

// Toggle color scheme
colorSchemeToggle.addEventListener("click", () => {
	updateColorScheme("true");
});
