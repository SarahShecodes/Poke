function getRecipe() {
  let name = prompt("What's your name?");
  let email = prompt("What's your email address?");
  let trial = prompt("Have you ever tried Poke?");
  let heading = document.querySelector("h1");
  trial = trial.toLowerCase();
  if (trial === "yes") {
    heading.innerHTML =
      " That's awesome " + name + " check your inbox to get the recipe ! 🥗 ";
  } else {
    heading.innerHTML =
      "Too bad for you " + name + ", check your inbox to get the recipe ! 🥗";
  }
}
let recipeButton = document.querySelector(".recipe-button");
recipeButton.addEventListener("click", getRecipe);
