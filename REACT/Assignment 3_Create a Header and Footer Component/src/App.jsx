/* # 📝 **Assignment 3: Create a `Header` and `Footer` Component**

### **Task:**

- Create `Header.jsx`
- Create `Footer.jsx`
    
    Render both inside App like a page layout.
    

### Concept:

Multiple components, layout building. */

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CourseCard from './components/CourseCard.jsx'; 

function App() {
  return (
    <>
      <Header />
      <CourseCard />
      <Footer />
    </>
  );
}

export default App;