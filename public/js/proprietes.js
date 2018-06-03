$(document).ready(function(){
    $('#select_category').on('change', function(){
        var category_id= $(this).val();
        console.log("coco");
        // cache the $(this) jQuery object since we're potentially using it twice:
        console.log($(this).val());
        if($(this).val() != "defaut"){
            $.ajax({ 
                type: 'GET', 
                url: "/json_propriete", 
                dataType: 'json',
                data: 'category_id=' + category_id,
                success: function (proprietes) {
                    alert('ca marche');
                    console.log(category_id);
                    for(var i in proprietes["proprietes"]){                 
                        var propriete = proprietes["proprietes"][i]["propriete"];
                        $("#propriete_category").append( "<label><input type='checkbox'/>"+propriete+"</label> " );                        
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

