export const sliceName = (name) => {
    const data = name.slice(0, 16)
    return data
}

export const convertToMinute = (time) => {
    var date = new Date(time);
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    var formattedTime = `${minutes.substr(-2)} : ${seconds.substr(-2)}`;
    return formattedTime
}