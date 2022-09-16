export const fetchPhotos = async () => {
  const res = await fetch(
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=CXYqQiMgj2yFMLmGMIhaxiNmQbTABX6LLubi3nWU'
  );

  const data = res.json();

  return data;
};
