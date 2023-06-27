import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const PieGraph = (props) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    // const data = [{ name: 'Page A', uv: 1, pv: 50 },
    // { name: 'Page A', uv: 2, pv: 20 },
    // { name: 'Page A', uv: 3, pv: 30, }];

    const [width, setWidth] = useState(1280);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])
    

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={200} height={200}>
                <Pie
                    data={props.data}
                    isAnimationActive={true}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="id"

                >
                    {props.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend
                    align={width > 768 ? 'right' : 'center'}
                    verticalAlign={width > 768 ? 'middle' : 'bottom'}
                    layout={width > 768 ? 'vertical' : 'horizontal'}
                    iconType='circle'
                    iconSize={10}
                />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default PieGraph;