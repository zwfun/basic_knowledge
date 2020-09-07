const isObject = function (data) {};

const isArray = function (data) {};

const isDate = function (data) {};

const isNullOrUndefined = function (data) {};

const cloneObject = function (obj) {};

const cloneArray = function (array) {};

const cloneData = function (data) {
    if (isArray(data)) {
        cloneArray(data);
    } else if (isObject(data)) {
        cloneObject(data);
    } else {
        return data;
    }
};

export default function (data) {
    return cloneData(data);
}
