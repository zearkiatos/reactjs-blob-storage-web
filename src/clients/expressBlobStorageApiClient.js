import axios from 'axios';
import httpStatusCodes from 'http-status-codes';
import config from '../config';

const saveDocument = async (data) => {
    try {
        const response = await axios.post(`${config.EXPRESS_BLOB_STORAGE_API_BASE_URL}/api/document`, {
            body: {
                data
            }
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response);

        if (response.status === httpStatusCodes.OK) {
            return response.data;
        }
        
        return [];
        
    }
    catch(ex) {
        console.error(`Something was wrong 🤯 ${ex.message}`)
        throw ex;
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    saveDocument
}