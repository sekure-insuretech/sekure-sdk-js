namespace Sekure {
  export namespace Interface {
    export interface Quote {
      SessionId: string;
      IdPlan: string;
      PlanNumber: string;
      PlanName: string;
      QuotationValueMonthly: string;
      QuotationValueAnnual: string;
      ProductName: string;
      InsuranceCompanyName: string;
      CoverageStartDate: string;
      CoverageEndDate: string;
      ExpeditionDate: string;
      QuoteMessage: string;
      AmountInsured: string;
      QuotationTotal: string;
      PolicyNumber: string;
      EmailSubject: string;
      EmailBody: string;
      EmailPolicy: string;
      AttachName: string;
      CoverageResultList: CoverageResultApi[];
      AggregatesResultList: CoverageResultApi[];
      InsuredResultList: InfoResultApi[];
      GracePeriodsList: InfoResultApi[];
      DeductibleList: InfoResultApi[];
      OtherInformationOS: InputParameter[];
      AdditionalInsured: AdditionalInsured[];
      EndOfValidityPremium: EndOfValidityPremium;
      QuoteInfo: AdditionalInfo;
    }
  }
}
