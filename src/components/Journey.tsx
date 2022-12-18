import { useAtom } from "jotai";
import { tabAtom } from "../atoms";
import VisibilitySensor from "react-visibility-sensor";

type Item = {
  title: string;
  dateRange: string;
  company: string;
  description: string;
};

const items = [
  {
    title: "Freelance Software Engineer",
    company: "Self Employed",
    dateRange: "Jul 2013 - Feb 2019",
    description: "",
  },
  {
    title: "Software Engineer (Contract)",
    company: "Division OLT",
    dateRange: "Feb 2018 - Jul 2018",
    description: "",
  },
  {
    title: "Co-Founder",
    company: "Esports Gaming Studio LLC",
    dateRange: "Feb 2019 - Mar 2020",
    description: "",
  },
  {
    title: "Software Engineer",
    company: "Binge",
    dateRange: "May 2021 - Present",
    description: "",
  },
];

const Journey: React.FC = () => {
  const [, setTab] = useAtom(tabAtom);

  function onChange(isVisible: boolean) {
    if (isVisible) setTab("Journey");
  }
  return (
    <>
      <div
        className="container mx-auto flex min-h-screen flex-col justify-center px-4 py-16  text-center lg:pr-64 lg:text-left"
        id="Journey"
      >
        <VisibilitySensor onChange={onChange}>
          <span>&nbsp;</span>
        </VisibilitySensor>
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            My Career Journey so far.
          </h1>

          <div className=" mt-14 grid grid-cols-1 space-y-20 lg:grid-cols-4 lg:space-y-0 lg:pr-20">
            {items.map((item: Item) => (
              <div key={item.company} className="flex flex-col">
                <div className="flex items-center">
                  <div className="z-10 mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-200 ring-0 ring-white/10 sm:ring-8 lg:m-0">
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3 text-[hsl(280,100%,70%)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="hidden h-0.5 w-full bg-white/10 sm:flex"></div>
                </div>
                <div className="mt-5 sm:pr-8 lg:mt-10">
                  <h3 className="text-lg font-semibold text-white dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-base font-normal text-white/50 dark:text-gray-400">
                    {item.company}
                  </p>
                  <time className="mb-2 block text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                    {item.dateRange}
                  </time>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
