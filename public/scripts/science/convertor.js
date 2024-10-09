// Event listener for mmol/L <-> mg/dL conversion
document
  .getElementById("mmolInputValue")
  .addEventListener("input", function () {
    const mmolLValue = parseFloat(this.value);
    if (!isNaN(mmolLValue) && mmolLValue >= 1 && mmolLValue <= 30) {
      const mgDLValue = (mmolLValue * 18).toFixed(1); // Convert mmol/L to mg/dL
      document.getElementById("mgOutputValue").value = mgDLValue;
      removePopover(this); // Remove popover if value is valid
    } else {
      showPopover(this, "Enter a value between 1 and 30 for mmol/L.");
      document.getElementById("mgOutputValue").value = "";
    }
  });

document.getElementById("mgOutputValue").addEventListener("input", function () {
  const mgDLValue = parseFloat(this.value);
  if (!isNaN(mgDLValue) && mgDLValue >= 18 && mgDLValue <= 540) {
    const mmolLValue = (mgDLValue / 18).toFixed(1); // Convert mg/dL to mmol/L
    document.getElementById("mmolInputValue").value = mmolLValue;
    removePopover(this); // Remove popover if value is valid
  } else {
    showPopover(this, "Enter a value between 18 and 540 for mg/dL.");
    document.getElementById("mmolInputValue").value = "";
  }
});

// Event listener for HbA1c % <-> mmol/mol conversion
document
  .getElementById("percentInputValue")
  .addEventListener("input", function () {
    const percentValue = parseFloat(this.value);
    if (!isNaN(percentValue) && percentValue >= 4 && percentValue <= 15) { // Updated max value to 15%
      const mmolMolValue = ((percentValue - 2.15) * 10.929).toFixed(1); // Convert HbA1c % to mmol/mol
      document.getElementById("mmolOutputValue").value = mmolMolValue;
      removePopover(this); // Remove popover if value is valid
    } else {
      showPopover(this, "Enter a value between 4% and 15% for HbA1c."); // Updated range in message
      document.getElementById("mmolOutputValue").value = "";
    }
  });

document
  .getElementById("mmolOutputValue")
  .addEventListener("input", function () {
    const mmolMolValue = parseFloat(this.value);
    if (!isNaN(mmolMolValue) && mmolMolValue >= 20 && mmolMolValue <= 163) { // Update to accommodate the new range
      const percentValue = (mmolMolValue * 0.09148 + 2.15).toFixed(1); // Convert mmol/mol to HbA1c %
      document.getElementById("percentInputValue").value = percentValue;
      removePopover(this); // Remove popover if value is valid
    } else {
      showPopover(this, "Enter a value between 20 and 163 for mmol/mol."); // Updated range in message
      document.getElementById("percentInputValue").value = "";
    }
  });

// Function to show a popover on an element
function showPopover(element, message) {
  // Check if popover already exists; if so, dispose of it
  if (bootstrap.Popover.getInstance(element)) {
    removePopover(element);
  }

  element.setAttribute("data-bs-toggle", "popover");
  element.setAttribute("data-bs-content", message);
  element.setAttribute("data-bs-placement", "right");

  // Initialise the popover
  new bootstrap.Popover(element).show();

  // Automatically hide the popover after 5 seconds
  setTimeout(function () {
    removePopover(element);
  }, 5000);
}

// Function to remove the popover from an element
function removePopover(element) {
  const popoverInstance = bootstrap.Popover.getInstance(element);
  if (popoverInstance) {
    popoverInstance.dispose();
  }
}

// Initialize all popovers on the page
document.addEventListener("DOMContentLoaded", function () {
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
});
