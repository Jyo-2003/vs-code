const os =require('os');
const path=require('path')
//import os from 'os'
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.freemem());
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname())

const filepath='home/project/app/user.js';
console.log(path.dirname(filepath))
console.log(path.dirname(filepath))
console.log(path.basename(filepath))
console.log(path.join("person","raj"))
console.log(path.resolve("prasad","raj","sekhar"))