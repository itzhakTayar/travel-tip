export const locService = {
  getLocs,
};

const locs = [
  { name: 'Greatplace', lat: 32.047104, lng: 34.832384 },
  { name: 'Neveragain', lat: 32.047201, lng: 34.832581 },
];

// function getLocs() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(locs);
//         }, 2000)
//     });
// }

getLocs('london');
function getLocs(location) {
  const apiKey = 'AIzaSyCMXNf6Egb1CWTevvpyMGLAeQfpfa5hpBM';
  const prmRes = axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`
    )
    .then((res) => res.data.results)
    .then(console.log((city) => res.geometry));
  // .then(console.log(city));
  // .then((location) =>
  //   console.log(location);
  // return prmRes;
}
