function displayHideDetails(id, buttonId) {
  let parent = document.getElementById(id);
  if (parent != null) {
    let details = parent.querySelector('.recipe_details');
    console.log(details.style.display);
    console.log(buttonId);
    if (details.style.display === "flex") {
      details.style.display = "none";
      document.getElementById(buttonId).textContent = "Display"
    } else {
      details.style.display = "flex";
      document.getElementById(buttonId).textContent = "Hide"
    }
  }
}