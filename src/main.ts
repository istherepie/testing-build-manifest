import { Hello, AnotherHello, YetAnotherHello } from "./dummy";

document.addEventListener("DOMContentLoaded", () => {
	const title = document.getElementById("title");

	if (title === null) {
		return;
	}

	title.textContent = Hello();

	title.textContent = AnotherHello();

	title.textContent = YetAnotherHello();
});
