async function clima (){
    let response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=7fa91e3603824aa9bd8115416252804&q=Floridablanca&lang=es&dt=2025-05-05')
    let data = await response.json();

    return data;
}
async function ubicacion (){
    let data = await clima();
    let place = document.getElementById("city");
    let grad=document.getElementById("grades");

    let city = data["location"]["name"];
    let country = data["location"]["country"];
    let grados= data["current"]["temp_c"];

    grad.textContent = (Math.trunc(grados)+"°")
    place.textContent = (city + ', ' + country)

}
ubicacion()


    /*
    let valorClima = document.getElementById("gradosClima")
    let imagenClima = document.getElementById("imagenClima")
    let textoImagenClima = document.getElementById("textoImagenClima")
    let feelsLike = document.getElementById("feelsLike")
    let fechaValor = document.getElementById("fecha")
    let vientoValor = document.getElementById("windSpeedValor")

    let city = data["location"]["name"];
    let country = data["location"]["country"];
    let climaCelsius = data["current"]["temp_c"]
    let urlImagenClima = data["current"]["condition"]["icon"]
    let datosImagenClima = data["current"]["condition"]["text"]
    let sensacion = data ["current"]["feelslike_c"]
    let velocidadAire = data["current"]["wind_kph"]

    const fecha = data["location"]["localtime"];
    const fechaObj = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }

    const fechaHoraTexto = fechaObj.toLocaleString('es-ES', opciones);



    textoUbicacion.textContent = (city + ", " + country);
    valorClima.textContent = (Math.trunc(climaCelsius)+"°")
    imagenClima.src = urlImagenClima
    textoImagenClima.textContent = datosImagenClima
    feelsLike.textContent = ("Feels Like " + Math.trunc(sensacion)+"°")
    fechaValor.textContent = fechaHoraTexto
    vientoValor.textContent = (velocidadAire + "Km/h") 
}

async function ordenDeFunciones() {
    let data = await llamadaApi();
    ubicacion(data);
}

ordenDeFunciones();













/*async function llamarAPI(){
    let xhr = new XMLHttpRequest;
    let link = 'http://api.weatherapi.com/v1/forecast.json?key=7fa91e3603824aa9bd8115416252804&q=Floridablanca&lang=es&dt=2025-05-05';
    xhr.open("GET", link, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            let data = JSON.parse(xhr.responseText)
            let retornar=document.getElementById("city")
            retornar.innerHTML = `<p>${data["location"]["name"]}</p>`
        }
    }
}

llamarAPI();
*/ 