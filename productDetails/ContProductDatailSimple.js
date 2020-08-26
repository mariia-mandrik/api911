// /////////////////////////////////////////////////////////////////////////////
// getProductsDetailSimple
// /////////////////////////////////////////////////////////////////////////////
controllers.getProductsDetailSimple = async (req, h) => {
    const { id: pharmacyId ,type:type} = req.params;

    try {
        const res = await repository.getPharmaciesIdBalance({ pharmacyId, type });
        if (res) {
            return h.response(res);
        }
        throw Boom.badRequest('No result');
    } catch (err) {
        console.error(`:ERROR get pharmacy id ${pharmacyId} balance failed! ${moment().format()} ${err}`);
        return h.response({ ...err, message: `:ERROR get pharmacy id ${pharmacyId} balance failed!` }).code((err.output && err.output.statusCode) || 499);
    }
};

