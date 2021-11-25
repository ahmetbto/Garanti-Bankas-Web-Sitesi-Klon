var resimler=[
    {slide:"images/1.png"},
    {slide:"images/1.png"},
    {slide:"images/1.png"},
 
    ];
    var index=0;
    var resimSayisi=resimler.length;  
    
   

    
    function resimDegistir(){
            
        index++;  
      
        if (index==resimSayisi){
            index=0;
        };
   
        document.querySelector(".slide-resim").setAttribute("src",resimler[index].slide);   
     
     
    }

    setInterval(resimDegistir, 3000);
     
