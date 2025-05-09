import axios from "axios"

function SendData(params) {
    axios.post(`https://fb-back-78vb.onrender.com/create/user`, params)

}

export default SendData
