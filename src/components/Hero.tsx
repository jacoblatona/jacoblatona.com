import { trpc } from "../utils/trpc";
import Countdown from "react-countdown";
import { useAtom } from "jotai";
import { tabAtom } from "../atoms";
import VisibilitySensor from "react-visibility-sensor";

const Hero: React.FC = () => {
  const launch = trpc.launch.getNextLaunch.useQuery();
  const [, setTab] = useAtom(tabAtom);

  function onChange(isVisible: boolean) {
    if (isVisible) setTab("Hero");
  }
  return (
    <>
      <VisibilitySensor onChange={onChange}>
        <div
          className="mx-auto flex min-h-screen max-w-xs flex-col justify-center gap-12 px-4 py-16 text-center md:max-w-lg md:text-left lg:container  lg:pr-64"
          id="Hero"
        >
          <img src="/images/logo1.png" className="mx-auto w-20 md:m-0" />
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Jacob Latona
          </h1>

          <p className="text-lg text-white md:text-2xl">
            I&apos;m a 28 year old self-taught software engineer based in
            Lincoln, Nebraska.
          </p>
          <p className="text-lg text-white md:text-2xl">
            I have used a wide array of languages and frameworks over the last
            decade, but now-a-days I finding myself writing full-stack web apps
            with
            <span className="text-[hsl(280,100%,70%)]">
              {" "}
              Next.js/Typescript/Prisma/tRPC and TailwindCSS.
            </span>
          </p>

          <div className="flex w-full flex-col-reverse items-center gap-5 rounded-lg text-lg text-white md:text-2xl lg:flex-row ">
            <p>
              I also really like Rockets. There&apos;s going to be a launch in{" "}
              <span className="text-[hsl(280,100%,70%)]">
                T-
                {launch.data && (
                  <Countdown date={launch.data?.launches.launches[0].net} />
                )}
              </span>
            </p>
            <span className="animate-bounce">🚀</span>
          </div>
        </div>
      </VisibilitySensor>
    </>
  );
};

export default Hero;
