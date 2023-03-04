const audioContext = new AudioContext();
let oscillator;

const frequencyInput = document.getElementById('frequency');
const waveformSelect = document.getElementById('waveform');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');

playButton.addEventListener('click', () => {
    const frequency = parseFloat(frequencyInput.value);
    const waveform = waveformSelect.value;

    oscillator = audioContext.createOscillator();
    oscillator.frequency.value = frequency;
    oscillator.type = waveform;
    oscillator.connect(audioContext.destination);
    oscillator.start();
});

stopButton.addEventListener('click', () => {
    if (oscillator) {
        oscillator.stop();
    }
});