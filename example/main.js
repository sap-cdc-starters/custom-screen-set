// (function(root, $, gigya) {
//     if (!gigya) {
//         alert("Gigya not loaded; aborting mission");
//         return;
//     }
//     // When DOM's Ready:
//     $(function() {
//         gigya.socialize.addEventHandlers({
//             onAfterResponse: handleResponse,
//             onBeforeRequest: handleResquest,
//             onLogin: handleLogin
//         });
//        
//         show_screen();
//        
//     });
// }(this, jQuery, gigya));
//
// function show_screen() {
//     gigya.accounts.showScreenSet({
//         screenSet: "custom-registration",
//         containerID: "gigya-screen-set-container"
//     });
// }
//
// function handleResponse({ methodName, eventName, response }) {
//     console.groupCollapsed(`${eventName}::${methodName}`);
//     console.debug(response);
//     console.groupEnd();
// }
//
// function handleResquest({ methodName, eventName, ...props }) {
//     console.groupCollapsed(`${eventName}::${methodName}`);
//     console.debug(props);
//     console.groupEnd();
// }
// function handleLogin({ eventName, ...props }) {
//     console.debug(eventName, props);
// }
//
//
