const {io} = require('socket.io-client')

const client =  io('http://localhost:6000');

client.on('BTCUSDT',(res)=>{
    console.log("BTC: ",res);
})

client.on('ETHUSDT',(res)=>{
    console.log('ETH: ',res)
})

// client.onAny((res)=>{
//     console.log(res)
// })

client.on("connect", (res) => {
    console.log(client.id); // x8WIv7-mJelg7on_ALbx
    client.emit('req_sub',{pair: 'BTCUSDT'})
    // client.emit('hello');
    // client.send('req_sub', { pair: 'BTCUSDT' },(res)=>{
    //     console.log('Emitted','btc')
    // })
    // client.send('req_sub', { pair: 'ETHUSDT' })
});



client.on('error',(err)=>{
    console.log(err)
})

client.connect({autoConnect: true})