const getImage = async () => {
  try {
    const apiKey = "Fsjwyw2INOUUCDVo3rJvECj8IdvJEpks";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const newImage = data.images.original.url;

    const img = document.createElement("img");

    img.src = newImage;

    document.body.append(img);
  } catch (error) {
      // manejo del Error 
      console.error(error)
  }
};

getImage();
