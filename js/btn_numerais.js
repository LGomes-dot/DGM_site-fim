$(function(){
    let pagina = [
        "#ano1",
        "#ano2dg",
        "#ano2dm",
        "#ano3dg",
        "#ano3dm",
    ];
    let p = 0;

    $("#prim").click(function(){
        $(pagina[p]).hide();
        p = 0;
        $(pagina[p]).show();
        $("#prim").addClass("ano_activo"); 
        $("#seg").removeClass("ano_activo"); 
        $("#ter").removeClass("ano_activo");
        $("#dm").hide(); 
        $("#dg").hide(); 

    });
    

    $("#seg").click(function(){
        $(pagina[p]).hide();
        p = 1;
        $(pagina[p]).show();
        $("#seg").addClass("ano_activo"); 
        $("#prim").removeClass("ano_activo"); 
        $("#ter").removeClass("ano_activo"); 
        $("#dm").removeClass("ramo_activo"); 
        $("#dg").addClass("ramo_activo"); 
        $("#dm").show(); 
        $("#dg").show(); 
    });

    $("#ter").click(function(){
        $(pagina[p]).hide();
        p = 3;
        $(pagina[p]).show();
        $("#ter").addClass("ano_activo"); 
        $("#seg").removeClass("ano_activo"); 
        $("#prim").removeClass("ano_activo"); 
        $("#dm").removeClass("ramo_activo"); 
        $("#dg").addClass("ramo_activo"); 
        $("#dm").show(); 
        $("#dg").show(); 
    });

    $("#dg").click(function(){
        $(pagina[p]).hide();
        if (p==2) p=1;
        if (p==4) p=3;
        $(pagina[p]).show();
        $("#dg").addClass("ramo_activo"); 
        $("#dm").removeClass("ramo_activo"); 
    });

    $("#dm").click(function(){
        $(pagina[p]).hide();
        if (p==1) p=2;
        if (p==3) p=4;
        $(pagina[p]).show();
        $("#dm").addClass("ramo_activo"); 
        $("#dg").removeClass("ramo_activo"); 
    });

});