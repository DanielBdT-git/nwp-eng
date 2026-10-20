import Header from "../components/Header.tsx"
import { useState } from "preact/compat"

type profCardProps = {
	image?: string;
	firstName: string;
	lastName: string;
	role: string;
	office: string;
	email?: string;
	phone?: string;
	courses?: string[];
	outlines?: string[];
	timetable?: string;
}

function ProfCard({image, firstName, lastName, role, office, email, phone, courses, outlines, timetable}:profCardProps) {

	const [isHovered, setHovered] = useState<boolean>(false);
	const [isShown, setShown] = useState<boolean>(false);

	const primaryText = isHovered ? "text-sky-50" : "text-sky-800";
	const secondaryText = isHovered ? "text-slate-100" : "text-slate-700";
	const tertiaryText = isHovered ? "text-slate-300" : "text-slate-500";

	// shown part of card
	const CardFront = ({classes}:{classes?:string}) => (
		<div className={`${classes} flex flex-col gap-2`}>
			<img
				src={`/profs/${image ? image : "unknown.jpg"}`}
				alt={`${firstName} ${lastName}`}
				className={"h-2/3 object-cover rounded-md border-2 border-sky-50"}
			/>
			<div className={"flex flex-col"}>
				<h2 className={`font-bree text-lg font-light ${tertiaryText}`}>{firstName}</h2>
				<h1 className={`font-bree text-2xl font-bold ${primaryText}`}>{lastName}</h1>
				<hr className={`w-1/2 my-2 ${primaryText}`}></hr>
				<p className={`font-bree text-md ${tertiaryText}`}>{role}</p>
				<p className={`font-bree text-md ${tertiaryText}`}>Office: {office}</p>
			</div>
		</div>
	)

	// hidden part of card
	const CardBack = ({classes}:{classes:string}) => (
		<div className={`${classes} flex flex-col gap-4`}>
			<div className={"flex flex-col gap-0"}>
				<h2 className={`font-bree text-xl ${secondaryText}`}>{firstName} {lastName}</h2>
				<p className={`font-bree text-sm font-light ${tertiaryText}`}>Office: {office}</p>
				{email ? 
					<a
						href={`mailto:${email}`}
						className={`font-bree text-sm font-light hover:underline ${tertiaryText}`}
					>
						{email}
					</a> 
				: null}
				{phone ? 
					<a
						href={`tel:${phone}`}
						className={`font-bree text-sm font-light hover:underline ${tertiaryText}`}
					>
						{phone}
					</a> 
				: null}
			</div>
			{timetable ?
				<div className={"flex flex-col gap-1"}>
					<p className={`font-bree text-sm font-light ${tertiaryText}`}>Timetable:</p>
					<a
						download={`${timetable} timetable`}
						href={`/downloads/Timetable-${timetable}.pdf`}
						className={`flex flex-row items-center p-2 gap-2  rounded-sm ${isHovered ? "bg-sky-50 hover:bg-sky-200" : "bg-sky-800"}`}
					>
						<i className={`ph-fill ph-download-simple ${isHovered ? "text-slate-700" : "text-slate-300"}`}></i>
						<span className={isHovered ? "text-slate-700" : "text-slate-100"}>Download Timetable</span>
					</a>
				</div>
			:<p className={`font-bree font-light text-sm ${tertiaryText}`}>No timetable available</p>}
			{courses && outlines ?
				<div className={"flex flex-col gap-1"}>
					<p className={`font-bree text-sm font-light ${tertiaryText}`}>Course Outlines:</p>
					<ul className={"space-y-2"}>
						{courses.map((course, idx) => (
							<li key={idx}>
								<a
									download={`${outlines[idx]} course outline`}
									href={`/downloads/Outline-${outlines[idx]}.pdf`}
									className={`flex flex-row items-center p-2 gap-2  rounded-sm ${isHovered ? "bg-sky-50 hover:bg-sky-200" : "bg-sky-800"}`}
								>
									<i className={`ph-fill ph-download-simple ${isHovered ? "text-slate-700" : "text-slate-300"}`}></i>
									<span className={isHovered ? "text-slate-700" : "text-slate-100"}>{course}</span>
								</a>
							</li>
							))}
					</ul>
				</div>
			:<p className={`font-bree font-light text-sm ${tertiaryText}`}>No course outlines available</p>}
		</div>
	)

	// main card element
	const faceClasses = "absolute w-full h-full left-0 top-0 p-4 backface-hidden"
	return (
		<button
			className={`flex flex-col w-60 h-120 text-left items-stretch ${isHovered ? "bg-sky-800" : "bg-sky-50"} rounded-lg shadow-md p-4 gap-4 cursor-pointer ${isShown?"rotate-y-180":"rotate-y-0"} *:transition-all transition-all transform-3d`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onClick={() => setShown(!isShown)}
			aria-pressed={isShown}
		>
			<CardFront classes={`${faceClasses} rotate-y-0`}/>
			<CardBack classes={`${faceClasses} rotate-y-180`}/>
		</button>
	)
}

// the page itself
export default function Courses() {
	return (<>
		<Header currentTab={"Instructors"}/>
		<main className={"flex flex-col p-8 gap-8"}>
			<div className={"flex flex-col gap-1"}>
				<h1 className={"font-bree font-bold text-4xl text-sky-800"}>Engineering Instructors</h1>
				<h2 className={"font-bree font-light text-lg text-slate-500"}>Click each card to view more details</h2>
			</div>
			<section className={"flex flex-row flex-wrap gap-4"}>
				<ProfCard
					image={"bKelly.png"}
					firstName={"Braden"}
					lastName={"Kelly"}
					role={"Engineering Instructor"}
					office={"J218"}
					email={"bkelly@nwpolytech.ca"}
					phone={"780-539-2963"}
					courses={["EG1000 Success in Engineering","EG1300 Engineering Mechanics"]}
					outlines={["EG1000","EG1300"]}
					timetable={"BKelly"}
				/>
				<ProfCard
					image={"lRawluk.jpg"}
					firstName={"Les"} 
					lastName={"Rawluk"}
					role={"Chemistry Instructor"}
					office={"J214"}
					email={"lrawluk@nwpolytech.ca"}
					phone={"780-539-2738"}
					courses={["CH1030 Chemistry 1"]}
					outlines={["CH1030"]}
					timetable={"LRawluk"}
					/>
				<ProfCard
					firstName={"Glenda"}
					lastName={"Delos Reyes"}
					role={"Physics Instructor"}
					office={"J216"}
					email={"gdelosreyes@nwpolytech.ca"}
					phone={"780-539-2985"}
					courses={["PC1300 Wave Motion, Optics, and Sound"]}
					outlines={["PC1300"]}
					timetable={"GDelosReyes"}
				/>
				<ProfCard
					firstName={"Tom"}
					lastName={"mcLeister"}
					role={"Math Instructor"}
					office={"J212"}
					email={"tmcleister@nwpolytech.ca"}
					courses={["MA1000 Calculus 1"]}
					outlines={["MA1000"]}
					timetable={"TMcLeister"}
				/>
				<ProfCard
					firstName={"Heather"}
					lastName={"Joyce"}
					role={"English Instructor"}
					office={"C418"}
					email={"hjoyce@nwpolytech.ca"}
					phone={"780-539-2977"}
					courses={["EN1990 English for Engineers"]}
					outlines={["EN1990"]}
				/>
				<ProfCard
					firstName={"Abdel"}
					lastName={"Bensouilah"}
					role={"Math Instructor"}
					office={"J210"}
					email={"abensouilah@nwpolytech.ca"}
					courses={["MA1020 Linear Algebra"]}
				/>
				<ProfCard
					firstName={"Brian"}
					lastName={"Redmond"}
					role={"Chair of Schience Dept."}
					office={"J206"}
				/>
			</section>
		</main>
	</>);
}
