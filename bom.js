window.$ = function () {
    let array = []
    return array
}


$.bom = {
    openAtCenter : function(width,height,url){
        window.open(`${url}`,'_blank',`width=${width},height=${height},screenX=${screen.width/2-150}px,screenY=${screen.height/2-150}px` )
    }
}