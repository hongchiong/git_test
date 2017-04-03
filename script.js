//Set up
var squaresPerSide = 16;
drawGrid(squaresPerSide);

function drawGrid(squaresPerSide) {

    //Add rows
    for (var i = 0; i < squaresPerSide; i++) {
        $('#sketchpad').append('<div class="row"></div>');
    }

    //Fill rows
    for (var i = 0; i < squaresPerSide; i++) {
        $('.row').append('<div class="square"></div>');
    }

    //Set square sizes
    var squareDimension = $('#sketchpad').width() / squaresPerSide;
    $('.square').css({
        'height': squareDimension,
        'width': squareDimension
    });
}