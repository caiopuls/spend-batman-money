export default {
    'set_new_minor_value': (state, value) => {
        state.value -= value
    },

    'set_new_higher_value': (state, value) => {
        state.value += value
    },
}