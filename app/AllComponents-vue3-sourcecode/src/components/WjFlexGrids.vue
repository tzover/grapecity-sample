<template>
    <div>
        <h3>
            FlexGridコントロール
        </h3>
        <p>
            このセクションでは列の定義を含むFlexGridコントロールを表示します。</p>
        <div class="seperator" />
        <wj-group-panel
                :grid="flex"
                placeholder="ここに列をドラッグするとグループを作成します"
                :max-groups="4"/>
        <wj-flex-grid
                :initialized="gridInitialized"
                :items-source="itemsSource"
                :selection-changed="selectionChanged">

            <wj-flex-grid-filter />

            <wj-flex-grid-detail :isAnimated=true v-slot="ctx">
                <b>Details:</b>
                <ul>
                    <li>ID: <b>{{ctx.item.id}}</b></li>
                    <li>国: <b>{{ctx.item.country}}</b></li>
                    <li>日付: <b>{{ctx.item.date}}</b></li>
                    <li>DL数: <b>{{ctx.item.downloads}}</b></li>
                    <li>売上: <b>{{ctx.item.sales}}</b></li>
                    <li>有効: <b>{{ctx.item.active}}</b></li>
                </ul>
            </wj-flex-grid-detail>

            <wj-flex-grid-column binding="id" header="ID" />
            <wj-flex-grid-column binding="country" header="国">
                <wj-flex-grid-cell-template cellType="Cell" v-slot="cell">
                    <span :class="'flag-icon flag-icon-' + cell.item.country.toLowerCase()"></span>
                    {{cell.item.country}}
                </wj-flex-grid-cell-template>
            </wj-flex-grid-column>
            <wj-flex-grid-column binding="date" header="日付" />
            <wj-flex-grid-column binding="downloads" header="DL数" />
            <wj-flex-grid-column binding="sales" header="売上" />
            <wj-flex-grid-column binding="active" header="有効" />

        </wj-flex-grid>

    </div>
</template>

<script>
import * as wjcCore from '@grapecity/wijmo';

import { DataService } from '../services/DataSvc';
export default {
    data: function () {
        var data = DataService.getData(100);
        return {
            flex: null,
            itemsSource: data,
            selectedItem: data[0]
        }
    },
    methods: {
        gridInitialized: function (s) {
            this.flex = s;
        },
        selectionChanged: function(s) {
            this.selectedItem = s.selectedItems[0];
        },
        wjFormat: function (value, format) {
            return wjcCore.Globalize.format(value, format);
        }
    },

};
</script>
