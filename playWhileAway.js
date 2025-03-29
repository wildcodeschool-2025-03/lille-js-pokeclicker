window.addEventListener("beforeunload", () => {
    localStorage.setItem("lastExitTime", Date.now());
});



document.addEventListener("DOMContentLoaded", () => {

	
    const lastExitTime = localStorage.getItem("lastExitTime");
    if (lastExitTime) {
        const elapsedTime = Date.now() - parseInt(lastExitTime, 10);

       
        stepAccumulator += elapsedTime;
        catchAccumulator += elapsedTime;

        
        while (stepAccumulator >= stepInterval) {
            stepsBeforeRoadChange -= 1;
            if (stepsBeforeRoadChange === 0) {
                stepsBeforeRoadChange = 400;
            }
            totalClick += 1;
			
    if (totalClick % 400 === 0) {
        changeRoad();
    }
            stepAccumulator -= stepInterval;
        }

        while (catchAccumulator >= catchInterval) {
            catchRandom();
            catchAccumulator -= catchInterval;
        }

        
        if (stepIndicator) {
            stepIndicator.innerHTML = stepsBeforeRoadChange + " step before next road";
        }
    }
	
});