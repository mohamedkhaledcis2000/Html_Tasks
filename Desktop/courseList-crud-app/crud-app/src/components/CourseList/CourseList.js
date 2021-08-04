import React , {Component ,Fragment} from 'react';
class CourseList extends Component{
  render(){
    return (
      <Fragment className="CourseList">
        <li>{this.props.details.name}</li>
      </Fragment>
    );
  }
}

export default CourseList;
