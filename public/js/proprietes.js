$(document).ready(function(){
    $('#select_category').on('change', function(){
        var category_id = $(this).val();
        // cache the $(this) jQuery object since we're potentially using it twice:
        if($(this).val() != "defaut"){
            $.ajax({ 
                type: 'GET', 
                url: "/json_propriete", 
                dataType: 'json',
                data: {category_id:category_id},
                success: function (proprietes) {
                for(var i in proprietes["proprietes"]){
                    
                    console.log(proprietes["proprietes"][i]["propriete"]);
                }
                },error: function (){
                    alert('ca marche pas');
                }
            })
        } else {
            $(".block-properties").show();
        }
    });
});

