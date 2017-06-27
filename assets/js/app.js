$( _ => {
    var lista= "";
    $.getJSON("http://laboratoria.cuadra.co:9339/api/v1/students/",function(data){
       $.each( data, function(i) {
            lista +="<li class='bg-black'>"+data[i].name+"</li>";
       });
       $("#student").html(lista);
    });    
});
