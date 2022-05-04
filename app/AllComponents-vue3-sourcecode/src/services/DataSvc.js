import * as wjcCore from '@grapecity/wijmo'
import * as wjCGrid from '@grapecity/wijmo.grid'

const _products = ['Widget', 'Gadget', 'Doohickey']
const _colors = ['Black', 'White', 'Red', 'Green', 'Blue']
const _musicians =
  'Paul,Mark,Pete,Ringo,Luke,Jacob,John,Nate,Zym,George,Toom,Crash,Boom,Dewd'.split(',')
const _someCountries = ['US', 'Germany', 'UK', 'Japan', 'Italy', 'Greece']
const _allCountries = [
  'アメリカ',
  '日本',
  '中国',
  'ドイツ',
  'イギリス',
  'アフガニスタン',
  'アルバニア',
  'アルジェリア',
  'アメリカ領サモア',
  'アンドラ',
  'アンゴラ',
  'アングィラ',
  'アンティグア',
  'アルゼンチン',
  'アルメニア',
  'アルバ',
  'オーストラリア',
  'オーストリア',
  'アゼルバイジャン',
  'バハマ',
  'バーレーン',
  'バングラデシュ',
  'バルバドス',
  'ベラルーシ',
  'ベルギー',
  'ベリーズ',
  'ベニン',
  'バミューダ',
  'ブータン',
  'ボリビア',
  'ボネール島',
  'ボスニア',
  'ボツワナ',
  'ブラジル',
  'ブルネイ',
  'ブルガリア',
  'ブルキナファソ',
  'ブルンジ',
  'カンボジア',
  'カメルーン',
  'カナダ',
  'カナリア諸島',
  'カーボベルデ',
  'ケイマン諸島',
  '中央アフリカ共和国',
  'チャド',
  'チャネル諸島',
  'チリ',
  'クリスマス島',
  'ココス島',
  'コロンビア',
  'コモロ',
  'コンゴ',
  'クック諸島',
  'コスタリカ',
  'コートジボワール',
  'クロアチア',
  'キューバ',
  'キュラソー',
  'キプロス',
  'チェコ共和国',
  'デンマーク',
  'ジブチ',
  'ドミニカ',
  'ドミニカ共和国',
  '東チモール',
  'エクアドル',
  'エジプト',
  'エルサルバドル',
  '赤道ギニア',
  'エリトリア',
  'エストニア',
  'エチオピア',
  'フォークランド諸島',
  'フェロー諸島',
  'フィジー',
  'フィンランド',
  'フランス',
  '仏領ギアナ',
  'フランス領ポリネシア',
  'フランス南部テル',
  'ガボン',
  'ガンビア',
  'ジョージア',
  'ガーナ',
  'ジブラルタル',
  'ギリシャ',
  'グリーンランド',
  'グレナダ',
  'グアドループ島',
  'グアム',
  'グアテマラ',
  'ギニア',
  'ガイアナ',
  'ハイチ',
  'ホンジュラス',
  '香港',
  'ハンガリー',
  'アイスランド',
  'インド',
  'インドネシア',
  'イラン',
  'イラク',
  'アイルランド',
  'マン島',
  'イスラエル',
  'イタリア',
  'ジャマイカ',
  'ヨルダン',
  'カザフスタン',
  'ケニア',
  'キリバス',
  '北朝鮮',
  '韓国',
  'クウェート',
  'キルギスタン',
  'ラオス',
  'ラトビア',
  'レバノン',
  'レソト',
  'リベリア',
  'リビア',
  'リヒテンシュタイン',
  'リトアニア',
  'ルクセンブルク',
  'マカオ',
  'マケドニア',
  'マダガスカル',
  'マレーシア',
  'マラウイ',
  'モルディブ',
  'マリ',
  'マルタ',
  'マーシャル諸島',
  'マルティニーク島',
  'モーリタニア',
  'モーリシャス',
  'マヨット島',
  'メキシコ',
  'ミッドウェー諸島',
  'モルドバ',
  'モナコ',
  'モンゴル',
  'モントセラト',
  'モロッコ',
  'モザンビーク',
  'ミャンマー',
  'ナンビア',
  'ナウル',
  'ネパール',
  'オランダ領アンティル',
  'オランダ',
  'ネビス島',
  'ニューカレドニア',
  'ニュージーランド',
  'ニカラグア',
  'ニジェール',
  'ナイジェリア',
  'ニウエ',
  'ノーフォーク島',
  'ノルウェー',
  'オマーン',
  'パキスタン',
  'パラオ島',
  'パレスチナ',
  'パナマ',
  'パプアニューギニア',
  'パラグアイ',
  'ペルー',
  'フィリピン',
  'ピトケアン島',
  'ポーランド',
  'ポルトガル',
  'プエルトリコ',
  'カタール',
  'モンテネグロ共和国',
  'セルビア共和国',
  'レユニオン',
  'ルーマニア',
  'ロシア',
  'ルワンダ',
  'サンバルテルミ',
  'セントユーステーシャス',
  'セントヘレナ',
  'セントキッツ・ネイビス',
  'セントルシア',
  'サン・マルタン島',
  'サイパン島',
  'サモア',
  'サン・マリノ',
  'サウジアラビア',
  'スコットランド',
  'セネガル',
  'セルビア',
  'セイシェル',
  'シエラレオネ',
  'シンガポール',
  'スロバキア',
  'スロベニア',
  'ソロモン諸島',
  'ソマリア',
  '南アフリカ',
  'スペイン',
  'スリランカ',
  'スーダン',
  'スリナム',
  'スワジランド',
  'スウェーデン',
  'スイス',
  'シリア',
  'タヒチ島',
  '台湾',
  'タジキスタン',
  'タンザニア',
  'タイ',
  'トーゴ',
  'トケラウ諸島',
  'トンガ',
  'トリニダード・トバゴ',
  'チュニジア',
  'トルコ',
  'トルクメニスタン',
  'タークス・カイコス諸島',
  'ツバル',
  'ウガンダ',
  'ウクライナ',
  'アラブ首長国連邦',
  'イギリス',
  'ウルグアイ',
  'ウズベキスタン',
  'バヌアツ',
  'バチカン市国',
  'ベネズエラ',
  'ベトナム',
  'バージン諸島（イギリス）',
  'バージン諸島（米国）',
  'ウェーク島',
  'イエメン',
  'ザイール',
  'ザンビア',
  'ジンバブエ',
]
const _glyphs = [
  'asterisk',
  'calendar',
  'check',
  'circle',
  'clock',
  'diamond',
  'down',
  'down-left',
  'down-right',
  'file',
  'filter',
  'left',
  'minus',
  'pencil',
  'plus',
  'right',
  'square',
  'step-backward',
  'step-forward',
  'up',
  'up-left',
  'up-right',
]
const _cities = '東京都,神奈川県,大阪府,愛知県'.split(',')

// Common data service
export const DataService = {
  // data used to generate random items
  getData(count, allCountries = false) {
    var countries = allCountries ? _allCountries : _someCountries,
      data = []
    for (var i = 0; i < count; i++) {
      data.push({
        id: i,
        country: countries[Math.round(Math.random() * (countries.length - 1))],
        date: new Date(2014, i % 12, i % 28),
        downloads: Math.round(Math.random() * 10000),
        sales: +(Math.random() * 10000).toFixed(2),
        active: i % 4 == 0,
      })
    }
    return data
  },

  // Pie Data Source
  getPieData() {
    var names = ['オレンジ', 'リンゴ', '梨', 'バナナ', 'パイナップル'],
      data = []

    // populate itemsSource
    for (var i = 0; i < names.length; i++) {
      data.push({
        name: names[i],
        value: Math.round(Math.random() * 100),
      })
    }

    return data
  },

  getSomeCountries() {
    return _someCountries
  },

  getAllCountries() {
    return _allCountries
  },

  getGlyphs() {
    return _glyphs
  },

  getProducts() {
    return _products
  },

  getColors() {
    return _colors
  },

  getMusicians() {
    return _musicians
  },

  getTreeData() {
    return [
      {
        header: '電子機器',
        img: 'resources/electronics.png',
        items: [
          { header: 'トリマー/シェーバー' },
          { header: 'タブレット' },
          {
            header: 'スマートフォン',
            img: 'resources/phones.png',
            items: [
              { header: 'アップル' },
              { header: 'モトローラ', newItem: true },
              { header: 'ノキア' },
              { header: 'サムスン' },
            ],
          },
          { header: 'スピーカー', newItem: true },
          { header: 'モニター' },
        ],
      },
      {
        header: '玩具',
        img: 'resources/toys.png',
        items: [
          { header: 'ショップキンズ' },
          { header: '電車セット' },
          { header: '科学キット', newItem: true },
          { header: '粘土' },
          { header: 'クレヨラ' },
        ],
      },
      {
        header: '家電',
        img: 'resources/home.png',
        items: [
          { header: 'コーヒーメーカー' },
          { header: 'ホームベーカリー', newItem: true },
          { header: 'ソーラーパネル', newItem: true },
          { header: '作業テーブル' },
          { header: 'プロパングリル' },
        ],
      },
    ]
  },

  // gets a simple data set for basic demos
  getSimpleDataSet() {
    var dtOct = new Date(2015, 9, 1),
      dtDec = new Date(2015, 11, 1),
      data = [
        {
          product: 'Wijmo',
          country: 'アメリカ',
          sales: 10,
          downloads: 100,
          date: dtOct,
          active: true,
        },
        {
          product: 'Wijmo',
          country: '日本',
          sales: 10,
          downloads: 100,
          date: dtOct,
          active: false,
        },
        {
          product: 'SpreadJS',
          country: 'アメリカ',
          sales: 10,
          downloads: 100,
          date: dtDec,
          active: true,
        },
        {
          product: 'SpreadJS',
          country: '日本',
          sales: 10,
          downloads: 100,
          date: dtDec,
          active: false,
        },
      ]
    for (var i = 0; i < 100 - 4; i++) {
      data.push({
        product: DataService.randomInt(1) ? 'Wijmo' : 'SpreadJS',
        country: DataService.randomInt(1) ? 'アメリカ' : '日本',
        active: i % 2 == 0,
        date: new Date(
          2015 + DataService.randomInt(2),
          DataService.randomInt(11),
          DataService.randomInt(27) + 1,
        ),
        sales: 10 + DataService.randomInt(20),
        downloads: 10 + DataService.randomInt(190),
      })
    }
    return new wjcCore.CollectionView(data)
  },

  getMultiRowData() {
    var orders = [],
      today = new Date(),
      customers = [],
      firstNames =
        '佐藤,鈴木,高橋,田中,伊藤,山本,渡辺,中村,小林,加藤,吉田,山田,佐々木,山口,松本,井上,木村,斎藤,林,清水,山崎,阿部,森,池田,橋本,山下,石川,中島,前田,藤田'.split(
          ',',
        ),
      lastNames =
        '浩,誠,健一,大輔,達也,翔太,浩一,哲也,剛,大介,健太,拓也,豊,修,和彦,学,直樹,健太郎,浩二,徹,隆,亮,翔,恵子,久美子,由美子,明美,直美,陽子,智子,絵美,恵,裕子,愛,真由美,由美,麻衣,美穂,愛美,彩'.split(
          ',',
        ),
      states = '日本'.split(','),
      shippers = [
        { id: 0, name: 'アカネコ', email: 'ship1@x.com', phone: '03-3955-98xx', express: true },
        { id: 1, name: 'トマト', email: 'ship2@x.com', phone: '03-3681-31xx', express: true },
        { id: 2, name: 'ペンギン', email: 'ship3@x.com', phone: '03-3566-99xx', express: false },
      ]
    for (let i = 0; i < 50; i++) {
      var first = firstNames[DataService.randBetween(0, firstNames.length - 1)],
        last = lastNames[DataService.randBetween(0, lastNames.length - 1)]
      customers.push({
        id: i,
        name: first + ' ' + last,
        address: `${String.fromCharCode(DataService.randBetween(65, 90))}市${String.fromCharCode(
          DataService.randBetween(65, 90),
        )}町${DataService.randBetween(1, 10)}-${DataService.randBetween(
          1,
          10,
        )}-${DataService.randBetween(1, 10)}`,
        city: _cities[DataService.randBetween(0, _cities.length - 1)],
        state: states[DataService.randBetween(0, states.length - 1)],
        zip: wjcCore.format('{p1:d3}-{p2:d4}', {
          p1: DataService.randBetween(100, 999),
          p2: DataService.randBetween(0, 9999),
        }),
        email: 'cust@x.com',
        phone: wjcCore.format('090-{p1:d4}-{p2:d4}', {
          p1: DataService.randBetween(1000, 9999),
          p2: DataService.randBetween(1000, 9999),
        }),
      })
    }
    for (let i = 0; i < 20; i++) {
      var shipped = wjcCore.DateTime.addDays(today, -DataService.randBetween(1, 3000))
      orders.push({
        id: i,
        date: wjcCore.DateTime.addDays(shipped, -DataService.randBetween(1, 5)),
        shippedDate: shipped,
        amount: DataService.randBetween(10000, 500000) / 100,
        customer: customers[DataService.randBetween(0, customers.length - 1)],
        shipper: shippers[DataService.randBetween(0, shippers.length - 1)],
      })
    }
    return orders
  },

  getLayoutDefs() {
    // sample layout definitions
    var cityMap = new wjCGrid.DataMap(_cities)
    var ldOneLine = [
        { cells: [{ binding: 'id', header: 'ID', cssClass: 'id' }] },
        { cells: [{ binding: 'date', header: '受注日' }] },
        { cells: [{ binding: 'shippedDate', header: '出荷日' }] },
        { cells: [{ binding: 'amount', header: '金額', format: 'c', cssClass: 'amount' }] },
        { cells: [{ binding: 'customer.name', header: '顧客名' }] },
        { cells: [{ binding: 'customer.address', header: '住所' }] },
        { cells: [{ binding: 'customer.city', header: '都道府県', dataMap: cityMap }] },
        { cells: [{ binding: 'customer.state', header: '国', width: 45 }] },
        { cells: [{ binding: 'customer.zip', header: '郵便番号' }] },
        { cells: [{ binding: 'customer.email', header: '顧客のメール', cssClass: 'email' }] },
        { cells: [{ binding: 'customer.phone', header: '顧客の電話番号' }] },
        { cells: [{ binding: 'shipper.name', header: '運送業者' }] },
        { cells: [{ binding: 'shipper.email', header: '運送業者のメール', cssClass: 'email' }] },
        { cells: [{ binding: 'shipper.phone', header: '運送業者の電話番号' }] },
        { cells: [{ binding: 'shipper.express', header: '速達' }] },
      ],
      ldTwoLines = [
        {
          header: '受注',
          colspan: 2,
          cells: [
            { binding: 'id', header: 'ID', cssClass: 'id' },
            { binding: 'date', header: '受注日' },
            { binding: 'amount', header: '金額', format: 'c', cssClass: 'amount' },
            { binding: 'shippedDate', header: '出荷日' },
          ],
        },
        {
          header: '顧客',
          colspan: 3,
          cells: [
            { binding: 'customer.name', header: '顧客' },
            { binding: 'customer.email', header: 'メール', colspan: 2, cssClass: 'email' },
            { binding: 'customer.address', header: '住所' },
            { binding: 'customer.city', header: '都道府県', dataMap: cityMap },
            { binding: 'customer.state', header: '国', width: 45 },
          ],
        },
        {
          header: '運送業者',
          cells: [
            { binding: 'shipper.name', header: '運送業者', colspan: 2 },
            { binding: 'shipper.email', header: 'メール', cssClass: 'email' },
            { binding: 'shipper.express', header: '速達' },
          ],
        },
      ],
      ldThreeLines = [
        {
          header: '受注',
          colspan: 2,
          cells: [
            { binding: 'id', header: 'ID', colspan: 2, cssClass: 'id' },
            { binding: 'amount', header: '金額', format: 'c', colspan: 2, cssClass: 'amount' },
            { binding: 'date', header: '受注日' },
            { binding: 'shippedDate', header: '出荷日' },
          ],
        },
        {
          header: '顧客',
          colspan: 3,
          cells: [
            { binding: 'customer.name', header: '顧客' },
            { binding: 'customer.email', header: 'メール', colspan: 2, cssClass: 'email' },
            { binding: 'customer.address', header: '住所', colspan: 2 },
            { binding: 'customer.phone', header: '電話番号' },
            { binding: 'customer.city', header: '都道府県', dataMap: cityMap },
            { binding: 'customer.state', header: '国', width: 45 },
            { binding: 'customer.zip', header: '郵便番号' },
          ],
        },
        {
          header: '運送業者',
          cells: [
            { binding: 'shipper.name', header: '運送業者' },
            { binding: 'shipper.email', header: 'メール', cssClass: 'email' },
            { binding: 'shipper.express', header: '速達' },
          ],
        },
      ]

    return new wjcCore.CollectionView([
      {
        name: '従来のレイアウト',
        description:
          '従来のグリッドのように、1レコードを1行で表示します。ユーザーはレコード全体を見るには水平方向にスクロールする必要があります。',
        def: ldOneLine,
      },
      {
        name: 'コンパクトなレイアウト',
        description:
          'このビューでは、1レコードを2行で表示します。レイアウトは、注文情報、顧客情報、運送業者情報の3つのグループに分かれています。',
        def: ldTwoLines,
      },
      {
        name: '詳細なレイアウト',
        description:
          'このビューでは、1レコードを3行で表示します。レイアウトは、注文情報、顧客情報、運送業者情報の3つのグループに分かれています。',
        def: ldThreeLines,
      },
    ])
  },

  getFinanciaChartData() {
    return [
      { date: '01/05/15', open: 77.98, high: 79.25, low: 76.86, close: 77.19, volume: 26452191 },
      { date: '01/06/15', open: 77.23, high: 77.59, low: 75.36, close: 76.15, volume: 27399288 },
      { date: '01/07/15', open: 76.76, high: 77.36, low: 75.82, close: 76.15, volume: 22045333 },
      { date: '01/08/15', open: 76.74, high: 78.23, low: 76.08, close: 78.18, volume: 23960953 },
      { date: '01/09/15', open: 78.2, high: 78.62, low: 77.2, close: 77.74, volume: 21157007 },
      { date: '01/12/15', open: 77.84, high: 78, low: 76.21, close: 76.72, volume: 19190194 },
      { date: '01/13/15', open: 77.23, high: 78.08, low: 75.85, close: 76.45, volume: 25179561 },
      { date: '01/14/15', open: 76.42, high: 77.2, low: 76.03, close: 76.28, volume: 25918564 },
      { date: '01/15/15', open: 76.4, high: 76.57, low: 73.54, close: 74.05, volume: 34133974 },
      { date: '01/16/15', open: 74.04, high: 75.32, low: 73.84, close: 75.18, volume: 21791529 },
      { date: '01/20/15', open: 75.72, high: 76.31, low: 74.82, close: 76.24, volume: 22821614 },
      { date: '01/21/15', open: 76.16, high: 77.3, low: 75.85, close: 76.74, volume: 25096737 },
      { date: '01/22/15', open: 77.17, high: 77.75, low: 76.68, close: 77.65, volume: 19519458 },
      { date: '01/23/15', open: 77.65, high: 78.19, low: 77.04, close: 77.83, volume: 16746503 },
      { date: '01/26/15', open: 77.98, high: 78.47, low: 77.29, close: 77.5, volume: 19260820 },
      { date: '01/27/15', open: 76.71, high: 76.88, low: 75.63, close: 75.78, volume: 20109977 },
      { date: '01/28/15', open: 76.9, high: 77.64, low: 76, close: 76.24, volume: 53306422 },
      { date: '01/29/15', open: 76.85, high: 78.02, low: 74.21, close: 78, volume: 61293468 },
      { date: '01/30/15', open: 78, high: 78.16, low: 75.75, close: 75.91, volume: 42649491 },
      { date: '02/02/15', open: 76.11, high: 76.14, low: 73.75, close: 74.99, volume: 41955258 },
      { date: '02/03/15', open: 75.19, high: 75.58, low: 73.86, close: 75.4, volume: 26957714 },
      { date: '02/04/15', open: 75.09, high: 76.35, low: 75.01, close: 75.63, volume: 20277368 },
      { date: '02/05/15', open: 75.71, high: 75.98, low: 75.21, close: 75.62, volume: 15062573 },
      { date: '02/06/15', open: 75.68, high: 75.7, low: 74.25, close: 74.47, volume: 21210994 },
      { date: '02/09/15', open: 74.05, high: 74.83, low: 73.45, close: 74.44, volume: 16194322 },
      { date: '02/10/15', open: 74.85, high: 75.34, low: 74.5, close: 75.19, volume: 15811344 },
      { date: '02/11/15', open: 75.09, high: 76.75, low: 75.03, close: 76.51, volume: 20877427 },
      { date: '02/12/15', open: 76.86, high: 76.87, low: 75.89, close: 76.23, volume: 17234976 },
      { date: '02/13/15', open: 76.46, high: 76.48, low: 75.5, close: 75.74, volume: 18621860 },
      { date: '02/17/15', open: 75.3, high: 76.91, low: 75.08, close: 75.6, volume: 25254400 },
      { date: '02/18/15', open: 75.94, high: 76.9, low: 75.45, close: 76.71, volume: 22426421 },
      { date: '02/19/15', open: 76.99, high: 79.84, low: 76.95, close: 79.42, volume: 45851177 },
      { date: '02/20/15', open: 79.55, high: 80.34, low: 79.2, close: 79.9, volume: 36931698 },
      { date: '02/23/15', open: 79.96, high: 80.19, low: 78.38, close: 78.84, volume: 24139056 },
      { date: '02/24/15', open: 78.5, high: 79.48, low: 78.1, close: 78.45, volume: 18897133 },
      { date: '02/25/15', open: 78.5, high: 80.2, low: 78.5, close: 79.56, volume: 25593800 },
      { date: '02/26/15', open: 79.88, high: 81.37, low: 79.72, close: 80.41, volume: 31111891 },
      { date: '02/27/15', open: 80.68, high: 81.23, low: 78.62, close: 78.97, volume: 30739197 },
      { date: '03/02/15', open: 79, high: 79.86, low: 78.52, close: 79.75, volume: 21662537 },
      { date: '03/03/15', open: 79.61, high: 79.7, low: 78.52, close: 79.6, volume: 18634973 },
      { date: '03/04/15', open: 79.3, high: 81.15, low: 78.85, close: 80.9, volume: 28126686 },
      { date: '03/05/15', open: 81.23, high: 81.99, low: 81.05, close: 81.21, volume: 27825733 },
      { date: '03/06/15', open: 80.9, high: 81.33, low: 79.83, close: 80, volume: 24488581 },
      { date: '03/09/15', open: 79.68, high: 79.91, low: 78.63, close: 79.44, volume: 18925097 },
      { date: '03/10/15', open: 78.5, high: 79.26, low: 77.55, close: 77.55, volume: 23067057 },
      { date: '03/11/15', open: 77.8, high: 78.43, low: 77.26, close: 77.57, volume: 20215704 },
      { date: '03/12/15', open: 78.1, high: 79.05, low: 77.91, close: 78.93, volume: 16093319 },
      { date: '03/13/15', open: 78.6, high: 79.38, low: 77.68, close: 78.05, volume: 18557296 },
      { date: '03/16/15', open: 77.96, high: 78.12, low: 77.36, close: 78.07, volume: 19305406 },
      { date: '03/17/15', open: 78.36, high: 79.78, low: 78.34, close: 79.36, volume: 22169969 },
      { date: '03/18/15', open: 79.25, high: 81.24, low: 79.17, close: 80.91, volume: 36912446 },
      { date: '03/19/15', open: 81.12, high: 83, low: 81, close: 82.75, volume: 42099523 },
      { date: '03/20/15', open: 83.39, high: 84.6, low: 83.07, close: 83.8, volume: 44466323 },
      { date: '03/23/15', open: 83.92, high: 84.96, low: 83.3, close: 84.43, volume: 27357333 },
      { date: '03/24/15', open: 84.71, high: 86.07, low: 84.52, close: 85.31, volume: 32576522 },
      { date: '03/25/15', open: 85.5, high: 85.52, low: 82.92, close: 82.92, volume: 37436147 },
      { date: '03/26/15', open: 82.72, high: 83.77, low: 82.14, close: 83.01, volume: 32794800 },
      { date: '03/27/15', open: 83.38, high: 83.95, low: 82.88, close: 83.3, volume: 18372582 },
      { date: '03/30/15', open: 83.81, high: 84.34, low: 82.41, close: 83.2, volume: 24527686 },
      { date: '03/31/15', open: 82.9, high: 83.5, low: 82.21, close: 82.22, volume: 19734277 },
      { date: '04/01/15', open: 82.5, high: 82.72, low: 80.87, close: 81.66, volume: 22058167 },
      { date: '04/02/15', open: 82.25, high: 82.56, low: 81.44, close: 81.56, volume: 19664053 },
      { date: '04/06/15', open: 80.8, high: 82.81, low: 80.8, close: 82.44, volume: 19062934 },
      { date: '04/07/15', open: 82.65, high: 83.42, low: 82.22, close: 82.32, volume: 17467042 },
      { date: '04/08/15', open: 82.63, high: 83.1, low: 81.84, close: 82.28, volume: 18966732 },
      { date: '04/09/15', open: 82.5, high: 82.8, low: 81.71, close: 82.17, volume: 15927281 },
      { date: '04/10/15', open: 82.21, high: 82.61, low: 81.91, close: 82.04, volume: 12529738 },
      { date: '04/13/15', open: 81.93, high: 83.94, low: 81.92, close: 83.01, volume: 26883100 },
      { date: '04/14/15', open: 83.17, high: 83.69, low: 82.44, close: 83.52, volume: 19634200 },
      { date: '04/15/15', open: 83.55, high: 83.66, low: 82.27, close: 82.71, volume: 22390900 },
      { date: '04/16/15', open: 82.47, high: 83.07, low: 82.15, close: 82.31, volume: 13769700 },
      { date: '04/17/15', open: 81.48, high: 82.11, low: 80.37, close: 80.78, volume: 24076300 },
      { date: '04/20/15', open: 81.54, high: 83.15, low: 81.24, close: 83.09, volume: 28796800 },
      { date: '04/21/15', open: 84, high: 84.49, low: 83.54, close: 83.62, volume: 27171900 },
      { date: '04/22/15', open: 84.32, high: 84.74, low: 83.65, close: 84.63, volume: 45548000 },
      { date: '04/23/15', open: 84.1, high: 85.59, low: 82.41, close: 82.41, volume: 73728100 },
      { date: '04/24/15', open: 82.77, high: 82.94, low: 81.48, close: 81.53, volume: 29660400 },
      { date: '04/27/15', open: 81.87, high: 82.93, low: 81.63, close: 81.91, volume: 25446000 },
      { date: '04/28/15', open: 81.83, high: 81.9, low: 80.23, close: 80.68, volume: 23775300 },
    ]
  },

  getFinanciaChartType() {
    return 'Area,Line,Column,Candlestick,HighLowOpenClose,HeikinAshi,LineBreak,Renko,Kagi,ColumnVolume,EquiVolume,CandleVolume,ArmsCandleVolume'.split(
      ',',
    )
  },

  getBindingYs() {
    return {
      0: 'close',
      1: 'close',
      2: 'close',
      3: 'high,low,open,close',
      4: 'high,low,open,close',
      5: 'high,low,open,close',
      6: 'high,low,open,close',
      7: 'high,low,open,close',
      8: 'high,low,open,close',
      9: 'close,volume',
      10: 'high,low,open,close,volume',
      11: 'high,low,open,close,volume',
      12: 'high,low,open,close,volume',
    }
  },

  getGroupCVData() {
    var data = [
      {
        type: '音楽',
        items: [
          {
            type: 'カントリー',
            items: [
              { type: 'クラシック・カントリー', sales: DataService.randomInt(100) },
              { type: 'カウボーイ・カントリー', sales: DataService.randomInt(100) },
              { type: 'アウトロー・カントリー', sales: DataService.randomInt(100) },
              { type: 'ウェスタン・スウィング', sales: DataService.randomInt(100) },
              { type: 'ロードハウス・カントリー', sales: DataService.randomInt(100) },
            ],
          },
          {
            type: 'ロック',
            items: [
              { type: 'ハード・ロック', sales: DataService.randomInt(100) },
              { type: 'ブルース・ロック', sales: DataService.randomInt(100) },
              { type: 'ファンク・ロック', sales: DataService.randomInt(100) },
              { type: 'ラップ・ロック', sales: DataService.randomInt(100) },
              { type: 'ギター・ロック', sales: DataService.randomInt(100) },
              { type: 'プログレッシブ・ロック', sales: DataService.randomInt(100) },
            ],
          },
          {
            type: 'クラシック',
            items: [
              { type: '交響曲', sales: DataService.randomInt(100) },
              { type: '室内楽', sales: DataService.randomInt(100) },
            ],
          },
          {
            type: 'サウンドトラック',
            items: [
              { type: '映画サウンドトラック', sales: DataService.randomInt(100) },
              { type: 'ミュージカル・サウンドトラック', sales: DataService.randomInt(100) },
            ],
          },
          {
            type: 'ジャズ',
            items: [
              { type: 'スムーズ・ジャズ', sales: DataService.randomInt(100) },
              { type: 'ボーカル・ジャズ', sales: DataService.randomInt(100) },
              { type: 'ジャズ・フュージョン', sales: DataService.randomInt(100) },
              { type: 'スウィング・ジャズ', sales: DataService.randomInt(100) },
              { type: 'クール・ジャズ', sales: DataService.randomInt(100) },
              { type: 'トラディショナル・ジャズ', sales: DataService.randomInt(100) },
            ],
          },
          {
            type: '電子音楽',
            items: [
              { type: 'エレクトロニカ', sales: DataService.randomInt(100) },
              { type: 'ディスコ', sales: DataService.randomInt(100) },
              { type: 'ハウス', sales: DataService.randomInt(100) },
            ],
          },
        ],
      },
      {
        type: 'ビデオ',
        items: [
          {
            type: '映画',
            items: [
              { type: 'キッズ・ファミリー', sales: DataService.randomInt(100) },
              { type: 'アクション・冒険', sales: DataService.randomInt(100) },
              { type: 'アニメ', sales: DataService.randomInt(100) },
              { type: 'コメディー', sales: DataService.randomInt(100) },
              { type: 'ドラマ', sales: DataService.randomInt(100) },
              { type: 'ロマンス', sales: DataService.randomInt(100) },
            ],
          },
          {
            type: 'テレビ',
            items: [
              { type: 'SF', sales: DataService.randomInt(100) },
              { type: 'ドキュメンタリー', sales: DataService.randomInt(100) },
              { type: 'ファンタジー', sales: DataService.randomInt(100) },
              { type: '戦争', sales: DataService.randomInt(100) },
              { type: 'ホラー', sales: DataService.randomInt(100) },
            ],
          },
        ],
      },
      {
        type: '本',
        items: [
          {
            type: 'アート・写真',
            items: [
              { type: '建築', sales: DataService.randomInt(100) },
              { type: 'グラフィックデザイン', sales: DataService.randomInt(100) },
              { type: '絵画', sales: DataService.randomInt(100) },
              { type: '写真撮影', sales: DataService.randomInt(100) },
              { type: '舞台芸術', sales: DataService.randomInt(100) },
            ],
          },
          {
            type: '子供向け',
            items: [
              { type: 'ビギニングリーダー', sales: DataService.randomInt(100) },
              { type: 'ボードブック', sales: DataService.randomInt(100) },
              { type: 'チャプターブック', sales: DataService.randomInt(100) },
              { type: '塗り絵', sales: DataService.randomInt(100) },
              { type: '絵本', sales: DataService.randomInt(100) },
              { type: 'サウンドブック', sales: DataService.randomInt(100) },
            ],
          },
          {
            type: '歴史',
            items: [
              { type: '古代', sales: DataService.randomInt(100) },
              { type: '中世', sales: DataService.randomInt(100) },
              { type: 'ルネッサンス', sales: DataService.randomInt(100) },
            ],
          },
          {
            type: 'ミステリー',
            items: [
              { type: 'ミステリー', sales: DataService.randomInt(100) },
              { type: 'スリル・サスペンス', sales: DataService.randomInt(100) },
            ],
          },
          {
            type: 'ロマンス',
            items: [
              { type: 'アクション・冒険', sales: DataService.randomInt(100) },
              { type: 'ホリデー', sales: DataService.randomInt(100) },
              { type: 'ラブコメ', sales: DataService.randomInt(100) },
              { type: 'ロマンチック・サスペンス', sales: DataService.randomInt(100) },
              { type: '西部', sales: DataService.randomInt(100) },
              { type: '歴史', sales: DataService.randomInt(100) },
            ],
          },
          {
            type: 'SF・ファンタジー',
            items: [
              { type: 'ファンタジー', sales: DataService.randomInt(100) },
              { type: 'ゲーム', sales: DataService.randomInt(100) },
              { type: 'SF', sales: DataService.randomInt(100) },
            ],
          },
        ],
      },
      {
        type: '電子機器',
        items: [
          {
            type: 'カメラ',
            items: [
              { type: 'デジタルカメラ', sales: DataService.randomInt(100) },
              { type: 'フィルム写真', sales: DataService.randomInt(100) },
              { type: 'レンズ', sales: DataService.randomInt(100) },
              { type: 'ビデオカメラ', sales: DataService.randomInt(100) },
              { type: '周辺機器', sales: DataService.randomInt(100) },
            ],
          },
          {
            type: 'ヘッドホン',
            items: [
              { type: 'イヤホン', sales: DataService.randomInt(100) },
              { type: 'オーバーイヤー・ヘッドホン', sales: DataService.randomInt(100) },
              { type: 'オンイヤー・ヘッドホン', sales: DataService.randomInt(100) },
              { type: 'Bluetoothヘッドフォン', sales: DataService.randomInt(100) },
              { type: 'ノイズキャンセリング・ヘッドホン', sales: DataService.randomInt(100) },
              { type: 'オーディオマニア・ヘッドホン', sales: DataService.randomInt(100) },
            ],
          },
          {
            type: '携帯電話',
            items: [
              { type: 'スマートフォン', sales: DataService.randomInt(100) },
              {
                type: '周辺機器',
                items: [
                  { type: 'モバイルバッテリー', sales: DataService.randomInt(100) },
                  { type: 'Bluetoothヘッドセット', sales: DataService.randomInt(100) },
                  { type: 'Bluetoothスピーカー', sales: DataService.randomInt(100) },
                  { type: '充電器', sales: DataService.randomInt(100) },
                  { type: '液晶保護フィルム', sales: DataService.randomInt(100) },
                ],
              },
            ],
          },
          {
            type: 'ウェアラブル端末',
            items: [
              { type: '活動トラッカー', sales: DataService.randomInt(100) },
              { type: 'スマートウォッチ', sales: DataService.randomInt(100) },
              { type: 'スポーツ・GPSウォッチ', sales: DataService.randomInt(100) },
              { type: 'VRヘッドセット', sales: DataService.randomInt(100) },
              { type: 'ウェアラブルカメラ', sales: DataService.randomInt(100) },
              { type: 'スマートメガネ', sales: DataService.randomInt(100) },
            ],
          },
        ],
      },
      {
        type: 'コンピューター',
        items: [
          {
            type: 'デスクトップPC',
            items: [
              { type: 'オールインワンPC', sales: DataService.randomInt(100) },
              { type: 'ミニPC', sales: DataService.randomInt(100) },
              { type: 'タワーPC', sales: DataService.randomInt(100) },
            ],
          },
          {
            type: 'ノートブック',
            items: [
              { type: '2in1タブレットPC', sales: DataService.randomInt(100) },
              { type: 'モバイルノートPC', sales: DataService.randomInt(100) },
            ],
          },
          {
            type: 'タブレット',
            items: [
              { type: 'iOS', sales: DataService.randomInt(100) },
              { type: 'Android', sales: DataService.randomInt(100) },
              { type: 'Fire OS', sales: DataService.randomInt(100) },
              { type: 'Windows Mobile', sales: DataService.randomInt(100) },
            ],
          },
        ],
      },
    ]
    return data
  },

  getHierarchicalData() {
    var data = [],
      quarters = ['Q1', 'Q2', 'Q3', 'Q4'],
      months = [
        [
          {
            name: '1月',
            value: 1,
          },
          {
            name: '2月',
            value: 2,
          },
          {
            name: '3月',
            value: 3,
          },
        ],
        [
          {
            name: '4月',
            value: 4,
          },
          {
            name: '5月',
            value: 5,
          },
          {
            name: '6月',
            value: 6,
          },
        ],
        [
          {
            name: '7月',
            value: 7,
          },
          {
            name: '8月',
            value: 8,
          },
          {
            name: '9月',
            value: 9,
          },
        ],
        [
          {
            name: '10月',
            value: 10,
          },
          {
            name: '11月',
            value: 11,
          },
          {
            name: '12月',
            value: 12,
          },
        ],
      ],
      years = [],
      year = new Date().getFullYear(),
      yearLen,
      i,
      len = 100

    yearLen = 3
    for (i = yearLen; i > 0; i--) {
      years.push(year - i)
    }

    var y, q, m

    for (i = 0; i < len; i++) {
      y = Math.floor(Math.random() * yearLen)
      q = Math.floor(Math.random() * 4)
      m = Math.floor(Math.random() * 3)

      data.push({
        year: years[y],
        quarter: quarters[q],
        month: months[q][m].name,
        monthVal: months[q][m].value,
        value: Math.round(Math.random() * 100),
      })
    }

    var cv = new wjcCore.CollectionView(data)

    cv.sortDescriptions.push(new wjcCore.SortDescription('year', false))
    cv.sortDescriptions.push(new wjcCore.SortDescription('quarter', false))
    cv.sortDescriptions.push(new wjcCore.SortDescription('monthVal', false))
    cv.groupDescriptions.push(new wjcCore.PropertyGroupDescription('year'))
    cv.groupDescriptions.push(new wjcCore.PropertyGroupDescription('quarter'))
    cv.groupDescriptions.push(new wjcCore.PropertyGroupDescription('month'))
    return cv
  },

  getRadarData() {
    var data = [],
      countries = 'アメリカ,ドイツ,イギリス,日本,イタリア,ギリシャ'.split(',')

    // populate itemsSource
    for (var i = 0; i < countries.length; i++) {
      data.push({
        country: countries[i],
        downloads: Math.ceil(Math.random() * 80) + 20,
        sales: Math.ceil(Math.random() * 80) + 20,
      })
    }
    return data
  },

  randBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  },

  randomInt(max) {
    return Math.floor(Math.random() * (max + 1))
  },
}
