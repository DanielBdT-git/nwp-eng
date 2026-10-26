import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { GovAlberta, NWP, Outlook, OneDrive, Popcorn } from "../components/Icons.tsx"
import type { ReactNode } from "preact/compat"

type QuickLinkProps = {
	label: string;
	url: string;
	icon?: string | ReactNode;
}

function QuickLink({label, url, icon}:QuickLinkProps) {
	return (
		<a
			href={`https://${url}`}
			target={"_blank"}
			className={"flex flex-row gap-2 items-center p-2 w-full font-bree text-lg text-sky-950 hover:text-sky-50 bg-white hover:bg-sky-800 rounded-lg transition"}
		>
			{typeof icon === "string"
			?<i className={`ph-fill ph-${icon} text-2xl`}></i>
			:<span className={"size-6"}>{icon}</span>
			}
			{label}
		</a>
	)
}

export default function Home() {
  return (<>
      <Header currentTab={"Home"}/>
      <main className="flex flex-col sm:flex-col md:flex-row p-4 gap-4">
     		<section className={"flex flex-col flex-1 p-4 gap-4 bg-sky-50 rounded-lg shadow-md"}>
     			<h1 className={"text-4xl font-bree font-black tracking-wide text-sky-800"}>
     				Quick Links
   				</h1>
   				<div className={"flex flex-col gap-2"}>
   					<QuickLink label={"myClass"} url={"myclass.nwpolytech.ca"} icon={"chalkboard-teacher"}/>
   					<QuickLink label={"myNWP"} url={"my.nwpolytech.ca"} icon={<NWP/>}/>
						<QuickLink label={"Library Bookings"} url={"libcal.nwpolytech.ca/spaces?lid=1506"} icon={"presentation"}/>
   					<QuickLink label={"myNWP Document Library"} url={"my.nwpolytech.ca/SelfService/Custom/Documents/Default.aspx"} icon={"files"}/>
   					<QuickLink label={"NWP Website"} url={"nwpolytech.ca"} icon={<NWP/>}/>
   					<QuickLink label={"myPass"} url={"public.education.alberta.ca/PASI/mypass/home"} icon={<GovAlberta/>}/>
   					<QuickLink label={"Important Dates"} url={"nwpolytech.ca/events?name=&event_category%5B568%5D=568&date="} icon={"calendar-blank"}/>
   					<QuickLink label={"NWP Students' Association"} url={"nwpsa.ca"} icon={<NWP/>}/>
						<QuickLink label={"Criterion Streaming"} url={"media3.criterionpic.com/cod/lcl_top_subjects.htx"} icon={<Popcorn/>}/>
   					<QuickLink label={"Outlook"} url={"outlook.office.com/mail"} icon={<Outlook/>}/>
   					<QuickLink label={"OneDrive"} url={"gprc-my.sharepoint.com"} icon={<OneDrive/>}/>
   				</div>
     		</section>
      	<section className="flex-2">
					<img
						src="/map_gp_campus.webp"
						className={"rounded-lg shadow-md"}
					/>
				</section>
      </main>
			<Footer />
  </>)
}
