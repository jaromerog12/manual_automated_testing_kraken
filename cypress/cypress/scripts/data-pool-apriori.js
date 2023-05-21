

const fs = require('fs');
const {get} = require("axios");
//******************************************************
//                     ACCOUNT
//******************************************************
let login_name_file = 'login.json';
let tag_name_file = 'tags.js';
get('https://my.api.mockaroo.com/' + login_name_file + '?key=294f03c0')
    .then(response => {
        let path_file_account = __dirname.replace("scripts", "fixtures/data-pool-apriori/" + login_name_file);
        // Guardar la respuesta en un archivo JSON
        fs.writeFile(path_file_account, JSON.stringify(response.data), err => {
            if (err) {
                console.error('Error al guardar el archivo:', err);
            } else {
                console.log('Respuesta guardada correctamente en ' + login_name_file);
            }
        });
    })
    .catch(error => {
        console.error('Error al hacer la petición:', error);
    });

get('https://my.api.mockaroo.com/' + tag_name_file + '?key=294f03c0')
    .then(response => {
        let path_file_account = __dirname.replace("scripts", "fixtures/data-pool-apriori/" + tag_name_file);
        // Guardar la respuesta en un archivo JSON
        fs.writeFile(path_file_account, JSON.stringify(response.data), err => {
            if (err) {
                console.error('Error al guardar el archivo:', err);
            } else {
                console.log('Respuesta guardada correctamente en ' + tag_name_file);
            }
        });
    })
    .catch(error => {
        console.error('Error al hacer la petición:', error);
    });