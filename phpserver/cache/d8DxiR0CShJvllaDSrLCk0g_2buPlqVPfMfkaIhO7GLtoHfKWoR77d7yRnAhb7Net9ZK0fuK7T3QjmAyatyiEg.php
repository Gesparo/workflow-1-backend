<?php $simpled =false; ?> 
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <title><?php echo \Jade\Compiler::getUnescapedValue($title) ?></title>
    <meta content="Melnik Maksim" name="author"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <meta content="Site-portfolio" name="description"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <meta content="site, portfolio" name="keywords"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <meta content="width=device-width, initial-scale=1" name="viewport"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <meta content="ie=edge" http-equiv="x-ua-compatible"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <link rel="shortcut icon" type="image/ico" href="favicon.ico?v=2"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <link rel="stylesheet" href="assets/css/foundation.css"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
    <link rel="stylesheet" href="assets/css/app.css?v=1"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
        <script src="assets/js/foundation.js" defer<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></script>        <script src="assets/js/app.js?v=1" defer<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></script>    
    <!--[if lt IE 9]>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></script>    <![endif]-->
  </head>
  <body>
    <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'preloader',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
      <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'preloader__spinner',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
        <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'preloader__animation',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></div>
        <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'preloader__percents',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>0%</div>
      </div>
    </div>
    <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'page-intro',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
      <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
        <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__layer',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><img src="assets/img/parallax/Layer_7.png"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__img',
  1 => 'parallax_sky',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></div>
        <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__layer',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><img src="assets/img/parallax/Layer_6.png"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__img',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></div>
        <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__layer',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><img src="assets/img/parallax/Layer_5.png"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__img',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></div>
        <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__layer',
  1 => 'parallax_cloud3',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><img src="assets/img/parallax/cloud_3.png"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__img',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></div>
        <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__layer',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><img src="assets/img/parallax/Layer_4.png"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__img',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></div>
        <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__layer',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><img src="assets/img/parallax/Layer_3.png"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__img',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></div>
        <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__layer',
  1 => 'parallax_cloud2',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><img src="assets/img/parallax/cloud_2.png"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__img',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></div>
        <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__layer',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><img src="assets/img/parallax/Layer_2.png"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__img',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></div>
        <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__layer',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><img src="assets/img/parallax/Layer_1.png"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__img',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></div>
        <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__layer',
  1 => 'parallax_cloud1',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><img src="assets/img/parallax/cloud_1.png"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'parallax__img',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></div>
      </div>
      <header<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'header-intro',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
        <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'fluid-container',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
          <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'auth-block',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><a<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'auth-block__button',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Авторизоваться</a></div>
        </div>
      </header>
      <main<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'main-intro',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
        <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'main-intro__intro-block',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
          <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
            <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__content',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
              <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__front',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__main',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__personal-info',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                    <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'person',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                      <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'person__img-block',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><img src="assets/img/avatar.png"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'person__img',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></div>
                      <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'person__name',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Мельник Максим</div>
                      <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'person__desc',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Личный сайт веб разработчика</div>
                    </div>
                  </div>
                  <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__social-info',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                    <ul<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'social-links',
  1 => 'social-links_theme-aquamarine',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                      <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'social-links__item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><a href="https://vk.com/id67917958" target="_blank"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'social-links__link',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><span<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'fa',
  1 => 'fa_vk',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></span></a></li>
                      <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'social-links__item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><a href="https://github.com/Gesparo" target="_blank"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'social-links__link',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><span<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'fa',
  1 => 'fa_github_alt',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></span></a></li>
                      <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'social-links__item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><a href="#" target="_blank"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'social-links__link',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><span<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'fa',
  1 => 'fa_linkedin',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></span></a></li>
                    </ul>
                  </div>
                </div>
                <ul<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__links',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__links-item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><a href="works.html"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__link',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><span<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__link-text',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Мои работы</span></a></li>
                  <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__links-item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><a href="about.html"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__link',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><span<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__link-text',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Обо мне</span></a></li>
                  <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__links-item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><a href="blog.html"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__link',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><span<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__link-text',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Блог</span></a></li>
                </ul>
              </div>
              <form method="POST" action="/authorization" id="authForm"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__back',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__main',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__header',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                    <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'normal-title',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><span<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'normal-title__text',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Авторизуйтесь</span></div>
                  </div>
                  <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__form-group',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                    <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__input-containter',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                      <label for="formLogin"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__icon-label',
  1 => 'introduction-block_user-icon',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></label>
                      <input type="text" name="login" placeholder="Логин" id="formLogin"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                    </div>
                  </div>
                  <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__form-group',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                    <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__input-containter',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                      <label for="formPassword"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__icon-label',
  1 => 'introduction-block_pass-icon',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>></label>
                      <input type="password" name="password" placeholder="Пароль" id="formPassword"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                    </div>
                  </div>
                  <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__form-group',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                    <input type="checkbox" name="confirmPerson" id="confirmPerson"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__checkbox',
  1 => 'introduction-block_hidden-input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                    <label for="confirmPerson"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__styled-label',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Я человек</label>
                  </div>
                  <h3<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__form-section-header',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Вы точно не робот?</h3>
                  <div<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__form-group',
  1 => 'introduction-block_center-aligned',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                    <input type="radio" id="radConfirmPerson1" name="secondConfirmPerson" value="y" checked<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__radio',
  1 => 'introduction-block_hidden-input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                    <label for="radConfirmPerson1"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__styled-radio',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Да</label>
                    <input type="radio" id="radConfirmPerson2" name="secondConfirmPerson" value="n"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__radio',
  1 => 'introduction-block_hidden-input',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                    <label for="radConfirmPerson2"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__styled-radio',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Не уверен</label>
                  </div>
                </div>
                <ul<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__links',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                  <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__links-item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><a href="/" id="backHome"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__link',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><span<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__link-text',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>На главную</span></a></li>
                  <li<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__links-item',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
                    <button type="submit"<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__button',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>><span<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'introduction-block__link-text',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>Войти</span></button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
    <footer<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'footer-intro',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>
      <p<?php $__classes = implode(" ", array_unique(array_merge(empty($__classes) ? array() : explode(" ", $__classes), array (
  0 => 'footer-intro__content',
), array())) ); ?><?php if (!empty($__classes)) { echo ' class="' . $__classes .'"'; } unset($__classes);  ?>>© Владимир Астахов | создано с любовью в LoftSchool | 2016</p>
    </footer>
  </body>
</html>
