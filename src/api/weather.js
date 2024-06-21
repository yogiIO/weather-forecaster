import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = 'ea531345a6eb9cdeb923b6091d3f5f81'

export const useWeather = (request) => useQuery({queryKey: [request], queryFn: (request) => handler(request)})

async function handler(request) {
    const city = request.queryKey
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        return response.data
    } catch (error) {
        throw new Error('Invalid City Name')
    }
}