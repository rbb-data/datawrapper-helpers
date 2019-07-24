import Chroma from 'chroma-js'

async function run (apiKey: string, chartId: string, colorBrewerScale: string, maxValue: number) {
  const metaRes = await fetch(`https://api.datawrapper.de/charts/${chartId}`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  })
  const metaJson = await metaRes.json()
  const chart = metaJson.data

  console.log(chart)

  const columnNames = Object.keys(chart.metadata.visualize.columns)
  const scale = Chroma.scale('YlOrRd').domain([0, maxValue])

  columnNames.forEach(name => {
    const colors = scale.colors(maxValue).reduce((obj: {[key: number]: string}, color: string, i: number) => {
      obj[i] = color
      return obj
    }, {})

    chart.metadata.visualize.columns[name].customColorBy = 1
    chart.metadata.visualize.columns[name].customColorBackground = colors
  })

  const putRes = await fetch(`https://api.datawrapper.de/charts/${chartId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(chart)
  })

  return putRes
}

export default run