<template>
    <Tile title="グリッド">
        <wj-flex-grid
                :isReadOnly="true"
                :headersVisibility="'Column'"
                :selectionMode="'ListBox'"
                :itemsSource="data"
        >
            <wj-flex-grid-column :binding="'id'" :header="'ID'" :width="50"></wj-flex-grid-column>
            <wj-flex-grid-column :binding="'date'" :header="'日付'" :width="'*'" :format="'Y'"></wj-flex-grid-column>
            <wj-flex-grid-column :binding="'sales'" :header="'売上'" :format="'c'" :width="80"></wj-flex-grid-column>
            <wj-flex-grid-column :binding="'expenses'" :header="'費用'" :format="'c'" :width="80"></wj-flex-grid-column>
            <wj-flex-grid-column :binding="'profit'" :header="'利益'" :format="'c'" :width="80"></wj-flex-grid-column>
        </wj-flex-grid>
    </Tile>
</template>

<script>
    import Tile from './Tile.vue';
    import { WjFlexGrid, WjFlexGridColumn } from '@grapecity/wijmo.vue2.grid';
    import DataService from '../../services/data.service';

    export default {
        data: () => ({ data: DataService.getData() }),
        components: {
            Tile,
            WjFlexGrid,
            WjFlexGridColumn,
        },
    }
</script>

<style scoped>
</style>