// Obfuscated and enhanced security script
(function () {
  "use strict";

  // Anti-debugging technique
  const debugProtect = () => {
    setInterval(() => {
      Function("debugger")();
    }, 50);

    (() => {
      function block() {
        try {
          const all = Object.getOwnPropertyNames(window);
          const re = /./;
          re.toString = () => {
            block();
            return "";
          };
          console.log(re);
        } catch (err) {}
      }
      block();
    })();
  };
  debugProtect();

  // Advanced shortcut prevention
  const preventShortcuts = (() => {
    const blockedKeys = new Set([
      123, // F12
      //   73, // I
      74, // J
      //   85, // U
      67, // C
      //   82, // R
      //83, // S
    ]);

    return function (e) {
      if (
        blockedKeys.has(e.keyCode) ||
        (e.ctrlKey && e.shiftKey) ||
        (e.ctrlKey && blockedKeys.has(e.keyCode)) ||
        (e.metaKey && blockedKeys.has(e.keyCode))
      ) {
        e.stopPropagation();
        e.preventDefault();
        return false;
      }
    };
  })();

  // Enhanced right-click prevention
  const preventContext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  // Advanced inspect prevention
  const preventInspect = (e) => {
    if (
      (e.ctrlKey && e.shiftKey) ||
      (e.metaKey && e.altKey) ||
      (e.ctrlKey &&
        (e.key?.toLowerCase() === "i" ||
          e.key?.toLowerCase() === "c" ||
          e.key?.toLowerCase() === "u" ||
          e.key?.toLowerCase() === "j"))
    ) {
      e.preventDefault();
      e.stopPropagation();
      alert("Akses tidak diizinkan!");
      return false;
    }
  };

  // Enhanced login validation with obfuscation
  const validateLogin = () => {
    const _0x1a2b3c = document.getElementById("username").value;
    const _0x4d5e6f = document.getElementById("password").value;
    const _0x7g8h9i = document.getElementById("errorMessage");

    // Obfuscated credentials check
    const _0xc = (s) => btoa(encodeURIComponent(s));
    const _0xd = _0x1a2b3c === "satutahunsatubulansatuhari" && _0x4d5e6f === "111";

    if (_0xd) {
      _0x7g8h9i.style.color = "yellow";
      _0x7g8h9i.innerText = "Login berhasil! Mengalihkan halaman...";
      setTimeout(() => {
        window.location.href = "Tiarr.html";
      }, 1000);
    } else {
      _0x7g8h9i.textContent = "Username atau password salah!";
    }
  };

  // DevTools detection
  const detectDevTools = () => {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;

    if (widthThreshold || heightThreshold) {
      document.body.innerHTML = "Akses Ditolak";
      return true;
    }
    return false;
  };

  // Initialize all protections
  const initProtection = () => {
    document.onkeydown = preventShortcuts;
    document.addEventListener("contextmenu", preventContext, true);
    document.addEventListener("keydown", preventInspect, true);
    window.addEventListener("resize", detectDevTools);

    // Override common debug functions
    ["debug", "log", "warn", "error", "info", "table"].forEach((method) => {
      console[method] = () => {
        return false;
      };
    });

    // Make validateLogin globally available
    window.validateLogin = validateLogin;
  };

  // Start protection
  initProtection();

  // Additional layer of protection
  setInterval(() => {
    detectDevTools();
  }, 1000);
})();
