//https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature

// const fetchImage = async () => {
//     const res = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
//     const data = await res.json();
//
//     const backgroundImage = data.urls.regular;
//     const author = data.user.name;
//     document.body.style.backgroundImage = `url(${backgroundImage})`;
//     document.getElementById('author').innerText = `By: ${author}`;
// }
//
// fetchImage();
// how to catch errors in async await

const fetchImage = () => {
    fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
        .then(res => res.json())
        .then(data => {
            const backgroundImage = data.urls.regular;
            const author = data.user.name;
            document.body.style.backgroundImage = `url(${backgroundImage})`;
            document.getElementById('author').innerText = `By: ${author}`;
        })
        .catch(err => {
            document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=
                                                        tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2N
                                                        zA&ixlib=rb-1.2.1&q=80&w=1080)`
        })
}
fetchImage();


fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if(!res.ok) {
            throw Error('Something went wrong')
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `;

        document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.log(err))

const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    document.querySelector('.time').textContent = formattedTime;
}

setInterval(getCurrentTime, 1000)
