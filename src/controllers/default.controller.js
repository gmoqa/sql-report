const welcome = async (req, res) => {
    res.json({
        message : 'Welcome to SQL Report API',
        status : 'Ready!',
        documentation : process.env.documentation
    })
}

module.exports = welcome
