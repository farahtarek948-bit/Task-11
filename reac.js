// JavaScript Assignment ?

// 1 = (B. 10)

// 2 = (A . undefined)

// 3 = (D . Error(reference error))

// 4 = (D . Error)

// 5 = (B . "Hello")

// 6 = (A . undefined)

// 7 = (A . undefined-2)

// 8 = (A . 30-20-10)

// 9 = (D .Error (sentax Eroor))



// =================================================================0000===============


const users = [];

// Create User
function createUser() {
    const username = prompt("Enter username:");
    const password = prompt("Enter password:");

    if (username === null || password === null) {
        return;
    }

    if (username === "" || password === "") {
        alert("Please enter username and password");
        return;
    }

    const user = {
        username: username,
        password: password
    };

    users.push(user);
    showUsers();
}

// Show Users
function showUsers() {
    console.clear();

    for (let i = 0; i < users.length; i++) {
        console.log(
            `${i + 1}- Username: ${users[i].username} | Password: ${users[i].password}`
        );
    }
}

// Update User
function updateUser() {
    showUsers();

    const userNumber = Number(prompt("Enter user number to update:"));
    const itemIndex = userNumber - 1;

    if (itemIndex < 0 || itemIndex >= users.length || !Number.isInteger(userNumber)) {
        alert("Invalid user number");
        return;
    }

    const username = prompt("Enter new username:");
    const password = prompt("Enter new password:");

    if (username === null || password === null) {
        return;
    }

    if (username === "" || password === "") {
        alert("Please enter username and password");
        return;
    }

    const updatedUser = {
        username: username,
        password: password
    };

    users.splice(itemIndex, 1, updatedUser);
    showUsers();
}

// Delete User
function deleteUser() {
    showUsers();

    const userNumber = Number(prompt("Enter user number to delete:"));
    const itemIndex = userNumber - 1;

    if (itemIndex < 0 || itemIndex >= users.length || !Number.isInteger(userNumber)) {
        alert("Invalid user number");
        return;
    }

    users.splice(itemIndex, 1);
    showUsers();
}
