import * as express from 'express'

const app: express.Express = express()

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
