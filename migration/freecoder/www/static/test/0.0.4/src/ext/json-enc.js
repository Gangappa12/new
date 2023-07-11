htmx.defineExtension('json-enc', {
    encodeParameters : function(xhr, parameters, elt) {
        xhr.requestHeaders['Content-Type'] = 'application/json';
        xhr.overrideMimeType('text/json');
        return (JSON.stringify(parameters));
    }
});