export default {
    buyItem({commit}, pos) {
        commit('buy_new_item', pos)
    },

    sellItem({commit}, pos) {
        commit('sell_item', pos)
    }
}