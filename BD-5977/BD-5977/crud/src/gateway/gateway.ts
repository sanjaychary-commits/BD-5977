// import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
// import { Socket } from 'socket.io';


// // @WebSocketGateway()
// // export class gate {

// //   @SubscribeMessage('message')
// //   onNewMessage(
// //     @MessageBody() body: any,
// //     @ConnectedSocket() client: any,
// //   ) {
// //     console.log('body', body);

// //     return {
// //       event: 'message',
// //       data: {
// //         status: 'received',
// //         payload: body,
// //       },
// //     };
// //   }
// // }



// @WebSocketGateway({
//   cors: {
//     origin: '*',
//   },
// })
// export class ChatGateway {

//   @SubscribeMessage('chat')
//   handleChat(
//     @MessageBody() message: string,
//     @ConnectedSocket() client: Socket,
//   ) {
//     console.log('Client says:', message);

//     // WhatsApp-style reply
//     client.emit('chat', `Server: hai`);
//   }
// }

