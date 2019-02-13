import axios from 'axios';

const URL = 'http://localhost:3005';


export function videoListAll(
    limit = 9,
    start = 0,
    order = 'asc',
    list = ''
){
    const request = axios.get(`${URL}/videos?_limit=${limit}&_skip=${start}&_order=${order}`)
                    .then(response => {
                        if(list){
                            return [...list,...response.data]
                        } else {
                            return response.data
                        }
                    }
                )          

    return {
        type: 'GET_VIDEOS_ALL',
        payload: request   
    }
}
