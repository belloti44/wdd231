document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('members-container');
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');

    // Fetch member data
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            if (!response.ok) {
                throw new Error(HTTP error! Status: ${response.status});
            }
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    // Display members
    function displayMembers(members) {
        membersContainer.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.websiteURL}" target="_blank">Visit Website</a>
            `;
            membersContainer.appendChild(memberCard);
        });
    }

    // View toggle functionality
    gridViewBtn.addEventListener('click', () => {
        membersContainer.classList.add('grid-view');
        membersContainer.classList.remove('list-view');
    });

    listViewBtn.addEventListener('click', () => {
        membersContainer.classList.add('list-view');
        membersContainer.classList.remove('grid-view');
    });

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Set last modified date in footer
    document.getElementById('lastModified').textContent = document.lastModified;

    // Initialize members display
    fetchMembers();
});