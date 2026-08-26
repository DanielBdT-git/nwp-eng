import Header from "../components/Header.tsx";

export default function Home() {
  return (<>
    <Header/>
    <section className={"p-16"}>
      <h1 className={"text-8xl font-outfit font-black pb-4"}>404</h1>
      <h2 className={"text-2xl font-bree"}>The page you're searching for could not be found.</h2>
      <h2 className={"text-2xl font-bree"}>Try checking the URL or returning to the home page.</h2>
    </section>
  </>)
}