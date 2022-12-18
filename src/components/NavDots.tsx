import { useAtom } from "jotai";
import { tabAtom } from "../atoms";

const items: Array<string> = ["Hero", "Projects", "Journey", "Contact"];

const NavDots: React.FC = () => {
  const [tab, setTab] = useAtom(tabAtom);

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className=" fixed inset-y-0 right-10 hidden flex-col justify-center gap-4 md:flex"
        id="Hero"
      >
        {items.map((item: string, index) => (
          <div
            key={item}
            className={`h-5 w-5 cursor-pointer rounded-full ${
              tab === item ? "bg-[hsl(280,100%,70%)]" : "bg-white/10"
            }`}
            onClick={() => {
              setTab(item);
              handleClickScroll(item);
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default NavDots;
