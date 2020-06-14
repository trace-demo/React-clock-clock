import React from 'react';
import Clock from './clock';


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Clock title="Tokyo" datediff={13} />
        <Clock title="Los Angeles" datediff={-3} />
        <Clock title="Toronto" datediff={0} />
        <Clock title="Dubai" datediff={8} />
      </div>
    )
  }
}
export default App;


