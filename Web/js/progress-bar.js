$(document).ready(function() {

    function createProgressBarBadge(colorClassName, value) {

        var span = document.createElement("span");

        span.className = "badge " + colorClassName;
        span.innerText = value + " %";

        return span;
    };

    function getProgressBarBadgeColor(value) {

        if (value == 100) {
            return "alert-success";
        } else if (value < 100 && value >= 65) {
            return "alert-warning";
        } else if (value < 65 && value >= 25) {
            return "alert-info";
        } else if (value < 25 && value > 0) {
            return "alert-danger";
        } else {
            return "alert-default";
        }
    };

    function initProgressBar() {

        var progressBar = document.getElementById("progress-bar");

        var aInputs = progressBar.getElementsByTagName("a");
        var aInputsList = Array.prototype.slice.call(aInputs);

        aInputsList.forEach(function(progressBarPart) {
            var isCookieSet = checkCookie("progress-bar." + progressBarPart.getAttribute("href"));
            var value = isCookieSet ? getCookie("progress-bar." + progressBarPart.getAttribute("href") : 0;
            var badge = createProgressBarBadge(getProgressBarBadgeColor(value), value);

            progressBarPart.appendChild(badge);
        });
    }

    initProgressBar();

});
