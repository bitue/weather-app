let long;
let lat;


window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude
            console.log(long, lat)
            const proxy = `https://cors-anywhere.herokuapp.com/`
            const url = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`
            fetch(url)
                .then(res => res.json())
                .then(data => displayData(data))
        })
    }
})

let add = document.getElementById("add")



const displayData = (data) => {

    console.log(data)
    let div = document.createElement('div')
   

    div.innerHTML = `
    <div class="des space-y-5">
    <h1 class="text-3xl font-bold  ">${data.currently.icon}</h1>
        <h2 class="text-2xl font-bold  ">Time Zone:${data.timezone}</h2>
        <h2 class="text-2xl font-bold  ">Temperature:${data.currently.temperature}F</h2>
        <p class="text-2xl font-bold  ">Summary:${data.currently.summary}</p>
        <p class="text-1xl font-bold text-red-600 "> your position latitude:${data.latitude} and Longitude:${data.longitude} </p>


    </div>


 `
    add.appendChild(div)

}