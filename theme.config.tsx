import Vercel from "./components/Vercel";

const config = {
  readMore: "Read More →",
  titleSuffix: " – dahliaOS",
  darkMode: true,
  footer: (
    <footer>
      <hr />
      <small>
        Copyright - 2019 - {new Date().getFullYear()} @{" "}
        <a href="mailto:contact@dahliaos.io">The dahliaOS Authors</a>
        <p>
          <a
            className="w-full inline-flex items-center no-underline text-current font-semibold grayscale"
            href="https://vercel.com/?utm_source=dahliaOS&utm_campaign=osss"
            target="_blank"
          >
            <span className="mr-1">Powered By</span>
            <span>
              <Vercel />
            </span>
          </a>
        </p>
      </small>
    </footer>
  ),
  head: () => {
    return (
      <>
        <meta name="viewport" content="width=device-width" />
        <meta property="og:image" content="https://imgur.com/pqgjEpd.png" />
        <meta property="og:site_name" content="dahliaOS Blog" />
        <meta property="og:title" content="dahliaOS Blog" key="title" />
        <meta
          name="description"
          content="dahliaOS is a modern, secure, lightweight and responsive operating system, combining the best of GNU/Linux and Fuchsia OS."
        />
        <meta
          name="og:description"
          content="dahliaOS is a modern, secure, lightweight and responsive operating system, combining the best of GNU/Linux and Fuchsia OS."
        />
      </>
    );
  },
  navs: [
    { url: "https://dahliaos.io", name: "Website" },
    { url: "https://github.com/dahliaos", name: "GitHub" },
  ],
};

export default config;
