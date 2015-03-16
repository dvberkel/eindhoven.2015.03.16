package com.infosupport.websocket.demo;

import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/ping")
public class WebSocketServer {
    @OnOpen
    public void receiveWebSocketSession(Session session) {
        /* handle session */
    }
}
