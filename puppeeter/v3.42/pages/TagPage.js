const fs = require('fs');
const config = require('../config.json');
const { faker } = require('@faker-js/faker');

class TagPage{
    
    constructor(page, folder)
    {
        this.page = page;
        this.folder = config.parameters.folder + "/" + folder + "/";
        fs.mkdirSync(this.folder, { recursive: true });
    }

    async abrirPagina() {
        await this.page.goto('http://localhost:3001/ghost/#/tags');
        await new Promise(r => setTimeout(r, 5000));
    }

    async abrirPaginaTag(name) {
        console.log(name.replace(/ /g, '-'))
        await this.page.goto('http://localhost:3001/ghost/#/tags/' + name.replace(/ /g, '-'));
        await new Promise(r => setTimeout(r, 5000));
    }

    async tomarImagen(name){
        await this.page.screenshot({ path: this.folder + '/' + name + '_tag.png' });
    }

    async nuevoTag() {
        await this.page.click('a[class="ember-view gh-btn gh-btn-green"]');
        await new Promise(r => setTimeout(r, 10000));
    }

    async llenarFormulario()
    {
        const tagname = faker.lorem.words(3)
        await this.page.type('#tag-name', tagname);
        await this.page.type('#tag-description', faker.lorem.words(5));
        await new Promise(r => setTimeout(r, 5000));
        return tagname;
    }

    async guardarTag()
    {
        await this.page.click('div > main > section > form > header > section > button');
        await new Promise(r => setTimeout(r, 5000));
    }

    async eliminarTag()
    {
        await this.page.click('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]');
        await new Promise(r => setTimeout(r, 5000));
    }

    async confirmarEliminarTag()
    {
        await this.page.click('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
        await new Promise(r => setTimeout(r, 5000));
    }
}

module.exports = TagPage;