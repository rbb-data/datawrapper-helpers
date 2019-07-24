import * as React from 'react'

type Props = {
  apiKey: string
  onChange: (apiKey: string) => void
}
function ColumnDuplicator (props: Props) {
  const { apiKey, onChange } = props

  return <>
    API Key eingeben:
    <input value={apiKey} onChange={e => { onChange(e.target.value) }} />
  </>
}

export default ColumnDuplicator
