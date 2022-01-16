module.exports = function toReadable (number) {
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['_', '_', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number >= 0 && number < 10) {
        return ones[number];
    } else if (number >=10 && number < 20) {
        let i = Number(number.toString()[1]);
        return teens[i];
    } else if (number >= 20 && number < 100) {
        let a = Number(number.toString()[0]);
        let b = Number(number.toString()[1]);

        if(b === 0) {
            return `${tens[a]}`
        } else {
            return `${tens[a]} ${ones[b]}`
        }
    } else if (number >= 100 && number < 1000) {
        let a = Number(number.toString()[0]);
        let b = Number(number.toString()[1]);
        let c = Number(number.toString()[2]);

        if (b === 1) {
            return `${ones[a]} hundred ${teens[c]}`;
        } 
        else if (b === 0 && c === 0) {
            return `${ones[a]} hundred`;
        } 
        else if (b === 0) {
            return `${ones[a]} hundred ${ones[c]}`;
        }
        else if (c === 0) {
            return `${ones[a]} hundred ${tens[b]}`;
        }  else {
            return `${ones[a]} hundred ${tens[b]} ${ones[c]}`;
        }
    }
}
