// set initial animation widths for the progress meters (under homework)
$(function() {
	$(".meter > span").each(function() {
		$(this)
			.data("origWidth", $(this).width())
			.width(0)
			.animate({
				width: $(this).data("origWidth")
			}, 1200);
	});
});

// activate animations for tabs at top of page (today, show multiClientView)
$(document).ready(function(){
	$(".trigger").click(function(){
		$(".panel").toggle("fast");
		$(this).toggleClass("active");
		return false;
	});
});

// turn on/off visualization series when someone clicks on a checkbox
function visControlChanged(e) {
    switch(e.target.id) {
    case "chkDepression":
		e.target.checked ? window.chart.series[0].show() : window.chart.series[0].hide();
        break;
        
    case "chkAnxiety":
		e.target.checked ? window.chart.series[1].show() : window.chart.series[1].hide();
        break;
        
    case "chkStress1":
		e.target.checked ? window.chart.series[2].show() : window.chart.series[2].hide();
        break;

    case "chkSuicide":
   		e.target.checked ? window.chart.series[3].show() : window.chart.series[3].hide();
        break;

    case "chkAAQ2":
        e.target.checked ? window.chart.series[4].show() : window.chart.series[4].hide();
        break;

	case "chkTrendLine":
        alert("checkbox: " + e.target.id + " is now " + (e.target.checked ? "checked" : "UNchecked"));
        break;

    default:
        window.alert("unknown checkbox: " + e.target.id);    
    }
}

// add eventlistners to elements in document when page loads
function addListeners() {    
    // get all checkboxes by name and add listener
    var visControlCheckboxes = document.getElementsByName("visControl");
    
    for (var i = 0; i < visControlCheckboxes.length; i++) {
        visControlCheckboxes[i].addEventListener('click', visControlChanged, false);
    }
}

//expand collapse side nav
function toggle() {
    var ele = document.getElementById("toggleText");
    var text = document.getElementById("displayText");
    if(ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "+";
    }
    else {
        ele.style.display = "block";
        text.innerHTML = "&#8211;";
    }
}

//expand collapse DASS Score grid depression
function toggleGrid1() {
    var ele = document.getElementById("toggleGrid1");
    var text = document.getElementById("displayGrid1");
    if(ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "+";
    }
    else {
        ele.style.display = "block";
        text.innerHTML = "&#8211;";
    }
}

//expand collapse DASS Score grid anxiety
function toggleGrid2() {
    var ele = document.getElementById("toggleGrid2");
    var text = document.getElementById("displayGrid2");
    if(ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "+";
    }
    else {
        ele.style.display = "block";
        text.innerHTML = "&#8211;";
    }
}

//expand collapse DASS Score grid stress
function toggleGrid3() {
    var ele = document.getElementById("toggleGrid3");
    var text = document.getElementById("displayGrid3");
    if(ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "+";
    }
    else {
        ele.style.display = "block";
        text.innerHTML = "&#8211;";
    }
}

//expand collapse DASS Score grid suicide
function toggleGrid4() {
    var ele = document.getElementById("toggleGrid4");
    var text = document.getElementById("displayGrid4");
    if(ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "+";
    }
    else {
        ele.style.display = "block";
        text.innerHTML = "&#8211;";
    }
}


// when page loads, add eventListeners
window.addEventListener('load', addListeners, false);
