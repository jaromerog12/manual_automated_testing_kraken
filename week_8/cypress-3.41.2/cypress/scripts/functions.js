const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
}

const buildUrl = (port, url) => {
        return url.replace('####', port);
}

const buildEmail = (str, domains) => {
        let randomDomain = getRandomInt(0, domains.length);
        let domain = domains[randomDomain];
        let subStr = str.substring(0, (str.length - domain.length));
        return subStr + domain;
}

export { getRandomInt, buildUrl, buildEmail }