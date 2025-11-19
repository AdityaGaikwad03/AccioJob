/* Create a CourseCard Component
Task:
Display a course card with:
Course: React Basics
Duration: 6 Weeks
 */
import React from 'react';

const CourseCard = () => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', maxWidth: '300px', margin: '1rem auto' }}>
      <h2>React Basics</h2>
      <p>Duration: 6 Weeks</p>
    </div>
  );
};

export default CourseCard;