import type { ReactNode } from "preact/compat";
import { useState } from "preact/compat"

type NavLinkProps = {
  to: string;
  children: ReactNode;
}

function NavLink ({to, children}:NavLinkProps) {
  return (<a href={to} className={"flex flex-row items-center font-outfit text-white text-lg"}>
    <span className={"hover:underline"}>{children}</span>
  </a>);
}


type NavDropdownProps = {
  children: ReactNode;
  links: string[];
  titles: string[];
}

function NavDropdown({children, links, titles}:NavDropdownProps) {

	const [isExpanded, setExpanded] = useState<boolean>(false);
	const [isForced, setForced] = useState<boolean>(false);

	return (
		<div
			onMouseEnter={() => setExpanded(true)}
			onMouseLeave={() => setExpanded(false)}
			onBlur={() => setForced(false)}
		>
			<button
				onClick={() => setForced(!isForced)}
				className={"flex flex-row items-center py-4 gap-1 font-outfit text-white text-lg cursor-pointer"}
			>
				{children}
				<span className={`material-symbols-outlined transition duration-200 ${isExpanded||isForced?"rotate-180":"rotate-0"}`}>arrow_drop_down</span>
			</button>

			{isExpanded || isForced
				?<ul className={"absolute"}>
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


export default function Header() {
	return (
		<header>
			<a
				href={"/"}
				className={"bg-sky-800 flex flex-row items-center p-8 gap-4"}
			>
				<img src={"/nwp.svg"} alt={"NWP"} className={"h-12"}></img>
				<h1 className={"text-white font-bold text-4xl font-outfit"}>Engineering Students Hub</h1>
			</a>
			<nav className={"bg-sky-900 flex flex-row items-center px-8 gap-8"}>
				<NavLink to={"/"}>Home</NavLink>
				<NavDropdown
					titles={["myNWP","myClass","NWP Website","NWPSA","Outlook","OneDrive"]}
					links={["my.nwpolytech.ca/SelfService/home.aspx","myclass.nwpolytech.ca","nwpolytech.ca","nwpsa.ca","outlook.office.com/mail","gprc-my.sharepoint.com"]}
				>
					Quick Links
				</NavDropdown>
				<NavLink to={"/courses"}>Courses</NavLink>
				<NavLink to={"/maps"}>Maps</NavLink>
			</nav>
		</header>
	);
}
