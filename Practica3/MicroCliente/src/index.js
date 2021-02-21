const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/**
 * Objetos
 * pedido = { id: 12, amount: 2, name: '' }
 */
const restaurant = ['Restaurante A', 'Restaurante B'];
const menu = ['Menu 1', 'Menu 2', 'Menu 3'];
const pedidos = [];

/**
 * settings
 */
app.set('port', 3001);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({extended: false}));

/**
 * middleware
 */
app.use((req, res, next) => {
    console.log(req.method + " - " + req.url);
    next();
});

/**
 * utilizado para listar ordenes
 */
app.get('/client/order/list', (req, res) => {
    return res.status(200).send({ data: pedidos });
});

/**
 * solicitar pedido al restaurante
 */
app.get('/client/request-order/:idrest/:idmenu/:dir/:phone', (req, res) => {
    const { idrest, idmenu, dir, phone } = req.params;

    const pedido = {
        id: pedidos.length,
        restaurant: restaurant[idrest - 1],
        menu: menu[idmenu - 1],
        dir: dir,
        phone: phone
    };

    pedidos.push(pedido);

    return res.status(200).send({ message: 'order sent!', data: pedido });
});

/**
 * verificar estado del pedido al restaurante
 */
app.get('/client/state-restaurant/:idpedido', (req, res) => {
    const { idpedido } = req.params;

    let pedido = null;
    let state = 'none';
    
    if (idpedido < pedidos.length)
    {
        pedido = pedidos[idpedido];
    
        const random = Math.round(Math.floor(Math.random() * 3));
        
        switch (random)
        {
            case 0:
                state = 'wait';
                break;
            case 1:
                state = 'cook';
                break;
            default:
                state = 'finish';
                break;
        }
    }

    return res.status(200).send({ data: pedido, state: state });
});

/**
 * verificar estado del pedido al repartidor
 */
app.get('/client/state-delivery/:idpedido', (req, res) => {
    const { idpedido } = req.params;

    let pedido = null;
    let state = 'none';
    
    if (idpedido < pedidos.length)
    {
        pedido = pedidos[idpedido];
    
        const random = Math.round(Math.floor(Math.random() * 3));
        
        switch (random)
        {
            case 0:
                state = 'wait';
                break;
            case 1:
                state = 'on the way to ...';
                break;
            default:
                state = 'delivered';
                break;
        }
    }

    return res.status(200).send({ data: pedido, state: state });
});

/**
 * inicio del servidor
 */
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
