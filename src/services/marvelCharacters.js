import axios from "axios";
import CryptoJS from "crypto-js";


export const getCharacters = async () => {

    const timesTemp = new Date().getTime()
    const publicKey = '1f486feacd3a6974101c6cc0724330cc'
    const privateKey = '883b9bd07d139adc02534e83416b0d535b62630d'
    const hash = CryptoJS.MD5(timesTemp + privateKey + publicKey).toString()
    const url = `http://gateway.marvel.com/v1/public/characters?limit=20&ts=${timesTemp}&apikey=${publicKey}&hash=${hash}`
    
    const response = axios.get(url)
    .then((res) => res.data)
    .catch((error) => error);

    return response

}