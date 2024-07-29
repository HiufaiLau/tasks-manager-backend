import { Router, Request, Response } from "express";

// fire the router function
export const tasksRouter:Router = Router();


// create a default route
tasksRouter.get('/tasks', (req: Request, res: Response) => {
    res.send('Express + TS server is running');
  });
  