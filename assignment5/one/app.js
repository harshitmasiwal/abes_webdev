

let a = 0
document.getElementById('count').innerText = a  

function inc(){
     if(a != 10){
        a++
    }
    else{
        window.alert("cant go more than 10")
    }
document.getElementById('count').innerText = a  

}

function dec(){
    if(a != 0){
        a--
    }
    else{
        window.alert("cant go below than 0")
    }
document.getElementById('count').innerText = a  

}



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