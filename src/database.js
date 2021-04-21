import mongoose from 'mongoose'

const { MONGODB_HOST,
    MONGODB_DATABASE,
    MONGODB_PASS,
    MONGODB_USER } = process.env;

const MONGODB_URI = `mongodb://${MONGODB_USER}:${MONGODB_PASS}${MONGODB_HOST}/${MONGODB_DATABASE}`

mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
    .then(db => console.log("Mongo conected"))
    .catch(error => console.log(error))