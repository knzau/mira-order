import { useState } from "react";

export const useToggleView = () => {
	const [activeContent, setActiveContent] = useState("");
	const toggleContent = (contentId: string) => {
		setActiveContent(activeContent === contentId ? "" : contentId);
	};
	return { toggleContent, activeContent };
};
