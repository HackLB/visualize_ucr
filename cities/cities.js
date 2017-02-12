$( document ).ready(function() {
    console.log( "ready2!" );

    $.get( "cities.json", function( data ) {
        console.log(data);
        showCities(data);
    });

    $.get( "_data/CA03404.json", function( data ) {
        console.log(data);
        lineGraph(data);
    });

});


function showCities(data) {
    console.log('starting showCities');
    var list = $("#citySelect");
    $.each( data.cities, function( key, value ) {
        console.log( value);
        if (value.code == 'NA') {
            list.append('<option value="'+value.code+'" selected>' + value.name + '</option>');
        } else {
            list.append('<option value="'+value.code+'">' + value.name + '</option>');
        }
    });
    console.log(data);
}

function changeCity(theOption) {
    console.log(theOption.value);


    $.get( "_data/"+ theOption.value +".json", function( data ) {
        console.log(data);
        lineGraph(data);
    });
}

function lineGraph(data) {
    console.log('starting');
    var ctx = $("#myChart");

    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}