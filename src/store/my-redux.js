export const createStore = (initialState, reducer) => {
    let currentState = initialState
    const listeners = []
    const subscribe = (listener) => {
        listeners.push(listener)
    }
    const dispatch = (action) => {
        currentState = reducer(currentState, action)
        listeners.forEach(listener => listener())
        return action
    }
    const getState = () => {
        return currentState
    }

    return { subscribe, dispatch, getState }
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        default:
            return state
    }
}

const store = createStore({ count: 0 }, reducer)
store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: 'INCREMENT' })
