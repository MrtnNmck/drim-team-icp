$(document).ready(function() {

    function createProgressBarBadge(colorClassName, value) {

        var span = document.createElement("span");

        span.className = "badge " + colorClassName;
        span.innerText = value + " %";

        return span;
    }

    function getProgressBarBadgeColor(value, allRequiredInputsAreFilledValue) {

        if (allRequiredInputsAreFilledValue === 'true')
            return "progress-bar-success";
        else if (allRequiredInputsAreFilledValue === 'false' && value > 0)
            return "progress-bar-warning";
        else
            return "progress-bar-default";

        /*if (value == 100) {
            return "progress-bar-success";
        } else if (value < 100 && value >= 60) {
            return "progress-bar-attention";
        } else if (value < 60 && value >= 25) {
            return "progress-bar-warning";
        } else if (value < 25 && value > 0) {
            return "progress-bar-danger";
        } else {
            return "progress-bar-default";
        }*/
    }

    function initProgressBar() {

        var progressBar = document.getElementById("progress-bar");

        var aInputs = progressBar.getElementsByTagName("a");
        var aInputsList = Array.prototype.slice.call(aInputs);

        aInputsList.forEach(function(progressBarPart) {
            var href = progressBarPart.getAttribute("href");

            if (href === "rekapitulacia.html") {
                return;
            }

            var progressBarValue = localStorage.getItem("progress-bar." + href);
            var value = progressBarValue === null ? 0 : localStorage.getItem("progress-bar." + href);
            var allRequiredInputsAreFilledValue = progressBarValue === null ? false : localStorage.getItem("progress-bar." + href + ".allRequiredInputsAreFilled");
            var badge = createProgressBarBadge(getProgressBarBadgeColor(value, allRequiredInputsAreFilledValue), value);

            progressBarPart.appendChild(badge);
        });
    }

    initProgressBar();

});
