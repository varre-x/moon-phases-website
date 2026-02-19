const quotes = [
    "Did you know that chalk is made out of moon dust?",
    "The Moon has a thin oxygen atmosphere that astronauts can breathe for a few minutes without a suit.",
    "The dark patches on the Moon are oceans of frozen water.",
    "The Moon rotates faster than Earth, which is why we only see one side.",
    "Sound travels farther on the Moon because there’s no air resistance.",
    "The Moon produces its own faint light at night through radioactive glow.",
    "Earth’s gravity doesn’t affect the Moon’s surface at all.",
    "The “Man in the Moon” pattern is caused by ancient volcanic cities.",
    "Temperatures on the Moon stay roughly the same everywhere since there’s no weather.",
    "If you jump on the Moon, you could easily escape into space with enough force.",
    "The Moon is slowly getting closer to Earth every year."
];
let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById('fact').textContent = randomQuote;

const img = document.querySelector("img"); 

async function getData() {
    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tallinn?unitGroup=us&include=days&key=4XNQV4SDBG5VLUL7HL2GLYGL2&contentType=json');
    const data = await response.json();
    //console.log(data);
    return data.days[0].moonphase;
}


function displayMoonPhase(phase) {
    const moonElement = document.getElementById('moon-text');
    let phaseText = '';

    if (phase === 0) {
        phaseText = 'New Moon';
        img.src = "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/internal_resources/366/new-moon.jpg?w=640&h=613&fit=clip&crop=faces%2Cfocalpoint";
    } else if (phase > 0 && phase < 0.25) {
        phaseText = 'Waxing Crescent';
        img.src = "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/internal_resources/368/waxing-crescent.jpg?w=640&h=613&fit=clip&crop=faces%2Cfocalpoint";
    } else if (phase === 0.25) {
        phaseText = 'First Quarter';
        img.src = "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/internal_resources/367/first-quarter.jpg?w=640&h=613&fit=clip&crop=faces%2Cfocalpoint";
    } else if (phase > 0.25 && phase < 0.5) {
        phaseText = 'Waxing Gibbous';
        img.src = "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/internal_resources/365/waxing-gibbous.jpg?w=640&h=613&fit=clip&crop=faces%2Cfocalpoint";
    } else if (phase === 0.5) {
        phaseText = 'Full Moon';
        img.src = "https://science.nasa.gov/wp-content/uploads/2023/08/full.jpg";
    } else if (phase > 0.5 && phase < 0.75) {
        phaseText = 'Waning Gibbous';
        img.src = "https://science.nasa.gov/wp-content/uploads/2023/08/waning-gibbous.jpg";
    } else if (phase === 0.75) {
        phaseText = 'Last Quarter';
        img.src = "https://science.nasa.gov/wp-content/uploads/2023/08/third-quarter.jpg";
    } else if (phase > 0.75 && phase <= 1) {
        phaseText = 'Waning Crescent';
        img.src = "https://science.nasa.gov/wp-content/uploads/2023/08/waning-crescent.jpg";
    }

    moonElement.textContent = `The Moon is currently a  ${phaseText}`;
}

//console.log(typeof getData());
displayMoonPhase(0.4);

//getData().then(displayMoonPhase);