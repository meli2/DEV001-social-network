import { doc, getDoc } from 'firebase/firestore';
import { Menu } from './Menu.js';
import { AddPost } from './AddPost';
import { Posts } from './Posts.js';
import { showAllPosts } from '../controller/wall_controller';
import { db } from '../firebase.js';

export const Wall = () => {
  const $section = document.createElement('section');
  $section.className = 'container container-wall';

  // console.log('userState en wall', user);
  // const uid = localStorage.getItem('uid');
  const uName = localStorage.getItem('uName');
  const uImgProfile = localStorage.getItem('uImgProfile');

  $section.innerHTML = `
    <header class="container-header">
        <img class="container-header__logo" src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/logo_horizontal.png
        " alt="logo">
    </header>

    <section class="container-addPost">
        <div class="container-imgProfile">
            <img class="container-imgProfile__img" src='${uImgProfile}'>
        </div>
        <div class="container-addPost__text" id="addPostBlock" >What are you thinking, ${uName}? </div>
   </section>

   <section class='container-Posts'>
    
    </section>
  
   `;

  showAllPosts((posts) => {
    $section.querySelector('.container-Posts').innerHTML = '';
    const allPosts = [];
    const promises = [];
    posts.forEach((post) => allPosts.push(post));
    posts.forEach((post) => {
      const idPostOwner = post.data().uid;
      const docRef = doc(db, 'users', idPostOwner);
      promises.push(getDoc(docRef));
    });
    Promise.all(promises).then((values) => {
      allPosts.forEach((post, i) => {
        $section.querySelector('.container-Posts').insertAdjacentElement('afterbegin', Posts(post.data(), post.id, values[i].data()));
      });
    }).catch((error) => {
      const errorCode = error.code;
      console.log('Error en obtener el id del propietario del post', errorCode);
    });
  });

  const $addPostElement = $section.querySelector('.container-addPost__text');

  $addPostElement.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('escucha para agregar un post:', e.target);

    if (e.target.getAttribute('id') === 'addPostBlock') {
      console.log('click para agregar un post:', e.target);
      AddPost();
      const $AddPost = document.getElementById('addPostModal');
      $AddPost.style.display = 'block';
    }
  });

  const root = document.getElementById('root');
  root.appendChild(Menu());

  return $section;
};
