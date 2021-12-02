# Marathon progress streaming overlay

## CLI commands

### Installation
Run **`npm install`** or **`yarn install`** to download project dependencies.<br>You should have Nodejs and npm (or yarn) installed

### Local usage
Run **`npm run start`** or **`yarn start`** to bundle the app and run it at http://localhost:1234<br>You can use this link as browser source in OBS or StreamLabs

### Build static files
Run **`npm run build`** or **`yarn build`** to compile entire project into static *\*.html* and *\*.js* files. They'll be available in *dist* directory

### WebSocket server
You can run demo server with **`npm run demo-server`** command. It will start fake WebSocket server at http://localhost:8787

## Usage
Frontend awaits strictly structured runners data from server with given interface:

```typescript
interface Runner {
  name: string
  currentDistance: number
  status: 'running' | 'finished' | 'paused'
}

type WebSocketResponse = {
  runners: Runner[]      // List of runners
  seconds: number        // Seconds from the start of run
  donationGoal: number   // Donation goal
  donates: number        // Current donations sum
}
```

Use **`server/index.js`** and **`app/types.d.ts`** as a references
