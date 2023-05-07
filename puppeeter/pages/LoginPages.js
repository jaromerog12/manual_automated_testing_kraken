const fs = require('fs');
const config = require('../config.json')

class LoginPage{
    constructor(page, folder)
    {
        this.page = page;
        this.folder = config.parameters.folder + "/" + folder + "/";
        fs.mkdirSync(this.folder, { recursive: true });
    }

    async abrirPagina() {
        await this.page.goto('http://localhost:2368/ghost/#/signin');
        await new Promise(r => setTimeout(r, 5000));
    }

    async ingresarCredenciales()
    {
        await this.page.type('input[name="identification"]', config.parameters.login.user);
        await this.page.type('input[name="password"]', config.parameters.login.password);
    }

    async autenticar()
    {
        await this.page.click('button[id="ember5"]');
    }

    async tomarImagen(name){
        await this.page.screenshot({ path: this.folder + '/' + name + '_login.png' });
    }
}

module.exports = LoginPage;