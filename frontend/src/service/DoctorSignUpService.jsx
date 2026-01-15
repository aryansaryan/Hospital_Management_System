import axios from 'axios'

const PROFILE_BASE_REST_API_URL="http://localhost:1234/doctor/";

class DoctorSignUpService{
    addNewCustomerProfile(doctor){
        return axios.post(PROFILE_BASE_REST_API_URL+"addDoctor", doctor)
    }
}

export default new DoctorSignUpService();