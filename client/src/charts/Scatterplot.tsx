import React from 'react';
import { interpolateTurbo, scaleOrdinal, scaleSequential, schemeCategory10 } from 'd3';
import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter, Cell } from 'recharts';

export interface ScatterplotConfig {
    x: string,
    y: string,
    color?: string
}

interface ScatterplotProps {
    data: Array<any>;
    config: ScatterplotConfig
}

const getDistinctValues = (values: Array<number>) => [...new Set(values)];

export default ({ data, config }: ScatterplotProps) => {
    console.log(data, config);
    const isCategorical = config.color &&
        (getDistinctValues(data.map(entry => entry[config.color ?? ''])).length <= 10);
    const colors = isCategorical ?
        scaleOrdinal(schemeCategory10) :
        scaleSequential(interpolateTurbo);
    return (
        <ResponsiveContainer width='100%' height='100%'>
            <ScatterChart
                margin={{
                    top: 20,
                    right: 30,
                    bottom: 20,
                    left: 10,
                }}
            >
                <CartesianGrid />
                <XAxis type='number' dataKey={config.x} name={config.x} />
                <YAxis type='number' dataKey={config.y} name={config.x} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={data} fill='#8884d8'>
                    {config.color ? data.map((entry, index) => {
                        return (
                            <Cell key={`cell-${index}`} fill={colors(entry[config.color ?? ''])} />
                        );
                    }) : undefined}
                </Scatter>
            </ScatterChart>
        </ResponsiveContainer>
    );
};
