import { BaseUrl } from "../BaseUrl";
// url, method, data , id

const FetchApi = async (url,  method, data = null, id = null) => {
  const uri = id ? url + "/" + id : url;
  try {
    return await axios({
      method: method,
      url: BaseUrl + uri, //import BaseUrl
      data: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export default FetchApi;
