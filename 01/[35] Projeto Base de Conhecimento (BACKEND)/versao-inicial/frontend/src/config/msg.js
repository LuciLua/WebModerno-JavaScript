// vueToasted: https://shakee93.github.io/vue-toasted/

import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3000
})


Vue.toasted.register(
    'defaultSuccess',
    payload => !payload ? 'Operação realizada com sucesso' : payload.msg,
    { type: 'success', icon: 'check' }
)

Vue.toasted.register(
    'defaultError',
    payload => !payload ? 'Oops... Erro inesperado.' : payload.msg,
    { type: 'error', icon: 'times' }
)