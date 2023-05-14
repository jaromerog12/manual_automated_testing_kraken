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
        await this.page.goto('http://localhost:3001/ghost/#/signin');
        await new Promise(r => setTimeout(r, 5000));
    }

    async ingresarCredenciales()
    {
        await this.page.type('input[name="identification"]', config.parameters.login.user);
        await this.page.type('input[name="password"]', config.parameters.login.password);
    }

    async autenticar()
    {
        await this.page.click('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]');
        await new Promise(r => setTimeout(r, 5000));
    }

    async tomarImagen(name){
        await this.page.screenshot({ path: this.folder + '/' + name + '_login.png' });
    }
}

module.exports = LoginPage;