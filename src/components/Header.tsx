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
// TODO: format all this in WebStorm
function NavDropdown({children, links, titles}:NavDropdownProps) {

	const [isExpanded, setExpanded] = useState<boolean>(false);
	const [isForced, setForced] = useState<boolean>(false);

	return (
		<div
			onMouseEnter={() => setExpanded(true)}
			onMouseLeave={() => setExpanded(false)}
		>
			<button
				onClick={() => setForced(!isForced)}
				className={"flex flex-row items-center font-outfit text-white text-lg cursor-pointer"}
			>
				{children}
				<span className={`material-symbols-outlined transition duration-200 ${isExpanded?"rotate-180":"rotate-0"}`}>arrow_drop_down</span>
			</button>

			{isExpanded || isForced
				?<ul className={"absolute"}>
					{titles.map((title,idx) => (
						<li key={idx} className={"px-3 py-1 bg-white hover:bg-gray-200 border-x first:border-t first:rounded-t last:border-b last:rounded-b"}>
							<a
								href={`https://${links[idx]}`}
								target={"_blank"}
								className={"font-outfit text-black text-lg"}
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
				<h1 className={"text-white font-bold text-4xl font-outfit"}>Engineering Student Hub</h1>
			</a>
			<nav className={"bg-sky-900 flex flex-row items-center px-8 py-4 gap-8"}>
				<NavDropdown
					titles={["myNWP","myClass","Outlook"]}
					links={["my.nwpolytech.ca/SelfService/home.aspx","myclass.nwpolytech.ca","outlook.office.com/mail"]}
				>
					Quick Links
				</NavDropdown>
				<NavLink to={"/courses"}>Courses</NavLink>
				<NavLink to={"/map"}>Maps</NavLink>
			</nav>
		</header>
	);
}
