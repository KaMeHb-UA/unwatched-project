exports._ = ({name, attrs, html}) => {
    var elem = document.createElement(name || 'div');
    for(var i in (attrs || {})) elem.setAttribute(i, attrs[i]);
    elem.innerHTML = html || '';
    return elem
};
