document.getElementById('get-recommendation-button').addEventListener('click', function() {
    const district = document.getElementById('district').value;
    const soilColor = document.getElementById('soil-color').value;
    const season = document.getElementById('season').value;

    // Validate input
    if (!district || !soilColor || !season) {
        alert("Please select a district, soil color, and season.");
        return;
    }

    // Simulate NPK predictions and crop recommendations
    const recommendations = getRecommendations(district, soilColor, season);

    // Display the recommendations
    document.getElementById('recommendation').innerHTML = `
        <h3>Predicted NPK Values</h3>
        <p>Nitrogen: ${recommendations.nitrogen.toFixed(2)}%</p>
        <p>Phosphorus: ${recommendations.phosphorus.toFixed(2)}%</p>
        <p>Potassium: ${recommendations.potassium.toFixed(2)}%</p>
        <h3>Recommended Crops</h3>
        <p>${recommendations.crops.join(', ')}</p>
    `;
});

function getRecommendations(district, soilColor, season) {
    // Placeholder logic to simulate predictions based on district
    let nitrogen, phosphorus, potassium, crops;

    switch (district) {
        case 'Bagalkot':
            nitrogen = 15 + Math.random() * 5;
            phosphorus = 5 + Math.random() * 3;
            potassium = 10 + Math.random() * 2;
            crops = getCropsBySoilAndSeason(soilColor, season, ['Maize', 'Groundnut', 'Sunflower']);
            break;
        case 'Bangalore Rural':
            nitrogen = 20 + Math.random() * 3;
            phosphorus = 7 + Math.random() * 2;
            potassium = 14 + Math.random() * 2;
            crops = getCropsBySoilAndSeason(soilColor, season, ['Ragi', 'Paddy', 'Sugarcane']);
            break;
        // Add other districts here
        // ...
        default:
            nitrogen = phosphorus = potassium = 0;
            crops = ['No recommendation available'];
    }

    return { nitrogen, phosphorus, potassium, crops };
}

function getCropsBySoilAndSeason(soilColor, season, baseCrops) {
    // Adjust crops based on soil color and season
    let adjustedCrops = [...baseCrops];

    if (soilColor === 'Red') {
        adjustedCrops = adjustedCrops.map(crop => `${crop} (Red Soil)`);
    } else if (soilColor === 'Black') {
        adjustedCrops = adjustedCrops.map(crop => `${crop} (Black Soil)`);
    }

    if (season === 'Spring') {
        adjustedCrops = adjustedCrops.map(crop => `${crop} - Spring`);
    } else if (season === 'Summer') {
        adjustedCrops = adjustedCrops.map(crop => `${crop} - Summer`);
    } else if (season === 'Autumn') {
        adjustedCrops = adjustedCrops.map(crop => `${crop} - Autumn`);
    } else if (season === 'Winter') {
        adjustedCrops = adjustedCrops.map(crop => `${crop} - Winter`);
    }

    return adjustedCrops;
}
