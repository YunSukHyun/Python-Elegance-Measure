## 1. 프로젝트 소개
### 1.1. 프로젝트명

본 프로젝트의 명칭은 Python Elegance Measure(이하 PEM)입니다.

### 1.2. 프로젝트 개요

PEM은 한 문항에 대해 제출된 파이썬으로 작성된 과제물 코드들을 코드 집단 내에서 상대적인 '우아함'을 판단합니다.

PEM에서의 '우아함'이란, 얼마나 읽기 쉽고 유지보수하기 용이한지, 복잡도를 고려했는지를 뜻합니다.

PEM을 사용해 볼 수 있는 웹 서비스 또한 제공하고 있습니다.

자세한 내용은 [사용법](https://github.com/ParkInoh/Capstone-2022-1-22/blob/main/README.md#5-%EC%82%AC%EC%9A%A9%EB%B2%95)을 확인해주세요.

## 2. 팀소개

박인오, inohzzang@pusan.ac.kr, 개발 총괄, 상대적 우아함 산출 알고리즘 작성

이범수, dlqjatn2@gmail.com, 파이썬 소스코드 파싱 알고리즘 작성

윤석현, czcz9207@naver.com, 프론트엔드-백엔드 개발

## 3. 시스템 구성도

프로젝트의 시스템 구성도는 그림과 같습니다.

![시스템 구성도](https://user-images.githubusercontent.com/37135287/195737936-93679299-aa98-413a-8e7c-3a1aa5828ba9.png)

## 4. 프로젝트 소개 영상

[![부산대학교 정보컴퓨터공학부 소개](http://img.youtube.com/vi/zh_gQ_lmLqE/0.jpg)](https://youtu.be/zh_gQ_lmLqE)

## 5. 사용법

서비스 중인 웹사이트는 [링크](https://pythonelegance.herokuapp.com/)에서 확인해주세요.

코드들을 드래그 앤 드롭하거나, 업로드 버튼을 클릭하여 파일들을 업로드할 파일들을 선택할 수 있습니다.

업로드 버튼 하단의 코드 제출 버튼을 클릭하여 업로드 및 결과를 확인할 수 있습니다.

'우아함'은 score로 표현되며, 점수가 높을수록 잘 작성된 코드로 판단합니다.

score를 제외한 척도들은 수치가 낮을수록 잘 작성된 코드로 판단합니다.

## 6. 라이브러리

* [dabeaz](https://github.com/dabeaz) - [PLY - Python Lex-Yacc](https://github.com/dabeaz/ply): 소스코드 구조 분석에 사용됨

* [PyCQA](https://github.com/PyCQA) - [Flake8](https://github.com/PyCQA/flake8): PEP 8 위반 확인에 사용됨
