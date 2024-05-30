"use client";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { ClassNameValue } from "tailwind-merge";
import { Button } from "../ui/Button";

interface CardProps {
	cardTitle: string;
	children: React.ReactNode;
	contentClassName: ClassNameValue;
	button?: React.ReactNode;
}

const CardContainer = ({ cardTitle, children, contentClassName, button }: CardProps) => {
	return (
		<div className="container max-w-[1140px] mx-auto mt-4">
			<Card className="card">
				<CardHeader
					className={cn("flex justify-start items-center", {
						"flex flex-row justify-between item-center": button
					})}
				>
					<CardTitle>{cardTitle}</CardTitle>
					{button ? <div>{button}</div> : null}
				</CardHeader>
				<CardContent className={cn("w-full", contentClassName)}>{children}</CardContent>
			</Card>
		</div>
	);
};

export default CardContainer;
