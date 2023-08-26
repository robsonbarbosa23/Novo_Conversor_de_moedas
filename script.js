const convertButton = document.querySelector(".convert-button")
const currencyConverted = document.querySelector(".currency-converted")
const currencyToConvert = document.querySelector(".currency-to-convert")

function convertValues() {
    const enteredValue = document.querySelector(".entered-value").value
    const valueToConvert = document.querySelector(".value-to-convert")
    const valueConverted = document.querySelector(".value-converted")

    

    const realToDolar = enteredValue * 0.21
    const realToEuro = enteredValue * 0.19
    const realToLibra = enteredValue * 0.16

    const dolarToReal = enteredValue * 4.87
    const dolarToEuro = enteredValue * 0.93
    const dolarToLibra = enteredValue * 0.79

    const euroToReal = enteredValue * 5.26
    const euroToDolar = enteredValue * 1.08
    const euroToLibra = enteredValue * 0.86

    const libraToReal = enteredValue * 6.13
    const libraToDolar = enteredValue * 1.26
    const libraToEuro = enteredValue * 1.17


    //------------------------------------------------------seção de REAL para DOLAR / EURO / LIBRA-----------------------------------------------------//

    if (currencyToConvert.value == "real" && currencyConverted.value == "dolar") {
        valueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(enteredValue)
        //....................................//
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(realToDolar)

    } else if (currencyToConvert.value == "real" && currencyConverted.value == "euro") {
        valueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(enteredValue)
        //....................................//
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(realToEuro)

    } else if (currencyToConvert.value == "real" && currencyConverted.value == "libra") {
        valueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(enteredValue)
        //....................................//
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(realToLibra)

        //------------------------------------seção de DOLAR para REAL / EURO / LIBRA-----------------------------------------------------------------------//

    } else if (currencyToConvert.value == "dolar" && currencyConverted.value == "real") {
        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(enteredValue)
        //....................................//
        valueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(dolarToReal)

    } else if (currencyToConvert.value == "dolar" && currencyConverted.value == "euro") {
        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(enteredValue)
        //....................................//
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(dolarToEuro)

    } else if (currencyToConvert.value == "dolar" && currencyConverted.value == "libra") {
        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(enteredValue)
        //....................................//
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(dolarToLibra)
    }

    //------------------------------------seção de EURO para REAL / DOLAR / LIBRA-----------------------------------------------------------------------//
    else if (currencyToConvert.value == "euro" && currencyConverted.value == "real") {
        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(enteredValue)
        //....................................//
        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(euroToReal)

    } else if (currencyToConvert.value == "euro" && currencyConverted.value == "dolar") {
        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(enteredValue)
        //....................................//
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(euroToDolar)

    } else if (currencyToConvert.value == "euro" && currencyConverted.value == "libra") {
        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(enteredValue)
        //....................................//
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(euroToLibra)
    }

    //-------------------------------------------seção de LIBRA para REAL / DOLAR / EURO----------------------------------------------------------------//
    
    else if (currencyToConvert.value == "libra" && currencyConverted.value == "real") {
        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(enteredValue)
        //....................................//
        valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(libraToReal)

    } else if (currencyToConvert.value == "libra" && currencyConverted.value == "dolar") {
        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(enteredValue)
        //....................................//
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(libraToDolar)

    } else if (currencyToConvert.value == "libra" && currencyConverted.value == "euro") {
        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(enteredValue)
        //....................................//
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(libraToEuro)
    }
}

function changeValue() {
    const imgConverted = document.querySelector(".img-converted")
    const imgToConvert = document.querySelector(".img-to-convert")
    const nameConverted = document.querySelector(".name-converted")
    const nameToConvert = document.querySelector(".name-to-convert")

    //------------------------------------------------------seção de REAL para DOLAR / EURO / LIBRA-----------------------------------------------------//

    if (currencyToConvert.value == "real" && currencyConverted.value == "dolar") {
        imgToConvert.src = "assets/img/brasil.png"
        nameToConvert.innerHTML = "Real Brasileiro"

        imgConverted.src = "assets/img/dolar.png"
        nameConverted.innerHTML = "Dólar Americano"

    } else if (currencyToConvert.value == "real" && currencyConverted.value == "euro") {
        imgToConvert.src = "assets/img/brasil.png"
        nameToConvert.innerHTML = "Real Brasileiro"

        imgConverted.src = "assets/img/euro.png"
        nameConverted.innerHTML = "Euro"

    } else if (currencyToConvert.value == "real" && currencyConverted.value == "libra") {
        imgToConvert.src = "assets/img/brasil.png"
        nameToConvert.innerHTML = "Real Brasileiro"

        imgConverted.src = "assets/img/libra.png"
        nameConverted.innerHTML = "Libra"

        //------------------------------------seção de DOLAR para REAL / EURO / LIBRA-----------------------------------------------------------------------//        

    } else if (currencyToConvert.value == "dolar" && currencyConverted.value == "real") {
        imgToConvert.src = "assets/img/dolar.png"
        nameToConvert.innerHTML = "Dólar Americano"

        imgConverted.src = "assets/img/brasil.png"
        nameConverted.innerHTML = "Real"

    } else if (currencyToConvert.value == "dolar" && currencyConverted.value == "euro") {
        imgToConvert.src = "assets/img/dolar.png"
        nameToConvert.innerHTML = "Dólar Americano"

        imgConverted.src = "assets/img/euro.png"
        nameConverted.innerHTML = "Euro"

    } else if (currencyToConvert.value == "dolar" && currencyConverted.value == "libra") {
        imgToConvert.src = "assets/img/dolar.png"
        nameToConvert.innerHTML = "Dólar Americano"

        imgConverted.src = "assets/img/libra.png"
        nameConverted.innerHTML = "Libra"
    }

    //------------------------------------seção de EURO para REAL / DOLAR / LIBRA-----------------------------------------------------------------------//
    else if (currencyToConvert.value == "euro" && currencyConverted.value == "real") {
        imgToConvert.src = "assets/img/euro.png"
        nameToConvert.innerHTML = "Euro"

        imgConverted.src = "assets/img/brasil.png"
        nameConverted.innerHTML = "Real"

    } else if (currencyToConvert.value == "euro" && currencyConverted.value == "dolar") {
        imgToConvert.src = "assets/img/euro.png"
        nameToConvert.innerHTML = "Euro"

        imgConverted.src = "assets/img/dolar.png"
        nameConverted.innerHTML = "Dólar americano"

    } else if (currencyToConvert.value == "euro" && currencyConverted.value == "libra") {
        imgToConvert.src = "assets/img/euro.png"
        nameToConvert.innerHTML = "Euro"

        imgConverted.src = "assets/img/libra.png"
        nameConverted.innerHTML = "Libra"
    }

    //------------------------------------seção de LIBRA para REAL / DOLAR / EURO-----------------------------------------------------------------------//
    else if (currencyToConvert.value == "libra" && currencyConverted.value == "real") {
        imgToConvert.src = "assets/img/libra.png"
        nameToConvert.innerHTML = "Libra"

        imgConverted.src = "assets/img/brasil.png"
        nameConverted.innerHTML = "Real"

    } else if (currencyToConvert.value == "libra" && currencyConverted.value == "dolar") {
        imgToConvert.src = "assets/img/libra.png"
        nameToConvert.innerHTML = "Libra"

        imgConverted.src = "assets/img/dolar.png"
        nameConverted.innerHTML = "Dólar americano"

    } else if (currencyToConvert.value == "libra" && currencyConverted.value == "euro") {
        imgToConvert.src = "assets/img/libra.png"
        nameToConvert.innerHTML = "Libra"

        imgConverted.src = "assets/img/euro.png"
        nameConverted.innerHTML = "Euro"
    }  
       
    convertValues()
}


convertButton.addEventListener("click", convertValues)
currencyConverted.addEventListener("change", changeValue)