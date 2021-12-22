export const locService = {
  getLocs,
};
let gPrmAns;
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
  let prmRes = axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`
  );
  gPrmAns = prmRes.then((res) => {
    return res.data.results[0].geometry.location;

    // res.data.results[0].geometry.location;
    //
  });
  // console.log(gPrmAns);
  return gPrmAns;
}

// function askVerbose() {
//   const prmRes = axios.get('https://yesno.wtf/api');
//   const prmAns = prmRes.then((res) => {
//     console.log('Axios RES:', res);
//     const ans = res.data;
//     return ans;
//   });
//   return prmAns;
// }
