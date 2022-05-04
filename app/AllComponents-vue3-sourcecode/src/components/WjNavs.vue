<template>
    <div>
        <h3>
            TreeViewコントロール
        </h3>
        <p>
            このセクションではTreeViewコントロールを表示します。
        </p>
        <div class="seperator" />
        <wj-tree-view
                :items-source="items"
                display-member-path="header"
                child-items-path="items"
                :is-animated="true"
                :auto-collapse="true"
                :selected-item="selectedItem"
                :selected-item-changed="selectedChanged"/>
        <p/>
        <div class="app-input-group">
            <b>選択された項目 {{selectedItem ? selectedItem.header : ''}}</b>
        </div>

        <h3>
            TabPanelコントロール
        </h3>
        <p>
            このセクションではTabPanelコントロールを表示します。
        </p>
        <wj-tab-panel :selectedIndex="1">
            <wj-tab>
                <a>アフリカ</a>
                <div>
                    <ul>
                        <li>アルジェリア</li>
                        <li>アンゴラ</li>
                        <li>ベニン</li>
                        <li>ボツワナ</li>
                    </ul>
                </div>
            </wj-tab>
            <wj-tab>
                <a>アメリカ</a>
                <div>
                    <ul>
                        <li>カナダ</li>
                        <li>チリ</li>
                        <li>メキシコ</li>
                        <li>アメリカ</li>
                    </ul>
                </div>
            </wj-tab>
            <wj-tab>
                <a>アジア</a>
                <div>
                    <ul>
                        <li>中国</li>
                        <li>韓国</li>
                        <li>インド</li>
                        <li>日本</li>
                    </ul>
                </div>
            </wj-tab>
            <wj-tab>
                <a>ヨーロッパ</a>
                <div>
                    <ul>
                        <li>オーストリア</li>
                        <li>イングランド</li>
                        <li>フランス</li>
                        <li>ドイツ</li>
                        <li>オランダ</li>
                        <li>スイス</li>
                    </ul>
                </div>
            </wj-tab>
            <wj-tab>
                <a>オセアニア</a>
                <div>
                    <ul>
                        <li>オーストラリア</li>
                        <li>フィジー</li>
                        <li>ニュージーランド</li>
                        <li>サモア</li>
                    </ul>
                </div>
            </wj-tab>
        </wj-tab-panel>

        <h3>
            Accordionコントロール
        </h3>
        <p>
            このセクションではAccordionコントロールを表示します。
        </p>
        <wj-accordion
                :showIcons="showIcons"
                :autoSwitch="autoSwitch"
                :isAnimated="isAnimated"
                :allowCollapseAll="allowCollapseAll"
                :allowExpandMany="allowExpandMany"
        >
            <wj-accordion-pane> <!-- pane -->
                <div class="main-pane"> <!-- header -->
                    アコーディオン
                    <div class="desc">
                        アコーディオンのプロパティを変更します。
                    </div>
                </div>
                <div> <!-- content -->
                    <div class="wj-labeled-input switch">
                        <input id="showIcons" type="checkbox" v-model="showIcons" />
                        <label for="showIcons">
                            アイコンを表示 <span>ヘッダーにアイコンを表示します。</span>
                        </label>
                    </div>
                    <div class="wj-labeled-input switch">
                        <input id="autoSwitch" type="checkbox" v-model="autoSwitch" />
                        <label for="autoSwitch">
                            自動的に展開 <span>矢印キーでパネルを選択したときに自動的に展開します。</span>
                        </label>
                    </div>
                    <div class="wj-labeled-input switch">
                        <input id="isAnimated" type="checkbox" v-model="isAnimated" />
                        <label for="isAnimated">
                            アニメーション <span>パネルの展開／折りたたみをアニメーション表示します。</span>
                        </label>
                    </div>
                    <div class="wj-labeled-input switch">
                        <input id="allowCollapseAll" type="checkbox" v-model="allowCollapseAll" />
                        <label for="allowCollapseAll">
                            すべて折りたたみ可能 <span>すべてのパネルを折りたためるようにします。</span>
                        </label>
                    </div>
                    <div class="wj-labeled-input switch">
                        <input id="allowExpandMany" type="checkbox" v-model="allowExpandMany" />
                        <label for="allowExpandMany">
                            複数のパネルを展開可能 <span>一度に複数のパネルを展開できるようにします。</span>
                        </label>
                    </div>
                </div>
            </wj-accordion-pane>

            <wj-accordion-pane> <!-- pane -->
                <div> <!-- header -->
                    ネットワーク
                    <div class="desc">
                        Wi-Fi、機内モード、インターネット共有
                    </div>
                </div>
                <div> <!-- content -->
                    <div class="wj-labeled-input switch">
                        <input id="wifi" type="checkbox" checked />
                        <label for="wifi">
                            Wi-Fi <span>Wi-Fiをオンまたはオフにします。</span>
                        </label>
                    </div>
                    <div class="wj-labeled-input switch">
                        <input id="apmode" type="checkbox" />
                        <label for="apmode">
                            機内モード <span>機内モードをオンまたはオフにします。</span>
                        </label>
                    </div>
                    <div class="wj-labeled-input switch">
                        <input id="hotspot" type="checkbox" />
                        <label for="hotspot">
                            機内モード <span>機内モードをオンまたはオフにします。</span>
                        </label>
                    </div>
                </div>
            </wj-accordion-pane>

            <wj-accordion-pane> <!-- pane -->
                <div> <!-- header -->
                    接続されたデバイス
                    <div class="desc">
                        Bluetooth、NFC
                    </div>
                </div>
                <div> <!-- content -->
                    <div class="wj-labeled-input switch">
                        <input id="dev1" type="checkbox" />
                        <label for="dev1">
                            AirPods Pro <span>イヤホン</span>
                        </label>
                    </div>
                    <div class="wj-labeled-input switch">
                        <input id="dev2" type="checkbox" />
                        <label for="dev2">
                            Apple Watch <span>スマートウォッチ</span>
                        </label>
                    </div>
                    <div class="wj-labeled-input switch">
                        <input id="dev3" type="checkbox" />
                        <label for="dev3">
                            Magic Keyboard <span>キーボード</span>
                        </label>
                    </div>
                    <button class="btn btn-primary">
                        8個のデバイスをすべて表示...
                    </button>
                </div>
            </wj-accordion-pane>

            <wj-accordion-pane> <!-- pane -->
                <div> <!-- header -->
                    アプリと通知
                    <div class="desc">
                        最近使用したアプリ、デフォルトアプリ
                    </div>
                </div>
                <div> <!-- content -->
                    <div class="wj-labeled-input switch">
                        <input id="app-chrome" type="checkbox" />
                        <label for="app-chrome">
                            Chrome <span>Webブラウザ</span>
                        </label>
                    </div>
                    <div class="wj-labeled-input switch">
                        <input id="app-outlook" type="checkbox" />
                        <label for="app-outlook">
                            Outlook <span>メールと予定表</span>
                        </label>
                    </div>
                    <div class="wj-labeled-input switch">
                        <input id="app-fb" type="checkbox" />
                        <label for="app-fb">
                            Facebook <span>ソーシャルメディア</span>
                        </label>
                    </div>
                    <button class="btn btn-primary">
                        62個のアプリをすべて表示...
                    </button>
                </div>
            </wj-accordion-pane>

            <wj-accordion-pane> <!-- pane -->
                <div> <!-- header -->
                    バッテリー
                    <div class="desc">
                        67% - 残り5:30
                    </div>
                </div>
                <div> <!-- content -->
                    <div class="wj-labeled-input switch">
                        <input id="bat-sav" type="checkbox" />
                        <label for="bat-sav">
                            バッテリーセーバー <span>バッテリー使用量を減らすために動作を遅くします。</span>
                        </label>
                    </div>
                    <div class="wj-labeled-input switch">
                        <input id="bat-adapt" type="checkbox" />
                        <label for="bat-adapt">
                            適応バッテリー <span>アプリがバッテリーを消耗したときに検出します。</span>
                        </label>
                    </div>
                    <div class="wj-labeled-input switch">
                        <input id="bat-pct" type="checkbox" />
                        <label for="bat-pct">
                            バッテリー残量 <span>バッテリーの割合を表示します。</span>
                        </label>
                    </div>
                </div>
            </wj-accordion-pane>
        </wj-accordion>
    </div>
</template>


<script>
import { DataService } from '../services/DataSvc';

export default {
    data: function () {
        var data = DataService.getTreeData();
        return {
            items: data,
            selectedItem: data[0]    ,
            showIcons: true,
            autoSwitch: true,
            isAnimated: true,
            allowCollapseAll: false,
            allowExpandMany: false,
        }
    },
    methods: {
        selectedChanged:function(s) {
            this.selectedItem = s.selectedItem;
        }
    },

};
</script>
