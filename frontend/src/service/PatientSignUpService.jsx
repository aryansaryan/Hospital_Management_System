import axios from 'axios'

const PROFILE_BASE_REST_API_URL="http://localhost:1234/user/";

class DoctorSignUpService{
    addNewCustomerProfile(user){
        return axios.post(PROFILE_BASE_REST_API_URL+"addUser", user)
    }
}

export default new DoctorSignUpService();