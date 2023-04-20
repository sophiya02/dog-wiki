interface Breeds{
  id: string,
  name: string
}
interface Top10{
  image_id: string,
  breed_id: string,
  name: string,
  img_url: string,
  number: number,
  description: string,
}
interface Breed{
  name: string,
  description: string,
  temperament: string,
  origin: string,
  life_span: string,
  bred_for: string,
  breed_group: string,
  reference_image_id: string,
}
interface BreedImage{
  id: string,
  url: string,
}
export {
  Breeds,
  Top10,
  Breed,
  BreedImage}
