import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import Departamento from './models/Departamento'
import Caso from './models/Caso'

const app = express()

app.set('pkg', pkg);

app.use(morgan('dev'));

//Routes
app.get('/', async (req, res) => {
    console.log(req)
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

export default app;