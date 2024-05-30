import React, { FC } from "react";
import CardContainer from "./CardContainer";
import { IProviderData } from "@/lib/types";
import { formatOrderData, renderData } from "@/lib/utils";
import { orderMockData } from "@/lib/orderMockData";
import { camelToCapitalized } from "@/lib/utils";
import { useToggleView } from "@/lib/hooks";
import { Button } from "../ui/Button";
import TreatmentPlanForm from "./TreatmentPlanForm";
import Chat from "./Chat";
import { mockMessages } from "@/lib/constants";

interface ProviderViewProps {
	switchViewButton: React.ReactNode;
}

const ProviderView: FC<ProviderViewProps> = ({ switchViewButton }) => {
	const { providerSummary, miraAIProvider, providerToggleData }: IProviderData = formatOrderData(orderMockData);

	const { toggleContent, activeContent } = useToggleView();

	const renderElements = (elements: HTMLParagraphElement[]) => {
		return elements.map((paragraph, index) => (
			<React.Fragment key={index}>
				{React.createElement("p", null, paragraph.textContent)}
				<br />
			</React.Fragment>
		));
	};

	const handleSendMessage = (message: { sender: string; content: string }) => {
		console.log("New message sent:", message);
	};

	return (
		<CardContainer cardTitle="Provider View" contentClassName="text-base w-full p-6" button={switchViewButton}>
			<div className="border-b-2 border-borderColor pb-4 mb-4">
				{Object.entries(providerSummary).flatMap(([contentKey, contentValue]) => (
					<div key={contentKey}>
						<strong className="text-xl cursor-pointer mb-2 font-bold">
							{camelToCapitalized(contentKey)}
						</strong>
						<p className="mb-2">{renderElements(renderData(contentValue))}</p>
					</div>
				))}
			</div>
			<div className="collapsible-section">
				<div className="cursor-pointer" onClick={() => toggleContent("miraAI")}>
					<h3 className="text-xl font-bold mb-2">Mira AI</h3>
				</div>

				{activeContent === "miraAI" &&
					Object.entries(miraAIProvider).map(([entryKey, entryData]) => {
						return (
							<p key={entryKey} className="flex gap-2 mb-2">
								<strong>{camelToCapitalized(entryKey)}:</strong>
								{renderElements(renderData(entryData)) || "--"}
							</p>
						);
					})}
			</div>
			<div className="flex flex-wrap gap-4 my-4 ">
				{Object.keys(providerToggleData).map((dataKey) => (
					<Button
						key={dataKey}
						className="border-black justify-start items-center text-xl py-2 px-4 h-16 flex-1"
						onClick={() => toggleContent(dataKey)}
						variant="outline"
					>
						<span className="text-xl font-bold cursor-pointer leading-6">
							{camelToCapitalized(dataKey)}
						</span>
					</Button>
				))}
			</div>
			<div className="mt-4">
				{Object.entries(providerToggleData).map(([dataKey, dataValue]) => {
					return (
						<div key={dataKey}>
							{dataKey === activeContent ? renderElements(renderData(dataValue)) : null}
						</div>
					);
				})}
			</div>
			<TreatmentPlanForm />
			<div className="my-4">
				<Button className="text-balance" variant="default" onClick={() => {}}>
					Finish
				</Button>
			</div>
			<div className="my-8">
				<Chat initialMessages={mockMessages} onSendMessage={handleSendMessage} />
			</div>
		</CardContainer>
	);
};

export default ProviderView;
