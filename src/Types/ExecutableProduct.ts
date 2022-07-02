import { InputParameter } from "./Parameters";
import { PolicyHolder } from "./PolicyHolder";
import { ProductDetail } from "./ProductDetail";

export type ExecutableProduct = {
    ProductDetail:          ProductDetail;
    PolicyHolder:           PolicyHolder;
    Parameters:             InputParameter[];
}
