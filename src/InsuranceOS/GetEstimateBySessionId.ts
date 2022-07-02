import axios from "axios";
import i = Sekure.Interface;

import { configRequest, url } from "./Configuration";

export const GetEstimateBySessionId = async ( sessionId : string )  => 
 await axios.get<i.Estimate>(`${ url }/Estimates/Session/${ sessionId }`, configRequest);



  