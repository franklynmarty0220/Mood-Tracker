// Average Mood Levels
const avgDanceability = 0.5;
const avgAcousticness = 0.5;
const avgEnergy = 0.5;
const avgValence = 0.5;

// Max Mood Levels
const maxDanceability = 1;
const maxAcousticness = 1;
const maxEnergy = 1;
const maxValence = 1;

//Get Average
const getAverage = (arr) => {
   let reducer = (total, currentValue) => total + currentValue;
   let sum = arr.reduce(reducer);
   return sum / arr.length;
};

// Mood Guesser
 const calculateMood = (songs) => {
    const danceability = getAverage(songs.map((song) => song.danceability));
    const acousticness = getAverage(songs.map((song) => song.acousticness));
    const energy = getAverage(songs.map((song) => song.energy));
    const tempo = getAverage(songs.map((song) => song.tempo));
    const valence = getAverage(songs.map((song) => song.valence));
    const key = getAverage(songs.map((song) => song.key));
 }

 export default calculateMood