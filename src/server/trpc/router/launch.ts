import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const launchRouter = router({
  getNextLaunch: publicProcedure.query(async () => {
    const url =
      "https://booster.spaceflight.live/?query=query%20getUpcomingLaunches(%24limit%3A%20Int%2C%20%24when%3A%20DateTime!%20%3D%20%22NOW()%22)%20%7B%0A%20%20launches(%0A%20%20%20%20limit%3A%20%24limit%0A%20%20%20%20orderBy%3A%20%7Bfield%3A%20net%2C%20direction%3A%20ASC%7D%0A%20%20%20%20filters%3A%20%5B%7Bfield%3A%20status%2C%20operation%3A%20not%2C%20value%3A%20%22TBD%22%7D%2C%20%7Bfield%3A%20net%2C%20operation%3A%20gt%2C%20date%3A%20%24when%7D%5D%0A%20%20)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20net%0A%20%20%20%20pad%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20location%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20vehicle%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20image%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A";
    const res = await fetch(url);
    const results = await res.json();
    return {
      launches: results.data,
    };
  }),
});
