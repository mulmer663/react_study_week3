import random from 'random'

/**
 * 목표시간과 현재시간의 차이를 일, 시간, 분, 초로 반환하는 함수
 * @param endTime 목표 시간
 * @param currentTime 현새 시간
 */
export const calcTimeLeft = (endTime: Date, currentTime: Date) => {
    const timeLeft = endTime.getTime() - currentTime.getTime();

    const oneSecond = 1000;
    const oneMinute: number = oneSecond * 60;
    const oneHour: number = oneMinute * 60;
    const oneDay: number = oneHour * 24;

    const days: number = Math.floor(timeLeft / oneDay);
    const hours: number = Math.floor((timeLeft % oneDay) / oneHour);
    const minutes: number = Math.floor((timeLeft % oneHour) / oneMinute);
    const seconds: number = Math.floor((timeLeft % oneMinute) / oneSecond);

    return {days, hours, minutes, seconds};
}


/**
 * 숫자 시간을 00 포멧 문자열로 바꾸는 함수
 * <br>
 * (7 -> "07")
 * @param time 단일 숫자인 시간
 */
export const formatTime = (time: number) => {
    // 숫자를 두 자리 문자열로 변환하여 반환
    return time.toString().padStart(2, '0');
}

/**
 * 항상 다음 토요일 오후 8시를 출력하는 함수
 * @param currentDate
 */
export const getTargetDate = (currentDate: Date) => {
    let targetDate;

    if (currentDate.getDay() === 0 || (currentDate.getDay() === 6 && currentDate.getHours() >= 20)) {
        // 마감기간을 넘긴 경우, 다음주 토요일로 설정
        const nextSaturday = new Date(currentDate.getTime());
        nextSaturday.setDate(currentDate.getDate() + (6 - currentDate.getDay() + 7) % 7); // 다음주 토요일로 이동
        nextSaturday.setHours(20, 0, 0, 0); // 오후 8시로 설정
        targetDate = nextSaturday;
    } else {
        // 넘기지 않은 경우, 그 주 토요일로 설정
        const thisSaturday = new Date(currentDate.getTime());
        thisSaturday.setDate(currentDate.getDate() + (6 - currentDate.getDay())); // 이번 주 토요일로 이동
        thisSaturday.setHours(20, 0, 0, 0); // 오후 8시로 설정
        targetDate = thisSaturday;
    }

    return targetDate;
}

/**
 * <p>로또 배열을 받아 </p>
 * <p>특정 인덱스의 수가 0이면 겹치지 않는 하나의 랜덤 한 수를 반환시키는 함수</p>
 * <p>만약 0보다 큰 수면 0으로 반환 시켜준다.</p>
 * @param numbers 로또 배열
 * @param index 인덱스
 */
export const makeLuckyNumber = (numbers: number[], index: number) => {
    const targetNum = numbers[index];
    let unique = false;
    let randomNumber = 0; // 뽑은 숫자

    if (targetNum === 0) { // 0이면 추첨함
        while (!unique) {
            // 1~45 사이의 난수 생성
            randomNumber = random.int(1, 45);
            // 생성된 난수가 배열에 없으면 반복 종료
            if (!numbers.includes(randomNumber)) {
                unique = true;
            }
        }
        return randomNumber;
    } else { // 그 외의 경우는 0으로 만들어서 닫히게 함
        return 0;
    }
}

/**
 * 추첨 로또 배열을 받아 겹치치 않게 로또를 추첨하는 함수
 * 마지막엔 정렬해서 준다.
 * @param luckyLotto 추첨 로또 배열
 */
export const makeLottoNumber = (luckyLotto: number[]) => {
    const result: number[] = luckyLotto.filter(it => it > 0);
    const usedNumbers: Set<number> = new Set();
    result.map(it => usedNumbers.add(it));

    while (result.length < 6) {
        const randomNumber = random.int(1, 45);
        if (!usedNumbers.has(randomNumber)) {
            result.push(randomNumber);
            usedNumbers.add(randomNumber);
        }
    }

    return result.sort((a, b) => {
        return a - b;
    });
}

/**
 * 경고를 띄우는 함수
 */
export const popupDangerAlert = () => {
    const alertBox = document.getElementById('dangerAlert');
    if (!alertBox) return;
    alertBox.classList.remove('opacity-0');
    alertBox.classList.add('opacity-100');

    // 3초 후 알람 숨기기
    setTimeout(function () {
        alertBox.classList.remove('opacity-100');
        alertBox.classList.add('opacity-0');
    }, 2000);
}