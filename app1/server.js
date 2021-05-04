'use strict'

const amqp = require('amqplib')

amqp.connect('amqp://admin:admin@rabbitmq:5672')
    .then((conn) => {
        console.log('Connected')
        return conn.createChannel()
    })
    .then((ch) => {
        console.log('Created channel')
        setInterval(() => {
            const msg = 'Hello world'
            ch.sendToQueue('mensagens', Buffer.from(msg))
            console.log(`${new Date().toISOString()} -> Mensagem enviada: ${msg}`)
        }, 1000);
    })