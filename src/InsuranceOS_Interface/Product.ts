namespace Sekure {
    export namespace Interface {
        export interface Product {
            ProductDetail: ProductDetail;
            PolicyHolder:  PolicyHolder[];
            Quote:         InputParameter[];
            Confirm:       InputParameter[];
            ToEmit:        InputParameter[];
            AskSekure:     any[];
        }
    }
}