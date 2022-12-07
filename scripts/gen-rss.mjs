import { promises as fs } from "fs";
import path, { dirname } from "path";
import RSS from "rss";
import matter from "gray-matter";
import { fileURLToPath } from 'url';

async function generate() {
  const feed = new RSS({
    title: "dahliaOS Blog",
    site_url: "https://blog.dahliaos.io",
    feed_url: "https://blog.dahliaos.io/feed.xml",
  });

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const posts = await fs.readdir(path.join(__dirname, "..", "pages", "posts"));

  await Promise.all(
    posts.map(async name => {
      if (name.startsWith("index.")) return;

      const content = await fs.readFile(
        path.join(__dirname, "..", "pages", "posts", name),
      );
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: "/posts/" + name.replace(/\.mdx?/, ""),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        author: frontmatter.data.author,
      });
    }),
  );

  await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
