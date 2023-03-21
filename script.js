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

const weapons = [
    {
        name: "stick",
        power: 5,
    },
    {
        name: "dagger",
        power: 30,
    },
    {
        name: "claw hammer",
        power: 50,
    },
    {
        name: "sword",
        power: 100,
    }
]

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
    },
    {
        name: "cave",
        "button text":["fight slime","fight fanged beast","go to town square"],
        "button functions":[fightSlime, fightBeast, goTown],
        "text": "you enter the cave , you see some monsters"
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
    update(loactions[2])
    
}

function fightDragon(){
    console.log("going to the fight dragon")
    
}

function buyHealth(){
    if(gold >= 10){
        gold -= 10
        health += 10
        goldText.innerText = gold
        healthText.innerText = health
    }
    else{
        text.innerText = "you don't have enough gold to buy health"
    }
}

function buyWeapon(){
    if(gold >= 30){
        gold -= 30
        currentWeapon += 1
        goldText.innerText = gold
        let newWeapon = weapons[currentWeapon].name
        text.innerText = "you have a " + newWeapon
        inventory.push(newWeapon)
        
    }
}

function fightSlime(){

}

function fightBeast(){

}