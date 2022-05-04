<template>

     <div>
        <h3>
            入力コントロール
            </h3>
        <p>
            このセクションでは入力コントロールを表示します。</p>
        <table class="table table-condensed">
            <tbody>
                <tr>
                    <td><label htmlFor="n">InputNumber</label></td>
                    <td>
                        <!-- <wj-input-number
                            format="c2"
                            :min="0" :max="10" :step="0.5"
                            :value="theValue"
                            :value-changed="valueChanged" /> -->
                        <wj-input-number
                            format="n2"
                            :min="0" :max="10" :step="0.5"
                            v-model="theValue" />
                        <p>
                            <b>値: {{wjFormat(theValue, 'n2')}}</b>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="d">InputDate/InputTime</label></td>
                    <td>
                        <wj-input-date
                            v-model:value="theDate"
                            :is-required="false"
                            format="d"
                            placeholder="日付" />
                        <wj-input-time
                            :value="theDate"
                            :value-changed="dateChanged"
                            :is-required="false"
                            placeholder="時刻" />
                        <p>
                            <b>日時: {{wjFormat(theDate, 'yyyy/MM/dd  HH:mm')}}</b>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="dt">InputDateTime</label></td>
                    <td>
                        <wj-input-date-time
                            :value="theDate"
                            :value-changed="dateChanged"
                            :is-required="false"
                            placeholder="日時" />
                        <p>
                            <b>日時: {{wjFormat(theDate, 'yyyy/MM/dd  HH:mm')}}</b>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="cl">Calendar</label></td>
                    <td>
                        <wj-calendar
                            id="cl"
                            :value="theDate"
                            :value-changed="dateChanged"
                            min="2015-01-01"
                            max="2020-12-31"/>
                        <p>
                            <b>日付: {{wjFormat(theDate, 'yyyy/MM/dd  HH:mm')}}</b>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="ipm">InputMask</label></td>
                    <td>
                        <wj-input-mask
                            mask="000-0000-0000"
                            :value-changed="maskValueChanged"
                            title="Mask: 000-0000-0000" />
                        <p>
                            <b>値: {{maskValue}}</b>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="cmb2">ComboBox </label></td>
                    <td>
                        <wj-combo-box id="cmb2"
                            :items-source="countries"
                            :text-changed="countryChanged"
                            placeholder="国" />
                        <p>
                           <b>国: {{country}}</b>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="lb">ListBox </label></td>
                    <td>
                        <wj-list-box
                            v-bind:style="{ width: '250px', height: '150px' }"
                            :items-source="countries"
                            :selected-index-changed="selChanged" />
                        <p>
                            <b>選択されたインデックス: {{selectedIndex}}</b>
                        </p>
                        <p>
                            <b>選択された値: {{selectedValue}}</b>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="lb2">ListBox 2</label></td>
                    <td>
                        <wj-list-box
                                v-bind:style="{ width: '250px', height: '150px' }"
                                :items-source="countries"
                                v-model:selectedIndex="selectedIndex2" />
                        <p>
                            <b>選択されたインデックス: {{selectedIndex2}}</b>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="lbc">ListBox 項目テンプレート</label></td>
                    <td>
                        <wj-list-box id="lbc"
                                     v-bind:style="{ width: '250px', height: '150px' }"
                                     :itemsSource="glyphs"
                                     :selectedValue="selectedGlyph"
                                     :selectedIndexChanged="onSelectedGlyphChanged">
                            <wj-item-template v-slot="ctx">
                                <!--
                                    ctx.item - item in itemsSource of ListBox control
                                    ctx.itemIndex - index of item in itemsSource of ListBox control
                                    ctx.control - ListBox controll
                                -->
                                <div class="wj-glyph">
                                    <span :class="'wj-glyph-' + ctx.item"></span>
                                </div>
                                {{ ctx.item }}
                            </wj-item-template>
                        </wj-list-box>
                        <p>
                            選択されたグリフ: <span v-bind:class="'wj-glyph-'+ selectedGlyph"></span>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="lb">MultiSelect </label></td>
                    <td>
                        <wj-multi-select
                            placeholder="国を選択"
                            header-format="{count}個の国"
                            :items-source="countries"
                            :checked-items-changed="ciChanged" />
                        <p>
                            <b>チェックされた項目: {{chkItems ? chkItems.toString() : ''}}</b>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="ac2">AutoComplete </label></td>
                    <td>
                        <wj-auto-complete id="ac2"
                            :items-source="countries"
                            :text="acCountry"
                            :text-changed="acCountryChanged"/>
                        <p>
                            <b>国: {{acCountry}}</b>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="lb">MultiAutoComplete </label></td>
                    <td>
                        <wj-multi-auto-complete
                            placeholder="国"
                            :max-selected-items="4"
                            :items-source="countries"
                            :selected-items-changed="selItmsChanged"/>
                        <p>
                            <b>選択された項目: {{selItms ? selItms.join(', ') : ''}}</b>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="ac2">Menu </label></td>
                    <td>
                        <wj-menu
                            header="編集"
                            :items-source="editMenuOptions"
                            :item-clicked="menuItemClicked" />
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="ic">ColorPicker  </label></td>
                    <td>
                        <wj-color-picker
                            :value="color"
                            :show-color-string="true"
                            :value-changed="colorChanged" />
                        <p>
                            色: {{color}}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="ic">InputColor </label></td>
                    <td>
                        <wj-input-color
                            :value="color"
                            :value-changed="colorChanged"/>
                        <p>
                            色: {{color}}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="pop">Popup </label></td>
                    <td>
                 <p>
                    クリックするとポップアップダイアログを表示します:
                    <button id="pop" type="button" class="btn" @click="modelessDialog.show()">
                        表示
                    </button>
                </p>
                <wj-popup :initialized="popupInitialized" show-trigger="Click" hide-trigger="None">
                    <h3 class="popover-title">
                        タイトル
                    </h3>
                    <div class="popover-content">
                        <form name="popoverForm">
                            <div class="form-group">
                                <br/>
                                <p>
                                <wj-input-number
                                        id="n"
                                        format="n2"
                                        :min="0" :max="10" :step="0.5"
                                        :value="theValue"
                                        :value-changed="valueChanged" />
                                    </p>
                                         <p>
                                    <wj-input-date
                                        :value="theDate"
                                        :value-changed="dateChanged"
                                        :is-required="false"
                                        format="d"
                                        placeholder="日付" />
                                        </p>
                                           <p>
                                    <wj-auto-complete
                                        :items-source="countries"
                                        :text="acCountry"
                                        :text-changed="acCountryChanged"/>
                                    </p>
                            </div>
                            <div class="form-actions">
                                <button type="button" class="btn btn-danger wj-hide">閉じる</button>
                            </div>
                        </form>
                    </div>
                </wj-popup>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import * as wjcCore from '@grapecity/wijmo';
import { DataService } from '../services/DataSvc';

export default {
    data: function () {
        const countries = DataService.getAllCountries();
        const glyphs =  DataService.getGlyphs();
        return {            
            theValue: 7,
            theDate: new Date(),
            countries: countries,
            country: countries[0],
            acCountry: countries[0],
            maskValue: '',
            selectedIndex: 0,
            selectedValue: countries[0],
            selectedIndex2: 1,
            glyphs,
            selectedGlyph: glyphs[1],
            chkItems: null,
            selItms: [],
            color: '#ffffff',
            editMenuOptions: [
                '<i class="fa fa-cut"></i>&nbsp;&nbsp;<b>切り取り</b><br><small><i>現在の選択範囲をクリップボードに移動する</i></small>',
                '<i class="fa fa-copy"></i>&nbsp;&nbsp;<b>コピー</b><br><small><i>現在の選択内容をクリップボードにコピーする</i></small>',
                '<i class="fa fa-paste"></i>&nbsp;&nbsp;<b>貼り付け</b><br><small><i>カーソル位置にクリップボードの内容を挿入する</i></small>'
            ],
            itemsSource: DataService.getData(100),
            modelessDialog:null,
        }
    },
    methods: {
        popupInitialized: function (s) {
            this.modelessDialog = s;
            const owner = document.getElementById('pop');
            if (owner) {
                this.modelessDialog.owner = owner;
            }
        },
        // Wijmo event handlers
        valueChanged: function(s) {
            // console.log(`VALUE = ${s.value}`);
            this.theValue = s.value;
        },
        dateChanged: function (s){
            this.theDate = s.value;
        },
        countryChanged: function (s) {
            this.country = s.text;
        },
        acCountryChanged: function (s) {
            this.acCountry = s.text;
        },
        maskValueChanged: function (s) {
            this.maskValue = s.value;
        },
        selChanged: function (s) {
            this.selectedIndex = s.selectedIndex;
            this.selectedValue = s.selectedValue;
        },
        onSelectedGlyphChanged: function (s) {
            this.selectedGlyph = s.selectedValue;
        },
        ciChanged: function (s) {
            this.chkItems = s.checkedItems;
        },
        selItmsChanged: function (s) {
            this.selItms = s.selectedItems
        },
        menuItemClicked: function (s) {
            alert('メニュー「' + s.header + '」からオプション「' + s.selectedIndex + '」が選択されました');
        },
        colorChanged: function (s) {
            this.color = s.value;
        },
        wjFormat: function (value, format) {
            return wjcCore.Globalize.format(value, format);
        }
    },
};
</script>
