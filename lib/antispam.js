const usedCommandRecently = new Set()

/**
 * Checar numero filtrado
 * @param  {String} from
 */
const isFiltered = (from) => !!usedCommandRecently.has(from)

/**
 * Adicionar numero para filtrar
 * @param  {String} from
 */
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 10000) // 10 segundos para usar outro comando
}

module.exports = { 
    msgFilter: {
    isFiltered,
    addFilter
}
}