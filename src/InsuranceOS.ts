import { ProductDetail } from "./Interfaces/ProductDetail";

import axios from "axios";

const skrKey : string = 'ec151c0d3e6648f88b4a65fc3a0b1ab1';

//https://bobbyhadz.com/blog/typescript-http-request-axios

export const GetProducts = async () : Promise<ProductDetail> => {

  const resp = await axios.get<ProductDetail>(`https://api.sekure.com.co/OSStage/Products/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Credentials": true,
      "X-Requested-With": "XMLHttpRequest",
      "skr-key": skrKey
    }
  });

  return resp.data;
}



