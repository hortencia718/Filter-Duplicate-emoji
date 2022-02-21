// filter through list of emojis and remove duplicates
// create 
document.getElementsById("btn").addEventListener("click", filterDuplicates)

const emojis =[
    "💘","💘","🌞","🧡","🍇",
    "🧁","⚡️","💝","🐱","💘",
    "🧡","💫","🍓","💜","⚡️",
    "⚡️","🐶","💘","🍇","🐱",
    "💘","💫","🍓","💜","💕",
    "⚡️","💘","🌞","🐱","💘",
    "💫","🍓","💜","⚡️","🧡",
    "💕","🍇","💘"
]

// get all the emojis save to 
const allEmojisP = document.getElementById("all-emojisP")
const uniqueEmojisP = document.getElementById("unique-emojis-p")

// loop through all emojis
for(let emoji of emojis){
    allEmojisP.textContent += emoji
}

function filterDuplicates(){
    let unique =[...new Set(emojis)];
    for(let emoji of unique){
        uniqueEmojisP.textContent += emoji
    }
    
}
