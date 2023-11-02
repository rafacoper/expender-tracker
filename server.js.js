const express = require('express')
const app = express()

app.get('/', (_req, res) => {
  res.json({ message: "Connected!" })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`))