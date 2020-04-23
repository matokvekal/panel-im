export const global = (io: any) => {
  let i:number=0;
  io.on('connection', (socket: any) => {
    socket.on('refresh', () => {
      io.emit('refreshPage', {data:'this is test '+i++});//here we can send data to user
      //io.to().emit('refreshPage', {}); if we want to send to speccific user
    });
  });
}
