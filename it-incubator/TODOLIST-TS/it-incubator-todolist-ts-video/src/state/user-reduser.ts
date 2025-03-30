type StateType = {
    age:  number
    childrenCount: number
    name: string
}

type ActionType = {
    type: string
    [key: string]: any
}


export const UserReduser = (state: any, action: any) => {
    switch (action.type) {
        case 'BlaBla1':

        case 'Yo':

        default:
            throw new Error("I don't understand this action type")
    }
}