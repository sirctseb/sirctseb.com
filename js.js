/**
 * @author sirc
 */

function init() {
	$(".menu-item").hover(hoveron, unhover);
	$(".menu-item").click(menuClick);
	$(".picselector").hover(showpic,hidepic);
	$(".picselector").click(clickPic);
	
	/* show page specified by url */
	hash_index = document.location.href.lastIndexOf("#");
	if (hash_index != -1) {
		section = document.location.href.substr(hash_index + 1);
		if(section.length > 0) {
			//$("[title=" + section + "]").click();
			doMenu($("[title=" + section + "]"));
		}
	}
}
function showpage(page_id) {
	if (!$(page_id).hasClass("active")) {
		$(".content").removeClass("active");
		$(page_id).addClass("active");
	}
}
function hoveron() {
	$(this).addClass("hovering");
	showpage("#" + $(this).attr("title"));
}
function unhover() {
	$(this).removeClass("hovering");
	$(".content").removeClass("active");
	$("#" + $(".selected-item").attr("title")).addClass("active");
}
function menuClick() {
	/*$(this).addClass("selected-item");
	$(".menu-item").not($(this)).removeClass("selected-item");
	showpage("#" + $(this).attr("title"));*/
	doMenu($(this));
}
function doMenu(menu) {
	menu.addClass("selected-item");
	$(".menu-item").not(menu).removeClass("selected-item");
	showpage("#" + menu.attr("title"));
}
function showpic() {
	$(".corner-pic").hide();
	$("#" + $(this).attr("name")).show();
}
function hidepic() {
	$(".corner-pic").hide();
	$(".main-pic").show();
}
function clickPic() {
	$(".main-pic").removeClass("main-pic");
	$("#" + $(this).attr("name")).addClass("main-pic").fadeTo(0, 0.5).fadeTo('slow', 1);
}
