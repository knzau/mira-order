import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function camelToCapitalized(text: string) {
	return text
		.replace(/[-_]/g, " ") // Replace hyphens and underscores with spaces
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.replace(/\b([A-Z]+)([A-Z])([a-z])/g, "$1 $2$3")
		.replace(/^./, function (str) {
			return str.toUpperCase();
		});
}

export const formatOrderData = (data: any) => {
	const careNavProvider = {
		chiefComplaint: data.miraOSsummary.chiefComplaint || "",
		conditionCategory: data.miraOSsummary.conditionCategory || "",
		triageLevel: data.miraOSsummary.triageLevel || [],
		miraCareOptions: data.miraCareOptions || []
	};

	const careGiverToggleData = {
		diagnostic: data.diagnostic || [],
		selfCareTips: data.selfCareTips || "",
		intake: data.visitIntake || [],
		patientHistory: data.patientHistory || []
	};

	const providerSummary = {
		chiefComplaint: data.miraOSsummary.chiefComplaint || ""
	};

	const aiDiagnosis = data?.miraOSsummary;
	const miraAIProvider = {
		diagnosis: aiDiagnosis?.dx[0]?.diagnosis || "",
		probability: aiDiagnosis?.dx[0]?.probability || "",
		ICD10CMCode: aiDiagnosis?.dx[0]?.Icd10cCode || "",
		explanation: aiDiagnosis?.rxExplanation || "",
		RecommendedRx: aiDiagnosis?.rxRecommendation || [],
		reasonsForDx: aiDiagnosis?.reasonsForDx || []
	};

	const providerToggleData = {
		intake: data.visitIntake || [],
		patientHistory: data?.patientHistory || []
	};

	return {
		careNavProvider,
		careGiverToggleData,
		providerSummary,
		miraAIProvider,
		providerToggleData
	};
};

export interface DataObject {
	[key: string]: string | DataObject | DataObject[];
}

export function renderData(data: DataObject): HTMLParagraphElement[] {
	const paragraphs: HTMLParagraphElement[] = [];

	function processData(value: DataObject | DataObject[] | string) {
		if (typeof value === "string") {
			const paragraph = document.createElement("p");
			paragraph.textContent = camelToCapitalized(value);
			paragraphs.push(paragraph);
		} else if (Array.isArray(value)) {
			value.forEach(processData);
		} else if (typeof value === "object") {
			if (value.hasOwnProperty("title") && value.hasOwnProperty("value")) {
				const paragraph = document.createElement("p");
				paragraph.textContent = `${camelToCapitalized(value.title as string)}: ${camelToCapitalized(
					value.value as string
				)}`;
				paragraphs.push(paragraph);
			} else {
				Object.entries(value).forEach(([key, val]) => {
					processData(val);
				});
			}
		}
	}

	processData(data);
	return paragraphs;
}
