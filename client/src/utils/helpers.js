export const minutesToHours = time => {
    const hours = parseInt(time / 60);
    const minutes = time % 60 < 10 ? `0${time % 60}` : time % 60;
    const runtime = `${hours}h${minutes}`;
    return runtime;
};
