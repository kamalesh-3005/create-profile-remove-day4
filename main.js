import { createProfileCard } from './cardUtils.js';

// Event for "Add Profile" button
document.getElementById("addProfileBtn").addEventListener("click", () => {
  const name = prompt("Enter Name:");
  const role = prompt("Enter Role:");
  
  if (name && role) {
    createProfileCard(name, role);
  } else {
    alert("Please provide both Name and Role!");
  }
});
