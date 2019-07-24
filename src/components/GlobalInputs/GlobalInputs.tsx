import * as React from 'react'

type Props = {
  apiKey: string
  chartId: string
  onChangeApiKey: (apiKey: string) => void
  onChangeChartId: (chartId: string) => void
}
function ColumnDuplicator (props: Props) {
  const { apiKey, chartId, onChangeApiKey, onChangeChartId } = props

  return <>
    <p>
      <label htmlFor='apiKey'>API Key:</label>
      <input id='apiKey' value={apiKey} onChange={e => { onChangeApiKey(e.target.value) }} />
    </p>
    <p>
      <label htmlFor='chartId'>Chart ID:</label>
      <input id='chartId' value={chartId} onChange={e => { onChangeChartId(e.target.value) }} />
    </p>
  </>
}

export default ColumnDuplicator
