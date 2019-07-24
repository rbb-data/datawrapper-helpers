import * as React from 'react'

type Props = {
  apiKey: string
}
function ColumnDuplicator (props: Props) {
  const { apiKey } = props

  return <p>{apiKey}</p>
}

export default ColumnDuplicator
