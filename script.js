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

const locations = [
    {
        name: "town square",
        "button text":["go to store", "go to cave", "fight dragon"],
        "button functions":[goStore, goCave, fightDragon],
        "text":"you are in the town square, yopu see a sign that says store"
    },
    {
        name: "store",
        "button text":["buy 10 health (10 gold)", "buy weapon (30 gold)", "go to town square"],
        "button functions":[buyHealth, buyWeapon, goTown],
        "text":"Welcome to the store! What would you like to buy?"
    }
]

// initialize buttons

button1.onclick = goStore
button2.onclick = goCave
button3.onclick = fightDragon

function upadte(location){
    //for text purpose
    button1.innerText = locations["button text"][0]
    button2.innerText = locations["button text"][1]
    button3.innerText = locations["button text"][2]

    //for function purpose after clicking
    button1.onclick = locations["button functions"][0]
    button2.onclick = locations["button functions"][1]
    button3.onclick = locations["button functions"][2]
    
    text.innerText = locations["text"]
}

function goTown(){
    upadte(locations[0])
}

function goStore(){
    update(loactions[1])
}

function goCave(){
    console.log("going to Cave")
    
}

function fightDragon(){
    console.log("going to the fight dragon")
    
}

function buyHealth(){
    console.log("buying health")
    
}

function buyWeapon(){
    console.log("buying health")
    
}

