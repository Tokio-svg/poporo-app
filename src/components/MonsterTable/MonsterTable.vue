<template>
  <div class="monsterTable__container">
    <table class="monsterTable">
      <tr>
        <th>階層</th>
        <th colspan="10">出現モンスター</th>
      </tr>
      <tr>
        <td>1</td>
        <td rowspan="3" @click="linkToDetail(0)" class="monsterTable__cell">スライム</td>
        <td rowspan="4" @click="linkToDetail(1)" class="monsterTable__cell">スライムベス</td>
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
        <td rowspan="4" @click="linkToDetail(2)" class="monsterTable__cell">いたずらもぐら</td>
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
        <td rowspan="4" @click="linkToDetail(3)" class="monsterTable__cell">ももんじゃ</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>4</td>
        <td rowspan="4" @click="linkToDetail(4)" class="monsterTable__cell">おおナメクジ</td>
        <td rowspan="5" @click="linkToDetail(5)" class="monsterTable__cell">はりせんもぐら</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>5</td>
        <td rowspan="4" @click="linkToDetail(6)" class="monsterTable__cell">おおきづち</td>
        <td rowspan="11" @click="linkToDetail(7)" class="monsterTable__cell">オニオ<span class="tb-vertical">ー</span>ン</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>6</td>
        <td rowspan="5" @click="linkToDetail(8)" class="monsterTable__cell">ホイミスライム</td>
        <td rowspan="5" @click="linkToDetail(9)" class="monsterTable__cell">ドラキ<span class="tb-vertical">ー</span>Lv2</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>7</td>
        <td rowspan="8" @click="linkToDetail(11)" class="monsterTable__cell">ラリホ<span class="tb-vertical">ー</span>アント</td>
        <td rowspan="5" @click="linkToDetail(10)" class="monsterTable__cell">おばけヒトデ</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>8</td>
        <td rowspan="5" @click="linkToDetail(12)" class="monsterTable__cell">ゴ<span class="tb-vertical">ー</span>スト</td>
        <td rowspan="5" @click="linkToDetail(13)" class="monsterTable__cell">タップペンギ<span class="tb-vertical">ー</span></td>
        <td></td>
      </tr>
      <tr>
        <td>9</td>
        <td rowspan="5" @click="linkToDetail(14)" class="monsterTable__cell">スライムブレス</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>10</td>
        <td rowspan="5" @click="linkToDetail(15)" class="monsterTable__cell">スカイフロッグ</td>
        <td></td>
      </tr>
      <tr>
        <td>11</td>
        <td rowspan="5" @click="linkToDetail(16)" class="monsterTable__cell">ファ<span class="tb-vertical">ー</span>ラットLv2</td>
        <td rowspan="5" @click="linkToDetail(17)" class="monsterTable__cell">ダンスキャロット</td>
        <td rowspan="5" @click="linkToDetail(18)" class="monsterTable__cell">つのうしがいLv2</td>
      </tr>
      <tr>
        <td>12</td>
        <td rowspan="4" @click="linkToDetail(19)" class="monsterTable__cell">あめふらし</td>
      </tr>
      <tr>
        <td>13</td>
        <td rowspan="3" @click="linkToDetail(20)" class="monsterTable__cell">あやしいかげ</td>
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
        <td rowspan="5" @click="linkToDetail(23)" class="monsterTable__cell">ゴ<span class="tb-vertical">ー</span>レムLv2</td>
        <td rowspan="5" @click="linkToDetail(25)" class="monsterTable__cell">さそりかまきりLv3</td>
        <td rowspan="5" @click="linkToDetail(26)" class="monsterTable__cell">メイジももんじゃ</td>
        <td rowspan="4" @click="linkToDetail(22)" class="monsterTable__cell">
          スモ<span class="tb-vertical">ー</span>ルグ<span class="tb-vertical">ー</span>ル</td>
        <td rowspan="2" @click="linkToDetail(21)" class="monsterTable__cell">リリパット</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>17</td>
        <td rowspan="6" @click="linkToDetail(27)" class="monsterTable__cell">キメラ</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>18</td>
        <td rowspan="5" @click="linkToDetail(30)" class="monsterTable__cell">さつじんきLv2</td>
        <td rowspan="3" @click="linkToDetail(28)" class="monsterTable__cell">ハエまどう</td>
        <td rowspan="3" @click="linkToDetail(29)" class="monsterTable__cell">ドッグスナイパ<span class="tb-vertical">ー</span></td>
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
        <td rowspan="5" @click="linkToDetail(31)" class="monsterTable__cell">キラ<span class="tb-vertical">ー</span>マシン</td>
        <td rowspan="5" @click="linkToDetail(32)" class="monsterTable__cell">スペクテット</td>
        <td rowspan="5" @click="linkToDetail(33)" class="monsterTable__cell">トロル</td>
        <td rowspan="5" @click="linkToDetail(34)" class="monsterTable__cell">シルバ<span class="tb-vertical">ー</span>デビル</td>
        <td rowspan="5" @click="linkToDetail(35)" class="monsterTable__cell">ひょうがまじん</td>
        <td rowspan="5" @click="linkToDetail(36)" class="monsterTable__cell">バブルスライムLv5</td>
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
        <td rowspan="10" @click="linkToDetail(41)" class="monsterTable__cell">うごくせきぞう</td>
        <td rowspan="10" @click="linkToDetail(42)" class="monsterTable__cell">
          レノファイタ<span class="tb-vertical">ー</span>Lv2</td>
        <td rowspan="10" @click="linkToDetail(43)" class="monsterTable__cell">くさった死体Lv2</td>
        <td rowspan="10" @click="linkToDetail(44)" class="monsterTable__cell">マドハンドLv3</td>
        <td rowspan="5" @click="linkToDetail(37)" class="monsterTable__cell">ゾンビマスタ<span class="tb-vertical">ー</span></td>
        <td rowspan="5" @click="linkToDetail(38)" class="monsterTable__cell">ミイラおとこLv2</td>
        <td rowspan="5" @click="linkToDetail(39)" class="monsterTable__cell">マミ<span class="tb-vertical">ー</span>Lv2</td>
        <td rowspan="5" @click="linkToDetail(40)" class="monsterTable__cell">リビングデッド</td>
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
        <td rowspan="5" @click="linkToDetail(46)" class="monsterTable__cell">シャ<span class="tb-vertical">ー</span>マンLv2</td>
        <td rowspan="5" @click="linkToDetail(45)" class="monsterTable__cell">おばけキノコLv2</td>
        <td rowspan="5" @click="linkToDetail(48)" class="monsterTable__cell">
          バ<span class="tb-vertical">ー</span>サ<span class="tb-vertical">ー</span>カ<span class="tb-vertical">ー</span>Lv2</td>
        <td rowspan="5" @click="linkToDetail(47)" class="monsterTable__cell">がいこつけんしLv2</td>
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
        <td rowspan="5" @click="linkToDetail(49)" class="monsterTable__cell">さまようよろいLv3</td>
        <td rowspan="5" @click="linkToDetail(50)" class="monsterTable__cell">どろにんぎょう</td>
        <td rowspan="5" @click="linkToDetail(51)" class="monsterTable__cell">
          ミステリ<span class="tb-vertical">ー</span>ド<span class="tb-vertical">ー</span>ル</td>
        <td rowspan="5" @click="linkToDetail(52)" class="monsterTable__cell">ベビ<span class="tb-vertical">ー</span>サタン</td>
        <td rowspan="5" @click="linkToDetail(53)" class="monsterTable__cell">まどうしLv3</td>
        <td rowspan="5" @click="linkToDetail(54)" class="monsterTable__cell">げんじゅつしLv3</td>
        <td rowspan="5" @click="linkToDetail(55)" class="monsterTable__cell">はねせんにんLv6</td>
        <td rowspan="5" @click="linkToDetail(56)" class="monsterTable__cell">テンツクLv3</td>
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
        <td rowspan="5" @click="linkToDetail(57)" class="monsterTable__cell">ヘルゴ<span class="tb-vertical">ー</span>ストLv2</td>
        <td rowspan="5" @click="linkToDetail(58)" class="monsterTable__cell">ゆうれいLv3</td>
        <td rowspan="5" @click="linkToDetail(59)" class="monsterTable__cell">シャド<span class="tb-vertical">ー</span>Lv3</td>
        <td rowspan="5" @click="linkToDetail(60)" class="monsterTable__cell">ドラキ<span class="tb-vertical">ー</span>マLv3</td>
        <td rowspan="5" @click="linkToDetail(61)" class="monsterTable__cell">メイジキメラLv2</td>
        <td rowspan="5" @click="linkToDetail(62)" class="monsterTable__cell">おおめだまLv3</td>
        <td rowspan="5" @click="linkToDetail(63)" class="monsterTable__cell">ラストテンツク</td>
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
        <td rowspan="5" @click="linkToDetail(64)" class="monsterTable__cell">ガニラスLv4</td>
        <td rowspan="5" @click="linkToDetail(65)" class="monsterTable__cell">ぐんたいガニLv4</td>
        <td rowspan="5" @click="linkToDetail(66)" class="monsterTable__cell">しびれマイマイLv4</td>
        <td rowspan="5" @click="linkToDetail(67)" class="monsterTable__cell">
          アイアンタ<span class="tb-vertical">ー</span>トルLv4</td>
        <td rowspan="5" @click="linkToDetail(68)" class="monsterTable__cell">岩とびあくまLv4</td>
        <td rowspan="5" @click="linkToDetail(11)" class="monsterTable__cell">
          ラリホ<span class="tb-vertical">ー</span>アントLv6</td>
        <td rowspan="5" @click="linkToDetail(69)" class="monsterTable__cell">
          マ<span class="tb-vertical">ー</span>ジスタ<span class="tb-vertical">ー</span>Lv4</td>
        <td rowspan="5" @click="linkToDetail(70)" class="monsterTable__cell">
          グレイトマ<span class="tb-vertical">ー</span>マンLv4</td>
        <td rowspan="5" @click="linkToDetail(72)" class="monsterTable__cell">
          デビルアンカ<span class="tb-vertical">ー</span>Lv4</td>
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
        <td rowspan="9" @click="linkToDetail(73)" class="monsterTable__cell">おどる宝石Lv4</td>
        <td rowspan="9" @click="linkToDetail(74)" class="monsterTable__cell">
          エリミネ<span class="tb-vertical">ー</span>タ<span class="tb-vertical">ー</span></td>
        <td rowspan="9" @click="linkToDetail(75)" class="monsterTable__cell">
          シャド<span class="tb-vertical">ー</span>ナイトLv6</td>
        <td rowspan="25" @click="linkToDetail(79)" class="monsterTable__cell">メガザルロックLv7</td>
        <td rowspan="9" @click="linkToDetail(76)" class="monsterTable__cell">あくましんかんLv5</td>
        <td rowspan="9" @click="linkToDetail(77)" class="monsterTable__cell">
          デ<span class="tb-vertical">ー</span>モント<span class="tb-vertical">ー</span>ドLv4</td>
        <td rowspan="9" @click="linkToDetail(78)" class="monsterTable__cell">だいまどうLv4</td>
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
        <td rowspan="10" @click="linkToDetail(80)" class="monsterTable__cell">きとうしLv4</td>
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
        <td rowspan="4" @click="linkToDetail(81)" class="monsterTable__cell">
          グレイトホ<span class="tb-vertical">ー</span>ンLv2</td>
        <td></td>
      </tr>
      <tr>
        <td>57</td>
        <td></td>
      </tr>
      <tr>
        <td>58</td>
        <td rowspan="8" @click="linkToDetail(82)" class="monsterTable__cell">モシャスナイトLv3</td>
      </tr>
      <tr>
        <td>59</td>
      </tr>
      <tr>
        <td>60</td>
        <td rowspan="6" @click="linkToDetail(83)" class="monsterTable__cell">
          キラ<span class="tb-vertical">ー</span>ア<span class="tb-vertical">ー</span>マ<span class="tb-vertical">ー</span>Lv3</td>
        <td rowspan="6" @click="linkToDetail(84)" class="monsterTable__cell">ギガンテスLv5</td>
        <td rowspan="6" @click="linkToDetail(86)" class="monsterTable__cell">フライングデビル</td>
        <td rowspan="6" @click="linkToDetail(87)" class="monsterTable__cell">デビルロ<span class="tb-vertical">ー</span>ド</td>
        <td rowspan="6" @click="linkToDetail(88)" class="monsterTable__cell">
          ア<span class="tb-vertical">ー</span>クデ<span class="tb-vertical">ー</span>モンLv5</td>
        <td></td>
        <td rowspan="10" @click="linkToDetail(81)" class="monsterTable__cell">
          グレイトホ<span class="tb-vertical">ー</span>ンLv3</td>
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
        <td rowspan="5" @click="linkToDetail(90)" class="monsterTable__cell">ばくだん岩Lv5</td>
        <td rowspan="5" @click="linkToDetail(91)" class="monsterTable__cell">リビングハンマ<span class="tb-vertical">ー</span></td>
        <td rowspan="5" @click="linkToDetail(92)" class="monsterTable__cell">いしにんぎょう</td>
        <td rowspan="5" @click="linkToDetail(93)" class="monsterTable__cell">だいまじんLv6</td>
        <td rowspan="5" @click="linkToDetail(94)" class="monsterTable__cell">ブラッドハンドLv3</td>
        <td rowspan="5" @click="linkToDetail(95)" class="monsterTable__cell">タマゴロン</td>
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
        <td rowspan="11" @click="linkToDetail(81)" class="monsterTable__cell">
          グレイトホ<span class="tb-vertical">ー</span>ンLv5</td>
        <td></td>
      </tr>
      <tr>
        <td>71</td>
        <td rowspan="5" @click="linkToDetail(96)" class="monsterTable__cell">
          ファイヤ<span class="tb-vertical">ー</span>ケロッグLv7</td>
        <td rowspan="5" @click="linkToDetail(97)" class="monsterTable__cell">
          サンダ<span class="tb-vertical">ー</span>ラットLv7</td>
        <td rowspan="5" @click="linkToDetail(98)" class="monsterTable__cell">プラズママウス</td>
        <td rowspan="5" @click="linkToDetail(99)" class="monsterTable__cell">ドラゴスライムLv7</td>
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
        <td rowspan="7" @click="linkToDetail(100)" class="monsterTable__cell">ドラゴンLv2</td>
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
        <td rowspan="5" @click="linkToDetail(101)" class="monsterTable__cell">ようがんまじんLv5</td>
        <td rowspan="5" @click="linkToDetail(103)" class="monsterTable__cell">
          ベビ<span class="tb-vertical">ー</span>ニュ<span class="tb-vertical">ー</span>トLv6</td>
        <td rowspan="5" @click="linkToDetail(104)" class="monsterTable__cell">ドラゴンキッズLv6</td>
        <td rowspan="5" @click="linkToDetail(105)" class="monsterTable__cell">
          メラリザ<span class="tb-vertical">ー</span>ドLv6</td>
        <td rowspan="5" @click="linkToDetail(102)" class="monsterTable__cell">ドラゴメタルLv5</td>
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
        <td rowspan="19" @click="linkToDetail(107)" class="monsterTable__cell">じごくのよろい</td>
        <td rowspan="19" @click="linkToDetail(110)" class="monsterTable__cell">
          キラ<span class="tb-vertical">ー</span>スタ<span class="tb-vertical">ー</span>Lv5</td>
        <td rowspan="19" @click="linkToDetail(111)" class="monsterTable__cell">デスマシ<span class="tb-vertical">ー</span>ン</td>
        <td rowspan="19" @click="linkToDetail(108)" class="monsterTable__cell">
          キラ<span class="tb-vertical">ー</span>プラスタ<span class="tb-vertical">ー</span></td>
        <td rowspan="19" @click="linkToDetail(112)" class="monsterTable__cell">ランガ<span class="tb-vertical">ー</span></td>
        <td rowspan="19" @click="linkToDetail(109)" class="monsterTable__cell">ようじゅつしLv5</td>
        <td rowspan="9" @click="linkToDetail(106)" class="monsterTable__cell">
          スタ<span class="tb-vertical">ー</span>キメラLv5</td>
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
        <td rowspan="10" @click="linkToDetail(113)" class="monsterTable__cell">
          ダ<span class="tb-vertical">ー</span>スドラゴン</td>
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
        <td rowspan="3" @click="linkToDetail(114)" class="monsterTable__cell">コロマ<span class="tb-vertical">ー</span>ジ</td>
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

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const linkToDetail = (id) => {
  router.push({ name:'monster_detail', params: { id: id } })
}
</script>

<style scoped>
@import '@/styles/monsterTable.css';
</style>