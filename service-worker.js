/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e8ae519be47cedeef80c2864e329dd03"
  },
  {
    "url": "assets/css/0.styles.baa501a4.css",
    "revision": "cefff3f8c27847bd006c320ad3563c8b"
  },
  {
    "url": "assets/img/aboba.9afd0d8a.png",
    "revision": "9afd0d8a856a1d456ca9093c518f9168"
  },
  {
    "url": "assets/img/questiondelete200.0c906e7e.png",
    "revision": "0c906e7e5205f4f0dc3054dd8b423857"
  },
  {
    "url": "assets/img/questionget200.9e28a020.png",
    "revision": "9e28a020955c228e76947aff3cafa44d"
  },
  {
    "url": "assets/img/questionget400.65fbecb3.png",
    "revision": "65fbecb3743ceb14935478a83a5b4109"
  },
  {
    "url": "assets/img/questiongetid200.44604456.png",
    "revision": "4460445659f5550dd3d563c4fdfc8471"
  },
  {
    "url": "assets/img/questiongetid400.8b3c5224.png",
    "revision": "8b3c52246298a138b53fb4c14a85541c"
  },
  {
    "url": "assets/img/questionpost200.f48525b4.png",
    "revision": "f48525b461f6750cc4dd2a9546b7c18c"
  },
  {
    "url": "assets/img/questionpost400.c958c042.png",
    "revision": "c958c0428954e197267ae931ac53f51a"
  },
  {
    "url": "assets/img/questionput200.a1ebbf59.png",
    "revision": "a1ebbf59fcd7d9921df0bac381060a21"
  },
  {
    "url": "assets/img/quizdelete200.8bb8bde5.png",
    "revision": "8bb8bde5d6d0c0f123e7d5332c8fbc27"
  },
  {
    "url": "assets/img/quizget200.ca2dac85.png",
    "revision": "ca2dac85cb35c5e46e5aef8b0711760d"
  },
  {
    "url": "assets/img/quizget400.c1f21343.png",
    "revision": "c1f2134397b4b4345178867d96f68324"
  },
  {
    "url": "assets/img/quizgetid200.9eb82d5f.png",
    "revision": "9eb82d5f25603dcc7643d41b0240c086"
  },
  {
    "url": "assets/img/quizgetid400.5a635171.png",
    "revision": "5a63517127f439a39e0ed6d8f93a2330"
  },
  {
    "url": "assets/img/quizpost200.550cd979.png",
    "revision": "550cd979acca375730e79ead32ef2910"
  },
  {
    "url": "assets/img/quizpost400.5d873d09.png",
    "revision": "5d873d099ff861c5b43ed0c206dc6e94"
  },
  {
    "url": "assets/img/quizput200.f87e1567.png",
    "revision": "f87e156768300bf7a442b2483e8031a7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/serverstart.8955d8f0.png",
    "revision": "8955d8f031dbea7e3a7f118b276b3737"
  },
  {
    "url": "assets/js/10.c8fc8c3d.js",
    "revision": "595fafbd99729524b5ee286fcca26d3b"
  },
  {
    "url": "assets/js/11.e0193c62.js",
    "revision": "0c7860de2c6c317829485623bc2b1d4c"
  },
  {
    "url": "assets/js/12.d0832235.js",
    "revision": "239e4de6ced7a31e75b550cf25127de6"
  },
  {
    "url": "assets/js/13.94ea2391.js",
    "revision": "15cd3f543fbcf6cfe7f3db1a5efba2e8"
  },
  {
    "url": "assets/js/14.e1ba7bfd.js",
    "revision": "152b17d45ccbb099a5d7b8255f2e7bd0"
  },
  {
    "url": "assets/js/15.716117b8.js",
    "revision": "b68402f834bd29bf00f8460bb2d84c1e"
  },
  {
    "url": "assets/js/16.5984293a.js",
    "revision": "9ceb9128c15c72cb6087f00287e1786f"
  },
  {
    "url": "assets/js/17.f3d35e1b.js",
    "revision": "9ff262e9bd8a6d26c8d2f1a8275c59f4"
  },
  {
    "url": "assets/js/18.b0f1a7b7.js",
    "revision": "608fd1d85c677b3986dadf75c71079b0"
  },
  {
    "url": "assets/js/19.3763f8c1.js",
    "revision": "c6d23bfa185d1cbd67abc13ee7c38d06"
  },
  {
    "url": "assets/js/2.d93feadb.js",
    "revision": "6e31e87f4cf7f1bd67fd94d5e1a5fc7d"
  },
  {
    "url": "assets/js/20.e0b6b64b.js",
    "revision": "5e23dc8b007bc87a602aac4d58a4698f"
  },
  {
    "url": "assets/js/21.1f367270.js",
    "revision": "b78d362d175e0a41ba4ca59391895189"
  },
  {
    "url": "assets/js/22.624b802a.js",
    "revision": "12bb827bb8df1587c95979468af0efde"
  },
  {
    "url": "assets/js/23.9cc8a59e.js",
    "revision": "a6c993aaa88bc58bf98eecce36b32502"
  },
  {
    "url": "assets/js/24.77c30e10.js",
    "revision": "379bb426b1c818f4b7a3080536da6565"
  },
  {
    "url": "assets/js/26.41b6aec7.js",
    "revision": "3aef0aff4a34db0cfe21fb13287a21f8"
  },
  {
    "url": "assets/js/3.0dc11bb8.js",
    "revision": "a70127ac010f4237ceaae6339a58fb9e"
  },
  {
    "url": "assets/js/4.2fed4503.js",
    "revision": "b5de18d5642fe05d16ea35d2a8f0f25c"
  },
  {
    "url": "assets/js/5.f3624d83.js",
    "revision": "568b81df264a3827395580e3fed22884"
  },
  {
    "url": "assets/js/6.02e50f58.js",
    "revision": "50c1e7cf2ea71abff20379c5e5aba67e"
  },
  {
    "url": "assets/js/7.70dbd814.js",
    "revision": "19fcbf0f1d0dfbdcde96e0cc0e3d866b"
  },
  {
    "url": "assets/js/8.c875d8e7.js",
    "revision": "10838f501bf31cf58b98e2751519f1f8"
  },
  {
    "url": "assets/js/9.78ea2fd8.js",
    "revision": "52a81030d67c1b6a7ee2b1af35eed3d8"
  },
  {
    "url": "assets/js/app.fa40dcf3.js",
    "revision": "df6e0a1217def3d37cab14cb4cbecfc5"
  },
  {
    "url": "conclusion/index.html",
    "revision": "0fda2e8a6b6c48cf0a2a2147e2f6c7e0"
  },
  {
    "url": "design/index.html",
    "revision": "18d6003e28e7b3cabdead5133f5cc4e6"
  },
  {
    "url": "index.html",
    "revision": "fca2a648175e3c647aea0911574c4613"
  },
  {
    "url": "intro/index.html",
    "revision": "2c1a5c9edb8fe95dca9d18b048913d5c"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "822114506d513b642ece55af5a3ff059"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "47bea333c7fd206b2c93eb2dcd3f00e8"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "fc31af8b05b25d7ccc56adb78502de44"
  },
  {
    "url": "software/index.html",
    "revision": "a4b3e7f42f5387a8a5438e81a26e35a5"
  },
  {
    "url": "test/index.html",
    "revision": "fd98902ea79354984b454382c4b2a197"
  },
  {
    "url": "use cases/index.html",
    "revision": "a550427ef8b6c818258b264a0892386d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
