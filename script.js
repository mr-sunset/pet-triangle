document.addEventListener('DOMContentLoaded', () => {
    const pet = document.getElementById('pet')

    const feedBtn = document.getElementById('feed');
    const drinkBtn = document.getElementById('drink');
    const playBtn = document.getElementById('play');

    const foodCount = document.getElementById('food-count');
    const drinkCount = document.getElementById('drink-count');
    const playCount = document.getElementById('play-count');

    const petName = document.getElementById('pet-name');
    const petColor = document.getElementById('pet-color');

    const savedPetColor = localStorage.getItem('savedPetColor')
    if (savedPetColor) {
        pet.style.fill = savedPetColor;
        petColor.value = savedPetColor;
    }
    const savedPetName = localStorage.getItem('savedPetName')
    if (savedPetName) {
        petName.value = savedPetName;
    }

    // Pet name and color lS
    petColor.addEventListener('input', (event) => {
        const colorVal = event.target.value;
        pet.style.fill = colorVal;
    })

    petColor.addEventListener('change', (event) => {
        const colorVal = event.target.value;
        localStorage.setItem('savedPetColor', colorVal)
    })

    petName.addEventListener('change', (event) => {
        const nameVal = event.target.value;
        localStorage.setItem('savedPetName', nameVal)
    })
})