class Base{
    constructor(page){
        this.page = page;
    }

    async open(url) {
        await this.page.goto(url);        
    }

    async login(user, password){
        this.waitUntil(500);
        this.page.waitForSelector('input#identification');
        await this.page.type('input#identification', user);
        await this.page.type('input#password', password);
        await this.page.click('button#ember5');
    }    

    async waitUntil(mili){
        await new Promise(r => setTimeout(r, mili));
    }

    async newPost(){
        await this.waitUntil(300);
        await this.page.waitForSelector("[title='New post']")
        let button = await this.page.$("[title='New post']");
        await button.evaluate(b => b.click());
    }

    async writeTitlePost(title){
        await this.page.waitForSelector("[placeholder='Post title']")
        await this.page.type("[placeholder='Post title']", title);
    }

    async writeTextPost(text){
        await this.page.waitForSelector("div.koenig-editor__editor.__mobiledoc-editor.__has-no-content")
        await this.page.type("div.koenig-editor__editor.__mobiledoc-editor.__has-no-content", text);
    }

}

module.exports = Base;