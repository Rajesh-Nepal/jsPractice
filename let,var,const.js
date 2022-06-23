// // var has the scope within the function
// let has the scope within the block
// const is used for constants and has the scope of block


function displayName(xyz){
    if(xyz){
        var name = "Rohit"
    }
    console.log('My name is '+ name);  // the name declared with var is accessible here
}

function displayName(xyz){
    if(xyz){
        let name = "Rohit"
    }
    console.log('My name is '+ name); // the name declared with let is not accessible here 
}


displayName(true);

// let is preferred to use if we need to reassign the variable