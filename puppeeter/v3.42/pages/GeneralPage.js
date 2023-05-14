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
        await this.page.goto('http://localhost:3001/ghost/#/settings/general/');
        await new Promise(r => setTimeout(r, 5000));
    }

    async tomarImagen(name){
        await this.page.screenshot({ path: this.folder + '/' + name + '_general.png' });
    }

    async abrirDesplegableTitulo()
    {
        await this.page.click('div > main > section > div > section > div.flex.flex-column.br3.shadow-1.bg-grouped-table.pa5.mt2 > div.gh-setting-first > div.gh-setting-action > button');
        await new Promise(r => setTimeout(r, 10000));
    }

    async modificarTituloDescripcion()
    {
        await this.page.type('div > div:nth-child(1) > input', faker.lorem.words(3));
        await this.page.type('div > main > section > div > section > div.flex.flex-column.br3.shadow-1.bg-grouped-table.pa5.mt2 > div.gh-setting-first > div.gh-setting-content > div.liquid-container.ember-view > div > div > div.description-container.form-group.ember-view > input', faker.lorem.words(5));
        await new Promise(r => setTimeout(r, 5000));
    }

    async abrirDesplegableMeta()
    {
        await this.page.click('div > main > section > div > section > div:nth-child(6) > div.gh-setting-first.flex-column > div.flex.flex-row.justify-between.w-100 > div.gh-setting-action > button');
        await new Promise(r => setTimeout(r, 5000));
    }

    async abrirDesplegableTwitter()
    {
        await this.page.click('div > main > section > div > section > div:nth-child(6) > div.gh-setting.flex-column > div.flex.flex-row.justify-between.w-100 > div.gh-setting-action > button');
        await new Promise(r => setTimeout(r, 5000));
    }

    async abrirDesplegableFacebook()
    {
        await this.page.click('div > main > section > div > section > div:nth-child(6) > div.gh-setting-last.flex-column > div.flex.flex-row.justify-between.w-100 > div.gh-setting-action > button');
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
        await this.page.click('button[data-test-button="save"]');
    }

    async guardar()
    {
        await this.page.click('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]');
    }
}

module.exports = GeneralPage