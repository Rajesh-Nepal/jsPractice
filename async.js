// JS is asynchronous in nature i.e doesnot wait for the result
console.log('step1');
console.log('step2');
setTimeout(function(){
    console.log('step3');

},3000)
console.log('step4');
console.log('step5');
console.log('step6');


// To handle result of asynchronous flow, we use callbacks or promises or async/await