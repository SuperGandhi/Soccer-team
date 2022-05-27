// almacen donde estará almacenada nuestra data
import {createStore} from 'redux'

const initialState = {
    players : [{
            id: 1,
            name: "Pedro Gallese",
            pic: "https://img.a.transfermarkt.technology/portrait/big/95172-1647201665.jpg?lm=1"
        },
        {
            id: 2,
            name: "Carlos Zambrano",
            pic: "https://img.a.transfermarkt.technology/portrait/big/53533-1563460346.jpg?lm=1"
        },
        {
            id: 3,
            name: "Alexander Callens",
            pic: "https://img.a.transfermarkt.technology/portrait/big/147462-1645985995.jpg?lm=1"
        },
        {
            id: 4,
            name: "Miguel Trauco",
            pic: "https://img.a.transfermarkt.technology/portrait/big/177690-1563525790.png?lm=1"
        },
        {
            id: 5,
            name: "Renato Tapia",
            pic: "https://img.a.transfermarkt.technology/portrait/big/277137-1616431034.jpg?lm=1"
        },
        {
            id: 6,
            name: "Yoshimar Yotún",
            pic: "https://img.a.transfermarkt.technology/portrait/big/94880-1580830325.jpg?lm=1"
        },
        {
            id: 7,
            name: "André Carrilo",
            pic: "https://img.a.transfermarkt.technology/portrait/big/135057-1474545517.jpg?lm=1"
        },
        {
            id: 8,
            name: "Edison Flores",
            pic: "https://img.a.transfermarkt.technology/portrait/big/194998-1618672236.jpg?lm=1"
        },
        {
            id: 9,
            name: "Cristian Cueva",
            pic: "https://img.a.transfermarkt.technology/portrait/big/95280-1544903046.png?lm=1"
        },
        {
            id: 10,
            name: "Gianluca Lapadula",
            pic: "https://img.a.transfermarkt.technology/portrait/big/130394-1596187366.jpg?lm=1"
        },
        {
            id: 11,
            name: "Alex Valera",
            pic: "https://img.a.transfermarkt.technology/portrait/big/738716-1615647469.jpg?lm=1"
        },
    ],
    headlines: [],
    substitutes: []
}


const reducerCouch = (state=initialState, action)=>{
    if(action.type === 'ADD_HEADLINE'){
        return{
            ...state,
            headlines: state.headlines.concat(action.player),
            players: state.players.filter(p=>p.id !== action.player.id)
        }
    }
    return state;
}

export default createStore(reducerCouch)