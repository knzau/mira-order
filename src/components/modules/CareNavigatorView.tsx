"use client";
import React, { FC } from "react";
import { Button } from "../ui/Button";
import CardContainer from "./CardContainer";
import { formatOrderData, renderData } from "@/lib/utils";
import { orderMockData } from "@/lib/orderMockData";
import { ICareGiverData } from "@/lib/types";
import { camelToCapitalized } from "@/lib/utils";
import { useToggleView } from "@/lib/hooks";
import { mockMessages } from "@/lib/constants";
import Chat from "./Chat";

interface CareNavProps {
	switchViewButton: React.ReactNode;
}

const CareNavigatorView: FC<CareNavProps> = ({ switchViewButton }) => {
	const { toggleContent, activeContent } = useToggleView();

	const { careNavProvider, careGiverToggleData }: ICareGiverData = formatOrderData(orderMockData);

	const handleSendMessage = (message: { sender: string; content: string }) => {
		console.log("New message sent:", message);
	};

	const renderElements = (elements: HTMLParagraphElement[]) => {
		return elements.map((paragraph, index) => (
			<React.Fragment key={index}>
				{React.createElement("p", null, paragraph.textContent)}
				<br />
			</React.Fragment>
		));
	};
	return (
		<CardContainer
			cardTitle="Care Navigator View"
			contentClassName="text-base w-full p-6"
			button={switchViewButton}
		>
			<div className="border-b-2 border-borderColor pb-4 mb-4">
				{Object.entries(careNavProvider).flatMap(([contentKey, contentValue]) => (
					<div key={contentKey}>
						<strong className="text-xl cursor-pointer mb-2 font-bold">
							{camelToCapitalized(contentKey)}
						</strong>
						<p className="mb-2">{renderElements(renderData(contentValue))}</p>
					</div>
				))}

				<p className="mb-2 text-base">
					Virtual Primary Care: A virtual consultation can help confirm the diagnosis and provide additional
					care instructions.
				</p>
			</div>
			<div className="flex flex-wrap gap-4 my-4 ">
				{Object.keys(careGiverToggleData).map((dataKey) => (
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
				{Object.entries(careGiverToggleData).map(([dataKey, dataValue]) => {
					const content = renderElements(renderData(dataValue));
					return <div key={dataKey}>{dataKey === activeContent ? content : null}</div>;
				})}
			</div>

			<div className="flex mt-6 mb-16 gap-4">
				<Button className="text-base" variant="default" onClick={() => {}}>
					Send Care Options
				</Button>
				<Button className="text-base" variant="destructive">
					Cancel Order
				</Button>
			</div>
			<div className="my-8">
				<Chat initialMessages={mockMessages} onSendMessage={handleSendMessage} />
			</div>
		</CardContainer>
	);
};

export default CareNavigatorView;
