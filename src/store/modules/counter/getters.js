export default {
    getValue: state => {
        let formatter = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

        let actualValue = formatter.format(state.value)

        return actualValue.substr(0,actualValue.length-3)
    }
}