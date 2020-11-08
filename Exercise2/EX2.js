let image1=document.getElementById("img1");
let image2=document.getElementById("img2");
let image3=document.getElementById("img3");
let image4=document.getElementById("img4");
let image5=document.getElementById("img5");
let i = 5;

function check(){
    if(i==1){
        image1.style.display="block";
        image2.style.display="none";
        image3.style.display="none";
        image4.style.display="none";
        image5.style.display="none";

    }
    if(i==2){
        image1.style.display="none";
        image2.style.display="block";
        image3.style.display="none";
        image4.style.display="none";
        image5.style.display="none";

    }
    if(i==3){
        image1.style.display="none";
        image2.style.display="none";
        image3.style.display="block";
        image4.style.display="none";
        image5.style.display="none";
    }
    if(i==4){
        image1.style.display="none";
        image2.style.display="none";
        image3.style.display="none";
        image4.style.display="block";
        image5.style.display="none";
    }
    if(i==5){
        image1.style.display="none";
        image2.style.display="none";
        image3.style.display="none";
        image4.style.display="none";
        image5.style.display="block";

    }
}   

function nextImage(){
    i++;
    if(i>5)
    i=1;
    check(); 
}

function previousImgae(){
    i--;
    if(i<1)
    i=5;
    check();
}