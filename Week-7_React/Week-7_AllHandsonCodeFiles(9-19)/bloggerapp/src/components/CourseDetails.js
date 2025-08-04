import React from 'react';

function CourseDetails({ courses }) {
  return (
    <div>
      <h2>Course Details</h2>
      {courses.map((course) => (
        <div key={course.id}>
          <h4>{course.name}</h4>
          <p>Duration: {course.duration}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
