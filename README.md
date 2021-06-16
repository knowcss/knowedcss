# knowedcss
KnowedCSS, the node.js module for KnowCSS
<br>https://www.knowcss.com/
<br>
<br>npm install knowcss
<br>
<br>const knowedcss = require('knowedcss');
<br>const replace = require('replace');
<br>var ret = knowedcss('<div class="font-size-16px">Hello, world!</div>');
<br>console.log('css -> ' + ret[1]);
<br>console.log('html -> ' + ret[2]);
