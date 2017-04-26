window.$ = function () {
    let array = []
    return array
}


$.bom = {
    openAtCenter : function(width,height,url){
        window.open('','_blank',`width=${width},height=${height}` )
    }
}