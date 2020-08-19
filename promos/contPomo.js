// /////////////////////////////////////////////////////////////////////////////
// getPharmaciesIdBalance
// /////////////////////////////////////////////////////////////////////////////
controllers.getPromosFromSite = async (req, h) => {
    //const { id: pharmacyId } = req.params;
   // const { limit, offset } = req.query;
    try {
        const res = await repository.getPromosFromSite();
        if (res) {
            return h.response(res);
        }
        throw Boom.badRequest('No result');
    } catch (err) {
        console.error(`:ERROR get promos failed! ${moment().format()} ${err}`);
        return h.response({ ...err, message: `:ERROR get promos failed!` }).code((err.output && err.output.statusCode) || 499);
    }
};
