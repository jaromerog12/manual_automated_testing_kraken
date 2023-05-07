const fs = require('fs');
const config = require('../config.json')
const { faker } = require('@faker-js/faker');

class GeneralPage {
    constructor(page, folder) {
        this.page = page;
        this.folder = config.parameters.folder + "/" + folder + "/";
        fs.mkdirSync(this.folder, { recursive: true });
    }

    async abrirPagina() {
        await this.page.goto('http://localhost:2368/ghost/#/settings/general/');
        await new Promise(r => setTimeout(r, 5000));
    }

    async tomarImagen(name){
        await this.page.screenshot({ path: this.folder + '/' + name + '_general.png' });
    }

    async abrirDesplegableTitulo()
    {
        await this.page.click('div.gh-app > div > main > section > div:nth-child(2) > div:nth-child(1) > section > div:nth-child(1) > div.gh-expandable-header > button');
        await new Promise(r => setTimeout(r, 10000));
    }

    async modificarTituloDescripcion()
    {
        await this.page.type('div.gh-expandable-content > div > div > div > div:nth-child(1) > input', faker.lorem.words(3));
        await this.page.type('div.gh-expandable-content > div > div > div > div.form-group.description-container > input', faker.lorem.words(5));
        await new Promise(r => setTimeout(r, 5000));
    }

    async abrirDesplegableMeta()
    {
        await this.page.click('div.gh-app > div > main > section > div:nth-child(2) > div:nth-child(2) > section > div:nth-child(1) > div.gh-expandable-header > button');
        await new Promise(r => setTimeout(r, 5000));
    }
    
    async modificarMeta()
    {
        await this.page.type('#metaTitle', faker.lorem.words(3));
        await this.page.type('#metaDescription', faker.lorem.words(5));
        await new Promise(r => setTimeout(r, 5000));
    }

    async guardarMeta()
    {
        await this.page.click('button[data-test-button="save"]');
    }

    async guardar()
    {
        await this.page.click('button[data-test-button="save"]');
    }
}

module.exports = GeneralPage