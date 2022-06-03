$(window).on("load", function () {
  $('.c-slider__list').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    arrows: false,
  });

  $('.c-hero__list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerPadding: '0',
    centerMode: true,
    variableWidth: true,
    arrows: true,
    autoplay: true,
    prevArrow: "<button type='button' class='c-hero__btnLeft'><figure><img src='./assets/images/hero/arrowLeft.png' alt='arrowLeft'></figure></button>",
    nextArrow: "<button type='button' class='c-hero__btnRight'><figure><img src='./assets/images/hero/arrowRight.png' alt='arrowRight'></figure></button>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        }
      }
    ]
  });
});

// VALIDATE FORM
var form = document.contactForm;
var isValid = false;
var isUsername = false;
var isPhonenumber = false;
var isEmail = false;
var isComment = false;


function handleInput(inputName) {
  var errorElement = document.querySelector('#' + inputName + ' + span');

  if (form[inputName].value === "" && inputName === "username") {
    errorElement.innerText = "『氏名』を入力してください。";
    isUsername = false;
  } else if (form[inputName].value !== "" && inputName === "username") {
    errorElement.innerText = "";
    isUsername = true;
  };
  if (form[inputName].value === "" && inputName === "phoneNumber") {
    errorElement.innerText = "『電話番号』を入力してください。";
    isPhonenumber = false;
  } else if (form[inputName].value !== "" && inputName === "phoneNumber") {
    errorElement.innerText = "";
    isPhonenumber = true;
  };
  if (form[inputName].value === "" && inputName === "email") {
    errorElement.innerText = "『メールアドレス』を入力してください。";
    isEmail = false;
  } else if (form[inputName].value !== "" && inputName === "email") {
    errorElement.innerText = "";
    isEmail = true;
  };
  if (form[inputName].value === "" && inputName === "comment") {
    errorElement.innerText = "『お問い合わせ内容』を入力してください。";
    isComment = false;
  } else if (form[inputName].value !== "" && inputName === "comment") {
    errorElement.innerText = "";
    isComment = true;
  };

  isValid = isUsername && isPhonenumber && isEmail && isComment;
}

function handleSubmit() {
  if (!isValid) {
    alert("入力内容を確認してください。!")
    document.querySelector(".c-contactForm__formError").classList.add("is-actived");
    document.querySelector("#contactForm").scrollIntoView();
    return false;
  } else {
    document.querySelector(".c-contactForm__formError").classList.remove("is-actived");
    return true;

  }
}

