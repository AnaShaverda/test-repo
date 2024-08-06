box = document.getElementById("box");
text = document.querySelector(".text");
navigation = document.querySelector(".nav");
clickBtn = document.getElementById("clickBtn");

const chanegColor = () => {
  box.addEventListener("click", (event) => {
    event.target.classList.toggle("dark");
    text.classList.toggle("dark");
  });
};

chanegColor();

clickBtn.addEventListener("click", () => {
  console.log("loged");
  navigation.classList.toggle("show");
});
