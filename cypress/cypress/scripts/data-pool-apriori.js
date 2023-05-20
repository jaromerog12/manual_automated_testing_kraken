

const fs = require('fs');
const {get} = require("axios");
//******************************************************
//                     ACCOUNT
//******************************************************
get('https://my.api.mockaroo.com/login.json?key=294f03c0')
    .then(response => {
        let nameFile = 'login.json';
        let path_file_account = __dirname.replace("scripts", "fixtures/data-pool-apriori/" + nameFile);
        // Guardar la respuesta en un archivo JSON
        fs.writeFile(path_file_account, JSON.stringify(response.data), err => {
            if (err) {
                console.error('Error al guardar el archivo:', err);
            } else {
                console.log('Respuesta guardada correctamente en ' + nameFile);
            }
        });
    })
    .catch(error => {
        console.error('Error al hacer la petición:', error);
    });
