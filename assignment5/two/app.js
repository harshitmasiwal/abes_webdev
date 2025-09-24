const img = document.getElementById('img')
const img2 = document.getElementById('img2')

function hideImage(){
    img.style.display = "none"
}

function showImage(){
    img.style.display = ""
}
let flag = 0

function changeImage(){
    if(flag == 0){
    img2.src = "./image2.png"
        flag = 1 
    }
    else{
    img2.src = "./image.png"
        flag = 0 
    }
}