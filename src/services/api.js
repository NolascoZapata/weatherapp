import axios from "axios";


export const api = axios.create({
  baseURL:'https://weatherapi-com.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key':process.env.REACT_APP_RAPIDAPIAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
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