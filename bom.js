window.$ = function () {
    let array = []
    return array
}


$.bom = {
    openAtCenter : function(width,height,url){
        window.open(`${url}`,'_blank',`width=${width},height=${height},screenX=${screen.width/2-width/s}px,screenY=${screen.height/2-height/2}px` )
    }
}