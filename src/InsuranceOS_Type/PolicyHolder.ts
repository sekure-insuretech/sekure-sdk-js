namespace Sekure {
  export namespace Types {
    export type PolicyHolder = {
      firstName: string;
      address: string;
      identificationType: string;
      identificationNumber: string;
      email: string;
      phoneNumber: string;
      secondName?: string;
      lastName?: string;
      secondLastName?: string;
      birthdate?: Date;
      gender?: string;
      maritalStatus?: string;
    };
  }
}
