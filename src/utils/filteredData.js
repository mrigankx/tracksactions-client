const filteredData = (data) => {
    const today = new Date();
    const thisMonth = today.getMonth();
    const thisYear = today.getFullYear();
    const filteredtransactions = data.filter((t) => (new Date(t.entrydate).getMonth() === thisMonth && new Date(t.entrydate).getFullYear() === thisYear));
    return filteredtransactions;
};

export default filteredData;