let xp = 0
let health = 100
let gold = 50
let currentWeapon = 0

let fighting
let monsterHealth
let inventory = ["stick"]

const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")

const text = document.querySelector("#text")
const xpText = document.querySelector("#xpText")
const healthText = document.querySelector("#healthText")
const goldText = document.querySelector("#goldText")
const monsterStats = document.querySelector("#monsterStats")
const monsterNameText = document.querySelector("#monsterNameText")
const monsterHealthText = document.querySelector("#monsterHealthText")


// initialize buttons

button1.onclick = goStore
button2.onclick = goCave
button3.onclick = fightDragon

function goStore(){
    console.log("going to store")

}

function goCave(){
    console.log("going to Cave")
    
}

function fightDragon(){
    console.log("going to the fight dragon")
    
}