function serializeForm(formId) {
    var formArray = [];

    $("form#" + formId + " :input").each(function() {
        var input = $(this)[0];

        var obj = {
            id : input.id,
            value : $(this).is(":radio") ? $(this).is(":checked") : input.value,
            required : $(this).parents("div:eq(1)").hasClass("required"),
            visible : $(this).is(":visible")
        };

        formArray.push(obj);
    });

    localStorage.setItem(formId, JSON.stringify(formArray));
}

function deserializeForm(formId) {

    var formArray = JSON.parse(localStorage.getItem(formId));

    if (formArray === null) {
        return;
    }

    formArray.forEach(function(obj) {

        var input = $("#" + obj.id);

        if (input.is(":radio")) {
            input.prop("checked", obj.value);
        } else {
            input.val(obj.value);
        }

    });

}

$( document ).ready(function() {

    deserializeForm($("form")[0].id);

});
