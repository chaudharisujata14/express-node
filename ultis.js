function createResult(error,data) {
    const result = {};
    if(error)
    {
        result['s'] = "error";
        result['e'] = error;
    }
    else
    {
        result['s'] = "success";
        result['d'] = data;
    }
    return result;
}

module.exports = {createResult : createResult};
