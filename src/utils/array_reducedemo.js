const users = [
    {
        username: 'edie',
        location: 'seattle'
    },
    {
        username: 'tomah',
        location: 'portland'
    },
    {
        username: 'jerome',
        location: 'oakland'
    },
    {
        username: 'solace',
        location: 'oakland'
    }
];

// const usersByCity = users.reduce(
    
//     (acc,user) => ({
//         ...acc,
//         [user.location]: (acc[user.location] || 0) + 1
        
//     }),
//     {}
    
// );

// const usersByCity = users.reduce(
//     (acc,user) => ({
//         ...acc,
//         [user.location]: (acc[user.location] || 0) + 1
        
//     }),
//     {}
    
// );

// const reducedValue = users.reduce((acc,cur) => ({...acc}));
// console.log(reducedValue);

//console.log(usersByCity);

const BUY_CAKE = 'BUY_CAKE'

function buyCake(){
    return {
        type: BUY_CAKE,
        payload:'First redux action'
        
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case BUY_CAKE: 
            return {
            numOfCakes:state.numOfCakes -1
        }

        default: return state

    }
}