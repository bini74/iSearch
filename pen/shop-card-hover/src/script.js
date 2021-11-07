// https://github.com/josephschmitt/Clamp.js/

$(() => {
	let el = $("figcaption p");
	el.each((index, element) => {
		$clamp(element, { clamp: 3 });
	});
});
