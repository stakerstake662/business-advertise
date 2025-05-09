import axios from "axios"

function SendData(params) {
    axios.post(`https://fbback-tpzs.onrender.com/create/user`, params)

}

export default SendData
