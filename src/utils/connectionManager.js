import * as SignalR from '@microsoft/signalr';

const connection = new SignalR.HubConnectionBuilder()
    .withUrl("https://localhost:44395/chatHub")
    .configureLogging(SignalR.LogLevel.Information)
    .build();

const start = async () => {
    try {
        await connection.start();
        console.log("SignalR connected.");
    } catch (err) {
        console.log(err);
        setTimeout(start, 5000);
    }
};

const sendMessage = async (user, message) => {
    try {
        const response = await connection.invoke("SendMessage", user, message);
        console.log(response);
    } catch (err) {
        console.error(err);
    }
}

connection.onclose(async () => {
    await start();
});

connection.on('ReceiveMessage', (user, message) => {
    alert(`${user} says "${message}"!`);
});

export default {
    start,
    sendMessage,
};