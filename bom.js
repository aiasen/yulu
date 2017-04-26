window.$ = function () {
    let array = []
    return array
}


$.bom = {
    openAtCenter : function(width,height,url){
        window.open(`${url}`,'_blank',`width=${width},height=${height}`,'screenX=300px','screenY=300px' )
    }
}