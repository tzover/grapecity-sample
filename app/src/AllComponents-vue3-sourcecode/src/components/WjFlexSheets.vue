<template>
    <div>
        <h3>
            FlexSheetコントロール
        </h3>
        <div>
            このセクションではFlexSheetコントロールを表示します。
        </div>

        <p />
        <div class="seperator" />
        <wj-flex-sheet
                :initialized="initializeFormatSheet">
            <wj-sheet name="数値" :row-count="20" :column-count="8"></wj-sheet>
            <wj-sheet name="日付" :row-count="20" :column-count="8"></wj-sheet>
        </wj-flex-sheet>
        <p />

    </div>
</template>


<script>
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
        initializeFormatSheet:function(s) {
            var flexSheet = s;
            flexSheet.deferUpdate(() => {
                var sheetIdx,
                    sheetName,
                    colIdx,
                    rowIdx,
                    date;

                if (flexSheet) {
                    for (sheetIdx = 0; sheetIdx < flexSheet.sheets.length; sheetIdx++) {
                        flexSheet.selectedSheetIndex = sheetIdx;
                        sheetName = flexSheet.selectedSheet.name;
                        for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
                            for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
                                if (sheetName === '数値') {
                                    flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                                } else {
                                    date = new Date(2015, colIdx, rowIdx + 1);
                                    flexSheet.setCellData(rowIdx, colIdx, date);
                                }
                            }
                        }
                    }
                    flexSheet.selectedSheetIndex = 0;
                }
            });
        }
    },

};
</script>
