// /////////////////////////////////////////////////////////////////////////////
// ДАННЫЕ О ТОВАРАХ ПО НАЗВАНИЮ getProductsDetailSimple
// /////////////////////////////////////////////////////////////////////////////
async function getProductsNameSearch(objArgs) {
    const { name } = objArgs;

    try {
        const pool = await poolPromise;
        const res = await pool.request()
            .input('name', sql.Int, name)
            .execute('dbo.p_api_GetProductsNameSearch');

        if (res && res.recordset && res.returnValue === 0) {
            return res.recordset;
        }
        throw Boom.badRequest(`No result`);
    } catch (err) {
        throw Boom.boomify(err, `error`);
    }
}
