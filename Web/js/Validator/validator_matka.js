$(document).ready(function() {

    $("#form-matka-info").validate({
        rules: {
            titul: {
                emptyOrMaxFive: true
            },
            meno: {
                emptyOrOnlyLetters: true
            },
            priezvisko: {
                emptyOrOnlyLetters: true
            },
            rodneCislo: {
                emptyOrRodneCislo: true
            },
            cisloObcPreukaz: {
                emptyOrOnlyLettersAndNumbers: true
            },
            statnaPrislusnost: {
                emptyOrOnlyLetters: true
            },
            telefon: {
                emptyOrPhoneNumber: true
            },
            email: {
                emptyOrEmail: true
            },
            psc: {
                emptyOrPsc: true
            }
        }
    });

    $("#nextButton").click(function(e) {
        e.preventDefault();

        var validationValue = 0;
        var inputs = document.getElementsByTagName("input");
        var inputsList = Array.prototype.slice.call(inputs);

        inputsList.forEach(function(element) {
            if (element.value.length > 0 && $(element).is(":visible") && $(element).valid()) {
                console.log(element.name);
                validationValue += 100 / inputsCount;
            }
        });

        alert(Math.round(validationValue) + " %");
    });

});
