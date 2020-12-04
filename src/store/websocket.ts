import { ChartItemInterface } from './chartData/chartData.types';

export class Socket {
  ws: WebSocket;

  constructor() {
    this.ws = new WebSocket('ws://fulcrum-test-task.herokuapp.com/:8080');
  }

  onMessageReceive(callback: (msg: ChartItemInterface) => any) {
    this.ws.onmessage = (event) => callback(JSON.parse(event.data));
  }
}
