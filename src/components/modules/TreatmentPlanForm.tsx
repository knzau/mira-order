"use client";
import React, { useState } from "react";
import { Textarea } from "../ui/TextArea";

const TreatmentPlanForm: React.FC = () => {
	const [visitSummary, setVisitSummary] = useState("Runny nose, sore throat, and mild fever");
	const [treatmentPlan, setTreatmentPlan] = useState(
		"Acetaminophen: 500 mg, Diphenhydramine: 25 mg, Guaifenesin: 200-400 mg"
	);
	const [patientMessage, setPatientMessage] = useState("Make sure you have plenty of rest");

	return (
		<div className="">
			<div className="section-header font-bold text-xl mb-4">Treatment Plan</div>
			<div className="collapse-content block">
				<p className="mb-2">
					<strong>Provider Name:</strong> Ozita Cooper, MD
					<span className="edit-button text-blue-500 cursor-pointer ml-2">(Edit)</span>
				</p>
				<Textarea
					className="form-control mb-2 p-2 border border-gray-300 rounded w-full"
					placeholder="Type Visit Summary"
					value={visitSummary}
					onChange={(e) => setVisitSummary(e.target.value)}
				/>
				<Textarea
					className="form-control mb-2 p-2 border border-gray-300 rounded w-full"
					placeholder="Add Treatment Plan"
					value={treatmentPlan}
					onChange={(e) => setTreatmentPlan(e.target.value)}
				/>
				<Textarea
					className="form-control mb-2 p-2 border border-gray-300 rounded w-full"
					placeholder="Add Patient Message"
					value={patientMessage}
					onChange={(e) => setPatientMessage(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default TreatmentPlanForm;
