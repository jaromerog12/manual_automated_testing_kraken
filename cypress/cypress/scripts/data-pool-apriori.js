const fs = require('fs');
const {get} = require("axios");

const generate_data_apiori = (api_name, key, file_name) => {
    console.log(`https://my.api.mockaroo.com/${api_name}?key=${key}`);
    get(`https://my.api.mockaroo.com/${api_name}?key=${key}`)
        .then(response => {
            let path_file_account = __dirname.replace("scripts", `fixtures/data-pool-apriori/${file_name}`);
            // Guardar la respuesta en un archivo JSON
            fs.writeFile(path_file_account, JSON.stringify(response.data), err => {
                if (err) {
                    console.error('Error al guardar el archivo:', err);
                } else {
                    console.log('Respuesta guardada correctamente en ' + file_name);
                }
            });
        })
        .catch(error => {
            console.error('Error al hacer la petición:', error);
        });
}

generate_data_apiori('post.json','5dc68f00','data_apriori_post.json');
generate_data_apiori('login.json','294f03c0','data_apriori_post.json');
generate_data_apiori('tags.json','294f03c0','data_apriori_post.json');
generate_data_apiori('pages.json','5dc68f00','data_apriori_page.json');