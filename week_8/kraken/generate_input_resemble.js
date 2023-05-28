const fs = require('fs');
const fs_extra = require('fs-extra');
const path = require('path');
const mime = require('mime');


let index = 0;
const nameDirectory = process.argv[2];


const generate_input_resemble = () => {
    const pathReports = __dirname + '/reports/';
    //const nameDirectory = process.argv[2];
    const pathInputResemble = __dirname + '/input_resemble/' + nameDirectory;

    let files = fs.readdirSync(pathReports);
    files.forEach((file) => {
        const filePath = path.join(pathReports, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            generate_input_resemble(filePath); // Recursively call the function for subdirectories
        } else {
            let nameFile = getFileName(filePath);
            if(getFileType(filePath) === 'application/json' && nameFile === 'report') {
                index ++;
                 let newPath = pathInputResemble + '/' + nameFile + index + '.json';
                 copyPasteFile(filePath, newPath);
                //console.log(filePath); // Display the file path (you can perform other operations here)
            }
        }
    });
}

const changeFileName = (oldFilePath, newFilePath) => {
    fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) {
            console.error('Error renaming file:', err);
        } else {
            console.log('File renamed successfully.');
        }
    });
}

const copyPasteFile = (sourcePath, destinationPath) => {
    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(destinationPath);

    readStream.pipe(writeStream);

    readStream.on('error', (err) => {
        console.error('Error reading the source file:', err);
    });

    writeStream.on('error', (err) => {
        console.error('Error writing to the destination file:', err);
    });

    writeStream.on('finish', () => {
        console.log('File copied successfully.');
    });
}

const createDirectoryIfNotExists = (directoryPath) => {
    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath);
        //console.log(`Directory created: ${directoryPath}`);
    } else {
        //console.log(`Directory already exists: ${directoryPath}`);
    }
}

const getFileName = (filePath) => {
    const fileName = path.basename(filePath, path.extname(filePath));
    return fileName;
}

const getFileType = (filePath) => {
    const fileType = mime.getType(filePath);
    return fileType;
}


const searchFiles = (directoryPath, searchPattern) => {
    const files = fs.readdirSync(directoryPath);
    const pathInputResemble = __dirname + '/input_resemble/' + nameDirectory;
    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isFile() && file.includes(searchPattern)) {
            let nameFile = getFileName(filePath);
            if(getFileType(filePath) === 'application/json' && nameFile === 'report') {
                index ++;
                let newPath = pathInputResemble + '/' + nameFile + '_' + index + '.json';
                copyPasteFile(filePath, newPath);
            }
        } else if (stats.isDirectory()) {
            searchFiles(filePath, searchPattern); // Recursively search subdirectories
        }
    });
}

const copyPasteDirectory = (sourceDir, destinationDir) => {
    fs_extra.copySync(sourceDir, destinationDir);
    console.log('Directory copied successfully.');
}

const input_resemble = () => {
    const pathResemble = path.join(path.dirname(__dirname), '..') + '/week_8/resemble/jsonfiles/' + nameDirectory;
    const pathKrakenInputResemble = __dirname + '/input_resemble/' + nameDirectory;
    copyPasteDirectory(pathKrakenInputResemble, pathResemble);
}

const pathReports = __dirname + '/reports/';
const pattern = '.json';
const moveJson =  (pathReports, pattern) => {
    searchFiles(pathReports, pattern);
    setTimeout(() => {
        input_resemble();
    },
        5000
    )

}


moveJson(pathReports, pattern);

 //generate_input_resemble().then(r => console.log(r));


