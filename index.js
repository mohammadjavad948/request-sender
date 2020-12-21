const https = require('https');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const options = {
  hostname: '',
  path: '/',
  method: 'GET'
}


async function sendReq(){
       
      readline.question('how many?', async count => {

        
        while(true){
          send(count);
          await sleep(10000);
        }

      });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function send(count){
  console.time('r');

        for(let i = 1; i <= count; i++){
    
            console.log('sending request ' + i);
            
            const req = https.request(options, res => {
                console.log(`statusCode: ${res.statusCode}`)
              
                res.on('data', d => {
                })
            })
              
              req.on('error', error => {
                console.error(error)
              })
              
              req.end();
        }

        console.timeEnd('r')
}
sendReq();
