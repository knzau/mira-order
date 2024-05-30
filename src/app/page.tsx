"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		// Temporary redirect to /order when the component is mounted
		router.push("/order");
	}, [router]);

	return <main></main>;
}
