// slideshow

let slideShow_div=document.getElementById("slide");
function slideShow(){
    let images=[`https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8624/1418624-i-0f6ee3c023c1`,`https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3132/1383132-i-011cefc50da9`,`https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8624/1418624-i-0f6ee3c023c1`,`https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4246/1414246-i-68621e67fcc5`,`https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5224/1545224-i-ff5107005ceb`,`https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3232/1423232-i-050f622bde39`]
    let imgElement=document.createElement("img");
    imgElement.src=images[0];
    slideShow_div.append(imgElement);

    let i=1;
    setInterval(function() {
        if(i===images.length){
            i=0;
        }
        imgElement.src=images[i];
        slideShow_div.append(imgElement);
        i++;

    },2000);
}
    slideShow();
