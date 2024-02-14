let suhu = document.querySelector("#input-suhu");
let hasil = document.querySelector("#hasil-suhu");
let rumus = document.querySelector("#kalkulasi-suhu");
let namaSuhu = document.querySelector("#label-suhu");
let hasilSuhu = document.querySelector("#label-hasil")
let ketKalkulasi = document.querySelector("#ket-kalkulasi")

let hitungSuhu = function () {
    if (namaSuhu.innerText == "Celcius" && suhu.value != 0) {
        hasil.value = suhu.value * 9 / 5 + 32;
        rumus.value = suhu.value + "°C * (9/5) + 32";
    } if (namaSuhu.innerText == "Fahrenheit" && suhu.value != 0) {
        hasil.value = (suhu.value - 32) *5 / 9;
        rumus.value =  "(" + suhu.value + "°F - 32) * 5 / 9";
    } if (suhu.value <= 0) {
        hasil.value = ""
        rumus.value = ""
    }else{
        return
    }
}

let resetSuhu = function () {
    suhu.value = ""
    hasil.value = ""
    rumus.value = ""
}

let reverseSuhu = function () {
    if (namaSuhu.innerText == "Celcius") {
        namaSuhu.innerText = "Fahrenheit"
        hasilSuhu.innerText = "Celcius"
        ketKalkulasi.innerText = "Fahrenheit ke Celcius"
    } else {
        namaSuhu.innerText = "Celcius"
        hasilSuhu.innerText = "Fahrenheit"
        ketKalkulasi.innerText = "Celcius ke Fahrenheit"
    }
}