var resimler=[
    {slide:"images/1.jpg",baslik:"Mali Danışmanlık Hizmetleri",aciklama:"Fordizayn Danışmanlık"},
    {slide:"images/2.png",baslik:"İhtiyacınız Olduğu Yerde",aciklama:"Biz Her Zaman Yanınızdayız"},
    {slide:"images/3.png",baslik:"İnsan Kaynakları Yönetim Danışmanlığı",aciklama:"İK Yönetim Danışmanlığı"},
 
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
     