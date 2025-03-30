type StateType = {
    age: number
    childrenCount: number
    name: string
    status: string
}

type ActionType = {
    type: string
    [key: string]: any
}


export const userReducerTrening = (state: StateType, action: ActionType) => {

    switch (action.type) {
        case 'INCREMENT-AGE':
            return {...state, age: state.age + 1};  // Повертаємо новий об'єкт

        case 'INCREMENT-CHILDREN-COUNT':
            return {...state, childrenCount: state.childrenCount + 1};

        case 'CHANGE-NAME':
            return {...state, name: action.newName};

        case 'CHANGE-STATUS-USER':
            return {...state, status: action.newStatus};

        case 'CHANGE-STATUS-GUEST':
            return {...state, status: action.newStatus};

        default:
            throw new Error("I don't understand this action type")
    }
}