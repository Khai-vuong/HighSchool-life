// Miscellaneous
function toggleTitle(div) {
	// Description: A <div> with a <p> as a title

	// alert(1);

	var title = div.siblings("p");
	title.slideToggle(200);
}

$(document).ready( function() {
	// Header
	var currentCover = 0;

	var leftBt = $("header .left-bt");
	var rightBt = $("header .right-bt");
	var cover = $("header img");

	leftBt.on("click", function() {
		--currentCover;
		if (currentCover < 0) currentCover = 2;

		cover.attr("src", `images/HighSchool_Cover_1${currentCover}.jpg`);
	});

	rightBt.on("click", function() {
		++currentCover;
		if (currentCover > 2) currentCover = 0;

		cover.attr("src", `images/HighSchool_Cover_1${currentCover}.jpg`);
	});

	//Selecting images
	var image1 = $("#Image_1");
	var image2 = $("#Image_2");
	var upload_bt1 = $("#upload_bt1");
	var upload_bt2 = $("#upload_bt2");

	upload_bt1.on('change', function(event) {
		const file = event.target.files[0];

		alert(1);	

		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				image1.attr('src', `${e.target.result}`);
				alert(e.target.result);

			}
			reader.readAsDataURL(file);
		}
	});

	upload_bt2.on('change', function(event) {
		const file = event.target.files[0];

		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				image2.attr('src', `${e.target.result}`);
				alert(e.target.result)
			}
			reader.readAsDataURL(file);
		}
	});

});

