import Link from "next/link";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import CardContainer from "./CardContainer";

const OrderDetails = () => {
	return (
		<CardContainer cardTitle="Order Details" contentClassName="text-base flex w-full gap-[15px]">
			<div className="min-w-[50%] flex flex-col gap-y-2 pt-6">
				<p>
					<strong>Status:</strong> Reviewing
					<span className="text-colorPrimary ml-2 py-0 cursor-pointer">(Edit)</span>
				</p>
				<p>
					<strong>Member:</strong> ryan.bruns
				</p>
				<p>
					<strong>Date of Birth:</strong> 01/01/1980
				</p>
				<p>
					<strong>Request Address:</strong> 98 St Marks Pl, New York, NY
				</p>
			</div>
			<div className="min-w-[50%] flex flex-col gap-y-2 pt-6">
				<p>
					<strong>Received:</strong> 01/11/2022
				</p>
				<p>
					<strong>Intended Date:</strong> 01/12/2022{" "}
					<span className="text-colorPrimary ml-2 py-0 cursor-pointer">(Edit)</span>
				</p>
				<p>
					<strong>Requested Time of Day:</strong> Morning
					<span className="text-colorPrimary ml-2 py-0 cursor-pointer">(Edit)</span>
				</p>
				<p>
					<strong>Assigned Agent:</strong> Ryan Bruns
				</p>
				<p>
					<strong>Time Zone:</strong> EDT
				</p>
			</div>
		</CardContainer>
	);
};

export default OrderDetails;
