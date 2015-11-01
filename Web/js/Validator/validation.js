var inputsCount = 0;

$( document ).ready(function() {
    // Characters with accent
    var accentedChars = "áäčéěďíĺľňôŕřšťúýž";
    // VALIDATION OF INPUTS
    inputsCount = getVisibleInputsCount();

    // Gets number of visible inputs
    function getVisibleInputsCount() {
        var counter = 0;

        var inputs = document.getElementsByTagName("input");
        var inputsList = Array.prototype.slice.call(inputs);

        var radioDiv = null;

        inputsList.forEach(function(element) {
            if ($(element).is(":visible")) {
                /*if ($(element).is(":radio")) {
                    //alert($(element).closest("div"));
                    if ( !$(element).closest("div").is(radioDiv) ) {
                        radioDiv = $(element).closest("div");
                        counter++;
                    }
                    return;
                }*/

                counter++;
            }
        });

        console.log("Visible inputs: " + counter);
        return counter;
    };

    // =============== CUSTOM RULES FOR VALIDATION ===============
    $.validator.addMethod("emptyOrMaxFive", function(value, element) {
        return this.optional(element) || value.length <= 5;
    }, "Vypĺňané pole musí byť prázdne alebo maximálne 5 znakov.");

    $.validator.addMethod("emptyOrOnlyLetters", function(value, element) {
        var regex = new RegExp("^[a-zA-Z" + accentedChars + "]+$");
        return this.optional(element) || value.length == 0 || regex.test(value);
    }, "Vypĺňané pole môže obsahovať iba písmena.");

    $.validator.addMethod("emptyOrRodneCislo", function(value, element) {
        return this.optional(element) || value.length == 0 || /^\d{6}\/\d{4}$/.test(value);
    }, "Vypĺňané pole musí byť v tvare xxxxxx / xxxx.");

    $.validator.addMethod("emptyOrOnlyLettersAndNumbers", function(value, element) {
        var regex = new RegExp("^[A-Za-z" + accentedChars + "\\d]+$");
        return this.optional(element) || value.length == 0 || regex.test(value);
    }, "Vypĺňané pole môže obsahovať iba písmena a číslice.");

    $.validator.addMethod("emptyOrPhoneNumber", function(value, element) {
        return this.optional(element) || value.length == 0 || /^\+?\d+\/?[\d\s]+$/.test(value);
    }, "Vypĺňané pole musí obsahovať telefónne číslo.");

    $.validator.addMethod("emptyOrEmail", function(value, element) {
        return this.optional(element) || value.length == 0 || /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(value);
    }, "Vypĺňané pole musí obsahovať email.");

    $.validator.addMethod("emptyOrPsc", function(value, element) {
        return this.optional(element) || value.length == 0 || /^\d{3}[/\s-]?\d{2}/.test(value);
    }, "Vypĺňané pole musí obsahovať platné PSČ.");

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
});
