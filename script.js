var l;
var mw;

$(document).ready( ()=> {
	
	l = "pl";
	$("#pl").addClass("language_select");
	$("p.angielski").hide();
	$("#misja_angielski").hide();
	$("#h_mission, #h_vision").hide();
	
	mw = "misja";
	$("h1#h_wizja").hide();
	$("p.wizja").hide();
	$("#h_wizja").hide();
	
	$("#pl").click( ()=> {
		l = "pl";
		$("#pl").addClass("language_select");
		$("#en").removeClass("language_select");
		$("p.angielski").hide();
		$("p.polski").show();
		if (mw == "misja") {
			$("#misja_angielski").hide();
			$("#misja_polski").show();
			$("#h_mission").hide();
			$("#h_misja").show();
		} else if (mw == "wizja") {
			$("#wizja_angielski").hide();
			$("#wizja_polski").show();
			$("#h_vision").hide();
			$("#h_wizja").show();
		}
	});
	
	$("#en").click( ()=> {
		l = "en";
		$("#en").addClass("language_select");
		$("#pl").removeClass("language_select");
		$("p.polski").hide();
		$("p.angielski").show();
		if (mw == "misja") {
			$("#misja_polski").hide();
			$("#misja_angielski").show();
			$("#h_misja").hide();
			$("#h_mission").show();
		} else if (mw == "wizja") {
			$("#wizja_polski").hide();
			$("#wizja_angielski").show();
			$("#h_wizja").hide();
			$("#h_vision").show();
		}
	});
	
	$(".right").click( ()=> {
		mw = "wizja";
		if (l == "pl") {
			$("#h_misja").hide();
			$("#misja_polski").hide();
			$("#h_wizja").show();
			$("#wizja_polski").show();
		} else if (l == "en") {
			$("#h_mission").hide();
			$("#misja_angielski").hide();
			$("#h_vision").show();
			$("#wizja_angielski").show();
		}
	});
	
	$(".left").click( ()=> {
		mw = "misja";
		if (l == "pl") {
			$("#h_wizja").hide();
			$("#wizja_polski").hide();
			$("#h_misja").show();
			$("#misja_polski").show();
		} else if (l == "en") {
			$("#h_vision").hide();
			$("#wizja_angielski").hide();
			$("#h_mission").show();
			$("#misja_angielski").show();
		}
	});
	
	$("#drop_a").hover( ()=> {
		$("#drop_a").animate({top: "4%"});
		$("#drop_a").animate({top: "0"});
	});
	
	$("#drop_b").hover( ()=> {
		$("#drop_b").animate({bottom: "1%"});
		$("#drop_b").animate({bottom: "5%"});
	});
	
	$("#drop_c").hover( ()=> {
		$("#drop_c").animate({bottom: "0%"});
		$("#drop_c").animate({bottom: "8%"});
	});
	
	$(".right").trigger("click");
	$(".left").trigger("click");
	
});
