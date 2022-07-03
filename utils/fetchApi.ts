import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': 'ac406a26acmshf7343b6fa99ed28p1e444ajsnff2bc13f5025',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  })
  return data;
}
