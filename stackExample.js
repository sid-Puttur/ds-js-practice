/*STACK USING JS */


let letters = [];

let word = "madam";

let reversedWord = "";

for(let i  = 0; i < word.length; i++){

    letters.push(word[i]);
}

console.log('letters', letters);


for(let j = 0; j < word.length; j++){

    reversedWord  += letters.pop(); 
}

console.log('reversedWord',reversedWord);


if(word === reversedWord){
    console.log('Palindrome')
}else{
    console.log('Not Palindrome')
}