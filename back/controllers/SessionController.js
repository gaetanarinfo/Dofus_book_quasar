module.exports = {
    get: async(req, res) => {
        const sess = req.session
        console.log('server session controller /session')
        console.log(req.session)
        res.send({
            sess
        })
    }
}