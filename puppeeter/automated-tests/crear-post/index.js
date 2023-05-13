
const crearPost = require('./CrearPost');
(async () => {
    await crearPost[0]();
    setTimeout(async () => await crearPost[1](), 1000)    
    }
)();
