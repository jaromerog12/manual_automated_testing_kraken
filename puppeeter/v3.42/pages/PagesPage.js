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
        await this.page.goto('http://localhost:3001/ghost/#/pages');
        await new Promise(r => setTimeout(r, 5000));
    }

    async abrirURLPagina(url) {
        await this.page.goto(url);
        await new Promise(r => setTimeout(r, 5000));
    }

    async abrirPaginaNombre(name) {
        await this.page.goto('http://localhost:3001/'+ name.replace(/ /g, '-'));
        await new Promise(r => setTimeout(r, 5000));
    }

    async nuevoPage() {
        await this.page.click('a[class="ember-view gh-btn gh-btn-green"]');
        await new Promise(r => setTimeout(r, 10000));
    }

    async publicarPage()
    {
        await this.page.click('header > section > div > div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger');
        await new Promise(r => setTimeout(r, 10000));
    }

    async abrirSideMenu()
    {
        await this.page.click('header > section > button');
        await new Promise(r => setTimeout(r, 10000));
    }

    async abrirFiltroEstado()
    {
        await this.page.click('div[class="ember-view ember-basic-dropdown-trigger  ember-power-select-trigger gh-contentfilter-menu-trigger"]');
        await new Promise(r => setTimeout(r, 10000));
    }

    async seleccionarFiltroEstado()
    {
        await this.page.click('#ember-basic-dropdown-wormhole > div > ul > li:nth-child(3)');
        await new Promise(r => setTimeout(r, 10000));
    }

    async eliminarPage()
    {
        await this.page.click('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]');
        await new Promise(r => setTimeout(r, 10000));
    }

    async confirmarEliminarPage()
    {
        await this.page.click('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
        await new Promise(r => setTimeout(r, 10000));
    }

    async updatePublicarPage()
    {
        await this.page.click('button.gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view');
        await new Promise(r => setTimeout(r, 10000));
    }

    async continuarPublicacion()
    {
        await this.page.click('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]');
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