import React, { useState } from 'react'
import ApiKeyInput from 'components/ApiKeyInput/ApiKeyInput'
import ColumnDuplicator from 'components/ColumnDuplicator/ColumnDuplicator'

function App () {
  const [apiKey, setApiKey] = useState('')

  return <div>
    <ApiKeyInput apiKey={apiKey} onChange={setApiKey} />
    <ColumnDuplicator apiKey={apiKey} />
  </div>
}

export default App
