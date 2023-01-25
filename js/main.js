// VARIABILI

const price_km = 0.21;

const user_name = (document.getElementById("user-name"));

const user_age = (document.getElementById("user-age"));
// console.log(typeof user_age);

const user_km = (document.getElementById("user-km"));
// console.log(typeof user_km);

const submit_button = document.querySelector("#my-button")


// FUNZIONI

submit_button.addEventListener(

    "click",
    function () {

        // Sconto Young
        if (user_age.value < 18) {

            let discount_young = ((price_km * user_km.value) * 20 / 100);
            console.log("sconto young " + discount_young);

            let outpout_msg = (user_km.value * price_km) - discount_young;
            document.getElementById("price-bill").innerHTML = ("€ " + outpout_msg.toFixed(2));
        }

        // Sconto Over
        else if (user_age.value > 65) {

            let discount_over = ((price_km * user_km.value) * 40 / 100);
            console.log("sconto over " + discount_over);

            let outpout_msg = (user_km.value * price_km) - discount_over;
            document.getElementById("price-bill").innerHTML = ("€ " + outpout_msg.toFixed(2));

        }

        // Nessuno sconto
        else {
            let outpout_msg = (user_km.value * price_km);
            document.getElementById("price-bill").innerHTML = ("€ " + outpout_msg.toFixed(2));
        }

        document.getElementById("bill-name").innerHTML = (user_name.value);
    }


)

