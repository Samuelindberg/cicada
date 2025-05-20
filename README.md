# Cicada Backend

This repository contains a small static website. A minimal Express backend has been added to provide an `alive` endpoint so that clients can verify that the server is running.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

The server listens on port `3000` by default (or the value of the `PORT` environment variable).

## API

`POST /alive`

Returns a JSON object confirming that the backend is running:

```json
{ "status": "alive" }
```
