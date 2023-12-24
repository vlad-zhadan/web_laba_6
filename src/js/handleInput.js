
async function saveData(formData) {
    try {
        let response = await fetch('../php/saveData.php', {
            method: 'POST',
            body: formData
        });
        // Continue processing the response or return it
        return response;
    } catch (error) {
        // Handle any errors that occur during fetch
        console.error('Error:', error);
    }
}


const addGlichText = document.getElementById('addGlichText');
const glichText = document.getElementById('glichText');
const glichMargin = document.getElementById('glichMargin');
const glichTime = document.getElementById('glichTime');
const colourSelect = document.getElementById('colour-select');
const parentContainer = document.querySelector('.glichText'); 

addGlichText.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the text entered by the user
    const userInput = glichText.value;
    if(!userInput){
        return
    }

    // Create a new glitch container
    const newContainer = document.createElement('div');

    newContainer.className = 'glitch-container '

    var userMargin = glichMargin.value
    if(!userMargin || isNaN(userMargin)){
        userMargin = 0
    }
    newContainer.style.marginLeft = userMargin + 'px'

    var userColor = colourSelect.value
    console.log(userColor)
    if(!userColor){
        userColor = 'black'
    }
    newContainer.style.color = userColor

    var timeInput = glichTime.value
    if(timeInput){
        timeInput = timeInput + 'ms'
         newContainer.innerHTML = `
    <p class="glitch" style="animation-duration: ${timeInput};">
        <span aria-hidden="true" style="animation-duration: ${timeInput};">${userInput}</span>
        ${userInput}
        <span aria-hidden="true" style="animation-duration: ${timeInput};">${userInput}</span>
        </p>
    `;
    }else{
        newContainer.innerHTML = `
    <p class="glitch" ">
        <span aria-hidden="true" ">${userInput}</span>
        ${userInput}
        <span aria-hidden="true"">${userInput}</span>
        </p>`
    }

    const formData = new FormData();
    formData.append("text", userInput);
    formData.append("margin", userMargin);
    formData.append("duration", timeInput);
    formData.append("colour", userColor);

    saveData(formData)

    // Append the new container to the parent
    parentContainer.appendChild(newContainer);
    glichText.value = ""
    glichMargin.value = ""
    glichTime.value = ""
});