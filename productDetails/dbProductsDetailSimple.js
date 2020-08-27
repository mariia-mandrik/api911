// /////////////////////////////////////////////////////////////////////////////
// ДАННЫЕ О ТОВАРЕ  ПО АЙДИ getProductsDetailSimple
// /////////////////////////////////////////////////////////////////////////////
async function getProductsDetailSimple(objArgs) {
    const { pharmacyId, type } = objArgs;

    try {
        const pool = await poolPromise;
        const res = await pool.request()
            .input('pharmacyId', sql.Int, pharmacyId)
            .input('type', sql.Int, type)
            .execute('dbo.p_api_GetProductsDetailSimple');

        if (res && res.recordset && res.returnValue === 0) {
            return res.recordset;
        }
        throw Boom.badRequest(`No result`);
    } catch (err) {
        throw Boom.boomify(err, `error`);
    }
}
