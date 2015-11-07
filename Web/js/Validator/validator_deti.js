$(document).ready(function() {

    $("#form-deti-info").validate({
        rules: {
            meno: {
                emptyOrOnlyLetters: true
            },
            priezvisko: {
                emptyOrOnlyLetters: true
            },
            rodneCislo: {
                emptyOrRodneCislo: true
            }
        }
    });

});
