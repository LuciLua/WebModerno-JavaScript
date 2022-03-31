import Vue from "vue"
import App from "./App"

new Vue({
    // el: '#app',
    // render(createElement) {
    //     return createElement(App)
    // },
    renderer: h => h(App)
}).$mount("#app")