//get inbox page

function getInbox (req, res, next) {
    res.render("inbox", {
        title: "Inbox- Chat Application",
    });
}

module.exports = {
    getInbox,
}