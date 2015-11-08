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
                emptyOrCisloObcianskeho: true
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

});
