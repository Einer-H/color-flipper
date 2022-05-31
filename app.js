const colors = ['lightblue', 'green', 'rgba(133,122,200)','#f15025']
const d = document
const btn = d.getElementById('btn')
const color = d.querySelector('.color')

btn.addEventListener('click', function () {
    const randonNumber = getRandomNumber();
    console.log(randonNumber);
    d.body.style.backgroundColor = colors[randonNumber]
    color.textContent = colors[randonNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}