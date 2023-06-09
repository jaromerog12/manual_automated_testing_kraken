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
        await this.page.goto('http://localhost:3002/ghost/#/settings/general/');
        await new Promise(r => setTimeout(r, 5000));
    }

    async tomarImagen(name){
        await this.page.screenshot({ path: this.folder + '/' + name + '_general.png' });
    }

    async abrirDesplegableTitulo()
    {
        await this.page.click('body > div.gh-app > div > main > section > div:nth-child(2) > section > div:nth-child(1) > div.gh-expandable-header > button');
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
        await this.page.click('div.gh-app > div > main > section > div:nth-child(3) > section > div:nth-child(1) > div.gh-expandable-header > button');
        await new Promise(r => setTimeout(r, 5000));
    }

    async abrirDesplegableTwitter()
    {
        await this.page.click('body > div.gh-app > div > main > section > div:nth-child(3) > section > div:nth-child(2) > div.gh-expandable-header > button');
        await new Promise(r => setTimeout(r, 5000));
    }

    async abrirDesplegableFacebook()
    {
        await this.page.click('body > div.gh-app > div > main > section > div:nth-child(3) > section > div:nth-child(3) > div.gh-expandable-header > button');
        await new Promise(r => setTimeout(r, 5000));
    }
    
    async modificarMeta()
    {
        await this.page.type('#metaTitle', faker.lorem.words(3));
        await this.page.type('#metaDescription', faker.lorem.words(5));
        await new Promise(r => setTimeout(r, 5000));
    }

    async modificarTwitter()
    {
        await this.page.type('#twitterTitle', faker.lorem.words(3));
        await this.page.type('#twitterDescription', faker.lorem.words(5));
        await new Promise(r => setTimeout(r, 5000));
    }

    async modificarFacebook()
    {
        await this.page.type('#ogTitle', faker.lorem.words(3));
        await this.page.type('#ogDescription', faker.lorem.words(5));
        await new Promise(r => setTimeout(r, 5000));
    }

    async guardarMeta()
    {
        await this.page.click('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
    }

    async guardar()
    {
        await this.page.click('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
    }
}

module.exports = GeneralPage