<template>
    <Tile title="折れ線チャート" v-slot="{palette}">
        <wj-flex-chart :chartType="'Line'" :itemsSource="data" :bindingX="'date'" :palette="palette">
            <wj-flex-chart-axis :wjProperty="'axisX'" :format="'Y'"></wj-flex-chart-axis>
            <wj-flex-chart-series :name="'売上'" :binding="'sales'"></wj-flex-chart-series>
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