const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ledger:ledgerpass@openledger.nhu8y.mongodb.net/?retryWrites=true&w=majority&appName=openledger', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected successfully...')
}).catch((err) => {
    console.error('Error ', err)
})

module.exports = mongoose