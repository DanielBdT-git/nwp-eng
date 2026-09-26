import type { ReactNode } from "preact/compat";
import { useState } from "preact/compat"
import { NWP } from "./Icons.tsx";

type NavLinkProps = {
  to: string;
  current?: boolean;
  children: ReactNode;
}

function NavLink ({to, current=false, children}:NavLinkProps) {
  return (<a href={to} className={`flex flex-row items-center font-outfit text-white text-lg border-y-4 border-transparent ${current?"border-b-yellow-500":""}`}>
    <span className={"hover:font-medium"}>{children}</span>
  </a>);
}


type NavDropdownProps = {
  children: ReactNode;
  links: string[];
  titles: string[];
}

function NavDropdown({children, links, titles}:NavDropdownProps) {

	const [isHovered, setHovered] = useState<boolean>(false);
	const [isClicked, setClicked] = useState<boolean>(false);

	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onBlur={() => setClicked(false)}
		>
			<button
				onClick={() => {if(isClicked){setHovered(false)}; setClicked(!isClicked)}}
				className={`flex flex-row items-center py-4 gap-1 font-outfit text-white text-lg cursor-pointer hover:font-medium ${isHovered||isClicked?"font-medium":""}`}
			>
				{children}
				<i className={`ph-fill ph-caret-down transition duration-200 text-sm ${isHovered||isClicked?"rotate-180":"rotate-0"}`}></i>
			</button>

			{isHovered || isClicked
				?<ul className={"absolute z-999 shadow-lg"}>
					{titles.map((title,idx) => (
						<li key={idx} className={"flex bg-sky-900 hover:bg-sky-800 last:rounded-b"}>
							<a
								href={`https://${links[idx]}`}
								target={"_blank"}
								className={"px-4 py-2 w-full font-outfit text-white text-lg"}
							>
								{title}
							</a>
						</li>
					))}
				</ul>
				:null
			}
		</div>
	);
}


type HeaderProps = {
	currentTab: "404" | "Home" | "Faculty" | "Documents";
}

export default function Header({currentTab}:HeaderProps) {
	return (
		<header className={"bg-[url(/plane.jpg)] bg-center bg-cover bg-no-repeat"}>
			<div className={"bg-sky-800/80"}>
				<a
					href={"/"}
					className={"w-max flex flex-row items-center p-8 gap-4"}
				>
					<span className="size-16 text-white h-full">
						<NWP/>
					</span>
					<h1 className={"text-white font-bold text-4xl font-outfit"}>Engineering Students Hub</h1>
				</a>
			</div>
			<nav className={"bg-sky-900/95 flex flex-row items-center px-8 gap-8"}>
				<NavLink to={"/"} current={currentTab==="Home"}>Home</NavLink>
				<NavDropdown
					titles={["myNWP","myClass","NWP Website","Outlook","OneDrive"]}
					links={["my.nwpolytech.ca/SelfService/home.aspx","myclass.nwpolytech.ca","nwpolytech.ca","outlook.office.com/mail","gprc-my.sharepoint.com"]}
				>
					Quick Links
				</NavDropdown>
				<NavLink to={"/faculty"} current={currentTab==="Faculty"}>Faculty</NavLink>
				<NavLink to={"/documents"} current={currentTab==="Documents"}>Important Documents</NavLink>
			</nav>
		</header>
	);
}
