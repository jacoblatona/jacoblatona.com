import { useAtom } from "jotai";
import { tabAtom } from "../atoms";
import VisibilitySensor from "react-visibility-sensor";

const Contact: React.FC = () => {
  const [, setTab] = useAtom(tabAtom);

  function onChange(isVisible: boolean) {
    if (isVisible) setTab("Contact");
  }
  return (
    <>
      <div
        className="container mx-auto flex min-h-screen flex-col justify-center gap-12 px-4 py-16  text-center lg:pr-64 lg:text-left"
        id="Contact"
      >
        <VisibilitySensor onChange={onChange}>
          <span>&nbsp;</span>
        </VisibilitySensor>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Get in Touch.
        </h1>
        <p className="text-2xl text-white">
          Feel free to shoot me an email anytime!
        </p>

        <div className="flex items-center justify-center gap-5 text-[hsl(280,100%,70%)] lg:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <a
            href="mailto:hi@jacoblatona.com"
            className="flex items-center text-2xl"
          >
            hi@jacoblatona.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
