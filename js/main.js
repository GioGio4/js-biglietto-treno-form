// VARIABILI

const price_km = 0.21;

const user_age = (document.getElementById("user-age"));
console.log(typeof user_age);

const user_km = (document.getElementById("user-km"));
console.log(typeof user_km);

const submit_button = document.querySelector("#my-button")


// FUNZIONI

submit_button.addEventListener(

    "click",
    function () {

        let outpout_msg = (user_km.value * price_km);
        document.getElementById("price-bill").innerHTML = (outpout_msg);
    }


)

