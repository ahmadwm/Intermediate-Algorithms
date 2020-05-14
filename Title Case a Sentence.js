function titleCase(str){
const newStr=str.toLowerCase().split(" ")
  const arr=[]
    for (var i = 0; i < newStr.length; i++) {
    const upprStr=newStr[i][0].toUpperCase() + newStr[i].slice([1])
   arr.push(upprStr)  
    }
    return arr.join(" ")
   
  }
console.log(titleCase("I'm a little tea pot"))

