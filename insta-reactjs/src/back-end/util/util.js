const returnError = (error, res) => {
    console.log("Error while fetching data => ", error);
    return res.status(500).send({
        message: '500 - Internal Server Error.'
    });
}

module.exports = { returnError };