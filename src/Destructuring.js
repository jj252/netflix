// Examples of destructuring

const [banana, apple] = ['yellow', 'red'];
// the variable banana will contain the value 'yellow'
// the variable apple will contain the value 'red'

const transformNum = (num) => [num * 2, num + 2];
const [numTimesTwo, numPlusTwo] = transformNum(10)
// the variable numTimesTwo will contain the value 20
// the variable numPlus Two will contain the value 12

//const [state, setState] = useState(initialState);
// array destructuring is used to get the state and setState values
// from the useState hook -- you will learn about this soon!

// Do not edit the array. It will be used in the challenges.
const motorcycles = [
    { 
        id: 0,
        make: 'Suzuki',
        model: 'TU250X',
        cc: 250
    },
    { 
        id: 1,
        make: 'Triumph',
        model: 'Street Twin',
        cc: 900
    },
    {
        id: 2,
        make: 'Moto Guzzi',
        model: 'V7 Stone',
        cc: 750
    }
];

// CHALLENGE 1
// Use array destructuring to destructure the three objects contained in the motorcycles array into const variables named moto1, moto2, and moto3.
// Write your code in line 26. When you are ready to test your code, un-comment line 28, then save and run this codepen.


const [moto1, moto2, moto3] = motorcycles;

console.log('Test', moto1,moto2);

console.log('Challenge 1:', moto1.model);

// CHALLENGE 2
// Destructure the model property from the moto1 object, inside the parameter list for the listModel() function below.
// When you're ready to test your code, un-comment lines 34 and 36, then save and run this codepen. 
/*const listModel = (model) => {
    console.log('Challenge 2:', model.model);
};
listModel(moto2);*/
const listModel = (name) => {
    const { model } = name;
    console.log('Challenge 2:', model);
    };
    listModel(moto1);

// CHALLENGE 3
// Destructure the make, model, and cc properties from the moto3 object.
// Write your code on line 41 below. When ready to test your code, un-comment line 43, then save and run this codepen.
/*const listModel2 = (model2) => {
    const [make, model, cc] = [model.make, model.model,model.cc];
    console.log('Challenge 3:', make,model,cc);
};*/
/*const { make, model, cc} = moto3;


console.log(`Challenge 3: ${make} ${model}, ${cc}cc`);*/