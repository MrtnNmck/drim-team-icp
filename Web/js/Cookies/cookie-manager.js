// Creates new Cookie with name, value and expirationDays
function createCookie(name, value, expirationDays) {
    var expires = null;
    var date = new Date();

    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

// Gets value of Cookie with specified name
function getCookie(name) {
    var cookieName = name + "=";

    document.cookie.split(';').forEach(function(cookiePart) {
        while (cookiePart.charAt(0) == ' ') {
            cookiePart = cookiePart.substring(1);
        }

        if (cookiePart.indexOf(cookieName) == 0) {
            return cookiePart.substring(cookieName.length, cookiePart.length);
        }
    });

    return null;
}

// Checks if Cookie with specified name is set
function checkCookie(name) {
    var cookie = getCookie(name);

    if (cookie != null) {
        return true;
    } else {
        return false;
    }
}
