import type {ReactNode} from "preact/compat";

type NavLinkProps = {
  to: string;
  children: ReactNode;
  dropdown?: boolean;
}

function NavLink ({to, children, dropdown=false}:NavLinkProps) {
  return (<a href={to} className={"flex flex-row items-center text-white font-outfit text-lg"}>
    <span className={"hover:underline"}>{children}</span>
    {dropdown?<span class="material-symbols-outlined">arrow_drop_down</span>:null}
  </a>);
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
          <NavLink to={"/quicklinks"} dropdown>Quick Links</NavLink>
          <NavLink to={"/courses"}>Courses</NavLink>
          <NavLink to={"/map"}>Maps</NavLink>
        </nav>
      </header>
  )
}
