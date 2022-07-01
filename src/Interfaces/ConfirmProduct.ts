import { InputParameter } from "./InputParameter";
import { PolicyHolder } from "./PolicyHolder";
import { ProductDetail } from "./ProductDetail";

export interface ConfirmProduct {
    SessionId:         string;
    ProductDetail:     ProductDetail;
    PolicyHolder:      PolicyHolder;
    ConfirmedQuote:    InputParameter;
    Status:            string;
}