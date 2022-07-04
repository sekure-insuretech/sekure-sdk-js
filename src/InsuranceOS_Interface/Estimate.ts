namespace Sekure {
    export namespace Interface {
        export interface Estimate {
            Id:              number;
            Request:         string;
            Response:        string;
            TenantContactId: number;
            SessionId:       string;
            User:            number;
            CreationDate:    Date;
            ModifiedDate:    string;
        }
    }
}
