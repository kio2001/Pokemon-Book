import axios from 'axios';
 
export const ApiGet_Simple = (URL:string):void => {
    axios
        .get(URL)
        .then((results) => {
            console.log(results.data);
        })
        .catch((error) => {
            console.log('通信失敗');
            console.log(error.status);
        });
};