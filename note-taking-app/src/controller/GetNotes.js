module.exports = async (req, res, next) => {
    try {
        const isToken = res.cookie
        console.log(isToken)
    } catch (error) {
        next(error)
    }
}