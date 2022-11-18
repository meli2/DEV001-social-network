export const Register = (onNavigate) => {
  const $section = document.createElement('section');
  $section.className = 'container register';

  $section.innerHTML = `<img class="container__logo-register"src="./img/logo_horizontal.png" alt="logo">

  <h4 class="container__title">Sign Up</h4>
  <form class="container form">
  <input class="input__form" type="email" placeholder="Email" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" title="the format does not match what was requested" required>
  <input class="input__form" type="text" placeholder="Full name" pattern="/ ^ [a-zA-Z] + [a-zA-Z] + $ /" title="Only letters" required>
  <input class="input__form" type="password" placeholder="Password" pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,15}/" title="letters and numbers, minimum 8 characters" required>
  <div id="date" class="container__date">
  <label class="label__date">Date of Birth</label>
  <input class="input__date" type="date" required>
  </div>
  <div class="container__terms-conditions">
  <input class="input__conditions" type="checkbox" required>
  <label class="label__conditions" >I agree with terms and conditions</label>
  </div>
  </form>`;

  const $divButtons = document.createElement('div');
  $divButtons.className = 'container__button-register';

  const $signUpButton = document.createElement('button');
  $signUpButton.type = 'submit';
  $signUpButton.textContent = 'Sign Up';
  $signUpButton.className = 'container__button__signup';

  const $buttonBack = document.createElement('button');
  $buttonBack.textContent = 'Return';
  $buttonBack.className = 'container__button__back';

  $divButtons.append($signUpButton, $buttonBack);

  $section.append($divButtons);

  // button retorna al welcome
  $buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  return $section;
};
