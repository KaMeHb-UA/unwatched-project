exports.http = new (class HTTP{
    /**
     * Gets contents from url
     * @param {String} url
     * @return {Promise<String>}
     */
    get(url){
        var xhr = new XMLHttpRequest();
        return new Promise((resolve, reject) => {
            xhr.open('GET', url, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState != 4) return;
                if (xhr.status != 200) reject(new Error(`Cannot get requested url. Error ${xhr.status}: ${xhr.statusText}`)); else resolve(xhr.responseText);
            };
            xhr.send()
        })
    }
    /**
     * Sends POST to url
     * @param {String} url
     * @param {Object} data
     * @return {Promise<String>}
     */
    post(url, data){
        var xhr = new XMLHttpRequest();
        return new Promise((resolve, reject) => {
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onreadystatechange = () => {
                if (xhr.readyState != 4) return;
                if (xhr.status != 200) reject(new Error(`Cannot post to requested url. Error ${xhr.status}: ${xhr.statusText}`)); else resolve(xhr.responseText);
            };
            xhr.send(JSON.stringify(data));
        })
    }
})();
exports._ = ({name, attrs, html}) => {
    var elem = document.createElement(name || 'div');
    for(var i in (attrs || {})) elem.setAttribute(i, attrs[i]);
    elem.innerHTML = html || '';
    return elem
};
