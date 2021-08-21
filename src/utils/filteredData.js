const filteredData = (data) => {
    const today = new Date();
    const thisMonth = today.getMonth();
    const thisYear = today.getFullYear();
    console.log("raw data:", data);
    const filteredtransactions = data.filter((t) => (new Date(t.entrydate).getMonth() === thisMonth && new Date(t.entrydate).getFullYear() === thisYear));
    console.log("filtered data:", filteredtransactions);
    return filteredtransactions;
};

export default filteredData;