# knowedcss
KnowedCSS, the node.js module for KnowCSS
<br>https://www.knowcss.com/
<br>
<br>npm install knowcss
<br>
<br>const knowedcss = require('knowcss');
<br>const replace = require('replace');
<br>var ret = knowedcss('<div class=\"font-size-16px\">Hello, world!</div>');
<br>console.log('css -> ' + ret[1]);
<br>console.log('html -> ' + ret[2]);
<br>
<br>output:
<br>css -> define{display:none!important;visibility:hidden!important;height:0px!important;width:0px!important;padding:0px!important;margin:0px!important}.iy{font-size:16px}
<br>html -> <div class="iy">Hello, world!</div>
