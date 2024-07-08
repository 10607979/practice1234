// 함수: 랜덤한 번호(1에서 45 사이)를 반환하는 함수
function getRandomNumber() {
    return Math.floor(Math.random() * 45) + 1;
}

// 함수: 6개의 로또 번호를 추첨하고 SweetAlert2로 결과를 보여주는 함수
function generateLottoNumbers() {
    var numbers = [];

    // 6개의 서로 다른 랜덤 번호 생성
    while (numbers.length < 6) {
        var randomNumber = getRandomNumber();

        // 중복된 번호가 없도록 확인
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    // SweetAlert2로 추첨된 번호들을 보여줌
    Swal.fire({
        title: '추첨 결과',
        html: `
            <div class="flex flex-wrap justify-center items-center">
                ${numbers.map(number => `<span class="bg-yellow-500 text-white font-bold text-2xl rounded-full h-16 w-16 flex justify-center items-center m-2">${number}</span>`).join('')}
            </div>
        `,
        showConfirmButton: false,
        customClass: {
            container: 'p-4',
            popup: 'bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg',
            title: 'text-3xl font-bold mb-4 text-center text-gray-800',
            htmlContainer: 'text-center',
        }
    });
}

// 번호 추첨하기 버튼에 클릭 이벤트 연결
var generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", generateLottoNumbers);
