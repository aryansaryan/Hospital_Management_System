import axios from 'axios'

const PROFILE_BASE_REST_API_URL="http://localhost:1234/doctor/";

class DoctorLoginService{
    profileByEmailId(find){
        return axios.get(PROFILE_BASE_REST_API_URL+"findDoctor" + find)
    }
}

export default new DoctorLoginService();