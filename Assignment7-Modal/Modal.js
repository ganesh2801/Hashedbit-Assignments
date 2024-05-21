const modal = document.getElementById("myModal");
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
function saveChanges() {
  console.log("Changes saved!");
  closeModal();
}
function cancel() {
  console.log("Changes discarded!");
  closeModal();
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}