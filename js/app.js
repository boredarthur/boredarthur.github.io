function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

// Parallax

$('#page').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 500);
    var amountMovedY = (e.pageY * -1 / 500);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});


// Garlands
setInterval(glowOff, 3500);
function glowOff(){
    $("#garland_on").css("opacity","0")
    setTimeout(glowOn, 2000);
}

function glowOn(){
    $("#garland_on").css("opacity","1")
}

$(window).resize(function(){
    // Mobile view
    if($(window).width() <= 955 || $(window).height() > $(window).width()){
        if($(window).width() > 410 && $(window).width() <= 815 && !isMobileDevice()){
            $("#content").css("height","150vh");
        }

        if($(window).width() > 815 && !isMobileDevice()){
            $("#content").css("height","170vh");
        }

        if($(window).height() <= 400 && !isMobileDevice()){
            $("#content").css("height","250vh");
        }

        $("#candies01").attr("src", "./images/mobile_candies.png")

        $("#snow").attr("src", "./images/snow2.png");

        $("#footer-menu").removeClass("justify-content-start");
        $("#footer-menu").addClass("justify-content-center");

        $("#footer-logo").removeClass("col-md-1");
        $("#footer-logo").addClass("col-md");

        $("#copyright").removeClass("col-md-1");
        $("#copyright").addClass("col-md");

        $("#garland_on").attr("src", "./images/garland_on_mob.svg")
        $("#garland_off").attr("src", "./images/garland_off_mob.svg")

    } else{
        $("#snow").attr("src", "./images/snow.png");
        $("#content").css("height","92vh");

        $("#footer-menu").removeClass("justify-content-center");
        $("#footer-menu").addClass("justify-content-start");


        $("#footer-logo").addClass("col-md-1");
        $("#footer-logo").removeClass("col-md");

        $("#copyright").addClass("col-md-1");
        $("#copyright").remove("col-md")

        $("#garland_on").attr("src", "./images/garland_on.svg")
        $("#garland_off").attr("src", "./images/garland_off.svg")
    }
});

$(document).ready(function(){
    // Mobile view
    if($(window).width() <= 955 || $(window).height() > $(window).width()){
        if($(window).width() > 410 && $(window).width() <= 815 && !isMobileDevice()){
            $("#content").css("height","150vh");
        }

        if($(window).width() > 815 && !isMobileDevice()){
            $("#content").css("height","170vh");
        }

        if($(window).height() <= 400 && !isMobileDevice()){
            $("#content").css("height","250vh");
        }

        $("#candies01").attr("src", "./images/mobile_candies.png")

        $("#snow").attr("src", "./images/snow2.png");

        $("#footer-menu").removeClass("justify-content-start");
        $("#footer-menu").addClass("justify-content-center");

        $("#footer-logo").removeClass("col-md-1");
        $("#footer-logo").addClass("col-md");

        $("#copyright").removeClass("col-md-1");
        $("#copyright").addClass("col-md");

        $("#garland_on").attr("src", "./images/garland_on_mob.svg")
        $("#garland_off").attr("src", "./images/garland_off_mob.svg")

    } else{
        $("#snow").attr("src", "./images/snow.png");
        $("#content").css("height","92vh");

        $("#footer-menu").removeClass("justify-content-center");
        $("#footer-menu").addClass("justify-content-start");


        $("#footer-logo").addClass("col-md-1");
        $("#footer-logo").removeClass("col-md");

        $("#copyright").addClass("col-md-1");
        $("#copyright").remove("col-md")

        $("#garland_on").attr("src", "./images/garland_on.svg")
        $("#garland_off").attr("src", "./images/garland_off.svg")
    }

});

// Modal
$("#open-modal").click(function(){
    $("#my_modal").css("display", "block");
    $("#coverage").css("display", "block");

    setTimeout(() => {
        $("#my_modal").css("opacity", "1");
        $("#coverage").css("opacity", "0.9");
        $('html, body, #page').css({
            overflow: 'hidden',
            height: '100%'
        });
    }, 500)
});

$("#closeModal").click(function(){
    $("#my_modal").css("opacity", "0");
    $("#coverage").css("opacity", "0");

    setTimeout(() => {
        $("#my_modal").css("display", "none");
        $("#coverage").css("display", "none");
        $('html, body, #page').css({"overflow-x": "hidden", "overflow-y": "scroll", "height":"auto"});
    }, 500)
});

$("#modal_button").mouseenter(function(){
    $("#modal_button_text").css("opacity", ".8");
});

$("#modal_button").mouseleave(function(){
    $("#modal_button_text").css("opacity", "1");
});