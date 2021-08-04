import React , {Component} from 'react';
import CourseForm from './components/CourseForm/CourseForm';
import CourseList from './components/CourseList/CourseList';
class App extends Component{

  state = {
    Courses : [
      {name :'HTML'},
      {name :'CSS'},
      {name :'JS'}
    ],
    current: ''
  }

  updateCourse = (e)=> {
    console.log(e.target.value);
  }

addcourse = (e)=>{
  console.log("add course"); 
}

  render(){

    const {Courses} = this.state;
    const myCourseList = Courses.map((course,index) => {
      return <CourseList details ={course} key = {index} />
    })

    return (
      <section className="App">
          <h2>Add Courses</h2>
          <CourseForm updateCourse={this.updateCourse} addcourse={this.addcourse} />
          <ul>{myCourseList}</ul>
      </section>
    );

  }
}

export default App;
