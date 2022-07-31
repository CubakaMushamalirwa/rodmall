'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4f74399f5e401e2869ee65d0cd496b58",
".git/config": "5443411bc1676fb060b328e1e0b44778",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "13180f51b9c90f19cbc3b78adae51587",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "554f6d79f552557fdba6863b774ca9bc",
".git/logs/refs/heads/main": "8e81742539b177839d17c488af516fca",
".git/logs/refs/remotes/origin/main": "761e9a3ae1cebe6ded9f35a9f762fed5",
".git/objects/01/313e9053252de343d334dfa3a0848e2a005751": "7ff063a83c9160ef16111dc5a6ad8ea3",
".git/objects/07/e5c5d519fd82b6c1cf363c9d4fc3af0089c44e": "c0561e043cf16007ba25d12b17e64b48",
".git/objects/0a/d08bbb37da3049c64beb06ae04042e1f5b3355": "93313c96ef4743697cd56c20aca41382",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/e5b529d85ae2db206810a215e482383fa80c22": "2b6f77f7338ef2218ad8c62220ef7723",
".git/objects/0f/fcfba2e8bfeea6944bfbba39447991daeffc97": "be86291736b4013233e97f6fdfd08fb3",
".git/objects/16/e3133f6c0f6d1b0975c71f270f2e0ec7787348": "2300f5cfb64d1ff8ccd0db0b5d9c5763",
".git/objects/17/316e78ee757bce9bd5a3ba4e56988febb1538c": "a8e9a3874bc39c79f1ae0ec20fd6b730",
".git/objects/18/0f8616be2a36cdc8425e8dd0597838bc53926c": "32c48987955739a9e22e5831618fd98b",
".git/objects/1c/e1b50a9e6d43407337f3799b232feb59867dd6": "8eebf0e2721aa59a8b65c8af1d210c86",
".git/objects/1e/3dd295bf4b83d4aed3e3393a1e7c9f5499c38d": "60058649afb3ea2d2830a7bda550eaab",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/f90e7abc23af8058a2025952b3a55a64a6b297": "ae614390a34c038351bcfb4646fbfb5b",
".git/objects/25/4c34088fe9ce471eee5765e8a173a1fecff9ba": "bd871d27284799fdbe0f18825c465dba",
".git/objects/26/cb8c6c67a8f6815d27e63c0e606077c26cb606": "2a322058760a759bd2ffa4de0a93e58e",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/33/2bf7363e198e81790ce5b87195e5ecb033afd5": "803af63c03d73e8bf2941e11204bbc25",
".git/objects/35/267989deca17116c70c987e90035303e2e3404": "50c87c2481cc197e8d549e03b7ac507c",
".git/objects/3c/fc2f3273121b6920275ad25052be2b8b562269": "bab22b5f62a8dd0b289f4486f47980ce",
".git/objects/3e/ef9e62502e5caf6613ed8dc5de54981c523b52": "92bc876fcc3e6239d908387a5a98d2b9",
".git/objects/49/0939f9513f5224155c082929fe3fb2f7d35c45": "408e432647bf58d721171b82d019bb49",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/88a8eafbdd1faaef59474029ddef305c30e92c": "a2fe7051ffdcb783754ff6563fa9a772",
".git/objects/51/f6d587b5f2450ac16871c9273c30f72d5c7ee2": "37f4b30d0c3f0e7a983e9ec3163d42b7",
".git/objects/52/ed7cff3c558c63be7f1e51040c7826187bdfcb": "142b8c1b85fd3875396d136a8890a10b",
".git/objects/53/9f78aa4efc19651dd8fa4f5a3e1769d87d603d": "0ee30d7e137754cb44da075d28dda9f5",
".git/objects/54/73d5e4d652158e8aec4d8ab8ebc6f84f95c66d": "b2e2559e419532f6e4af6df434940cc8",
".git/objects/58/4d8b1d1b1e71286425ef97c795fe263c22c648": "16ecd292973a210c7fc71677e3c2349d",
".git/objects/5a/b6d576dfb655beecca12c84cef8c614d1f2d0e": "6cd63d80b808e8b3ade9366183ace017",
".git/objects/5c/141711822b4206d4251ef2c64a64da22518b1b": "2d068379ab2c4983dc46ce94be33b17d",
".git/objects/62/a1397b2183a9246fa72e127a92103e9af188c1": "a65afbcf8e26b19995e3c3ace7b44091",
".git/objects/65/242a7c93dd18bb599a9694a8d39ec416162560": "feef8d85ee903f5b751da49c873edb54",
".git/objects/6b/33697dc38686654521d6e28d2a6ef810b2d2ce": "de7cf145bda01ed7cf0aabc7844741df",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6c/fa9d09b8a0f64981607bd444a500c4deca9e6a": "e42bf78de86a96ddbef153967c7dcdc1",
".git/objects/74/b2726be4daf1fdc63bd917df4a8cb0c7a3901c": "2704dabce97a34cc6d03ee3d0d231ecc",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/97392e29cb47a2ac5979228ad621317a690ab8": "987f387590983031f8718aedaa08f503",
".git/objects/78/abd5560ae03acfbb128cf1b0bd22ad3ed5a7ab": "7fae6326c0059bb7d157ba7be9475f6e",
".git/objects/79/6a150e0b9d01371a976b7702936bf96f84b755": "4baf756156e3be156bb8d7109e24448a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/06ec2f7f7de6aae443ce64d8a39316bfa18742": "5d2b79b8f3cd9cc38c1d919e5a5f12d4",
".git/objects/7c/a7ed593b9d7fa40c84ec06bcbea8eb3d986691": "18e678c19758ca4ebae6aa1d28448fcf",
".git/objects/81/0fea6bf2f9d2d2eb8a5d171af6e0a49668c727": "74d1658a7bfc086c3e0e458127b673f2",
".git/objects/81/af2993f85e3c815439de7948c7e8003f68f2cb": "fe26c09dd99000704e3bb0bf33377745",
".git/objects/84/f1dd641709456159d07acc2bc1f61e5bdc4c42": "c009a9cc42de4bae426c767f6e8b78b4",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/87/2751fb2283402b51a09b722709f720ccf4e09b": "84a34eb988a0808a3ab4b4c77102e48a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/92/e98203da087ba645e8418c10695d5eac073e1a": "eee89e0932c58d35fb3654a029f2eb1b",
".git/objects/95/5f072ec900eabbc1bbca6c67850f7cba7d6eeb": "a2a8f692840cf6259aa884e619fff569",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/99/b90910f2d8fa1ddea5143c0faa64632ccd8c30": "932d24cf50d8debb06b01adb3dca2fe6",
".git/objects/9a/660922fb27a27d0c3d82c7dea3c3f1c01fc652": "f6f307c69cde605592b84bb886138d78",
".git/objects/9c/8d6094beb3a747f71ae7e8e2eca443226b819d": "ace4d5cc507bbc2aa6df2110dad9e3ad",
".git/objects/9c/9b62d9393201aea802c57e56caa0e53b186ed0": "c78db27920e4c9f21f5d405ce7808d62",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/72102eeff24eb06110900b04ee2556d32c4c67": "d87ffeb077fde64b36549aba41ac0994",
".git/objects/a1/d70c4e962434c06b7505bd367ce0cdb722840c": "29ba61e75a056e5798b9814c25f4a9ba",
".git/objects/a5/57837339cbe003eb8b598957b020054f79d095": "0d98b30bb1b6735d3bc81cea6783ac5b",
".git/objects/a8/67118deeb38ad6cc51ec412644a5eb828d62ed": "c1c42bb1814fc433b24e688f732d6488",
".git/objects/ac/9b60696f280f7921280a7012dd2d3d13deb86a": "4624ed0205a31a3582a037f7c923877f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/55b52d7801667f53bd276b08f505da6c76341a": "4dabc14733d4c7a99f25f7642a67c60a",
".git/objects/be/1bb2f3ee8a7d9f0fe7c773ed830161cb1b9ac0": "95472fb92a7e7eea83849005c78081b0",
".git/objects/be/7b4f32015c0cb6a4ff2a95aeb5f159faee894c": "c2afa942990caceb7c9ffd5e15a32f0f",
".git/objects/be/a88e1bb6680acedde5301d5f2d414f030a2bcc": "c63f99a3d1982c73c6995bc2dc1491d2",
".git/objects/c0/3439d962434e8223a005dc0c14de7ba1384468": "8594e877bcef0529b3d0b785e2c48ffd",
".git/objects/c2/c896c07b55313b84d7c7fd44ae21b0f69288a9": "6849a941a374d00d72b257091c8012fb",
".git/objects/c4/be64c60f70d0a68de1982afc8900152775cfac": "dffaec393af02b6d367bf12d874c6d19",
".git/objects/c6/fd5c3c6a6e32d04f79e3b6ba4ca2f110636f67": "351b5cf4b73868e2b3c5b02c6b2c4846",
".git/objects/c7/0cca75c9344c1652b59f184fe8d14286603b04": "3ce0412191be89cb707e329c41a15099",
".git/objects/c7/ef3d190606b5678e075c97d9ad71c4c815cca0": "97c4dac24c3eb01e038964712b6b98d6",
".git/objects/c8/8f2be2d763c17bbcf00749f1cb4404d1eb391b": "8b44cd5a08a2db0bcf708a6fa95e9b30",
".git/objects/c8/a54b8d9dfe0d5b33d294110c7b6e43acc1b8cf": "187cb0b602b009013a2a0a5fcd58fbca",
".git/objects/ca/aa3e89de1ff6b2f4508601d12dd5b4a2d12fa7": "f26cc952122d0536f9c2cc086e7ffa39",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d3/358bc4ce4b8044bdc05c8a29a786e8bc46fdac": "92fc068b8a839ec065f52cc9cab20420",
".git/objects/d5/3db3d5ea5b375fb1a9ee6fc406d0af34c00131": "f8499e0d799eabd28322a67bc46629c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/4d55ec733a7ee232988a931dbcebd5e5f02fdc": "5e7b4d8646dbbabd69169ccea3684b7f",
".git/objects/d9/98cf5b468413ca1c950096dc9d0f5dfdb1359f": "872d06090d2311cd71232a001d72623a",
".git/objects/da/f9d6ed010d5cdce302b4c4030c29faf6afb78c": "749505431190cff2c1d9d681a7a152bc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/ed7c256dff3a12fd48851fdd3c9856799afd76": "4ed084f8436143ab6774cd64f4352435",
".git/objects/df/dc5578b209ed29b30d7e21a181c22d5a45b7ed": "72e57f905c6bb529e2656e310b81340e",
".git/objects/e0/394c37b9ac5cd338f1a4ebb7fa6b390ae2a8ad": "1a3350be2225ca5326236dc4d13e1ae5",
".git/objects/e0/7548ca4e0a5f3f1b060faaf8e4c144010ca889": "1a7db3dcdaf6322c2c304b2f7212fabf",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/5ff71ec37b2f78203159b16c6ad7dcc4f8d25c": "53877e30cdeca375db43c93b207d5ead",
".git/objects/e8/a3419cad9003d1bcc92aaf005563ae37b26e33": "f94ce9504d656fa59c2e5c4b6701a8d4",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/0192fe1deb13d4d6ceee021d2f098fdf1a68be": "f9a3b4031ba7d50fa20f0d476c1306bd",
".git/objects/f0/93a22f184711b91e6e84ff40cb8b3964b90f50": "9ac82d2867656287db55ad8c65f65d12",
".git/objects/f3/612277ac2ce3436f3eec0b2ee357575a3efbd9": "aa3d50c22bf6c789e7ec423115fc670d",
".git/objects/f4/7514337a529e704bcad38763a549cd96817939": "5d1774ad10b1413db4d4a2c77c187b13",
".git/objects/f5/6327ad570200044483d9f8f4ce5a3d6f5288d4": "a5092124a6680e177ab6f4d11dc5a71d",
".git/objects/f5/8875a55e4cf764d1f04c4d188147937a794eb6": "bfd62d77a59607c24adcc366daf5562f",
".git/objects/ff/8a3b28cb4d691560c01790643ca1029a7b483d": "06fa00bfb08054e9f3a8b28c68f4558a",
".git/refs/heads/main": "5beb20d3f2dc11c6727c9ffdc7730925",
".git/refs/remotes/origin/main": "5beb20d3f2dc11c6727c9ffdc7730925",
"assets/AssetManifest.json": "22df9bd3b245b8315a773a76af7f8ed5",
"assets/assets/CustomIcons.ttf": "64caf37b7f49a015d499d4b2832df9d8",
"assets/assets/fonts/muli/Muli-Bold.ttf": "1e36ee6d50c037b1bb4bdd3effa7a28e",
"assets/assets/fonts/muli/Muli-Light.ttf": "6b667c3dbc3d4df6dd096ad18296704d",
"assets/assets/fonts/muli/Muli.ttf": "df7330254513d2fa2f4c1e9ee98cc6c6",
"assets/assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/icons/arrow_right.svg": "9c492cd795858f3522b4debfb737cbad",
"assets/assets/icons/Back%2520ICon.svg": "48c3c4eb319f67f90296649fa8271cce",
"assets/assets/icons/Bell.svg": "536eb6601a35ddab0f7b6bdd6c3ff145",
"assets/assets/icons/Bill%2520Icon.svg": "100acc86a48a094da8902a47f3bab1b6",
"assets/assets/icons/Call.svg": "3745eeef13c1facd87afe4cbe208e300",
"assets/assets/icons/Camera%2520Icon.svg": "6c417b2027ec9b901f856099422fc258",
"assets/assets/icons/Cart%2520Icon.svg": "b58f308b0312e4358a04eeadc02575d5",
"assets/assets/icons/Cash.svg": "a24a70772c290370387c0bb33730ce01",
"assets/assets/icons/Chat%2520bubble%2520Icon.svg": "997d4f0aa07c6094a4339040741b4bab",
"assets/assets/icons/Check%2520mark%2520rounde.svg": "e3ad560a09a1bf785b5505c21777ecee",
"assets/assets/icons/Close.svg": "6b3561c87a732bcdf1cfc4cefd9cd9f6",
"assets/assets/icons/Conversation.svg": "c23404da9004575ccff6f78b09be3b13",
"assets/assets/icons/Discover.svg": "b5e8150c8f0c20351b84b2241405c8b4",
"assets/assets/icons/Error.svg": "b69030d759140aaada89f2cc044a3c72",
"assets/assets/icons/facebook-2.svg": "b16d4798a9c0f65ff3a7b12270cd7f7d",
"assets/assets/icons/Flash%2520Icon.svg": "fcde0c03f2836567e42a45ac08616a42",
"assets/assets/icons/Game%2520Icon.svg": "116bd2707a410cf3a2e8559962e1c2a3",
"assets/assets/icons/Gift%2520Icon.svg": "d109169b3e2ab8256445f626ae4c888c",
"assets/assets/icons/google-icon.svg": "af89e162738e95f20e41f175cf1e930e",
"assets/assets/icons/Heart%2520Icon.svg": "0dcf36056268963f7b582eb3bd80ec72",
"assets/assets/icons/Heart%2520Icon_2.svg": "fd7dce0eb7741375843bcda4c7f4e52d",
"assets/assets/icons/Location%2520point.svg": "5b1539e1fe1898b2155b6cc14b9f3c75",
"assets/assets/icons/Lock.svg": "ea577ace50978a6344c26a10c6f27b49",
"assets/assets/icons/Log%2520out.svg": "d762ccf53dc6843df2e7fa55ca08dba0",
"assets/assets/icons/Mail.svg": "deba8f9b4446c04abcf1cdca0590833a",
"assets/assets/icons/Parcel.svg": "17e6ca2305b1da7527281d69259c855a",
"assets/assets/icons/Phone.svg": "5fc702cf20c5fc37bd28a3bd5c8d8810",
"assets/assets/icons/Plus%2520Icon.svg": "8980578e97cd2cbad00b71be8183f91d",
"assets/assets/icons/Question%2520mark.svg": "b20151b891eb8e9c927f259dabd6e553",
"assets/assets/icons/receipt.svg": "6dd6b67fb2796be43a9b9d2b1ee803de",
"assets/assets/icons/remove.svg": "a3a85cd7bc1699150a2c86e850a90e60",
"assets/assets/icons/Search%2520Icon.svg": "e86ce3fdf2c8be303b1338a287062d69",
"assets/assets/icons/Settings.svg": "d8e321d2db0af3ee55c643d20312ba8a",
"assets/assets/icons/Shop%2520Icon.svg": "71cf1a5022470cbbd1e76a923d1d968f",
"assets/assets/icons/Star%2520Icon.svg": "a4c930c4bf5854048edb32d7d370aada",
"assets/assets/icons/Trash.svg": "fe2725bc4781bace6708d522889456e7",
"assets/assets/icons/twitter.svg": "58e83cac5d93b6be707d27a9ffb5aa96",
"assets/assets/icons/User%2520Icon.svg": "3944ad12a2e9014c192fc5795e69a589",
"assets/assets/icons/User.svg": "da6c4fccfbbf6a07d6478cb5ac7e9f9f",
"assets/assets/images/empty_shopping_cart.png": "8700ed0beef824a140c0d18eb81f46e6",
"assets/assets/images/empty_shopping_cart_image.png": "0e4bc96acefe46321efd080c1f532290",
"assets/assets/images/empty_wish_list.png": "7967377689be079436f107ca377d7abe",
"assets/assets/images/mastercard-2.png": "03c20b63d4ffa13484f48fac9d2e32b2",
"assets/assets/images/Pattern%2520Success.png": "c46441a1f4f1d8913d779178aebc9bfd",
"assets/assets/images/paypal.png": "fdd28064849926e343b82d25e9df0a03",
"assets/assets/images/Profile%2520Image.png": "07a16c1fa377ead829efef7e95ffa5c4",
"assets/assets/images/promotion_one.png": "9bbf60ee8a7b28e78a3a9c1197f6617c",
"assets/assets/images/ps4_console_blue_1.png": "0085bd0d4680ea7e99d92fbd1a2d67df",
"assets/assets/images/splash_1.png": "51c064d3f19cf39aee627a3aed744193",
"assets/assets/images/splash_2.png": "3580b1c0bb9f244b51d8042b8e762bf5",
"assets/assets/images/splash_3.png": "54b2889511d311463cf331284d9197bb",
"assets/assets/images/success.png": "f80df756b315fbb72670a78e82095c3c",
"assets/assets/Poppins-Bold.ttf": "2f55e0d4b3f9eb3ffaefdac379fa3f8b",
"assets/assets/Poppins-Medium.ttf": "5bfdccef795165b1f9ab9a3193b2aca1",
"assets/FontManifest.json": "be5e086f4420ebc0e4be5abc8ba12f76",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7264cb12b530d268b1604ba5cefce4ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "9bbf60ee8a7b28e78a3a9c1197f6617c",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/favicon.png": "9bbf60ee8a7b28e78a3a9c1197f6617c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "723ecd8c03d2550e9ca0f0e10a726e2a",
"/": "723ecd8c03d2550e9ca0f0e10a726e2a",
"main.dart.js": "9924b3916e8136d20f3c24988f99854b",
"manifest.json": "e8d54b7eddac5d5390faed5eeaa386a2",
"version.json": "882561a23e46efb349f16f4735e1e14a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
