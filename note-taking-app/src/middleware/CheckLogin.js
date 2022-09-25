const jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(404).json({ message: 'Token bulunmadı' })
        }

        const decodeToken = jwt.verify(token, process.env.JWT_KEY, (error, decodeToken) => {
            if (error) {
                return res.json({
                    success: false,
                    message: error.message
                })
            }
            return decodeToken
        })
        req.headers.user_id = decodeToken.id
        next()

    } catch (error) {
        next(error)
    }
}