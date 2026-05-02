
import React , {useState} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const initialSales = [
  { month: 'January', sales: 45},
  { month: 'February', sales: 60},
  { month: 'March', sales: 75},
  { month: 'April', sales: 90},
  { month: 'May', sales: 120},
  { month: 'June', sales: 65}
];

const tempData = [
  { day: 'Monday', temp: 21},
  { day: 'Tuesday', temp: 24},
  { day: 'Wednesday', temp: 23},
  { day: 'Thursday', temp: 25},
  { day: 'Friday', temp: 21},
  { day: 'Saturday', temp: 27},
  { day: 'Sunday', temp: 26}
];

const contribution= [
  { name: 'Alice', contribution: 30000},
  { name: 'Bob', contribution: 20000},
  { name: 'Charlie', contribution: 25000},
  { name: 'David', contribution: 15000},
  { name: 'Eve', contribution: 10000}  
]

function App (){
  const [data,setData]= useState(initialSales);
  //FUNCTIONS TO GENERATE RANDOM NUMBERS BTW 30-100
  const randomisedSale= () => {
    const newData =data.map(item => ({
      ...item,
      sales: Math.floor(Math.random() * 70) + 30 // Random number between 30 and 100
    }));
    setData(newData);
  };
  return (
    <div style={{ padding: '20px' }}>
      <h1>Monthly Sales Data</h1>

      <button onClick={randomisedSale} style={{ marginBottom: '20px', padding: '10px 20px'}}>
        Randomize Sales 
        </button>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <h2 style={{marginTop: '40px '}}> Weekly Temperature Data</h2>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={tempData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line  type="linear" dataKey="temp" stroke="#221ab9" strokeWidth={3}  />
        </LineChart>
      </ResponsiveContainer>

      <h2 style={{marginTop: '40px '}}> Contribution Data</h2>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={contribution}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={130}
            fill="#37319c"
            dataKey="contribution"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            onClick={(data) => alert(data.name)}
          >
            {contribution.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={['#0088FE', '#00c44b', '#5a5c0a', '#df2c15', '#7771ddfa'][index % 5]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

    </div>
  )
}
export default App;