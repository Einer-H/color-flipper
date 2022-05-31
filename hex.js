const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const  d = document
const btn = d.getElementById('btn')
const color = d.querySelector('.color')

btn.addEventListener('click', function(){
    let hexcolor = '#'
    for(i = 0; i < 6; i++){
        hexcolor += hex[getHexColor()]
    }
    color.textContent = hexcolor;
    d.body.style.backgroundColor = hexcolor;
})

function getHexColor(){
    return Math.floor(Math.random() * hex.length)
}