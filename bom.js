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
            let search = window.location.search
            if(search[0] === '?'){
                search = search.slice(1)
            }
            for(var i = 0;i<search.length;i++){
                console.log(search[i])
            }
            console.log(search.split('&')) 
            return window.location.search
        }
    }
}

