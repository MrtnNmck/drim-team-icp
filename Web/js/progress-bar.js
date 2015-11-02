$(document).ready(function() {

    function createProgressBarBadge(colorClassName, value) {

        var span = document.createElement("span");

        span.className = "badge " + colorClassName;
        span.innerText = value + " %";

        return span;
    };

    function getProgressBarBadgeColor(value) {

        if (value == 100) {
            return "progress-bar-success";
        } else if (value < 100 && value >= 75) {
            return "progress-bar-attention";
        } else if (value < 75 && value >= 50) {
            return "progress-bar-warning";
        } else if (value < 50 && value > 0) {
            return "progress-bar-danger";
        } else {
            return "progress-bar-default";
        }
    };

    function initProgressBar() {

        var progressBar = document.getElementById("progress-bar");

        var aInputs = progressBar.getElementsByTagName("a");
        var aInputsList = Array.prototype.slice.call(aInputs);

        aInputsList.forEach(function(progressBarPart) {
            var isCookieSet = checkCookie("progress-bar." + progressBarPart.getAttribute("href"));
            var value = isCookieSet ? getCookie("progress-bar." + progressBarPart.getAttribute("href")) : 0;
            var badge = createProgressBarBadge(getProgressBarBadgeColor(value), value);

            progressBarPart.appendChild(badge);
        });
    }

    initProgressBar();

});
