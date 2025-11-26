const url=require('url')
const myURL=new URL('https://www.jyo.com/blogposts?category:"JAVA"')
console.timeLog(myURL)

console.log(myURL.searchParams.get('category'))