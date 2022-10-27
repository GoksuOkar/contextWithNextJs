import { useContext } from 'react';
import { AppContext } from '../context';

export default function Component2() {
  const context = useContext(AppContext);

  function updateContext() {
    if (context.nameContext === 'default') {
      context.setNameContext('Goksu');
    } else {
      context.setNameContext('default');
    }
  }

  return (
    <div id="innerTwo">
      Context Name: {context.nameContext}
      <button onClick={updateContext}>Change Context</button>
    </div>
  );
}
