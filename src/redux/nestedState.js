const redux = require('redux')
const bindActionCreaters = redux.bindActionCreators
const legacy_createStore = redux.legacy_createStore
const produce = require('immer').produce

const initialState = {
    name:'Himanshu singh',
    address:{
        street:'123 main street',
        city:'Boston',
        state:'MA'
    },
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) => {
    return {
        type:STREET_UPDATED,
        payload:street
    }
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        // case STREET_UPDATED: return {...state , address:{...state.address , street:action.payload}};
        case STREET_UPDATED: return produce(state,(draft) => {
            draft.address.street = action.payload
        });
        default: return state;
    }
}

const store = legacy_createStore(reducer);
console.log('initial store' , store.getState());
const unsubscribe = store.subscribe(() => console.log('update state' , store.getState()))
const actions = bindActionCreaters({updateStreet} , store.dispatch);
actions.updateStreet("rampur , nabinagar")

unsubscribe()