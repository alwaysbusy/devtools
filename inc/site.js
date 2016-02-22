---
---
'use strict';

window.addEventListener('DOMContentLoaded', function () {
    $.ajax({url: '{{ site.url }}/data/tools.json', success: function (result) {
        var lists = [].slice.call(window.document.getElementsByClassName('listall'));
        if (!Array.isArray(result)) result = JSON.parse(result);
        for (var list in lists) {
            var ul = document.createElement('ul');
            for (var item in result) {
                var li = document.createElement('li');
                var title = document.createTextNode(result[item].title);
                if (lists[list].getAttribute('data-link') === null || lists[list].getAttribute('data-link') === 'link') {
                    var a = document.createElement('a');
                    a.href = result[item].url;
                    a.title = result[item].title;
                    a.appendChild(title);
                    li.appendChild(a);
                } else {
                    li.appendChild(title);
                }
                ul.appendChild(li);
            }
            lists[list].appendChild(ul);
        }
    }});
});

window.addEventListener('DOMContentLoaded', function () {
    if (window.document.getElementById('quickview')) {
        if (window.document.getElementById('title').getBoundingClientRect().bottom >= 0) {
            window.document.getElementById('quicktitle').style.visibility = 'hidden';
        }
        window.addEventListener('scroll', function () {
            //Test if any part of mainmenu off screen and if so fix to top otherwise leave as is
            if (window.document.getElementById('title').getBoundingClientRect().bottom < 0) {
                window.document.getElementById('quickview').style.position = 'fixed';
                window.document.getElementById('quicktitle').style.visibility = 'visible';
                //$('#quicktitle').fadeTo(1000, 1);
            } else {
                window.document.getElementById('title').style.height = '1px';
                window.document.getElementById('quickview').style.position = 'relative';
                window.document.getElementById('quicktitle').style.visibility = 'hidden';
                //$('#quicktitle').fadeTo(1000, 0);
            }
        });
    }
});