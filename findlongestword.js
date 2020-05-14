
function findLongestWord(sentence){
    var sen=sentence
    var senArray=sen.split(' ')
    var longestWord=0;
   for (let i = 0; i < senArray.length; i++) {
       var wordLength=senArray[i].length
       if (wordLength > longestWord) {
           longestWord=wordLength    
       }
    }
    console.log(longestWord);

}
findLongestWord("sHoRt AnD sToUt")