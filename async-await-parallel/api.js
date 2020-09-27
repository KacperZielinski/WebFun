const jokeAPI = 'https://official-joke-api.appspot.com/jokes/ten';
const bitcoinAPI = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const geoIPAPI = 'https://freegeoip.app/json/';

// es8 (ecma 2017)
async function parallel() {
    let start = window.performance.now();

    const jokeRequest = fetch(jokeAPI).then(r => r.json());
    const bitcoinRequest = fetch(bitcoinAPI).then(r => r.json());
    const geoIPRequest = fetch(geoIPAPI).then(r => r.json());
    
    // those will run in pararel, if you use await on request, they will be executed subsequently
    const joke = await jokeRequest;
    const bitcoin = await bitcoinRequest;
    const geoIP = await geoIPRequest;

    document.getElementById('joke').innerHTML = `${joke[0].setup} ${joke[0].punchline}`; 
    document.getElementById('bitcoin').innerHTML = `1 bitcoin = ${bitcoin.bpi.USD.rate} $`; 
    document.getElementById('geoIP').innerHTML = `My ip: ${geoIP.ip}`; 
    console.log(joke);
    console.log(bitcoin);
    console.log(geoIP);
    
    let end = window.performance.now();
    console.log(`Execution time: ${end - start} ms`);
}

async function sequential() {
    let start = window.performance.now();

    const joke = await fetch(jokeAPI).then(r => r.json());
    const bitcoin = await fetch(bitcoinAPI).then(r => r.json());
    const geoIP = await fetch(geoIPAPI).then(r => r.json());

    document.getElementById('joke_S').innerHTML = `${joke[0].setup} ${joke[0].punchline}`; 
    document.getElementById('bitcoin_S').innerHTML = `1 bitcoin = ${bitcoin.bpi.USD.rate} $`; 
    document.getElementById('geoIP_S').innerHTML = `My ip: ${geoIP.ip}`; 
    console.log(joke);
    console.log(bitcoin);
    console.log(geoIP);

    let end = window.performance.now();
    console.log(`Execution time: ${end - start} ms`);
}

parallel();
sequential();   // executed time is twice than making it parallel