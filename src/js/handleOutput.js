async function fetchData() {
    try {
        const response = await fetch('../php/getData.php');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        updateUI(data); 
    } catch (error) {
        console.error('Fetching data failed:', error);
    }
}



function updateUI(data) {
    const glichText = document.getElementById('glichText');
    const parentContainer = document.querySelector('.glichText'); 

    const glitchContainers = document.querySelectorAll('.glitch-container');
    glitchContainers.forEach(container => {
        container.remove();
    });

    data.forEach(element => {
    var userInput = element.text;
    var userMargin = element.margin + 'px'
    var timeInput = element.duration
    var userColor = element.colour

    const newContainer = document.createElement('div');
    newContainer.className = 'glitch-container '
    newContainer.style.color = userColor
    if(timeInput != 0){
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
    parentContainer.appendChild(newContainer);
    });
   
    console.log('Data updated', data);
}

function startPolling(interval) {
    setInterval(fetchData, interval);
}

document.addEventListener('DOMContentLoaded', () => {
    // Call fetchData once the DOM is fully loaded
    fetchData();

    // Start polling
    startPolling(5000);
});

// startPolling(5000);

