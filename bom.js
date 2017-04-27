window.$ = function () {
    let array = []
    return array
}


$.bom = {
    openAtCenter: function (width, height, url) {
        window.open(`${url}`, '_blank', `width=${width},height=${height},screenX=${screen.width / 2 - width / 2}px,screenY=${screen.height / 2 - height / 2}px`)
    },
    search: function (name, value) {
        if (value === undefined) {
            let result = {}
            let search = window.location.search
            if (search[0] === '?') {
                search = search.slice(1)
            }
            let searchArray = search.split('&')
            for (var i = 0; i < searchArray.length; i++) {
                let parts = searchArray[i].split('=')
                result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1])
            }
            return result[name]
        }
    }
}

