import { config } from "../assets/config";

export const urlBase = config.api.url;
export const websocketBase = config.api.websocket;

export const API_ROUTES = {
  subscripe: urlBase + "/v1/subscribe/newsletter",
  docQuery: {
    upload: urlBase + "/v1/doc-query",
    get: urlBase + "/v1/doc-query/",
    chat: websocketBase + "/v1/doc-query/chat/",
  },
};

export default function getURL(urlKey) {
  return API_ROUTES[urlKey];
}
