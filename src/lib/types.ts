export interface MyComponentProps {
	children: React.ReactElement[];
}
export interface CardContainerProps {
	children: React.ReactElement[];
}

export interface ICareNavProvider {
	chiefComplaint: string;
	conditionCategory: string;
	triageLevel: Array<any>;
	miraCareOptions: Array<any>;
}

export interface ICareGiverToggleData {
	diagnostic: Array<any>;
	selfCareTips: string;
	intake: Array<any>;
	patientHistory: Array<any>;
}

export interface IProviderSummary {
	chiefComplaint: string;
}

export interface IMiraAIProvider {
	diagnosis: string;
	probability: string;
	ICD10CMCode: string;
	explanation: string;
	RecommendedRx: Array<any>;
	reasonsForDx: Array<any>;
}

export interface IProviderToggleData {
	intake: Array<any>;
	patientHistory: Array<any>;
}

export interface ICareGiverData {
	careNavProvider: ICareNavProvider;
	careGiverToggleData: ICareGiverToggleData;
}

export interface IProviderData {
	providerSummary: IProviderSummary;
	miraAIProvider: IMiraAIProvider;
	providerToggleData: IProviderToggleData;
}
