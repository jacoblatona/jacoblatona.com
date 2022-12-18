import { router } from "../trpc";
import { launchRouter } from "./launch";

export const appRouter = router({
  launch: launchRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
