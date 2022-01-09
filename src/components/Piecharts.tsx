import './Piecharts.css';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

const Piecharts = () => {
    const sellers = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ];

      const ads = [
        { name: 'Group A', value: 700 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 400 },
        { name: 'Group D', value: 800 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ];

    return(
        <div className='pies'>
            <div className="pieContainer">
            <h3 className="chartTitle">Best Sellers</h3>
            <ResponsiveContainer width="100%" aspect={5 / 2}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={sellers}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
        </div>
        <div className="pieContainer">
        <h3 className="chartTitle">Best ADs</h3>
      <ResponsiveContainer width="100%" aspect={5 / 2}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={ads}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#f42"
            label
          />
        </PieChart>
      </ResponsiveContainer>
      </div>
        </div>
    )
}

export default Piecharts;
