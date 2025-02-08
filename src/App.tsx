import React , {useState} from 'react';
import Child from './Child.tsx';
import "bootstrap/dist/css/bootstrap.min.css";
//import { Button } from "@ariakit/react";
//import "./button.css";
//import './App.css';

import * as Ariakit from "@ariakit/react";
import {Button} from 'react-aria-components';
import { bold, italic, redo, underline, undo } from "./icons.tsx";
import "./style.css";

function App() {
  const [show, setShow] = useState(false);

return (
<Button onPress={() => alert('Hello world!')}>Press me</Button>
  );
}

export default App;
