import * as React from 'react'
import { useState } from 'react'
import colorTableCells from './colorTableCells'

type Props = {
  chartId: string
  apiKey: string
}
function ColumnDuplicator (props: Props) {
  const { apiKey, chartId } = props
  const [status, setStatus] = useState('')
  const [colorBrewerScale, setColorBrewerScale] = useState('YlOrRd')
  const [maxValue, setMaxValue] = useState(100)

  async function run () {
    setStatus('running')
    try {
      await colorTableCells(apiKey, chartId, colorBrewerScale, maxValue)
      setStatus('all good')
    } catch(e) {
      console.log(e)
      setStatus('' + e)
    }
  }

  return <>
    <label htmlFor='maxValue'>Max:</label>
    <input value={maxValue} onChange={e => { setMaxValue(+e.target.value) }} />
    <label htmlFor='maxValue'>Scala:</label>

    <input value={colorBrewerScale} onChange={e => { setColorBrewerScale(e.target.value) }} />
    <button onClick={run}>generate Heatmap</button>
    <output>{status}</output>
  </>
}

export default ColumnDuplicator
