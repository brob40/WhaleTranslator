// I had to put the .ToLowerCase() in order to capture the na sentence starting with an uppercase vowel. 
var input = "I think the Green Bay Packers will win the Superbowl".toLowerCase(); 

const vowels = ['a', 'e', 'i', 'o', 'u'];

var resultArray =[];
//runs through the input string
for (let i = 0; i < input.length; i++) {
    const characterCount = input[i];

    if(input[i] === 'e' || input[i]==='u'){
        resultArray.push(input[i])
    }

//runs through the vowels array
    for (let j = 0; j < vowels.length; j++) {
        const resultVowel = vowels[j];
        //checks if vowels and inputs are equal to each other, if they are, they push into the result array
        if(characterCount === resultVowel){
            resultArray.push(characterCount)
        }


    }
}

resultArray = resultArray.join('')
console.log(resultArray.toUpperCase())
