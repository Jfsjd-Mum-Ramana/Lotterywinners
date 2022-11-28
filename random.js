function lottery(){
    let randomnumber= document.getElementById('one').innerHTML=Math.floor(Math.random()*6+1);
    let x = document.createElement("img");
    switch(randomnumber){
           case 1:
            img.src="img1.jpeg";
            document.body.appendChild(x);
            break;
            case 2:
            img.src="img2.jpeg";
            document.body.appendChild(x);
            break;
            case 3:
            img.src="img3.jpeg";
            document.body.appendChild(x);
            break;
            case 4:
            img.src="img4.jpeg";
            document.body.appendChild(x);
            break;
            case 5:
            img.src="img5.jpeg";
            document.body.appendChild(x);
            break;
            case 6:
            img.src="img6.jpeg";
            document.body.appendChild(x);
            break;

    }
    let anothernumber = document.getElementById('two').innerHTML=Math.floor(Math.random()*6+1);
    let y = document.createElement("img1");
    switch(anothernumber){
        case 1:
            img1.src="img1.jpeg";
            document.body.appendChild(y);
            break;
            case 2:
            img1.src="img2.jpeg";
            document.body.appendChild(y);
            break;
            case 3:
            img1.src="img3.jpeg";
            document.body.appendChild(y);
            break;
            case 4:
            img1.src="img4.jpeg";
            document.body.appendChild(y);
            break;
            case 5:
            img1.src="img5.jpeg";
            document.body.appendChild(y);
            break;
            case 6:
            img1.src="img6.jpeg";
            document.body.appendChild(y);
            break;

    }
    let thridnumber = document.getElementById('three').innerHTML=Math.floor(Math.random()*6+1);
    let z = document.createElement("img2");
    switch(thridnumber){
        case 1:
            img2.src="img1.jpeg";
            document.body.appendChild(z);
            break;
            case 2:
            img2.src="img2.jpeg";
            document.body.appendChild(z);
            break;
            case 3:
            img2.src="img3.jpeg";
            document.body.appendChild(z);
            break;
            case 4:
            img2.src="img4.jpeg";
            document.body.appendChild(z);
            break;
            case 5:
            img2.src="img5.jpeg";
            document.body.appendChild(z);
            break;
            case 6:
            img2.src="img6.jpeg";
            document.body.appendChild(z);
            break;
    }
   
}