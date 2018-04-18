import React, { Component } from 'react';
import './tabs.css'

class Tabs extends Component {
  check(a){
    console.log('check called by child with value:', a);
  }
  render() {

    return (
      <div className="Tabs">
        {React.Children.map(this.props.children, (child, i)=>{
          let className="Tabs__Tab";
          if(child.key ===this.props.active){
            className =`${className} Tabs__Tab--active`;
          }          
          return (
            <div
              className={className}
              onClick={()=>{
                this.props.switchTab(child.key)
              }}
            >
              {child}
            </div>
          )
        })}
        <div className="Tabs__Underline" />
      </div>
    );
  }
}

export default Tabs;
