// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data using fetch + await
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear "Loading..." message
        dataContainer.innerHTML = '';

        // Step 6: Create a list
        const userList = document.createElement('ul');

        // Step 7: Loop through and display each user's name
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 8: Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 9: Handle any errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 10: Call fetchUserData after DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
