package com.infosupport.websocket.demo;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnOpen;
import javax.websocket.Session;
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
}
