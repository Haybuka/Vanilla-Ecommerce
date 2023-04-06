let colors = document.querySelectorAll(".color-changer p");
colors.forEach((color) =>
  color.addEventListener("click", function () {
    console.log(color.className);
    let root = document.querySelector("body");

    console.dir(root);
    switch (color.className) {
      case "red":
        root.classList.remove("blue");
        root.classList.remove("default");
        root.classList.add(color.className);
        break;
      case "blue":
        root.classList.remove("red");
        root.classList.remove("default");

        root.classList.add(color.className);
        break;

      default:
        root.classList.remove("red");
        root.classList.remove("blue");
        root.classList.add(color.className);

        break;
    }
  })
);
