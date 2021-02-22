const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/**
 * Objetos
 */
const restaurant = ['Restaurant A', 'Restaurant B'];
const menu = ['Menu 1', 'Menu 2', 'Menu 3'];
const pedidos = [];

/**
 * settings
 */
app.set('port', 3002);
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
app.get('/restaurant/order/list', (req, res) => {
    return res.status(200).send({ data: pedidos });
});

/**
 * recibir pedido del cliente
 */
app.get('/restaurant/receive-order/:idrest/:idmenu/:dir/:phone', (req, res) => {
    const { idrest, idmenu, dir, phone } = req.params;

    const pedido = {
        id: pedidos.length,
        restaurant: restaurant[idrest - 1],
        menu: menu[idmenu - 1],
        dir: dir,
        phone: phone
    };

    pedidos.push(pedido);

    return res.status(200).send({ message: 'order received!', data: pedido });
});

/**
 * informar estado del pedido al cliente
 */
app.get('/restaurant/state-order/:idpedido', (req, res) => {
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
 * avisar al repartidor que ya esta listo el pedido
 */
app.get('/restaurant/report-delivery-man/:idpedido', (req, res) => {
    const { idpedido } = req.params;

    let pedido = null;
    let state = 'none';
    
    if (idpedido < pedidos.length)
    {
        pedido = pedidos[idpedido];
        state = 'ready to deliver';
    }

    return res.status(200).send({ data: pedido, state: state });
});

/**
 * inicio del servidor
 */
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
