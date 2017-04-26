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
            return window.location.search
        }
        console.log(window.location.search)
    }
}

