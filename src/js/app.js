

async function loadUsers (){
    try{
        const api = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await api.json();
        const containerUser =  document.querySelector(".container-user");
        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.className = 'user';
            userElement.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street} , ${user.address.city}</p>
            `;
            containerUser.appendChild(userElement)
            
        });

    }catch(error){
        console.error('Error in receiving information:', error);
    }
}

window.onload = loadUsers;












