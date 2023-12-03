const axios = require("axios");
const { StatusCodes } = require("http-status-codes");

const config = {
  headers: {
    "x-api-key": process.env.API_KEY,
  },
  baseURL: "https://api.thedogapi.com/v1",
};

const getImages = async (req, res) => {
  const {
    query: { limit: image_limit, breed_ids: breed_ids },
  } = req;
  let result = await axios.get(
    `/images/search?limit=${image_limit}&has_breeds=1&breed_ids=${breed_ids}`,
    config
  );

  let imgs = [];
  result.data.forEach((element) => {
    imgs.push({ id: element.id, url: element.url });
  });

  res.status(StatusCodes.OK).json({ imgs });
};

const getImage = async (req, res) => {
  const {
    params: { id: image_id },
  } = req;
  let result;
  let img;

  result = await axios.get(`/images/${image_id}`, config);

  img = {
    id: result.data.id,
    url: result.data.url,
  };
  res.status(StatusCodes.OK).json({ img });
};

const getAllBreeds = async (req, res) => {
  let breeds = [];
  let result;
  result = await axios.get("/breeds", config);
  result.data.forEach((element) => {
    breeds.push({ id: element.id, name: element.name });
  });
  res.status(StatusCodes.OK).json({ breeds });
};

const getBreed = async (req, res) => {
  let result;
  const {
    params: { id: breed_id },
  } = req;

  result = await axios.get(`/breeds/${breed_id}`, config);

  let breed = {
    name: result.data.name,
    description: result.data.description,
    temperament: result.data.temperament,
    origin: result.data.origin,
    life_span: result.data.life_span,
    bred_for: result.data.bred_for,
    breed_group: result.data.breed_group,
    reference_image_id: result.data.reference_image_id,
  };
  res.status(StatusCodes.OK).send({ breed });
};

const getTop10 = async (req, res) => {
  let top10 = [];
  const fetchString = "/images/search?limit=1&breed_ids=";
  const fetchStringBreed = "/breeds/";
  const ids = [5, 67, 89, 98, 58, 128, 189, 156, 149, 129];
  const {
    query: { limit: limit },
  } = req;
  let len = 0;
  if (limit === "4") len = 4;
  else len = 10;

  for (let i = 0; i < len; i++) {
    const img = await axios.get(fetchString + ids[i], config);
    const breed = await axios.get(fetchStringBreed + ids[i], config);

    top10.push({
      image_id: img.data[0].id,
      breed_id: breed.data.id,
      name: breed.data.name,
      img_url: img.data[0].url,
      number: i + 1,
      description: breed.data.description | "",
    });
  }

  res.status(StatusCodes.OK).json({ top10 });
};

module.exports = {
  getImage,
  getImages,
  getBreed,
  getAllBreeds,
  getTop10,
};
