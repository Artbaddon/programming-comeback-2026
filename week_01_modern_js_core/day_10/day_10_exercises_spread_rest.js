// replace the last N elements of an array with another array using rest/spread
function replaceTail(arr, n, ...values) {

    return [...arr.slice(0, arr.length - n), ...values];

}

// extract one key, collect the rest, then recombine with an override
function rebuild(obj, key, newValue) {
    let { [key]: _, ...rest } = obj;

    return { [key]: newValue = {}, ...rest }


}