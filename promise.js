// promise is an object    

// let p = new Promise((resolve,reject)=>{
//     let a=1+1;
//     if(a==2){
//         resolve('success')
//     }else{
//         reject('error')
//     }
// })

// p.then((message)=>{
//     console.log('this is in the then>>',message);
// }).catch((message)=>{
//     console.log('this is in the catch>>>',message);
// })


function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`making request to ${location}`);
        if(location==='google'){
            resolve('google says hi!')
        }else{
            reject('we can only talk to google,sorry!')
        }
    })
}

function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log('processing response');
        resolve(`extra info + ${response}`)
    })
}

makeRequest('facebook').then(response =>{
    console.log('response has been received');
    return processRequest(response)
}).then(processedResponse =>{
    console.log(processedResponse);
}).catch(err=>{
    console.log(err);
})