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


async function doWork(){
    try{
        const response = await makeRequest('google')
        console.log('Response received');
        const processedResponse = await processRequest(response)
        console.log(processedResponse);
    }catch(err){
        console.log(err);
    }
}

doWork();