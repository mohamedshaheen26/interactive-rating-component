let rating = document.querySelectorAll(".rating"),
  rates = document.querySelectorAll(".rating span"),
  submit = document.getElementById("submit"),
  state = document.querySelector(".state"),
  stateRate = document.querySelector(".state span"),
  rateAgain = document.querySelector(".rateAgain");

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rates.forEach((e) => {
      e.classList.remove("acrive");
    });
    rate.classList.add("acrive");
    submit.onclick = () => {
      submit.parentElement.style.display = "none";
      state.style.display = "flex";
      stateRate.textContent = `You selected ${rate.innerText} out of 5`;
    };
    rateAgain.onclick = () => {
      rateAgain.parentElement.style.display = "none";
      submit.parentElement.style.display = "block";
    };
  });
});
