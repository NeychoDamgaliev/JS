function domTraversal(selector) {

    let $root = $(selector);
    $root.addClass("highlight");
    let current = $root;

    let next = current;
    while(next.length != 0) {
        current = next;
        next = next.children();
    }
    current.first().addClass('highlight');
    current.first().parentsUntil($root).addClass("highlight");
}

// function domTraversal(selector) {
//     let $target = $(selector).children();
//     if($target.length == 0){
//         $(selector).addClass("highlight");
//         return;
//     }
//     let $next = $target;

//     while( $next.length ) {
//         $target = $next;
//         $next = $next.children();
//     }

//     $target.first().addClass("highlight");
//     $target.first().parentsUntil($(selector).parent()).addClass('highlight');
// }