function submitPrediction() {
    const predictionInput = document.getElementById('prediction').value;
    const prediction = parseInt(predictionInput);
    let responseMessage = "";

    if (prediction >= 0) {
        if (prediction < 150) {
            responseMessage = "Hmmm, the team I drafted is better than that. They'll prove you wrong!";
        } else if (prediction > 300) {
            responseMessage = "Haha, not sure if this is possible but anything can happen!"
        }
        else {
            responseMessage = "Good prediction! I'll tell the team to deliver!";
        }
    } else {
        responseMessage = "Hey now, that isn't even possible, try again!";
    }

    document.getElementById('response-message').textContent = responseMessage;

    document.getElementById('prediction').value = '';
}
