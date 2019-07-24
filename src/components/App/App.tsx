import React, { useState } from 'react'
import GlobalInputs from 'components/GlobalInputs/GlobalInputs'
import HeatmapTableGenerator from 'components/HeatmapTableGenerator/HeatmapTableGenerator'

function App () {
  const [apiKey, setApiKey] = useState('')
  const [chartId, setChartId] = useState('')

  return <div>
    <GlobalInputs
      apiKey={apiKey}
      chartId={chartId}
      onChangeChartId={setChartId}
      onChangeApiKey={setApiKey} />
    <HeatmapTableGenerator apiKey={apiKey} chartId={chartId} />
  </div>
}

export default App
