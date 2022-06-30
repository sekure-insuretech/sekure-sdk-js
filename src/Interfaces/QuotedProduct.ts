import { PolicyHolder } from "./PolicyHolder";
import { ProductDetail } from "./ProductDetail";
import { InputParameter } from "./InputParameter";

export interface QuotedProduct {
    SessionId:         string;
    ProductDetail:     ProductDetail;
    PolicyHolder:      PolicyHolder;
    Quotes:            InputParameter[];
    PaymentGatewaySkr: boolean;
}