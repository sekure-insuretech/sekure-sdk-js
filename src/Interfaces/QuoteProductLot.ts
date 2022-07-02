namespace Sekure {
    export namespace Interface {
        export interface QuoteProductLot {
            SessionId:         string;
            ProductDetail:     BatchDetail;
            PolicyHolder:      PolicyHolder;
            Quotes:            InputParameter[];
        }
    }
}
