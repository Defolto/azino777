const span = document.querySelector("span")
const blocks = document.querySelectorAll(".block")
const play = document.querySelector('#play')
const getMoney = document.querySelector('#getMoney')

let money = 1000

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getMoney.addEventListener('click', ()=>{
    if (money == 0) {
        money += 1000
        span.innerHTML = money
    }
})

play.addEventListener('click', ()=>{
    if (money >= 100) {
        money -= 100
        span.innerHTML = money
    } else {
        alert("Вы бомжара")
        return
    }

    // 100 руб = 2 цифры
    // 10000 руб = 3 цифры
    let animations = Array(3).fill(null)
    blocks.forEach((block, i)=>{
        block.classList.add("block_animation")
        animations[i] = setInterval(() => {
            block.innerHTML = getRandom(0, 9)
        }, 10);
        setTimeout(() => {
            clearInterval(animations[i])
            block.classList.remove("block_animation")
        }, 4000 + i*1000);
    })

    setTimeout(() => {
        let numbers = Array(10).fill(0)
        blocks.forEach((item)=>{
            numbers[item.innerHTML] += 1
        })

        numbers.forEach((item)=>{
            if (item == 2) {
                money += 100
            }
            if (item == 3) {
                money += 10000
            }
        })
        span.innerHTML = money
    }, 6001);

    
})