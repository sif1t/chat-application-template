function decorateHtmlResponse(page_title) {
    return function (req, res, next) {
        res.locals.html = true;
    }
     
}