var resimler=[
    {slide:"images/1.jpg"},
    {slide:"images/1.jpg"},
    {slide:"images/1.jpg"},
 
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
     
