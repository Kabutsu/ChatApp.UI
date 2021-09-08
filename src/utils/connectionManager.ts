import * as SignalR from '@microsoft/signalr';
import { receiveMessage, receivePrivateMessage, sendBroadcast, sendMessageToUser } from './constants';

const connection = new SignalR.HubConnectionBuilder()
    .withUrl('https://localhost:44395/chatHub')
    .configureLogging(SignalR.LogLevel.Information)
    .build();

const start = async (userName: string) => {
    connection.baseUrl = `https://localhost:44395/chatHub?username=${userName}`;

    try {
        await connection.start();
        console.log("SignalR connected.");
    } catch (err) {
        console.log(err);
        setTimeout(userName => start(userName), 5000);
    }
};

const sendMessage = async (user: string, message: string) => {
    try {
        const response = await connection.invoke(sendMessageToUser, user, message);
        console.log(response);
    } catch (err) {
        console.error(err);
    }
}

const broadcast = async (from: string, message: string) => {
    try {
        const response = await connection.invoke(sendBroadcast, from, message);
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

connection.onclose(() => {
    console.log('Connection closed');
});

connection.on(receiveMessage, (user, message) => {
    alert(`${user} says "${message}"!`);
});

connection.on(receivePrivateMessage, (message) => {
    alert(message);
});

export default {
    start,
    sendMessage,
    broadcast,
};