/*  --------- VAR NEEDED FOR CLICK AND TIME TRACKER ---------- */

const clickTrainer = document.querySelector(".walkingTrainer");
let stepIndicator = document.querySelector(".stepIndicator");
let totalClick = 0;
let stepsBeforeRoadChange = 400;

/*  --------- TIME TRACKER + BASED ON EVENT ---------- */


let lastTime = performance.now();


let stepInterval = 1000;
let catchInterval = 10000;
let stepAccumulator = 0;
let catchAccumulator = 0;

function update(time) {
	try {
		let deltaTime = time - lastTime;
		lastTime = time;

		if (isBikeOn === true) {
			stepInterval = 100;
			catchInterval = 1000;
		} else {
			stepInterval = 1000;
			catchInterval = 10000;
		}

		stepAccumulator += deltaTime;
		catchAccumulator += deltaTime;

        while (stepAccumulator >= stepInterval) {
            stepsBeforeRoadChange -= 1;
            if (stepIndicator) {
                stepIndicator.innerHTML = stepsBeforeRoadChange + " step before next road";
            }
            totalClick += 1;
            if (stepsBeforeRoadChange === 0) {
                stepsBeforeRoadChange = 400;
            }
            if (totalClick % 400 === 0) {
                changeRoad();
            }
            if (totalClick % 2400 === 0 && isBikeOn !== true) {
                bike.style.display = "block"
            }
            stepAccumulator -= stepInterval;
        }

		while (catchAccumulator >= catchInterval) {
			catchRandom();
			catchAccumulator -= catchInterval;
		}

        document.title = `P-C (${caughtPokemon.length}/251)`;

		requestAnimationFrame(update);
	} catch (error) {
		console.error("Erreur dans la fonction update :", error);
	}
}

requestAnimationFrame(update);

/*  --------- CLICK TRACKER + BASED ON EVENT ---------- */

clickTrainer.addEventListener("click", () => {

	totalClick += 1;

	stepsBeforeRoadChange = stepsBeforeRoadChange - 1;
	stepIndicator.innerHTML = stepsBeforeRoadChange + " step before next road";
	if (stepsBeforeRoadChange === 0) {
		stepsBeforeRoadChange = 400;
	}
	if (totalClick % 10 === 0) {
		catchRandom();
	}
	if (totalClick % 400 === 0) {
		changeRoad();
	}


});

stepIndicator.innerHTML = stepsBeforeRoadChange + " step before next road";