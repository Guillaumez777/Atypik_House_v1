$(document).ready(function(){
    $('#select_category').on('change', function(){
        var data = $(this).val();
        console.log("coco");
        // cache the $(this) jQuery object since we're potentially using it twice:
        console.log($(this).val());
        if($(this).val() != "defaut"){
            $.ajax({ 
                type: 'GET', 
                url: "/json_propriete", 
                dataType: 'json',
                data: data,
                success: function (proprietes) {
                    alert('ca marche');
                    console.log(proprietes[0].category_id);
                    for(var i in proprietes){
                        //console.log(proprietes[i])
                        console.log(proprietes[i]["propriete"]);
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

