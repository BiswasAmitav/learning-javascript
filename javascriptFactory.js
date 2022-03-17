console.log("Amitav is learning Javascript Factory....");
function showProductInfo(productName,productId,productQuantity,productIsAvailable){
    return{
        productName: productName,
        productId: productId,
        productQuantity: productQuantity,
        productIsAvailable: productIsAvailable
    }
}

console.log(showProductInfo('LotoShoe',23452,2,false));
console.log(showProductInfo('amitav',190303105349,01,true));