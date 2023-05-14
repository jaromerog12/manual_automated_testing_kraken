
const tag = require('./automated-tests/tag');
const general = require('./automated-tests/general');
const pages = require('./automated-tests/pages');

(async () => {

    await general.Escenario1();
    await general.Escenario2();
    await general.Escenario3();
    await general.Escenario4();
    await tag.Escenario5();
    await tag.Escenario6();
    await pages.Escenario7();
    await pages.Escenario8();
    await pages.Escenario9();
    await pages.Escenario10();
    return;
}
)();