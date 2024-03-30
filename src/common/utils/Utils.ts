/**
 * 목표시간과 현재시간의 차이를 일, 시간, 분, 초로 반환하는 함수
 * @param endTime
 * @param currentTime
 */
export const calcTimeLeft = (endTime : Date, currentTime: Date) => {
    const timeLeft = endTime.getTime() - currentTime.getTime();

    const oneSecond = 1000;
    const oneMinute: number = oneSecond * 60;
    const oneHour: number = oneMinute * 60;
    const oneDay: number = oneHour * 24;

    const days: number = Math.floor(timeLeft / oneDay);
    const hours: number = Math.floor((timeLeft % oneDay) / oneHour);
    const minutes: number = Math.floor((timeLeft % oneHour) / oneMinute);
    const seconds: number = Math.floor((timeLeft % oneMinute) / oneSecond);

    return { days, hours, minutes, seconds };
}


/**
 * 숫자 시간을 00 포멧 문자열로 바꾸는 함수 (7 -> "07")
 * @param time
 */
export const formatTime = (time: number) => {
    // 숫자를 두 자리 문자열로 변환하여 반환
    return time.toString().padStart(2, '0');
}