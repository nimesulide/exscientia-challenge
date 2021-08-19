import React from 'react';
import { interpolateTurbo, scaleOrdinal, scaleSequential, schemeCategory10 } from 'd3';
import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter, Cell, Legend, Line } from 'recharts';

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

const getColorScale = (data: Array<any>, config: ScatterplotConfig) => {
    const distinctValues = getDistinctValues(data.map(entry => entry[config.color ?? '']));
    const isCategorical = distinctValues.length <= 10;

    if (isCategorical) return scaleOrdinal(schemeCategory10);

    distinctValues.sort((a, b) => a - b);
    const domain = [distinctValues[0], distinctValues[distinctValues.length - 1]];

    return scaleSequential(interpolateTurbo).domain(domain);
};

export default ({ data, config }: ScatterplotProps) => {
    const colors = getColorScale(data, config);
    return (
        <ResponsiveContainer width='100%' height='100%'>
            <ScatterChart
                margin={{
                    top: 10,
                    right: 30,
                    bottom: 30,
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
