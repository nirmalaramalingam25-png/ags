import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import path from "path";
import { promises as fs } from "fs";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Configure multer for file uploads
  const upload = multer({
    dest: 'uploads/',
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB limit
    },
    fileFilter: (req, file, cb) => {
      const allowedTypes = /pdf|doc|docx/;
      const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = allowedTypes.test(file.mimetype);

      if (mimetype && extname) {
        return cb(null, true);
      } else {
        cb(new Error('Only PDF, DOC, and DOCX files are allowed!'));
      }
    }
  });

  // Ensure uploads directory exists
  try {
    await fs.access('uploads');
  } catch {
    await fs.mkdir('uploads');
  }

  // Application submission endpoint
  app.post('/api/applications', upload.single('resume'), async (req, res) => {
    try {
      const { fullName, email, phone, position, specializationId, coverLetter } = req.body;
      const resume = req.file;

      // Here you would typically save to database
      // For now, just log the application
      console.log('New application received:', {
        fullName,
        email,
        phone,
        position,
        specializationId,
        coverLetter,
        resume: resume ? resume.filename : null
      });

      res.json({ success: true, message: 'Application submitted successfully' });
    } catch (error) {
      console.error('Error processing application:', error);
      res.status(500).json({ success: false, message: 'Failed to submit application' });
    }
  });

  return httpServer;
}
