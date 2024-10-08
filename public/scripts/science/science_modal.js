// Select all images with class "image-clickable"
const images = document.querySelectorAll(".image-clickable");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");

// Add click event to each image
images.forEach((img) => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src; // Use the clicked image's source for the modal
  };
});

// Close modal on click of 'X'
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside of the image
modal.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
