import {React} from "react";

export class View extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {person} = this.props;
    return (
      <div className="person">
        Name: {person.name}, age: {person.age}
      </div>
    )
  }
}
