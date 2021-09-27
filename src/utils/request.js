import { baseUrl, liveUrl } from "./server";

export const request = (link, params) => {
    // console.log({params});
    const headers = {
        'Content-type': 'application/json; charset=UTF-8',
        // "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
        // "Authorization": `Bearer ${getCookie('token', document?.cookie)}`,
    }
    // let token: any = null;
    // if (localStorage?.getItem("access_token")) {
    //     token = localStorage.getItem("access_token");
    //     // console.log("======================token applied from client/browser local storage=============", token);
    // } 
    // else if (typeof document !== "undefined" && typeof document.cookie !== "undefined" && getCookie("token", document.cookie)) {
    //     token = getCookie("token", document.cookie);
    //     // console.log("======================token applied from client/browser cookie=============", token);
    // } 
    // else{
    //     console.log("======================empty token =============");
    // }
    // token && (headers = { ...headers, ...{ Authorization: `Bearer ${token}` } });
    let fetchConfig = {
        method: (params && params?.method) || "GET",
        // url: link,
        // baseURL: server,
        // params: (params && params.params) || "",
        // body: (params && params.body) || "",
        headers: headers,
    };
    params?.body && (fetchConfig = {
        ...fetchConfig,
        body: params.body
    })
    // console.log({fetchConfig});
    
    const url = (liveUrl || baseUrl) + link;
    // console.log({url});
    
    return fetch(url, fetchConfig)
    .then(res => res.json())
    .then(data => {
          return data;
    })
    .catch((err)=> {
          console.log(err);
          return {message: "Something error"};
    })
}
