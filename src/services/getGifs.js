const apiKey = "hiE5xM1G3BSSN0ifFz3OdrASDWRwsidy";

export default function getGifs({ keyword = "panda" } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;

      const gifs = data.map((image) => {
        const { title, id, images } = image;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });

      return gifs;
    });
}
