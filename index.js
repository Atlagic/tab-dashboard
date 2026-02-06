try {
    const imageRes = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature');

    if (!imageRes.ok) {
        throw new Error('Failed to fetch image');
    }

    const imageData = await imageRes.json();

    const backgroundImage = imageData.urls.full;
    const author = imageData.user.name;

    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.getElementById('author').innerText = `By: ${author}`;
} catch(err) {
    console.log(err)
    document.body.style.backgroundImage =
        `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=
                entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=
                MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=
                rb-1.2.1&q=80&w=1080)`;
}


try {
    const cryptoRes = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin")

    if(!cryptoRes.ok) {
        throw Error('Something went wrong')
    }

    const cryptoData = await cryptoRes.json()

    document.getElementById("crypto-top").innerHTML = `
            <img src=${cryptoData.image.small} />
            <span>${cryptoData.name}</span>
        `;

    document.getElementById("crypto").innerHTML += `
            <p>🎯: $${cryptoData.market_data.current_price.usd}</p>
            <p>👆: $${cryptoData.market_data.high_24h.usd}</p>
            <p>👇: $${cryptoData.market_data.low_24h.usd}</p>
        `
} catch(err) {
    console.error(err)
}


const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    document.querySelector('.time').textContent = formattedTime;
}

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(async position => {
    try {
        const weatherRes = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        if(!weatherRes.ok) {
            throw Error('Weather data not available')
        }

        const weatherData = await weatherRes.json()
        const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
        const temp = Math.round(weatherData.main.temp);
        document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(weatherData.main.temp)}º</p>
                <p class="weather-city">${weatherData.name}</p>
            `
    } catch(err) {
        console.error(err)
    }

})
