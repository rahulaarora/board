import { LineChart, Line, XAxis, YAxis, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useEffect, useState } from 'react';
const LineGraph = (props) => {
   


    // const data = [{ name: 'Page A', uv: 1, pv: 10 },
    // { name: 'Page A', uv: 2, pv: 20 },
    // { name: 'Page A', uv: 3, pv: 30, }];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={400} height={200} data={props.data} >
                <Line type="monotone" dataKey="price" stroke="#E9A0A0" strokeWidth={3}/>
                <Line type="monotone" dataKey="id" stroke="#9BDD7C" strokeWidth={3}/>
                <XAxis dataKey="name" />
                <YAxis />
                <Legend
                    verticalAlign="top"
                    height={36}
                    align='right'
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default LineGraph;