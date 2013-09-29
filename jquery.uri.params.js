/**
 * See (http://jquery.com/).
 * @name jQuery
 * @class
 * @name jQuery
 * @memberOf jQuery
 */
 
/**
 *  jQuery URI Params Extension
 *  extends jQuery
 *  @memberOf jQuery.fn
 *  @name Uri Params
 *  
 *  @fileOverview Returns, Adds or Changes URI parameters for given object or page url
 *  @requires jQuery object
 *  
 *  @author Arthur Khachatryan <arthurk55@gmail.com>
 *  @version 1.01
 */
(function($){
    
    /**
     * @global
     */
    $.uriParamsExt = { 
        title   : "jQuery URI Params Extension", 
        version : "1.01" 
    };

    jQuery.fn.extend({
        /**
         * @method getUriParam
         * @name getUriParam
         * @desc Get parameter from a link href, if no [selector], document URI will be the source
         * @param (strParamName) - name of parameter
         * @returns {paramVal}
         *
         * @example
         *  $([selector]).getUriParam(paramName);
         */
        getUriParam: function(strParamName){
            var qString = null,
                paramVal,
                is_selector = $(this).length >= 1;
                node = $(this) || undefined;
            if (typeof(node) == undefined) {
                var node_nm = $(this)[0].nodeName;
            }
            // if no selector object used - default to document uri
            if (!is_selector) {
                if (window.location.search.search(strParamName) > -1 ){
                    qString = window.location.search.substr(1,window.location.search.length).split("&");
                } else {
                    return $.uriParamsExt.title + ': Param not found!'; // param not found
                }
            // selector object used - find param in attrib HREF
            } else if (typeof($(this).attr("href")) != "undefined") {
                var strHref = $(this).attr("href"); // getting the HREF params
                if ( strHref.indexOf("?") > -1 ){
                    var strQueryString = strHref.substr(strHref.indexOf("?")+1);
                    qString = strQueryString.split("&");
                } else {
                    console.warn($.uriParamsExt.title + ": Param not found!");
                    return false; // param not found
                } // end of getting HREF params
            } else {
                console.warn($.uriParamsExt.title + "Type of check unknown!");
                return false;
            } // end param check type

            var paramArr = new Array();

            $.each(qString, function(i){
                paramArr.push(this);
            });
            
            for (var i=0; i<paramArr.length; i++){
                if (escape(unescape(paramArr[i].split("=")[0])) == strParamName){
                    paramVal = paramArr[i].split("=")[1];
                }
            }
            return (paramVal);
        },
        
        /**
         * @method changeUriParam
         * @name changeUriParam
         * @desc Change URI parameter. If [selector] is left blank, it will look to change the document URI parameter.
         * @param (strParamName) - name of parameter
         * @param (newVal) - new value of parameter
         * @returns {object}
         *
         * @example
         * $([selector]).changeUriParam(paramName,newVal);
         */
        changeUriParam: function(strParamName,newVal){ // change params on the fly
            var paramVal   = $(this).getUriParam(strParamName),
                hrefStr    = $(this).attr('href'),
                strValPair = strParamName + '=' + paramVal,
                newValPair = strParamName + '=' + newVal;
    
            if (typeof(paramVal) == undefined) {
                console.warn($.uriParamsExt.title + ': Cannot change parameter since --'+ strParamName + '-- was not defined and/or found!');
                return false;
            } else {
                return ($(this).attr("href",hrefStr.replace(strValPair,newValPair)));
            }
        },
        
        /**
         * @method addUriParam
         * @name addUriParam
         * @desc Add new parameter and value to URI. If [selector] is left blank it will add the parameter to the document URI
         * @param (theurl) - url base
         * @param (paramName) - name of new parameter
         * @param (paramValue) - value of new parameter
         * @returns {object}
         *
         * @example
         * $([selector]).addUriParam(theurl,paramName,paramValue);
         */
        addUriParam: function(theurl,paramName,paramValue){
            var paramAdded;
            if (theurl.indexOf("?") > -1) paramAdded = theurl + '&'+ paramName + '=' + paramValue;
            else paramAdded = theurl + '?'+ paramName + '=' + paramValue;
            return ($(this).attr("href",paramAdded));
        }
    }); // end fn.extend
})(jQuery); // ensure $ = jQuery
