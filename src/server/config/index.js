module.exports = {
    port: process.env.PORT || 8080,
    db: {
        prod: process.env.DATABASE_URL || 'mongodb+srv://coddy:coddy@cluster0.4x8vl.mongodb.net/smarthome-iotgateway',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    }
};

