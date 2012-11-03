//
// This file contains javascript source to setup visualizations and populate data.
//
// See file "singleClientBasicUI.js" for source code for general UI elements
//

$(function() {

    // ----------------------------------
    // IMPORT THE DATA
    // ----------------------------------

    //Create an empty array to hold the data
    var seriesOptions = [];
    
    //Create an empty series for the navigator
    var emptySeries = [[Date.UTC(2012, 01, 27), 65],
        [Date.UTC(2012, 02, 05), 65],
        [Date.UTC(2012, 02, 12), 65],
        [Date.UTC(2012, 02, 17), 65],
        [Date.UTC(2012, 02, 24), 65],
        [Date.UTC(2012, 03, 2), 65],
        [Date.UTC(2012, 03, 9), 65],
        [Date.UTC(2012, 03, 16), 65],
        [Date.UTC(2012, 03, 23), 65],
        [Date.UTC(2012, 03, 30), 65],
        [Date.UTC(2012, 04, 6), 65],
        [Date.UTC(2012, 04, 20), 65],
        [Date.UTC(2012, 04, 27), 65],
        [Date.UTC(2012, 05, 4), 65],
        [Date.UTC(2012, 05, 11), 65],
        [Date.UTC(2012, 05, 18), 65],
        [Date.UTC(2012, 05, 23), 65],
        [Date.UTC(2012, 05, 30), 65],
        [Date.UTC(2012, 06, 4), 65]];
    
    //Import the depression data
    var depressionData = [[Date.UTC(2012, 01, 27), 42],
        [Date.UTC(2012, 02, 05), 42],
        [Date.UTC(2012, 02, 12), 42],
        [Date.UTC(2012, 02, 17), 42],
        [Date.UTC(2012, 02, 24), 38],
        [Date.UTC(2012, 03, 2), 32],
        [Date.UTC(2012, 03, 9), 30],
        [Date.UTC(2012, 03, 16), 28],
        [Date.UTC(2012, 03, 23), 30],
        [Date.UTC(2012, 03, 30), 27],
        [Date.UTC(2012, 04, 6), 25],
        [Date.UTC(2012, 04, 20), 32],
        [Date.UTC(2012, 04, 27), 28],
        [Date.UTC(2012, 05, 4), 26],
        [Date.UTC(2012, 05, 11), 24],
        [Date.UTC(2012, 05, 18), 28],
        [Date.UTC(2012, 05, 23), 24],
        [Date.UTC(2012, 05, 30), 19],
        [Date.UTC(2012, 06, 4), 22]];


/*        
    var testArray = [10,1,"2011, 11, 22",1,0,0,0,1,28,34,18];
    
    alert ("The length of the array is " + testArray.length);
    var i;

    for (i = 0; i < testArray.length; i++) {
        alert("element " + i + " is " + testArray[i]);
    }
    
*/

    
    
    //Import the anxiety data
    var anxietyData = [[Date.UTC(2012, 01, 27), 16],
        [Date.UTC(2012, 02, 05), 14],
        [Date.UTC(2012, 02, 12), 14],
        [Date.UTC(2012, 02, 17), 14],
        [Date.UTC(2012, 02, 24), 12],
        [Date.UTC(2012, 03, 2), 10],
        [Date.UTC(2012, 03, 9), 9],
        [Date.UTC(2012, 03, 16), 9],
        [Date.UTC(2012, 03, 23), 10],
        [Date.UTC(2012, 03, 30), 8],
        [Date.UTC(2012, 04, 6), 6],
        [Date.UTC(2012, 04, 20), 5],
        [Date.UTC(2012, 04, 27), 10],
        [Date.UTC(2012, 05, 4), 8],
        [Date.UTC(2012, 05, 11), 5],
        [Date.UTC(2012, 05, 18), 5],
        [Date.UTC(2012, 05, 23), 3],
        [Date.UTC(2012, 05, 30), 3],
        [Date.UTC(2012, 06, 4), 3]];

    //Import the stress data
    var stressData = [[Date.UTC(2012, 01, 27), 38],
        [Date.UTC(2012, 02, 05), 42],
        [Date.UTC(2012, 02, 12), 38],
        [Date.UTC(2012, 02, 17), 42],
        [Date.UTC(2012, 02, 24), 42],
        [Date.UTC(2012, 03, 2), 41],
        [Date.UTC(2012, 03, 9), 40],
        [Date.UTC(2012, 03, 16), 40],
        [Date.UTC(2012, 03, 23), 38],
        [Date.UTC(2012, 03, 30), 36],
        [Date.UTC(2012, 04, 6), 28],
        [Date.UTC(2012, 04, 20), 28],
        [Date.UTC(2012, 04, 27), 40],
        [Date.UTC(2012, 05, 4), 36],
        [Date.UTC(2012, 05, 11), 33],
        [Date.UTC(2012, 05, 18), 28],
        [Date.UTC(2012, 05, 23), 26],
        [Date.UTC(2012, 05, 30), 24],
        [Date.UTC(2012, 06, 4), 22]];

    //Import any suicide markers
    var suicideData = [[Date.UTC(2012, 2, 5), 25]];
        
    //Import the AAQ-2 data
    var aaq2data = [[Date.UTC(2012, 01, 27), 50],
        [Date.UTC(2012, 02, 05), 45],
        [Date.UTC(2012, 02, 12), 45],
        [Date.UTC(2012, 02, 17), 45],
        [Date.UTC(2012, 02, 24), 43],
        [Date.UTC(2012, 03, 2), 42],
        [Date.UTC(2012, 03, 9), 30],
        [Date.UTC(2012, 03, 16), 28],
        [Date.UTC(2012, 03, 23), 30],
        [Date.UTC(2012, 03, 30), 27],
        [Date.UTC(2012, 04, 6), 25],
        [Date.UTC(2012, 04, 20), 32],
        [Date.UTC(2012, 04, 27), 28],
        [Date.UTC(2012, 05, 4), 26],
        [Date.UTC(2012, 05, 11), 24],
        [Date.UTC(2012, 05, 18), 28],
        [Date.UTC(2012, 05, 23), 24],
        [Date.UTC(2012, 05, 30), 19],
        [Date.UTC(2012, 06, 4), 22]];

    //Import lack of progress data
    var lackOfProgressData = [{
        x: Date.UTC(2012, 02, 17),
        title: 'Lack of progress'
    }, {
        x: Date.UTC(2012, 02, 24),
        title: 'Lack of progress'
    }];
        
    //Import the alliance data
    var allianceData = [[Date.UTC(2012, 2, 24), 78]];
    
    //Import the readiness data
    var readinessData = [[Date.UTC(2012, 2, 24), 12]];

    //Import in the annotations data
    var annotationsData = [{
        x: Date.UTC(2012, 2, 17),
        title: 'N',
        text: 'discloses has relapsed to drinking; staying up late/oversleeping (videogames)'
    }, {
        x: Date.UTC(2012, 2, 5),
        title: 'N',
        text: 'lost job; feels trapped, totally alone, increased thoughts RE death'
    }];
    
    // ----------------------------------
    // SET UP DATA FOR CHART
    // ----------------------------------
            
    //Draw depression line
    seriesOptions[0] = {
        name : 'Depression',
        id : 'depression',
        data : depressionData,
        color : 'rgb(31, 119, 180)',
        marker : {
            enabled : true,
            shape: 'circle',
            radius : 3
        },
    };
    
    //Draw anxiety line
    seriesOptions[1] = {
        name : 'Anxiety',
        data : anxietyData,
        color : 'rgb(188, 189, 34)',
        marker : {
            enabled : true,
            shape: 'circle',
            radius : 3
        }
    };
    
    //Draw stress line
    seriesOptions[2] = {
        name : 'Stress',
        data : stressData,
        color : 'rgb(148, 103, 189)',
        marker : {
            enabled : true,
            shape: 'circle',
            radius : 3
        }
    };
    
    //Suicide marker
    seriesOptions[3] = {
        name : 'Suicide',
        type: 'scatter',
        data : suicideData,
        color: '#FF0000',
        enableMouseTracking: false,
        marker : {
            enabled : true,
            symbol: 'circle',
            radius : 8
        }
    };
    
    //AAQ-2 data
    seriesOptions[4] = {
        yAxis: 1,
        name : 'AAQ-2',
        id : 'aaq2',
        data : aaq2data,
        color : 'rgb(23, 190, 207)',
        marker : {
            enabled : true,
            radius : 3
        }
    };
        
    //Draw lack of progress flags
    seriesOptions[5] = {
        type : 'flags',
        name : 'Lack of Progress',
        data : lackOfProgressData,
        color: '#3B3B3B',
        onSeries: 'depression',
        shape: 'squarepin'
    };
    
    //Draw alliance periodic measure
    seriesOptions[6] = {
        name : 'Alliance',
        type: 'scatter',
        data : allianceData,
        color: '#000000',
        enableMouseTracking: false,
        marker : {
            enabled : true,
            symbol: 'triangle',
            radius : 6
        }
    };
    
    // series for special markers (not connected by lines)
    
    //Draw readiness periodic measure
    seriesOptions[7] = {
        name : 'Readiness',
        type: 'scatter',
        data : readinessData,
        color: '#000000',
        enableMouseTracking: false,
        marker : {
            enabled : true,
            symbol: 'diamond',
            radius : 6
        }
    };
    
    //Draw notation flags
    seriesOptions[8] = {
        type: 'flags',
        name: 'Flags on axis',
        data: annotationsData,
        shape: 'circlepin'
    };
    
    //Draw fake series
    seriesOptions[9] = {
        name : 'Empty Series',
        id: 'emptySeries',
        data : emptySeries,
        visible : false
    };

    // ----------------------------------
    // CREATE THE CHART
    // ----------------------------------
    
    window.chart = new Highcharts.StockChart({

        //Specify where to render the new chart
        chart : {
            renderTo : 'container',
            ignoreHiddenSeries: false,
            zoomType: 'x'
        },
        
        //Remove the chart in the back of the navigator
        navigator : {
            baseSeries: 'emptySeries'            
        },
    
        //Disable the range selector
        rangeSelector : {
            enabled : false
        },
        
        //Set up multiple y-axes
        yAxis: [{
            title: {
                text: 'DASS'
            },
            height: 200,
            lineWidth: 2
        }, {
            title: {
                text: 'AAQ-2'
            },
            reversed: true,
            top: 300,
            height: 100,
            offset: 0,
            lineWidth: 2
        }],


        //Specify dataset
        series: seriesOptions
    
    });
});
