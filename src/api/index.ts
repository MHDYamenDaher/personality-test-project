
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

let axiosConnection: any = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosConnection.interceptors.response.use((response: any) => {
  const { data } = response;
  if (data.error) {
    throw data.error;
  }
  return response;
});


export const questions = {
    allQuestions: async () => {
        const { data } = await axiosConnection.get('api/v1/questions').catch((error: any) => {
            console.log(error);
        });
        return data;
    },
}; 