import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { db } from "./src/db/index.ts";
import { blogPosts } from "./src/db/schema.ts";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.get("/api/blog-posts", async (req, res) => {
    try {
      const posts = await db.select().from(blogPosts).orderBy(blogPosts.displayOrder);
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
