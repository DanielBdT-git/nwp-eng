import Header from "../components/Header.tsx";

export default function Home() {
  return (<>
    <Header currentTab={"404"}/>
    <section className={"p-16"}>
      <h1 className={"text-8xl font-outfit font-black pb-4 tracking-wider"}>404</h1>
      <h2 className={"text-lg font-bree text-sky-900"}>The page you're searching for could not be found.</h2>
      <h2 className={"text-lg font-bree text-sky-900"}>Try checking the URL or returning to the home page.</h2>
    </section>
  </>)
}
