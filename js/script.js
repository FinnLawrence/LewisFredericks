$(document).ready(function() {  
    // Color nav
    colorNavigation();

    // DETAILS MODAL
    $('#details-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var frameTitle = button.data('title');
        var variantTitle = button.data('variant');
        var lensDetails = button.data('lensdetails');
        var imagePath = button.data('imgpath');
        var frameDesc = button.data('description');
        var varDesc = button.data('vardesc');
        var width = button.data('width');
        var height = button.data('height');
        var netWeight = button.data('netweight');
        var grossWeight = button.data('grossweight');
        var modal = $(this);
        $('#modal-frame-title').text(frameTitle);
        $('#modal-variant-title').text(variantTitle);
        $('#modal-lens-details').text(lensDetails);
        $('#modal-variant-image').attr("src", imagePath);
        $('#modal-frame-description').text(frameDesc);
        $('#modal-variant-description').text(varDesc);
        $('#modal-frame-dimensions').text("Width: " + width + " | Height: " + height + " | At widest / highest point");
        $('#modal-frame-weight').text("Weight: " + netWeight + " (net) | " + grossWeight + " (gross)");
    });
});

// Scrolling
$(window).scroll(function() {
    colorNavigation();

});



function colorNavigation() {
    var windowTop = $(window).scrollTop() + $('#main-navigation').height();
    if (isOnOffWhite(windowTop)) {
        $('#main-navigation').css('background-color','#fefefe');
    } else {
        $('#main-navigation').css('background-color','#e8e8e8');
    }      
}

function isOnOffWhite(x) {
    var isOnRow = false;
    $('.off-white').each(function() {
        var top = $(this).offset().top;
        var bottom = $(this).height() + top;
        if (x > top && x < bottom) {
            isOnRow = true;
            return false;
        }
    });
    return isOnRow;
}

$(function () { //when dom has finished loading
    //make top text appear aligned to bottom: http://stackoverflow.com/questions/13841387/how-do-i-bottom-align-grid-elements-in-bootstrap-fluid-layout
    function fixHeader() {
        //for each element that is classed as 'pull-down'
        //reset margin-top for all pull down items
        $('.pull-down').each(function () {
            $(this).css('margin-top', 0);
        });

        //set its margin-top to the difference between its own height and the height of its parent
        $('.pull-down').each(function () {
            if ($(window).innerWidth() >= 768) {
                $(this).css('margin-top', $('.buying-options').height() - $(this).height());
            }
        });
    }

    $(window).resize(function () {
        fixHeader();
    });

    $('#details-modal').on('shown.bs.modal', function () {
        fixHeader();
    })

    fixHeader();
});