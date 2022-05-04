<template>
  <div>
    <h1>GrapeCity Sample</h1>
    <div>
      <wj-flex-grid
        :isReadOnly="true"
        :headersVisibility="'Column'"
        :selectionMode="'ListBox'"
        :itemsSource="data"
      >
        <wj-flex-grid-column :binding="'id'" :header="'ID'" :width="50"></wj-flex-grid-column>
        <wj-flex-grid-column
          :binding="'date'"
          :header="'日付'"
          :width="'*'"
          :format="'Y'"
        ></wj-flex-grid-column>
        <wj-flex-grid-column
          :binding="'sales'"
          :header="'売上'"
          :format="'c'"
          :width="80"
        ></wj-flex-grid-column>
        <wj-flex-grid-column
          :binding="'expenses'"
          :header="'費用'"
          :format="'c'"
          :width="80"
        ></wj-flex-grid-column>
        <wj-flex-grid-column
          :binding="'profit'"
          :header="'利益'"
          :format="'c'"
          :width="80"
        ></wj-flex-grid-column>
      </wj-flex-grid>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// GrapeCity
import { WjFlexGrid, WjFlexGridColumn } from '@grapecity/wijmo.vue2.grid'
import DataService from '../../services/data.service'

export default defineComponent({
  components: {
    WjFlexGrid,
    WjFlexGridColumn,
  },
  setup() {
    return { data: DataService.getData() }
  },
})
</script>

<style></style>
