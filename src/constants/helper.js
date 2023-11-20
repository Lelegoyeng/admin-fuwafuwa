const validateAccess = (menu, userData) => {
    let accessChilds = [];
    if (menu.children) {
        menu.children.forEach((item) => {
            if (userData.accesses[item.name]?.includes('view')) {
                accessChilds.push(userData.accesses[item.name]);
            }
        });
    }
    // console.log("menux", menu.name)
    if (
        !userData.accesses[menu.name]?.includes('view') &&
        accessChilds.length === 0
    )
        return false;
    return true;
};
const addCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const removeNonNumeric = (num) => num?.toString().replace(/[^\d,]+/g, '');
const removeNonNumeric2 = (num) => num?.toString().replace(/[^\d]+/g, '');
const parsingFloat = (num) => parseFloat(num?.toString()?.replace(',', '.'));
const floatString = (num) => num?.toString().replace('.', ',');

module.exports = {
    validateAccess,
    addCommas,
    removeNonNumeric,
    parsingFloat,
    floatString,
    removeNonNumeric2,
};
