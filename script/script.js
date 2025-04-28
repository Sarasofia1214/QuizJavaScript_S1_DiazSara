async function llamarAPI(){
    let xhr = new XMLHttpRequest;
    let link = 'http://api.weatherapi.com/v1/forecast.json?key=7fa91e3603824aa9bd8115416252804&q=Floridablanca&lang=es&dt=2025-05-05';
    xhr.open("GET", link, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            let data = JSON.parse(xhr.responseText)
            let retornar=document.getElementById("city")
            retornar.innerHTML = `<p>${data["location"]["name"]}</p>`
            console.log(retornar)
        }
    }
}

llamarAPI();