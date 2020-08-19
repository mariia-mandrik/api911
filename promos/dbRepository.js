// /////////////////////////////////////////////////////////////////////////////
// ТЕКУЩИЕ АКЦИИ getPromosFromSite
// /////////////////////////////////////////////////////////////////////////////
async function getPromosFromSite(objArgs) {
    //const { pharmacyId, offset = 0, limit = DEFAULT_PHARMACY_BALANCE } = objArgs;

    try {
        const pool = await poolPromise;
        const res = await pool.request()
            //.input('pharmacyId', sql.Int, pharmacyId)
            //.input('offset', sql.Int, offset)
            //.input('limit', sql.Int, limit)
            .execute('dbo.p_api_GetPromo');//change function

        if (res && res.recordset && res.returnValue === 0) {
            return res.recordset;
        }
        throw Boom.badRequest(`No result`);
    } catch (err) {
        throw Boom.boomify(err, `error`);
    }
}

