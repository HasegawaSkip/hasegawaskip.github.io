'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "0f5e2506513638bcda10f513aa15afdd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "9bd401a7af12e487a480eb0062463713",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a2ec8fc01d97a8cc7e0448a0ae2eb88a",
".git/logs/refs/heads/main": "4435e9916d7e0b1843dc38a05632b933",
".git/logs/refs/remotes/origin/main": "cc521097336afb7a514b6adcab50958f",
".git/objects/09/313a4afafdef63c6574bb3bba5e6358dcfc41f": "15f8a8b8bc28e16397ab65c692205d22",
".git/objects/0a/a9f32173073e3579cfb04244d2dc055ed7dc23": "b7fd587eaf042976ad1c93df65ef6406",
".git/objects/0a/db59527a5aecac3e00d5ad2e2ef8a7b4914669": "8391bd95f0c02e24376b212e6a1e9e26",
".git/objects/0b/b6dd000ed750375864a97bf6d3f0a73343423b": "7c81c2d2da0a76f86e5f841feeb864fe",
".git/objects/0d/68aa33e59228673d267543c981aad8524705f2": "4a16b3d9798e3d7b982710f36f015ea0",
".git/objects/15/734d2cdac545dfce5e2d9bb9de609de132deef": "aaae50d1ff642ceafb7b73822e2d2551",
".git/objects/19/41cb09a76d65da6ac4ce1f46558c73bc87cdb8": "4a02e1750ca167c378330d583a404d3a",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/c100475bd5651dfb1028f477187a884de2e229": "c5ffd2e97a86e34323e6bb90b09109f2",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1c/b63d2b3800843eae032b722a982e8465526a07": "86a215ea895c3e5dd14bf3a8a4fa5e96",
".git/objects/1d/e8919ce7298beb95d5eb7722c7ba8e296a2e0e": "fcd6a680f1f81a174db95199993fbbae",
".git/objects/20/7695db4aa5b28de2a3bd8ca59d63ef6ced1cf1": "0b46904d9860a4cf2c0be86c0db313a8",
".git/objects/22/ac72fe914b21a96b96b204e7f53e0ccba5e463": "cc4160dc4d3e115df783703ac34724c2",
".git/objects/24/bcb7e17d2eceb2621794fd9a9bbd762340048b": "fcc8e1f45a2f2db08529a1f5d229e356",
".git/objects/25/37186e205c10b0f5e7da995565bd52ef155e90": "5523f04844737e9b135edc9cce31bfb3",
".git/objects/25/59349650a34706cf58c80795e8c1632f2e9d45": "48ed7bbcaed0dc80d627829168656dac",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/29/5ecc038ae7fcaee788f969f8d8201c839815c1": "712ec554ef89b82d1080bf8ba080ec9a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/30/807956f44ffbce3a278b1e63fa9ac30604f3dd": "c642297f46f419690662ccc1ea639084",
".git/objects/33/bf82ea4738816aeafd08bf5b78bce540d35c8d": "0aedfd34ce3c6a9a5bf95a74421e99b9",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/34/da147fa5c391cbdd22102525db56ce6b81af46": "15467cbc049fda35170f23707fb3af89",
".git/objects/36/169490e179c6ee33f3c398a27b1e2f3f920dab": "1a99860ade4e97be7737552381090879",
".git/objects/37/e8ff0c50b525a597a704c30c642750723c80b0": "9f330695c1499fece3021f1467d9946c",
".git/objects/39/f6c36176be17cef1f52162e1bbb3f94426e4cf": "5e9898d598e5e7cbc1b2a993d6a45be5",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/40/1b4e1c3eeb534ee82141079d74079e9440f9df": "f07d0b56fde8ccd4d2e5f169fb8bdbf6",
".git/objects/40/a2d9082a0c0b10c7b6a8a5272498824713b248": "71c76fad80869270ec9eb8f56a087346",
".git/objects/40/e5fe85c7cc5988046d45b2d798d7674e6dc2d7": "fea31331b44b0e5cdb827bbde91e521c",
".git/objects/41/5ca6e0d3173737107f90417c3889bfa63d1cfd": "02d43865fcbd365cf9d8cd246c527745",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/47/818cc125f4b61ab58210edd3c06f8c437f90ba": "ce1161c7701ab241f737dc9b927be76d",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4b/83829b653e39b011425cafab9c2b910c84f1da": "04ea65a26c7b1fe3b80591ffd5f12af1",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4d/c1564471e4e6bc3f2c77bc7899b1bf47ab6ff1": "cc26836c48547d6f6b3da3a1efe8320d",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/75/b6b6e8788553205931ed16aa021c17d9d11c62": "7a1d6dc6e5c2dd5dafab00f299c0afbd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/465171864d6c2d216a904f69a507abdf8a6a4b": "1d08bc2af093c602993b725a2b8966f8",
".git/objects/81/2f0233b287a60e0c392d5fc8f5e008befaa229": "346aed739d01967681b2f4491db4c93c",
".git/objects/83/f808366e614086c35dc4c313d59b78af8036f7": "bd82f08062d96f744a5db5235d7ae81b",
".git/objects/85/32af0099406218e0cad439bf90df670a653997": "0323669eba64f2f13e1860312041a034",
".git/objects/87/c9976d1fb98a5a18470d742f1019b0c027bf7e": "4d942b33440d7ea6a85ec1871f495620",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/8f/56d7c26bdc7c430ffe58fa7f190d9ccdc32d6a": "0e1305e489dd4087870908535f2909ad",
".git/objects/90/f415b5568743a549f801adb11d5998f0cc7087": "33d0f158d6207e63f555fde7949365aa",
".git/objects/97/4b9165ec5b4e2d2a5e8b566face819450c3e6c": "5748cef949308d9855308aaecda1dab6",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/433bc0bfb06e3bf06d44fa153cbf255edd6deb": "a60918f5bc8eeee21ed68dce3ac42fd4",
".git/objects/9c/66487583d91147c2d809be5f978569e7463904": "7748e1bf011a03e8c6d54bc2664bc597",
".git/objects/9d/2ad795459f75fc1b596cb086dd33726c6ff56e": "9aa1a5c07869866463f8d0b9ae522f61",
".git/objects/9e/82a092f309e2b994f455dc1abe60770e5bc110": "5a90858bcfc6007362604bf8d03b99e5",
".git/objects/9f/735178472f92dfdbd99dee506c4a0c7e9d9e87": "d6c238353359c8b2007b0538e26e2414",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/48f6874c749a09b7f954adb2e5b41dc5605c11": "485a052325bc6b1a01ba03fa88d0ced2",
".git/objects/a5/adc1ce9d1e43b8c4b2f49795d50d90c2f77796": "f8d03e2a57ba8308a5ddb4b9dec5cbe5",
".git/objects/a6/1ba1888bd2c532fc4bae3047939cc285d5a67e": "510db1598491cfc99c333694c17205e0",
".git/objects/a6/6e954712d9c10738c23f7120e70e26074e88d6": "8d38ef2e2a26b4ee7a5e7a5f1bb2499d",
".git/objects/a9/544ec6ac78021675dbaf252065b94c89f1e369": "4006e795cad785092a1d67f17010d05b",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/efd113976a972986005a6eacf75dcbf89b021b": "6ef8423e66d8cf443ad85bfead3993d9",
".git/objects/b0/c49cae0de035d9c7b43bedd4d6f400a7f57598": "a2790fc10c23bc99360e05f6ece268c0",
".git/objects/b0/ca690f53303453198dfdc3b98b45f1fe97a948": "4435915c6744b98543511bcf2a9321b1",
".git/objects/b1/ff10a8c6491bbdbd02bff2a250d91f49ba26e2": "eb1efefcbe4074899c66b455a5d8cac4",
".git/objects/b2/c0d2d8ca8f2df9af946e1ac08d66cc1bb15973": "5f46a9d0bd955f71109fd0b60bfd0bc3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/c1/10540b3fa19375eb30902d88c24261231dde0f": "c9618c791605b2e2cb0e6e758925431b",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c1/c5599cb0d68a04e8f5d93f65317270f1fb8266": "5a1cd1ba9419d179bc99431d15fa9cb1",
".git/objects/c3/e8b0eb804719caa430b33e5f873c6127802e69": "efa93826c5117694208f501c48c3b922",
".git/objects/c4/dd984f88f7ebc199bb524f8a453f17e278c5d9": "384c234614fc2c5f1ca411c66341716c",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/ee58d8613ef521d016547c22b92f61a55a5d02": "102ccf089ced88f4e47c8e31b8689d11",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d7/b2b0485aae9683ef56e55568081400e7b8bfba": "201293b178a4ab332cadecab9bc6c7f1",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/da/39eb629cbbf554aa730192f6f323a5420ec827": "1921f4fa7775fac5e7a2273668efacac",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/fe57036804ff982582c4ec3bf7d49aa07798c4": "699d75b1596fc8885c851924a86fbdb7",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/dee85f7f83ba97fa1c14719cd3f540be6413bd": "d56a1e8a2ca722e32550e4a2614b6140",
".git/objects/e2/ec9bf11c80bce8159c9ac69ca9398227230e22": "8e5a4f489d6df831739823573694635a",
".git/objects/e4/551c7a4cf8b5d3bd52355f9f69557f4b3c9fa9": "c51ec93c18b1fed3c5becc7ea020765f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/57e1ae21acf03eee4a6af535873d735b740d48": "2534aaec2969b285b67b301097899330",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e9/920888d1cb2abae1491696021af93e52d1e13b": "056f76acb28323708083d192cc7ae144",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/9fb1188219194d2969ac77c9f6a2ada961f808": "9e9c6fec00cae0c0e97a09eda563c751",
".git/objects/ee/be265a8ec5a1b39cc969b0e24bcad848c1a142": "f347ed83a11a9e486c7e4c8aa26712f5",
".git/objects/f4/947a67860b12db9a07bb0a7d38d95db6daa6fa": "295840dfaf171d12dcbea80b0983cdf5",
".git/objects/f5/258b0e50190d64f586374b57e2d16517a81ead": "8699de83eaf7c3912a0b9a81874bad3e",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/objects/f9/ab038c1a75497ed9b001e3ebdd74a13f37884c": "5b2e42416c9fe3f0669b61dc04dbe113",
".git/objects/fb/05217ffc125d93d3311c046b8078aee5f4ef1a": "8fa8ebb02b6e1a82deb47601a284f1c1",
".git/refs/heads/main": "fbf6c6a666de6aba50e6732fa4096955",
".git/refs/remotes/origin/main": "fbf6c6a666de6aba50e6732fa4096955",
"assets/AssetManifest.json": "d4f11e9a07bd461406dec83edcf2d2c7",
"assets/FontManifest.json": "3ba95e877e8d977ed295b7a8efefeff7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ce72b75d729eeaf309b5d3529c937d4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "286844330705585cdef4071e4bb8c1fe",
"/": "286844330705585cdef4071e4bb8c1fe",
"main.dart.js": "df7ae3cd0d396a70f2400ef7f5b49b2f",
"manifest.json": "594ecc67f1d34f219695543da6a3ae85",
"README.md": "fd434298e3ded03634a3be73bb41fa44",
"version.json": "5af17c393ad78849b723709ca5f10509"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
