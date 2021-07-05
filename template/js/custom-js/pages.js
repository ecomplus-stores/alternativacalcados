// Add your custom JavaScript for storefront pages here.
setTimeout(function(){ 
    if($('.container-home').length) {
    $('.container-home > .container').append($('.container-home').nextAll())
} 
}, 500);
 
