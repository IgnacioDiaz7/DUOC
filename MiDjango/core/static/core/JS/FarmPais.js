$("#EnviarPais").click(function(){
    $.get("https://midas.minsal.cl/farmacia_v2/WS/getLocales.php",
    function(data){
        console.log(data.length);
        var dataarray = JSON.parse(data);

        for(var x=0; x<dataarray.length;x++)
        {
            console.log("item: "+dataarray[x]);
        }
        $.each(dataarray, function(i, item){
            $("#farmacias").append("<tr><td>"+item.fecha+
            "</td><td>"+item.local_nombre+
            "</td><td>"+item.comuna_nombre+
            "</td><td>"+item.localidad_nombre+
            "</td><td>"+item.local_direccion+
            "</td><td>"+item.funcionamiento_hora_apertura+
            "</td><td>"+item.funcionamiento_hora_cierre+
            "</td><td>"+item.local_telefono+
            "</td><td>"+item.funcionamiento_dia+"</td></tr>");
        });
    });
})