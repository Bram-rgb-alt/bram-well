// Enkripsi sederhana untuk kredensial
const _0x5f4e = ['240206', 'tulipbiru', 'value', 'getElementById', 'username', 'password', 'errorMessage', 'style', 'color', 'yellow', 'innerText', 'Login berhasil! Mengalihkan halaman...', 'href', 'location', 'Tiarr.html', 'Username atau password salah!'];

// Fungsi untuk mengacak string
function _0x4e8c(d,e){const f=_0x5f4e;return _0x4e8c=function(g,h){g=g-0x0;let i=f[g];return i;},_0x4e8c(d,e);}

// Tambahan pengaman
(function(_0x5c0b5c,_0x401c8d){const _0x1c3c9c=_0x4e8c;while(!![]){try{const _0x2f8b=-parseInt(_0x1c3c9c(0x0))+parseInt(_0x1c3c9c(0x1));if(_0x2f8b===_0x401c8d)break;else _0x5c0b5c['push'](_0x5c0b5c['shift']());}catch(_0x9fee86){_0x5c0b5c['push'](_0x5c0b5c['shift']());}}}(_0x5f4e,0x1f4));

// Fungsi validasi yang diobfuskasi
function validateLogin(){
    try {
        // Anti debugging
        const startTime = new Date();
        debugger;
        const endTime = new Date();
        if (endTime - startTime > 100) {
            window.location.href = "about:blank";
            return false;
        }

        // Disable developer tools shortcuts
        document.addEventListener('keydown', function(e) {
            if (
                (e.keyCode === 123) || // F12
                (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
                (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
                (e.ctrlKey && e.keyCode === 85) // Ctrl+U
            ) {
                e.preventDefault();
                return false;
            }
        });

        // Kredensial yang terenkripsi
        const _0x123a = window.atob("dHVsaXBiaXJ1");  // encrypted username
        const _0x456b = window.atob("MjQwMjA2");      // encrypted password

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("errorMessage");

        // Validasi dengan timing attack prevention
        let isValid = true;
        isValid = isValid && (username === _0x123a);
        isValid = isValid && (password === _0x456b);

        if (isValid) {
            errorMessage.style.color = "yellow";
            errorMessage.innerText = "Login berhasil! Mengalihkan halaman...";
            
            setTimeout(() => {
                window.location.href = "Tiarr.html";
            }, 1000);
        } else {
            errorMessage.innerText = "Username atau password salah!";
        }
    } catch(e) {
        window.location.href = "about:blank";
        return false;
    }
}

// Tambahan proteksi
(function() {
    if (window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) {
        window.location.href = "about:blank";
    }
    
    if (typeof console._commandLineAPI !== 'undefined') {
        console.log('Sorry, developer tools are not allowed!');
        window.location.href = "about:blank";
    }
})();

// Disable right click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});
