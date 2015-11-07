$(document).ready(function() {

    $("#form-platba-info").validate({
        rules: {
            majtelUctu: {
                emptyOrOnlyLetters: true
            },
            iban: {
                emptyOrIBAN: true
            },
            swift: {
                emptyOrSwift: true
            },
            psc: {
                emptyOrPsc: true
            }
        }
    });

});
