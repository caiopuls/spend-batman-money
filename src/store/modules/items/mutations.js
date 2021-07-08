export default {
    'buy_new_item': (state, value) => {
        state.items[value].quantity += 1
    },
    'sell_item': (state, value) => {
        state.items[value].quantity -= 1
    }
}