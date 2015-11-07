$(document).ready(function() {

    $("#form-novorodenec-info").validate({
        rules: {
            meno: {
                emptyOrOnlyLetters: true
            },
            priezvisko: {
                emptyOrOnlyLetters: true
            },
            rodneCislo: {
                emptyOrRodneCislo: true
            },
            statnaPrislusnost: {
                emptyOrOnlyLetters: true
            },
            psc: {
                emptyOrPsc: true
            }
        }
    });

});
