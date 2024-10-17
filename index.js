const diameter = document.getElementById("diameter-input");
const radius = document.getElementById("radius-input");
const area = document.getElementById("area-input");
const circumference = document.getElementById("circumference-input");

const inputs = [diameter, radius, area, circumference];

function calculateCircle(d, r, a, c) {
	if (d) {
		r = d / 2;
		a = Math.PI * (r * r);
		c = Math.PI * d;
	} else if (r) {
		d = r * 2;
		a = Math.PI * (r * r);
		c = Math.PI * d;
	} else if (a) {
		r = Math.sqrt(a / Math.PI);
		d = r * 2;
		c = Math.PI * d;
	} else if (c) {
		d = c / Math.PI;
		r = d / 2;
		a = Math.PI * (r * r);
	}

	diameter.value = d;
	radius.value = r;
	area.value = a;
	circumference.value = c;
}

function handleInput(event) {
	const input = event.target.name;
	const value = event.target.value;

	switch (input) {
		case "diameter-input":
			calculateCircle(value, null, null, null);
			break;
		case "radius-input":
			calculateCircle(null, value, null, null);
			break;
		case "area-input":
			calculateCircle(null, null, value, null);
			break;
		case "circumference-input":
			calculateCircle(null, null, null, value);
			break;
	}
}

inputs.forEach((input) => {
	input.addEventListener("input", handleInput);
});
