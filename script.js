const Button= document.getElementById("btn");
const colorText = document.querySelector(".color");  

const hex =['0','1','2','3','4','5','6','7','8','9','a','c','d','e','f'];

Button.addEventListener("click",()=>{
    const hexColor = generatehexColor();
    document.body.style.backgroundColor= hexColor;
    colorText.textContent = hexColor;
}
);

function generatehexColor(){
    let hexColor="#"
    for  (i=0;i<6;i++){   
        hexColor = hexColor +  hex[generateRandomNumber()]
    }
    return hexColor;
};

function generateRandomNumber(){
    return Math.floor(Math.random()*hex.length)
}

