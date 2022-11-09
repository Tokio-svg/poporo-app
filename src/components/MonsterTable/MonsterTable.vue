<template>
  <div class="monsterTable--container">
    <table class="monsterTable">
      <tr>
        <th>階層</th>
        <th colspan="10">出現モンスター</th>
      </tr>
      <tr>
        <td>1</td>
        <td rowspan="3" @click="linkToDetail(0)">スライム</td>
        <td rowspan="4">スライムベス</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>2</td>
        <td rowspan="4">いたずらもぐら</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>3</td>
        <td rowspan="4">ももんじゃ</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>4</td>
        <td rowspan="4">おおナメクジ</td>
        <td rowspan="5">はりせんもぐら</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>5</td>
        <td rowspan="4">おおきづち</td>
        <td rowspan="11">オニオ<span class="tb-vertical">ー</span>ン</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>6</td>
        <td rowspan="5">ホイミスライム</td>
        <td rowspan="5">ドラキ<span class="tb-vertical">ー</span>Lv2</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>7</td>
        <td rowspan="8">ラリホ<span class="tb-vertical">ー</span>アント</td>
        <td rowspan="5">おばけヒトデ</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>8</td>
        <td rowspan="5">ゴ<span class="tb-vertical">ー</span>スト</td>
        <td rowspan="5">タップペンギ<span class="tb-vertical">ー</span></td>
        <td></td>
      </tr>
      <tr>
        <td>9</td>
        <td rowspan="5">スライムブレス</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>10</td>
        <td rowspan="5">スカイフロッグ</td>
        <td></td>
      </tr>
      <tr>
        <td>11</td>
        <td rowspan="5">ファ<span class="tb-vertical">ー</span>ラットLv2</td>
        <td rowspan="5">ダンスキャロット</td>
        <td rowspan="5">つのうしがいLv2</td>
      </tr>
      <tr>
        <td>12</td>
        <td rowspan="4">あめふらし</td>
      </tr>
      <tr>
        <td>13</td>
        <td rowspan="3">あやしいかげ</td>
        <td></td>
      </tr>
      <tr>
        <td>14</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>15</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>16</td>
        <td rowspan="5">ゴ<span class="tb-vertical">ー</span>レムLv2</td>
        <td rowspan="5">さそりかまきりLv3</td>
        <td rowspan="5">メイジももんじゃ</td>
        <td rowspan="4">スモ<span class="tb-vertical">ー</span>ルグ<span class="tb-vertical">ー</span>ル</td>
        <td rowspan="2">リリパット</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>17</td>
        <td rowspan="6">キメラ</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>18</td>
        <td rowspan="5">さつじんきLv2</td>
        <td rowspan="3">ハエまどう</td>
        <td rowspan="3">ドッグスナイパ<span class="tb-vertical">ー</span></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>19</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>20</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>21</td>
        <td rowspan="5">キラ<span class="tb-vertical">ー</span>マシン</td>
        <td rowspan="5">スペクテット</td>
        <td rowspan="5">トロル</td>
        <td rowspan="5">シルバ<span class="tb-vertical">ー</span>デビル</td>
        <td rowspan="5">ひょうがまじん</td>
        <td rowspan="5">バブルスライムLv5</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>22</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>23</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>24</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>25</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>26</td>
        <td rowspan="10">うごくせきぞう</td>
        <td rowspan="10">レノファイタ<span class="tb-vertical">ー</span>Lv2</td>
        <td rowspan="10">くさった死体Lv2</td>
        <td rowspan="10">マドハンドLv3</td>
        <td rowspan="5">ゾンビマスタ<span class="tb-vertical">ー</span></td>
        <td rowspan="5">ミイラおとこLv2</td>
        <td rowspan="5">マミ<span class="tb-vertical">ー</span>Lv2</td>
        <td rowspan="5">リビングデッド</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>27</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>28</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>29</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>30</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>31</td>
        <td rowspan="5">シャ<span class="tb-vertical">ー</span>マンLv2</td>
        <td rowspan="5">おばけキノコLv2</td>
        <td rowspan="5">
          バ<span class="tb-vertical">ー</span>サ<span class="tb-vertical">ー</span>カ<span class="tb-vertical">ー</span>Lv2</td>
        <td rowspan="5">がいこつけんしLv2</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>32</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>33</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>34</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>35</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>36</td>
        <td rowspan="5">さまようよろいLv3</td>
        <td rowspan="5">どろにんぎょう</td>
        <td rowspan="5">ミステリ<span class="tb-vertical">ー</span>ド<span class="tb-vertical">ー</span>ル</td>
        <td rowspan="5">ベビ<span class="tb-vertical">ー</span>サタン</td>
        <td rowspan="5">まどうしLv3</td>
        <td rowspan="5">げんじゅつしLv3</td>
        <td rowspan="5">はねせんにんLv6</td>
        <td rowspan="5">テンツクLv3</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>37</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>38</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>39</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>40</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>41</td>
        <td rowspan="5">ヘルゴ<span class="tb-vertical">ー</span>ストLv2</td>
        <td rowspan="5">ゆうれいLv3</td>
        <td rowspan="5">シャド<span class="tb-vertical">ー</span>Lv3</td>
        <td rowspan="5">ドラキ<span class="tb-vertical">ー</span>マLv3</td>
        <td rowspan="5">メイジキメラLv2</td>
        <td rowspan="5">おおめだまLv3</td>
        <td rowspan="5">ラストテンツク</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>42</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>43</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>44</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>45</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>46</td>
        <td rowspan="5">ガニラスLv4</td>
        <td rowspan="5">ぐんたいガニLv4</td>
        <td rowspan="5">しびれマイマイLv4</td>
        <td rowspan="5">アイアンタ<span class="tb-vertical">ー</span>トルLv4</td>
        <td rowspan="5">岩とびあくまLv4</td>
        <td rowspan="5">ラリホ<span class="tb-vertical">ー</span>アントLv6</td>
        <td rowspan="5">マ<span class="tb-vertical">ー</span>ジスタ<span class="tb-vertical">ー</span>Lv4</td>
        <td rowspan="5">グレイトマ<span class="tb-vertical">ー</span>マンLv4</td>
        <td rowspan="5">デビルアンカ<span class="tb-vertical">ー</span>Lv4</td>
        <td></td>
      </tr>
      <tr>
        <td>47</td>
        <td></td>
      </tr>
      <tr>
        <td>48</td>
        <td></td>
      </tr>
      <tr>
        <td>49</td>
        <td></td>
      </tr>
      <tr>
        <td>50</td>
        <td></td>
      </tr>
      <tr>
        <td>51</td>
        <td rowspan="9">おどる宝石Lv4</td>
        <td rowspan="9">エリミネ<span class="tb-vertical">ー</span>タ<span class="tb-vertical">ー</span></td>
        <td rowspan="9">シャド<span class="tb-vertical">ー</span>ナイトLv6</td>
        <td rowspan="25">メガザルロックLv7</td>
        <td rowspan="9">あくましんかんLv5</td>
        <td rowspan="9">デ<span class="tb-vertical">ー</span>モント<span class="tb-vertical">ー</span>ドLv4</td>
        <td rowspan="9">だいまどうLv4</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>52</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>53</td>
        <td rowspan="10">きとうしLv4</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>54</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>55</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>56</td>
        <td rowspan="4">グレイトホ<span class="tb-vertical">ー</span>ンLv2</td>
        <td></td>
      </tr>
      <tr>
        <td>57</td>
        <td></td>
      </tr>
      <tr>
        <td>58</td>
        <td rowspan="8">モシャスナイトLv3</td>
      </tr>
      <tr>
        <td>59</td>
      </tr>
      <tr>
        <td>60</td>
        <td rowspan="6">
          キラ<span class="tb-vertical">ー</span>ア<span class="tb-vertical">ー</span>マ<span class="tb-vertical">ー</span>Lv3</td>
        <td rowspan="6">ギガンテスLv5</td>
        <td rowspan="6">フライングデビル</td>
        <td rowspan="6">デビルロ<span class="tb-vertical">ー</span>ド</td>
        <td rowspan="6">ア<span class="tb-vertical">ー</span>クデ<span class="tb-vertical">ー</span>モンLv5</td>
        <td></td>
        <td rowspan="10">グレイトホ<span class="tb-vertical">ー</span>ンLv3</td>
      </tr>
      <tr>
        <td>61</td>
        <td></td>
      </tr>
      <tr>
        <td>62</td>
        <td></td>
      </tr>
      <tr>
        <td>63</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>64</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>65</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>66</td>
        <td rowspan="5">ばくだん岩Lv5</td>
        <td rowspan="5">リビングハンマ<span class="tb-vertical">ー</span></td>
        <td rowspan="5">いしにんぎょう</td>
        <td rowspan="5">だいまじんLv6</td>
        <td rowspan="5">ブラッドハンドLv3</td>
        <td rowspan="5">タマゴロン</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>67</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>68</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>69</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>70</td>
        <td></td>
        <td rowspan="11">グレイトホ<span class="tb-vertical">ー</span>ンLv5</td>
        <td></td>
      </tr>
      <tr>
        <td>71</td>
        <td rowspan="5">ファイヤ<span class="tb-vertical">ー</span>ケロッグLv7</td>
        <td rowspan="5">サンダ<span class="tb-vertical">ー</span>ラットLv7</td>
        <td rowspan="5">プラズママウス</td>
        <td rowspan="5">ドラゴスライムLv7</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>72</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>73</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>74</td>
        <td rowspan="7">ドラゴンLv2</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>75</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>76</td>
        <td rowspan="5">ようがんまじんLv5</td>
        <td rowspan="5">ベビ<span class="tb-vertical">ー</span>ニュ<span class="tb-vertical">ー</span>トLv6</td>
        <td rowspan="5">ドラゴンキッズLv6</td>
        <td rowspan="5">メラリザ<span class="tb-vertical">ー</span>ドLv6</td>
        <td rowspan="5">ドラゴメタルLv5</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>77</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>78</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>79</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>80</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>81</td>
        <td rowspan="19">じごくのよろい</td>
        <td rowspan="19">キラ<span class="tb-vertical">ー</span>スタ<span class="tb-vertical">ー</span>Lv5</td>
        <td rowspan="19">デスマシ<span class="tb-vertical">ー</span>ン</td>
        <td rowspan="19">キラ<span class="tb-vertical">ー</span>プラスタ<span class="tb-vertical">ー</span></td>
        <td rowspan="19">ランガ<span class="tb-vertical">ー</span></td>
        <td rowspan="19">ようじゅつしLv5</td>
        <td rowspan="9">スタ<span class="tb-vertical">ー</span>キメラLv5</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>82</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>83</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>84</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>85</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>86</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>87</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>88</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>89</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>90</td>
        <td rowspan="10">ダ<span class="tb-vertical">ー</span>スドラゴン</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>91</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>92</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>93</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>94</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>95</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>96</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>97</td>
        <td rowspan="3">コロマ<span class="tb-vertical">ー</span>ジ</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>98</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>99</td>
        <td></td>
        <td></td>
      </tr>

    </table>
  </div>
</template>

<script>
export default {
  methods: {
    linkToDetail(id) {
      this.$router.push({ name:'monster_detail', params: { id: id } })
    }
  }
}
</script>

<style scoped>
@import '@/styles/monsterTable.css';
</style>