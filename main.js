const body = document.body
const Menu = {
  open: function () {
    body.classList.add("menu-open")
  },
  close: function () {
    body.classList.remove("menu-open")
  },
}

document.onkeydown = function (event) {
  if (event.key == "Escape") {
    Menu.close()
  }
}
