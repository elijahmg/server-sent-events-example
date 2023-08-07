# Simple example of server sent events (SSE)


Traditionally, a web page has to send a request to the server to receive new data; that is, the page requests data from the server. With server-sent events, it's possible for a server to send new data to a web page at any time, by pushing messages to the web page. These incoming messages can be treated as Events + data inside the web page.

[Read more about SSE](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)

## Setup

1. Install deps in `client` and `server` with `yarn`.
2. Go back to root and run `yarn dev`
3. Open `http://localhost:5173`