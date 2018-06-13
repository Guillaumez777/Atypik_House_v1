$('#1').click(function() {
    $('#hebergement').css('display', 'block');
    $('#reservation').css('display', 'none');
    $('#utilisateur').css('display', 'none');
    $('#avis').css('display', 'none');
    $('#proprietes').css('display', 'none');
});
$('#2').click(function () {
    $('#hebergement').css('display', 'none');
    $('#reservation').css('display', 'block');
    $('#utilisateur').css('display', 'none');
    $('#avis').css('display', 'none');
    $('#proprietes').css('display', 'none');
});
$('#3').click(function () {
    $('#hebergement').css('display', 'none');
    $('#reservation').css('display', 'none');
    $('#utilisateur').css('display', 'block');
    $('#avis').css('display', 'none');
    $('#proprietes').css('display', 'none');
});
$('#4').click(function () {
    $('#hebergement').css('display', 'none');
    $('#reservation').css('display', 'none');
    $('#utilisateur').css('display', 'none');
    $('#avis').css('display', 'block');
    $('#proprietes').css('display', 'none');
});
$('#5').click(function () {
    $('#hebergement').css('display', 'none');
    $('#reservation').css('display', 'none');
    $('#utilisateur').css('display', 'none');
    $('#avis').css('display', 'none');
    $('#proprietes').css('display', 'block');
});

/* method to add/remove field*/
$(document).ready(function(){
    var maxField = 10; //Input fields increment limitation
    var addButton = $('.add_button'); //Add button selector
    var wrapper = $('.create_properties'); //Input field wrapper
    var fieldHTML = '<div class="create_properties row"><div class="col-md-4 col-md-offset-4"><input type="text" name="propriete[]" placeholder="Saisir une propriété" class="form-control"/><select id="name" type="text" name="typeProprietes" id="select_typeProprietes" class="form-control"><option id="" value="defaut" selected="selected" required autofocus>Choisissez votre type de propriété</option><option value="checkbox">checkbox</option><option value="checkbox">input</option></select></div><a href="javascript:void(0);" class="remove_button" title="Retirer un champ"><button class="btn btn-danger" style="border-radius:30px;">-</button></a></div>'; //New input field html 
    var x = 1; //Initial field counter is 1
    $(addButton).click(function(){ //Once add button is clicked
        if(x < maxField){ //Check maximum number of input fields
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); // Add field html
        }
    });
    $(wrapper).on('click', '.remove_button', function(e){ //Once remove button is clicked
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });
});



    $('select').on('change', function(){
        // cache the $(this) jQuery object since we're potentially using it twice:
        console.log($(this).val());
        if($(this).val() == "defaut"){
            $(".block-properties").hide();
            $("input[name*='propriete']" ).val('');
            //$("input[name*='propriete']" ).nexAll("<div>").remove;
        } else {
            $(".block-properties").show();
        }
    });
