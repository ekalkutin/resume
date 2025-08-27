import fs from 'node:fs';
import path from 'node:path';

import express, { type Request, type Response } from 'express';

import render from './ssr/render';

const app = express();

const STATIC_DIR = path.join(process.cwd(), 'build', 'client');

app.get('/view-resume', (req: Request, res: Response) => {
  res.setHeader(
    'Content-Disposition',
    'attachment; filename="Kalkutin E.K - Certified Developer.pdf"',
  );
  res.setHeader('Content-Type', 'application/pdf');

  const fstream = fs.createReadStream(
    path.join(STATIC_DIR, 'assets', 'files', 'resume.pdf'),
  );

  fstream.pipe(res);
});

app.use(express.static(STATIC_DIR, { index: false }));
app.use((request: Request, response: Response) => {
  const html = render();
  response.status(200).send(html);
});

app.listen(3000);
