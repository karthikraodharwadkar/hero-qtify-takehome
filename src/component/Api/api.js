import axios from 'axios';

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export async function fetchData(){
    try{
        let response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`)
    return response.data
    }
    catch(e){
        alert(e)
    }
    
}
