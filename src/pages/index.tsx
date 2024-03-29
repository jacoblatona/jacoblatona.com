import { type NextPage } from "next";
import Head from "next/head";
import NavDots from "../components/NavDots";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Journey from "../components/Journey";

const Home: NextPage = () => {
  return (
    <>
      {/* <span className="text-[hsl(280,100%,70%)]">T3</span>*/}
      <Head>
        <title>Jacob Latona | Software Engineer</title>
        <meta
          name="description"
          content="Full Stack Software Engineer from Lincoln, Nebraska"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Hero />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <NavDots />
    </>
  );
};

export default Home;
