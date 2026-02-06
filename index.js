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


fetch('https://www.coingecko.com/api/v3/coins')
    .then(res => res.json())
    .then(data => console.log(data))
