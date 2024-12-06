
const BASE_URL="http://localhost:3000"

document.addEventListener('DOMContentLoaded', () => {
    const buildingForm = document.getElementById('buildingForm');
    const buildingList = document.getElementById('buildingList');
  
    // Fetch and display buildings
    function fetchBuildings() {
      fetch(BASE_URL + '/building')
        .then((response) => response.json())
        .then((data) => {
          buildingList.innerHTML = '';
          data.forEach((building) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Address: ${building.address}, Floors: ${building.floors}`;
            buildingList.appendChild(listItem);
          });
        })
        .catch((error) => console.error('Error fetching buildings:', error));
    }
  
    // Add a new building
    buildingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const address = document.getElementById('address').value;
      const floors = document.getElementById('floors').value;
  
      fetch(BASE_URL +'/building', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address, floors }),
      })
        .then(() => {
          fetchBuildings();
          buildingForm.reset(); 
        })
        .catch((error) => console.error('Error adding building:', error));
    });
  
    // Initialize data
    fetchBuildings();
  });
  