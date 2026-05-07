import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
const app = express();
const PORT = 3000;

app.use(express.json());

// Mock API for authentication
app.post("/api/auth/login", (req, res) => {
  const { email } = req.body;
  const name = email.split('@')[0].split('.').map((s: string) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  res.json({ 
    success: true, 
    user: { name, email } 
  });
});

app.post("/api/auth/register", (req, res) => {
  const { name, email } = req.body;
  res.json({ success: true, user: { name, email } });
});

// Vite middleware logic
async function setupVite() {
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
}

await setupVite();

// Only listen if not being imported as a module (e.g. by Vercel)
if (import.meta.url === `file://${process.argv[1]}`) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
