const mongoose = require('mongoose');

module.exports = async () => {  
    try {
        const connectionParams ={
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true
        };
        await mongoose.connect(process.env.MONGO_URI, connectionParams)
        .then((data) => {
            console.log(`Connected to database: ${data.connection.name} ${data.connection.host}`);
        });
        console.log('Connected to database ');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}