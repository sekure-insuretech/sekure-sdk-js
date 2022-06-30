import { PolicyHolder } from "./PolicyHolder";
import { ProductDetail } from "./ProductDetail";
import { Quote } from "./Quote";

export interface Product {
    ProductDetail: ProductDetail;
    PolicyHolder:  PolicyHolder[];
    Quote:         Quote[];
    Confirm:       any[];
    ToEmit:        any[];
    AskSekure:     any[];
}