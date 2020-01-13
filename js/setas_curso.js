$(function(){
    let pagina = [
        "#informacoes",
        "#planocurso",
        "#objetivos"
    ];
    let p = 0;
    
    $("#btn1").click(function(){
       
        
        if (window.innerWidth < 1024) {
            $(pagina[p]).hide();
            p = (p +2 ) % 3;
            $(pagina[p]).show();
        }
        else{
            p = (p + 1) %2;
            
            if (p == 0){
            $(pagina[0]).show();
            $(pagina[1]).show();
            $(pagina[2]).hide();
            }
        
            if (p == 1){
            $(pagina[0]).hide();
            $(pagina[1]).hide();
            $(pagina[2]).show();
            }
        }


    });
    

    $("#btn2").click(function(){
        
        
        
        if (window.innerWidth < 1024) {
            $(pagina[p]).hide();
            p = (p +1 ) % 3;
            $(pagina[p]).show();
        }
        else{
            p = (p + 1) %2;
            
            if (p == 0){
            $(pagina[0]).show();
            $(pagina[1]).show();
            $(pagina[2]).hide();
            }
        
            if (p == 1){
            $(pagina[0]).hide();
            $(pagina[1]).hide();
            $(pagina[2]).show();
            }
        }
   
});
});
