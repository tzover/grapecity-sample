<template>
    <Tile title="バブルチャート" v-slot="{palette}">
        <wj-flex-chart :chartType="'Bubble'" :itemsSource="data" :bindingX="'date'" :palette="palette">
            <wj-flex-chart-axis :wjProperty="'axisX'" :format="'Y'"></wj-flex-chart-axis>
            <wj-flex-chart-series :name="'売上・利益'" :binding="'sales,profit'"></wj-flex-chart-series>
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