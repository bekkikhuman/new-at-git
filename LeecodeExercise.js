//roman to integers
const romanToInt = (s) => {
    const romanskey = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (romanskey[s[i]] < romanskey[s[i + 1]]) {
            result = result + romanskey[s[i + 1]] - romanskey[s[i]];
            i++;
        } else
            result += romanskey[s[i]];
    }

    return result;
}