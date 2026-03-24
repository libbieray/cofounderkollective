import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resend = new Resend(process.env.RESEND_API_KEY);

interface ApplicationData {
  name: string;
  email: string;
  product: string;
  url?: string;
  bio: string;
  revenue: string;
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());

  // API route for form submissions
  app.post("/api/applications", async (req, res) => {
    try {
      const data: ApplicationData = req.body;

      // Validate required fields
      if (!data.name || !data.email || !data.product || !data.bio) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Send confirmation email to applicant
      await resend.emails.send({
        from: "CoFounder Kollective <noreply@connect.cofounderkollective.com>",
        to: data.email,
        subject: "We Received Your Application",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Application Received</h2>
            <p>Hi ${data.name},</p>
            <p>Thank you for reaching out to CoFounder Kollective. We've received your application for <strong>${data.product}</strong>.</p>
            <p>We review every application personally and will respond within two weeks with feedback—whether it's a yes, a not yet, or a referral.</p>
            <p>Best regards,<br/>The CoFounder Kollective Team</p>
          </div>
        `,
      });

      // Send notification email to team
      await resend.emails.send({
        from: "CoFounder Kollective <noreply@connect.cofounderkollective.com>",
        to: process.env.TEAM_EMAIL || "team@cofounderkollective.com",
        subject: `New Application: ${data.product}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Application Received</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Product:</strong> ${data.product}</p>
            ${data.url ? `<p><strong>Website/Social:</strong> <a href="${data.url}">${data.url}</a></p>` : ""}
            <p><strong>Monthly Revenue:</strong> ${data.revenue}</p>
            <p><strong>About the Product:</strong></p>
            <p>${data.bio.replace(/\n/g, "<br />")}</p>
          </div>
        `,
      });

      res.json({ success: true, message: "Application submitted successfully" });
    } catch (error) {
      console.error("Error processing application:", error);
      res.status(500).json({ error: "Failed to process application" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
