const https = require('https');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const options = {
  hostname: 'nanoclub.ir',
  path: '/online-festival/show/15',
  method: 'GET'
}


async function sendReq(){
       
      readline.question('how many?', async count => {

        for(let i = 1; i <= count; i++){
            await sleep(800);
    
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

        readline.close();

      });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

sendReq();