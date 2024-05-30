"use client";
import { useState } from "react";
import CareNavigatorView from "@/components/modules/CareNavigatorView";
import OrderDetails from "@/components/modules/OrderDetails";
import { Button } from "@/components/ui/Button";
import { CARE_NAV_VIEW, PROVIDER_VIEW } from "@/lib/constants";
import ProviderView from "@/components/modules/ProviderView";

const Page = () => {
	const [currentView, setCurrentView] = useState(CARE_NAV_VIEW);

	const toggleView = () => {
		setCurrentView((prevView) => (prevView === CARE_NAV_VIEW ? PROVIDER_VIEW : CARE_NAV_VIEW));
	};
	const switchViewButton = (
		<Button className="bg-[#6c757d] text-base text-white rounded-md" onClick={toggleView}>
			Switch to Provider View
		</Button>
	);

	return (
		<div className="min-h-[100vh]">
			<OrderDetails />
			{currentView === CARE_NAV_VIEW ? (
				<CareNavigatorView switchViewButton={switchViewButton} />
			) : (
				<ProviderView switchViewButton={switchViewButton} />
			)}
		</div>
	);
};

export default Page;
