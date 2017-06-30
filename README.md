# jquery.copy.js - jQuery Copy Plugin

[![Download](https://img.shields.io/badge/Download-jquery.copy.js-brightgreen.svg)](https://github.com/by-syk/jquery-copy/raw/master/jquery.copy.js)


### Usage

```javascript
<script src="jquery.js"></script>
<script src="jquery.copy.js"></script>
```

+ Via jQuery
  
  for content:

  ```
  var res = $.copy("Hello, world!");
  var res = $.copy(999);
  var res = $.copy(true);
  var res = $.copy([1, 2, 3]);
  var res = $.copy({"status": 0, "data": []});
  ```

  for jQuery object:

  ```
  var res = $.copy($("#divContent"));
  ```

+ Or via function

  for content:

  ```
  <a href="javascript:void(0);" onclick="copyText('By_syk@163.com')">By_syk@163.com</a>
  ```

  for DOM node:

  ```
  <a href="javascript:void(0);" onclick="copyText(this)">By_syk@163.com</a>
  ```


### Compatible

Almost all modern browsers are supported.


### Sites using jquery.copy.js

[http://nano.by-syk.com](http://nano.by-syk.com/page/base)


### License

    Copyright 2017 By_syk

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.


*Copyright &#169; 2017 By_syk. All rights reserved.*