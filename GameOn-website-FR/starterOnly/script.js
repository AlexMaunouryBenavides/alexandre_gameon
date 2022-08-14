//recuperer valeurs des champs modal
const validation = document.getElementById("validation");
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const mail = document.getElementById("email");
const anniversaire = document.getElementById("birthdate");
const quantite = document.getElementById("quantity");
const ville = document.querySelectorAll('input[name="location"]');
const checkbox1 = document.getElementById("checkbox1");

//recuperation valeurs erreur des champs modal

const prenomError = document.getElementById("firstError");
const nomError = document.getElementById("lastError");
const mailError = document.getElementById("emailError");
const anniversaireError = document.getElementById("birthdateError");
const quantiteError = document.getElementById("quantityError");
const villeError = document.getElementById("cityError");
const checkbox1Error = document.getElementById("checkbox1Error");

//evenement

//regex

const regValidation = /^[a-zA-Z]{2,}$/;
let regexEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//variable validation envoie
validation.addEventListener("click", validationFormulaire);

function validationFormulaire(e) {
  e.preventDefault();
  const prenomValide = validationPrenom();
  const nomValide = validationNom();
  const mailValide = validationMail();
  const anniversaireValide = validationAnniversaire();
  const quantiteValide = validationQuantite();
  const conditionGValide = validationConditionG();
  const villeValide = validationVille();

  if (
    prenomValide &&
    nomValide &&
    mailValide &&
    anniversaireValide &&
    quantiteValide &&
    conditionGValide &&
    villeValide
  ) {
    fermerBlockValidation();
  }
}
//fonction validation prenom

function validationPrenom() {
  const regValid = regValidation.test(prenom.value);
  if (prenom.value === "") {
    prenomError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

    return false;
  } else if (regValid === false) {
    prenomError.innerHTML = "Veuillez entrez des lettres";

    return false;
  }
  prenomError.innerHTML = "";
  return true;
}

//fonction validation nom

function validationNom() {
  const regValid = regValidation.test(nom.value);
  if (nom.value === "") {
    nomError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

    return false;
  } else if (regValid === false) {
    nomError.innerHTML = "Veuillez entrez des lettres";

    return false;
  }
  nomError.innerHTML = "";
  return true;
}

//fonction validation mail

function validationMail() {
  const regValid = regexEmail.test(mail.value);
  if (mail.value === "") {
    mailError.innerHTML = "Vous devez entrer une adresse mail valide.";

    return false;
  } else if (regValid === false) {
    mailError.innerHTML = "Vous devez entrer une adresse mail valide.";

    return false;
  }
  mailError.innerHTML = "";
  return true;
}

//fonction validation anniversaire

function validationAnniversaire() {
  if (anniversaire.value === "") {
    anniversaireError.innerHTML = "Vous devez entrer votre date de naissance.";

    return false;
  }
  anniversaireError.innerHTML = "";
  return true;
}

//fonction validation quantite de tournois

function validationQuantite() {
  if (quantite.value === "") {
    quantiteError.innerHTML = "Information manquante";

    return false;
  }
  quantiteError.innerHTML = "";
  return true;
}

//fonction selection d'une ville obligatoire

function validationVille() {
  for (let i = 0; i < ville.length; i++) {
    if (ville[i].checked) {
      villeError.innerHTML = "";
      return true;
    }
  }
  villeError.innerHTML = "Veuillez selectioner un lieu";
  return false;
}

//fonction obligation condition general

function validationConditionG() {
  if (!checkbox1.checked) {
    checkbox1Error.innerHTML =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
  } else {
    checkbox1Error.innerHTML = "";
    return true;
  }
}

// Message de validation d'envoie du formulaire

function fermerBlockValidation() {
  const blockValidation = document.getElementById("validation_message");
  const blockForm = document.getElementById("form");
  blockValidation.style.display = "block";
  blockForm.style.display = "none";
}
