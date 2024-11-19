let display = document.getElementById("display");

// Insert numbers or operators into the display
function insert(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Evaluate the expression
function calculate() {
  try {
    // Check if the input is empty
    if (!display.value) {
      throw new Error('Empty Expression');
    }

    // Evaluate the expression
    display.value = eval(display.value);

    // If the result is NaN or Infinity, throw an error
    if (isNaN(display.value) || display.value === Infinity) {
      throw new Error('Invalid Expression');
    }
  } catch (error) {
    // Trigger the invalid input modal with the error message
    showInvalidInputModal(error.message); // Pass error message to modal
    clearDisplay(); // Optionally clear the display after an error
  }
}

// Function to show the invalid input modal with the error message
function showInvalidInputModal(message) {
  const modal = new bootstrap.Modal(document.getElementById('invalidInputModal'));

  // Set the modal title and body text
  document.getElementById('invalidInputModalLabel').innerText = 'Invalid Expression'; // Set modal title
  document.querySelector('.modal-body').innerText = message; // Set the error message

  // Show the modal
  modal.show();
        }
