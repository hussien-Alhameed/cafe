
// // let a = "elzero web school";
// // let a1 = a[13].repeat(8);

// // console.log(a1.toUpperCase());


// // console.log(a.split(" ", 1));

// // console.log(`${a.substr(0, 6)} ${a.substr(11)}`);

// // console.log(`${a[0]}${a.substr(1, 6).toUpperCase()} ${a.substr(7).toUpperCase()}`)

// // let a2 = 10;

// // a2 < 10 ? console.log(10)
// //     : (a2 >= 10 && a2 <= 40) ? console.log("10 To 40")
// //         : (a2 > 40) ? console.log("< 40 ")
// //             : console.log("UnKnow")


// // let st = "Elzero Web School";

// // if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
// //     console.log("Good");
// // }

// // if (typeof Number(st) !== "string") {
// //     console.log("Good");
// // }

// // if (typeof Number(st) === "number") {
// //     console.log("Good");
// // }

// // if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
// //     console.log("Good");
// // }


// // let job = "Manager"
// // let salary = 0;

// // switch (job) {
// //     case "Manager":
// //         salary = 8000;
// //         break;
// //     case "IT" :
// //         salary = 6000;
// //     case "Developer" || "Designer":
// //         salary = 7000;
// //     default:
// //         salary = 1000;

// // }

// // console.log(salary)

// // let array =[1, 2 ,4 ,5];
// // array.push(6);
// // console.log(array);
// // array.pop();
// // console.log(array);
// // array.unshift(0);
// // console.log(array);
// // array.shift();
// // console.log(array);

// // let a =["ahmad","hassan","hussien"];
// // a.splice(2,0,"amjad");
// // console.log(a)

// // a.splice(0,0,"mohamad");
// // console.log(a)



// // ooooooooooooohi
// // let zero=0;
// // let count=3;
// // let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// // my.pop(zero+=4);
// // my.pop(count+=2);
// // my.reverse();
// // console.log(my);
// // let p= my[2][0];
// /*********/
// // let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // console.log(my[2][0]+my[2][1]+my[1][2]+my[1][3]+my[1][4]+my[1][5]);
// /*********** */
// // let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // console.log(my[1][4]+my[1][5].toUpperCase());
// // opopopop


// // let names=["ahmad","hassan","ali",1,2]
// // let names1=[];
// // for(let i=0 ;i<names.length;i++){
// //     if(typeof names[i]==="string")
// // {
// //     names1.push(names[i])
// // }
// // }
// // console.log(names1)



// /*===================*/


// // let num="88866555444";
// // let r=[];

// // for(let i=0;i<num.length;i++){
// //     if(num[i]==num[i+1]&&num[i]==num[i+2]){
// // r.push(Number(num[i]+num[i+1]+num[i+2]));
// //     }
// // }
// // r.sort();
// // r.reverse();
// // console.log(r[0]);
// // leetcode


// // let products = ["keyboard", "Pen", "Mouse", "Moniter"];
// // let colors = ["Red", "Green", "Black"];
// // let models = [2020, 2022]
// // let showcount=3;
// // document.write(`<h1>show ${showcount} produts</h1>`)
// // for(let i=0;i<showcount;i++){
// // document.write(`<div>${products[i]}</div>`)
// // document.write("<br>")

// // for(let i=0;i<colors.length;i++){
// //     document.write(`<div>${i + 1}   ${colors[i]}</div>`)
// //     // document.write("<br>")

// // }
// //      document.write("<br>")

// // }

// // let a = ["Ahmad", "Osama", "Sayed"]
// // let e = ["Amjad", "Samah", "Amer", "Omaer", "Othman", "Amani", "Samia", "Anwar"]


// // for (let i = 0; i < a.length; i++) {
// //     let ch = a[i][0];
// //     console.log(a[i])
// //     for (let j = 0; j < e.length; j++) {

// //         if (ch === e[j][0]) {

// //             console.log(`${j + 1} ${e[j]}`)
// //         }

// //     }
// // }


// // let arr = []
// // function multi(num) {

// //     for (let i = 2; i < num; i++) {
// //         if (num % i == 0) {
// //             arr.push(i)
// //         }
// //     }
// // }
// // multi(10)
// // console.log(arr)

// // function print(userName = "hassan", ag = 20, rate = 0, show = "yes", ...sk) {

// //     document.write(`${userName} ${ag}`);
// //     document.write("<br>");
// //     if (show === "yes") {
// //         for (let i = 0; i < sk.length; i++) {
// //             document.write(` [ ${i + 1} ] ${sk[i]}`)
// //             document.write("<br>");

// //         }
// //     }
// //     else {
// //         document.write("hidden skile");
// //     }
// //     document.write("<br>");

// // }

// // print("hussien", 23, 1, "yes", "html", "css", "js", "react");

// // function print(name, age) {
// //     if (typeof (name) === "string" && typeof (age) === "number") {
// //         console.log(name);
// //         console.log(age);
// //     }
// //     else if (typeof (name) === "number" && typeof (age) === "string") {
// //         console.log(age);
// //         console.log(name);

// //     }
// // }

// // print("hassan", 23)
// // print(23, "hassan")

// // setTimeout(function () {
// //     console.log("hii")
// // }, 500)

// // التكليفات :  57 ==> 63
// // تكليف 1
// function printHello(Name, Gender) {
//     if (Gender === "Male")
//         console.log(`Hello Mr ${Name}`);
//     else if (Gender === "Female")
//         console.log(`Hello Mrs ${Name}`);
//     else
//         console.log(`Hello ${Name}`);

// }
// // use Ternary Operator 
// function printHello(Name, Gender) {


//     Gender === "Male" ? console.log(`Hello Mr ${Name}`)
//         : Gender === "Female"
//             ? console.log(`Hello Mrs ${Name}`)
//             : console.log(`Hello ${Name}`)

// }
// // sayHello("hassan", "Male"); // "Hello Mr hassan" 
// // sayHello("hoda", "Female"); // "Hello Miss hoda" 
// // sayHello("ali"); // "Hello ali"

// // تكليف 2

// function cal(num1, num2, Oper) {
//     if (Oper === "add")
//         console.log(num1 + num2);
//     else if (Oper === "subtract")
//         console.log(num1 - num2);
//     else if (Oper === "multiply")
//         console.log(num1 * num2);
//     else if (Oper === undefined && num2 !== undefined)
//         console.log(num1 + num2);
//     else console.log("second num not found");
// }

// cal(10); // Second Number Not Found 
// cal(50, 30); // 80 
// cal(80, 90, "add"); // 170 
// cal(1000, 170, "subtract"); // 830 
// cal(250, 30, "multiply"); // 7500


// function calAge(theAge) {
//     if (theAge > 10 && theAge < 100) {
//         console.log(`age year ==> ${theAge}`);
//         console.log(`age month ==> ${theAge * 12}`);
//         console.log(`age week  ==> ${theAge * 12 * 4}`);
//         console.log(`age day ==> ${theAge * 12 * 4 * 7}`);
//         console.log(`age hours: ${theAge * 12 * 4 * 7 * 24}`);
//         console.log(`age minutes: ${theAge * 12 * 4 * 7 * 24 * 60}`);
//         console.log(`age seconds: ${theAge * 12 * 4 * 7 * 24 * 60 * 3600}`);

//     }
//     else {
//         console.log("theAge is out range");
//     }

// }
// // تكليف 5

// function createSelect(start, end) {
//     document.write(`<select>`);
//     var i = start;
//     while (i < end) {

//         document.write(`<option> ${i} </option>`);
//         i++;
//     }

//     document.write(`</select>`);

// }

// createSelect(100, 200);

// // تكليف 6

// function multiply(...number) {
//     var answer = 1;
//     for (let i = 0; i < number.length; i++) {
//         if (typeof (number[i]) === "string")
//             continue;
//         else {
//             answer = answer * Math.floor(number[i]);
//         }
//     }
//     console.log(answer);
// }

// multiply(1, 2, 3, 4, 5, 6.5);//720


// let names = function (...names) {
//     return `String [${names.join("], [")}] => Done !`;
// };

// //arrow func
// let names1 = (...names) => `String [${names.join("], [")}] => Done !`;


// let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + two + nums[0];
// console.log(calc(10, myNumbers[2], myNumbers[3])); // 80

// // تكليف من 64 لل70
// // تكليف 1

// function getDetails(zName, zAge, zCountry) {

//     function namePattern(zName) {
//         let name1 = zName.split(" ");
//         let size = name1[0].length;
//         let name2 = name1[1][0].toUpperCase();
//         return `Hello ${name1[0]} ${name2}`;
//     }
//     function ageWithMessage(zAge) {
//         let AGE = zAge.split(" ");
//         return `Your Age is ${AGE[0]}`;
//     }
//     function countryTwoLetters(zCountry) {
//         let count = zCountry.substr(0, 2).toUpperCase();
//         return `You live in ${count}`;
//     }

//     function fullDetails() {
//         return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
//     }
//     return fullDetails();
// }
// console.log(getDetails("Hussien hammed", "23 Is My Age", "syria"));



// // تكليف 2

// let itsMe = () => `Iam A Normal Function`;
// console.log(itsMe()); // Iam A Normal Function

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org




// var z=10
// function c (){
// console.log(z)
// var z=15
// console.log(z)

//  }
//  c()
//   console.log(z)

// let a=[10,20,30]
// let b=a.map((e,index,arr)=>{

// return e*2

// })
// console.log(a)

// console.log(b)

// التابع الذي لا يحتوي retyrn يعيد undefined 

// let ar=[
//     {
//         username:"hassan",
//         age:32
//     },
//     {
//         username:"ali",
//         age:12
//     },
//     {
//         username:"mohamad",
//         age:45
//     }]

//     ar.map((e)=>{
// document.write(
//     `<div>
//     <h1>${e.username}</h1>
//     <h3>${e.age}</h3>
//     </div>`
// )

//     })


// let r=ar.map(e=>e.age * 2)
// console.log(r)

// function sum(x){
//     console.log(x)
// }
// ar.map(e=> sum(e))

// let swap = "elZERo";
// let array = swap.split("");
// let w = swap.map((ele) => {
//     if (ele.toUpperCase() === ele)
//         return ele.toLowerCase();
//     else
//         return ele.toUpperCase()

// })

// console.log(w.join(""))

// let a=[1,-1,-20,-69]

// let y=a.map((e)=>{
//     // e < 0 ? e*=-1 : e=e*1
//     if(e<0){
//       return  e*=-1
//     }
//     else {
//       return  e= e * -1
//     }
// })
// console.log(y)


// let o = "ELZER12345OE";
// let s = []
// let array1 = o.split("");
// array1.map((e) => {

//     if ((parseInt(e) === "string")) {
//         s.push(e)
//     }
// })
// console.log(s.join(""))

// let a= [1,2,3,4,5,6];
// let p=a.filter((e)=>{
//     return e%2!=0 
// })
// console.log(p)

// let i="hassan hameed fffffff kkk";
// let r=i.split(" ");
// let y=r.filter((e)=>{
//     return e.length<4;
// })
// console.log(y.join("&"));



// let a=[10,20,30,40,50]
// let b=a.reduce((acc,curr,i)=>{
//     console.log(`acc:${acc}`)
//     console.log(`curr:${curr}`)
//     console.log(`index:${i}`)

//     return acc+curr;

// },20)

// console.log(b)
// let j=[];
// let a=["hassan","hussien","ali"]
// a.reduce((acc,curr,index)=>{
// // a.push(acc.length())
// console.log(Math.max(acc.length,curr.le)
// })
// let r=[]
// let r1=[]
// let p=["E","@","@","L","@","@","E","R","@","O"]
// p.reduce((acc,curr,index)=>{
//     if(p[index]!=="@"){
// r.push (p[index])
//     }

// },0)

// p.reduce((acc,curr,index)=>{
//     r1.push (acc+curr)

// })
// console.log(r)

// window.location.assign("http://google.com");
// let a="country"
// let car={
//     name:"bmw",
//     "nam":"looo",
//     speed:988,
//     sum: (x,y)=>{console.log(x+y)},
//     "hassan hameed":"hiiiiii",
//     country:"syria"
// }
// console.log(car[a])
// console.log(car.name)
// console.log(car.nam)

// console.log(car.speed)
// console.log(car["hassan hameed"])

// car.sum(55,55)





// let user = {
//     name: "hassan",
//     age: 23,
//     skills:["html","css","js"],
//     avlaible: false,
//     adrees: {
//         one: "syria",
//         two: {
//             adrees_one: "cairo",
//             adrees_two: "brn",
//         }
//     },
//     checAv: () => {
//         user.avlaible == true ? console.log( "hiiiiiiiiiiiiii" ) : console.log( "noooooooooooooo" )
//     }
// }
// console.log(user.name)
// console.log(user.age)
// console.log(user.adrees.two.adrees_one)
// console.log(user["adrees"]["two"]["adrees_two"])

// console.log(user.skills[2])
// user.checAv()




// let car = new Object(
//     {
//         name: "ali",
//         age: 34
//     }
// )
// console.log(car)
// console.log(car.age)
// car["brand"]="bmw"
// car.speed=223
// console.log(car)




// this.alert("hi hassan")


// let r=()=>{
//     console.log(this)
// }
// r()


// let user={
//     name:"hassan",
//     age:34,
//     test:function(){
//         console.log(this.age)
//     }
// }
// user.test()

// let user={
//     name:"hassan",
//     age:34,
//     test:()=>{
//         console.log(this.age)
//     }
// }
// user.test()


// let user={
//     name:"hassan",
//     age:34,
//     test:function(){
//        return this.age *2
//     }
// }
// console.log(user.test())




// let y={
//     name:"hassan",
//     age:90,
//     test:function(){
//         return this.age*2;
//     }
// }
// let user=Object.create(y);
// user.age=33;
// console.log(user.test());
// console.log(user.age);

// let x= document.getElementById("mydiv");
// console.log(x);


// let f=document.getElementsByTagName("p")
// console.log(f[1])

// let r=document.querySelector(".myspan");
// console.log(r)

// console.log(document.body)


// if(document.getElementsByTagName("div")[2].hasAttribute("class")){
//     console.log("hiiiiiii")
// }
// else{
//     console.log("noooooooo")
// }

// let di = document.createElement("div");
// let atrribute = document.createAttribute("class")
// di.setAttributeNode(atrribute)
// di.setAttribute("class", "hassan")

// let tex = document.createTextNode("hello world")
// di.appendChild(tex)
// document.body.appendChild(di)


// let myElement=document.querySelector("div");
// console.log(myElement.lastElementChild)

// let myBtn=document.getElementById("btn");
// myBtn.onclick = function () {
//     console.log("heelo hussien");
// }

window.scroll = function () {
    console.log ("codeforces")
}