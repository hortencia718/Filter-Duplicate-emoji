// filter through list of emojis and remove duplicates
// create 
document.getElementsById("btn").addEventListener("click", filterDuplicates)

const emojis =[
    "๐","๐","๐","๐งก","๐",
    "๐ง","โก๏ธ","๐","๐ฑ","๐",
    "๐งก","๐ซ","๐","๐","โก๏ธ",
    "โก๏ธ","๐ถ","๐","๐","๐ฑ",
    "๐","๐ซ","๐","๐","๐",
    "โก๏ธ","๐","๐","๐ฑ","๐",
    "๐ซ","๐","๐","โก๏ธ","๐งก",
    "๐","๐","๐"
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
