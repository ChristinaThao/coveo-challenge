export default function buildUri (newUri, apiGetParams) {
        
    if (apiGetParams.q != "" && apiGetParams.q != undefined) {
        newUri = newUri + "&q=" + apiGetParams.q;
    }

    if (apiGetParams.filterCriteria != undefined) {
        const {price} = apiGetParams.filterCriteria;
        if(price.length == 2) {
            newUri = newUri.includes("&q=") ?  newUri + "&aq=@tpprixnum=" + price[0] + ".." + price[1] 
                : newUri + "&q=@tpprixnum=" + price[0] + ".." + price[1];
        }
    }

    if (apiGetParams.enableDidYouMean) {
        newUri = newUri + "&enableDidYouMean=true";
    }

    if (apiGetParams.sortCriteria != "" && apiGetParams.sortCriteria != undefined){
        newUri = newUri + "&sortCriteria=" + apiGetParams.sortCriteria;
    }

    if (apiGetParams.currentPage != 1  && apiGetParams.currentPage != undefined){
        let firstIndex = (apiGetParams.currentPage - 1)*apiGetParams.size;
        newUri = newUri + "&firstResult=" + firstIndex;
    }

    newUri = newUri + "&numberOfResults=" + apiGetParams.size;
    return newUri;
}