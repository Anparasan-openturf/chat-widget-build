
import React, { Component } from 'react';
import ChatWidget from "./components/ChatWiget";
import { GlobalStateProvider } from "./components/ChatWiget/ContextState";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";

// export class ChatComponent extends Component {
//     constructor(props){
//         super(props);
// }
// createRootElement(host) {

//     if (host) {
//       if (host.id && this.hostId) {
//         if (host.id != this.hostId) {
//           this.hostId = host.id
//         }
//       } else if (host.id) this.hostId = host.id
//       else if (this.hostId) host.id = this.hostId
//     } else {
//       host = document.getElementById(this.hostId)
//     }
//     if (!host) {
//       host = document.createElement('div')
//       host.id = this.hostId
//       if (document.body.firstChild)
//         document.body.insertBefore(host, document.body.firstChild)
//       else document.body.appendChild(host)
//     }
//     this.host = this.shadowDOM ? host.attachShadow({ mode: 'open' }) : host
//   }

// render() {
//     this.createRootElement();
//     return (<GlobalStateProvider>
//         <ChatWidget />
//       </GlobalStateProvider>);
//   }

// }
const host = document.createElement('div');
host.id = 'chat-widget-root';
      if (document.body.firstChild)
        document.body.insertBefore(host, document.body.firstChild)
      else document.body.appendChild(host)

const root = ReactDOM.createRoot(host);
root.render(

          <GlobalStateProvider>
            <ChatWidget />
          </GlobalStateProvider>
    
)

export const app =root;