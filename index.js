const {Server} = require('socket.io')
const {WebsocketClient} = require('binance')

const wsClient = new WebsocketClient({
    beautify: true,
    pingInterval: 30000,

})

const server = new Server({
    //allowEIO3: true,
    cors: true,
    
})

server.on('connection',(res)=>{
    // console.log('Connected',res.id);
    // res.on('hello',(res)=>{
    //     console.log('connected')
    // })

    res.on('req_sub',(res)=>{
        console.log(res.pair)
        wsClient.subscribeMarkPrice(res.pair,'usdm',3000)
    })
})

// server.on('hello',(res)=>{
//     console.log('hello emited');
// })
//wsClient.subscribeAllMini24hrTickers('usdm',true)

// server.on('req_sub',(res)=>{
//     //wsClient.subscribeMarkPrice(res.pair,'usdm',3000)
//     console.log('Sub:',res.pair)
// })

server.on('error',(res)=>{
    console.log(res)
})


// wsClient.on('formattedMessage',(msg)=>{
//     console.log(msg)
//     server.emit(msg.symbol, { pairs: msg.symbol, price: msg.markPrice })
// })

server.listen(6000,()=>{
    console.log('server started at port 6000')
})

