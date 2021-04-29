export async function getData() {
  const response = await fetch(/* external API endpoint */)
  const jsonData = await response.json()
  return jsonData
}

export default async function handler(req, res) {
  const jsonData = await getData()
  res.status(200).json(jsonData)
}
