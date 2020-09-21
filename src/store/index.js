import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCartList(state, cartObj) {
            let oldCartObj = null;
            for (let item of state.cartList) {
                if (item.iid === cartObj.iid) {
                    oldCartObj = item;
                }
            }
            // let oldCartObj = state.cartList.find(item => item.iid === cartObj.iid)
            if (oldCartObj) {
                oldCartObj.cunt += 1
            } else {
                cartObj.cunt = 1
                cartObj.checked = true;
                state.cartList.push(cartObj)
            }

        },
        selectClick(state, index) {
            state.carList[index].decide = !state.carList[index].decide
        }
    },
    actions: {

    },
    getters: {

    },
    modules: {

    },

})
export default store