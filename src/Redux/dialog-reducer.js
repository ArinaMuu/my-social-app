const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Arina'},
        {id: 2, name: 'Stanislav'},
        {id: 3, name: 'Misha'},
        {id: 4, name: 'Agata'},
        {id: 5, name: 'Lida'}
    ],
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I\'m great!'},
        {id: 4, message: 'Yo'}
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [
                    ...state.messagesData,
                    {id: 6, message: body}
                ]
            }
        default:
            return state;
    }
}

export let sendMessageAction = (newMessageBody) => ({type: 'SEND_MESSAGE', newMessageBody})

export default dialogReducer;