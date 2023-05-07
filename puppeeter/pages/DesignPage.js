const fs = require('fs');
const config = require('../config.json')
const { faker } = require('@faker-js/faker');

class DesignPage {
    constructor(page, folder) {
        this.page = page;
        this.folder = config.parameters.folder + "/" + folder + "/";
        fs.mkdirSync(this.folder, { recursive: true });
    }

    async abrirPagina() {
        await this.page.goto('http://localhost:2368/ghost/#/settings/navigation');
        await new Promise(r => setTimeout(r, 5000));
    }

    async abrirPrincipal() {
        await this.page.goto('http://localhost:2368');
        await new Promise(r => setTimeout(r, 5000));
    }

    async tomarImagen(name){
        await this.page.screenshot({ path: this.folder + '/' + name + '_design.png' });
    }

    async agregarNombreMenu(name){
        await this.page.type('#settings-navigation > div.gh-blognav-item.ember-view > div > span.gh-blognav-label > input', name);
        await this.page.type('#settings-navigation > div.gh-blognav-item.ember-view > div > span.gh-blognav-url > input', '/'+name);
        await new Promise(r => setTimeout(r, 5000));
    }

    async agregarNombreMenuSecundario(name){
        await this.page.type('#secondary-navigation > div.gh-blognav-item.ember-view > div > span.gh-blognav-label > input', name);
        await this.page.type('#secondary-navigation > div.gh-blognav-item.ember-view > div > span.gh-blognav-url > input', '/'+name);
        await new Promise(r => setTimeout(r, 5000));
    }

    async eliminarSecundarioMenu()
    {
        await this.page.click('#secondary-navigation > div.sortable-objects.ember-view > div:nth-last-child(1) > div > button');
        await new Promise(r => setTimeout(r, 5000));
    }

    async eliminarMenu()
    {
        await this.page.click('#settings-navigation > div.sortable-objects.ember-view > div:nth-last-child(1) > div > button');
        await new Promise(r => setTimeout(r, 5000));
    }

    async guardarCambios()
    {
        await this.page.click('body > div.gh-app > div > main > section > div > header > section > button');
        await new Promise(r => setTimeout(r, 5000));
    }
}

module.exports = DesignPage