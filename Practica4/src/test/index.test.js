const Servicio = require('../service');
const addService = Servicio.addService;
const existService = Servicio.existService;
const existEnpoint = Servicio.existEnpoint;
const getServices = Servicio.getServices;
const clear = Servicio.clear;
const size = Servicio.size;

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

    test('se espera un registro nuevo', () => {
        addService({ name: 'restaurant', port: '3001', endpoints: [] });
        let tam = size();
        //assert.equal(tam, 2, 'se esperaba un registro');
        expect(tam).toBe(2);
    });

    test('se espera un servicio client existente', () => {
        let res = existService('client');
        //assert.isObject(res, 'se esperaba un objeto servicio');
        expect(res).toBeDefined();
    });

    test('se espera un endpoint existente /order-list', () => {
        let service = existService('client');
        let endpoint = existEnpoint(service.endpoints, 'get', '/order-list');
        //assert.isObject(endpoint, 'se esperaba un objeto endpoint');
        expect(endpoint).toBeDefined();
    });

    test('se espera una lista de servicios', () => {
        //assert.isArray(getServices(), 'se esperaba una lista de servicios');
        expect(getServices()).toBeDefined();
    });

    test('se espera un size = 1', () => {
        //assert.equal(size(), 1, 'se esperaba un tamaño de 1')
        expect(size()).toEqual(1);
    });

    test('se espera una lista vacia', () => {
        clear();
        //assert.equal(size(), 0, 'no se esperaba servicios');
        expect(size()).toEqual(0);
    });
});