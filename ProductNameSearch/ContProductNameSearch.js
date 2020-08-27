// /////////////////////////////////////////////////////////////////////////////
// getProductsDetailSimple
// /////////////////////////////////////////////////////////////////////////////
controllers.getProductsNameSearch = async (req, h) => {
    const { name } = req.query;

    try {
        const res = await repository.getProductsNameSearch({ name });
        if (res) {
            return h.response(res);
        }
        throw Boom.badRequest('No result');
    } catch (err) {
        console.error(`:ERROR get pharmacy id ${pharmacyId} balance failed! ${moment().format()} ${err}`);
        return h.response({ ...err, message: `:ERROR get pharmacy ${name} failed!` }).code((err.output && err.output.statusCode) || 499);
    }
};

