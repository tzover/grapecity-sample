<template>
    <div>
        <h3>
            FlexChartコントロール
        </h3>
        <div>
            このセクションではFlexChartコントロールを表示します。 <b>チャート種別:</b> &nbsp;   &nbsp;
            <wj-combo-box
                    :items-source="chartTypes"
                    :text="chartType"
                    :text-changed="chartTypeChanged">
            </wj-combo-box>
        </div>
        <p />
        <div class="seperator" />
        <wj-flex-chart
                :items-source="itemsSource"
                :chart-type="chartType"
                header="各国の売上"
                footer="Copyright (c) GrapeCity"
                binding-x="country">
            <wj-flex-chart-series name="売上" binding="sales" />
            <wj-flex-chart-series name="DL数" binding="downloads" />
        </wj-flex-chart>

        <br/>
        <h3>
            FlexPieコントロール
        </h3>
        <div>
            このセクションではFlexPieコントロールを表示します。
        </div>
        <p />

        <table class="table table-condensed">
            <tbody>
            <tr>
                <td>
                    <wj-flex-pie
                            :items-source="pieData"
                            binding="value"
                            bindingName="name"
                            :inner-radius="innerRadius"
                            :offset="offset"
                            :start-angle="startAngle"/>
                </td>
                <td>
                    <label>穴の大きさ</label>
                    <div>
                        <wj-input-number
                                :value="innerRadius"
                                :value-changed="innerRadiusValueChanged"
                                :min="0"
                                :max="1"
                                :step="0.1"
                                format="n" />
                    </div>
                    <label>オフセット</label>
                    <div>
                        <wj-input-number
                                :value="offset"
                                :value-changed="OffsetValueChanged"
                                :min="0"
                                :max="1"
                                :step="0.1"
                                format="n" />
                    </div>
                    <label>開始角度</label>
                    <div>
                        <wj-input-number
                                :value="startAngle"
                                :value-changed="startAngleValueChanged"
                                :min="-360"
                                :max="360"
                                :step="45" />
                    </div>
                </td>
            </tr>
            </tbody>
        </table>

    </div>
</template>


<script>
import { DataService } from '../services/DataSvc';

export default {
    data: function () {
        return {
            chartType: 'Line',
            innerRadius: 0,
            offset: 0,
            startAngle: 0,
            itemsSource: DataService.getData(100),
            pieData:DataService.getPieData(),
            chartTypes:'Column,Bar,Scatter,Line,LineSymbols,Area,Spline,SplineSymbols,SplineArea'.split(','), 
        }
    },
    methods: {
        // Wijmo event handlers
        chartTypeChanged:function(s) {
            this.chartType = s.text;
        },
       innerRadiusValueChanged: function (s) {
               if (s.value <= 1 && s.value >= 0) {
                   this.innerRadius = s.value;
               }
           },
       OffsetValueChanged: function (s){
               if (s.value <= 1 && s.value >= 0) {
                   this.offset = s.value;
               }
           },
       startAngleValueChanged: function (s) {
           this.startAngle = s.value;
           }
    },

};
</script>
