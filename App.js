const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const personasRoutes = require('./routes/persona.routes');
const productosRoutes = require('./routes/producto.routes')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/personas', personasRoutes);
app.use('/api/productos', productosRoutes);

//conexión a la base de datos

mongoose.connect('mongodb+srv://20233tn125:Mafalda5532@cluster0.bxn1e.mongodb.net/inventario-db?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexión exitosa a la base de datos a MongoDB');
        app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
    })
    .catch((err) => console.log('Error al conectar en MongoDB', err));
