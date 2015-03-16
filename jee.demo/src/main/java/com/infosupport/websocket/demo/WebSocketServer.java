package com.infosupport.websocket.demo;

import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/ping")
public class WebSocketServer {
    @OnOpen
    public void receiveWebSocketSession(Session session) {
        /* handle session */
    }

    @OnClose
    public void closeWebSocketSession(Session session) {
        /* clean up session */
    }

    @OnError
    public void handleError(Throwable throwable) {
        /* handle occurred error */
    }

    @OnMessage
    public void handleMessage(String message, Session session) {

    }
}
