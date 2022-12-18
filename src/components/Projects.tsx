import { useAtom } from "jotai";
import { tabAtom } from "../atoms";
import VisibilitySensor from "react-visibility-sensor";

type Project = {
  name: string;
  image: string;
  description: string;
  url: string;
  urlName: string;
};

const projects = [
  {
    name: "KardXP",
    image: "/images/kardxp.png",
    description:
      "KardXP is a platform where you can generate dynamic QR codes linked to printables.",
    url: "https://kardxp.com",
    urlName: "kardxp.com",
  },
  {
    name: "Bytz",
    image: "/images/bytz.jpg",
    description:
      "BYTZ is an open-source decentralized peer-to-peer currency featuring a Delegated Proof of Stake algorithm.",
    url: "https://bytz.gg",
    urlName: "bytz.gg",
  },
  {
    name: "Binge",
    image: "/images/binge.jpg",
    description:
      "Binge is an immersive streaming platform created for the gaming universe.",
    url: "https://binge.com",
    urlName: "binge.com",
  },
  {
    name: "Levels Guild",
    image: "/images/levels.jpg",
    description: "Levels is a leading World of Warcraft Guild and Stream Team.",
    url: "https://levels.gg",
    urlName: "levels.gg",
  },
  {
    name: "Xposed TV",
    image: "/images/xposed.png",
    description:
      "Xposed.tv is a content-hub for massively popular live streamer Xposed.",
    url: "https://xposed.tv",
    urlName: "xposed.tv",
  },
  {
    name: "R19",
    image: "/images/r19.jpg",
    description:
      "R19.gg is a website housing esports tips/predictions/news and more.",
    url: "https://r19.gg",
    urlName: "r19.gg",
  },
];

const Projects: React.FC = () => {
  const [, setTab] = useAtom(tabAtom);

  function onChange(isVisible: boolean) {
    if (isVisible) setTab("Projects");
  }
  return (
    <>
      <div
        className="mx-auto flex min-h-screen max-w-xs flex-col  justify-center gap-10 px-4  py-16 text-center md:max-w-lg  md:text-left lg:container lg:pr-32"
        id="Projects"
      >
        <VisibilitySensor onChange={onChange}>
          <span>&nbsp;</span>
        </VisibilitySensor>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Universe, Meet Dent.
        </h1>
        <p className="text-lg text-white lg:text-2xl">
          Below you can find some recent stuff I have built and/or worked on to
          leave my little dent in the universe.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:pr-32">
          {projects.map((project: Project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;

type ProjectProps = {
  project: Project;
};

const Project: React.FC<ProjectProps> = ({ project }: ProjectProps) => {
  return (
    <>
      <div className="flex cursor-pointer flex-col rounded-xl bg-white/10 px-5 py-8 hover:bg-white/10 lg:bg-transparent">
        <img
          src={project.image}
          className="mx-auto h-10 w-10 rounded-full md:m-0"
        />
        <div className="mt-5 flex flex-col gap-2">
          <p className="text-md font-bold text-white">{project.name}</p>
          <p className="text-white/50">{project.description}</p>
          <div className="mt-5 flex items-center justify-center gap-5 font-semibold text-[hsl(280,100%,70%)] md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            <a href={project.url} target="_blank" rel="noreferrer">
              {project.urlName}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
