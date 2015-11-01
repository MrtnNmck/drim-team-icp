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

        var radioDiv = null;
        var inputCounter = 0;
        var validInputCounter = 0;

        inputsList.forEach(function(element) {
            if ($(element).is(":radio") && $(element).is(":visible")) {
                if (!($(element).closest("div").is(radioDiv))) {
                    radioDiv = $(element).closest("div");
                    inputCounter++;
                    validInputCounter++;
                } else {
                    return;
                }
            } else if ($(element).is(":visible")) {
                if (element.value.length > 0 && $(element).valid()) {
                    inputCounter++;
                    validInputCounter++;
                } else {
                    inputCounter++;
                }
            }
        });

        validationValue = Math.round(100 / inputCounter * validInputCounter);
        //alert(Math.round(validationValue) + " %");

        createCookie("progress-bar." + getCurrentFileName(), validationValue, 1);

        if ($("#" + e.currentTarget.dataset.submit).valid()) {
            window.location.href = (e.currentTarget.href);
        }
    });

});
