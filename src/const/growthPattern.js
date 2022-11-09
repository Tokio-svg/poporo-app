// --------------------------
// 成長パターン別パラメータ
// --------------------------
export default {
// 普通早熟
  normalPrecocious: {
    1:  [  0,  0,  0,       0],
    2:  [  8,  9,  2,       3],
    3:  [ 15, 14,  4,      10],
    4:  [ 21, 18,  6,      30],
    5:  [ 26, 21,  8,      50],
    6:  [ 30, 24, 10,     100],
    7:  [ 33, 27, 12,     150],
    8:  [ 36, 30, 14,     200],
    9:  [ 39, 33, 16,     300],
    10: [ 42, 36, 18,     500],
    11: [ 45, 38, 20,     800],
    12: [ 48, 40, 22,    1000],
    13: [ 51, 42, 23,    1200],
    14: [ 54, 44, 24,    1500],
    15: [ 57, 46, 25,    1800],
    16: [ 59, 47, 26,    2000],
    17: [ 61, 48, 27,    2500],
    18: [ 63, 49, 28,    3000],
    19: [ 65, 50, 29,    4000],
    20: [ 67, 51, 30,    5000],
    21: [ 68, 52, 31,    6500],
    22: [ 69, 53, 32,    8000],
    23: [ 70, 54, 33,   10000],
    24: [ 71, 55, 34,   13000],
    25: [ 72, 56, 35,   16000],
    26: [ 73, 57, 36,   20000],
    27: [ 74, 58, 37,   25000],
    28: [ 75, 59, 38,   30000],
    29: [ 76, 60, 39,   36000],
    30: [ 77, 61, 40,   42000],
    31: [ 78, 62, 40,   48000],
    32: [ 79, 63, 40,   54000],
    33: [ 80, 64, 40,   60000],
    34: [ 81, 65, 40,   70000],
    35: [ 82, 66, 40,   80000],
    36: [ 83, 67, 40,   90000],
    37: [ 84, 68, 40,  100000],
    38: [ 85, 69, 40,  115000],
    39: [ 86, 70, 40,  130000],
    40: [ 87, 71, 40,  145000],
    41: [ 88, 71, 40,  160000],
    42: [ 89, 71, 40,  175000],
    43: [ 90, 72, 40,  200000],
    44: [ 91, 72, 40,  230000],
    45: [ 92, 73, 40,  260000],
    46: [ 93, 73, 40,  290000],
    47: [ 94, 74, 40,  320000],
    48: [ 95, 74, 40,  350000],
    49: [ 96, 75, 40,  380000],
    50: [ 97, 76, 40,  410000],
    51: [ 98, 76, 40,  440000],
    52: [ 99, 76, 40,  470000],
    53: [100, 76, 40,  500000],
    54: [101, 76, 40,  530000],
    55: [102, 76, 40,  560000],
    56: [103, 76, 40,  590000],
    57: [104, 76, 40,  620000],
    58: [105, 76, 40,  650000],
    59: [106, 76, 40,  680000],
    60: [107, 76, 40,  710000],
    61: [108, 76, 40,  750000],
    62: [109, 76, 40,  790000],
    63: [110, 76, 40,  830000],
    64: [111, 76, 40,  870000],
    65: [112, 76, 40,  910000],
    66: [113, 76, 40,  950000],
    67: [114, 76, 40,  990000],
    68: [115, 76, 40, 1030000],
    69: [116, 76, 40, 1070000],
    70: [117, 76, 40, 1120000],
    71: [118, 76, 40, 1170000],
    72: [119, 76, 40, 1220000],
    73: [120, 76, 40, 1270000],
    74: [121, 76, 40, 1320000],
    75: [122, 76, 40, 1370000],
    76: [123, 76, 40, 1420000],
    77: [124, 76, 40, 1470000],
    78: [125, 76, 40, 1520000],
    79: [126, 76, 40, 1570000],
    80: [127, 76, 40, 1620000],
    81: [128, 76, 40, 1670000],
    82: [129, 76, 40, 1720000],
    83: [130, 76, 40, 1770000],
    84: [131, 76, 40, 1820000],
    85: [132, 76, 40, 1880000],
    86: [133, 76, 40, 1940000],
    87: [134, 76, 40, 2000000],
    88: [135, 76, 40, 2060000],
    89: [136, 76, 40, 2120000],
    90: [137, 76, 40, 2180000],
    91: [138, 76, 40, 2240000],
    92: [139, 76, 40, 2300000],
    93: [140, 76, 40, 2360000],
    94: [141, 76, 40, 2420000],
    95: [142, 76, 40, 3000000],
    96: [143, 76, 40, 5000000],
    97: [144, 76, 40, 7000000],
    98: [145, 76, 40, 9000000],
    99: [146, 76, 40, 9990000]
  },

// 攻撃早熟
  attackPrecocious: {
    1:  [ 0,   0,  0,       0],
    2:  [ 3,   2,  2,      10],
    3:  [ 6,   4,  4,      30],
    4:  [ 9,   6,  6,      60],
    5:  [11,   8,  8,     120],
    6:  [13,  11,  9,     160],
    7:  [15,  14, 10,     300],
    8:  [17,  17, 11,     500],
    9:  [19,  20, 12,     750],
    10: [21,  23, 13,    1000],
    11: [23,  26, 14,    1250],
    12: [25,  29, 15,    1600],
    13: [27,  32, 16,    2000],
    14: [29,  35, 17,    2600],
    15: [30,  37, 18,    3200],
    16: [31,  39, 19,    4000],
    17: [32,  41, 20,    5000],
    18: [33,  43, 21,    6500],
    19: [34,  45, 22,    8000],
    20: [35,  47, 23,    9500],
    21: [36,  49, 24,   11000],
    22: [37,  51, 25,   13000],
    23: [38,  53, 26,   16000],
    24: [39,  55, 27,   19000],
    25: [40,  57, 28,   22000],
    26: [41,  58, 29,   25000],
    27: [42,  59, 30,   28000],
    28: [43,  60, 31,   31000],
    29: [44,  61, 32,   36000],
    30: [47,  62, 33,   42000],
    31: [49,  63, 33,   48000],
    32: [50,  64, 33,   54000],
    33: [51,  65, 33,   60000],
    34: [52,  66, 33,   70000],
    35: [53,  67, 33,   80000],
    36: [54,  68, 33,   90000],
    37: [55,  69, 33,  100000],
    38: [56,  70, 33,  115000],
    39: [57,  71, 33,  130000],
    40: [58,  72, 33,  145000],
    41: [59,  73, 33,  160000],
    42: [60,  74, 33,  175000],
    43: [61,  75, 33,  200000],
    44: [62,  76, 33,  230000],
    45: [63,  77, 33,  260000],
    46: [64,  78, 33,  290000],
    47: [65,  79, 33,  320000],
    48: [66,  80, 33,  350000],
    49: [67,  81, 33,  380000],
    50: [67,  82, 33,  410000],
    51: [67,  83, 33,  440000],
    52: [67,  84, 33,  470000],
    53: [67,  85, 33,  500000],
    54: [67,  86, 33,  530000],
    55: [67,  87, 33,  560000],
    56: [67,  88, 33,  590000],
    57: [67,  89, 33,  620000],
    58: [67,  90, 33,  650000],
    59: [67,  91, 33,  680000],
    60: [67,  92, 33,  710000],
    61: [67,  93, 33,  750000],
    62: [67,  94, 33,  790000],
    63: [67,  95, 33,  830000],
    64: [67,  96, 33,  870000],
    65: [67,  97, 33,  910000],
    66: [67,  98, 33,  950000],
    67: [67,  99, 33,  990000],
    68: [67, 100, 33, 1030000],
    69: [67, 101, 33, 1070000],
    70: [67, 102, 33, 1120000],
    71: [67, 103, 33, 1170000],
    72: [67, 104, 33, 1220000],
    73: [67, 105, 33, 1270000],
    74: [67, 106, 33, 1320000],
    75: [67, 107, 33, 1370000],
    76: [67, 108, 33, 1420000],
    77: [67, 109, 33, 1470000],
    78: [67, 110, 33, 1520000],
    79: [67, 111, 33, 1570000],
    80: [67, 112, 33, 1620000],
    81: [67, 113, 33, 1670000],
    82: [67, 114, 33, 1720000],
    83: [67, 115, 33, 1770000],
    84: [67, 116, 33, 1820000],
    85: [67, 117, 33, 1880000],
    86: [67, 118, 33, 1940000],
    87: [67, 119, 33, 2000000],
    88: [67, 120, 33, 2060000],
    89: [67, 121, 33, 2120000],
    90: [67, 122, 33, 2180000],
    91: [67, 123, 33, 2240000],
    92: [67, 124, 33, 2300000],
    93: [67, 125, 33, 2360000],
    94: [67, 126, 33, 2420000],
    95: [67, 127, 33, 3000000],
    96: [67, 128, 33, 5000000],
    97: [67, 129, 33, 7000000],
    98: [67, 130, 33, 9000000],
    99: [67, 131, 33, 9990000]
  },

// 防御早熟
  defensePrecocious: {
    1:  [ 0,  0,  0,       0],
    2:  [ 4,  5,  2,      35],
    3:  [ 8, 10,  4,     100],
    4:  [11, 14,  6,     300],
    5:  [14, 17,  8,     600],
    6:  [17, 20, 10,    1000],
    7:  [20, 22, 12,    1500],
    8:  [23, 24, 14,    2000],
    9:  [26, 26, 16,    2500],
    10: [29, 28, 18,    3000],
    11: [32, 30, 20,    3500],
    12: [35, 32, 22,    4000],
    13: [38, 34, 24,    4500],
    14: [41, 36, 26,    5000],
    15: [44, 38, 28,    6000],
    16: [45, 39, 30,    7000],
    17: [46, 39, 32,    8000],
    18: [47, 40, 34,    9000],
    19: [48, 40, 36,   10000],
    20: [49, 40, 38,   11000],
    21: [50, 40, 40,   13000],
    22: [51, 40, 42,   15000],
    23: [52, 40, 44,   17000],
    24: [53, 40, 46,   20000],
    25: [54, 40, 48,   23000],
    26: [55, 40, 50,   26000],
    27: [56, 40, 52,   30000],
    28: [57, 40, 54,   35000],
    29: [58, 40, 55,   40000],
    30: [59, 40, 56,   45000],
    31: [60, 40, 57,   50000],
    32: [60, 40, 57,   55000],
    33: [61, 40, 58,   60000],
    34: [61, 40, 58,   70000],
    35: [62, 40, 59,   80000],
    36: [62, 40, 59,   90000],
    37: [63, 40, 60,  100000],
    38: [63, 40, 60,  115000],
    39: [64, 40, 61,  130000],
    40: [64, 40, 61,  145000],
    41: [65, 40, 62,  160000],
    42: [65, 40, 62,  175000],
    43: [66, 40, 63,  200000],
    44: [66, 40, 63,  230000],
    45: [67, 40, 64,  260000],
    46: [67, 40, 64,  290000],
    47: [68, 40, 65,  320000],
    48: [68, 40, 65,  350000],
    49: [69, 40, 66,  380000],
    50: [69, 40, 66,  410000],
    51: [70, 40, 67,  440000],
    52: [70, 40, 67,  470000],
    53: [71, 40, 68,  500000],
    54: [71, 40, 68,  530000],
    55: [72, 40, 69,  560000],
    56: [72, 40, 69,  590000],
    57: [73, 40, 70,  620000],
    58: [73, 40, 70,  650000],
    59: [74, 40, 71,  680000],
    60: [74, 40, 71,  710000],
    61: [75, 40, 72,  750000],
    62: [75, 40, 72,  790000],
    63: [76, 40, 73,  830000],
    64: [76, 40, 73,  870000],
    65: [77, 40, 74,  910000],
    66: [77, 40, 74,  950000],
    67: [78, 40, 75,  990000],
    68: [78, 40, 75, 1030000],
    69: [79, 40, 76, 1070000],
    70: [79, 40, 76, 1120000],
    71: [80, 40, 77, 1170000],
    72: [80, 40, 77, 1220000],
    73: [81, 40, 78, 1270000],
    74: [81, 40, 78, 1320000],
    75: [82, 40, 79, 1370000],
    76: [82, 40, 79, 1420000],
    77: [83, 40, 80, 1470000],
    78: [83, 40, 80, 1520000],
    79: [84, 40, 81, 1570000],
    80: [84, 40, 81, 1620000],
    81: [84, 40, 82, 1670000],
    82: [84, 40, 82, 1720000],
    83: [84, 40, 83, 1770000],
    84: [84, 40, 83, 1820000],
    85: [84, 40, 84, 1880000],
    86: [84, 40, 84, 1940000],
    87: [84, 40, 85, 2000000],
    88: [84, 40, 85, 2060000],
    89: [84, 40, 86, 2120000],
    90: [84, 40, 86, 2180000],
    91: [84, 40, 87, 2240000],
    92: [84, 40, 87, 2300000],
    93: [84, 40, 88, 2360000],
    94: [84, 40, 88, 2420000],
    95: [84, 40, 89, 3000000],
    96: [84, 40, 89, 5000000],
    97: [84, 40, 90, 7000000],
    98: [84, 40, 90, 9000000],
    99: [84, 40, 91, 9990000]
  },

// 攻撃晩成
  attackLateGrowth: {
    1:  [  0,   0,  0,       0],
    2:  [  3,   5,  1,      45],
    3:  [  6,   9,  2,     200],
    4:  [  9,  12,  3,     600],
    5:  [ 12,  14,  4,    1000],
    6:  [ 15,  16,  5,    1600],
    7:  [ 17,  18,  6,    2500],
    8:  [ 19,  20,  9,    3500],
    9:  [ 21,  22, 12,    4500],
    10: [ 23,  23, 15,    5500],
    11: [ 25,  24, 18,    7000],
    12: [ 27,  26, 21,    8500],
    13: [ 29,  28, 24,   10000],
    14: [ 31,  30, 25,   20000],
    15: [ 33,  32, 26,   30000],
    16: [ 35,  34, 27,   50000],
    17: [ 37,  36, 28,   70000],
    18: [ 39,  38, 29,   90000],
    19: [ 41,  40, 30,  110000],
    20: [ 43,  42, 31,  130000],
    21: [ 45,  43, 31,  150000],
    22: [ 47,  43, 31,  170000],
    23: [ 49,  44, 31,  190000],
    24: [ 51,  44, 31,  210000],
    25: [ 53,  45, 31,  230000],
    26: [ 55,  45, 31,  240000],
    27: [ 57,  46, 31,  250000],
    28: [ 59,  46, 31,  260000],
    29: [ 61,  47, 31,  270000],
    30: [ 63,  47, 31,  280000],
    31: [ 64,  48, 31,  290000],
    32: [ 65,  49, 31,  300000],
    33: [ 66,  50, 31,  310000],
    34: [ 67,  51, 31,  320000],
    35: [ 68,  52, 31,  330000],
    36: [ 69,  53, 31,  340000],
    37: [ 70,  54, 31,  350000],
    38: [ 71,  55, 31,  360000],
    39: [ 72,  56, 31,  370000],
    40: [ 73,  58, 31,  380000],
    41: [ 74,  60, 31,  390000],
    42: [ 75,  62, 31,  400000],
    43: [ 76,  64, 31,  410000],
    44: [ 77,  66, 31,  420000],
    45: [ 78,  68, 31,  430000],
    46: [ 79,  70, 31,  440000],
    47: [ 80,  72, 31,  450000],
    48: [ 81,  74, 31,  460000],
    49: [ 82,  76, 31,  470000],
    50: [ 83,  78, 31,  480000],
    51: [ 84,  80, 31,  490000],
    52: [ 85,  82, 31,  500000],
    53: [ 86,  84, 31,  510000],
    54: [ 87,  86, 31,  520000],
    55: [ 88,  88, 31,  530000],
    56: [ 89,  90, 31,  540000],
    57: [ 90,  92, 31,  550000],
    58: [ 91,  94, 31,  560000],
    59: [ 92,  96, 31,  570000],
    60: [ 93,  98, 31,  580000],
    61: [ 94, 100, 31,  630000],
    62: [ 95, 102, 31,  680000],
    63: [ 96, 104, 31,  730000],
    64: [ 97, 106, 31,  780000],
    65: [ 98, 108, 31,  830000],
    66: [ 99, 110, 31,  880000],
    67: [100, 112, 31,  930000],
    68: [101, 114, 31,  980000],
    69: [102, 116, 31, 1030000],
    70: [103, 118, 31, 1090000],
    71: [104, 120, 31, 1150000],
    72: [105, 122, 31, 1210000],
    73: [106, 124, 31, 1270000],
    74: [107, 126, 31, 1330000],
    75: [108, 128, 31, 1390000],
    76: [109, 130, 31, 1450000],
    77: [110, 132, 31, 1510000],
    78: [111, 134, 31, 1570000],
    79: [112, 136, 31, 1630000],
    80: [113, 138, 31, 1690000],
    81: [114, 140, 31, 1750000],
    82: [115, 142, 31, 1810000],
    83: [116, 144, 31, 1870000],
    84: [117, 146, 31, 1930000],
    85: [118, 148, 31, 1990000],
    86: [119, 150, 31, 2050000],
    87: [120, 152, 31, 2110000],
    88: [121, 154, 31, 2170000],
    89: [122, 156, 31, 2230000],
    90: [123, 158, 31, 2310000],
    91: [124, 160, 31, 2390000],
    92: [125, 162, 31, 2470000],
    93: [126, 164, 31, 2550000],
    94: [127, 166, 31, 2630000],
    95: [128, 168, 31, 3000000],
    96: [129, 170, 31, 5000000],
    97: [130, 172, 31, 7000000],
    98: [131, 174, 31, 9000000],
    99: [132, 176, 31, 9990000]
  },

// 防御晩成
  defenseLateGrowth: {
    1:  [ 0,  0,   0,       0],
    2:  [ 8,  2,   6,      55],
    3:  [15,  4,  11,     300],
    4:  [21,  6,  15,     900],
    5:  [26,  8,  18,    1300],
    6:  [30, 10,  21,    2000],
    7:  [33, 12,  23,    3500],
    8:  [35, 14,  25,    5000],
    9:  [36, 15,  27,    7500],
    10: [37, 16,  29,   10000],
    11: [38, 16,  31,   12500],
    12: [39, 17,  33,   15500],
    13: [40, 17,  35,   20000],
    14: [41, 18,  37,   30000],
    15: [42, 18,  39,   40000],
    16: [43, 19,  41,   50000],
    17: [44, 19,  43,   70000],
    18: [45, 20,  45,   90000],
    19: [46, 20,  47,  110000],
    20: [47, 21,  48,  130000],
    21: [48, 21,  49,  150000],
    22: [49, 22,  50,  170000],
    23: [50, 22,  51,  190000],
    24: [51, 23,  52,  210000],
    25: [52, 23,  53,  230000],
    26: [53, 24,  54,  240000],
    27: [54, 24,  55,  250000],
    28: [55, 25,  56,  260000],
    29: [56, 25,  57,  270000],
    30: [57, 26,  58,  280000],
    31: [58, 26,  59,  290000],
    32: [59, 27,  60,  300000],
    33: [60, 27,  61,  310000],
    34: [61, 28,  62,  320000],
    35: [62, 28,  63,  330000],
    36: [63, 29,  64,  340000],
    37: [64, 29,  65,  350000],
    38: [65, 30,  66,  360000],
    39: [66, 30,  67,  370000],
    40: [67, 31,  68,  380000],
    41: [68, 31,  69,  390000],
    42: [69, 32,  70,  400000],
    43: [70, 32,  71,  410000],
    44: [71, 33,  72,  420000],
    45: [72, 33,  73,  430000],
    46: [73, 34,  74,  440000],
    47: [74, 34,  75,  450000],
    48: [75, 35,  76,  460000],
    49: [76, 35,  77,  470000],
    50: [77, 35,  78,  480000],
    51: [78, 35,  79,  490000],
    52: [79, 35,  80,  500000],
    53: [80, 35,  81,  510000],
    54: [81, 35,  82,  520000],
    55: [82, 35,  83,  530000],
    56: [83, 35,  84,  540000],
    57: [84, 35,  85,  550000],
    58: [85, 35,  86,  560000],
    59: [86, 35,  87,  570000],
    60: [86, 35,  88,  580000],
    61: [86, 35,  90,  630000],
    62: [86, 35,  92,  680000],
    63: [86, 35,  94,  730000],
    64: [86, 35,  96,  780000],
    65: [86, 35,  98,  830000],
    66: [86, 35, 100,  880000],
    67: [86, 35, 102,  930000],
    68: [86, 35, 104,  980000],
    69: [86, 35, 106, 1030000],
    70: [86, 35, 108, 1090000],
    71: [86, 35, 110, 1150000],
    72: [86, 35, 112, 1210000],
    73: [86, 35, 114, 1270000],
    74: [86, 35, 116, 1330000],
    75: [86, 35, 118, 1390000],
    76: [86, 35, 120, 1450000],
    77: [86, 35, 122, 1510000],
    78: [86, 35, 124, 1570000],
    79: [86, 35, 126, 1630000],
    80: [86, 35, 127, 1690000],
    81: [86, 35, 129, 1750000],
    82: [86, 35, 130, 1810000],
    83: [86, 35, 132, 1870000],
    84: [86, 35, 133, 1930000],
    85: [86, 35, 135, 1990000],
    86: [86, 35, 136, 2050000],
    87: [86, 35, 138, 2110000],
    88: [86, 35, 139, 2170000],
    89: [86, 35, 141, 2230000],
    90: [86, 35, 142, 2310000],
    91: [86, 35, 144, 2390000],
    92: [86, 35, 145, 2470000],
    93: [86, 35, 147, 2550000],
    94: [86, 35, 148, 2630000],
    95: [86, 35, 150, 3000000],
    96: [86, 35, 151, 5000000],
    97: [86, 35, 153, 7000000],
    98: [86, 35, 154, 9000000],
    99: [86, 35, 158, 9990000]
  },

// 万能晩成
  versatileLateGrowth: {
    1:  [  0,   0,   0,       0],
    2:  [  5,  10,   2,     150],
    3:  [ 10,  16,   4,     500],
    4:  [ 15,  21,   6,    1300],
    5:  [ 20,  26,   8,    2500],
    6:  [ 25,  31,  10,    4000],
    7:  [ 30,  36,  12,    8000],
    8:  [ 35,  39,  14,   16000],
    9:  [ 40,  42,  16,   20000],
    10: [ 45,  45,  18,   30000],
    11: [ 50,  48,  19,   40000],
    12: [ 55,  51,  20,   60000],
    13: [ 60,  54,  21,   80000],
    14: [ 65,  57,  22,  100000],
    15: [ 70,  60,  23,  130000],
    16: [ 75,  63,  24,  160000],
    17: [ 80,  66,  25,  190000],
    18: [ 85,  69,  26,  220000],
    19: [ 90,  72,  27,  250000],
    20: [ 93,  74,  28,  280000],
    21: [ 96,  76,  29,  310000],
    22: [ 99,  78,  30,  340000],
    23: [102,  80,  31,  370000],
    24: [105,  82,  32,  400000],
    25: [108,  84,  33,  440000],
    26: [111,  86,  34,  480000],
    27: [114,  88,  35,  520000],
    28: [117,  90,  36,  560000],
    29: [120,  92,  37,  600000],
    30: [122,  94,  38,  640000],
    31: [124,  96,  39,  680000],
    32: [126,  98,  40,  720000],
    33: [128,  99,  41,  760000],
    34: [130, 100,  42,  800000],
    35: [132, 101,  43,  840000],
    36: [134, 102,  44,  880000],
    37: [136, 103,  45,  920000],
    38: [138, 104,  46,  960000],
    39: [140, 105,  47, 1000000],
    40: [142, 106,  48, 1040000],
    41: [144, 107,  49, 1090000],
    42: [146, 107,  50, 1140000],
    43: [148, 108,  51, 1190000],
    44: [150, 108,  52, 1240000],
    45: [152, 109,  53, 1290000],
    46: [154, 109,  54, 1340000],
    47: [156, 110,  55, 1390000],
    48: [158, 110,  56, 1440000],
    49: [160, 111,  57, 1490000],
    50: [161, 111,  58, 1540000],
    51: [162, 112,  59, 1590000],
    52: [163, 112,  60, 1640000],
    53: [164, 113,  61, 1690000],
    54: [165, 113,  62, 1740000],
    55: [166, 114,  63, 1790000],
    56: [167, 114,  64, 1840000],
    57: [168, 115,  65, 1890000],
    58: [169, 115,  66, 1940000],
    59: [170, 116,  67, 1990000],
    60: [171, 116,  68, 2040000],
    61: [172, 117,  69, 2090000],
    62: [173, 117,  70, 2140000],
    63: [174, 118,  71, 2190000],
    64: [175, 118,  72, 2240000],
    65: [176, 119,  73, 2290000],
    66: [177, 119,  74, 2340000],
    67: [178, 120,  75, 2390000],
    68: [179, 120,  76, 2440000],
    69: [180, 121,  77, 2490000],
    70: [181, 121,  78, 2540000],
    71: [182, 122,  79, 2590000],
    72: [183, 122,  80, 2640000],
    73: [184, 123,  81, 2690000],
    74: [185, 123,  82, 2740000],
    75: [186, 124,  83, 2790000],
    76: [187, 124,  84, 2840000],
    77: [188, 125,  85, 2890000],
    78: [189, 125,  86, 2940000],
    79: [190, 126,  87, 2990000],
    80: [191, 126,  88, 3040000],
    81: [192, 127,  89, 3100000],
    82: [193, 127,  90, 3160000],
    83: [194, 128,  91, 3220000],
    84: [195, 128,  92, 3400000],
    85: [196, 129,  93, 3600000],
    86: [197, 129,  94, 3800000],
    87: [198, 130,  95, 4000000],
    88: [199, 130,  96, 4200000],
    89: [200, 131,  97, 4400000],
    90: [201, 131,  98, 4600000],
    91: [202, 132,  99, 4800000],
    92: [203, 132, 100, 5000000],
    93: [204, 133, 101, 5500000],
    94: [205, 133, 102, 6000000],
    95: [206, 134, 103, 6500000],
    96: [207, 134, 104, 7000000],
    97: [208, 135, 105, 8000000],
    98: [209, 135, 106, 9000000],
    99: [210, 136, 107, 9990000]
  },

// 守備特殊
  defenseSpecial: {
    1:  [0, 0,   0,       0],
    2:  [0, 0,   3,     100],
    3:  [0, 0,   6,     350],
    4:  [0, 0,   9,     900],
    5:  [0, 0,  12,    1300],
    6:  [0, 0,  15,    2000],
    7:  [0, 0,  18,    3500],
    8:  [0, 0,  21,    5000],
    9:  [0, 0,  24,    7500],
    10: [0, 0,  26,   10000],
    11: [0, 0,  28,   12500],
    12: [0, 0,  30,   15500],
    13: [0, 0,  32,   20000],
    14: [0, 0,  34,   30000],
    15: [0, 0,  36,   40000],
    16: [0, 0,  38,   50000],
    17: [0, 0,  40,   70000],
    18: [0, 0,  42,   90000],
    19: [0, 0,  44,  110000],
    20: [0, 0,  46,  130000],
    21: [0, 0,  48,  150000],
    22: [0, 0,  50,  170000],
    23: [0, 0,  52,  190000],
    24: [0, 0,  54,  210000],
    25: [0, 0,  56,  230000],
    26: [0, 0,  58,  270000],
    27: [0, 0,  60,  300000],
    28: [0, 0,  62,  330000],
    29: [0, 0,  64,  360000],
    30: [0, 0,  66,  380000],
    31: [0, 0,  68,  390000],
    32: [0, 0,  70,  420000],
    33: [0, 0,  72,  470000],
    34: [0, 0,  74,  520000],
    35: [0, 0,  76,  570000],
    36: [0, 0,  78,  620000],
    37: [0, 0,  80,  670000],
    38: [0, 0,  82,  720000],
    39: [0, 0,  84,  770000],
    40: [0, 0,  86,  820000],
    41: [0, 0,  88,  870000],
    42: [0, 0,  90,  920000],
    43: [0, 0,  92,  970000],
    44: [0, 0,  94, 1020000],
    45: [0, 0,  96, 1070000],
    46: [0, 0,  98, 1120000],
    47: [0, 0, 100, 1170000],
    48: [0, 0, 102, 1220000],
    49: [0, 0, 104, 1270000],
    50: [0, 0, 106, 1320000],
    51: [0, 0, 108, 1380000],
    52: [0, 0, 110, 1440000],
    53: [0, 0, 112, 1500000],
    54: [0, 0, 114, 1560000],
    55: [0, 0, 116, 1620000],
    56: [0, 0, 118, 1680000],
    57: [0, 0, 120, 1740000],
    58: [0, 0, 122, 1800000],
    59: [0, 0, 124, 1860000],
    60: [0, 0, 126, 1920000],
    61: [0, 0, 128, 1980000],
    62: [0, 0, 130, 2040000],
    63: [0, 0, 132, 2100000],
    64: [0, 0, 134, 2160000],
    65: [0, 0, 136, 2220000],
    66: [0, 0, 138, 2280000],
    67: [0, 0, 140, 2340000],
    68: [0, 0, 142, 2400000],
    69: [0, 0, 144, 2460000],
    70: [0, 0, 146, 2520000],
    71: [0, 0, 148, 2580000],
    72: [0, 0, 150, 2640000],
    73: [0, 0, 152, 2700000],
    74: [0, 0, 154, 2760000],
    75: [0, 0, 156, 2820000],
    76: [0, 0, 158, 2880000],
    77: [0, 0, 160, 2940000],
    78: [0, 0, 162, 3000000],
    79: [0, 0, 164, 3060000],
    80: [0, 0, 166, 3120000],
    81: [0, 0, 168, 3180000],
    82: [0, 0, 170, 3250000],
    83: [0, 0, 172, 3320000],
    84: [0, 0, 174, 3390000],
    85: [0, 0, 176, 3460000],
    86: [0, 0, 178, 3530000],
    87: [0, 0, 180, 3600000],
    88: [0, 0, 182, 3670000],
    89: [0, 0, 184, 3740000],
    90: [0, 0, 186, 3810000],
    91: [0, 0, 188, 3880000],
    92: [0, 0, 190, 3950000],
    93: [0, 0, 192, 4020000],
    94: [0, 0, 194, 4090000],
    95: [0, 0, 196, 4160000],
    96: [0, 0, 198, 5000000],
    97: [0, 0, 200, 7000000],
    98: [0, 0, 202, 9000000],
    99: [0, 0, 204, 9990000]
  },

  // 攻撃特殊
  attackSpecial: {
    1:  [0,    0,   0,       0],
    2:  [10,  70,  30,  100000],
    3:  [15, 140,  35,  200000],
    4:  [20, 200,  40,  300000],
    5:  [25, 260,  45,  400000],
    6:  [30, 310,  50,  500000],
    7:  [35, 360,  55,  600000],
    8:  [40, 410,  60,  700000],
    9:  [45, 460,  65,  800000],
    10: [55, 510,  70,  900000],
    11: [55, 515,  74, 1000000],
    12: [55, 519,  77, 1100000],
    13: [55, 522,  79, 1200000],
    14: [55, 524,  80, 1300000],
    15: [55, 526,  81, 1400000],
    16: [55, 528,  82, 1500000],
    17: [55, 530,  83, 1600000],
    18: [55, 532,  84, 1700000],
    19: [55, 534,  85, 1800000],
    20: [55, 536,  86, 1900000],
    21: [55, 538,  87, 2000000],
    22: [55, 540,  88, 2100000],
    23: [55, 542,  89, 2200000],
    24: [55, 544,  90, 2300000],
    25: [55, 546,  91, 2400000],
    26: [55, 548,  92, 2500000],
    27: [55, 550,  93, 2600000],
    28: [55, 552,  94, 2700000],
    29: [55, 554,  95, 2800000],
    30: [55, 556,  96, 2900000],
    31: [55, 558,  97, 3000000],
    32: [55, 560,  98, 3100000],
    33: [55, 562,  99, 3200000],
    34: [55, 564, 100, 3300000],
    35: [55, 566, 101, 3400000],
    36: [55, 568, 102, 3500000],
    37: [55, 570, 103, 3600000],
    38: [55, 572, 104, 3700000],
    39: [55, 574, 105, 3800000],
    40: [55, 576, 106, 3900000],
    41: [55, 578, 107, 4000000],
    42: [55, 580, 108, 4100000],
    43: [55, 582, 109, 4200000],
    44: [55, 584, 110, 4300000],
    45: [55, 586, 111, 4400000],
    46: [55, 588, 112, 4500000],
    47: [55, 590, 113, 4600000],
    48: [55, 592, 114, 4700000],
    49: [55, 594, 115, 4800000],
    50: [55, 595, 116, 4900000],
    51: [55, 596, 117, 5000000],
    52: [55, 597, 118, 5100000],
    53: [55, 598, 119, 5200000],
    54: [55, 599, 120, 5300000],
    55: [55, 600, 121, 5400000],
    56: [55, 601, 122, 5500000],
    57: [55, 602, 123, 5600000],
    58: [55, 603, 124, 5700000],
    59: [55, 604, 125, 5800000],
    60: [55, 605, 126, 5900000],
    61: [55, 606, 127, 6000000],
    62: [55, 607, 128, 6100000],
    63: [55, 608, 129, 6200000],
    64: [55, 609, 130, 6300000],
    65: [55, 610, 131, 6400000],
    66: [55, 611, 132, 6500000],
    67: [55, 612, 133, 6600000],
    68: [55, 613, 134, 6700000],
    69: [55, 614, 135, 6800000],
    70: [55, 615, 136, 6900000],
    71: [55, 616, 137, 7000000],
    72: [55, 617, 138, 7100000],
    73: [55, 618, 139, 7200000],
    74: [55, 619, 140, 7300000],
    75: [55, 620, 141, 7400000],
    76: [55, 621, 142, 7500000],
    77: [55, 622, 143, 7600000],
    78: [55, 623, 144, 7700000],
    79: [55, 624, 145, 7800000],
    80: [55, 625, 146, 7900000],
    81: [55, 626, 147, 8000000],
    82: [55, 627, 148, 8100000],
    83: [55, 628, 149, 8200000],
    84: [55, 629, 150, 8300000],
    85: [55, 630, 151, 8400000],
    86: [55, 631, 152, 8500000],
    87: [55, 632, 153, 8600000],
    88: [55, 633, 154, 8700000],
    89: [55, 634, 155, 8800000],
    90: [55, 635, 156, 8900000],
    91: [55, 636, 157, 9000000],
    92: [55, 637, 158, 9100000],
    93: [55, 638, 159, 9200000],
    94: [55, 639, 160, 9300000],
    95: [55, 640, 161, 9400000],
    96: [55, 641, 162, 9500000],
    97: [55, 642, 163, 9600000],
    98: [55, 643, 164, 9700000],
    99: [55, 644, 165, 9990000]
  }

}