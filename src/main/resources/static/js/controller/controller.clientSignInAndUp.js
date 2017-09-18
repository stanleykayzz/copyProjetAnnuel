/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.controller.clientSignInAndUp = Core.controller.clientSignInAndUp || {};

    /**
     * Init the different controller
     */
    Core.controller.clientSignInAndUp.initView = function () {
        controller.clientSignInAndUp.signin();
        controller.clientSignInAndUp.signup();
        controller.clientSignInAndUp.forgetPassword();
    };

    /**
     * Init the events for the singin view
     */
    Core.controller.clientSignInAndUp.signin = function () {
        var loginBtn;
        var showSingupBtn, showforgetpasswordBtn;
        var loginContainer, signupContainer, forgerpasswordContainer;
        var captchaElement;

        var iniVariables = function () {
            loginBtn = document.getElementById("btn_login");

            showSingupBtn = document.getElementById("show_signup");
            showforgetpasswordBtn = document.getElementById("show_forgetpassword");

            loginContainer = document.getElementById("loginbox");
            signupContainer = document.getElementById("signupBox");
            forgerpasswordContainer = document.getElementById("forgetpasswordBox");

            captchaElement = document.getElementById("captchaID");
        }();
        var showViewEvents = function () {
            utils.addListener(showSingupBtn, "click", function () {
                document.getElementById("error_container").textContent = "";
                loginContainer.style.display = "none";
                signupContainer.style.display = "inline-block";
                utils.captcha(captchaElement);
            }, false);

            utils.addListener(showforgetpasswordBtn, "click", function () {
                document.getElementById("error_container").textContent = "";
                loginContainer.style.display = "none";
                forgerpasswordContainer.style.display = "inline-block";
            }, false);
        }();
        var requestEvent = function () {
            utils.addListener(loginBtn, "click", function () {
                var email = document.getElementById("emailBtn").value;
                var password = document.getElementById("passwordBtn").value;

                Core.class.client.login(email, password);
            }, false);
        }();
    };

    /**
     * Init the events for the signup view
     */
    Core.controller.clientSignInAndUp.signup = function () {
        var signupBtn;
        var showLoginBtn;
        var loginContainer, signupContainer;
        var captchaElement;
        var style = null;

        var iniVariables = function () {
            signupBtn = document.getElementById("btn_signup");
            showLoginBtn = document.getElementById("show_login");

            loginContainer = document.getElementById("loginbox");
            signupContainer = document.getElementById("signupBox");

            captchaElement = document.getElementById("captchaID");
        }();
        var initYear = function () {
            var monthElement = document.getElementById("signup_date_year");
            var minYear = 1900;
            var date = new Date();
            var length = date.getFullYear() - minYear + 1;

            for (var i = 0; i < length; i++) {
                var option = document.createElement("option");
                option.value = date.getFullYear() - i;
                option.textContent = date.getFullYear() - i;

                monthElement.appendChild(option);
            }
        }();
        var showViewEvents = function () {
            utils.addListener(showLoginBtn, "click", function () {
                document.getElementById("error_container").textContent = "";
                signupContainer.style.display = "none";
                loginContainer.style.display = "inline-block";
            }, false);
        }();
        var requestEvents = function () {
            utils.addListener(signupBtn, "click", function () {
                var client, firstname, lastname, sexe, female, male, email,
                    password_1, password_2, day, month, year, birthday, phone,
                    country, city, address, postalcode;

                var captchaInput = document.getElementById("captcha_value");
                var formValid, sexeValid;

                var initVariables = function () {
                    firstname = document.getElementById("signup_name");
                    lastname = document.getElementById("signup_firstname");
                    female = document.getElementById("signup_sexe_female");
                    male = document.getElementById("signup_sexe_male");
                    email = document.getElementById("signup_email");
                    password_1 = document.getElementById("signup_password");
                    password_2 = document.getElementById("signup_password2");
                    day = document.getElementById("signup_date_day");
                    month = document.getElementById("signup_date_month");
                    year = document.getElementById("signup_date_year");
                    phone = document.getElementById("signup_phone");
                    country = document.getElementById("signup_country");
                    city = document.getElementById("signup_city");
                    address = document.getElementById("signup_address");
                    postalcode = document.getElementById("signup_postalcode");

                    if (style === null)
                        style = firstname.style.border;
                }();

                var checkSexe = function () {
                    if (female.checked == false && male.checked == false) {
                        female.style.border = "1px solid red";
                        male.style.border = "1px solid red";
                        sexeValid = false;
                    } else {
                        if (female.checked == true) {
                            sexe = 1;
                            sexeValid = true;
                        } else if (male.checked == true) {
                            sexe = 0;
                            sexeValid = true;
                        }
                    }
                }();

                formValid = utils.form.formValidator({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password_1,
                    password_2: password_2,
                    day: day,
                    month: month,
                    year: year,
                    phone: phone,
                    country: country,
                    city: city,
                    address: address,
                    postalcode: postalcode
                }, "border", style, "1px solid red");

                if (formValid === false || sexeValid === false)
                    document.getElementById("error_container").textContent = "Veuillez remplir tous les champs";

                if (captchaInput.value != data.captchaResult) {
                    document.getElementById("captcha_error").textContent = "Mauvaise réponse";
                    return;
                }

                if (formValid === true && sexeValid === true) {
                    birthday = year.value + "-" + month.getElementsByTagName("option")[month.selectedIndex].getAttribute("name") + "-" + day.value;

                    client = '{' +
                        '"name"       : "' + lastname.value + '",' +
                        '"firstName"  : "' + firstname.value + '",' +
                        '"sexe"       : "' + sexe + '",' +
                        '"birthday"   : "' + birthday + '",' +
                        '"email"      : "' + email.value + '",' +
                        '"phone"      : "' + phone.value + '",' +
                        '"country"    : "' + country.value + '",' +
                        '"city"       : "' + city.value + '",' +
                        '"address"    : "' + address.value + '",' +
                        '"postalCode" : "' + postalcode.value + '",' +
                        '"password"   : "' + password_1.value + '"' +
                        '}';


                    Core.class.client.signup(client);
                } else {
                    utils.captcha(captchaElement);
                }
            }, false);
        }();
    };

    /**
     * Init the events for the forgetPassword view
     */
    Core.controller.clientSignInAndUp.forgetPassword = function () {
        var showLoginFromForgetPassword;
        var loginContainer, forgerpasswordContainer;

        var iniVariables = function () {
            showLoginFromForgetPassword = document.getElementById("forgetpassword_show_login");

            loginContainer = document.getElementById("loginbox");
            forgerpasswordContainer = document.getElementById("forgetpasswordBox");
        }();
        var showViewEvents = function () {
            utils.addListener(showLoginFromForgetPassword, "click", function () {
                document.getElementById("error_container").textContent = "";
                forgerpasswordContainer.style.display = "none";
                loginContainer.style.display = "inline-block";
            }, false);
        }();
        var requestEvents = function () {
        }();
    };

})();