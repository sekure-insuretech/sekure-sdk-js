import { PolicyHolder } from "./PolicyHolder";
import { ProductDetail } from "./ProductDetail";
import { InputParameter } from "./InputParameter";

export interface Product {
    ProductDetail: ProductDetail;
    PolicyHolder:  PolicyHolder[];
    Quote:         InputParameter[];
    Confirm:       InputParameter[];
    ToEmit:        InputParameter[];
    AskSekure:     any[];
}