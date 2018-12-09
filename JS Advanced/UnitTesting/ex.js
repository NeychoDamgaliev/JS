function validateRequest(request) {
    let check = (function () {
    let req = JSON.parse(JSON.stringify(request));
    function errorThrower(param) {
        throw new Error(`Invalid request header: Invalid ${param}`);
    }
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if(req.hasOwnProperty('method')) {
        // VALIDATE METHOD....
        if(!validMethods.includes(req.method)) {
            errorThrower('Method');
        }
    } else {
        errorThrower('Method');
    }
    if(req.hasOwnProperty('uri')) {
        // VALIDATE URI....
        const uriRegex = /^[0-9A-Za-z\.]+$/gm;
        let match = uriRegex.exec(req.uri);
        if( match=== null && req.uri != "*") {
            errorThrower('URI');
        }

    } else {
        errorThrower('URI');
    }
    if(req.hasOwnProperty('version')) {
        // VALIDATE VERSION....
        if(!validVersions.includes(req.version)) {
            errorThrower('Version');
        }
    } else {
        errorThrower('Version');
    }
    if(req.hasOwnProperty('message')) {
        // VALIDATE MESSAGE....
        const messageRegex = /^[^\<\>\\\&\'\"]+$/gm;
        let match = messageRegex.exec(req.message);
        if(match === null && req.message != "") {
            errorThrower('Message');
        }
    } else {
        errorThrower('Message');
    }
    return req;
    })();
    return check;
}


// let asd = validateRequest({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
//   });
//   console.log(asd);



