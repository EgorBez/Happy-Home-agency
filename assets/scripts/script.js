//Пишем переменные, в которые записываем элементы для модальных окон
let selectRoomCloseButton = document.querySelector('.selectRoomForRent-closeButton');
let studioButton = document.querySelector('.studioForRent');
let bedroomButton = document.querySelector('.onebedroomForRent');
let twoBedroomButton = document.querySelector('.twobedroomForRent');
let houseButton = document.querySelector('.housesForRent');
let selectRoom = document.querySelector('.selectRoomForRent');
let rent = document.querySelector('.rent');
let sale = document.querySelector('.sale');
let selectRoomForSale = document.querySelector('.selectRoomForBuy');
let selectRoomForSaleClose = document.querySelector('.selectRoomForBuy-closeButton');
let secondHandButton = document.querySelector('.secondHand');
let newHouseButton = document.querySelector('.newHouse')
let hotDealButton = document.querySelector('#hotRent');
let selectTypeOfVenicle = document.querySelector('.selectTypeOfVenicle');
let carsButton = document.querySelector('.cars');
let bikesButton = document.querySelector('.bike');
let transferButton = document.querySelector('.transfer');
let venicleButton = document.querySelector('.auto');
let selectTypeOfVenicleCloseButton = document.querySelector('.selectTypeOfVenicle-closeButton');
let selectCar = document.querySelector('.carList');
let exchangeButton = document.querySelector('.exchange');
let partyInfo = document.querySelector('.partyInfo');
let partyInfoCloseButton = document.querySelector('.partyInfo-closeButton');
let partyInfoHeader = document.querySelector('.partyInfoHeader');
let partyButton = document.querySelector('.partys');
let documentButton = document.querySelector('.documentAuto');
let docSaleHouse = document.querySelector('.docSaleHouse');
let closeDocSaleHouse = document.querySelector('.closeDocSaleHouse');
let docSaleButton = document.querySelector('.saleHouse');
let contactUs =  document.querySelector('.contactUs');
let givebutton = document.querySelector('.giveButton');
let feedback  = document.querySelector('.feedback');
let submitButton = document.querySelector('.feedback__submit');
let inputName = document.querySelector('.feedback__putName');
let inputPhone = document.querySelector('.feedback__putNumber');
let feedbackForm = document.querySelector('.feedback__form');
let popupWindow = document.querySelector('.popupWindow');
let aquarous = document.querySelector('.aquarous');
let backAquarous = document.querySelector('.back-aqua');
let aquarousButton = document.querySelector('.more');
let santaMonica = document.querySelector('.santaMonica');
let backMonica = document.querySelector('.back-monica');
let santaMonicaButton = document.querySelector('.more2');
let feedbackButton = document.querySelector('.feedback__button');
let zenith = document.querySelector('.zenith');
let backZenith = document.querySelector('.back-zenith');
let zenithButton = document.querySelector('.more3');
let noble = document.querySelector('.grand-solaire-noble');
let backNoble = document.querySelector('.back-noble');
let nobleButton = document.querySelector('.more4');
let embassy = document.querySelector('.embassy');
let backEmbassy = document.querySelector('.back-embassy');
let embassyButton = document.querySelector('.more5');
let seaspire = document.querySelector('.seaspire');
let seaspireButton = document.querySelector('.more6');
let backSpire = document.querySelector('.back-spire');
let oasis = document.querySelector('.oasis');
let backOasis = document.querySelector('.back-oasis');
let oasisButton = document.querySelector('.more7');
let harmonia = document.querySelector('.harmonia');
let backHarmonia = document.querySelector('.back-harmonia');
let harmoniaButton = document.querySelector('.more8');
let carnival = document.querySelector('.carnival');
let carnivalButton = document.querySelector('.more9');
let backCarnival = document.querySelector('.back-carnival');
let solaire = document.querySelector('.solaire');
let backSolaire = document.querySelector('.back-solaire');
let solaireBtn = document.querySelector('.more10');
let pristine = document.querySelector('.pristine');
let backPristine = document.querySelector('.back-pristine');
let pristineBtn = document.querySelector('.more11');
let lucean = document.querySelector('.lucean');
let backLucean = document.querySelector('.back-lucean');
let luceanBtn = document.querySelector('.more12');
let reef = document.querySelector('.reef');
let backReef = document.querySelector('.back-reef');
let reefButton = document.querySelector('.more13');
let aromW = document.querySelector('.aromW');
let backAromW = document.querySelector('.back-aromW');
let aromWButton = document.querySelector('.more14');
let aromJ = document.querySelector('.aromJ');
let backAromJ = document.querySelector('.back-aromJ');
let aromJButton = document.querySelector('.more15');
let photos = document.querySelectorAll('.photo');
let california = document.querySelector('.calif');
let californiaButton = document.querySelector('.mor');
let back = document.querySelector('.back');
let backCalif = document.querySelector('.back-calif');
let beverlyHill = document.querySelector('.beverly-hill');
let backHill = document.querySelector('.back-hill');
let hillButton = document.querySelector('.more17');
let secondHouseWindow = document.querySelector('.second-house-window');
let backSecondHouse = document.querySelector('.second-house-back ');
let secondHouseButton = document.querySelector('.secondHand');
let maldivesStudio = document.querySelector('.maldives-studio');
let backMaldivesStudio = document.querySelector('.maldives-back');
let maldivesStudioButton = document.querySelector('.more20');
let maldivesBedroom = document.querySelector('.maldives-bedroom');
let backMaldivesBedroom = document.querySelector('.maldives-bedroom-back');
let maldivesBedroomButton = document.querySelector('.more21');
let coteDAzur = document.querySelector('.coteDAzur');
let coteDAzurButton = document.querySelector('.more22');
let backCoteDAzur = document.querySelector('.coteDAzur-back');
let atlantis = document.querySelector('.atlantis');
let backAtlantis = document.querySelector('.atlantis-back');
let atlantisButton = document.querySelector('.more23');
let cloud = document.querySelector('.cloud');
let backCloud = document.querySelector('.cloud-back');
let cloudButton = document.querySelector('.more24');
let jewel = document.querySelector('.jewel');
let backJewel = document.querySelector('.jewel-back');
let jewelButton = document.querySelector('.more25');
let privacy = document.querySelector('.privacy');
let backPrivacy = document.querySelector('.privacy-back');
let privacyButton = document.querySelector('.more26');
let marcusVip5 = document.querySelector('.marcus-vip5');
let backMarcusVip5 = document.querySelector('.marcus-vip5-back');
let marcusVip5Button = document.querySelector('.more27');
let notPresentPaymentButton = document.querySelector('.not-present-payment');
let notPresentPaymentWindow = document.querySelector('.not-present-payment-window');
let notPresentPaymentBack = document.querySelector('.not-present-payment-back');
let peakTower = document.querySelector('.peak-tower');
let peakTowerButton = document.querySelector('.mo28');
let peakTowerBack = document.querySelector('.back-peak');
let grandCarribean = document.querySelector('.caribean');
let grandCarribeanButton = document.querySelector('.mo29');
let grandCarribeanBack = document.querySelector('.back-caribean');
let lagunaThree = document.querySelector('.laguna-three');
let lagunaThreeButton = document.querySelector('.mo30');
let lagunaThreeBack = document.querySelector('.back-laguna-three');
// Пишем функции для открытия и закрытия модальных окон выбора недвижимости


function openSelectRoom(){
    selectRoom.style.display = 'block';
    }

    function openSelectBuy(){
        selectRoomForSale.style.display = 'block';
    }
    
    function closeSelectBuy(){
        selectRoomForSale.style.display = 'none';
    }
    
    selectRoomForSaleClose.addEventListener('click', closeSelectBuy);
    

    sale.addEventListener('click', openSelectBuy);

    function openPopupWindow(){
        popupWindow.style.display = 'block';
    }
    
    function closePopupWindoww(){
        popupWindow.style.display = 'none';
    }
    
    newHouseButton.addEventListener('click' ,openPopupWindow);
    newHouseButton.addEventListener('click', closeSelectBuy);
    back.addEventListener('click', closePopupWindoww);
    back.addEventListener('click', openSelectBuy);

    function openSecondHouse(){
        secondHouseWindow.style.display = 'block';
    }

    function closeSecondHouse(){
        secondHouseWindow.style.display = 'none';
    }

    secondHouseButton.addEventListener('click', openSecondHouse);
    secondHouseButton.addEventListener('click', closeSelectBuy);
    backSecondHouse.addEventListener('click', closeSecondHouse);
    backSecondHouse.addEventListener('click', openSelectBuy);

    function openNotPresentPayment(){
        notPresentPaymentWindow.style.display = 'block';
    }

    function closeNotPresentPayment(){
        notPresentPaymentWindow.style.display = 'none';
    }

    notPresentPaymentButton.addEventListener('click', openNotPresentPayment);
    notPresentPaymentButton.addEventListener('click', closeSelectBuy);
    notPresentPaymentBack.addEventListener('click', closeNotPresentPayment);
    notPresentPaymentBack.addEventListener('click', openSelectBuy);


    function openSelectTypeOfVenicle(){
        selectTypeOfVenicle.classList.add('selectTypeOfVenicle-opened');
    }
    function closeSelectTypeOfVenicle(){
        selectTypeOfVenicle.classList.remove('selectTypeOfVenicle-opened');
    }
    
    venicleButton.addEventListener('click', openSelectTypeOfVenicle);
    selectTypeOfVenicleCloseButton.addEventListener('click', closeSelectTypeOfVenicle);

    function openSelectCar(){
        selectCar.classList.add('carList-opened');
        contactUs.style.display = 'none';
    }
    function closeSelectCar(){
        selectCar.classList.remove('carList-opened');
        contactUs.style.display = 'block';
    }
    carsButton.addEventListener('click', openSelectCar);
    
    
    function openSelectMotorbike(){
        selectMotorbike.classList.add('motorbikeList-opened');
        contactUs.style.display = 'none';
    }
    function closeSelectMotorbike(){
        selectMotorbike.classList.remove('motorbikeList-opened');
        contactUs.style.display = 'block';
    }
    bikesButton.addEventListener('click', openSelectMotorbike);
    
    function openSelectTransfer(){
        selectTransfer.classList.add('transferList-opened');
        contactUs.style.display = 'none';
    }
    function closeSelectTransfer(){
        selectTransfer.classList.remove('transferList-opened');
        contactUs.style.display = 'block';
    }
    transferButton.addEventListener('click', openSelectTransfer);
    
    function openPartyInfo(){
        partyInfo.classList.add('partyInfo-opened');
    }
    
    function closePartyInfo(){
        partyInfo.classList.remove('partyInfo-opened');
    }
    
    partyButton.addEventListener('click', openPartyInfo);
    partyInfoCloseButton.addEventListener('click', closePartyInfo);
    
    function openSelectStudio(){
        selectStudio.classList.add('selectStudioForRent-opened');
        contactUs.style.display = 'none';
    }
    
    function closeSelectStudio(){
        selectStudio.classList.remove('selectStudioForRent-opened');
        contactUs.style.display = 'block';
    }
    
    studioButton.addEventListener('click', openSelectStudio);
    
    
    function openSelectOneBedroom(){
        selectOneBedroom.classList.add('selectOneBedroomForRent-opened');
        contactUs.style.display = 'none';
    }
    
    function closeSelectOneBedroom(){
        selectOneBedroom.classList.remove('selectOneBedroomForRent-opened');
        contactUs.style.display = 'block';
    }
    
    bedroomButton.addEventListener('click', openSelectOneBedroom);
    
    function selectTwoBedroomOpen(){
        selectTwoBedroom.classList.add('selectTwoBedroomForRent-opened');
        contactUs.style.display = 'none';
    }

    function selectTwoBedroomClose(){
        selectTwoBedroom.classList.remove('selectTwoBedroomForRent-opened');
        contactUs.style.display = 'block';
    
    }
    
    twoBedroomButton.addEventListener('click', selectTwoBedroomOpen);
    

    //Начало написания логики для контейнеров с жильем для ипотеки - the beginning of writing logic for ipoteka rooms div

    function openPeakTower(){
        peakTower.style.display = 'block';
    }

    function closePeakTower(){
        peakTower.style.display = 'none';
    }

    peakTowerButton.addEventListener('click', openPeakTower);
    peakTowerBack.addEventListener('click', closePeakTower);

    function openCaribean(){
        grandCarribean.style.display = 'block';
    }

    function closeCaribean(){
        grandCarribean.style.display = 'none';
    }

    grandCarribeanButton.addEventListener('click', openCaribean);
    grandCarribeanBack.addEventListener('click', closeCaribean);

    function openLaguna(){
        lagunaThree.style.display = 'block';
    }

    function closeLaguna(){
        lagunaThree.style.display = 'none';
    }

    lagunaThreeButton.addEventListener('click', openLaguna);
    lagunaThreeBack.addEventListener('click', closeLaguna);

    //Начало написания логики для контейнеров со вторичным жильем - The beginning of writing logic for live home div

    function openMaldivesStudio(){
        maldivesStudio.style.display = 'block';
    }

    function closeMaldivesStudio(){
        maldivesStudio.style.display = 'none';
    }

    maldivesStudioButton.addEventListener('click', openMaldivesStudio);
    backMaldivesStudio.addEventListener('click', closeMaldivesStudio);

    function openMaldivesBedroom(){
        maldivesBedroom.style.display = 'block';
    }

    function closeMaldivesBedroom(){
        maldivesBedroom.style.display = 'none';
    }

    maldivesBedroomButton.addEventListener('click', openMaldivesBedroom);
    backMaldivesBedroom.addEventListener('click', closeMaldivesBedroom);

    function openAzur(){
        coteDAzur.style.display = 'block';
    };

    function closeAzur(){
        coteDAzur.style.display = 'none';
    };

    coteDAzurButton.addEventListener('click', openAzur);
    backCoteDAzur.addEventListener('click', closeAzur);

    function openAtlantis(){
        atlantis.style.display = 'block';
    }

    function closeAtlantis(){
        atlantis.style.display = 'none';
    }

    atlantisButton.addEventListener('click', openAtlantis);
    backAtlantis.addEventListener('click', closeAtlantis);

    function openCloud(){
        cloud.style.display = 'block';
    }

    function closeCloud(){
        cloud.style.display = 'none';
    }

    cloudButton.addEventListener('click', openCloud);
    backCloud.addEventListener('click', closeCloud);

    function openJewel(){
        jewel.style.display = 'block';
    }

    function closeJewel(){
        jewel.style.display = 'none';
    }

    jewelButton.addEventListener('click', openJewel);
    backJewel.addEventListener('click', closeJewel);

    function openPrivacy(){
        privacy.style.display = 'block';
    }

    function closePrivacy(){
        privacy.style.display = 'none';
    }

    privacyButton.addEventListener('click', openPrivacy);
    backPrivacy.addEventListener('click', closePrivacy);

    function openMarcusVip5(){
        marcusVip5.style.display = 'block';
    }

    function closeMarcusVip5(){
        marcusVip5.style.display = 'none';
    }

    marcusVip5Button.addEventListener('click', openMarcusVip5);
    backMarcusVip5.addEventListener('click', closeMarcusVip5);

    function closeSelectRoom(){
        selectRoom.style.display = 'none';
    }
    
    function openDocSale(){
        docSaleHouse.style.display = 'flex';
    }
    
    function closeDocSale(){
        docSaleHouse.style.display = 'none';
    };
    
    docSaleButton.addEventListener('click', openDocSale);
     closeDocSaleHouse.addEventListener('click', closeDocSale);
    
    function openfeedbackWindow(){
         inputName.value = '';
        inputPhone.value = '';
        feedback.style.display = 'block';
    }
    function closeFeedbackWindow(){
        feedback.style.display = 'none'
    }
    givebutton.addEventListener('click', openfeedbackWindow);
    feedbackButton.addEventListener('click', closeFeedbackWindow);

    // Начало логики с отправлением заявки в tg бота - The logic start of sending information to telegram bot
    
    feedbackForm.addEventListener('submit', async function(event){
        event.preventDefault();
        let name =  inputName.value;
        let phone = inputPhone.value;
        const chatId = '6877171005';
        const message = ` name : ${name}, phone : ${phone}`;
        const response = await fetch('https://api.telegram.org/bot7035616413:AAHEDS9xbe34O21bE3nyYJRt7vXYTk2yqbo/sendMessage', {
            method : 'POST', 
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                chat_id : chatId,
                text : message
            })
        });
        if(response.ok){
            console.log('data send to telegram');
        } else {
            console.log('failed to send data');
        }
    })
    
    submitButton.addEventListener('click' , function(){
        closeFeedbackWindow();
    });
    
    rent.addEventListener('click', openSelectRoom);
    selectRoomCloseButton.addEventListener('click', closeSelectRoom);

function openAquarous(){
    aquarous.style.display = 'block';
};

function closeAquarous(){
    aquarous.style.display = 'none';
};

aquarousButton.addEventListener('click', openAquarous);
backAquarous.addEventListener('click', closeAquarous);

function openSantaMonica(){
    santaMonica.style.display = 'block';
};

function closeSantaMonica(){
    santaMonica.style.display = 'none';
};

santaMonicaButton.addEventListener('click', openSantaMonica);
backMonica.addEventListener('click', closeSantaMonica);

function openZenith(){
    zenith.style.display = 'block';
};

function closeZenith(){

    zenith.style.display = 'none';
};

zenithButton.addEventListener('click', openZenith);
backZenith.addEventListener('click', closeZenith);

function openNoble(){
    noble.style.display = 'block';
};

function closeNoble(){
    noble.style.display = 'none';
};

nobleButton.addEventListener('click', openNoble);
backNoble.addEventListener('click', closeNoble);

function openEmbassy(){
    embassy.style.display = 'block';
};

function closeEmbassy(){
    embassy.style.display = 'none';
};

embassyButton.addEventListener('click', openEmbassy);
backEmbassy.addEventListener('click', closeEmbassy);

function openSpire(){
    seaspire.style.display = 'block';
};

function closeSpire(){
    seaspire.style.display = 'none';
};

seaspireButton.addEventListener('click', openSpire);
backSpire.addEventListener('click', closeSpire);

function openOasis(){
    oasis.style.display = 'block';
};

function closeOasis(){
    oasis.style.display = 'none';
};

oasisButton.addEventListener('click', openOasis);
backOasis.addEventListener('click', closeOasis);

function openHarmonia(){
    harmonia.style.display = 'block';
};

function closeHarmonia(){
    harmonia.style.display = 'none';
};

harmoniaButton.addEventListener('click', openHarmonia);
backHarmonia.addEventListener('click', closeHarmonia);

function openCarnival(){
    carnival.style.display = 'block';
};

function closeCarnival(){
    carnival.style.display  = 'none';
};

carnivalButton.addEventListener('click', openCarnival);
backCarnival.addEventListener('click', closeCarnival);

function openSolaire(){
    solaire.style.display = 'block';
};

function closeSolaire(){
    solaire.style.display = 'none';
};

backSolaire.addEventListener('click', closeSolaire);
solaireBtn.addEventListener('click', openSolaire);

function openPristine(){
    pristine.style.display = 'block';
};

function closePristine(){
    pristine.style.display = 'none';
};

pristineBtn.addEventListener('click', openPristine);
backPristine.addEventListener('click', closePristine);

function openLucean(){
    lucean.style.display = 'block';
};

function closeLucean(){
    lucean.style.display = 'none';
};

backLucean.addEventListener('click', closeLucean);
luceanBtn.addEventListener('click', openLucean);

function openReef(){
    reef.style.display = 'block';
};

function closeReef(){
    reef.style.display = 'none';
};

reefButton.addEventListener('click', openReef);
backReef.addEventListener('click', closeReef);

function openedA(){
    california.style.display = 'block';
};

function closedA(){
    california.style.display = 'none';
};

californiaButton.addEventListener('click', openedA);
backCalif.addEventListener('click', closedA);

function openAromW(){
    aromW.style.display = 'block';
};

function closeAromW(){
    aromW.style.display = 'none';
};

aromWButton.addEventListener('click', openAromW);
backAromW.addEventListener('click', closeAromW);

function openAromJ(){
    aromJ.style.display = 'block';
};

function closeAromJ(){
    aromJ.style.display = 'none';
};

aromJButton.addEventListener('click', openAromJ);
backAromJ.addEventListener('click', closeAromJ);

function openBeverlyHill(){
    beverlyHill.style.display = 'block';
}

function closeBeverlyHill(){
    beverlyHill.style.display = 'none';
}

hillButton.addEventListener('click', openBeverlyHill);
backHill.addEventListener('click', closeBeverlyHill);

// Начало написания логики открывания картинки на весь экран - 

document.addEventListener('DOMContentLoaded', function(){
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('fullscreen-img');
    const closeModal = document.querySelector('.close-modal');
    const photos = document.querySelectorAll('.photo');

    photos.forEach((photo)=>{
    photo.addEventListener('click', function(){
        modal.style.display = 'flex';
        modalImg.src = this.src;
        });
    });

    closeModal.addEventListener('click', function(){
        modal.style.display = 'none';
    });
    
    modal.addEventListener('click', function(e){
        if(e.target === modal){
            modal.style.display = 'none';
        }
    });
    
    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            modal.style.display = 'none';
        }
    });
});
