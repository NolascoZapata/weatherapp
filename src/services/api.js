import axios from "axios";

export const api = axios.create({
  baseURL:'https://weatherapi-com.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '2f73bd92a0msha2e99332d777f3fp102319jsnded4870e0217',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
}) 
export const getCurrentWeather = async (city)=>{
  const response = await api.get(`/current.json?q=${city}`)
  return response.data
} 
export const getSearchCity = async (city)=>{
  const response = await api.get(`/search.json?q=${city}`)
  return response.data
}