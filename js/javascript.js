window.addEventListener('load', function(event) {

    
    
    var btn_calcular = document.getElementById("btn_calcular");

    btn_calcular.addEventListener('click', function(e) {

        var campo_a = document.getElementById ('campo_a');
        var campo_b = document.getElementById ('campo_b');
        var campo_c = document.getElementById ('campo_c');

        var resultado = parseInt(campo_a.value) + parseInt(campo_b.value);
        campo_c.value = resultado
        
    })

});
