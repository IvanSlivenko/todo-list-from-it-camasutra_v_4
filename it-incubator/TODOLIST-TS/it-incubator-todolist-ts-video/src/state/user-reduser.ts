type StateType = {
    age: number
    childrenCount: number
    name: string
}

type ActionType = {
    type: string
    [key: string]: any
}


export const userReducer = (state: StateType, action: ActionType) => {

    switch (action.type) {
        case 'INCREMENT-AGE':
            return {...state, age: state.age + 1};  // Повертаємо новий об'єкт

        case 'INCREMENT-CHILDREN-COUNT':
            return {...state, childrenCount: state.childrenCount + 1};

        case 'CHANGE-NAME':
            return {...state, name: action.newName};

        default:
            throw new Error("I don't understand this action type")
    }
}