import { BatchDetail } from "./BatchDetail";
import { InputParameter } from "./InputParameter";
import { PolicyHolder } from "./PolicyHolder";

export interface QuoteProductLot {
    SessionId:         string;
    ProductDetail:     BatchDetail;
    PolicyHolder:      PolicyHolder;
    Quotes:            InputParameter[];
}