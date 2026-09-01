import { cp, mkdir, rm } from "node:fs/promises";

const destination = ".cloudflare-assets/c_traceback";

await rm(".cloudflare-assets", {
  recursive: true,
  force: true,
});

await mkdir(destination, {
  recursive: true,
});

await cp("out", destination, {
  recursive: true,
});

console.log(`Staged out/ -> ${destination}/`);
