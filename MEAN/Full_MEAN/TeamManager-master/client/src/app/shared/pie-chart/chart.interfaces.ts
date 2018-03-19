export interface IChartSettings {
    title: string,
    data: Array<IChartItem>
}
export interface IChartItem {
    name: string;
    number: number;
}