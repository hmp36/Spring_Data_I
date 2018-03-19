// Moved to a separate file, 'cos ouldn't import this interface
// export interface IChartSettings {
//     title: string,
//     data: Array<IChartItem>
// }

// export interface IChartItem {
//     name: string;
//     number: number;
// }

import { IChartItem, IChartSettings } from './chart.interfaces';
export class ChartSettings implements IChartSettings {
    title: string;
    data: Array<IChartItem>;

    constructor(
        title?: string,
        data?: Array<IChartItem>
    ) {
        this.title = title || '';
        this.data = data || [];
    }
}