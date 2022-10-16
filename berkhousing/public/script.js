const selectBtn = document.querySelectorAll(".select-btn"),
  items = document.querySelectorAll(".item");

// selectBtn.addEventListener("click", () => {
//     selectBtn.classList.toggle("open");
// });

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked"),
      btnText = document.querySelector(".btn-text");
  });
});
selectBtn.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
