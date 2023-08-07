import express, { Express, Request, Response } from 'express';


const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/events', async (req: Request, res: Response) => {
  res.set({
    'Cache-Control': 'no-cache',
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': 'http://localhost:5173'
  })

  res.flushHeaders()
  res.write('retry: 10000\n\n')

  let count = 0;

  while (true) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Emit', ++count);

    const data = {count, done: false};

    // settings custom event type
    res.write('event: ping\n')

    if (count === 10) {
      data.done = true;
      res.write(`data: ${JSON.stringify(data)}\n\n`)
      break
    }

    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }

  res.end()
})

app.listen(8080, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${8080}`);
});