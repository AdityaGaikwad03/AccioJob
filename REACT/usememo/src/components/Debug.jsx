// function generateReport(data) {
// 	  console.log("Generating report...");
// 	  let total = 0;
// 	  for (let i = 0; i < 400000000; i++) {}
// 		data.forEach(d => total += d);
// 	  return total;
// }

// function App() {
//   const [showInfo, setShowInfo] = React.useState(false);
//   const sales = [120, 340, 560, 220];

//   const reportTotal = generateReport(sales);

//   return (
//     <div>
//       <h2>Total Sales: {reportTotal}</h2>

//       <button onClick={() => setShowInfo(!showInfo)}>
//         Toggle Info
//       </button>

//       {showInfo && <p>Quarterly sales summary</p>}
//     </div>
//   );
// }


import { useMemo, useState } from "react";

function generateReport(data) {
  console.log("Generating report...");
  let total = 0;
  for (let i = 0; i < 400000000; i++) {}
  data.forEach(d => total += d);
  return total;
}

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const sales = [120, 340, 560, 220];

  const reportTotal = useMemo(() => {
    return generateReport(sales);
  }, [sales]);

  return (
    <div>
      <h2>Total Sales: {reportTotal}</h2>

      <button onClick={() => setShowInfo(!showInfo)}>
        Toggle Info
      </button>

      {showInfo && <p>Quarterly sales summary</p>}
    </div>
  );
}

export default App;
