import Course from "./Course";
import { courses } from "./data";

const CoursesView = () => {
  return <>
    <h1>Available courses</h1>
    {courses.map(course => <Course course={course} />)}
  </>
}

export default CoursesView;