'use strict'

const amqp = require('amqplib')

amqp.connect('amqp://admin:admin@rabbitmq:5672')
    .then((conn) => {
        console.log('Connected')
        return conn.createChannel()
    })
    .then((ch) => {
        console.log('Created channel')


        ch.prefetch(1)
        setTimeout(() => {
            ch.consume('mensagens', (msg) => {
                console.log(`${new Date().toISOString() } -> Messagen recebida: ${msg.content.toString()}`)

                ch.ack(msg) 
            })    

            
        }, 2000);


        

    })