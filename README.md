jQuery URI Params Extension
=================

jQuery URI Params is a jQuery extension that can be used for getting and setting client-side parameters on the fly! Ever wanted to pull a querystring from the address bar? Or get one from an anchor tag? How about changing one that already exists or creating a brand new parameter? This extension will help you do all of that with great ease.

_Tested with jQuery v1.10.2_

### Usage

Returns, Adds or Changes parameters for given anchor object or page URI.

----------

#### getUriParam 

Get Params from Document URI

````
$().getUriParam("param1");
````

Get Params from Anchor

````
$([selector]).getUriParam("param2");
````

#### changeUriParam 

Change Params on Anchor

````
$([selector]).changeUriParam("param3","77");
````

#### addUriParam 

Add Params to Anchor

````
$([selector]).addUriParam(url,"param4","88");
````

----------

### Acknowledgments

Written by Arthur Khachatryan. Documentation updated Sat Sep 28 2013 07:37:46 GMT-0700 (PDT)

Check out my blog: [www.aspiremedia.net](http://aspiremedia.net).
Follow me [on Twitter](https://twitter.com/aspiremedianet). Check me out [on LinkedIn](http://www.linkedin.com/pub/arthur-khachatryan/1/885/ab5/)


----------

### License

    Copyright 2013 Arthur Khachatryan
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
    http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
