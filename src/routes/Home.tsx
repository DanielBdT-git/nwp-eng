import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

type QuickLinkProps = {
	label: string;
	url: string;
	image: string;
}

function QuickLink({label, url, image}:QuickLinkProps) {
	return (
		<a href={`https://${url}`} className={"flex flex-row gap-2 items-center p-2 w-full font-bree text-sky-950 bg-white rounded-lg"}>
			<img src={`/${image}.png`} className={"h-8 rounded-sm"}/>
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
      		className={"rounded-lg sm:w-full md:w-1/2"}
     		/>
     		<div className={"flex flex-col sm:w-full md:w-1/2 p-4 gap-4 bg-sky-50 rounded-lg"}>
     			<h1 className={"text-2xl font-bree font-black tracking-wide text-sky-800"}>
     				Quick Links
   				</h1>
   				<div className={"flex flex-col gap-2"}>
   					<QuickLink label={"myClass"} url={"myclass.nwpolytech.ca"} image={"nwp_logo"}/>
   					<QuickLink label={"myNWP"} url={"my.nwpolytech.ca"} image={"nwp_logo"}/>
   					<QuickLink label={"myNWP Document Library"} url={"my.nwpolytech.ca/SelfService/Custom/Documents/Default.aspx"} image={"nwp_logo"}/>
   					<QuickLink label={"NWP Website"} url={"nwpolytech.ca"} image={"nwp_logo"}/>
   					<QuickLink label={"myPass"} url={"public.education.alberta.ca/PASI/mypass/home"} image={"gov_alberta"}/>
   				</div>
     		</div>
      </main>
      <Footer/>
  </>)
}
