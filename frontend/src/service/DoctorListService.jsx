import axios from 'axios'

const PRODUCT_BASE_REST_API_URL="http://localhost:1234/doctor/findDoctor";

class DoctorListService{
    getAllDoctors(){
        return axios.get(PRODUCT_BASE_REST_API_URL)
    }
}

export default new DoctorListService();