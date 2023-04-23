import { Preview } from 'preview'

const code = `
import * as React from 'react'

export default function App() {
  return <h1>Hello world!</h1>
}
`.trim()

export default function App() {
  return <Preview code={code} />
}
