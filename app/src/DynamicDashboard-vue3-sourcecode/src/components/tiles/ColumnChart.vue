<template>
    <Tile title="縦棒グラフ" v-slot="{palette}">
        <wj-flex-chart :chart-type="'Column'" :itemsSource="data" :bindingX="'date'" :palette="palette">
            <wj-flex-chart-axis :wjProperty="'axisX'" :format="'Y'"></wj-flex-chart-axis>
            <wj-flex-chart-series :name="'売上'" :binding="'sales'"></wj-flex-chart-series>
            <wj-flex-chart-series :name="'費用'" :binding="'expenses'"></wj-flex-chart-series>
            <wj-flex-chart-series :name="'利益'" :binding="'profit'" :chartType="'LineSymbols'"></wj-flex-chart-series>
        </wj-flex-chart>
    </Tile>
</template>

<script>
    import Tile from './Tile.vue';
    import { WjFlexChart, WjFlexChartAxis, WjFlexChartSeries } from '@grapecity/wijmo.vue2.chart';
    import DataService from '../../services/data.service';

    export default {
        setup: () => ({ data: DataService.getData() }),
        components: {
            Tile,
            WjFlexChart,
            WjFlexChartAxis,
            WjFlexChartSeries,
        },
    }
</script>

<style scoped>
</style>