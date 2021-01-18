const registerUser = async (req, res, next) => {
    res.status(200).json({ message: "Hello farmer. Welcome to registration!!!" })
};

exports.registerUser = registerUser;