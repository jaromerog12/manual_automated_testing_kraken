const fs = require('fs');
const config = require('../config.json');
const { faker } = require('@faker-js/faker');

class PagesPage{
    constructor(page, folder)
    {
        this.page = page;
        this.folder = config.parameters.folder + "/" + folder + "/";
        fs.mkdirSync(this.folder, { recursive: true });
    }

    async tomarImagen(name){
        await this.page.screenshot({ path: this.folder + '/' + name + '_pages.png' });
    }

    async abrirPagina() {
        await this.page.goto('http://localhost:2368/ghost/#/pages');
        await new Promise(r => setTimeout(r, 5000));
    }

    async abrirURLPagina(url) {
        await this.page.goto(url);
        await new Promise(r => setTimeout(r, 5000));
    }

    async abrirPaginaNombre(name) {
        await this.page.goto('http://localhost:2368/'+ name);
        await new Promise(r => setTimeout(r, 5000));
    }

    async nuevoPage() {
        await this.page.click('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]');
        await new Promise(r => setTimeout(r, 10000));
    }

    async publicarPage()
    {
        await this.page.click('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
        await new Promise(r => setTimeout(r, 10000));
    }

    async abrirSideMenu()
    {
        await this.page.click('body > div.gh-app > div > main > button');
        await new Promise(r => setTimeout(r, 10000));
    }

    async abrirFiltroAutores()
    {
        await this.page.click('div.gh-app > div > main > section > div > header > section > div > div.gh-contentfilter-menu.gh-contentfilter-author');
        await new Promise(r => setTimeout(r, 10000));
    }

    async seleccionarFiltroAutores()
    {
        await this.page.click('#ember-basic-dropdown-wormhole > div > ul > li:nth-child(2)');
        await new Promise(r => setTimeout(r, 10000));
    }

    async abrirFiltroEstado()
    {
        await this.page.click('div.gh-app > div > main > section > div > header > section > div > div.gh-contentfilter-menu.gh-contentfilter-type');
        await new Promise(r => setTimeout(r, 10000));
    }

    async seleccionarFiltroEstado()
    {
        await this.page.click('#ember-basic-dropdown-wormhole > div > ul > li:nth-child(3)');
        await new Promise(r => setTimeout(r, 10000));
    }

    async eliminarPage()
    {
        await this.page.click('#entry-controls > div > div.settings-menu-content > div > button');
        await new Promise(r => setTimeout(r, 10000));
    }

    async confirmarEliminarPage()
    {
        await this.page.click('div.modal-footer > button.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
        await new Promise(r => setTimeout(r, 10000));
    }

    async updatePublicarPage()
    {
        await this.page.click('button.gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view');
        await new Promise(r => setTimeout(r, 10000));
    }

    async continuarPublicacion()
    {
        await this.page.click('div.gh-publish-cta > button');
        await new Promise(r => setTimeout(r, 10000));
    }

    async publicarAhoraPage()
    {
        await this.page.click('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
        await new Promise(r => setTimeout(r, 10000));
    }

    async llenarFormulario()
    {
        const name = faker.lorem.words(3)
        await this.page.type('div.gh-koenig-editor.relative.w-100.vh-100.overflow-x-hidden.overflow-y-auto.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > textarea', name);
        await this.page.type('div.koenig-editor__editor-wrapper > div', faker.lorem.words(5));
        await new Promise(r => setTimeout(r, 5000));
        return [this.page.url(), name];
    }

}


module.exports = PagesPage;