import Link from "next/link";
import { useRouter } from "next/router";
import { VercelLogo } from "./components/Icons";

const config = {
  readMore: "Read More →",
  darkMode: true,
  postFooter: null,
  footer: (
    <>
      <hr />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p>
          Copyright - 2019 - {new Date().getFullYear()} @ The dahliaOS Authors
        </p>
        <Link
          href="https://vercel.com?utm_source=dahliaOS&amp;utm_campaign=oss"
          target="_blank"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          Powered By
          <VercelLogo />
        </Link>
      </div>
    </>
  ),
  head: ({ title, meta }: { title: any; meta: any }) => {
    const { asPath, route } = useRouter();

    return (
      <>
        {route === "/blog" ? (
          <meta
            name="description"
            content="Browse all blog posts made by dahliaOS maintainers."
          />
        ) : (
          <meta name="description" content={meta.description} />
        )}
        {route === "/blog" ? (
          <meta
            name="og:description"
            content="Browse all blog posts made by dahliaOS maintainers."
          />
        ) : (
          <meta name="og:description" content={meta.description} />
        )}
        {<meta name="author" content={meta.author} />}
        {route === "/" ? (
          <title>dahliaOS Blog</title>
        ) : (
          <title>{`${title} - dahliaOS Blog`}</title>
        )}
        {route === "/" ? (
          <meta name="og:title" content="dahliaOS Blog" />
        ) : (
          <meta name="og:title" content={`${title} - dahliaOS Blog`} />
        )}

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://blog.dahliaos.io" />
        <meta property="og:url" content={`https://blog.dahliaos.io${asPath}`} />
        <meta name="theme-color" content="#ff3d00" />
        <meta property="og:image" content="https://imgur.com/pqgjEpd.png" />
        <meta property="og:site_name" content="dahliaOS" />
        <meta name="viewport" content="width=device-width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon/favicon-32x32.png"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="#ff3d00" />
        <meta name="apple-mobile-web-app-title" content="dahliaOS" />
        <meta
          name="msapplication-TileImage"
          content="/images/favicon/favicon.png"
        />
        <meta name="msapplication-TileColor" content="#ff3d00" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="keywords"
          content={`${meta.tag}, dahlia, blog, software, flutter, fuchsia, linux, dahliaOS, computer, operating system, os, system, kernel, dart, open source, material, design, zircon, go, rust`}
        />
        <meta httpEquiv="Content-Language" content="en" />
      </>
    );
  },
  navs: [
    { url: "https://dahliaos.io", name: "Website ↗" },
    { url: "https://dahliaos.io/github", name: "GitHub ↗" },
  ],
};

export default config;
