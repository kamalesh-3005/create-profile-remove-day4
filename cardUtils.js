export function createProfileCard(name, role) {
  const container = document.getElementById("cardContainer");

  // Create card div
  const card = document.createElement("div");
  card.className = "card";

  // Name
  const nameEl = document.createElement("h3");
  nameEl.textContent = name;

  // Role
  const roleEl = document.createElement("p");
  roleEl.textContent = role;

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.addEventListener("click", () => {
    container.removeChild(card);
  });

  // Append elements to card
  card.appendChild(nameEl);
  card.appendChild(roleEl);
  card.appendChild(removeBtn);

  // Append card to container
  container.appendChild(card);
}
