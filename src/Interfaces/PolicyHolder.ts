namespace Sekure {
    export namespace Interface {
        export interface PolicyHolder {
            firstName:            string;
            secondName?:          string;
            lastName?:            string;
            secondLastName?:      string;
            birthdate?:           Date;
            gender?:              string;
            address:              string;
            identificationType:   string;
            identificationNumber: string;
            maritalStatus?:       string;
            email:                string;
            phoneNumber:          string;
        }
    }
}
