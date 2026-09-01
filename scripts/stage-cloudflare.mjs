import { cp, mkdir, rm } from "node:fs/promises";

const destination = ".cloudflare-assets/ctraceback";

// Delete old staged files so deleted docs/assets do not remain online.
await rm(".cloudflare-assets", {
  recursive: true,
  force: true,
});

// Recreate the path matching https://alvinng4.com/ctraceback/
await mkdir(destination, {
  recursive: true,
});

// Copy the *contents* of out/ into .cloudflare-assets/ctraceback/
await cp("out", destination, {
  recursive: true,
});

console.log(`Staged out/ → ${destination}/`);
