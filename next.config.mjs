import nextra from "nextra";

const withNextra = nextra({
    search: true,
    defaultShowCopyCode: true,
    latex: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }
}

export default withNextra(nextConfig);
