import { useContext } from 'react';
import { AppContext } from '../context';
import Component2 from './Component2.js';

export default function Component1() {
  const context = useContext(AppContext);
  return (
    <div id="innerOne">
      Context Name: {context.nameContext}
      <Component2 />
    </div>
  );
}
