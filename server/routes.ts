import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema, insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefixing all routes with /api
  
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = insertSubscriberSchema.parse(req.body);
      const subscriber = await storage.createSubscriber(validatedData);
      res.status(201).json({ success: true, subscriber });
    } catch (error) {
      const validationError = fromZodError(error);
      res.status(400).json({ 
        success: false, 
        message: validationError.message 
      });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json({ success: true, contact });
    } catch (error) {
      const validationError = fromZodError(error);
      res.status(400).json({ 
        success: false, 
        message: validationError.message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
