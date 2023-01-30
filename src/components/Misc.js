import { createElement} from 'react';


import { Container, Row, Col, Button,Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// ...Button, Form, FormGroup, Label, Input, FormText

export function New_Button(props){
    
    return (
        <Button className='primary' color="success" onClick={() => {
        CreatedElement2('Jeremy');
        //alert('Youve clicked this button');
        }}>{props.buttonName} THis is my new button </Button>
    )
}

export const New_Button2 = () =>{
    console.log();
    return (
    <Button className='primary' color="info" size='lg' outline>THis is my new button </Button>
    )
}

export function CreatedElement( props ) {
  console.log(props.person.name)
  console.log(props.test)
  console.log(props.testx)
  console.log(props.testx2)
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello World'
  );
}

export function CreatedElement2(names) {
    console.log('new Button Created')
    return createElement(
      'div',
      { className: 'greeting' },
      names.props + ' Hello World2'
    );
  }

  export function CreatedElement3(names) {
    
    return (
        
        
        New_Button()
    )
  }



 

/*function useState_Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}*/

