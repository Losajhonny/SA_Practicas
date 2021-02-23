let services = [];
let service = null;

service = {
    name: 'client',
    port: '3001',
    endpoints: [
        { endpoint: '/order/list', noparams: 0 },
        { endpoint: '/request-order/:idrest/:idmenu/:dir/:phone', noparams: 4 },
        { endpoint: '/state-restaurant/:idpedido', noparams: 1 },
        { endpoint: '/state-delivery/:idpedido', noparams: 1 },
    ]
}

services.push(service);

service = {
    name: 'restaurant',
    port: '3002',
    endpoints: [
        { endpoint: '/order/list', noparams: 0 },
        { endpoint: '/receive-order/:idrest/:idmenu/:dir/:phone', noparams: 4 },
        { endpoint: '/state-order/:idpedido', noparams: 1 },
        { endpoint: '/report-delivery-man/:idpedido', noparams: 1 },
    ]
}

services.push(service);

service = {
    name: 'delivery-man',
    port: '3003',
    endpoints: [
        { endpoint: '/order/list', noparams: 0 },
        { endpoint: '/receive-order/:idrest/:idmenu/:dir/:phone', noparams: 4 },
        { endpoint: '/state-order/:idpedido', noparams: 1 },
        { endpoint: '/report-delivery/:idpedido', noparams: 1 },
    ]
}

services.push(service);

console.log(services);