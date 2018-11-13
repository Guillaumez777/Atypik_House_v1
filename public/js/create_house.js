$(document).ready(function(){
    $( "#select_category" ).change(function() {
        $("#select_category option:checked").each(function(){
            var category_id = $("#select_category option:checked").val();
            console.log(category_id);
            $.ajax({
                type: 'GET',
                url: "http://127.0.0.1:8000/json_propriete/"+category_id,
                dataType: "json",
                data: "",
                success: function(data) {
                    
                    console.log(data);
                    for (i in data.proprietes) {
                        //console.log(data.proprietes[0].propriete);
                        $('.proprietes').empty();
                        data.proprietes[i].propriete;
                        $( ".proprietes" ).after("<p>"+data.proprietes[i].propriete+"</p>");
                    }
                    
                    //$( "#select_category" ).after( "<div class='form-group'><label for='name' class='col-md-4 control-label'>{{$propriete->propriete}}</label><div class='col-md-6'><input type='text' class='form-control proprietes' name='price' autofocus value=''></div></div>");
                },error: function (data){
                    $('.proprietes').empty();
                }
            });
        })
    });
});