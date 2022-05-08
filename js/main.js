document.querySelector('button').addEventListener('click', getQuote)
function getQuote(){
 
    let url = `https://api.kanye.rest`

    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data.quote)
        document.querySelector('h3').innerText = data.quote
        // document.querySelector('.quote').innerText = data.
        // document.querySelector('.getPhrase').innerText = data.type 



        // console.log(data)
        // console.log(data[1])
        //     console.log(data[1].quote[0])
        // document.querySelector('.getPhrase').innerText = data[1].quote[0]    
        })
    .catch(err => {
        console.log('error $(err)')
    })
}
