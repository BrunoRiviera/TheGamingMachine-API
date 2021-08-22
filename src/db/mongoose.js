const mongoose = require('mongoose');

const uri = "mongodb+srv://brunoriviera:gamingpassword@cluster0.9bs6p.mongodb.net/TheGamingMachine?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});