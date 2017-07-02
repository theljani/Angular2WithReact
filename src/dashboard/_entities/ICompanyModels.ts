
export interface IGetCompanyDetailsModel {
    companyCode: string;
    login: string;
    password: string;
}

export interface ICompanyDetails {
    companyInfo: {
        name: string;
        companyCode: string;
        phoneNumber: string;
        website: string;
    };

    accountDetails: {
        login: string;
        password: string;
    };

    companyAddress: {
        addressLine: string;
        postalCode: string;
        city: string;
        country: string;
    };
}