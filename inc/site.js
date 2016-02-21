---
---
'use strict';

window.addEventListener('DOMContentLoaded', function () {
    $.ajax({url: '{{ site.url }}/data/tools.json', success: function (result) {
        var lists = [].slice.call(window.document.getElementsByClassName('listall'));
        result = JSON.parse(result);
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