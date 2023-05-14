const puppeteer = require('puppeteer');
const { faker } = require('@faker-js/faker');
const LoginPage = require('./pages/login/LoginPages');

const fs = require('fs');
const folderName = './case_2/';

const title = faker.lorem.words(3);
console.log(title);
const content = faker.lorem.words(20);
console.log(content);

(async()=>{
    
    fs.mkdirSync(folderName, { recursive: true });
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:2368/ghost/#/signin');
    const login = new LoginPage(page, 'asd');
    
    
    await login.ingresar_credenciales('leonardo@gmail.com', 'Febrero.2023')

    await page.screenshot({path: folderName + '/1.png'});
    await page.click('button[id="ember5"]');
    await new Promise(r => setTimeout(r, 5000));
    await page.screenshot({path: folderName + '/2.png'}) 
    await new Promise(r => setTimeout(r, 5000));
    await page.screenshot({path: folderName + '/3.png'}) 
    await page.goto('http://localhost:2368/ghost/#/editor/post');
    await new Promise(r => setTimeout(r, 5000));
    await page.screenshot({path: folderName + '/4.png'});

    await page.type('textarea', title);
    await page.type('div[data-kg="editor"]', content);
    await new Promise(r => setTimeout(r, 5000));

    await page.click('button[data-test-button="publish-preview"]');
    await new Promise(r => setTimeout(r, 5000));
    await page.screenshot({path: folderName + '/5.png'});
    
    await page.screenshot({path: folderName + '/6.png'});
    await page.click('button[data-test-button="publish-flow"]');
    await new Promise(r => setTimeout(r, 5000));
    await page.screenshot({path: folderName + '/7.png'});

    await page.click('button[class="gh-publish-setting-title"]');
    await new Promise(r => setTimeout(r, 5000));
    await page.screenshot({path: folderName + '/8.png'});

    await page.click('button[class="gh-btn gh-btn-black gh-btn-large"]');
    await new Promise(r => setTimeout(r, 5000));
    await page.screenshot({path: folderName + '/9.png'});

    await page.click('button[data-test-button="confirm-publish"]');
    await new Promise(r => setTimeout(r, 5000));
    await page.screenshot({path: folderName + '/10.png'});

    await page.goto('http://localhost:2368/ghost/#/posts?type=draft');
    await new Promise(r => setTimeout(r, 5000));
    await page.screenshot({path: folderName + '/11.png'});

    await page.goto('http://localhost:2368/ghost/#/posts?type=published');
    await new Promise(r => setTimeout(r, 5000));
    await page.screenshot({path: folderName + '/12.png'});

    await browser.close();
    return;
})().catch(e=>console.log(e));