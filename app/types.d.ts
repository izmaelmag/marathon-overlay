declare interface Runner {
  name: string
  currentDistance: number
  status: 'running' | 'finished' | 'paused'
}

declare interface WebSocketResponse {
  runners: Runner[]
  seconds: number
  donationGoal: number
  donates: number
}
