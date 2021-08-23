const calculatePercentage = (total, amount) => {
    const percent = (amount / total) * 100;
    // console.log(`amount is: ${amount}, total is: ${total}, percentage is: ${percent}`);
    return percent;
};

export default calculatePercentage;