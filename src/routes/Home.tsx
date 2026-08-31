import Header from "../components/Header.tsx";
import { GovAlberta, Chalkboard, Books, NWP, Outlook, OneDrive } from "../components/Icons.tsx"
import type { ReactNode } from "preact/compat"

type QuickLinkProps = {
	label: string;
	url: string;
	icon: ReactNode;
}

function QuickLink({label, url, icon}:QuickLinkProps) {
	return (
		<a
			href={`https://${url}`}
			className={"flex flex-row gap-2 items-center p-2 w-full font-bree text-lg text-sky-950 hover:text-sky-50 bg-white hover:bg-sky-700 rounded-lg transition"}
		>
			{icon}
			{label}
		</a>
	)
}

export default function Home() {
  return (<>
      <Header/>
      <main className="flex sm:flex-col-reverse md:flex-row p-4 gap-4">
      	<img
      		src="/map_gp_campus.png"
      		className={"rounded-lg sm:w-full md:flex-3 shadow-md"}
     		/>
     		<div className={"flex flex-col sm:w-full md:flex-2 p-4 gap-4 bg-sky-50 rounded-lg shadow-md"}>
     			<h1 className={"text-4xl font-bree font-black tracking-wide text-sky-800"}>
     				Quick Links
   				</h1>
   				<div className={"flex flex-col gap-2"}>
   					<QuickLink label={"myClass"} url={"myclass.nwpolytech.ca"} icon={<Chalkboard/>}/>
   					<QuickLink label={"myNWP"} url={"my.nwpolytech.ca"} icon={<NWP/>}/>
   					<QuickLink label={"myNWP Document Library"} url={"my.nwpolytech.ca/SelfService/Custom/Documents/Default.aspx"} icon={<Books/>}/>
   					<QuickLink label={"NWP Website"} url={"nwpolytech.ca"} icon={<NWP/>}/>
   					<QuickLink label={"myPass"} url={"public.education.alberta.ca/PASI/mypass/home"} icon={<GovAlberta/>}/>
   					<QuickLink label={"NWP Students' Association"} url={"nwpsa.ca"} icon={null}/>
   					<QuickLink label={"Outlook"} url={"outlook.office.com/mail"} icon={<Outlook/>}/>
   					<QuickLink label={"OneDrive"} url={"gprc-my.sharepoint.com"} icon={<OneDrive/>}/>
   				</div>
     		</div>
      </main>
  </>)
}
