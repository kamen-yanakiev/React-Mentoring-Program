import React from 'react'

class Sidebar extends React.Component {
  render() {
    const list = [];

    for (let i = 1; i <= 5; i++) {
      list.push(<li key={`sidebar-${i}`}>Sidebar { i }</li>);
    }

    return (
      <div className='sidebar'>
        <ul>
          { list }
        </ul>
      </div>
    )
  }
}

export default Sidebar;
