"use strict";

console.log('global');
"use strict";

function Modal(modal, modalBtn, modalClose) {
  var mod = document.querySelector(modal),
      modBtn = document.querySelector(modalBtn),
      modClose = document.querySelector(modalClose);
  modBtn.addEventListener('click', function (e) {
    e.preventDefault();
    mod.style.display = "flex";
    console.log("click");
  });
  modClose.addEventListener('click', function (e) {
    e.preventDefault();
    mod.style.display = "none";
  });
  mod.addEventListener("click", function (e) {
    if (e.target === mod) {
      mod.style.display = "none";
    }
  });
}

Modal('.modal-wrapper', '.modal__btn', '.modal__close');
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
