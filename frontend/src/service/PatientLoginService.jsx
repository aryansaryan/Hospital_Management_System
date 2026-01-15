import axios from 'axios'

const PROFILE_BASE_REST_API_URL="http://localhost:1234/user/";

class PatientLoginService{
    profileByEmailId(find){
        return axios.get(PROFILE_BASE_REST_API_URL+"getUser" + find)
    }
}

export default new PatientLoginService();