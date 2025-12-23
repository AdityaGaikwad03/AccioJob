import { useMemo, useState } from "react";
import "./App.css";
import Debug from "./components/Debug";
import SearchList from "./components/SearchList";
import SlowCalculation from "./components/SlowCalculation";
import ValidUserName from "./components/ValidUserName";
import StudentGrade from "./components/StudentGrade";
import LogAnalyzer from "./components/LogAnalyzer";
import ProductSearch from "./components/ProductSearch";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <SlowCalculation />
        <SearchList />
        <ValidUserName />
        <StudentGrade />
        <LogAnalyzer />
        <ProductSearch />
        <Debug />
     </div>
   </div>
  )
}

export default App;