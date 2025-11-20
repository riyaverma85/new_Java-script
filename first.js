
// console.log("hello my dear babuu");

//  let Mycollege="Sistech";

// console.log( Mycollege);

/////////////////////////////////

// const customer={
//     Name:"Ritika",
//     age:25,
//     city:"bhopal"
// }
// customer["city"]="jambu"
// customer["age"]=customer["age"]-10
// customer["Name"]="Rites Bhai"
// console.log(customer["Name"])
// console.log(customer["age"])
// console.log(customer["city"])  

////////////////////////////////////////////

// const profile={
//     username:"sradhakhapra",
//     followers:56900,
//     following:4,
//     Entrepreneur:"Apna college",
// };
// console.log( typeof profile["Entrepreneur"]);

//////////////////////////////////

// let a=5;
// let b=2;
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b);

////////////////////////////////////////

// let a=5;
// let b=2;
// console.log("a=",a,"& b=",b);
// a--;
// b--;
// console.log("b=",b);
// console.log("a=",a);
// console.log("--a=",--a)
// console.log("--b=",--b)
// console.log("a--=",a--)
// console.log("++a=",++a);

///////////////////////////////////////

// let a=5;
// let b=2;
// a += a; //a=a+a
// b -= b;
// a *= a;
// a %= a;
// console.log("a=",a,"& b=",b);

////////////////////////////////////
// let age=25;

// if (age > 18) {
//     console.log("you can vote")
// }

// if (age < 18){
//     console.log("you canNOT vote")
// }
//////////////////////////////////
// let mode="light";
// let color;

// if(mode==="dark"){
//     color="black"
// }

// if(mode==="light"){
//     color="white"
// }

// console.log(color);
//////////////////////////////////////

// let mode="green";
//  let color;
// if( mode==="dark"){
//     color="black";
// }
// else if(mode==="pink"){
//     color="pink";
// }
// else if(mode==="light"){
// color="wite"
// }
// else{
//    color="blue"
// }
// console.log(color);
/////////////////////////////////// 

// let age=25;
//  age>=18 ?
//  console.log("vot"):console.log("not vot")
///////////////////////////////////////////


// prompt("enter your name");
// alert("welcome riya")
// console.log("hello riya")
//////////////////////////////

// let  num=prompt("enter a number")
// if(num%5===0){
//     console.log("divide")
// }
// else{console.log("not divide")}
///////////////////////////////////////

// let score=prompt("enter your score(0-100)");
// let grade;
// if(score>=90&&score<=100){
//     grade="A";
// }
// else if(score>=70&&score<=90){
//      grade="B"
// }
// else if(score>=60&&score<=69){
//    grade="c"
// }
// else if(score>=50&&score<=59){
//     grade="D"
// }
// else if(score>=0&&score<=49){
//     grade="F"
// }
// console.log("your grade is",grade)
///////////////////////////////////////

// for(let i=1; i<=10;i++){
//     console.log("hello babuu kya krre ho")
// }

//////////////////////////////////////

// let sum=0;

// for(let i=1; i<=10; i++){
//     sum=sum+i;
// }
// console.log("the sum is",sum);
////////////////////////////////////////
//   let i=1;
// while(i<=5){
//     console.log("riya");
//     i++;  
// }
// console.log("loop end")
/////////////////////////////////////
// let i=1;
// do{
//    console.log("shivani");
//    i++;
// }while(i<=5);
////////////////////////////////////
// let student={
//    name:"Ritika",
//    age:25,
//    cgpa:7.0,
//    isPass:true,
// }
// for(let i in student){
//     console.log("i=",i,"value=",student[i]);
// }
/////////////////////////////////////////
// let sum=1;
// for(let i=0;i<=100;i++){
//     if(i%2==0) //even /odd(!)
//     console.log("i=",i)

// }
/////////////////////////////////////////
// let gameNum=50;
// let userNum=prompt("entera number");
// while(userNum!=gameNum){
//    userName=prompt("try again");

// }
// console.log("right number guess")
//////////////////////////////////////
/////(((((((Array)))))))
// let marks=[49,44,55,34,55,43];
// console.log(marks);
// console.log(marks.length)

//////////////////////////////////////

// let heroes=["salman","shahrukh","aamir","akshay","ranbir"];
// for(let i=0; i<heroes.length; i++){
//     console.log(heroes[i])
// }
////////////////////////////////////////
  
//question Average

// let marks=[45,55,76,87,98,39];
// let sum=0;
// for(let val of marks){
//     sum=sum+val;
// }
// average=sum/marks.length;
// console.log(`the average is=${average}`);

//////////////////////////////////////////////
/////////////////////  push  ///////////////
//   let food=["pizza","burger","pasta","maggii"];
// console.log(food);

// food.push("kachori","samosa");
// console.log(food);
//////////////////////////////////////////
//////////////    pop    /////////////

// let fastfood=["poha","pizza","pasta","burger"];
// console.log(fastfood);
// // fastfood.pop(fastfood);
// // console.log(fastfood);
// let removeditms=fastfood.pop();
// console.log("removed itms=",removeditms);
// console.log(fastfood);
/////////////////////////////////////////
////////////////   tostring ///////////////////////
///////////////////splice ///////////////////////

let food=["pizza","burger","pasta","maggii"];
// console.log(food);
food.splice(1,2,"cake"); /////////is method me 1 index se 2 itme ko delete krke cake add kr dega


//////////////slice//////////////////////////

// let Heroes=["shaman","sharukh","aamir","akshay",];

// console.log(Heroes.slice(2));////////// is method me 2 index diya to 2 ke bad vale index show honge  


///////////////////////QQQQQQQ/////////////////

// let companies=["Bloomnerg","Microsoft","Uber","Google","Netflix","IBM"]

// // companies.shift();
  
// //  console.log(companies.splice(2,1,"ola"));
// //  console.log(companies)

// console.log(companies.push("Amazon"))
// console.log(companies)

//////////////////////////////////////

