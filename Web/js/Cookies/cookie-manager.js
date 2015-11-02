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
    var value = null;

    document.cookie.split(';').forEach(function(cookiePart) {
        if (value == null) {
            while (cookiePart.charAt(0) == ' ') {
                cookiePart = cookiePart.substring(1);
            }

            if (cookiePart.indexOf(cookieName) == 0) {
                value = cookiePart.substring(cookieName.length, cookiePart.length);
            }
        }
    });

    return value;
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

function deleteAllCookies() {

    document.cookie.split(";").forEach(function(cookie) {
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    });
}
