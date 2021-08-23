function phoneBill() {

    let callTotal = 0;
    let smsTotal = 0;

    function addToType(type) {
        if (type == "call") {
            callTotal += 2.75;
        } else if (type == "sms") {
            smsTotal += 0.75;
        }
    }

    function callTotalValue() {
        return callTotal.toFixed(2);
    }

    function smsTotalValue() {
        return smsTotal.toFixed(2);
    }

    function billTotal() {
        return (callTotal + smsTotal).toFixed(2);
    }

    function indicator() {
        if (billTotal() >= 30 && billTotal() < 50) {
            return "warning";
        }
        else if (billTotal() >= 50) {
            return "danger";
        }
    }

    return {
        addToType,
        callTotalValue,
        smsTotalValue,
        billTotal,
        indicator,
    }
}