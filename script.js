document.getElementById('submitBtn').addEventListener('click', async function (event) {
    event.preventDefault();
    
    const csvURL = 'data.csv';
    const inputValue = document.getElementById('unique-id').value.trim();

    const response = await fetch(csvURL);
    const csvText = await response.text();

    const csvLines = csvText.split('\n');

    let found = false;
    for (const line of csvLines) {
        const value = line.trim(); 
        if (value === inputValue) {
            found = true;
            break;
        }
    }

    if (found) {
        localStorage.setItem('isRegistered', 'true'); 
        window.location.href = `success.html?inputValue=${inputValue}`;
    } else {
        document.getElementById('alertMessage').style.display = 'block';
    }
});
