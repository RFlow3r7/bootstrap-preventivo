//recuperare input del nome
const nomeElement = document.getElementById("InputName");
//recuperare input del cognome
const cognomeElement = document.getElementById("LastName");

//recuperare input dell'email
const emailElement = document.getElementById("Email");

//recuperare input del tipo di lavoro
const selectJobElement = document.getElementById("SelezionaLavoro");

//recuperare input del codice promozionale
const codicePromoElement = document.getElementById("Code");

//recuperare il form del preventivo
const formElement = document.getElementById("preventivoForm");

//prezzo finale
const prezzoFinaleHTML = document.getElementById("price");

//Generare il messaggio di errore per il codice promozionale
const codeErrorElement = document.getElementById("codeError");

//aggiungi un event listener al form (Tasto submit per richiedere il preventivo)
formElement.addEventListener("submit", function (e) {
    e.preventDefault(); // previene il comportamento predefinito del form 

    //validazione dei campi del form
    formElement.classList.add("was-validated");

    //recupera i valori dai campi del form
    const nome = nomeElement.value;
    const cognome = cognomeElement.value;
    const email = emailElement.value;
    const selectJob = selectJobElement.value;
    const codicePromo = codicePromoElement.value;

    console.log(nome, cognome, email, selectJob, codicePromo);

    //calcolare il prezzo in base al tipo di lavoro selezionato
    let prezzo = 0;
    const oreLavorate = 8;

    switch (selectJob) {
        case "Frontend Development":
            prezzo = oreLavorate * 20.5;
            break;
        case "Backed Development":
            prezzo = oreLavorate * 15.3;
            break;
        case "Project Analysis":
            prezzo = oreLavorate * 33.6;
            break;
        default:
            console.log("Nessun lavoro selezionato");
    }

    //validazione del codice promozionale
    const codiciPromozionali = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
    let sconto = 0;

    if (codiciPromozionali.includes(codicePromo)) {
        sconto = prezzo * 25 / 100;
        codeErrorElement.innerHTML = "Il codice promo inserito è valido";
    } else {
        console.log("Il codice promozionale inserito non è valido");
        codeErrorElement.innerHTML = "Il codice promo inserito non è valido";
    }

    //calcolare il prezzo finale 
    const prezzoFinale = prezzo - sconto;

    //aggiornare l'elemento HTML con il prezzo finale
    prezzoFinaleHTML.innerHTML = `<span>${prezzoFinale.toFixed(2)} €</span>`;
});
