//
// This file contains javascript source to setup visualizations and populate data.
//
// See file "multiClientBasicUI.js" for source code for general UI elements
//

$(function() {

    //Set up global variables
    window.seriesOptions = [];        //stores each data series
    window.finalResult = [];        //stores the overall result    
    
    //Variables that correspond to ordering of columns
    window.therapistID = 0;
    window.clientID = 1;
    window.clinic = 2;
    window.sessionYear = 3;
    window.sessionMonth = 4;
    window.sessionDay = 5;
    window.mood = 6;
    window.anxiety = 7;
    window.substance = 8;
    window.schizo = 9;
    window.axis2 = 10;
    window.ACT = 11;
    window.DBT = 12;
    window.CBT = 13;
    window.NonCBT = 14;
    window.dassDepression = 15;
    window.dassAnxiety = 16;
    window.dassStress = 17;
    window.alliance = 18;
    window.readiness = 19;
    window.socialSupport = 20;
    
    //Flag to set currently selected measure
    window.currentMeasure = dassDepression;    
    
    //Diagnoses
    window.isMoodChecked = false;
    window.isAnxietyChecked = false;
    window.isSubstanceChecked = false;
    window.isSchizoChecked = false;
    window.isAxis2Checked = false;    
    
    //Treatments
    window.isACTChecked = false;
    window.isDBTChecked = false;
    window.isCBTChecked = false;
    window.isNonCBTChecked = false;
        
    //Data for therapists
    var therapist = [];    
    
    therapist[0] = [[2,6,1,2007,10,26,2,0,0,0,1,0,0,0,0,24,2,2,0,0,5],
    //    [2,7,1,2007,10,26,1,0,0,0,0,0,0,0,0,34,32,14,0,0,4],
    //    [2,8,1,2007,10,26,1,0,0,0,0,0,0,0,0,40,14,4,0,0,1],
    //    [2,9,1,2007,10,26,1,0,0,0,1,0,0,0,0,34,8,6,0,0,3],
    //    [2,10,1,2007,10,26,1,0,0,0,1,0,0,0,0,28,36,18,0,0,0],
        [2,6,1,2007,11,05,2,0,0,0,1,0,0,0,0,22,2,2,0,0,0],
        [2,7,1,2007,11,05,1,0,0,0,0,0,0,0,0,28,24,8,0,0,0],
        [2,8,1,2007,11,05,1,0,0,0,0,0,0,0,0,36,12,2,0,0,0],
        [2,9,1,2007,11,05,1,0,0,0,1,0,0,0,0,30,6,6,0,0,0],
        [2,10,1,2007,11,05,1,0,0,0,1,0,0,0,0,30,36,20,0,0,0],
        [2,6,1,2007,11,13,2,0,0,0,1,0,0,0,0,16,2,2,0,0,0],
        [2,7,1,2007,11,13,1,0,0,0,0,0,0,0,0,26,26,10,0,0,0],
        [2,8,1,2007,11,13,1,0,0,0,0,0,0,0,0,26,0,2,111,0,0],
        [2,9,1,2007,11,13,1,0,0,0,1,0,0,0,0,32,6,6,72,0,0],
        [2,10,1,2007,11,13,1,0,0,0,1,0,0,0,0,36,32,18,0,0,0],
        [2,6,1,2007,11,21,2,0,0,0,1,0,0,0,0,16,4,2,0,0,0],
        [2,7,1,2007,11,21,1,0,0,0,0,0,0,0,0,22,14,8,0,0,0],
        [2,8,1,2007,11,21,1,0,0,0,0,0,0,0,0,18,2,2,0,0,0],
        [2,9,1,2007,11,21,1,0,0,0,1,0,0,0,0,32,6,6,0,0,0],
        [2,10,1,2007,11,21,1,0,0,0,1,0,0,0,0,28,34,18,0,0,0],
        [2,6,1,2007,11,27,2,0,0,0,1,0,0,0,0,12,0,2,0,0,0],
        [2,7,1,2007,11,27,1,0,0,0,0,0,0,0,0,24,18,8,0,0,0],
        [2,8,1,2007,11,27,1,0,0,0,0,0,0,0,0,18,0,2,0,0,0],
        [2,9,1,2007,11,27,1,0,0,0,1,0,0,0,0,32,6,6,0,0,0],
        [2,7,1,2007,12,06,1,0,0,0,0,0,0,0,0,20,14,8,0,0,0],
        [2,9,1,2007,12,06,1,0,0,0,1,0,0,0,0,32,12,20,0,0,0],
        [2,9,1,2007,12,13,1,0,0,0,1,0,0,0,0,34,8,6,0,0,0],
        [2,9,1,2007,12,22,1,0,0,0,1,0,0,0,0,32,12,6,0,0,0]];

    therapist[1] = [[3,11,1,2007,10,26,2,0,0,0,0,0,0,0,0,26,18,6,0,0,0],
        [3,12,1,2007,10,26,1,0,0,0,0,0,0,0,0,34,12,14,0,0,0],
        [3,13,1,2007,10,26,1,0,0,0,0,0,0,0,0,40,36,34,0,0,0],
        [3,14,1,2007,10,26,1,0,0,0,1,0,0,0,0,32,14,4,0,0,0],
        [3,11,1,2007,11,05,2,0,0,0,0,0,0,0,0,20,14,2,0,0,0],
        [3,13,1,2007,11,05,1,0,0,0,0,0,0,0,0,36,36,30,0,0,0],
        [3,14,1,2007,11,05,1,0,0,0,1,0,0,0,0,30,14,2,0,0,0],
        [3,11,1,2007,11,13,2,0,0,0,0,0,0,0,0,16,12,2,0,0,0],
        [3,13,1,2007,11,13,1,0,0,0,0,0,0,0,0,30,32,26,0,0,0],
        [3,15,1,2007,11,13,2,0,0,0,1,0,0,0,0,40,36,36,0,0,0],
        [3,11,1,2007,11,21,2,0,0,0,0,0,0,0,0,18,16,2,0,0,0],
        [3,13,1,2007,11,21,1,0,0,0,0,0,0,0,0,32,32,24,0,0,0],
        [3,15,1,2007,11,21,2,0,0,0,1,0,0,0,0,40,38,36,0,0,0],
        [3,11,1,2007,11,27,2,0,0,0,0,0,0,0,0,20,10,2,0,0,0],
        [3,13,1,2007,11,27,1,0,0,0,0,0,0,0,0,22,24,14,0,0,0],
        [3,15,1,2007,11,27,2,0,0,0,1,0,0,0,0,40,38,36,0,0,0],
        [3,11,1,2007,12,06,2,0,0,0,0,0,0,0,0,12,10,2,0,0,0],
        [3,15,1,2007,12,06,2,0,0,0,1,0,0,0,0,40,38,36,0,0,0],
        [3,11,1,2007,12,13,2,0,0,0,0,0,0,0,0,10,8,2,0,0,0],
        [3,15,1,2007,12,13,2,0,0,0,1,0,0,0,0,40,38,36,0,0,0],
        [3,15,1,2007,12,22,2,0,0,0,1,0,0,0,0,40,34,36,0,0,0]];

    therapist[2] = [[4,16,1,2007,10,26,1,0,0,0,0,0,0,0,0,26,28,22,0,0,0],
        [4,16,1,2007,11,05,1,0,0,0,0,0,0,0,0,24,28,18,0,0,0],
        [4,16,1,2007,11,13,1,0,0,0,0,0,0,0,0,26,20,18,0,0,0],
        [4,16,1,2007,11,21,1,0,0,0,0,0,0,0,0,18,20,14,0,0,0],
        [4,20,1,2007,11,21,1,0,0,0,0,0,0,0,0,36,36,36,0,0,0],
        [4,16,1,2007,11,27,1,0,0,0,0,0,0,0,0,16,20,8,0,0,0],
        [4,16,1,2007,12,06,1,0,0,0,0,0,0,0,0,16,22,8,0,0,0],
        [4,20,1,2007,12,12,1,0,0,0,0,0,0,0,0,34,38,36,0,0,0],
        [4,16,1,2007,12,13,1,0,0,0,0,0,0,0,0,16,14,8,0,0,0],
        [4,20,1,2007,12,26,1,0,0,0,0,0,0,0,0,36,38,36,78,0,0],
        [4,20,1,2007,12,30,1,0,0,0,0,0,0,0,0,34,34,36,0,0,0],
        [4,20,1,2008,01,02,1,0,0,0,0,0,0,0,0,34,38,36,0,0,0],
        [4,17,1,2008,01,26,1,0,0,0,1,0,0,0,0,34,8,6,82,0,0],
        [4,18,1,2008,01,26,1,0,0,0,1,0,0,0,0,26,14,4,0,0,0],
        [4,17,1,2008,02,04,1,0,0,0,1,0,0,0,0,30,6,6,0,0,0],
        [4,18,1,2008,02,04,1,0,0,0,1,0,0,0,0,30,14,2,0,0,0],
        [4,17,1,2008,02,11,1,0,0,0,1,0,0,0,0,34,6,6,0,0,0],
        [4,18,1,2008,02,11,1,0,0,0,1,0,0,0,0,32,14,4,0,0,0],
        [4,19,1,2008,02,12,1,0,0,0,0,0,0,0,0,40,8,6,0,0,0],
        [4,18,1,2008,02,16,1,0,0,0,1,0,0,0,0,32,16,6,0,0,0],
        [4,19,1,2008,02,28,1,0,0,0,0,0,0,0,0,40,6,6,0,0,0],
        [4,19,1,2008,03,13,1,0,0,0,0,0,0,0,0,40,6,6,0,0,0],
        [4,19,1,2008,03,18,1,0,0,0,0,0,0,0,0,40,12,6,0,0,0]];
        
    //Debug
    //console.log('Number of therapists = ' + therapist.length);
    
    window.createChart = function () {
        //Loop over each therapist entry
        for (i = 0; i < therapist.length; i++) {    
            var currentTherapist = therapist[i];
            var intermediateResult = [];
            var recordLine = true;
            
            //Debug
            //console.log ("Therapist " + i);
            
            //Loop over each session for each therapist
            for (j = 0; j < currentTherapist.length; j++) {
                var year = (currentTherapist[j][window.sessionYear]);
                var month = (currentTherapist[j][window.sessionMonth]);
                var day = (currentTherapist[j][window.sessionDay]);
                var value = (currentTherapist[j][window.currentMeasure]);
                
                // Set recordLine = false if checkboxes say so
                if     ((window.isMoodChecked === true)&& (currentTherapist[j][window.mood] === 0)) { recordLine = false; };
                if     ((window.isAnxietyChecked === true)&& (currentTherapist[j][window.anxiety] === 0)) { recordLine = false; };
                if     ((window.isSubstanceChecked === true)&& (currentTherapist[j][window.substance] === 0)) { recordLine = false; };
                if     ((window.isSchizoChecked === true)&& (currentTherapist[j][window.schizo] === 0)) { recordLine = false; };
                if     ((window.isAxis2Checked === true)&& (currentTherapist[j][window.axis2] === 0)) { recordLine = false; };    
                    
                // Record the current line on to the graph
                if (recordLine === true) {
                    intermediateResult[j] = ([Date.UTC(year, month, day),value]);
                };
                
                //Debug
                //console.log("Result " + j + " " + intermediateResult[j]);
            };
            window.finalResult[i] = intermediateResult;
            //console.log('Final result for therapist ' + i + ' ' + window.finalResult[i]);
        };
        
        //Post-loop debug
        //console.log ('Number of therapist entries = ' + therapist.length);
        //for (i = 0; i < therapist.length; i++) {    
        //    console.log ('The result for therapist ' + i + " is " + window.finalResult[i]);
        //};
        
        //Set up data for all therapists
        for (i = 0; i < therapist.length; i++) {
            window.seriesOptions[i] = {
                name : ('Therapist ' + i),
                data : window.finalResult[i]
            };
        };
    
        // Create the chart
        window.chart = new Highcharts.StockChart({
            chart : { renderTo : 'container' },
            rangeSelector : { enabled : false },
            title : { text : 'All clients' },
            series: window.seriesOptions        
        });
        
    };
    
    window.createChart();
    
});
