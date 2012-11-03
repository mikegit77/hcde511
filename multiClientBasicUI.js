//
// This file contains javascript source for manipulating basic UI elements.
//
// See file "multiClientData.js" for source code to setup visualizations 
// and populate data.
//



// turn on/off visualization series when someone clicks on a checkbox

// need to keep track of previously selected radio button ourselves since event doesn't fire for unchecked.
// This variable should match the default selected radio button (if smart, we could set inside document.Ready())
var lastSelectedRadioId = "MeasDep";

function visControlChanged1(e) {
    // hide? last selected series via the 'lastSelectedRadioId' variable
    // window.chart.series[x].hide();
    //alert("last selected id = " + lastSelectedRadioId);
    
    // update lastSelectedRadioId value
    lastSelectedRadioId = e.target.id;
    
    switch(e.target.id) {
    case "MeasDep":
        //alert("checkbox: " + e.target.id + " is now " + (e.target.checked ? "checked" : "UNchecked"));                    
        window.currentMeasure = window.dassDepression;
        window.createChart();
        break;
        
    case "MeasAnx":
        //alert("checkbox: " + e.target.id + " is now " + (e.target.checked ? "checked" : "UNchecked"));
        window.currentMeasure = window.dassAnxiety;
        window.createChart();
        break;
        
    case "MeasStress":
        //alert("checkbox: " + e.target.id + " is now " + (e.target.checked ? "checked" : "UNchecked"));
        window.currentMeasure = window.dassStress;
        window.createChart();
        break;
        
    case "MeasAlli":
        //alert("checkbox: " + e.target.id + " is now " + (e.target.checked ? "checked" : "UNchecked"));
           window.currentMeasure = window.alliance;
        window.createChart();
       break;

    case "MeasRead":
        //alert("checkbox: " + e.target.id + " is now " + (e.target.checked ? "checked" : "UNchecked"));
        window.currentMeasure = window.readiness;
        window.createChart();
     break;
        
   case "MeasSS":
        //alert("checkbox: " + e.target.id + " is now " + (e.target.checked ? "checked" : "UNchecked"));
        window.currentMeasure = window.socialSupport;
        window.createChart();
        break;

    default:
        window.alert("unknown control: " + e.target.id);    
    }
}

function filterChanged(e) {
    switch(e.target.id) {
    case "secMood":
        window.isMoodChecked = e.target.checked;
        break;
        
    case "anx":
        window.isAnxietyChecked = e.target.checked;
        break;
        
    case "subUse":
        window.isSubstanceChecked = e.target.checked;
        break;

    case "schiz":
        window.isSchizoChecked = e.target.checked;
        break;

    case "axis2":
        window.isAxis2Checked = e.target.checked;
        break;

    case "ACT":
        window.isActChecked = e.target.checked;
        break;

    case "DBT":
        window.isDBTChecked = e.target.checked;
        break;
        
    case "CBT":
        window.isCBTChecked = e.target.checked;
        break;

    case "Non-CBT":
        window.isNonCBTChecked = e.target.checked;
        break;
        
    default:
        window.alert("unknown checkbox: " + e.target.id);    
    }
    
    window.createChart();
}


// add eventlistners to elements in document when page loads
function addListeners() {    
    // get measures radio buttons by name and add listeners
    var visControlCheckboxes = document.getElementsByName("radio");
    for (var i = 0; i < visControlCheckboxes.length; i++) {
        visControlCheckboxes[i].addEventListener('click', visControlChanged1, false);
    }
    
    // get diagnosis checkboxen by name and add listeners
    var filterCheckboxes = document.getElementsByName("filter");
    for (var i = 0; i < filterCheckboxes.length; i++) {
        filterCheckboxes[i].addEventListener('click', filterChanged, false);
    }
}

//expand collapse demographics                                                   
function toggle() {
    var ele = document.getElementById("toggleText");
    var text = document.getElementById("displayText");
    var icon = document.getElementById("hideText");
    if(ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "+";
        icon.innerHTML = "";
    }
    else {
        ele.style.display = "block";
        text.innerHTML = "&#8211;";
        icon.innerHTML = "^";
    }
}

// code idea from: http://www.netmechanic.com/news/vol4/javascript_no20.htm
function mouseOverRow(row) {
    row.style.backgroundColor = "yellow";
    // clientId of current cell = row.cells[1].innerText
    
    // this works for diagnostic purposes:
    // document.getElementById("clientList").innerText = "client ID of current row = " + row.cells[1].innerText;
}

function mouseOutRow(row) {
    row.style.backgroundColor = "rgb(221, 217, 197)";
}

// when page loads, add eventlisteners
window.addEventListener('load', addListeners, false);

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

// menu 
$(document).ready(function(){
    $(".trigger").click(function(){
        $(".panel").toggle("fast");
        $(this).toggleClass("active");
        return false;
    });
});

// compare view poput 
$(document).ready(function(){
    $(".triggerright").click(function(){
        $(".panelright").toggle("fast");
        $(this).toggleClass("activeright");
        return false;
    });
});