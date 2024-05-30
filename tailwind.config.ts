import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				colorPrimary: "#007bff",
				colorGray: "#e9f7fe",
				colorGrayLight: "#f8f9fa",
				colorGrayDark: "6c757d",
				colorBgGray: "#00000008",
				borderColor: "#dee2e6",
				textColorDark: "#212529",
				colorDanger: "#dc3545"
			},
			fontFamily: {
				segoe: ['"Segoe UI"', "Roboto", "Helvetica", "Arial", "sans-serif"]
			}
		}
	},
	plugins: []
};
export default config;
