import axios from 'axios'

const PRODUCT_BASE_REST_API_URL="http://localhost:1234/user/getUser";

class PatientListService{
    getAllPatients(){
        return axios.get(PRODUCT_BASE_REST_API_URL)
    }
}

export default new PatientListService();