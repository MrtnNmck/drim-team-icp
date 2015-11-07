$( document ).ready(function() {
    // Characters with accent
    var accentedChars = "áäčéěďíĺľňôŕřšťúýž";

    // =============== CUSTOM RULES FOR VALIDATION ===============
    $.validator.addMethod("emptyOrMaxFive", function(value, element) {
        return this.optional(element) || value.length <= 5;
    }, "Vypĺňané pole musí byť prázdne alebo maximálne 5 znakov.");

    $.validator.addMethod("emptyOrOnlyLetters", function(value, element) {
        var regex = new RegExp("^[a-zA-Z" + accentedChars + "]+$");
        return this.optional(element) || value.length === 0 || regex.test(value);
    }, "Vypĺňané pole môže obsahovať iba písmena.");

    $.validator.addMethod("emptyOrRodneCislo", function(value, element) {
        return this.optional(element) || value.length === 0 || /^\d{6}\/\d{4}$/.test(value);
    }, "Vypĺňané pole musí byť v tvare xxxxxx / xxxx.");

    $.validator.addMethod("emptyOrOnlyLettersAndNumbers", function(value, element) {
        var regex = new RegExp("^[A-Za-z" + accentedChars + "\\d]+$");
        return this.optional(element) || value.length === 0 || regex.test(value);
    }, "Vypĺňané pole môže obsahovať iba písmena a číslice.");

    $.validator.addMethod("emptyOrPhoneNumber", function(value, element) {
        return this.optional(element) || value.length === 0 || /^\+?\d+\/?[\d\s]+$/.test(value);
    }, "Vypĺňané pole musí obsahovať telefónne číslo.");

    $.validator.addMethod("emptyOrEmail", function(value, element) {
        return this.optional(element) || value.length === 0 || /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(value);
    }, "Vypĺňané pole musí obsahovať email.");

    $.validator.addMethod("emptyOrPsc", function(value, element) {
        return this.optional(element) || value.length === 0 || /^\d{3}[/\s-]?\d{2}/.test(value);
    }, "Vypĺňané pole musí obsahovať platné PSČ.");

    $.validator.addMethod("emptyOrIBAN", function(value, element) {
        return this.optional(element) || value.length === 0 || IBAN.isValid(value);
    }, "Vypĺňané pole musí obsahovať platné IBAN číslo podľa špecifikácie pre danú krajinu.");

    $.validator.addMethod("emptyOrSwift", function(value, element) {
        return this.optional(element) || value.length === 0 || /[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?/i.test(value);
    }, "Vypĺňané pole musí obsahovať validný Swift kód.");

    $.validator.setDefaults({
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
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

        localStorage.setItem("progress-bar." + getCurrentFileName(), validationValue);

        serializeForm($("form")[0].id);

        if ($("#" + e.currentTarget.dataset.submit).valid()) {
            window.location.href = (e.currentTarget.href);
        }
    });

    $('#confirmButton').on('click', function () {
        if (!allRequiredInputsAreFilled()) {
            $('#modalDanger').modal('show');
        } else {
            $('#modalSuccess').modal('show');
        }
    });

});

function getCurrentFileName() {
    return document.location.pathname.match(/[^\/]+$/)[0];
}

function allRequiredInputsAreFilled() {

    for (var obj in localStorage) {
        if (/^form\.*/.test(obj)) {
            var formInputs = JSON.parse(localStorage.getItem(obj));

            for (var indx in formInputs) {
                var input = formInputs[indx];
                
                if (input.visible && input.required && (input.value === "" || input.value === null)) {
                    return false;
                }
            }
        }
    }

    return true;
}
