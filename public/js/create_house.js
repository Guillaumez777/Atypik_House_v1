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
                    $('.proprietes').empty();
                    console.log(data);
                    for (i in data.proprietes) {
                        data.proprietes[i].propriete;
                        $( ".proprietes" ).append("<div class='form-group'><label for='name' class='col-md-4 control-label'>"+data.proprietes[i].propriete+"</label><div class='col-md-6'><input type='text' class='form-control proprietes' name='value' autofocus value=''></div></div>");
                    }                    
                },error: function (data){
                    $('.proprietes').empty();
                }
            });
        })
    });
});