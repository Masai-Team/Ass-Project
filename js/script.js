 var i = 0;
    var img = [];
    var time = 3000;

    img[0] = "https://relianceretail.com/img/banner/bs1.jpg";
    img[1] = "https://relianceretail.com/img/banner/bs2.jpg";
    img[2] = "https://relianceretail.com/img/banner/bs3.jpg";

    function changeImg(){
        document.slide.src = img[i];
        if(i < img.length-1){
            i++;
        }
        else{
            i=0;
        }
        setTimeout("changeImg()", time);
    }
    window.onload = changeImg;