const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const path = require('path');

const { viewportHeight, viewportWidth, browsers, options } = config;

async function executeTest() {


    let datetime = new Date().toISOString().replace(/:/g, ".");
    let casesArray = new Array();
    let resultInfo = {}

    if (!fs.existsSync(`./results/${datetime}`)) {
        fs.mkdirSync(`./results/${datetime}`, { recursive: true });
    }

    const jsonBefore = getJsonInfo('./jsonfiles/ghost_3_41_1');
    const jsonAfter = getJsonInfo('./jsonfiles/ghost_4_44_4');

    casesArray = await getCasesArray(jsonBefore);
    console.log('casesArray',casesArray.length);
 
    await convertJsonToImage(jsonBefore, datetime, 'before');
    await convertJsonToImage(jsonAfter, datetime, 'after');

    for (let i = 0; i < casesArray.length; i++) {
        console.log(casesArray[i]);

        const data = await compareImages(
            fs.readFileSync(`./results/${datetime}/before-${casesArray[i]}.png`),
            fs.readFileSync(`./results/${datetime}/after-${casesArray[i]}.png`),
            options
        );

        resultInfo[casesArray[i]] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
        }
        fs.writeFileSync(`./results/${datetime}/compare-${casesArray[i]}.png`, data.getBuffer());
    }

    fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo, casesArray));
    fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;
}
(async () => console.log(await executeTest()))();

function getJsonInfo(mainPath) {

    const directories = fs.readdirSync(mainPath);

    const directoriesChild = directories.filter(file => {
        const filePath = path.join(mainPath, file);
        return fs.statSync(filePath).isDirectory();
    }).map((directory) => {
        return `${mainPath}/${directory}`;
    });

    const files = directoriesChild.map(directoryChild => {
        const filesDirectories = fs.readdirSync(directoryChild);

        return filesDirectories.map(file => {
            return directoryChild.concat(`/${file}`);
        }).filter(directoryField => {
            return directoryField.includes('.json')
        }
        );
    });

    const json = files.map(filePath => {
        console.log(filePath);

        const fileContent = fs.readFileSync(`${filePath}`, 'utf-8');
        return JSON.parse(fileContent);
    });
    return json;
}

function getCasesArray(json) {

    let casesArray = new Array();
    let stageName = '';

    json.map((objects) => {
        objects.map(object => {
            console.log(object.elements);
            let elementsSort = orderArray(object.elements);
            elementsSort.map((element) => {
                stageName = element.name;
                element.steps.map((step, index) => {
                    let nameCase = undefined;
                    if (step.name !== undefined) {
                        nameCase = `${stageName}-${index}`;
                        casesArray.push(nameCase);
                    }
                });
            });
        });

    });

    return casesArray;
}

function convertJsonToImage(json, datetime, state) {

    let stageName = '';

    return json.map((objects) => {
        objects.map(object => {
        let elementsSort = orderArray(object.elements);
        elementsSort.map((element) => {
            stageName = element.name;
            element.steps.map((step, index) => {
                let nameCase = undefined;
                if (step.name !== undefined) {
                    nameCase = `${stageName}-${index}`;
                }

                if (step.embeddings !== undefined)
                    step.embeddings.map((embedding) => {
                        const imageBuffer = Buffer.from(embedding.data, 'base64');
                        fs.writeFileSync(`./results/${datetime}/${state}-${nameCase}.png`, imageBuffer, function (err) {
                            if (err) throw err;
                            console.log('Image saved before successfully');
                        });
                    });
                });
            });
        })
    });
}

function orderArray(arraySort) {
    return arraySort.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }
    });
}

function browser(caseName, info) {
    return `<div class=" browser" id="test0">
    <div class=" btitle">
function browser(caseName, info){
        <h2>Caso: ${caseName}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="before-${caseName}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="after-${caseName}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${caseName}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo, casesName) {
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${casesName.map(caseName => browser(caseName, resInfo[caseName]))}
            </div>
        </body>
    </html>`
}