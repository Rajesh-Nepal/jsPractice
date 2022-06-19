// callback is a function which is passed as an arguement into another function

// Higher order function are those functions that accepts function as an arguement

// function askMoney(amt){
//     console.log('I asked money with mom');
//     console.log('Mom told me to wait until she gets her salary');
//     setTimeout(function(){
//         console.log('Mom got her salary');
//         return amt + 1000;
//         // time laagne case ma return doesnot work
//     },3000)
// }
// var result= askMoney(10,000)
// console.log('Amount received from mom',result);
// console.log('Go to buy mobile');


// SOLUTION:

// callback is a result handling mechanism for asynchronous time consuming task

function askMoney(amt,cb){  //cb is a function
    console.log('I asked money with mom');
    console.log('Mom told me to wait until she gets her salary');
    setTimeout(function(){
        console.log('Mom got her salary');
        cb(amt + 1000) ;
        // time laagne case ma return doesnot work
    },3000)
}

askMoney(1000,function(){ //this function called when cb is called in askmoney
    console.log('Money received from mom');
    console.log('Go to buy mobile');
})
console.log('Studying until mom gives me money'); //this is non-blocking i.e result of waiting function doesnot bloack this task
