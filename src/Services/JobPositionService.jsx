import axios from 'axios'


export default class jobPositonService{
    getJobPositions(){
        return axios.get("http://localhost:8080/api/jobtitles/getall")
    }
}


