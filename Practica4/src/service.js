let services = [];

/**
 * agrega un servicio
 * @param {*} service 
 */
function addService(service) {
    services.push(service);
}

/**
 * tamaño de lista
 * @returns size
 */
function size() {
    return services.length;
}

/**
 * limpieza de lista
 */
function clear() {
    services = [];
}

/**
 * retorna lista
 * @returns services
 */
function getServices() {
    return services;
}

/**
 * indica si existe el endpoint
 * @param {*} endpoints 
 * @param {*} method
 * @param {*} endp 
 */
 function existEnpoint(endpoints, method, endp) {
    for (let i = 0; i < endpoints.length; i++) {
        const endpoint = endpoints[i];
        if (endpoint.method.toLowerCase() == method.toLowerCase() && endpoint.endpoint == endp) {
            return endpoint;
        }
    }
    return false;
}

/**
 * indica si el servicio existe
 * @param {*} name 
 */
function existService(name) {
    for (let i = 0; i < services.length; i++) {
        const service = services[i];
        if (service.name == name) {
            return service;
        }
    }
    return false;
}

module.exports = {
    addService: addService,
    existEnpoint: existEnpoint,
    existService: existService,
    size: size,
    clear: clear,
    getServices: getServices
}