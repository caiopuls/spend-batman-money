export default {
    newValue({
        commit
    }, {
        value,
        operation
    }) {
        if (operation == 'buy')
            commit('set_new_minor_value', value)
        else
            commit('set_new_higher_value', value)
    }
}