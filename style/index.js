
const countButton = document.getElementById('addLove');
const allButton = document.querySelectorAll('.heart_icon');
let count = 0;
for (const element of allButton) {
    element.addEventListener('click', function () {
        count++;
        countButton.innerText = count;
    })
};
function coinFunction(val_1,val_2) {
    reduceCoin = 20;
    const ballance = document.getElementById('coin_ballance');
    const ballance1 = ballance.innerText
    let coin = parseInt(ballance1);

    if (coin < reduceCoin) {
        alert('stop');
        return;
    }
    const data1 = document.getElementById(val_1);
    const data2 = data1.innerText;
    const data3 = document.getElementById(val_2);
    const data4 = data3.innerText;
    const result = data2 + ' ' + data4;
    coin -= reduceCoin;
    ballance.textContent = coin;
    alert(`${result}`)
}
const National = document.getElementById('call_icon_1');
National.addEventListener('click', function () {
    coinFunction('National_Emergency', 'Emergency_Number');
});
const Police = document.getElementById('call_icon_2');
Police.addEventListener('click', function () {

    coinFunction('Police_Helpline', 'Helpline_Number');
});
const Fire = document.getElementById('call_icon_3');
Fire.addEventListener('click', function () {
    coinFunction('Fire_Service', 'Service_Number');
});
const Ambulance = document.getElementById('call_icon_4');
Ambulance.addEventListener('click', function () {
    coinFunction('Ambulance_Service', 'Ambulance_Service_Number');
});
const Women = document.getElementById('call_icon_5');
Women.addEventListener('click', function () {
    coinFunction('Women_Child', 'Women_Child_Number')
});
const corruption = document.getElementById('call_icon_6');
corruption.addEventListener('click', function () {
    coinFunction('Corruption_1', 'Corruption_Number')
});
const Electricity = document.getElementById('call_icon_7');
Electricity.addEventListener('click', function () {
    coinFunction('Electricity_Helpline', 'Electricity_Helpline_Number');
});
const bra_Helpline = document.getElementById('call_icon_8');
bra_Helpline.addEventListener('click', function () {
    coinFunction('Bra_Helpline', 'Helpline_Number')
});
const Bangladesh = document.getElementById('call_icon_9');
Bangladesh.addEventListener('click', function () {
    coinFunction('Bangladesh_Railway', 'Railway_Helpline');
});

