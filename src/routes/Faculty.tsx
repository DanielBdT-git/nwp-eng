import Header from "../components/Header.tsx"
import { useState } from "preact/compat"

type profCardProps = {
	image?: string;
	firstName: string;
	lastName: string;
	role: string;
	office: string;
}

function ProfCard({image, firstName, lastName, role, office}:profCardProps) {

	const [isHovered, setHovered] = useState<boolean>(false);

	return (
		<article
			className={`flex flex-col justify-left ${isHovered ? "bg-sky-800" : "bg-sky-50"} rounded-lg shadow-md p-4 gap-4 cursor-pointer *:transition-colors transition-colors`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<img
				src={`/profs/${image ? image : "unknown.jpg"}`}
				alt={`${firstName} ${lastName}`}
				className={"w-50 h-75 object-cover rounded-md border-2 border-sky-50"}
			/>
			<div className={"flex flex-col"}>
				<span className={`font-bree text-lg ${isHovered ? "text-slate-300" : "text-slate-500"}`}>{firstName}</span>
				<span className={`font-bree text-2xl ${isHovered ? "text-sky-50" : "text-sky-900"}`}>{lastName}</span>
			</div>
			<hr className={`${isHovered ? "text-slate-300" : "text-slate-500"} w-1/2`}></hr>
			<div className={`flex flex-col gap-1 font-bree text-sm ${isHovered ? "text-slate-300" : "text-slate-500"}`}>
				<span>{role}</span>
				<span>{`Office: ${office}`}</span>
			</div>
		</article>
	)
}

export default function Courses() {
	return (<>
		<Header currentTab={"Faculty"}/>
		<main className={"flex flex-row flex-wrap p-4 gap-4"}>
			<ProfCard image={"bKelly.png"} firstName={"Braden"} lastName={"Kelly"} role={"Engineering Instructor"} office={"J218"}/>
			<ProfCard firstName={"Abdel"} lastName={"Bensouilah"} role={"Math Instructor"} office={"J210"}/>
			<ProfCard image={"lRawluk.jpg"} firstName={"Les"} lastName={"Rawluk"} role={"Chemistry Instructor"} office={"J214"}/>
			<ProfCard firstName={"Glenda"} lastName={"Delos Reyes"} role={"Physics Instructor"} office={"J216"}/>
			<ProfCard firstName={"Tom"} lastName={"mcLeister"} role={"Math Instructor"} office={"J212"}/>
			<ProfCard firstName={"Heather"} lastName={"Joyce"} role={"English Instructor"} office={"C418"}/>
			<ProfCard firstName={"Brian"} lastName={"Redmond"} role={"Chair of Schience Dept."} office={"J206"}/>
		</main>
	</>);
}
