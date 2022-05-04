<template>
    <div>
        <h3>
            TreeMapコントロール
        </h3>
        <div>
            このセクションではTreeMapコントロールを表示します。 <b>最大の深さ:</b>&nbsp;&nbsp;
            <wj-input-number :value="maxDepth" :min="0" :max="4" :step="1"
                             :value-changed="valueChanged" />
        </div>
        <div class="seperator"/>
        <p />
        <wj-tree-map
                :items-source="gData"
                :max-depth="maxDepth"
                binding-name="type"
                binding="sales"
                child-items-path="items"
                :initialized="initializedTreeMap" />
        <p />
        <h3>
            Sunburstコントロール
        </h3>
        <div>
            このセクションではSunburstコントロールを表示します。
        </div>
        <p />

        <p />
        <table class="table table-condensed">
            <tbody>
            <tr>
                <td>
                    <wj-sunburst
                            :items-source="sData"
                            binding="value"
                            :inner-radius="innerRadius"
                            :offset="offset"
                            :start-angle="startAngle"
                            :initialized="initializedSunburst" />
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
            gData:DataService.getGroupCVData(),
            sData: DataService.getHierarchicalData(),
            maxDepth: 2,
            innerRadius: 0,
            offset: 0,
            startAngle: 0
        }
    },
    methods: {
        // Wijmo event handlers
        valueChanged:function(s) {
            this.maxDepth = s.value;
        },
        initializedTreeMap: function (s) {
            s.dataLabel.content = '{name}';
        },
        initializedSunburst: function (s) {
            s.dataLabel.content = '{name}';
        },
        innerRadiusValueChanged: function (s) {
            this.innerRadius = s.value;
        },
        OffsetValueChanged: function (s) {
            this.offset = s.value;
        },
        startAngleValueChanged: function (s) {
            this.startAngle =  s.value;
        }
    },

};
</script>
