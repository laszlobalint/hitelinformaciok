<!--Import jQuery before materialize.js-->
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
<script type="text/javascript" src="/bower_components/iframe-resizer/js/iframeResizer.min.js"></script>
<script src="/js/iframe-resize.js"></script>

<!-- <script type="text/javascript">
    var iframeHost = 'http://hitelembed.beta.zengo.eu'

    function iframeListener(event) {
        var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.

        if(iframeHost == origin && event.data && event.data.type) {
            console.log(event.data);
        }
    };

    if (typeof window.postMessage != 'undefined') {
        if (window.addEventListener) {
            window.addEventListener('message', iframeListener, false);
        } else {
            window.attachEvent('onmessage', iframeListener);
        }
    }
    // Initialize collapse button
    $('.button-collapse').sideNav();
</script> -->
