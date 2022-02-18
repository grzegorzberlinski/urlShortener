'use strict';
let shortenInput = document.getElementById('shortenInput');
const shortenBtn = document.getElementById('shortenBtn');

const urls = []; //array of urls

shortenBtn.addEventListener('click', function(){
    let shorted = shortenInput.value.replace(/(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g, "X") //todo regex with group 3 as shorturl.com/group3PathHere 
    if(shorted == url.shortUrl){ //todo: search for all shorted urls
        console.log('this url exist!')
    }else{
        shortenInput.value = `https://shortedurl.com/`;
        let url = {
            'oryginalUrl': shortenInput.value,
            'shortUrl': shorted
        }
        urls.push(url)
    }
})