// /////////////////////////////////////////////////////////////////////////////
// ПРОМОКОДЫ ПО НОМЕРУ ТЕЛЕФОНА getPromocodes
// /////////////////////////////////////////////////////////////////////////////
async function getPromocodes(objArgs) {
    const { pharmacyId, offset = 0, limit = DEFAULT_PHARMACY_BALANCE } = objArgs;

    try {
        const pool = await poolPromise;
        const res = await pool.request()
            //.input('pharmacyId', sql.Int, pharmacyId)
           // .input('offset', sql.Int, offset)
            .input('phone', sql.Int, phone)
            .execute('dbo.p_api_GetPromocodesByPhone');

        if (res && res.recordset && res.returnValue === 0) {
            return res.recordset;
        }
        throw Boom.badRequest(`No result`);
    } catch (err) {
        throw Boom.boomify(err, `error`);
    }
}
