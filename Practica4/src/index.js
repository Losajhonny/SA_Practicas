const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
const Servicio = require('../src/service');
const addService = Servicio.addService;
const existService = Servicio.existService;
const existEnpoint = Servicio.existEnpoint;
const getServices = Servicio.getServices;

/**
 * settings
 */
app.set('port', 3000);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({extended: false}));

const services = [];

/**
 * middleware
 */
app.use((req, res, next) => {
    console.log(req.method + " - " + req.url);
    next();
});

/**
 * lista todos los servicios
 */
app.get('/api/esb/list-service', (req, res) => {
    return res.status(200).send({ services: getServices() });
});

/**
 * registra un servicio
 */
app.post('/api/esb/add-service', (req, res) => {
    const service = req.body;
    //services.push(service);
    addService(service);
    return res.status(200).send({ message: 'saved' });
    
});

/**
 * indica si existe el endpoint
 * @param {*} endpoints 
 * @param {*} method
 * @param {*} endp 
 */
/*
function existEnpoint(endpoints, method, endp) {
    for (let i = 0; i < endpoints.length; i++) {
        const endpoint = endpoints[i];
        if (endpoint.method.toLowerCase() == method.toLowerCase() && endpoint.endpoint == endp) {
            return endpoint;
        }
    }
    return false;
}
*/

/**
 * indica si el servicio existe
 * @param {*} name 
 */
/*
function existService(name) {
    for (let i = 0; i < services.length; i++) {
        const service = services[i];
        if (service.name == name) {
            return service;
        }
    }
    return false;
}
*/

/**
 * accesos de los servicios
 */
app.get('/api/esb/*/*', async (req, res) => {
    // separando endpoint
    const list = req.url.split('/');
    const name = list[3];           // name service
    const endp = list[4];           // endpoint relativo
    const params = list.slice(5);   // all params
    const method = 'get';
    
    // buscar servicio
    const service = existService(name);
    if (!service) {
        return res.send({ message: 'Server not found' });
    }

    // buscar endpoint
    const endpoint = existEnpoint(service.endpoints, method, '/' + endp);
    if (!endpoint) {
        return res.send({ message: 'Server exists but the endpoint cannot be found' });
    }

    // validar numero de parametros
    if (params.length != endpoint.parameters.length) {
        return res.send({ message: "endpoint of parameters doesn't match" })
    }

    // conseguir parametros
    let paramsto = '';
    for (let i = 0; i < params.length; i++) {
        paramsto += '/' + params[i];
    }

    const url = 'http://' + service.host + ':' + service.port + '/' + name + endpoint.endpoint + paramsto;

    let response = null;

    await fetch(url, {
        method: method,
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(res => {
        return res.json();
    })
    .then(json => {
        response = json;
    });

    return res.send(response);
});

/**
 * inicio del servidor
 */
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
