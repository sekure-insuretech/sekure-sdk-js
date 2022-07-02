import axios from "axios";
import i = Sekure.Interface;
import t = Sekure.Types;
import { configRequest, url } from "./Configuration";

export const Confirm = async (request : t.ExecutableProduct, SessionId: string ) : Promise<( i.Policy | i.Exception )> => {

    const { data } = await axios.post<( i.Policy | i.Exception )>(`${ url }/Products/Confirm/${ SessionId }`,
    JSON.stringify(request), configRequest);

    return data;
  }