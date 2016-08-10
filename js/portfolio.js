/*Porfolio JS */

$( ".myNavBar" ).hover(
  function() {
    $( this ).addClass( "myNavBarHover" );
  }, function() {
    $( this ).removeClass( "myNavBarHover" );
  }
);

function reset() {
    $(".accordion>ul>li").css("background-color", "rgba(255, 255, 255, 0.3)"), $(".uipane").css("width", "33.333%"), $(".devpane").css({
        width: "33.333%",
        "background-color": "rgba(255, 255, 255, 0.4)"
    }), $(".uxpane").css("width", "33.333%"), $(".uicopy, .devcopy, .uxcopy").hide(), $(".uibutton, .devbutton, .uxbutton").css("color", "rgba(255, 255, 255, 1)"), i = 0, d = 0, x = 0
}
var $grid = $(".grid").masonry({
    itemSelector: ".grid-item",
    percentPosition: !0,
    columnWidth: ".grid-sizer"
});
$grid.imagesLoaded().progress(function() {
    $grid.masonry()
}), $grid.on("click", ".grid-item", function() {
    $(this).toggleClass("grid-item--focus"), $grid.masonry()
}), $(function() {
    $("a.page-scroll").bind("click", function(o) {
        var c = $(this);
        $("html, body").stop().animate({
            scrollTop: $(c.attr("href")).offset().top
        }, 1500, "easeInOutExpo"), o.preventDefault()
    })
}), $(".scrollToTop").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, 800), !1
}), $(window).resize(function() {
    var o = window.innerHeight;
    $(".accordion>ul>li").css("height", o)
}), $(".uibutton,.devbutton, .uxbutton").hover(function() {
    $(this).css("color", "rgba(255, 255, 255, 0.3)")
}, function() {
    $(this).css("color", "white")
}), $(window).resize();
var i = 0,
    d = 0,
    x = 0;
$(".uibutton").click(function() {
    0 == i ? ($(".accordion>ul>li").css("background-color", "#E91E63"), $(".uibutton").css("color", "rgba(255, 255, 255, 1)"), $(".devbutton, .uxbutton").css("color", "rgba(0, 0, 0, 0.3)"), $(".uipane").css({
        width: "70%",
        "background-color": "rgba(255, 255, 255, 0.3)"
    }), $(".devpane").css("width", "15%"), $(".uxpane").css("width", "15%"), $(".uicopy").delay(400).fadeIn(400), $(".devcopy, .uxcopy").hide(), i = 1, d = 0, x = 0) : reset()
}), $(".devbutton").click(function() {
    0 == d ? ($(".accordion>ul>li").css("background-color", "#C2185B"), $(".devbutton").css("color", "rgba(255, 255, 255, 1)"), $(".uibutton, .uxbutton").css("color", "rgba(0, 0, 0, 0.3)"), $(".uipane").css("width", "15%"), $(".devpane").css({
        width: "70%",
        "background-color": "rgba(255, 255, 255, 0.4)"
    }), $(".uxpane").css("width", "15%"), $(".devcopy").delay(400).fadeIn(400), $(".uicopy, .uxcopy").hide(), d = 1, i = 0, x = 0) : reset()
}), $(".uxbutton").click(function() {
    0 == x ? ($(".accordion>ul>li").css("background-color", "#E91E63"), $(".uxbutton").css("color", "rgba(255, 255, 255, 1)"), $(".uibutton, .devbutton").css("color", "rgba(0, 0, 0, 0.3)"), $(".uipane").css("width", "15%"), $(".devpane").css("width", "15%"), $(".uxpane").css({
        width: "70%",
        "background-color": "rgba(255, 255, 255, 0.3)"
    }), $(".uxcopy").delay(400).fadeIn(400), $(".uicopy, .devcopy").hide(), x = 1, i = 0, d = 0) : reset()
});


	if (window.devicePixelRatio && devicePixelRatio >= 2) {
		var testElem = document.createElement('div');
		testElem.style.border = '.5px solid transparent';
		document.body.appendChild(testElem);
			if (testElem.offsetHeight == 1)
				{
				$(".archiveButton").addClass("archiveButtonRetina");
				$(".infopanelContent>p").addClass("pRetina");
				}
				document.body.removeChild(testElem);				
	}