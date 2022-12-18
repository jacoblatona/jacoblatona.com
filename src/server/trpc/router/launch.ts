import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const launchRouter = router({
  getNextLaunch: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(async () => {
      const url = "https://fdo.rocketlaunch.live/json/launches/next/1";
      const res = await fetch(url);
      const results = await res.json();
      return {
        launches: results,
      };
    }),
});
