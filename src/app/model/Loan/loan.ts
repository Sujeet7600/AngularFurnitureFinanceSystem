import { Customer } from "../Customer/customer";

export class Loan {
	loanId: number;
	customer: Customer;
	loanStatus: number;
	requiredLoanAmount: number;
	quatationAmount: number;
	quotaionDoc: [];
	insurance: number;
	loanAmountToBank: number;

// credit manager fields
	loanAmount: number;	
	processingCharge: number;	
	emi: number;
	rateOfInterest: number;
	tenure: number;


	generatedBy: number;
	generatedDate: Date;
	sanctionDocument: [];
	sanctionDocumentDate: Date;
	salarySlip: [];
	signature: [];
	bankPassbookCopy: [];
	cancelledCheck: [];
	pdcCheck: [];
	guarantorName: string;
	guarantorMobileNo: number;
	guarantorAadharNo: number;
	guarantorOccupation: string;
	guarantorPhoto: [];
}
