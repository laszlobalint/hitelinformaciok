var isOldIE = (navigator.userAgent.indexOf("MSIE") !== -1); // Detect IE10 and below

iFrameResize({
    log                     : false,                                // Enable console logging
    enablePublicMethods     : true,                                 // Enable methods within iframe hosted page
    heightCalculationMethod : 'grow'
}, '.iframe-to-resize');
