export default function Footer () {
  return (
    <footer className={"bg-sky-800 text-white p-4 font-bree"}>
      <p>Student-run project. Not affiliated with Nortwestern Polytechnic.</p>
      <p>For questions, feedback, or suggestions contact&nbsp;
        <a
          target={"_blank"}
          href={"mailto:daniel.breuls@gmail.com"}
          className={"underline hover:text-sky-300"}
        >
          Daniel
        </a>
      .</p>
      <hr className={"w-75 m-2 text-sky-600"}></hr>
      <p>Last updated: Oct 23, 2026</p>
    </footer>
  )
}
