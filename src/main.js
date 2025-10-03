const listNumber = [];

function handleAddNumber() {
    const number = document.getElementById("array").value * 1;
    listNumber.push(number);
    document.getElementById("total").innerHTML = listNumber.join(", ");
}

/**
 * Bài 1 - Tổng các số dương trong mảng
 */

function handleTongCacSoDuong() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập phần tử")
        return
    }

    // logic
    let positive = 0;

    // duyệt mảng listNumber từ i = 0 => i = length - 1
    for (let i = 0; i < listNumber.length; i++) {
        // Lấy từng phần tử trong mảng gán cho biến number
        const number = listNumber[i];
        if (number > 0) {
            positive += number; 
        }
    }
    const rs = positive
    document.getElementById("KQ_1").innerHTML = rs;
}

/**
 * Bài 2 - Đếm có bao nhiêu số trong mảng
 */

function handleDemSo() {
    document.getElementById("KQ_2").innerHTML = listNumber.length
}


/**
 * Bài 3 - Tìm số nhỏ nhất trong mảng
 */
function handleSoNhoNhat() {
    let smallest_number = listNumber[0];
    
    for (let i = 1; i < listNumber.length; i++) {
        const number = listNumber[i];
        if (number < smallest_number) {
            smallest_number = number;
        }
    }
    const rs_2 = smallest_number;
    document.getElementById("KQ_3").innerHTML = rs_2;
}


/**
 * Bài 4 - Tìm số dương nhỏ nhất trong mảng
 */
function handleSoDuongNhoNhat() {
    let smallest_positive_number = listNumber[0];

    for (let i = 1; i < listNumber.length; i++) {
        const number = listNumber[i];
        if (number > 0 && number < smallest_positive_number) {
            smallest_positive_number = number
        }
    }
    const rs_3 = smallest_positive_number;
    document.getElementById("KQ_4").innerHTML = rs_3
}


/**
 * Bài 5 - Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1
 */
function handleSoChanCuoi() {
    let last_even_number = -1;

    for (let i = 0; i < listNumber.length; i++) {
        const number = listNumber[i]
        if (number % 2 === 0) {
            last_even_number = number;
        }
    }
    const rs_4 = last_even_number;
    document.getElementById("KQ_5").innerHTML = rs_4
}


/**
 * Bài 6 - Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
 */
function handleDoiCho() {
    let num_1 = document.getElementById("num_1").value * 1;
    let num_2 = document.getElementById("num_2").value * 1;

    if (num_1 < 0 || num_1 >= listNumber.length || num_2 < 0 || num_2 >= listNumber.length) {
        return document.getElementById("KQ_6").innerHTML = "Vị trí không hợp lệ!";
    }

    let copy_listNumber = [...listNumber]

    let temp = copy_listNumber[num_1];
    copy_listNumber[num_1] = copy_listNumber[num_2];
    copy_listNumber[num_2] = temp;



    document.getElementById("KQ_6").innerHTML = copy_listNumber.join(", ")
}


/**
 * Bài 7 - Sắp xếp mảng theo thứ tự tăng dần.
 */
function handleSapXepTang() {
    let copy_listNumber = [...listNumber]

    for (let i = 0; i < copy_listNumber.length - 1; i++) {
        for (let j = i +1; j < copy_listNumber.length; j++) {
            if (copy_listNumber[i] > copy_listNumber[j]) {
                // Hoán 2 phần tử
                let temp = copy_listNumber[i]
                copy_listNumber[i] = copy_listNumber[j]
                copy_listNumber[j] = temp
            }
        }
    }
    const rs_5 = copy_listNumber;
    document.getElementById("KQ_7").innerHTML = rs_5.join(", ");
}


/**
 * Bài 8 - Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
 */
function handlePrimeNumber() {
    let prime_number = -1;
    for (let i = 0; i < listNumber.length; i++) {
        let n = listNumber[i]
        let prime = "";
        if (n > 1) {
            prime = true;
            for (let j = 2; j <= Math.sqrt(n); j++) {
                if (n % j === 0) {
                    prime = false;
                    break;
                }    
            }

            if (prime) {
                prime_number = n
                break;
            }
        }     
    }
    const rs_6 = prime_number;
    document.getElementById("KQ_8").innerHTML = rs_6
}


/**
 * Bài 9 - Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
 */
const listNumber_2 = []
function handleAddNumber_2 () {
    const number = document.getElementById("array_2").value * 1;

    // Thêm value vào array
    listNumber_2.push(number);

    document.getElementById("total_2").innerHTML = listNumber_2.join(", ");
}

function handleDemSoNguyen () {
    let count = 0;
    for (let i = 0; i < listNumber_2.length; i++) {
        if (listNumber_2[i] % 1 === 0) {
            count++;
        }
    }
    let rs_7 = count;
    document.getElementById("KQ_9").innerHTML = rs_7;
}


/**
 * Bài 10 - So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
 */
function comparePositiveNegative() {
    let copy_listNumber = [...listNumber]
    let positive = 0;
    let negative = 0;

    for (let i = 0; i < copy_listNumber.length; i++) {
        if (copy_listNumber[i] > 0) {
                positive++;
            } else if (copy_listNumber[i] < 0) {
                negative++;
            } else {
                continue;
            }  
        }

    let number = "";

    if (positive > negative) {
        number = "Số dương nhiều hơn số âm"
    } else if (positive < negative) {
        number = "Số dương ít hơn số âm"
    } else {
        number = "Số dương và số âm bằng nhau"
    }

    let rs_8 = number;
    document.getElementById("KQ_10").innerHTML = rs_8;
}