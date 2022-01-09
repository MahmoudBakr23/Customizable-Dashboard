import './charts.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

const Charts = () => {
    interface IState {
        data: {
            name: string
            profit: string | number
            revenue: string | number
        }[]
    }

    const [chartData, setChartData] = useState<IState["data"]>([
        {
            name: 'Day 1',
            profit: 4000,
            revenue: 2400,
          },
          {
            name: 'Day 2',
            profit: 3000,
            revenue: 1398,
          },
          {
            name: 'Day 3',
            profit: 2000,
            revenue: 9800,
          },
          {
            name: 'Day 4',
            profit: 2780,
            revenue: 3908,
          },
          {
            name: 'Day 5',
            profit: 1890,
            revenue: 4800,
          },
          {
            name: 'Day 6',
            profit: 2390,
            revenue: 3800,
          },
          {
            name: 'Day 7',
            profit: 3490,
            revenue: 4300,
          },
    ])

    const onSubmit = () => {
        const revenueInput = (document.getElementById('revenueInput') as HTMLInputElement)!
        const profitInput = (document.getElementById('profitInput') as HTMLInputElement)!
        let newData = [...chartData];
        newData[newData.length - 1].revenue = revenueInput.value;
        newData[newData.length - 1].profit = profitInput.value;

        localStorage.setItem("newData", JSON.stringify(newData));
        let newChartData = JSON.parse(localStorage.getItem('newData') || "[]");

        setChartData(newChartData);
    }

    return(
        <div className='chart'>
            <h3 className="chartTitle">Revenue Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          width={500}
          height={300}
          data={JSON.parse(localStorage.getItem('newData') || "[]")}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <form onSubmit={onSubmit}>
          <div className="formItem">
              <label>Revenue</label>
              <input type="number" id ='revenueInput' placeholder='Today revenue' required />
          </div>
          <div className="formItem">
              <label>Profit</label>
              <input type="number" id ='profitInput' placeholder='Today profit' required />
          </div>
          <div className="formItem">
              <button type='submit'>Submit</button>
          </div>
      </form>
        </div>
    )
}

export default Charts;
