import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class ChatGateway implements OnGatewayConnection {

  handleConnection(client: Socket) {
    console.log('✅ Client connected:', client.id);
  }

  @SubscribeMessage('chat')
  handleChat(
    @MessageBody() message: string,
    @ConnectedSocket() client: Socket,
  ) {
    console.log('📩 Client says:', message);
    client.emit('chat', 'Server: hai');
  }
}
