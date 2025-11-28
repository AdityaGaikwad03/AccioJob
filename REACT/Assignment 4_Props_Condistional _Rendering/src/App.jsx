import './App.css'
import BasedOnAge from './Components/ShowMessage'
import DiscountMessage from './components/DiscountMessage'
import Greeting from './Components/BasedOnAge'
import MultipleDataTypes from './components/MultipleDataTypes'
import ShowMessage from './components/ShowMessage'
import Skills from './components/Skills'
import User from './components/User'
import Button from './components/Button'
import ProductCard from './components/ProductCard'
import FuncAsProp from './components/FuncAsProp'
import NamePropDrill from './components/NamePropDrill'
import ChildrenPropDrill from './components/ChildrenPropDrill'
import UserRole from './components/UserRole'
import Card from './components/Card'
import Status from './components/Status'
import List from './components/List'
import Wrapper from './components/Wrapper'
import Card2 from './components/Card2'

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <ShowMessage />
        <DiscountMessage />
        <BasedOnAge />
        <Greeting name="Jay" city="Pune" />
        <MultipleDataTypes
          name="Rohan"
          age={21}
          isOnline={true}
        />

        <Skills list={["HTML", "CSS", "React"]} />

        <User info={{ name: "Sara", age: 20, email: "sara@mail.com" }} />

        <h2>📝 Assignment 8 — Reusable Button using props
        </h2>
        <Button text="Login" color="green" />
        <Button text="Signup" color="blue" />

        <ProductCard title="iPhone" inStock={true} />

        <FuncAsProp onPress={() => alert("Pressed!")} />

        <h2>📝 Assignment 11 — Props Drilling (3 levels)</h2>
        <NamePropDrill />

        <h2>📝 Assignment 12 — Props Drilling + children together</h2>
        <ChildrenPropDrill />

        <h2>📝 Assignment 13 — Conditional Rendering + Props (Show user role)</h2>
        <UserRole name="Aarav" role="user" />

        <h2>📝 Assignment 14 — children Prop + Condition (Custom Card)</h2>
        <Card>
          <p>This is inside the card.</p>
        </Card>

        <h2>📝 Assignment 15 — Props Drilling (4 Levels) + Conditional Rendering</h2>
        <Status />

        <h2>📝 Assignment 16 — Pass Array + children + Conditional Rendering</h2>
        <List items={[10, 20, 30, 40]}>
          <h2>Numbers List</h2>
        </List>

        <h2>📝 Assignment 17 — Pass Function Prop + children Prop</h2>
        <Wrapper onClick={() => alert("Box clicked!")}>
          <h2>Content inside wrapper</h2>
        </Wrapper>

        <h2>📝 Assignment 18 — Passing Component as Prop + Conditional Rendering</h2>
        <Card2
          title="Notifications"
          icon={<span>🔔</span>}
        />


      </div>
    </div>
  )
}

export default App
