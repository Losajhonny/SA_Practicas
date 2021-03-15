const Servicio = require('../src/service');
const addService = Servicio.addService;
const existService = Servicio.existService;
const existEnpoint = Servicio.existEnpoint;
const getServices = Servicio.getServices;
const clear = Servicio.clear;
const size = Servicio.size;
const assert = require('chai').assert;

describe('ESB services', () => {
    beforeEach(() => {
        addService({
            name: 'client',
            host: 'localhost',
            port: '3001',
            endpoints: [
                { method: 'GET', endpoint: '/order-list', parameters: [] }
            ]
        });
    });

    afterEach(() => {
        clear();  
    });

    it('add service', () => {
        addService({ name: 'restaurant', port: '3001', endpoints: [] });
        let tam = size();
        assert.equal(tam, 2, 'se esperaba un registro');
    });

    it('exist service', () => {
        let res = existService('client');
        assert.isObject(res, 'se esperaba un objeto servicio');
    });

    it('exist endpoint', () => {
        let service = existService('client');
        let endpoint = existEnpoint(service.endpoints, 'get', '/order-list');
        assert.isObject(endpoint, 'se esperaba un objeto endpoint');
    });

    it('get services', () => {
        assert.isArray(getServices(), 'se esperaba una lista de servicios');
    });

    it('size services', () => {
        assert.equal(size(), 1, 'se esperaba un tamaño de 1')
    });

    it('clear service', () => {
        clear();
        assert.equal(size(), 0, 'no se esperaba servicios');
    });
});