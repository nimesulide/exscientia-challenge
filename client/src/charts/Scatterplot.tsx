import React from 'react';
import { interpolateTurbo, scaleOrdinal, scaleSequential, schemeCategory10 } from 'd3';
import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter, Cell } from 'recharts';
import { Card, CardContent } from '@material-ui/core';

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

const CustomTooltip = ({ active, payload, config }: any) => {
    if (active && payload && payload.length) {
        return (
            <Card>
                <CardContent>
                    <p>{`${payload[0].name} : ${payload[0].value}`}</p>
                    <p>{`${payload[1].name} : ${payload[1].value}`}</p>
                    {
                        config.color &&
                        <p>{`${config.color} : ${payload[0].payload[config.color]}`}</p>
                    }
                </CardContent>
            </Card>
        );
    }

    return null;
};

export default ({ data, config }: ScatterplotProps) => {
    const colors = getColorScale(data, config);
    return (
        <ResponsiveContainer width={'100%'} height={'100%'}>
            <ScatterChart
                margin={{
                    top: 40,
                    right: 40,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid />
                <XAxis type={'number'} label={{ value: config.x, position: 'insideBottom' }} dataKey={config.x} name={config.x} />
                <YAxis type={'number'} label={{ value: config.y, angle: -90, position: 'insideLeft' }} dataKey={config.y} name={config.y} />
                <Tooltip content={<CustomTooltip config={config} />} cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={data} fill={'#8884d8'}>
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
