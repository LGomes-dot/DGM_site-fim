$(function(){
    let pagina = [
        "#ecra1",
        "#ecra2",
    ];
    let p = 0;

    $("#btn1").click(function(){
        $(pagina[p]).hide();
        p = (p +1 ) % 2;
        $(pagina[p]).show();
    });
    

    $("#btn2").click(function(){
        $(pagina[p]).hide();
        p = (p +1 ) % 2;
        $(pagina[p]).show();
    });
    
});