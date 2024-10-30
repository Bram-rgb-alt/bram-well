let btnContainer = document.querySelector(".btn-container");
let btnNext = document.querySelector(".btn-next");
let btnMessage = document.querySelector(".btn-message");

var audio = new Audio(musik);
audio.autoplay = false;
audio.loop = true;

const openBtn = document.querySelector(".lope");
let bgC = document.querySelector(".background");

openBtn.addEventListener("click", () => {
  open = document.querySelector(".open");
  open.classList.add("zoom-in");
  setTimeout(function () {
    open.remove();
  }, 1500);
  setTimeout(tanyaMusik, 500);
});

function createContent() {
  const mainC = document.querySelector(".main-content");
  for (let i = 0; i < konten.length; i++) {
    const contentE = document.createElement("div");
    contentE.classList.add("content", `content${i}`);
    contentE.innerHTML = `
        <div class="foto-container">
          <img src="${konten[i].foto}" class="foto" />
          <img src="${konten[i].stiker1}" class="stiker stiker1" />
          <img src="${konten[i].stiker2}" class="stiker stiker2" />
          <img src="./assets/img/lop2.png" class="tape tape1" />
          <img src="./assets/img/lop2.png" class="tape tape2" />
          
        </div>
        <div class="text-container text-container${i}">
          <p class="text text${i}"></p>
        </div>`;
    mainC.insertBefore(contentE, btnContainer);
  }
}
createContent();

function typing(elem, teks, scroll, after) {
  let i = 0;
  let speed = 50;
  let txtsatu = teks;
  function typeWriter() {
    if (i < txtsatu.length) {
      if (txtsatu.charAt(i) == "#") {
        document.querySelector(elem).innerHTML += "<br>";
      } else {
        document.querySelector(elem).innerHTML += txtsatu.charAt(i);
      }
      document.querySelector(scroll).scrollTop =
        document.querySelector(scroll).scrollHeight;

      i++;
      setTimeout(typeWriter, speed);
    } else {
      after();
    }
  }
  typeWriter();
}
let ind = 0; // All
let indUcapan = 0;
function nextContent() {
  if (ind < konten.length) {
    const indc = ind;

    setTimeout(() => {
      document.querySelector(`.content${indc}`).classList.add("show");
      setTimeout(() => {
        typing(
          `.text${indc}`,
          konten[indUcapan].ucapan,
          `.text-container${indc}`,
          () => {}
        );
        indUcapan++;
      }, 500);
    }, 0);

    if (ind > 0) {
      document.querySelector(`.content${ind - 1}`).classList.remove("show");
    }

    ind++;

    if (ind == konten.length) {
      btnContainer.classList.remove("show");

      setTimeout(() => {
        btnContainer.classList.add("show");

        btnNext.classList.remove("show");
        btnMessage.classList.add("show");
      }, 500);
    }
  }
}
btnNext.addEventListener("click", nextContent);

const swalo = Swal.mixin({ allowOutsideClick: false });

function start() {
  tampilLope();
  setTimeout(nextContent, 500);
  setTimeout(() => {
    btnContainer.classList.add("show");
  }, 2000);
}

btnMessage.onclick = kirimpesan;

function tampilLope() {
  bgLove = document.querySelector(".bg-love");
  x = innerWidth / 15;
  for (i = 0; i < x; i++) {
    delay = Math.random() * 5 + "s";
    durasi = Math.random() * (7 - 3) + 3 + "s";

    var div = document.createElement("div");
    div.setAttribute(
      "style",
      "animation-delay: " + delay + ";animation-duration: " + durasi
    );
    //<i class="love material-icons-sharp"> favorite </i>
    div.innerHTML = '<i class="love material-icons-sharp"> favorite </i>';
    console.log(i);

    bgLove.appendChild(div);
  }
}

window.onload = function () {
  document.querySelector(".preload").remove();
};
