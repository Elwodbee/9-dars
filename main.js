let mevalar = ["Olma" , "Nok" , "Ananas" , "Tarvuz" , "Banan"];

let word_n = []
let word_not_n = []

for(let word of mevalar){
    if(word.toLocaleLowerCase().includes("n")){
        word_n.push(word)
    }else{
        word_not_n.push(word)
    }
}

console.log("словы с буквой  n :", word_n);
console.log("словы без буквой n :", word_not_n );