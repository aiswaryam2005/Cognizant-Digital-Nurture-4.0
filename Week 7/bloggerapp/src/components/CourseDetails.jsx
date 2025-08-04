// src/components/CourseDetails.jsx
const courses = [];

function CourseDetails() {
  // Prevent rendering
  if (courses.length === 0) return <p>No courses found.</p>;

  return (
    <div>
      <h2>Course Details</h2>
      {courses.map((course, index) => (
        <div key={index}>
          <h4>{course.name}</h4>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
