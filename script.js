import { foodItem } from './fooditem.js'

//console.log(foodItem)

function displayFoodItems(){
    const biryani=document.querySelector("#biryani")
    const chicken=document.querySelector('#chicken')
    const paneer=document.querySelector('#paneer')
    const vegetable=document.querySelector('#vegetable')
    const chinese=document.querySelector('#chinese')
    const southIndian=document.querySelector('#south-indian')
    //console.log(biryani)

    const biryaniData = foodItem.filter((item)=>item.category==="biryani")
    const chickenData = foodItem.filter((item)=>item.category==="chicken")
    const paneerData = foodItem.filter((item)=>item.category==="paneer")
    const vegetableData = foodItem.filter((item)=>item.category==="vegetable")
    const chineseData = foodItem.filter((item)=>item.category==="chinese")
    const southIndianData = foodItem.filter((item)=>item.category==="south indian")
    //console.log(paneerData)
    //console.log(chickenData)
    //console.log(biryaniData)
    //console.log(vegetableData)
    //console.log(southIndianData)
    //console.log(chineseData)

    for(let item of biryaniData){
        biryani.innerHTML+=`
        <div id="item-card">
                <div id="card-top">
                    <i class="fa fa-star" id="rating">${item.rating}</i>
                    <div class="fa fa-heart-o add-to-cart" id="${item.id}></div>
                </div>
                <img src="/${item.img}" alt="img">
                <p id="item-name">${item.name}</p>
                <p id="item-price">Price : ${item.price}</p>
        </div>
        `
    }
}
displayFoodItems()