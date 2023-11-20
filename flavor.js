
function getStats(arr){
    const fcount = {};
    
    for(let i = 0; i < arr.length; i++){
        const flavor = arr[i]
        fcount[flavor] = (fcount[flavor] || 0) + 1;
    }
    return fcount;
}


function flavorResults() {
    // flavors = [9, 15, 24, 8, 7, 16];

    // Ask the user for the flavors array
    let input = window.prompt("Enter flavors separated by commas (e.g., vanilla,vanilla,vanilla,strawberry,coffee,coffee):");

    // Convert the user input to an array
    let flavors = input.split(",");

    document.getElementById('farray').textContent = `[${flavors}]`;
    // console.log(getStats(flavors));
    document.getElementById('fstats').textContent = `${JSON.stringify(Object.entries(getStats(flavors)), null, 2)}`;

}

// Call the displayResults function when the page loads
// window.onload = displayResults;
