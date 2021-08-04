import React from 'react';
const CourseForm = (props) =>{
    return(
            <from onSubmit ={props.addcourse}>
                <input type = "text" onChange ={props.updateCourse}/>
                <input type="submit" value = "Add Course" />
            </from>
    )
}
   
export default CourseForm;
