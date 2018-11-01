$(document).ready(function(){
    console.log("cououc");
    $("ul.breadcrumb li a").click(function() {
            console.log("coco");
            $(this).removeAttr("::before");
    });
    /*$('#step1').show();
    $('#step2').hide();
    $('#step3').hide();
    $('#step4').hide();
    $('#next').css('display', 'block');
    $('#next2').css('display', 'none');

    if ($("#next").click(function(){
        $('#step2').show();
        $('#step1').hide();
        $('#step3').hide();
        $('#step4').hide();
        $( "li.breadcrumb-item:nth-child(1)").empty();
        $( "li.breadcrumb-item:nth-child(1)").append("<a href='#'>Où se situe votre bien ?</a>");
        $( "::before").insertBefore("li.breadcrumb-item:nth-child(1) a[href]");
        //$( "li.breadcrumb-item:nth-child(1) a").attr("::before", "");
        $( "li.breadcrumb-item:nth-child(2) a[href]").contents().unwrap().unwrap();
        /*$( "ol li:nth-child(2)").addClass('active');
        $( "ol li:nth-child(3)").addClass('active');
        $( "ol li:nth-child(4)").addClass('active');
        $('#next').css('display', 'none');
        $('#next2').css('display', 'block');
    }));

    if ($("#next2").click(function(){
        $('#step3').show();
        $('#step1').hide();
        $('#step2').hide();
    }));*/
});