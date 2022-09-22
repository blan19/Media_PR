# Media_PR

미디어 컨텐츠 웹개발 전공 시간에 React에서 3D 웹 개발에 대한 주제로 발표를 하기 위해 만들었습니다.
섹션을 총 4개로 구성되어 있으며, 웹을 이용한 발표로 발표 시간에 직접 체험해볼 수 있도록 구성하였습니다.

## 사용 스택 

<img src="https://img.shields.io/badge/Next.JS-000000?style=for-the-badge&logo=Next.js&logoColor=white">

<img src="https://img.shields.io/badge/threejs-fff?style=for-the-badge&logo=threejs&logoColor=white">

<img src="https://img.shields.io/badge/Ably-fff?style=for-the-badge&logo=ably&logoColor=white">

next.js에선 realtime chat으로 socket.io를 비추천하여, 괜찮은 api와 프리티어를 가지고 있는 ably를 선택하고 realtime chat을 구성했습니다.
Q&A 섹션에서 활발한 질의응답을 위해 익명 처리와 함께 3D chat을 구성했습니다

## 섹션

### ✔Main

![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/66871265/191723163-2314d4f0-acab-4042-a878-f9100701c82f.gif)

메인페이지에서 마우스로 드래그하며 이동할 페이지를 클릭해 이동

### ✔발표 섹션
![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/66871265/191723471-166fd090-5941-40e8-b995-6655f6d88176.gif)


### ✔Q&A
![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/66871265/191723353-7201c6cb-c5fe-4c8f-9db9-c2649e91e82a.gif)

Ably를 사용한 Realtime Chat

## Etc

Canvas 내에 있는 메쉬를 통해 router가 불가능하여 임시방편으로 SPA를 위한 History API 대신 location href를 사용하여 직접 페이지를 이동하도록 설정하였습니다.

하지만, 메인페이지에서 각 메쉬마다 제대로 routing을 인식하지 못하여 Q&A 페이지를 클릭하였으나 다른 페이지로 넘어가는 버그가 아진 존재하여 추후 다른 프로젝트에 메쉬에 routing 기능을 추가하여야 할 때, 이 부분을 조심해 location Href 대신 사용할 방법을 적용해야 할 것 같습니다.