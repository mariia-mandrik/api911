// /////////////////////////////////////////////////////////////////////////////
// getPharmaciesIdBalance
// /////////////////////////////////////////////////////////////////////////////
controllers.getPromocodes = async (req, h) => {
    //const { id: pharmacyId } = req.params;
    const { phone } = req.query;
    try {
        const res = await repository.getPromocodes({ phone });
        if (res) {
            return h.response(res);
        }
        throw Boom.badRequest('No result');
    } catch (err) {
        console.error(`:ERROR get promocodes failed! ${moment().format()} ${err}`);
        return h.response({ ...err, message: `:ERROR get promocodes failed!` }).code((err.output && err.output.statusCode) || 499);
    }
};

