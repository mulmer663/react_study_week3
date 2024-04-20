from datetime import datetime

# 기준 날짜와 회차 설정
base_date = datetime(2024, 4, 6, 22, 0)  # 2024년 4월 13일 오후 10시
base_episode = 1114  # 해당 날짜의 회차


def calculate_round():
    # 사용자 입력 날짜 파싱
    input_date = datetime.now()

    # 기준 날짜와 입력 날짜 사이의 차이 계산 (일 단위)
    delta = input_date - base_date

    # 입력 날짜가 기준 날짜 이후인지 이전인지에 따라 회차 계산
    if delta.days >= 0:
        # 차이를 주 단위로 변환하여 회차 계산
        weeks_delta = delta.days // 7
        episode = base_episode + weeks_delta
    else:
        # 차이를 주 단위로 변환하여 회차 계산 (음수 처리)
        weeks_delta = (delta.days - 6) // 7  # -6을 더해주어 올림 처리
        episode = base_episode + weeks_delta

    return episode
