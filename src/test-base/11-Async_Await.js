export const getImage = async () => {
  try {
    const apiKey = "ed0ijcD8Xv8TKiiVrWxtciJB6Kb1spem";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const {url} = data.images.original;
    
    // const img = document.createElement("img");
    // img.src = newImage;
    // document.body.append(img);
      return url 

  } catch (error) {
      // manejo del Error 
      // console.error(error)
      return 'Not Exist'
  }
};

getImage();
