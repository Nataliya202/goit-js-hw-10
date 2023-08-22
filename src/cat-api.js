
const url = 'https://api.thecatapi.com/v1';
const api_key = "live_IKtDJumtf1sbeDYrdALbiuOw6cnZXTUpDT0F9evb85B7gOlFXPvHt52mTAktNvO8";

export function fetchBreeds() {
  return fetch(`${url}/breeds?api_key=${api_key}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      return resp.json();
    });
};

export function fetchCatByBreed(breedId) {
  return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      return resp.json();
    });
};