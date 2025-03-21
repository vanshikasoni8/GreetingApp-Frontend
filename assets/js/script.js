let users = [];
let editingIndex = -1;

function addUser() {
    const id = document.getElementById("userId").value;
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;

    if (!id || !name || !email) {
        alert("Please fill all fields!");
        return;
    }

    users.push({ id, name, email });
    displayUsers();
    clearForm();
}

function displayUsers() {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    users.forEach((user, index) => {
        userList.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button onclick="editUser(${index})">Edit</button>
                    <button onclick="deleteUser(${index})" class="delete-btn">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteUser(index) {
    users.splice(index, 1);
    displayUsers();
}

function editUser(index) {
    const user = users[index];
    document.getElementById("userId").value = user.id;
    document.getElementById("userName").value = user.name;
    document.getElementById("userEmail").value = user.email;

    document.getElementById("addBtn").style.display = "none";
    document.getElementById("updateBtn").style.display = "block";

    editingIndex = index;
}

function updateUser() {
    if (editingIndex === -1) return;

    users[editingIndex].id = document.getElementById("userId").value;
    users[editingIndex].name = document.getElementById("userName").value;
    users[editingIndex].email = document.getElementById("userEmail").value;

    displayUsers();
    clearForm();
}

function clearForm() {
    document.getElementById("userId").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("userEmail").value = "";

    document.getElementById("addBtn").style.display = "block";
    document.getElementById("updateBtn").style.display = "none";

    editingIndex = -1;
}

function logout() {
    alert("Logging out...");
    window.location.href = "login.html";
}
