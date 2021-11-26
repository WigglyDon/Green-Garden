export const graphDataParser = (state, target) => {
    return state.map((name) => name[target]);
}