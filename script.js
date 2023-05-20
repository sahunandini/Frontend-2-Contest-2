const users = [
  { id: "1.", name: "John", profession: "Developer", age: "18" },
  { id: "2.", name: "Jack", profession: "Developer", age: "20" },
  { id: "3.", name: "Karen", profession: "Admin", age: "19" },
];

const filterButton = document.getElementById("filterButton");
const professionSelect = document.getElementById("profession");
const usersContainer = document.getElementById("usersContainer");
const addUserButton = document.getElementById("addUserButton");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const newProfessionInput = document.getElementById("newProfession");

filterButton.addEventListener("click", filterUsers);
addUserButton.addEventListener("click", addUser);

// Function to filter users based on profession
function filterUsers() {
  const selectedProfession = professionSelect.value;

  if (!selectedProfession) {
    alert("Please select a profession before filtering!");
    return;
  }

  const filteredUsers = users.filter(
    (user) => user.profession === selectedProfession
  );
  displayUsers(filteredUsers);
}

// Function to display users in the UI
function displayUsers(userList) {
  usersContainer.innerHTML = "";

  userList.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <p> ${user.id}</p>
        <p>Name: ${user.name}</p>
        <p>Profession: ${user.profession}</p>
        <p>Age: ${user.age}</p>
      `;

    usersContainer.appendChild(card);
  });
}

// Function to add a new user
function addUser() {
  const name = nameInput.value;
  const age = ageInput.value;
  const profession = newProfessionInput.value;

  if (!name || !age || !profession) {
    alert("Please fill in all fields to add a user!");
    return;
  }

  const newUser = {
    id: users.length + 1,
    name: name,
    age: age,
    profession: profession,
  };

  users.push(newUser);
  displayUsers(users);

  // Clear input fields after adding the user
  nameInput.value = "";
  ageInput.value = "";
  newProfessionInput.value = "";
}

// Display all users initially
displayUsers(users);
