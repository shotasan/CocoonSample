$(document).ready(function() {
    $("#variants")
        .on('cocoon:before-insert', function() {
            if($("#variants .nested-fields").length === 3) {
                $(".links").hide();
            }
        })
        .on('cocoon:after-remove', function() {
            if($("#variants .nested-fields").length <= 3) {
                $(".links").css('background-color', 'red');
                $(".links").show();
            }
        });
});