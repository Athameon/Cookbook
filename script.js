function displayHideDetails(id, buttonId) {
  let parent = document.getElementById(id);
  if (parent != null) {
    let details = parent.querySelector('.recipe_details');
    console.log(details.style.opacity);
    console.log(buttonId);
    if (details.style.opacity > 0) {
      details.style.opacity = 0;
      details.style.height = 0;
      document.getElementById(buttonId).textContent = "Display"
    } else {
      details.style.opacity = 1;
      details.style.height = 'auto';
      document.getElementById(buttonId).textContent = "Hide"
      
      scrollToId(id);
    }
  }
}

function scrollToId(id) {
  document.getElementById(id).scrollIntoView();
}