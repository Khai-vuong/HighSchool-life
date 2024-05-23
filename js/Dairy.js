//GLOBAL VAR
var isMenuOn = false;
var isNavHover = false;

var targetGrade = 0;

function AdjustContent()
{
	//Adjust the size of the Text according to the Image
	var visual = $('.visual');
	var text = $('.text');

	var visual_width = visual.innerWidth();
	text.innerWidth(window.innerWidth - visual_width - 50);
}

function Event_Submenu()
{	
	var navGroup = $('.nav-group');
	var subMenu = $('.sub-menu');

	/*
	Làm cho submenu bật, tắt khi hover <.navGroup> (Dùng flag)
	Chỉ khi đưa chuột ra ngoài subMenu, ko đưa vào navGroup thì mới
	tính là tắt subMenu hẳn (200ms delay để coi có đưa vào tròng navGroup ko)
	*/

	navGroup.on('mouseenter', function() {
		isNavHover = true;

		if (!isMenuOn)
			isMenuOn = true;
	});

	navGroup.on('mouseleave', 	function() {
		isNavHover = false;
	});

	subMenu.on('mouseenter', function() {

	});

	subMenu.on('mouseleave', function() {
		setTimeout(function() {
			if (!isNavHover)
			{
				isMenuOn = false;
			}

		}, 200);
	});	
}

function Event_targetGrade()
{
	var gradeTags = $('.grade');


}

$(document).ready(function() {
	var subMenu = $('.sub-menu');

	//Initialize
	AdjustContent();
	Event_Submenu();
	Event_targetGrade();

	//Main Loop
	setInterval(function() {
		//How things work:
		//AssignEvents() sẽ cập nhật trạng thái của isMenuOn & isNavHover
		//Main Loop chỉ lấy thông tin và làm theo.

		if (isMenuOn)
			subMenu.slideDown(200);
		else
			subMenu.slideUp(200);

	}, 100);

	var cells = $('table tr td')
	for (x = 0; x < 15; ++x)
	{
		cells.eq(x).text(`${x}`);
	
	}
});